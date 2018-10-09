/* Navigation bar */
function collapse() { /* Expands the collapsable navigation bar */
  var x = document.getElementById("navigationBar");
  
  if (x.className === "nav") {
    x.className += " utilized";
  } else {
    x.className = "nav";
  }
}

var collapsed = false;

function changeIcon() {
  var icon = document.getElementsByClassName("icon")[0].firstElementChild;
  
  if (collapsed) {
    collapsed = false;
    icon.className = "fas fa-bars";
  } else {
    collapsed = true;
    icon.className = "fas fa-times";
  }
}
/* End of navigation bar */

/* Image carousel and buttons */
var images = ["Personal_Website/Images/carousel-slide_1.jpg",
  "Personal_Website/Images/carousel-slide_2.jpg",
  "Personal_Website/Images/carousel-slide_3.jpg"];
var num = 0;

function previous() { // To be used by left-div.
  if(--num < 0) {
    num = images.length - 1;
  }
  
  document.getElementById("carousel").src = images[num];
}

function next() { // To be used by right-div.
  if(++num >= images.length) {
    num = 0;
  }
    
  document.getElementById("carousel").src = images[num];
}

setInterval(next, 3000); // Change the slideshow image every three seconds.
/* End of image carousel and buttons */