var input = document.getElementsByClassName("inputField");
var addBtn = document.querySelector(".inputField button");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
    else{
        alert("Please enter something to add!");
    }
}

function addListAfterKeypress(ev){
    if(inputLength() > 0 && ev.keycode === 13){
        createListElement();
    }

}

// onkeyup event
// input.onkeyup() = ()=> {
//     if(inputLength() > 0){
//         addBtn.classList.add("active");
//     }
//     else{
//         addBtn.classList.remove("active");
//     }
// }

addBtn.addEventListener("click",addListAfterClick);


input.addEventListener("keypress",addListAfterKeypress);