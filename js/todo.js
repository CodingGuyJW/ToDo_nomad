const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem( TODOS_KEY, JSON.stringify(toDos) );
}

function deleteToDo(event){
    const elementLi = event.target.parentElement;
    elementLi.remove();
    toDos = toDos.filter( toDo => toDo.id !== parseInt(elementLi.id) );
    saveToDos();
}

function paintTodo(newTodo){
    const elementLi = document.createElement("li");
    elementLi.id = newTodo.id;
    const elementSpan = document.createElement("span");
    elementSpan.innerText = newTodo.text;
    const elementButton = document.createElement("button");
    elementButton.innerText = "❌";
    elementButton.addEventListener("click",deleteToDo);
    // appendChild - last
    elementLi.appendChild(elementSpan);
    elementLi.appendChild(elementButton);
    toDoList.appendChild(elementLi);
}

function handleToDoSubmit(event){
    event.preventDefault();
    // coping current value into new variable
    const newTodo = toDoInput.value;
    // empty input element
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

function onHide(){
    document.querySelector("#quote span:first-child").classList.add("hidden");
    document.querySelector("#quote span:last-child").classList.add("hidden");
}
function onShow(){
    document.querySelector("#quote span:first-child").classList.remove("hidden");
    document.querySelector("#quote span:last-child").classList.remove("hidden");
}

if(window.innerWidth <= 768){
    toDoInput.addEventListener("focus",onHide);
    toDoInput.addEventListener("blur",onShow);
}
