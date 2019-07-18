import Level from './level';
import BottomCrab from './bottom_crab';

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.registerEvents();
        this.restart();

    }

    animate() {
        this.level.animate(this.ctx);
        this.bottomCrab.animate(this.ctx);
        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
            this.running = false;
        }
    }

    restart() {
        this.running = false;
        this.level = new Level(this.dimensions);
        this.bottomCrab = new BottomCrab(this.dimensions);
        this.animate();
    }

    play() {
        this.running = true;
        this.animate();
    }

    registerEvents() {
        this.ctx.canvas.addEventListener("click", this.click.bind(this));
    }

    click(e) {
        if (!this.running) {
            this.play();
        }
        this.bottomCrab.moveBottomCrab();
    }


}