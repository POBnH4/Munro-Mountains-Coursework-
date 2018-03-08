var mymap = L.map('mapid').setView([56.8189342,-4.0756789], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZHI5OCIsImEiOiJjamRvY3FlZWowMTV6MnFxbGx6d2wzMnM4In0.ZU7d_lasqNE3eRJq3vol2Q'
}).addTo(mymap);

//var marker = L.marker([57.1184584,-2.1429013]).addTo(mymap);

/*
var greenIcon = L.icon({
    iconUrl: 'img/greenPin_2.png',
    iconSize: [25,40],
    iconAnchor: [12.5,40]
})

var greenMnts = L.icon({
    iconUrl: 'img/greenPin_2.png',
    iconSize: [25,40],
    iconAnchor: [12.5,40]
})

var greenHills = L.icon({
    iconUrl: 'img/greenPin_2.png',
    iconSize: [25,40],
    iconAnchor: [12.5,40]
})
*/


//Icon Class for Custom Pins
var mntIcon = L.Icon.extend({
    options: {
        iconSize: [25,40],
        iconAnchor: [12.5,40]
    }
});

/*
customPin = L.marker.extend({
    options: {
        mName: "";
    }
    
});
*/


//Pins for different difficulties/"bagged" munros
var greenIcon = new mntIcon({iconUrl: 'img/greenPin.png'}),
    yellowIcon = new mntIcon({iconUrl: 'img/yellowPin.png'}),
    redIcon = new mntIcon({iconUrl: 'img/redPin.png'}),
    blueIcon = new mntIcon({iconUrl: 'img/bluePin.png'});


var m1 = L.marker([57.1184584,-2.1429013], {icon:greenIcon});
m1.addTo(mymap);
L.marker([57.1242826,-2.1434005], {icon: yellowIcon}).addTo(mymap);
L.marker([57.1297273,-2.1361615], {icon: redIcon}).addTo(mymap);

//Ben Nevis - Test Marker
var blue = L.marker([56.79685,-5.003508], {icon:blueIcon});

blue.mName = "Ben Nevis";

blue.addTo(mymap);

//Function to open modal
function openBox(e) {
//    document.getElementById('mName').innerHTML("<p>" + e.latLng + "</p>");
    var munro = document.getElementById("mName");
    munro.innerHTML = e.target.mName;
    var modal = document.getElementById("popup");
    modal.style.display = "flex";
}

//Add Name tooltip to marker
blue.bindTooltip("Ben Nevis", {direction:"top", offset:[0,-40]}).openTooltip();

//Marker on click use function to open info panel
var munro = "Ben Nevis";
blue.on('click',openBox);


//blue.on('mouseover',showName);

//blue.addTo(mymap);

//blue.bindPopup("Ben Nevis").openPopup();

//blue.addTo(mymap);

/*
blue.on('click',onClick);

function onClick(e) {
    alert("Hello World");
}
*/

//Pop-Up JS Code


var modal = document.getElementById("popup");

//var btn = document.getElementById('openBox');
//var btn = blue;

var span = document.getElementById('close');


//blue.on('click',openBox());

//function openBox() {
//    modal.style.display = "block";
//}

//blue.addTo(mymap);

/*
btn.onclick = function() {
    modal.style.display = "block";
}
*/

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}













