// creates our beautiful initial map

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 48.210, lng: 16.363} //focus on Vienna
  });

  map.data.loadGeoJson("https://verteilte-systeme.s3.eu-central-1.amazonaws.com/Gespeicherte_Orte.json");
  console.log(map.data.loadGeoJson)

  //
  // // ab hier händisch ein paar Punkte eingegeben
  // marker1 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 48.210, lng: 16.363}
  // });  //Vienna
  // marker2 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 50.110, lng: 8.682}
  // });  //Frankfurt
  // marker3 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 25.105, lng: 121.597}
  // }); // Taipei
  // marker4 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: -33.865, lng: 151.209}
  // }); // Sydney
  // marker5 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 34.052, lng: -118.243}
  // }); // Los Angeles
  // marker6 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 27.964, lng: -82.452}
  // }); // Tampa
  // marker7 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 38.930, lng: -77.070}
  // }); // DC
  // marker8 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 30.266, lng: -97.733}
  // }); // Austin
  // marker9 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 41.390, lng: 2.154}
  // }); // Barcelona
  // marker10 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 34.923, lng: 33.634}
  // }); // Larnaca
  // marker11 = new google.maps.Marker({position: {lat: 35.1733304, lng: 33.3598620}, map: map});//kipros
  // marker12 = new google.maps.Marker({position: {lat: 34.7694331, lng: 32.4123040}, map: map});//new york plaza
  // marker13 = new google.maps.Marker({position: {lat: 34.9883410, lng: 33.9880430}, map: map}); //kaos
  // marker14 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 43.942360, lng: 12.457777}
  // }); // San Marino
  // marker15 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 43.516387, lng: 16.250189}
  // }); // Trogir
  // marker16 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 45.748872, lng: 21.208679}
  // }); // Timisoara
  // marker17 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 53.551085, lng: 9.993682}
  // }); // Hamburg
  // marker18 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 52.367984, lng: 4.903561}
  // }); // Amsterdam
  // marker19 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 51.507351, lng: -0.127758}
  // }); // London
  // marker20 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 32.514947, lng:-117.038247}
  // }); // Tijuana
  // marker21 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: -35.2453497, lng:150.5373218}
  // }); // Bendalong
  // marker22 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 37.7865046, lng:-122.4095896}
  // }); // San Francisco
  // marker23 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 35.3233393, lng:-112.8577941}
  // }); // Seligman
  // marker24 = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   position: {lat: 41.8929646, lng:12.5085791}
  // }); // Rom
  //
  //
  // // ab hier ein paar Flüge händisch eingegeben
  // geodesicPoly = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly2 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly3 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly4 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly5 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly6 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly7 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly8 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly9 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  // geodesicPoly10 = new google.maps.Polyline({
  //   strokeColor: '#CC0099',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  //   geodesic: true,
  //   map: map
  // });
  //
  // update();
}

//
// function update() {
//   var path = [marker1.getPosition(), marker2.getPosition()];
//   var path2 = [marker1.getPosition(), marker3.getPosition()];
//   var path3 = [marker3.getPosition(), marker4.getPosition()];
//   var path4 = [marker2.getPosition(), marker5.getPosition()];
//   var path5 = [marker2.getPosition(), marker7.getPosition()];
//   var path6 = [marker7.getPosition(), marker6.getPosition()];
//   var path7 = [marker6.getPosition(), marker8.getPosition()];
//   var path8 = [marker8.getPosition(), marker5.getPosition()];
//   var path9 = [marker1.getPosition(), marker9.getPosition()];
//   var path10 = [marker1.getPosition(), marker10.getPosition()];
//
//   geodesicPoly.setPath(path);
//   geodesicPoly2.setPath(path2);
//   geodesicPoly3.setPath(path3);
//   geodesicPoly4.setPath(path4);
//   geodesicPoly5.setPath(path5);
//   geodesicPoly6.setPath(path6);
//   geodesicPoly7.setPath(path7);
//   geodesicPoly8.setPath(path8);
//   geodesicPoly9.setPath(path9);
//   geodesicPoly10.setPath(path10);
// }
//
// function setMarker(map, feature) {
//     var latLng = feature.getGeometry().get();
//     var marker = new google.maps.Marker({
//         position: latLng,
//         map: map
//     });
// }
