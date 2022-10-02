const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter")
        addItem();
})

function addItem() {
    const task = input.value;

    if (!task){
        alert("please fill out task");
        return;
    }

    var divParent = document.createElement('div');
    var divChild = document.createElement('div');

    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");
    var editIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = "<div>"+input.value+"</div>";

    checkIcon.className = "fa-regular fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "green";
        divParent.style.textDecoration = "line-through";
    })

    editIcon.className = "fa-solid fa-pen-to-square";
    editIcon.style.color = "lightgray";
    editIcon.addEventListener("click", function(){
        input.value = divParent.innerText;
        const edit = editIcon.parentElement.parentElement;
        edit.parentElement.removeChild(edit);

    }) 

    divChild.appendChild(checkIcon);
    divChild.appendChild(editIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = "";
   
}