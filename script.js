let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const senderInput = document.getElementById('senderInput');
    const taskText = taskInput.value.trim();
    const senderName = senderInput.value.trim();
    
    if (taskText !== '' && senderName !== '') {
        tasks.push({ text: taskText, sender: senderName, completed: false });
        renderTasks();
        taskInput.value = '';
        senderInput.value = '';
    } else {
        alert('Por favor, ingresa una tarea válida y tu nombre y apellido.');
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task.text}</span> <span>(${task.sender})</span>`;
        
        if (task.completed) {
            li.classList.add('completed');
        }
        
        li.addEventListener('click', () => toggleTask(index));
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteTask(index);
        });
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
