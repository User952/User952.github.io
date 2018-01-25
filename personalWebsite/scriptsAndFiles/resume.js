var images = ["personalWebsite/scriptsAndFiles/carousel-slide_1.jpg",
    "personalWebsite/scriptsAndFiles/carousel-slide_2.jpg",
    "personalWebsite/scriptsAndFiles/carousel-slide_3.jpg"];
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
