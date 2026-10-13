$(document).ready(function() {
    function isValid(str) {
        return /^\d+$/.test(str.trim());
    }

    $('#btn-submit').click(function() {
        // ใช้ .val() ดึงค่าแทน .value
        const leftStr = $('#left-num').val();
        const rightStr = $('#right-num').val();
        const op = $('#operator').val();

        if (!isValid(leftStr) || !isValid(rightStr)) {
            alert('Error :(');
            return;
        }

        const left = parseInt(leftStr, 10);
        const right = parseInt(rightStr, 10);

        if ((op === '/' || op === '%') && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let res = 0;
        switch (op) {
            case '+': res = left + right; break;
            case '-': res = left - right; break;
            case '*': res = left * right; break;
            case '/': res = left / right; break;
            case '%': res = left % right; break;
        }

        alert(res);
        console.log(res);
    });

    setInterval(function() {
        alert('Please, use me...');
    }, 30000);
});