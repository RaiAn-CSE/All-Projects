
function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {

    const toDoContainer = document.getElementById('todo-container');

    for (const todo of todos) {

        console.log(todo);

        const todoDiv = document.createElement('div');

        todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>   
        `;
    }
    toDoContainer.appendChild(todoDiv);
}

loadTodos();