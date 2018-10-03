$(document).ready(() => {
	$("#about").on("mouseenter", () => {
	  $("#about-description").slideDown();
	}).on("mouseleave", () => {
	  $("#about-description").slideUp();
	});
	
	document.getElementById("i_velocity").value = localStorage.getItem("i_v");
	document.getElementById("i_v_value").innerHTML = localStorage.getItem("i_v");
	
	document.getElementById("f_velocity").value = localStorage.getItem("f_v");
	document.getElementById("f_v_value").innerHTML = localStorage.getItem("f_v");
	
	document.getElementById("distance").value = localStorage.getItem("d");
	document.getElementById("d_value").innerHTML = localStorage.getItem("d");
	
	document.getElementById("time").value = localStorage.getItem("t");
	document.getElementById("t_value").innerHTML = localStorage.getItem("t");
	
	document.getElementById("acceleration").value = localStorage.getItem("a");
	document.getElementById("a_value").innerHTML = localStorage.getItem("a");
	
	$("#submit").on("click", () => {
		var i_v = document.getElementById("i_velocity").value;
		var f_v = document.getElementById("f_velocity").value;
		var d = document.getElementById("distance").value;
		var t = document.getElementById("time").value;
		var a = document.getElementById("acceleration").value;
		
		localStorage.setItem("i_v", i_v);
		localStorage.setItem("f_v", f_v);
		localStorage.setItem("d", d);
		localStorage.setItem("t", t);
		localStorage.setItem("a", a);
		
		/*$("#i_v_value").text(localStorage.getItem("i_v"));
		$("#f_v_value").text(localStorage.getItem("f_v"));
		$("#d_value").text(localStorage.getItem("d"));
		$("#t_value").text(localStorage.getItem("t"));
		$("#a_value").text(localStorage.getItem("a"));*/
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});