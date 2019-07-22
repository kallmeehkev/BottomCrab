import Game from './game';
window.addEventListener("load", function () { //DOMContentLoaded
    const canvas = document.getElementById("myCanvas");
    new Game(canvas);
});
