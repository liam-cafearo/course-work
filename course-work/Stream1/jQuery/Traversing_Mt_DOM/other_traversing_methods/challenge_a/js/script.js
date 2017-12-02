// waits until the page is ready before running the script.
$(document).ready(function(){
    
    // You will need to hide each one to see them working seperately.

    // hides all panels when a panel is clicked
    $(".theButton").click(function(){
        // selects the id panel and the class container.
        $("#panel .container").siblings().hide();
    });
    // hides only the selected panel.
    $(".theButton").click(function(){
        $(this).hide();
    });
    // when a panel is clicked all siblings fade to 10% opacity
    $(".theButton").click(function(){
        $("#panel .container").siblings().fadeTo(1000, .5);
    });
    // when reset is pressed the panels return to full opacity
    $(".superButton").click(function(){
        $("#panel .container").siblings().fadeTo(1000, 1);
    });
    // When the mouse hovers over a panel it turns black.
    $(".theButton").mouseenter(function(){
        $(this).addClass("makeBlack");
    });
    // when the mouse leaves the panel its returned to its original color.
    $(".theButton").mouseleave(function(){
        $(this).removeClass("makeBlack");
    });
});