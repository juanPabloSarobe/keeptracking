var map = L.map('map').setView([ -38.95499 , -68.08582], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([ -38.95499 , -68.08582]).addTo(map);

var circle = L.circle([ -38.95499 , -68.09582], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [ -38.96499 , -68.05882],
    [ -38.85499 , -68.16582],
    [ -38.85499 , -68.07582]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([ -38.96499 , -68.10582])
    .setContent("I am a standalone popup.")
    .openOn(map);




