
var cesiumObjects = [];


var finalPlace = viewer.entities.add({
        name: 'הגעת להזמנה',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray([
                35.6497610360384,32.7404663227442,
                35.65503962337971,32.74050242007817,
                35.655103996396065,32.73763263639971,
                35.64970743433264,32.7376597273307
            ]),
            height: 0,
            material: imageUrl.finalPlace ,
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    }
);

var falseAnswer = viewer.entities.add({
    name:'תשובה לא נכונה',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
            -57.362022399902344,-17.45940269194599,
            -54.703330993652344,-17.464642709350755,
            -54.65239778591348,-19.32863158655128,
            -57.323570251464844,-19.343540769982056
        ]),
        height: 0,
        material: falsePictures[randInt(0,10)],
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }

});
falseAnswer.polygon.height = 4250000;



for(let i =0 ; i<locations.arr.length; i++){

    cesiumObjects.push(viewer.entities.add({
        name: objects[i].text.name,
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray(locations.arr[i]),
            height: 0,
            material: objects[i].imageUrl,
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    }));

}

cesiumObjects.push(finalPlace);
cesiumObjects[0].polygon.height = 250000;
