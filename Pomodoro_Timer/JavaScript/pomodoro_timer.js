/* global $ */

$(function() {
	$('#about').on('click', function() {
	  $('#about-description').slideToggle();
	});
	
	$('#instructions').on('click', function() {
	  $('#instructions-description').slideToggle();
	});
	
	/*
	DATE METHODS
	(When a Date object is created, a number of methods make it possible to perform
	    operations on it.)
	(https://api.sololearn.com/DownloadFile?id=2772)
	--------------------
	var d = new Date();
	var hours = d.getHours();
	//hours is equal to the current hour
	--------------------
	--------------------
	(Let's create a program that prints the current time to the browser once every
	    second.)
	
	function printTime() {
	  var d = new Date();
	  var hours = d.getHours();
	  var mins = d.getMinutes();
	  var secs = d.getSeconds();
	  document.body.innerHTML = hours+':'+mins+':'+secs;
	}
	setInterval(printTime, 1000);
	
	(We declared a function printTime(), which gets the current time from the date
	    object, and prints it to the screen. We then called the function once every
	    second, using the setInterval method.)
	--------------------
	(The innerHTML property sets or returns the HTML content of an element. In our
	    case, we are changing the HTML content of our document's body. This
	    overwrites the content every second, instead of printing it repeatedly to
    	the screen.)
  	*/
});