/* This specifies the exact element (object) that’s targeted. 
When working with the Document Object Model (DOM), this refers to the selected or active node. 
jQuery will assign the active element to the “this” keyword. */

$(document).ready(function() {
	$(".box").on("click", function() {
		// When we click on an element that has as 'box' class, this event will be fired.
		var classNames = $(this).attr("class").split(" ");
		$("." + classNames(1)).css("background-color", "red");
	}); 
});