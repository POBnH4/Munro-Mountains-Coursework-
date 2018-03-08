// var acc = document.getElementsByClassName("accordion");
// var panel = document.getElementsByClassName('panel');
// var i;
//
//  for (i = 0; i < acc.length; i++) {
//      acc[i].onclick = function() {
//          var setClasses = !this.classList.contains('active');
//          setClass(acc,'active','remove');
//          setClass(panel,'show','remove');
//
//          if (setClasses) {
//              this.classList.toggle("active");
//              this.nextElementSibling.classList.toggle("show");
//          }
//      }
//  }
//
//  function setClass(els,className,fnName) {
//      for (i = 0; i < els.length; i++) {
//          els[i].classList[fnName](className);
//      }
//  }

// $(function() {
//   $('#searchform').submit(function() {
//     var searchterms = $("#searchterms").val();
//     getResultsFromDB(searchterms);
//     return false;
//   });
// });

// function addItemToList(item) {
//   $('#results').append("<li>" + item + "</li>");
//   // $("div").append("<p>" + item + "</p>");
// }

// function getResultsFromDB(searchterms) {
//   var url = "munrodata.json" + searchterms;
//   $,getJSON(url, function(jsondata) {
//     // prettyPrintJSON(jsondata);
//     addResults(jsondata);
//   });
// }

$(document).ready(function() {

  //$('#accordion').click(function() {
    var displayMunros = $('#accordion');

    $.ajax({
      type: "GET",
      url: "munrodata.json",
      success: function(result)
      {
        console.log(result.munros);
        var munros = result.munros;

        for(var i =0;i<munros.length;i++)
        {
          var output = "<h4>" + munros[i].name + "</h4>";
          output += "<div class='whiteback'><p>Region: " + munros[i].region + "</p><p>Height: " + munros[i].height + "</p><p>Latitude: " + munros[i].latitude + "</p><p>Longitude: " + munros[i].longitude + "</p><p>Grid Reference: " + munros[i].gridReference + "</p>";
          output += "</div>";
          displayMunros.append(output);
        }


        //$("div").addClass("div");
        $( "#accordion" ).accordion();
      }
    //});
  });
});

// function prettyPrintJSON(jsondata) {
//   var pretty = JSON.stringify(jsondata, null, 4);
//   $('.panel').append("<a>" + pretty + "</a>")
// }

// function addResults(jsondata) {
//   var htmlstring = "";
//   for(var i = 0; i < 10; i++) {
//     // var munro = jsondata.Search[i].Munro;
//     htmlstring += "<div>" + "<p>" + name + "</p>" + "</div>";
//   }
//   $(".results").html(htmlstring);
// }
