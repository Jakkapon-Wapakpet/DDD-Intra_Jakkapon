const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');


function saveToCookie() {
    const todos = [];
    const items = ftList.querySelectorAll('.todo-item');
    items.forEach(item => {
        todos.push(item.textContent);
    });
    const encodedData = encodeURIComponent(JSON.stringify(todos));
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `todo_list=${encodedData}; expires=${expires}; path=/; SameSite=Lax`;
}

function loadFromCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith('todo_list=')) {
            const data = cookie.substring('todo_list='.length);
            try {
                const todos = JSON.parse(decodeURIComponent(data));
                for (let i = todos.length - 1; i >= 0; i--) {
                    addTodoItem(todos[i], false);
                }
            } catch (e) {
                console.error("Failed to parse cookie data", e);
            }
            break;
        }
    }
}


function addTodoItem(text, shouldSave = true) {
    const item = document.createElement('div');
    item.className = 'todo-item';
    item.textContent = text;

    item.addEventListener('click', function() {
        if (confirm(`Do you really want to remove this item: "${text}"?`)) {
            item.remove(); 
            saveToCookie(); 
        }
    });

    ftList.prepend(item);

    if (shouldSave) {
        saveToCookie();
    }
}

newBtn.addEventListener('click', function() {
    const task = prompt('Enter a new TO DO:');
    if (task && task.trim() !== '') {
        addTodoItem(task.trim(), true);
    }
});

window.addEventListener('load', loadFromCookie);