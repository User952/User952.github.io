$(document).ready(() => {
	$("#about").on("mouseenter", () => {
	  $("#about-description").slideDown();
	}).on("mouseleave", () => {
	  $("#about-description").slideUp();
	});
	
	/*
	 * Name: checkValidity.
	 * Input: The initial velocity, final velocity, distance, time, and
	 * acceleration values from the form.
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
	
	/*
	 * Name: calculateInitialVelocity.
	 * Input: The final velocity, distance, time, and acceleration values from
	 * the form.
	 * Output: The calculated inital velocity.
	 * About: This function takes in four of the form's inputs and calculates
	 * the inital velocity from them. If one of them happen to missing
	 * (represented as undefined), the function will utilize the other three
	 * values instead.
	 */
	function calculateInitalVelocity(f, d, t, a) {
		return 11; // Placeholder.
	}
	
	function calculateFinalVelocity(i, d, t, a) {
		return 22;
	}
	
	function calculateDistance(i, f, t, a) {
		return 33;
	}
	
	function calculateTime(i, f, d, a) {
		return 44;
	}
	
	function calculateAcceleration(i, f, d, t) {
		return 55;
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
			$a.val()); // Checks for the number of valid inputs given.
		var numValid = 0; // The amount of valid inputs.
		var initialVelocity;
		var finalVelocity;
		var distance;
		var time;
		var acceleration;
		
		for (var i = 0; i < valid.length; i++) {
			if (valid[i]) {
				numValid++;
				
				switch(i) { // Assigning the valid values.
					case 0:
						initialVelocity = parseFloat($i_v.val());
						break;
					case 1:
						finalVelocity = parseFloat($f_v.val());
						break;
					case 2:
						distance = parseFloat($d.val());
						break;
					case 3:
						time = parseFloat($t.val());
						break;
					case 4:
						acceleration = parseFloat($a.val());
						break;
				}
			}
		}
		
		/*
		 * No computations will be performed if all values are numerical, even
		 * if they are incorrect.
		 */
		if (numValid >= 5) {
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
		} else if (numValid >= 3) { // At least three valid inputs are needed.
			if (!valid[0]) { // No given initial velocity.
				initialVelocity = calculateInitalVelocity(finalVelocity,
					distance, time, acceleration);
			}
			
			if (!valid[1]) {
				finalVelocity = calculateFinalVelocity(initialVelocity,
					distance, time, acceleration);
			}
			
			if (!valid[2]) {
				distance = calculateDistance(initialVelocity,
					finalVelocity, time, acceleration);
			}
			
			if (!valid[3]) {
				time = calculateTime(initialVelocity, finalVelocity, distance,
					acceleration);
			}
			
			if (!valid[4]) {
				acceleration = calculateAcceleration(initialVelocity,
					finalVelocity, distance, time);
			}
			
			sessionStorage.setItem("$i_v", initialVelocity);
			sessionStorage.setItem("$f_v", finalVelocity);
			sessionStorage.setItem("$d", distance);
			sessionStorage.setItem("$t", time);
			sessionStorage.setItem("$a", acceleration);
			
			sessionStorage.setItem("$i_v_value", initialVelocity);
			sessionStorage.setItem("$f_v_value",finalVelocity);
			sessionStorage.setItem("$d_value", distance);
			sessionStorage.setItem("$t_value", time);
			sessionStorage.setItem("$a_value", acceleration);
		} else {
			alert("Please enter at least 3 numerical values.");
		}
		
		/*
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
		*/
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