var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');
var i;

 for (i = 0; i < acc.length; i++) {
     acc[i].onclick = function() {
         var setClasses = !this.classList.contains('active');
         setClass(acc,'active','remove');
         setClass(panel,'show','remove');

         if (setClasses) {
             this.classList.toggle("active");
             this.nextElementSibling.classList.toggle("show");
         }
     }
 }

 function setClass(els,className,fnName) {
     for (i = 0; i < els.length; i++) {
         els[i].classList[fnName](className);
     }
 }

$(function() {
  $('.accordion').button(function() {
    addItemToList("example item");
    return false;
  });
});

function addItemToList(item) {
  $('.results').append("<ul>" + item + "</ul>");
}

function getResultsFromDB(searchterms) {
  var url = "munrodata.json" + searchterms;
  $,getJSON(url, function(jsondata) {
    // prettyPrintJSON(jsondata);
    addResults(jsondata);
  });
}

// function prettyPrintJSON(jsondata) {
//   var pretty = JSON.stringify(jsondata, null, 4);
//   $('.panel').append("<a>" + pretty + "</a>")
// }

function addResults(jsondata) {
  var htmlstring = "";
  for(var i = 0; i < 10; i++) {
    var munro = jsondata.Search[i].Munro;
    htmlstring += "<ul>" + name + "</ul>";
  }
  $(".results").html(htmlstring);
}
