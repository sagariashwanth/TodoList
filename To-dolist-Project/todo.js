
var input = document.getElementById("user_input");
var addBtn = document.getElementById("add");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
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

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

addBtn.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);
// click on the trash icon to hide the current list item

var trash = document.getElementsByClassName("far");

for(var i=0;i < trash.length;i++){
    trash[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}