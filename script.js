const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

document.getElementById('addTaskBtn').addEventListener('click', function() {
    taskList.innerHTML = taskInput.value;
})