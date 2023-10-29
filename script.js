const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const li = document.createElement("li");
        const date = new Date();
        const formattedDate = `[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]`;
        li.innerHTML = `
            <span class="task-text" contenteditable="true">${taskText}</span>
            <span class="date">${formattedDate}</span>
            <button class="delete-button" onclick="deleteTask(this)"><span class="material-symbols-outlined">
            delete
            </span></button>
             <button class="edit-button"  onclick="editTask(this)">
             <span class="material-symbols-outlined">
         edit
            </span></button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
    else{
        alert("please enter a text first");
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}



function editTask(button) {
    const li = button.parentElement;
    const taskTextElement = li.querySelector(".task-text");
    const editButton = li.querySelector(".edit-button");

    if (taskTextElement.isContentEditable) {
        
        taskTextElement.contentEditable = "false";
        editButton.innerText = "edit";
    } else {
       
        taskTextElement.contentEditable = "true";
        taskTextElement.focus();
        editButton.innerText = "Save";
    }}
