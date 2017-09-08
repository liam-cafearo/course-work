// This line of code ensures that the html page is ready before running the statements below.
$(document).ready(function() {
	// Here we are saying "when we click on a "p" tag"
	$("p").click(function() {
		// Set the children elements (in our case the "a" tag) within the selected p tag (this) to yellow.
		$(this).children("a").css("background-color", "yellow");
	})
}); 
