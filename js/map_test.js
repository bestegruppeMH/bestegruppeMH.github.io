// creates our beautiful initial map

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 48.210, lng: 16.363} //focus on Vienna
  });

map.data.loadGeoJson("/Gespeicherte_Orte.json");
  console.log(map.data.loadGeoJson)
  
}