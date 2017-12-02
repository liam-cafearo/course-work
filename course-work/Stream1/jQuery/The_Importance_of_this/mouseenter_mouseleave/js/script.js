/* This specifies the exact element (object) that’s targeted. 
When working with the Document Object Model (DOM), this refers to the selected or active node. 
jQuery will assign the active element to the “this” keyword. */

$('button').mouseenter(function() {
	$(this).removeClass('makeRed').addClass('makeBlue'); 
});

$('button').mouseleave(function() {
	$(this).removeClass('makeBlue').addClass('makeRed');
});