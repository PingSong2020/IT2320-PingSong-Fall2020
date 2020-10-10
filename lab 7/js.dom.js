  
/*********************************************************************/
//Global Area
window.onload = function(){
    //DOM related code will be here
    //All event listeners go inside window.onload
    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", createLink);//function name only; donnot us ().

    var btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", removeLink);

    var btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", changeColor);

    var btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", changeSquares);

    var btn5 = document.getElementById("btn5");
    btn5.addEventListener("click", changeShape);
}


/***************** Function definition area *************/
//write a function to change the size of the box (css)
function createLink(){
    var parent = document.getElementById("parentLink");

    var child = document.createElement("link1");//a to link1
    child.classList.add("link1");// add a link

    parent.appendChild(child);

}

function removeLink(){
    var parent = document.getElementById("parentLink");

    var child = parent.lastElementChild;

    parent.removeChild(child);
}

function changeColor(){/// works
    var c = document.getElementById("inputColor").value;
    var boxs = document.getElementById("box");
    boxs.style.backgroundColor = c;
}

function changeSquares(){///works
    var squares = document.getElementsByClassName("square1");
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "black";
    }

    var squares = document.getElementsByClassName("square2");
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "grey";//white to grey
    }

}

function changeShape(){///works
    var square = document.getElementsByClassName("square1");
    for(var i = 0; i < square.length; i++){
        var r = document.getElementById("inputRadius").value;
        square[i].style.borderRadius = r;
    }
}

