// Temporary storage fot todo items
let todos = [];

// Function to add a new todo item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    // Simple validation to check if inputs are filled both of them
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter both a todo item and a due date.');
    } else {
        // Create a new todo object
        const newTodo = {
            todo: todoInput.value.trim(),
            date: todoDate.value
        };
        // add the new todos to the array
        todos.push(newTodo);

        // Clear input fields after adding
        todoInput.value = '';
        todoDate.value = '';

        // Render the updated todo list
        renderTodos();
    }
}

/// Function to render todo items to the DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((item) => {
    todoList.innerHTML += `
    <li>
        <p class="text-2xl">
            ${item.todo}
            <span class="text-sm text-gray-500">(${item.date})</span>
        </p>
        <hr />
    </li>
    `;
});

}
// Function to delete all todo items
function deleteAllTodos() {
    todos = [];
    renderTodos();
}


// Function to filter todo items (to be implemented)
function filterTodos() {
    const selectedDate = document.getElementById('todo-date').value;
    const todoList = document.getElementById('todo-list');

    // If no date is selected, show all todos
    if (selectedDate === '') {
        renderTodos();
        return;
    }

    // Filter todos that match the selected date
    const filteredTodos = todos.filter(item => item.date === selectedDate);

    // If no todo that matches that date
    if (filteredTodos.length === 0) {
        todoList.innerHTML = `<li>No todos found for this date</li>`;
        return;
    }

    // Clear current list
    todoList.innerHTML = '';

    // Display filtered results
    filteredTodos.forEach((item) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">
                ${item.todo}
                <span class="text-sm text-gray-500">(${item.date})</span>
            </p>
            <hr />
        </li>
        `;
    });
}