$(document).ready(() => {
	$("#about").on("mouseenter", () => {
	  $("#about-description").slideDown();
	}).on("mouseleave", () => {
	  $("#about-description").slideUp();
	});
	
	/*
	 * Name: checkValidity
	 * Input: The five values from the form.
	 * Output: An array containing a boolean value for each input.
	 * About: checkValidity does two tests with isNaN() and parseFloat() to
	 * determine whether each of the five form values is a number. It then
	 * returns an array with a value of true or false (on whether it is
	 * numerical) for each of the five values.
	 */
	function checkValidity(i, f, d, t, a) {
		var iValid = !isNaN(i) && !isNaN(parseFloat(i));
		var fValid = !isNaN(f) && !isNaN(parseFloat(f));
		var dValid = !isNaN(d) && !isNaN(parseFloat(d));
		var tValid = !isNaN(t) && !isNaN(parseFloat(t));
		var aValid = !isNaN(a) && !isNaN(parseFloat(a));
		
		return [iValid, fValid, dValid, tValid, aValid];
	}
	
	// The ids for the form.
	const $i_v = $("#i_velocity");
	const $f_v = $("#f_velocity");
	const $d = $("#distance");
	const $t = $("#time");
	const $a = $("#acceleration");
	
	// The ids for the output box.
	const $i_v_value = $("#i_v_value");
	const $f_v_value = $("#f_v_value");
	const $d_value = $("#d_value");
	const $t_value = $("#t_value");
	const $a_value = $("#a_value");
	
	$i_v.val(sessionStorage.getItem("$i_v"));
	$f_v.val(sessionStorage.getItem("$f_v"));
	$d.val(sessionStorage.getItem("$d"));
	$t.val(sessionStorage.getItem("$t"));
	$a.val(sessionStorage.getItem("$a"));
		
	$i_v_value.text(sessionStorage.getItem("$i_v_value"));
	$f_v_value.text(sessionStorage.getItem("$f_v_value"));
	$d_value.text(sessionStorage.getItem("$d_value"));
	$t_value.text(sessionStorage.getItem("$t_value"));
	$a_value.text(sessionStorage.getItem("$a_value"));
	
	$("#submit").on("click", () => {
		var valid = checkValidity($i_v.val(), $f_v.val(), $d.val(), $t.val(),
			$a.val()); // Checks if the number of valid inputs given.
		var numValid = 0;
		
		for (var i = 0; i < valid.length; i++) {
			
		}
		
		
		if (valid > 3) { // Return array which says which are valid?
			
		} else {
			alert("Please enter at least 3 numerical values.");
		}
		
		
		sessionStorage.setItem("$i_v", $i_v.val());
		sessionStorage.setItem("$f_v", $f_v.val());
		sessionStorage.setItem("$d", $d.val());
		sessionStorage.setItem("$t", $t.val());
		sessionStorage.setItem("$a", $a.val());
		
		sessionStorage.setItem("$i_v_value", $i_v.val());
		sessionStorage.setItem("$f_v_value", $f_v.val());
		sessionStorage.setItem("$d_value", $d.val());
		sessionStorage.setItem("$t_value", $t.val());
		sessionStorage.setItem("$a_value", $a.val());
	});
	
	$("#clear").on("click", () => {
		sessionStorage.setItem("$i_v", "");
		sessionStorage.setItem("$f_v", "");
		sessionStorage.setItem("$d", "");
		sessionStorage.setItem("$t", "");
		sessionStorage.setItem("$a", "");
		
		sessionStorage.setItem("$i_v_value", "---");
		sessionStorage.setItem("$f_v_value", "---");
		sessionStorage.setItem("$d_value", "---");
		sessionStorage.setItem("$t_value", "---");
		sessionStorage.setItem("$a_value", "---");
	});
});