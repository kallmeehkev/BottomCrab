import Game from './game';
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("myCanvas");
    new Game(canvas);
    // ctx.fillStyle = "rgba(12,124,123,1)";
    // ctx.fillRect(00, 00, 700, 700);

    // ctx.beginPath();
    // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fillStyle = "blue";
    // ctx.fill();
});
