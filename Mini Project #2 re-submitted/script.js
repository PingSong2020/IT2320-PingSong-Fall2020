//Global area
window.onload = function() {///
    //Try and use classname to get a group of divs instead of getting them one by one by id
    //if you are writing the same type of code multiple times, you are doing it incorrect
    
    //Attach events using eventlistener here
    var elems = document.getElementsByClassName("col");//Elements!!! there is "s"


for (var i=0; i< elems.length; i++){  

    elems[i].addEventListener("click", function(){
        userTurn(this);  
    });    
 
}
for (var i=0; i< elems.length; i++){ // elems to tris: same result

    elems[i].addEventListener("trigger", function(){
           computerTurn(this); 
    });

} 

   var reset = document.getElementById("reset");
   reset.addEventListener("click", resetGameBoard);


}///

 /************** Function area *******************/
    
    //function provided. Add parameter(s) if needed
    function userTurn(elem)
    {
            elem.style.backgroundColor = "green";
            elem.innerHTML = "X"; 
            determineWinner(elem);
    }
    
    //function provided. Add parameter(s) if needed
    function computerTurn(elem)//elem to tri: same result
    {
       for (var i=0; i< elem.length; i++){  
         if (elem === ""){ 
                elem.style.backgroundColor = "green";
                elem.innerHTML = "O"; 
                break;
        }  
         //code here
        }
        determineWinner(elem);
    }

    function determineWinner(elem){
        var winningPos =[[0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]];
    
    winningPos.forEach(function (winCom) {//winCom
        var pos0InnerHTML =positions[winCom[0]].innerHTML;
        var pos1InnerHTML =positions[winCom[0]].innerHTML;
        var pos2InnerHTML =positions[winCom[0]].innerHTML;
        var isWin= pos0InnerHTML !=="" &&
        pos0InnerHTML === pos1InnerHTML && pos1InnerHTML===pos2InnerHTML;
        if (isWin){
           
            winCom.forEach(function ()  { 

               
            })
        }

    });
for (var i=0; i< elem.length; i++){  
    
    var message = document.getElementsById("message").value;

    if( elem === winningPos){
        message.context = "Game Over";
    }

    if( elem === winningPos && elem == "X"){
            message.context = "User is the winner!!!";
        break;
    }

    else {
        message.context = "Computer is the winner!!!";
    break;
    }
} 

}

    function resetGameBoard(){
        
        var cols = document.getElementsByClassName("col");
        for (var i=0; i< cols.length; i++){  
            cols[i].style.backgroundColor = "";
            cols[i].innerHTML = ""; 
        }
            var status = document.getElementById("status");
            status.innerHTML ="";
            status.innerHTML = "This is a new game!!! Click on any of the squares to start the game";

            var message = document.getElementById("message");/
            message.innerHTML = "";
            
    }

    
