$(document).ready(function() {
	$(".stream-nav").on("click", function() {
		/**
		 * When we click on an element that has
		 * a 'stream-nav' class, this event will be fired.
		 */
		// not entirely sure what the two variables are doing
		// i know that element id is saying the stream-nav you click on
		// recieve the attribute id (is that correct?)
		var elementId = $(this).attr("id");
		// this one i understand that its selecting the .card class and then receiving the
		// class of .card class and then splitting it where there is a space (is that correct?)
		// not sure what the [0] is, i know its an array reference but to what?
		var cardClass = $(".card").attr("class").split(" ")[0];
		// is this selecting the .card class, then splitting the the class so you have
		// card[0] and stream1, 2 and 3 etc as [1]
		// still not sure what the [0] on the end is

		.// here is what i think these are saying:
		if ($("." + elementId).css("background-color") == "rgb(235, 82, 85)") {
			// the "." means its selecting a class correct? So is it saying
			// the class recieved, if the background colour is red 
			$("." + elementId).css("background-color", "#fff");
			// make the background white?

			// what i don't get is in the var its selecting it via Id (stream1) then the
			// if statement is selecting it by class "." (stream1)
			// so the if statement is matching an id to a class is that correct?

		// this i believe is doing the reversal of the above?
		} else {
			$("." + cardClass).css("background-color", "#fff");
			// this is saying if the background-color is white
			$("." + elementId).css("background-color", "rgb(235, 82, 85)");
			// set it to red?

			// becasue im not sure what the [0] im not sure on the else statement?
		}
	});
}); 
