/**
 * Created by caesa on 11/28/2017.
 */

// var viewer = new Cesium.Viewer('cesiumContainer');
var viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false,
    timeline: false
});
viewer.infoBox.frame.removeAttribute('sandbox');
var camera = viewer.camera;
var subject = "אישור השתתפות בחתונה של איתן וגלי המתוקים";
var whatsappLink = "https://api.whatsapp.com/send?phone=972585990055&text=%D7%90%D7%99%D7%A9%D7%95%D7%A8 %D7%94%D7%A9%D7%AA%D7%AA%D7%A4%D7%95%D7%AA %D7%91%D7%97%D7%AA%D7%95%D7%A0%D7%94 %D7%A9%D7%9C %D7%90%D7%99%D7%AA%D7%9F %D7%95%D7%92%D7%9C%D7%99 %D7%94%D7%9E%D7%AA%D7%95%D7%A7%D7%99%D7%9D%E2%9D%A4";
var mailLink = "mailto:test@example.com?subject="+subject+"&body=body";

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





function wrongAnswer(Entity) {

    viewer.selectedEntity = null;
    viewer.zoomTo(falseAnswer);
    setTimeout(function() {

        viewer.flyTo(Entity).then(function(result){
            if (result) {
                viewer.selectedEntity = Entity;
            }
        });
        setTimeout(function() {
            // viewer.selectedEntity = Entity;
            console.log('falseAnswer',randInt(0,10));
            falseAnswer.polygon.material = falsePictures[randInt(0,10)];
        }, 1000);
    }, 2500);

}
function goodAnswer(thisQ,Entity) {

    viewer.selectedEntity = null;
    viewer.flyTo(Entity).then(function (result) {
            if (result) {
                viewer.selectedEntity = Entity;
            }
        });
}





setTimeout(function() {
    falseAnswer.polygon.material = falsePictures[randInt(0,10)];
    viewer.flyTo(Q1);
}, 2000);


