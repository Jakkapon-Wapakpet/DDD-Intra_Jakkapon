
const list = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');

function saveTodos() {
    let todos = [];

    list.querySelectorAll('.todo-item').forEach(item => {
        todos.push(item.textContent);
    });

    let data = JSON.stringify(todos);
    let seconds = 7 * 24 * 60 * 60;

    document.cookie = "todo_list=" + encodeURIComponent(data) + "; max-age=" + seconds;
}

function addTodo(text, save = true) {
    let item = document.createElement('div');
    item.className = 'todo-item';
    item.textContent = text;

    item.addEventListener('click', function () {
        if (confirm('Do you want to delete this item?')) {
            item.remove();
            saveTodos();
        }
    });

    list.prepend(item);

    if (save) {
        saveTodos();
    }
}

function loadTodos() {
    let cookie = document.cookie.split('; ')
        .find(c => c.startsWith('todo_list='));

    if (!cookie) return;

    try {
        let todos = JSON.parse(
            decodeURIComponent(cookie.split('=')[1])
        );

        for (let i = todos.length - 1; i >= 0; i--) {
            addTodo(todos[i], false);
        }
    } catch (error) {
        console.log('Cannot load todos');
    }
}

newBtn.addEventListener('click', function () {
    let text = prompt('Enter a new TO DO:');

    if (text && text.trim() !== '') {
        addTodo(text.trim());
    }
});

window.addEventListener('load', loadTodos);
