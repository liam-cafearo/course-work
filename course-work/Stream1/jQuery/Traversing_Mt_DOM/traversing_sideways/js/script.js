// Waits till page is ready.
$(document).ready(function() {
	$("img").click(function() {
		// slides down paragraph directly under image when img is clicked
		$(this).next().children("p").slideDown();
	});
	// Changes background-color of elements with .card class to pink and then toggles this off when clicked again.
	$(".card").click(function() {
		$(this).toggleClass("highlight");
	});
});
