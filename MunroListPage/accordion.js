var acc = document.getElementsByClassName("accordion");
var panel = document.getElementByClassName('panel');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    var setClasses = !this.classList.contains('active');
    setlass(acc, 'active', 'remove');
    setClass(panel, 'show', 'remove');

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
}

function setClass(els, className, fnName) {
  for(i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}

// //Searches for elements with class name "accordion"
// var acc = document.getElementsByClassName("accordion");
//
// //Counter variable
// var i;
//
// //For every occurrence of "accordion"
// for (i = 0; i < acc.length; i++) {
//   acc[i].onclick = function() {
//     //Adds class "active" to the "accordion" elements
//     this.classList.toggle("active");
//     //Adds class "show" to the "panel" elements
//     this.nextElementSibling.classList.toggle("show");
//   }
// }
