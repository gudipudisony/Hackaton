document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('diceCanvas');
    const context = canvas.getContext('2d');

    function drawDot(x, y) {
        const dotRadius = 10;
        context.beginPath();
        context.arc(x, y, dotRadius, 0, Math.PI * 2);
        context.fill();
    }

    function drawDiceFace(number) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'black';
        switch (number) {
            case 1:
                drawDot(100, 100);
                break;
            case 2:
                drawDot(50, 50);
                drawDot(150, 150);
                break;
            case 3:
                drawDot(50, 50);
                drawDot(100, 100);
                drawDot(150, 150);
                break;
            case 4:
                drawDot(50, 50);
                drawDot(150, 50);
                drawDot(50, 150);
                drawDot(150, 150);
                break;
            case 5:
                drawDot(50, 50);
                drawDot(150, 50);
                drawDot(100, 100);
                drawDot(50, 150);
                drawDot(150, 150);
                break;
            case 6:
                drawDot(50, 50);
                drawDot(50, 100);
                drawDot(50, 150);
                drawDot(150, 50);
                drawDot(150, 100);
                drawDot(150, 150);
                break;
        }
    }
1
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            const diceNumber = rollDice();
            drawDiceFace(diceNumber);
        }
    });

    // Initial draw
    drawDiceFace(rollDice());
});