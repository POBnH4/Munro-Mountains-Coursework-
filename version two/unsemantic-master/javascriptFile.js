<script>
  var currentIndex = 0;
  slideshow();

  function slideshow() {
    var i;
    var store = document.getElementsByClassName("images");
    for (i = 0; i < store.length; i++) {
      store[i].style.display = "none";
    }
    currentIndex++;
    if (curremtIndex > store.length) {
      currentIndex = 1;
    }
    store[currentIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change the image every 5 seconds;
  }
  </script>
