document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    const taskList = document.getElementById('task-list');

    function addTask() {
        // get and trim input text
        const taskText = taskInput.value.trim();
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
        removeButton.className = 'remove-btn';
        // remove task if remove button is clicked
        removeButton.addEventListener('click', function () {
            taskElement.remove();
        });
        // append remove button to task element
        taskElement.appendChild(removeButton);


        // append task element to task list
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    document.addEventListener('DOMContentLoaded', addTask);
});



