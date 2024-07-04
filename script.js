document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const deleteBtn = document.getElementById('deleteBtn');
    const yesBtn = document.getElementById('yesBtn');

    addBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.classList.add('task-item');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = taskText;
            li.appendChild(a);
            taskList.appendChild(li);
            taskInput.value = '';

            // Add event listener for selecting the task
            li.addEventListener('click', function() {
                // Remove the selected class from all items
                document.querySelectorAll('.task-item').forEach(item => item.classList.remove('selected'));
                // Add the selected class to the clicked item
                li.classList.add('selected');
            });
        }
    });

    deleteBtn.addEventListener('click', function() {
        const selectedTask = document.querySelector('.task-item.selected');
        if (selectedTask) {
            selectedTask.remove();
        }
    });

    yesBtn.addEventListener('click', function() {
        const selectedTask = document.querySelector('.task-item.selected');
        if (selectedTask) {
            selectedTask.classList.add('completed');
            selectedTask.classList.remove('selected');
        }
    });
});