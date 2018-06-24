
var objects = [];


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
            material: imageUrl.finalPlace /*'./asserts/img/final_p.jpg'*/,
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    }
);




for(let i =0 ; i<locations.arr.length; i++){

    objects.push(viewer.entities.add({
        name: '',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray(locations.arr[i]),
            height: 0,
            material: imageUrl.arr[i],
            outline: true,
            outlineColor: Cesium.Color.BLACK
        }
    }));

}

objects.push(finalPlace);
objects[0].polygon.height = 250000;
