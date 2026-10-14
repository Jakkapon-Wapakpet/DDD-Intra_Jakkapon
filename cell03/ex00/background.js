function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#'
    for (
        let i = 0;
        i < 6;
        i++) {
        color += letters[Math.floor(Math.random() * 16)];
    } 
    return color;
}

const button = document.getElementById('changeBtn');

button.addEventListener('click', function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor =
        `rgb(${red}, ${green}, ${blue})`;
});
