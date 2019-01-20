$(document).ready(() => {
    $("#about").on("mouseenter", () => {
	  $("#about-description").slideDown();
	}).on("mouseleave", () => {
	  $("#about-description").slideUp();
	});
	
	$("#instructions").on("mouseenter", () => {
	  $("#instructions-description").slideDown();
	}).on("mouseleave", () => {
	  $("#instructions-description").slideUp();
	});	
});