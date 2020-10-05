  
/*********************************************************************/
//Global Area




/***************** Function definition area *************/
//write a function to change the size of the box (css)
function createLink(){
    var parent = document.getElementById("parentLink");

    var child = document.createElement("a");
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
        squares[i].style.backgroundColor = "white";
    }
}

function changeShape(){///works
    var square = document.getElementsByClassName("square1");
    for(var i = 0; i < square.length; i++){
        var r = document.getElementById("inputRadius").value;
        square[i].style.borderRadius = r;
    }
}

