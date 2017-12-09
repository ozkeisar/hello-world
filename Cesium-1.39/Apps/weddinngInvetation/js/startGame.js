/**
 * Created by caesa on 11/28/2017.
 */

var viewer = new Cesium.Viewer('cesiumContainer');
viewer.infoBox.frame.removeAttribute('sandbox');
var camera = viewer.camera;

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

var falseAnswer = viewer.entities.add({
    name:'תשובה לא נכונה',
    position: Cesium.Cartesian3.fromDegrees(64.0304011, -153.1812666),
    ellipse : {
        semiMinorAxis : 2500.0,
        semiMajorAxis : 4000.0,
        material : './asserts/img/img1.png',
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }});

var question_1 = viewer.entities.add({
    name: 'שאלה ראשונה',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
            -109.080842, 45.002073,
            -105.91517, 45.002073,
            -104.058488, 44.996596,
            -104.053011, 43.002989,
            -104.053011, 41.003906,
            -105.728954, 40.998429,
            -107.919731, 41.003906,
            -109.04798, 40.998429,
            -111.047063, 40.998429,
            -111.047063, 42.000709,
            -111.047063, 44.476286,
            -111.05254, 45.002073]),
        height: 0,
        // material : Cesium.Color.RED.withAlpha(0.5),
        material: './asserts/img/img1.png',
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }
});

var finalPlace = viewer.entities.add({
    name:'הגעת לסוף!!',
    position: Cesium.Cartesian3.fromDegrees(32.177692, 34.892425),
    ellipse : {
        semiMinorAxis : 2500.0,
        semiMajorAxis : 4000.0,
        material : './asserts/img/img1.png',
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }});


function wrongAnswer(Entity) {
    console.log('falseAnswer');
    viewer.zoomTo(falseAnswer);
    setTimeout(function() {

        viewer.flyTo(Entity);
    }, 2000);

}
function goodAnswer(Entity) {
    viewer.flyTo(Entity)
        .then(function(result){
            if (result) {
                viewer.selectedEntity = Entity;
            }
        });
}
// function goTofinalPlace() {
//     viewer.flyTo(finalPlace);
// }


setTimeout(function() {
    //do what you need here

    question_1.description = '\
    <span dir="rtl">\
<h2>\
מהו שמו המלא של איתן?\
</h2>\
       <p>1. <button style="color: BLACK"\
    onClick="parent.goodAnswer(parent.finalPlace)">איתן ישראל קיסר</button></p> \
    <p>1. <button style="color: BLACK"\
    onClick="parent.wrongAnswer(parent.question_1)">איתן קיסר</button></p> \
    <p>1. <button style="color: BLACK"\
    onClick="parent.wrongAnswer(parent.question_1)">איתן ישועה קיסר</button></p> \
</span>';

    // var ellipse = wyoming.ellipse;
    // ellipse.material = '//cesiumjs.org/images/2015/02-02/cats.jpg';

    // viewer.zoomTo(wyoming);
    viewer.flyTo(question_1);
}, 2000);


