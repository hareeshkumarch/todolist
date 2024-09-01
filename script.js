// Getting elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add task
addTaskBtn.addEventListener('click', function() {
    const taskValue = taskInput.value;

    if (taskValue.trim() !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskValue}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Add click event to mark as complete
        li.querySelector('span').addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        // Add click event to delete the task
        li.querySelector('.delete-btn').addEventListener('click', function() {
            this.parentElement.remove();
        });

        taskList.appendChild(li);
        taskInput.value = ""; // Clear input after adding
    }
});
