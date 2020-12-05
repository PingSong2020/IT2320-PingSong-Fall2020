$(function(){
  var message1 = "Let's begin! Remember the cards...";
  var message2 = "Click on any 2 cards to find a match!";
  var message3 = "Hi, find a match.";
  var message4 = "please keep trying...";
  var message5 = "All matching sets found and game over.";

  var select1 = undefined;

  var select2 = undefined;

  var timeOut
  var matching = 0; 
 
    //1.clicks on "Star a new game"
    $("#newGame").on("click",function() 
    {
                      $("#container img").show(0,function(){
                        $(this).css('opacity','1')
                        .hide(0,function(){
                          $("#messages").text(message1);
                        })
                        
                        .show(5000, function(){
                          $("#messages").text(message2);
                          $(this).css('opacity', '0');
                        })                   
                    });          
    });

    //2.user clicks on blue square, the image in that square should be come visible
    var container = document.getElementById("container");
    var elems = container.getElementsByTagName("img");
    
    for (var i =0; i< elems.length; i++){
      elems[i].addEventListener("click", function(){
        rotation(this);
    })
  }
  
  function rotation(elem){

    if(select1 == undefined){// show first card
      select1 = $(elem);
      select1.css('opacity', '1');

       function aniRotate(d){
        $({deg: 0}).animate({deg: d}, {
            step: function(now, fx){
                $(elem).css({
                     transform: "rotate(" + now + "deg)"
                });
            }
        });
    }
  
    aniRotate(360);

       timeOut = setTimeout(function(){  
       if(select2 == undefined){
        select1.css('opacity', '0');
        select1 = undefined;
       }else if(select1.attr('src') != select2.attr('src')){
        select1.css('opacity', '0');
       select1 =undefined;
       select2.css('opacity', '0');
       select2 = undefined;
         $("#messages").text(message4);
       }
      }, 2000);

    }else if (select2 == undefined){ //show second card: works
      select2 = $(elem);
      select2.css('opacity', '1');

      function aniRotate(d){
        $({deg: 0}).animate({deg: d}, {
            step: function(now, fx){
                $(elem).css({
                     transform: "rotate(" + now + "deg)"
                });
            }
        });
    }
  
    aniRotate(360);

      if (select1.attr('src') == select2.attr('src')){
        $("#messages").text(message3);
        select1.css('opacity','1');
        select2.css('opacity', '1');

        matching +=1;
        select1 = undefined;
        select2 =  undefined;
      } 
    }
  
      if (matching == 6){//matchi
        $("#messages").text(message5);
      }
  
    }

});
