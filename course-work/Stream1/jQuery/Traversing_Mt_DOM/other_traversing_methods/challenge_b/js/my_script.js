// will wait till page ready to run script.
$(document).ready(function() {
	// When a table header is clicked
	$("th").click(function(){
		// this statement removes the "selection" class 
		// from all children (in this case the <th> tag) of the <tr> tag.
		$("tr").children().removeClass("selection");
		// This statement adds the class "selection" 
		// to (this) selected table header and its siblings (<td>) row only.
		$(this).siblings().addClass("selection");
	});
});