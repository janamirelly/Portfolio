document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, adicione uma tarefa!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    ${taskText} 
    <button onclick="removeTask(this)">Remover</button>
  `;

  document.getElementById("tasks").appendChild(taskItem);
  taskInput.value = "";
  saveTasks();
}

function removeTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  const taskItems = document.querySelectorAll("#tasks li");
  taskItems.forEach(taskItem => {
    tasks.push(taskItem.innerText.replace(" Remover", ""));
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      ${task} 
      <button onclick="removeTask(this)">Remover</button>
    `;
    document.getElementById("tasks").appendChild(taskItem);
  });
}

loadTasks();
