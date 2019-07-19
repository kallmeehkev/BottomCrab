import Level from './level';
import BottomCrab from './bottom_crab';
import PeripheralCrab from './peripheral_crab';

const CONSTANTS = {
    escape: 50,
}

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.registerEvents();
        this.restart();
    }

    animate() {
        this.level.animate(this.ctx);
        this.bottomCrab.drawGrid(this.ctx);
        for(let i = 7; i >= 0; i--) {
            this.peripheralCrabs[i].animate(this.ctx);
        }
        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
            // this.running = false;
        }
        let lastrandom = 8;
        if (Math.floor(Math.random() * CONSTANTS.escape) === 0) {
            let random = Math.floor(Math.random() * 8);
            // for(let i = 0; i < 60; i++) {
                if (lastrandom !== random) {
                    this.peripheralCrabs[random].moveOut();
                }
            // }
        }
    }

    animateBottomCrab() {
        this.bottomCrab.animate(this.ctx);
        // if (this.running) {
        //     requestAnimationFrame(this.animate.bind(this));
        //     this.running = false;
        // }
    }

    restart() {
        this.running = true;
        this.level = new Level(this.dimensions);
        this.bottomCrab = new BottomCrab(this.dimensions);
        this.peripheralCrabs = [];
        for(let i = 0; i < 8; i++) {
            this.peripheralCrabs.push(new PeripheralCrab(this.dimensions));
            if (i !== 0) {
                let j = 8-i;
                while( j > 0) {
                    this.peripheralCrabs[i].position();
                    j--;
                }
            }
        }
        this.animate();
        // this.animateBottomCrab();
    }

    play() {
        this.running = true;
        this.animate();
    }

    registerEvents() {
        document.addEventListener("keydown", this.keydown.bind(this))
        // this.ctx.canvas.addEventListener("click", this.click.bind(this));
        document.addEventListener("mousedown", this.animate.bind(this));
    }

    keydown(e) {
        if (!this.running) {
            this.play();
        }
        console.log(e.key)
        switch (e.key) {
            case "ArrowLeft":
                this.bottomCrab.moveBottomCrabCCW();
                break;
            case "a":
                this.bottomCrab.moveBottomCrabCCW();
                break;
            case "ArrowRight":
                this.bottomCrab.moveBottomCrabCW();
                break;
            case "d":
                this.bottomCrab.moveBottomCrabCW();
                break;
            case "ArrowUp":
                // Up pressed
                break;
            case "ArrowDown":
                // Down pressed
                break;
        }
    }


}