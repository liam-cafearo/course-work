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
	// Selecting the id we added to the HTML, when clicked on
	$("#select_btn").click(function(){
		// .card:not(.highlight) == Select all .card classes except those with class="highlight"
		// .hide == hides the the ones not selected.
		$(".card:not(.highlight)").hide();
	});
	// all cards will selected/re-appear. #all_btn is the id we added to the HTML
	$("#all_btn").click(function(){
		// show all elements with a class of .card
		// we don't use (this) because we are selecting a different part of CSS
		$(".card").show();
	});
});