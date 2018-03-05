var mymap = L.map('mapid').setView([57.1184584,-2.1429013], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZHI5OCIsImEiOiJjamRvY3FlZWowMTV6MnFxbGx6d2wzMnM4In0.ZU7d_lasqNE3eRJq3vol2Q'
}).addTo(mymap);

//var marker = L.marker([57.1184584,-2.1429013]).addTo(mymap);

var greenIcon = L.icon({
    iconUrl: 'img/greenPin_2.png',
    iconSize: [25,38],
    iconAnchor: [12.5,38]
})

var greenMnts = L.icon({
    iconUrl: 'img/greenPin_2.png',
    iconSize: [25,38],
    iconAnchor: [12.5,38]
})

var greenHills = L.icon({
    iconUrl: 'img/greenPin_2.png',
    iconSize: [25,38],
    iconAnchor: [12.5,38]
})

L.marker([57.1184584,-2.1429013], {icon:greenIcon}).addTo(mymap);
L.marker([57.1242826,-2.1434005], {icon: greenMnts}).addTo(mymap);
L.marker([57.1297273,-2.1361615], {icon: greenHills}).addTo(mymap);