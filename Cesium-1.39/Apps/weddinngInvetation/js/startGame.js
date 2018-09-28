/**
 * Created by caesa on 11/28/2017.
 */

Cesium.BingMapsApi.defaultKey = 'AuuP9UJpY_7d3-SqEP81ZmlqrZnH8wJVQF5jHVJO12QLcNMLfQxifx5aSUY-kvgW';
// var viewer = new Cesium.Viewer('cesiumContainer');
var providerViewModels = [];
providerViewModels.push(new Cesium.ProviderViewModel({
    name : 'Bing Maps Aerial with Labels',
    iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/bingAerialLabels.png'),
    tooltip : 'Bing Maps aerial imagery with label overlays \nhttp://www.bing.com/maps',
    creationFunction : function() {
        return new Cesium.BingMapsImageryProvider({
            url : '//dev.virtualearth.net',
            mapStyle : Cesium.BingMapsStyle.AERIAL_WITH_LABELS
        });
    }
}));

//
// var viewer = new Cesium.Viewer('cesiumContainer', {
//     animation: false,
//     timeline: false,
//     imageryProviderViewModels : providerViewModels,
//     selectedImageryProviderViewModel : providerViewModels[0],
//     // terrainProviderViewModels : terrainViewModels,
//     // selectedTerrainProviderViewModel : terrainViewModels[1]
// });




var viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false,
    timeline: false,
    baseLayerPicker:false,
    vrButton:true,
    geocoder:false,
    homeButton:false,
    // infoBox:false,
    sceneModePicker:false,
    selectionIndicator:false,
    navigationHelpButton:false,
    // navigationInstructionsInitiallyVisible:false,
    scene3DOnly:true,
});
viewer.infoBox.frame.removeAttribute('sandbox');
viewer.infoBox.allowScripts = true;
var camera = viewer.camera;


var subjectHead = "אישור השתתפות בחתונה של איתן וגלי המתוקים";
var subjectBody =  `שם מלא:  
        מספר משתתפים:
         איתן וגלי החמודים, אני אשמח להשתתף בשמחתכם
           ואני מאחל לכם חיים מאושרים וארוכים
`;
var subject = `אישור השתתפות בחתונה של איתן וגלי המתוקים❤
איתן וגלי החמודים, אני אשמח להשתתף בשמחתכם😇
ואני מאחל לכם חיים מאושרים וארוכים.
שם מלא:
מספר משתתפים:
`;


var calendar = {
    url:'http://www.google.com/calendar/event',
    action: 'TEMPLATE',
    text:'החתונה של איתן וגלי המהממים',
    dates:'20180305T153000Z/20180305T205900Z',
    details:`קבלת פנים 19:00 
חופה וקידושין 20:00
`,
    location:'אולמי שרון כפר סבא, משעול גיל 1, כפר סבא, ישראל'
};

var whatsappLink = "https://api.whatsapp.com/send?phone=972504311556&text="+encodeURIComponent(subject);
var mailLink = "mailto:galid65432@gmail.com?subject="+subjectHead+"&body="+subjectBody;
var addToCalendar = calendar.url+`?action=`+calendar.action+`&text=`+calendar.text+`&dates=`+calendar.dates+`&details=`+calendar.details+`&location=`+calendar.location;
// mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News
//


function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

document.addEventListener('keydown', function(e) {
    setKey(e);
}, false);

function setKey(event) {
    var horizontalDegrees = 10.0;
    var verticalDegrees = 10.0;
    var viewRect = camera.computeViewRectangle();
    if (Cesium.defined(viewRect)) {
        horizontalDegrees *= Cesium.Math.toDegrees(viewRect.east - viewRect.west) / 360.0;
        verticalDegrees *= Cesium.Math.toDegrees(viewRect.north - viewRect.south) / 180.0;
    }

    if (event.keyCode === 39) {  // right arrow
        camera.rotateRight(Cesium.Math.toRadians(horizontalDegrees));
    } else if (event.keyCode === 37) {  // left arrow
        camera.rotateLeft(Cesium.Math.toRadians(horizontalDegrees));
    } else if (event.keyCode === 38) {  // up arrow
        camera.rotateDown(Cesium.Math.toRadians(verticalDegrees));
    } else if (event.keyCode === 40) {  // down arrow
        camera.rotateUp(Cesium.Math.toRadians(verticalDegrees));
    }

}

function PressKey() {
    var horizontalDegrees = 3.0;
    var verticalDegrees = 3.0;
    var viewRect = camera.computeViewRectangle();
    if (Cesium.defined(viewRect)) {
        horizontalDegrees *= Cesium.Math.toDegrees(viewRect.east - viewRect.west) / 360.0;
        verticalDegrees *= Cesium.Math.toDegrees(viewRect.north - viewRect.south) / 180.0;
    }

    this.arrowRight= ()=>{
        camera.rotateRight(Cesium.Math.toRadians(horizontalDegrees));
    }
    this.arrowLeft = ()=>{
        camera.rotateLeft(Cesium.Math.toRadians(horizontalDegrees));
    }
    this.arrowUp = ()=>{
        camera.rotateDown(Cesium.Math.toRadians(verticalDegrees));
    }
    this.arrowDown = ()=>{
        camera.rotateUp(Cesium.Math.toRadians(verticalDegrees));
    }
}
// let pressKey = new PressKey();



function wrongAnswer(Entity) {

    viewer.selectedEntity = null;
    viewer.zoomTo(falseAnswer);
    setTimeout(function() {

        viewer.zoomTo(Entity).then(function(result){
            if (result) {
                viewer.selectedEntity = Entity;
            }
        });
        setTimeout(function() {
            // viewer.selectedEntity = Entity;
            console.log('falseAnswer',randInt(0,10));
            falseAnswer.polygon.material = falsePictures[randInt(0,9)];
        }, 100);
    }, 2800);

}

function goodAnswer(thisQ,Entity) {
    thisQ.description = goodAnswerDes[randInt(0, goodAnswerDes.length)];
    let duration = 1.0;
    if(isMobileDevice){
        viewer.flyTo(Entity,{
            duration :duration,
            offset : {
                heading : Cesium.Math.toRadians(0.0),
                pitch : Cesium.Math.toRadians(-80.0),
            }
        }).then(function (result) {
            if (result) {
                //move the image little bit up
                let pressKey = new PressKey();
                let i = 0;
                var moveUp = setInterval(()=>{
                    pressKey.arrowDown();
                    i++;
                    if(i === 10){
                        clearInterval(moveUp);
                    }
                },50);
                viewer.selectedEntity = Entity;
            }
        });
    }else {
        viewer.flyTo(Entity,{
            duration :duration,
        }).then(function (result) {
            if (result) {
                viewer.selectedEntity = Entity;
            }
        });
    }




}

let weddingPlaceProprty = {
    name : 'אולמי השרון כפר סבא',
    position : Cesium.Cartesian3.fromDegrees(locations.weddingPlace[0],locations.weddingPlace[1]),
    point : {
        pixelSize : 8,
        color : Cesium.Color.BLUE,
        outlineColor : Cesium.Color.WHITE,
        outlineWidth : 3
    },
    label : {
        text : 'אבס רפכ ןורשה ימלוא',
        font : '14pt monospace',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth : 2,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(0, -9)
    }
}

function toWeddingPlace() {
    // finalPlace.description = weddingPlace2;
    finalPlace.name = "הגעת לאולם";
    let weddingPlace = viewer.entities.add(weddingPlaceProprty);

    // weddingPlace.description = weddingPlace2;
    weddingPlace.description = finalPlace.description;

    viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(locations.weddingPlace[0],locations.weddingPlace[1],locations.weddingPlace[2]),
        duration : 20.0
    });
}




setTimeout(function() {
    falseAnswer.polygon.material = falsePictures[randInt(0,10)];
    viewer.flyTo(cesiumObjects[0]);
    // viewer.flyTo(finalPlace);
}, 2000);


