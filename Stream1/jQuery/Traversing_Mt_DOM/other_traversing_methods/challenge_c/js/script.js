// waits until page ready before loading scripts.
$(document).ready(function(){
    // When a panel with the class "theButton" is clicked
    $(".theButton").click(function(){
        // this variable stores the selected panel's "background-color"
        // so that we can reference it later
        var col = $(this).css("background-color");
        // This statement is saying change the panel with class "superButton"
        // to the background color of the variable col
        // and display the text value (rgb color)
        // of the background-color property of the selected panel.
        $(".superButton").css("background-color", col).text(col);
    });
});