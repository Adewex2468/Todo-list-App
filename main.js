let InputBox = document.getElementById("inputItem");
let list = document.getElementById("list");
let inputButton = document.getElementById("addItem");
inputButton.addEventListener("click", ()=>{
    if(InputBox === ""){
        alert("Please enter an item");
    }else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        li.appendChild(span);
    }
    InputBox.value = "";
});


list.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();        
    }
}, false);
