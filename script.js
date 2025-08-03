document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(taskText, save = true) {
        // get and trim input text
        // taskText = taskInput.value.trim();
        if (!taskText) {
            alert('Please, enter a task');
            return;
        }
        // create task list element (li)
        const taskElement = document.createElement('li');
        taskElement.textContent = taskText

        // create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        // remove task if remove button is clicked
        removeButton.addEventListener('click', function () {
            taskElement.remove();
        });
        // append remove button to task element
        taskElement.appendChild(removeButton);

        // append task element to task list
        taskList.appendChild(taskElement);
        taskInput.value = '';

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
    loadTasks();
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    }
    );
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

    // document.addEventListener('DOMContentLoaded', addTask);
});