// waits until page is loaded first
$(document).ready(function() {

	// applies colour red to paragraphs when click on
	$("p").click(function(){
		$("p").addClass("highlight_text");
	});

	// will add lightblue to h2 elements
	$("h2").hover(function(){
		$("h2").addClass("h2_color");
	});

 	/* this will apply larger font size to the active h2 element 
 	by adding the h2_font_size class but
 	not the other h2 elements by removing class h2_font_size from them */

 	$("#hr_html").hover(function(){
 		$("#hr_mysql").removeClass("h2_font_size");
 		$("#hr_python").removeClass("h2_font_size");
 		$("#hr_jquery").removeClass("h2_font_size");
 		$("#hr_django").removeClass("h2_font_size");
 		$("#hr_css").removeClass("h2_font_size");
 		$("#hr_mysql").removeClass("h2_font_size");
 		$("#hr_html").addClass("h2_font_size");
 	});

 	$("#hr_mysql").hover(function(){
 		$("#hr_python").removeClass("h2_font_size");
 		$("#hr_jquery").removeClass("h2_font_size");
 		$("#hr_django").removeClass("h2_font_size");
 		$("#hr_css").removeClass("h2_font_size");
 		$("#hr_html").removeClass("h2_font_size");
 		$("#hr_mysql").addClass("h2_font_size");
 	});

 	$("#hr_python").hover(function(){
 		$("#hr_mysql").removeClass("h2_font_size");
 		$("#hr_jquery").removeClass("h2_font_size");
 		$("#hr_django").removeClass("h2_font_size");
 		$("#hr_css").removeClass("h2_font_size");
 		$("#hr_html").removeClass("h2_font_size");
 		$("#hr_python").addClass("h2_font_size");
 	});

 	$("#hr_jquery").hover(function(){
 		$("#hr_mysql").removeClass("h2_font_size");
 		$("#hr_python").removeClass("h2_font_size");
 		$("#hr_django").removeClass("h2_font_size");
 		$("#hr_css").removeClass("h2_font_size");
 		$("#hr_html").removeClass("h2_font_size");
 		$("#hr_jquery").addClass("h2_font_size");
 	});

 	$("#hr_django").hover(function(){
 		$("#hr_mysql").removeClass("h2_font_size");
 		$("#hr_python").removeClass("h2_font_size");
 		$("#hr_jquery").removeClass("h2_font_size");
 		$("#hr_css").removeClass("h2_font_size");
 		$("#hr_html").removeClass("h2_font_size");
 		$("#hr_django").addClass("h2_font_size");
 	});

 	$("#hr_css").hover(function(){
 		$("#hr_mysql").removeClass("h2_font_size");
 		$("#hr_python").removeClass("h2_font_size");
 		$("#hr_jquery").removeClass("h2_font_size");
 		$("#hr_django").removeClass("h2_font_size");
 		$("#hr_html").removeClass("h2_font_size");
 		$("#hr_css").addClass("h2_font_size");
 	});

 	// apples colour black to body background when the mouse enters over buttons
 	$(".bottom_button").mouseenter(function(){
 		$("body").css("background-color", "black");
 	});

 	// apples colour grey to body background when mouse leaves buttons
 	$(".bottom_button").mouseleave(function(){
 		$("body").css("background-color", "#eee");
 	});

 	// uncomment to see example of hide function

 	/*$("#button_effects1").click(function(){
		$('#button_effects1').hide('slow'); // try slow, medium, fast, 1000
 	});*/

 	// toggle function, unhide and add ID name to see toggle in use.
 	/*$("#button_effects1").click(function(){
		$('#').toggle(1000);
 	});*/

 	// adds slideToggle to buttons to toggle paragraphs open and closed
 	$("#button_effects1").click(function(){ //event handler
 		$('#par1').slideToggle(1000); // event effect (timings/opacity do not need quotation marks)
 	});

 	$("#button_effects2").click(function(){
 		$('#par2').slideToggle(1000);
 	});

 	$("#button_effects3").click(function(){
 		$('#par3').slideToggle(1000);
 	});

 	$("#button_effects4").click(function(){
 		$('#par4').slideToggle(1000);
 	});

 	$("#button_effects5").click(function(){
 		$('#par5').slideToggle(1000);
 	});

 	$("#button_effects6").click(function(){
 		$('#par6').slideToggle(1000);
 	});

 	// adds fadeTo when mouseenter and mouseleave button
 	$("#button_effects1").mouseenter(function(){
 		$('#button_effects1').fadeTo(1000, 0.5);
 	});
 	$("#button_effects1").mouseleave(function(){
 		$('#button_effects1').fadeTo(1000, 1)
 	})

 	$("#button_effects2").mouseenter(function(){
 		$('#button_effects2').fadeTo(1000, 0.5);
 	});
 	$("#button_effects2").mouseleave(function(){
 		$('#button_effects2').fadeTo(1000, 1)
 	});

 	$("#button_effects3").mouseenter(function(){
 		$('#button_effects3').fadeTo(1000, 0.5);
 	});
 	$("#button_effects3").mouseleave(function(){
 		$('#button_effects3').fadeTo(1000, 1)
 	});

 	$("#button_effects4").mouseenter(function(){
 		$('#button_effects4').fadeTo(1000, 0.5);
 	});
 	$("#button_effects4").mouseleave(function(){
 		$('#button_effects4').fadeTo(1000, 1)
 	});

 	$("#button_effects5").mouseenter(function(){
 		$('#button_effects5').fadeTo(1000, 0.5);
 	});
 	$("#button_effects5").mouseleave(function(){
 		$('#button_effects5').fadeTo(1000, 1)
 	});

 	$("#button_effects6").mouseenter(function(){
 		$('#button_effects6').fadeTo(1000, 0.5);
 	});
 	$("#button_effects6").mouseleave(function(){
 		$('#button_effects6').fadeTo(1000, 1)
 	});

}); 
