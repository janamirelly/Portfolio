const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Carregar tarefas salvas
window.onload = () => {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    taskList.innerHTML = saved;
  }
};

function addTask() {
  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskInput.value;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  saveTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}
