$(document).ready(() => {
	$("#about").on("mouseenter", () => {
	  $("#about-description").slideDown();
	}).on("mouseleave", () => {
	  $("#about-description").slideUp();
	});
	
	const $i_v = $("#i_velocity");
	const $f_v = $("#f_velocity");
	const $t = $("#time");
	const $a = $("#acceleration");
	const $d = $("#distance");
	
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