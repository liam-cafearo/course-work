$(document).ready(function() {
	// removes class makeRed, add class makeBorder on mouseenter.
	$("button").mouseenter(function(){ // events before methods and use an anonymous function
		$("button").removeClass("makeRed").addClass("makeBorder");
	});

	// reverses above on mouseleave
	$("button").mouseleave(function(){
		$("button").removeClass("makeBorder").addClass("makeRed");
	});

	// toggles paragraphs when either button is clicked
	$("button").click(function(){
		$("p").slideToggle(2000);
	});

	// hides/shows paragraphs when either button is clicked
	$("button").click(function(){
		$("p").hide(2000).show(2000);
	});

	// fadeIn and fadeOut on paragraphs when either button is clicked
	$("button").click(function(){
		$("p").fadeIn().fadeOut();
	});
}); 
