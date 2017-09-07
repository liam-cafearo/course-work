$(document).ready(function() {
	$(".stream-nav").on("click", function() {
		/**
		 * When we click on an element that has
		 * a 'stream-nav' class, this event will be fired.
		 */
		// This variable is receiving the ".stream-nav" id (stream1, 2, 3) 
		var elementId = $(this).attr("id");
		// this Variable is then selecting the card class
		// then it is is recieving the card class' full class so "card stream1" for example
		// then its splitting the string into card and stream1 for example
		// then the [0] is selecting the card string
		var cardClass = $(".card").attr("class").split(" ")[0];

		
		// ("." + elementId) this is selecting the element id of the stream-nav
		// and making it into a class, for example we would have .stream1
		// Then is is checking the background-color of the classes == to the id selected in the nav
		// is equal to the rgb color
		if ($("." + elementId).css("background-color") == "rgb(235, 82, 85)") {
		// If the background color of the selected id from the nav is equal the rgb value 
		// the below statement changes it to white.
			$("." + elementId).css("background-color", "#fff");

		} else {
			// if the above if statement conditions are false then the below executes
			// This statement sets all the divs with the card class to white
			$("." + cardClass).css("background-color", "#fff");
			// and then this sets anything with a stream1,2 or 3 class to red when selected.
			$("." + elementId).css("background-color", "rgb(235, 82, 85)");

		}
	});
}); 
