window.onscroll = function() {myFunction()};

var header = document.getElementById("nav_bar_wrapper");
header.classList.add("stick");


var banner = document.getElementById("banner_wrapper");
var sticky = header.offsetTop;
console.log(sticky)


function myFunction() {
  if (window.pageYOffset > sticky) {
  	header.classList.remove("stick");
    header.classList.add("sticky");

  } else {
  	header.classList.add("stick");
    header.classList.remove("sticky");
  }
}