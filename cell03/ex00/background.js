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

let width = 100;
let height = 40;

button.addEventListener('click', function() {

    width += 20;
    height += 10;

    button.style.width = width + 'px';
    button.style.height = height + 'px';

    // สุ่มสี
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor =
        `rgb(${red}, ${green}, ${blue})`;
});

