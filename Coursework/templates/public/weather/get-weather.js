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
var key = "key=b02b078d-1b64-44b3-90c7-3caacdbd442b";

// var closest;
/*
var getWeather = function(lat,long) {

    getSite(lat,long);

    // var id = site.location.id;

    console.log("ID: " + closest.location.id);


    var forecast = url + "val/wxfcs/all/json/" + id + key;

    $.getJSON(forecast,function(data) {
        console.log(data);
    });


};
*/

var getWeather = function(lat,long) {
    var closest, locations, standpoint;

    var siteList = url + "val/wxfcs/all/json/sitelist?" + key;

    $.getJSON(siteList,function(data){


        // parse the sitelist.json data into an array of Location objects
        locations = parseJSON(data);

        // where you are
        standpoint = new Location(null, "Munro location", lat, long);

        // just interested in the closest location in the list
        closest = getNearest(standpoint, locations);

        console.log("Closest: " + closest.location.id);

        var forecast = url + "val/wxfcs/all/json/" + closest.location.id + "?res=3hourly&" + key;

        $.getJSON(forecast, function(result) {
            console.log(result);
            displayForecast(result);
        })

    });

    // return closest;
};


var displayForecast = function(weather) {

    //Variables
    var date, days, day, i, j, k, output, tab, time;



    //Get 5-day forecasts
    days = weather.SiteRep.DV.Location.Period;

    //display day data
    // console.log(days);

    //For each day
    for (i = 0; i < days.length; i++) {

        // Open table tag for forecasts
        output = "<table class='forecast'><tr>";

        //get forecasts for day
        day = days[i].Rep;

        console.log(day);

        // output = "";
        // output = "<th>6AM</th><th>6AM</th><th>6AM</th><th>6AM</th><th>6AM</th>

        //determine starting forecast (missing out 12am and 3am)
        j = 6 % days.length;

        // if (days.length < 6) {
        //     $('.forecast').find('th').css("width","calc(400px/" + days.length + ")");
        // }

        //for each forecast
        for (j; j < day.length; j++) {

            // if ()

            //Table per forecast
            output += "<td><table><tr>"

            time = parseInt(day[j].$)/60;

            //Time of forecast
            output += "<th>" + time + ":00</th>";

            output += "</tr><tr>";

            // weather icon
            output += "<td><img src='/img/hail-shower-day.png'></td>";



            output += "</tr><tr>";

            // temperature and feels-like-temp
            output += "<td>" + day[j].T + "<br/><span class='fTemp'>" + day[j].F + "</span>";

            output += "</tr><tr>";

            // wind direction
            output += "<td><img src='/img/nne_1.png'></td>";

            output += "</tr><tr>";

            // chance of rain
            output += "<td>" + day[j].Pp + "</td>";

            output += "</tr></table></td>"

        }

        output += "</tr></table>";

        tab = "day" + (i + 1);

        document.getElementById(tab).innerHTML = output;

    }

};

