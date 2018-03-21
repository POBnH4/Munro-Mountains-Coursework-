//- - - - - - - - - - - - slideshow - - - - - - - - - - - - - - -
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i; 
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("dot");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//}
//- - - - - - - - - - - - slideshow end - - - - - - - - - - - - - - -

//$(function(){
//  $('#header_shrink').data('size','big');
//});
//
//$(window).scroll(function(){
//  if($(document).scrollTop() > 0)
//{
//    if($('#header_shrink').data('size') == 'big')
//    {
//        $('#header_shrink').data('size','small');
//        $('#header_shrink').stop().animate({
//            height:'40px'
//        },600);
//    }
//}
//else
//  {
//    if($('#hheader_shrink').data('size') == 'small')
//      {
//        $('#header_shrink').data('size','big');
//        $('#header_nav').stop().animate({
//            height:'100px'
//        },600);
//      }
//  }
//});