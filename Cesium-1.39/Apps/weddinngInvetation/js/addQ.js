


var Q1 = viewer.entities.add({
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
        material: './asserts/img/InkedQ_1_11.jpg',
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }
});
Q1.polygon.height = 250000;


var Q2 = viewer.entities.add({
    name:'שאלה שניה',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
            145.6001141667366,-32.025114493862056,
            145.61650782823563,-32.02489618777724,
            145.61650782823563,-32.03493772917942,
            145.60050196524912,-32.03482871982786
        ]),
        height: 0,
        material: './asserts/img/good/q2.jpg',
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }
});

var Q3 = viewer.entities.add({
    name:'שאלה שלישית',
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
            -30.385093688964844,71.66323089667497,
            -27.968101501464844,71.66323089667497,
            -27.814292907714844,71.11632592884088,
            -30.331663020908252,71.1209533055771
        ]),
        height: 0,
        material: './asserts/img/good/q3.jpg',
        outline: true,
        outlineColor: Cesium.Color.BLACK
    }
});


