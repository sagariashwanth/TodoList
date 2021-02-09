var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var button = document.getElementById("enter");

function inputLength(){
    return input.value.length;
}

function createNewListItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode
        (input.value));
    ul.appendChild(li);  
    input.value = "";  
    }

function addListAfterClick() {
    if (inputLength() > 0) {
        createNewListItem();
        }
    else{
        alert("Please enter something!");
    }    
    }    

function addListAfterKeypress(e){
    if(inputLength() > 0 && e.which === 13){
        createNewListItem();
    }
}

input.addEventListener("keypress",addListAfterKeypress);

button.addEventListener("click", addListAfterClick);
