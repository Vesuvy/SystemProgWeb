const dom = {
    new_task : document.getElementById('new-task'),
    add_btm : document.getElementById('add-btm'),
    delete_all_btm : document.getElementById('delete-all-btm'),
    tasks : document.getElementById('tasks'),
    count : document.getElementById('count')
}

const tasks = [] // массив задач

// отследить клик по кнопку Добавить задачу
dom.add_btm.onclick = () => {
    const newTaskText = dom.new_task.value
    if (newTaskText && isNotHaveTask(newTaskText, tasks)) {
        addTask(newTaskText, tasks)
        dom.new_task.value = ''
        tasksRender(tasks)
    }
}
// функ добавления задачи
function addTask(text, list) {
    const timestamp = Date.now()
    const task = {
        id: timestamp,
        text, // или text: text,
        isComplete: false
    }
    list.push(task)
}

// Проверка существования задачи в массиве задач
function isNotHaveTask(text, list) {
    let isNotHave = true

    list.forEach((task) => {
        if (task.text == text) {
            alert('Задача существует')
            isNotHave = false
        }
    })

    return isNotHave
}

// Функция вывода списка задач
function tasksRender(list) {
    let htmlList = ''

    list.forEach((task) => {        
        const cls = task.isComplete  // класс задач
            ? 'todo_task todo_task_complete' 
            : 'todo_task'
        const checked = task.isComplete ? 'checked' : ''

        const taskHtml = `
        <div id="${task.id}" class="${cls}">
            <label class="todo_checkbox">
                <input type="checkbox" ${checked}>
                <div class="todo_checkbox-div"></div>
            </label>
            <div class="todo_task-text">${task.text}</div>
            <div class="todo_task-delete">-</div>
        </div>
        `

        htmlList = htmlList + taskHtml
    })

    dom.tasks.innerHTML = htmlList

    renderTasksCount(list)
}

// отслеживаем клик по чекбоксу задачи
dom.tasks.onclick = (event) => {
    const target = event.target
    const isCheckboxEl = target.classList.contains('todo_checkbox-div')
    const isDeleteEl = target.classList.contains('todo_task-delete')

    if (isCheckboxEl) {
        const task = target.parentElement.parentElement
        const taskId = task.getAttribute('id')
        changeTaskStatus(taskId, tasks)
        tasksRender(tasks)
    }

    if (isDeleteEl) {
        const task = target.parentElement
        const taskId = task.getAttribute('id')
        deleteTask(taskId, tasks)
        tasksRender(tasks)
    }
}

// Функция изменения статуса задачи
function changeTaskStatus(id, list) {
    list.forEach((task) => {
        if (task.id == id) {
            task.isComplete = !task.isComplete
        }
    })
}

// Функция удаления задачи
function deleteTask(id, list) {
    list.forEach((task, idx) =>{
        if (task.id == id) {
            list.splice(idx, 1)  // вырезаем 1 элемент (то есть вместо элементра "empty" в массиве, будет ничего)
        }
    })

}


// Вывод количества задач
function renderTasksCount(list) {
    dom.count.innerHTML = list.length
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