import Level from './level';
import BottomCrab from './bottom_crab';
import PeripheralCrab from './peripheral_crab';

const CONSTANTS = {
    escape: 30,
    duration: 1000, //ms
    startDelay: 1000, //ms
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
        this.splash = new Image();
        this.splash.src = "../assets/images/BottomCrab Splash.jpg";
        this.restart();
    }

    animate() {
        this.level.animate(this.ctx);
        if (!this.running) {
            let img = {
                x: 0,
                y: 0,
                w: 1200,
                h: 2400
            }
            this.ctx.drawImage(this.splash, img.x, img.y, img.w, img.h, 200, 0, this.dimensions.width / 2, this.dimensions.height)
        } else {
            if (this.gameIsOver()) {
                console.log("You're the bottomest of BottomCrabs!");
                this.restart();
            }
            if (this.running) {
                this.bottomCrab.animate(this.ctx);

                this.peripheralCrabs.forEach(crab => {
                    crab.animate(this.ctx);
                    if (this.bottomCrab.claw.collidesWith(crab)) {
                        this.clawActive = false;
                        this.pullPeripheralCrab(crab);
                    }
                });
                if (this.clawActive || this.clawRetractActive) {
                    this.bottomCrab.claw.animate(this.ctx);
                }

                this.drawTimer();
                this.drawScore();

                requestAnimationFrame(this.animate.bind(this));
                timestamp = new Date().getTime();
                this.score = Math.floor((timestamp - bufferStart) / 1000);
                this.timer = CONSTANTS.level1 - (timestamp - bufferStart);

                let buffered = timestamp - bufferStart > CONSTANTS.startDelay;
                let moveDelayed = timestamp - interval > CONSTANTS.moveDelay;
                let differentCrab = lastrandom !== random;
                if (this.bottomCrabActiveCW || this.bottomCrabActiveCCW) {
                    this.moveBottomCrab();
                }
                if ( this.clawActive || this.clawRetractActive ) {
                    this.moveClaw();
                }
                if (buffered && moveDelayed && differentCrab ) { //buffer time before crabs start moving out
                    this.movePeripheralCrab(timestamp, random, CONSTANTS.duration);
                } else {
                    random = Math.floor(Math.random() * 8);
                }
            }
        }
    }

    moveBottomCrab() {
        if (this.bottomCrabActiveCW) {
            this.bottomCrab.moveBottomCrabCW();
        }
        if (this.bottomCrabActiveCCW) {
            this.bottomCrab.moveBottomCrabCCW();
        }
    }

    moveClaw() {
        if (this.clawActive) {
            this.bottomCrab.claw.extendClaw();
        } else {
            this.bottomCrab.claw.retractClaw();
            if (this.bottomCrab.claw.r <= 73) this.clawRetractActive = false;
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

    pullPeripheralCrab(crab) {
        if (crab.r >= 145) {
            crab.pulledIn();
        }
    }

    restart() {
        this.running = false;
        // this.gameover = false;
        this.clawActive = false;
        this.clawRetractActive = false;
        this.bottomCrabActiveCW = false;
        this.bottomCrabActiveCCW = false;
        this.score = 0;
        this.timer = 0;
        timestamp = 0;
        bufferStart = 0;
        interval = 0;

        this.level = new Level(this.dimensions);
        this.bottomCrab = new BottomCrab(this.dimensions);
        this.peripheralCrabs = [];
        for(let i = 0; i < 8; i++) {
            this.peripheralCrabs.push(new PeripheralCrab(this.dimensions));
            this.peripheralCrabs[i].position(i);
        }
        this.animate();
    }

    gameIsOver() {
        let gameover = false;
        if ((timestamp - bufferStart) > CONSTANTS.level1) {
            gameover = true;
        } 
        this.peripheralCrabs.forEach( (crab, i) => {
            if( crab.r > CONSTANTS.outerBound) gameover = true
        })
        return gameover;
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
        // this.gameover = false;
        this.animate();
        timestamp = new Date().getTime();
        starttime = timestamp;
        bufferStart = timestamp;
        interval = timestamp;
    }

    drawScore() {
        // if (this.score > 10000) this.score = 0;
        const loc = {x: this.dimensions.width - 100, y: 100};
        this.ctx.font = "bold 30pt serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.score, loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText(this.score, loc.x, loc.y);
    }

    registerEvents() {
        this.ctx.canvas.addEventListener("mousedown", this.click.bind(this));
        document.addEventListener("keydown", this.keydown.bind(this));
        // this.ctx.canvas.addEventListener("click", this.click.bind(this));
        document.addEventListener("keyup", this.keyup.bind(this));
    }

    keyup(e) {
        switch (e.key) {
            case "ArrowUp":
                this.clawRetractActive = true;
                this.clawActive = false;
                break;
            case "ArrowLeft":
                this.bottomCrabActiveCCW = false;
                break;
            case "ArrowRight":
                this.bottomCrabActiveCW = false;
                break;
        }
    }

    keydown(e) {
        switch (e.key) {
            case "ArrowUp":
                this.peripheralCrabs.forEach(crab => {
                    crab.animate(this.ctx);
                    if (this.bottomCrab.claw.collidesWith(crab)) {
                        this.clawRetractActive = true;
                        this.clawActive = false;
                    } else {
                        this.clawRetractActive = false;
                        this.clawActive = true;
                    }
                }); 
                this.bottomCrabActiveCW = false;
                this.bottomCrabActiveCCW = false;
                break;
            case "ArrowLeft":
                // this.bottomCrab.moveBottomCrabCCW();
                this.bottomCrabActiveCCW = true;
                this.clawActive = false;
                break;
            // case "a":
            //     this.bottomCrab.moveBottomCrabCCW();
            //     break;
            case "ArrowRight":
                // this.bottomCrab.moveBottomCrabCW();
                this.bottomCrabActiveCW = true;
                this.clawActive = false;
                break;
            // case "d":
            //     this.bottomCrab.moveBottomCrabCW();
            //     break;
            // case "ArrowDown":
            //     this.clawActive = true;
            //     this.bottomCrab.claw.retractClaw();
            //     break;
        }
    }

    click(e) {
        if (!this.running) {
            this.play();
        }
    }    

}