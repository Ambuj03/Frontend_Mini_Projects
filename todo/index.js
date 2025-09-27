const list = document.querySelector(".tasksList");
const display = document.querySelector("#taskInput");
const button = document.querySelector("#submitButton");

let tasks = [];

function saveTasks(){
    localStorage.setItem("tasks" , JSON.stringify(tasks));
}

function renderTasks(){
    list.innerHTML = "";
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach((text, idx) => {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    });
}

button.addEventListener( "click" ,(e) => {
    e.preventDefault();
    const value = display.value.trim();
    if(!value) return;
    tasks.push(value);
    saveTasks();
    renderTasks();
    display.value = "";
})

renderTasks();