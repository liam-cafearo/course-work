$(document).ready(function(){
    $("button").click(function(){
        $(this).next().slideToggle("slow");
    });
});