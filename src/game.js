import Level from './level';
import BottomCrab from './bottom_crab';
import PeripheralCrab from './peripheral_crab';

const CONSTANTS = {
    escape: 30,
    duration: 1000, //ms
    startDelay: 1000, //ms
    moveDelay: 1000, //ms
}

let starttime = new Date().getTime();
let random = Math.floor(Math.random() * 8);
let lastrandom = 8;
let timestamp = 0;
let bufferStart = 0;
let interval = 0;

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
        for(let i = 7; i >= 0; i--) {
            this.peripheralCrabs[i].animate(this.ctx);
        }
        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
            timestamp = new Date().getTime();
            if (timestamp - bufferStart > CONSTANTS.startDelay) { //buffer time before crabs start moving out
                if (timestamp - interval > CONSTANTS.moveDelay) {
                    if (lastrandom !== random) {
                        this.movePeripheralCrab(timestamp, random, CONSTANTS.duration);
                    } else {
                        random = Math.floor(Math.random() * 8);
                    }
                }
            }
        }
    }

    movePeripheralCrab(timestamp, i, duration) {
        starttime = interval + CONSTANTS.moveDelay;
        if ((timestamp - starttime) <= duration) {
            this.peripheralCrabs[i].moveOut();
        } else {
            interval = timestamp;
            lastrandom = i;
            random = Math.floor(Math.random() * 8);
        }
    }

    restart() {
        this.running = false;
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
        this.bottomCrab.drawGrid(this.ctx);
        timestamp = new Date().getTime();
        starttime = timestamp;
        bufferStart = timestamp;
        interval = timestamp;
        this.animate();
    }

    click(e) {
        if (!this.running) {
            this.play();
        }
    }

    play() {
        this.running = true;

        this.animate();
    }

    registerEvents() {
        document.addEventListener("mousedown", this.click.bind(this));
        document.addEventListener("keydown", this.keydown.bind(this))
        // this.ctx.canvas.addEventListener("click", this.click.bind(this));
    }

    keydown(e) {
        if (!this.running) {
            this.play();
        }
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