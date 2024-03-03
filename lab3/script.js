const dom {
    new-task: document.getElementById('')
    add-btm: document.getElementById('')
    delete-all-btm: document.getElementById('')
    tasks: document.getElementById('')
}

//
/*
const input = document.querySelector("input");
const addButton = document.querySelector(".add-button");
const todosHtml = document.querySelector(".todos");
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];

function getTodoHtml(todo, index) {
    let checked = todo.status === "completed" ? "checked" : "";
    return `
        <li class="todos">
            <label for="${index}" onclick="updateStatus(this)" type="checkbox" ${checked}>
                ${todo.name}
            </label>
            <span onclick="deleteTodo(${index})" class="delete-button">❌</span>
        </li>
    `;
}

function addTodo() {
    const todoName = input.value;
    if (todoName) {
        const todo = {
            name: todoName,
            status: "pending"
        };
        todosJson.push(todo);
        updateTodosHtml();
        input.value = "";

        localStorage.setItem("todos", JSON.stringify(todosJson));
    }
}

function deleteTodo(index) {
    todosJson.splice(index, 1);
    updateTodosHtml();

    localStorage.setItem("todos", JSON.stringify(todosJson));
}

function updateStatus(label) {
    const index = parseInt(label.getAttribute("for"));
    todosJson[index].status = label.checked ? "completed" : "pending";

    localStorage.setItem("todos", JSON.stringify(todosJson));
}

function updateTodosHtml() {
    todosHtml.innerHTML = todosJson.map((todo, index) => getTodoHtml(todo, index)).join("\n");
}

addButton.addEventListener("click", addTodo);

updateTodosHtml();
*/