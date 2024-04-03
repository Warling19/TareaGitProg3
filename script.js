let tasks = [];

function addTask(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const lastNameInput = document.getElementById('lastNameInput');
    const matriculaInput = document.getElementById('matriculaInput');
    const dateInput = document.getElementById('dateInput');
    const taskInput = document.getElementById('taskInput');
    const fileInput = document.getElementById('fileInput');

    const name = nameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const matricula = matriculaInput.value.trim();
    const date = dateInput.value.trim();
    const task = taskInput.value.trim();
    const file = fileInput.files[0];

    if (name !== '' && lastName !== '' && matricula !== '' && date !== '' && task !== '') {
        const newTask = {
            name: name,
            lastName: lastName,
            matricula: matricula,
            date: date,
            task: task,
            file: file
        };
        tasks.push(newTask);
        renderTasks();
        nameInput.value = '';
        lastNameInput.value = '';
        matriculaInput.value = '';
        dateInput.value = '';
        taskInput.value = '';
        fileInput.value = '';
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <p><strong>Nombre:</strong> ${task.name}</p>
                <p><strong>Apellido:</strong> ${task.lastName}</p>
                <p><strong>Matrícula:</strong> ${task.matricula}</p>
                <p><strong>Fecha de entrega:</strong> ${task.date}</p>
                <p><strong>Tarea:</strong> ${task.task}</p>
            </div>
        `;

        if (task.file) {
            const fileLink = document.createElement('a');
            fileLink.href = URL.createObjectURL(task.file);
            fileLink.textContent = 'Ver archivo';
            fileLink.target = '_blank';
            li.appendChild(fileLink);
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteTask(index));
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

document.getElementById('taskForm').addEventListener('submit', addTask);
