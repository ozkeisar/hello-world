


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

var objects = [];



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

// var Q1 = viewer.entities.add({
//     name: '',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             -109.080842, 45.002073,
//             -105.91517, 45.002073,
//             -104.058488, 44.996596,
//             -104.053011, 43.002989,
//             -104.053011, 41.003906,
//             -105.728954, 40.998429,
//             -107.919731, 41.003906,
//             -109.04798, 40.998429,
//             -111.047063, 40.998429,
//             -111.047063, 42.000709,
//             -111.047063, 44.476286,
//             -111.05254, 45.002073]),
//         height: 0,
//         material: imageUrl.Q1/*'./asserts/img/InkedQ_1_11.jpg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
objects[0].polygon.height = 250000;

//
// var Q2 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             145.6001141667366,-32.025114493862056,
//             145.61650782823563,-32.02489618777724,
//             145.61650782823563,-32.03493772917942,
//             145.60050196524912,-32.03482871982786
//         ]),
//         height: 0,
//         material: imageUrl.Q2/*'./asserts/img/good/q2.jpg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
// var Q3 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             -30.385093688964844,71.66323089667497,
//             -27.968101501464844,71.66323089667497,
//             -27.814292907714844,71.11632592884088,
//             -30.331663020908252,71.1209533055771
//         ]),
//         height: 0,
//         material: imageUrl.Q3/*'./asserts/img/good/q3.jpg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
//
//
// var Q4 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             34.76499684154987,32.08735369437486,
//             34.76905234158039,32.087371874153824,
//             34.769224002957344,32.085262995671634,
//             34.765050503855264,32.0852993693967
//         ]),
//         height: 0,
//         material: imageUrl.Q4/*'./asserts/img/good/q4.jpg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
//
//
// var Q5 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             35.09862072765827,32.17444781992721,
//             35.10289080440998,32.17455679446031,
//             35.10297863509845,32.1717597401684,
//             35.09848328644944,32.1717688294325
//         ]),
//         height: 0,
//         material: imageUrl.Q5/*'./asserts/img/good/q5.JPG'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
//
//
//
// var Q6 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             34.96026249602437,29.549850656769742,
//             34.96107252314687,29.549855323421323,
//             34.96110334523706,29.54935132380377,
//             34.9602644504144,29.54935599089640
//         ]),
//         height: 0,
//         material: imageUrl.Q6/*'./asserts/img/good/q6.jpg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
// var Q7 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             35.38856282830238,31.451652600701845,
//             35.39255595531654,31.451652600701845,
//             35.39259687066078,31.44945595968893,
//             35.38865268263885,31.44945596905344
//         ]),
//         height: 0,
//         material: imageUrl.Q7/*'./asserts/img/good/q7.jpg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
//
// var Q8 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             2.3130619525909424,48.878913139139236,
//             2.390652894973755,48.8807194031716,
//             2.3940861225128174,48.84729295916473,
//             2.312387373829665,48.846620043130
//         ]),
//         height: 0,
//         material: imageUrl.Q8/*'./asserts/img/good/q8.jpeg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
//
// var Q9 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             34.76222578436136,32.06815496600778,
//             34.764393009245396,32.06822770037562,
//             34.76444665342569,32.067063943548675,
//             34.76223115540324,32.06700939529838
//         ]),
//         height: 0,
//         material: imageUrl.Q9/*'./asserts/img/good/q9.jpg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
//
// var Q10 = viewer.entities.add({
//     name:'',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             46.914710998535156,15.64287417935967,
//             48.815345764160156,15.63229449968329,
//             48.881263732910156,14.486541809732534,
//             46.922301930208164,14.52519075638728
//         ]),
//         height: 0,
//         material: imageUrl.Q10/*'./asserts/img/good/q10.jpeg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
//
// var Q11 = viewer.entities.add({
//     name:'שאלה אחרונה',
//     polygon: {
//         hierarchy: Cesium.Cartesian3.fromDegreesArray([
//             30.193272829055786,48.75389701257956,
//             30.23412823677063,48.75389701257956,
//             30.23584485054016,48.736238542881864,
//             30.194821294146095,48.7361262180267
//         ]),
//         height: 0,
//         material: imageUrl.Q11/*'./asserts/img/good/q11.jpeg'*/,
//         outline: true,
//         outlineColor: Cesium.Color.BLACK
//     }
// });
//
