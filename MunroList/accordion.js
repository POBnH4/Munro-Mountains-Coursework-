$(document).ready(function() {
    var displayMunros = $('#accordion');

    $.ajax({
      type: "GET",
      url: "munrodata.json",
      success: function(result)
      {
        console.log(result.munros);
        var munros = result.munros;

        for(var i = 0; i < munros.length; i++)
        {
          var output = "<h4>" + munros[i].name + "</h4>";
          output += "<div class='whiteback'><p>Region: " + munros[i].region + "</p><p>Height: " + munros[i].height + "</p><p>Latitude: " + munros[i].latitude + "</p><p>Longitude: " + munros[i].longitude + "</p><p>Grid Reference: " + munros[i].gridReference + "</p>";
          output += "</div>";
          displayMunros.append(output);
        }
        $( "#accordion" ).accordion();
      }
  });
});

$(document).ready(function() {
   $(window).scroll(function() {
      if($(document).scrollTop() > 10) {
         $('#header_shrink').addClass('shrink');
      } else {
         $('#header_shrink').removeClass('shrink');
      }
  });
});

// function getSortOrder(prop) {
//   return function(a, b) {
//     if(a[prop] > b[prop]) {
//       return 1;
//     } else if (a[prop] < b[prop]) {
//       return -1;
//     }
//     return 0;
//   }
// }
// $('#height').click(function() {
//   munros.sort(getSortOrder("height"));
//   for(var items in munros) {
//     document.write("<div>" + munros[item].height + "</div>");
//   }
// });
