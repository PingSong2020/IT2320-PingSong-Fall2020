
$(function(){    

    //all of jquery your code goes here
    
    //3) add functionally to "Hide" divs 1-4 when clicking on the "Hide" button
    $("#btn1").on("click",function(){

       $("#wrapper").hide("slow", function(){
           alert("The divs 1-4 are now hidden.");
       });
    });  

    //4) add functionally to "Show" divs 1-4 when clicking on the "Show" button  
    $("#btn2").on("click",function(){
        $("#wrapper").show();
    });

    //5) Add functionally to "Chess Board" button
    $("#btn3").on("click",function(){
        
    alert("The divs 1-4 are now changed.");

    $("#1").css("background","black");
    $("#3").css("background","black");
    $("#2").css("background","white");
    $("#4").css("background","white");
    $("#1").css("color","white");
    $("#3").css("color","white");
    $("#2").css("color","black");
    $("#4").css("color","black");

    var one = $("#1").text();
    console.log(one);
    $("#1").text("one");
    var two = $("#2").text();
    console.log(two);
    $("#2").text("two");
    var three = $("#3").text();
    console.log(three);
    $("#3").text("three");
    var four = $("#4").text();
    console.log(four);
    $("#4").text("four");

    });//Add functionally to "Chess Board" button
   
    //6) mouseover/out function
    $("#1").mouseover(function(){
        $("#1").css("background-color", "yellow");
    });
    $("#1").mouseout(function(){
        $("#1").css("background-color", "lightgray");
    });

    $("#2").mouseover(function(){
        $("#2").css("background-color", "yellow");
    });
    $("#2").mouseout(function(){
        $("#2").css("background-color", "lightgray");
    });
 
    $("#3").mouseover(function(){
        $("#3").css("background-color", "yellow");
    });
    $("#3").mouseout(function(){
        $("#3").css("background-color", "lightgray");
    });

    $("#4").mouseover(function(){
        $("#4").css("background-color", "yellow");
    });
    $("#4").mouseout(function(){
        $("#4").css("background-color", "lightgray");
    });
    // mouseover/out function
})    
