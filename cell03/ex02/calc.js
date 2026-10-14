function isValidPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

document.getElementById('btn-submit').addEventListener('click', function() {
    const leftStr = document.getElementById('left-num').value;
    const rightStr = document.getElementById('right-num').value;
    const op = document.getElementById('operator').value;

    if (!isValidPositiveInteger(leftStr) || !isValidPositiveInteger(rightStr)) {
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

    let result = 0;
    switch (op) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            result = left / right;
            break;
        case '%':
            result = left % right;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert('Please, use me...');
}, 50000)