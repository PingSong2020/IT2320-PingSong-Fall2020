$(function(){
    //Up button
    $("#up").on("click", function(){
        $("#box").stop();

        $("#box").animate({
            top: "0px"
        }, 4000);
    });

     //Down button
     $("#down").on("click", function(){
        $("#box").stop();

        $("#box").animate({
            top: "350px"
        }, 4000);
    });

    //left
    $("#left").on("click", function(){
        $("#box").stop();

        $("#box").animate({
            left: "0px"
        }, 4000);
    });

    //right
    $("#right").on("click", function(){
        $("#box").stop();

        $("#box").animate({
            left: "350px"
        }, 4000);
    });

    //FadeOUT
    $("#fadeout").on("click", function(){
        $("#box").stop();

        $("#box").fadeOut(4000);
    });

    //fadeIn
    $("#fadein").on("click", function(){
        $("#box").stop();

        $("#box").fadeIn(4000);
    });

    //Blink
    $("#blink").on("click", function(){
        $("#box").stop();

        setInterval(function(){
        $("#box").fadeOut(function(){
            $(this).fadeIn();
        });
        }, 10 );  

    });

     //reset
    $("#reset").on("click", function(){


        $("#box").stop().fadeIn().animate({
            left: "0px",
            top: "0px"
        }, 100);

    });

});
