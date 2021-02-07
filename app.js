// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// Event Listeners
todoButton.addEventListener("click", addTodo);
// Functions

function addTodo(event) {
    // Prevent from submiting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check mark button
    const complededButton = document.createElement('button');
    complededButton.innerHTML = '<i class="fas fa-check"></i>';
    complededButton.classList.add("complete-btn");
    todoDiv.appendChild(complededButton);
    // check trash button
    const trashButton= document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";
}