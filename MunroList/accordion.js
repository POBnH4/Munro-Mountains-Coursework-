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

$(document).ready(function() {

  $(acc).click(function() {
    var displayMunros = $(panel);

    $.ajax( {
      type: "GET",
      url: "munrodata.json",
      success: function(result)
      {
        console.log(result.munros);
        var munros = result.munros;

        var output = "<table><tbody>";
        for (var i in munros)
        {
          output+="<tr><td>" + munros[i].name + "</td><td>"
          + munros[i].region + "</td><td>" + munros[i].height + "</td></tr>";
        }
        output+="</tbody></table>";

        displayMunros.html(output);
        $("table").addClass("table");
      }
    });
  });
});
