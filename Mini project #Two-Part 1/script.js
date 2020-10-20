//Global area
window.onload = function() {
    //Try and use classname to get a group of divs instead of getting them one by one by id
    //if you are writing the same type of code multiple times, you are doing it incorrect
    
    //Attach events using eventlistener here
    var elems = document.getElementsByClassName("col");

    for(var i=0; i< elems.length; i++){

        elems[i].addEventListener("click", function(){
            userTurn(this);
        });
    };

    var elems2 = document.getElementsByClassName("col");
    for(var i=0; i< elems2.length; i++){

        elems2[i].addEventListener("trigger", function(){//click to trigger
          computerTurn(this);//userTurn() to computerTurn
     })
     
   }

}
    
    /************** Function area *******************/
    
    //function provided. Add parameter(s) if needed
    function userTurn(elem)
    {
            elem.style.backgroundColor = "green";
            elem.innerHTML = "X";
        //Add code here
    }
    
    //function provided. Add parameter(s) if needed
    function computerTurn(elem)
    {
      var pattern = /[^X||^O]/;
    
       if (pattern.test(elem.value))
       {
        elem.style.backgroundColor = "green";
           elem.innerHTML = "O";
        
       }
       
       else 
           elem.style.backgroundColor = "";
           elem.innerHTML = "";
        
        //Add code here
    }

