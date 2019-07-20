import Level from './level';
import BottomCrab from './bottom_crab';
import PeripheralCrab from './peripheral_crab';

const CONSTANTS = {
    escape: 30,
    duration: 1000, //ms
    startDelay: 3000, //ms
    moveDelay: 1000, //ms
    outerBound: 325,
    level1: 90000,
    level2: 60000,
    level3: 30000
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
        if (this.gameOver()) {
            console.log("You're the bottomest of BottomCrabs!");
            this.restart();
        }
        this.level.animate(this.ctx);
        this.bottomCrab.animate(this.ctx);
        this.peripheralCrabs.forEach( crab => {
            crab.animate(this.ctx);
            if (this.bottomCrab.claw.collidesWith(crab)) crab.reset();
        });
        if (this.clawActive) {
            this.bottomCrab.claw.animate(this.ctx);
        }

        this.timer = CONSTANTS.level1 - (timestamp - bufferStart);
        this.drawTimer();

        this.score = Math.floor((timestamp - bufferStart) / 1000);
        this.drawScore();

        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
            timestamp = new Date().getTime();

            let buffered = timestamp - bufferStart > CONSTANTS.startDelay;
            let moveDelayed = timestamp - interval > CONSTANTS.moveDelay;
            let differentCrab = lastrandom !== random;

            if (buffered && moveDelayed && differentCrab ) { //buffer time before crabs start moving out
                this.movePeripheralCrab(timestamp, random, CONSTANTS.duration);
            } else {
                random = Math.floor(Math.random() * 8);
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
        this.gameover = false;
        this.clawActive = false;
        this.score = 0;
        this.timer = 0;

        this.level = new Level(this.dimensions);
        this.bottomCrab = new BottomCrab(this.dimensions);
        this.peripheralCrabs = [];
        for(let i = 0; i < 8; i++) {
            this.peripheralCrabs.push(new PeripheralCrab(this.dimensions));
            this.peripheralCrabs[i].position(i);
        }
        this.animate();
    }

    gameOver() {
        if (timestamp - bufferStart > CONSTANTS.leve1) {
            this.gameOver = true;
        } else {
            this.peripheralCrabs.forEach( (crab) => {
                if( crab.r > CONSTANTS.outerBound) this.gameover = true;
            })
        }
        return this.gameover;
    }

    drawTimer() {
        const loc = {x: 100, y: 100};
        this.ctx.font = "bold 30pt serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.countdown(), loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText(this.countdown(), loc.x, loc.y);
    }

    countdown() {
        let minutes = Math.floor(this.timer / 60000);
        let seconds = Math.ceil((this.timer % 60000)/1000);
        return seconds >= 10 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`
    }

    play() {
        this.running = true;
        this.animate();
        timestamp = new Date().getTime();
        starttime = timestamp;
        bufferStart = timestamp;
        interval = timestamp;
    }

    drawScore() {
        const loc = {x: this.dimensions.width - 100, y: 100};
        this.ctx.font = "bold 30pt serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.score, loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText(this.score, loc.x, loc.y);
    }

    registerEvents() {
        document.addEventListener("mousedown", this.click.bind(this));
        document.addEventListener("keydown", this.keydown.bind(this));
        // this.ctx.canvas.addEventListener("click", this.click.bind(this));
        document.addEventListener("keyup", this.keyup.bind(this));
    }

    keyup(e) {
        this.clawActive = false;
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
                this.clawActive = true;
                this.bottomCrab.claw.extendClaw();
                break;
            case "ArrowDown":
                this.clawActive = true;
                this.bottomCrab.claw.retractClaw();
                break;
        }
    }

    click(e) {
        if (!this.running) {
            this.play();
        }
    }    

}