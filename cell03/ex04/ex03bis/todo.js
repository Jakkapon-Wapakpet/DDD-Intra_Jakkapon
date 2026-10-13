$(document).ready(function() {
    const $ftList =$('#ft_list');

    function saveToCookie() {
        const todos = [];
        $('.todo-item').each(function() {
            todos.push($(this).text());
        });
        const encoded = encodeURIComponent(JSON.stringify(todos));
        const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `todo_list=${encoded}; expires=${expires}; path=/; SameSite=Lax`;
    }

    function loadFromCookie() {
        const cookies = document.cookie.split(';');
        for (let c of cookies) {
            c = c.trim();
            if (c.startsWith('todo_list=')) {
                try {
                    const todos = JSON.parse(decodeURIComponent(c.substring(10)));
                    for (let i = todos.length - 1; i >= 0; i--) {
                        addItem(todos[i], false);
                    }
                } catch (e) {}
                break;
            }
        }
    }

    function addItem(text, shouldSave = true) {
        // สร้าง div ก้อนใหม่ด้วย jQuery
        const $item =$('<div></div>').addClass('todo-item').text(text);

        // คลิกเพื่อถามลบ
        $item.click(function() {
            if (confirm(`Do you really want to remove this item: "${text}"?`)) {
                $item.remove();
                saveToCookie();
            }
        });

        // แทรกไว้บนสุด
        $ftList.prepend($item);
        if (shouldSave) saveToCookie();
    }

    $('#new-btn').click(function() {
        const task = prompt('Enter a new TO DO:');
        if (task && task.trim() !== '') {
            addItem(task.trim(), true);
        }
    });

    loadFromCookie();
});