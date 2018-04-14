/* JS to get local weather */

/*
$(document).ready(function() {

    // MetOffice DataPoint - list of locations
    var url = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=b02b078d-1b64-44b3-90c7-3caacdbd442b";

    $.getJSON(url,function(data) {
        /* Extract from MetOffice DataPoint
        data-location-search-example > location-search.html

        var closest, locations, output = [], standpoint, i;

        // parse the sitelist.json data into an array of Location objects
        locations = parseJSON(data);

        var lat = document.getElementById('lat').innerHTML;
        var long = document.getElementById('long').innerHTML;


        // where you are
        standpoint = new Location(null, "Your location", document.getElementById('lat').value, document.getElementById('lon').value);

    })
});
*/

var url = "http://datapoint.metoffice.gov.uk/public/data/";
var key = "?key=b02b078d-1b64-44b3-90c7-3caacdbd442b";

// var closest;

var getWeather = function(lat,long) {

    var site = getSite(lat,long);

    var id = site.location.id;

    console.log("ID: " + id);

/*
    var forecast = url + "val/wxfcs/all/json/" + id + key;

    $.getJSON(forecast,function(data) {
        console.log(data);
    });
    */

};


var getSite = function(lat,long) {
    var closest, locations, standpoint;

    var siteList = url + "val/wxfcs/all/json/sitelist" + key;

    $.getJSON(siteList,function(data){


        // parse the sitelist.json data into an array of Location objects
        locations = parseJSON(data);

        // where you are
        standpoint = new Location(null, "Munro location", lat, long);

        // just interested in the closest location in the list
        closest = getNearest(standpoint, locations);

        console.log("Closest: " + closest.location.id);

    });

    return closest;
};


