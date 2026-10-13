$(document).ready(function() {
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;
    let size = 200;
    const $balloon = $('#balloon');

    function update() {
        $balloon.css({
            width: size + 'px',
            height: size + 'px',
            backgroundColor: colors[colorIndex]
        });
    }

    // คลิกเพื่อขยาย
    $balloon.click(function() {
        size += 10;
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        update();
    });

    // เลื่อนเมาส์ออกเพื่อหด
    $balloon.mouseleave(function() {
        if (size > 200) {
            size = Math.max(200, size - 5);
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
            update();
        }
    });
});