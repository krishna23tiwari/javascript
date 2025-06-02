// const taskinput = document.querySelector('taskInput');
// const addtask = document.querySelector('addTaskButton');
// const tasklist = document.querySelector('taskList');

// let task = JSON.parse(localStorage.getItem('task')) || [];

// function render() {
//     tasklist.innerHTML = '';
//     task.forEach((task,index) => {
//         const li = document.createElement('li');
//         li.textContent = task.text;
//         li.className = task.completed ? 'completed' : '';
        
//         li.addEventListener('click', () => {
//             task.completed = !task.completed;
//             update();
//             render();
//         });

//         const deletebutton = document.createElement('button');
//         deletebutton.textContent = 'Delete';
//         deletebutton.className = 'deletebutton';
//         deletebutton.addEventListener('click', (e) => {
//             e.stopPropagation();
//             task.splice(index,1);
//             update();
//             render();
//         });

//         li.appendChild(deletebutton);
//         tasklist.appendChild(li);
//     });
// }

// function update(){
//     localStorage.setItem('task', JSON.stringify(task));
// }

// addtask.addEventListener('click', () => {
//     const tasktext = taskinput.value.trim();
//     if(tasktext){
//         task.push({text: tasktext, completed: false});
//         update();
//         taskinput.value = '';
//         render();
//     }else{
//         alert('please enter task!');
//     }
// })

// Select elements
const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.className = task.completed ? 'completed' : '';

        // Mark as completed button
        li.addEventListener('click', () => {
            task.completed = !task.completed;
            updateLocalStorage();
            renderTasks();
        });

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the li click event
            tasks.splice(index, 1); // Remove task from array
            updateLocalStorage();
            renderTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to update local storage
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener to add a new task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        updateLocalStorage();
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter a task!');
    }
});

// Initial render
renderTasks();
