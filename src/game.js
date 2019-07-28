import Level from './level';
import BottomCrab from './bottom_crab';
import PeripheralCrab from './peripheral_crab';
import { drawTimer, drawLostText, drawWinText,
    drawTitle, drawScore, 
    drawReplay, replayButton, drawStart,
    getMousePos, isInside } from './draw_extra_stuff';

const CONSTANTS = {
    escape: 30,
    duration: 1000, //ms
    startDelay: 1000, //ms
    moveDelay: 1000, //ms
    outerBound: 325,
    level1: 900000,     //ms for level1 time length
    level2: 60000,
    level3: 30000,
    PeripheralCrabStartDist: 140,
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
        this.winSplash = new Image();
        this.winSplash.src = "./assets/images/BottomCrab Splash.jpg";
        this.loseSplash = new Image();
        this.loseSplash.src = "./assets/images/BottomCrab loseSplash.png";
        this.initialSplash = new Image();
        this.initialSplash.src = "./assets/images/CrabBucketEffect.jpg"
        this.keys = {};
        this.restart();
    }

    animate() {
        if (!this.running) {
            this.level.animate(this.ctx);
            this.ctx.drawImage(this.initialSplash, 0, 0, 650, 526, 75, this.dimensions.height - 526 - 100, 650, 526)            
            drawTitle(this.ctx);
            drawStart(this.ctx);
        } else {
            if (this.gameWon()) {
                this.level.animateWon(this.ctx);
                this.ctx.drawImage(this.winSplash, 0, 0, 1200, 2400, 250, 75, 315, 630)
                // console.log("You're the bottomest of BottomCrabs!");
                // this.restart();
                drawWinText(this.ctx);
                drawReplay(this.ctx);
                this.running = false;
            }
            if (this.gameLost()) {
                this.level.animate(this.ctx);
                this.ctx.drawImage(this.loseSplash, 0, 0, 1024, 808, 16, 125, 768, 606)
                drawLostText(this.ctx);
                drawReplay(this.ctx);
                this.running = false;
            }
            if (this.running) {
                this.level.animate(this.ctx);
                // this.level.animateOcean(this.ctx);
                // this.peripheralCrabs.forEach(crab => {
                //     crab.animate(this.ctx);
                //     if (this.bottomCrab.rightClaw.collidesWith(crab)) {
                //         this.rightClawActive = false;
                //         this.rightClawRetractActive = true;
                //         this.crabScore += Math.floor(crab.r/100);
                //         this.pullPeripheralCrab(crab);
                //     }
                // });
                if (this.rightClawActive || this.rightClawRetractActive || this.leftClawActive || this.leftClawRetractActive ) {
                    this.bottomCrab.rightClaw.animateRight(this.ctx);
                    this.bottomCrab.leftClaw.animateLeft(this.ctx);
                    this.bottomCrab.animateBody(this.ctx);
                } else {
                    this.bottomCrab.animate(this.ctx);
                }

                drawTimer(this.ctx, this.countdown());
                drawScore(this.ctx, this.score);

                requestAnimationFrame(this.animate.bind(this));
                timestamp = new Date().getTime();
                this.score = Math.floor((timestamp - bufferStart) / 1000) + this.crabScore;
                this.timer = CONSTANTS.level1 - (timestamp - bufferStart);

                let buffered = timestamp - bufferStart > CONSTANTS.startDelay;
                let moveDelayed = timestamp - interval > CONSTANTS.moveDelay;
                let differentCrab = lastrandom !== random;
                if (this.bottomCrabActiveCW || this.bottomCrabActiveCCW) {
                    this.moveBottomCrab();
                }
                if (this.rightClawActive || this.rightClawRetractActive || this.leftClawActive || this.leftClawRetractActive ) {
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
            this.bottomCrab.rightClaw.moveClaw();
            this.bottomCrab.leftClaw.moveClaw();
        }
        if (this.bottomCrabActiveCCW) {
            this.bottomCrab.moveBottomCrabCCW();
            this.bottomCrab.rightClaw.moveClaw();
            this.bottomCrab.leftClaw.moveClaw();
        }
    }

    moveClaw() {
        if (this.rightClawActive) {
            this.bottomCrab.rightClaw.extendRightClaw();
            this.bottomCrab.leftClaw.moveClaw();
        } if (this.rightClawRetractActive) {
            this.bottomCrab.rightClaw.retractClaw();
            if (this.bottomCrab.rightClaw.r < 48) this.rightClawRetractActive = false;
        } 
        if (this.leftClawActive) {
            this.bottomCrab.leftClaw.extendLeftClaw();
            this.bottomCrab.rightClaw.moveClaw();
        } if (this.leftClawRetractActive) {
            this.bottomCrab.leftClaw.retractClaw();
            if (this.bottomCrab.leftClaw.r < 48) this.leftClawRetractActive = false;
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
        if (crab.r >= CONSTANTS.PeripheralCrabStartDist) {
            crab.pulledIn();
        }
    }

    restart() {
        this.reset();
        this.level = new Level(this.dimensions);
        this.bottomCrab = new BottomCrab(this.dimensions);
        this.peripheralCrabs = [];
        for(let i = 0; i < 8; i++) {
            this.peripheralCrabs.push(new PeripheralCrab(this.dimensions));
            this.peripheralCrabs[i].position(i);
        }
        this.animate();
    }

    reset() {
        this.running = false;
        this.rightClawActive = false;
        this.rightClawRetractActive = false;
        this.leftClawActive = false;
        this.leftClawRetractActive = false;
        this.bottomCrabActiveCW = false;
        this.bottomCrabActiveCCW = false;
        this.score = 0;
        this.crabScore = 0;
        this.timer = 0;
        timestamp = 0;
        bufferStart = 0;
        interval = 0;
    }

    gameLost() {
        let gameover = false;
        // this.peripheralCrabs.forEach( (crab, i) => {
        //     if( crab.r > CONSTANTS.outerBound) gameover = true
        // })
        return gameover;
    }

    gameWon() {
        let gameover = false;
        if ((timestamp - bufferStart) > CONSTANTS.level1) {
            gameover = true;
        } 
        return gameover;
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

    registerEvents() {
        this.ctx.canvas.addEventListener("mousedown", this.click.bind(this));
        document.addEventListener("keydown", this.keydown.bind(this));
        // this.ctx.canvas.addEventListener("click", this.click.bind(this));
        document.addEventListener("keyup", this.keyup.bind(this));
    }

    click(e) {
        let mousePos = getMousePos(this.ctx.canvas, e);
        if (!this.running) {
            let rect = {
                x: replayButton.x * 0.8,
                y: replayButton.y * 0.8,
                w: replayButton.w * 0.8,
                h: replayButton.h * 0.8,
            };
            if (isInside(mousePos, rect)) {
                this.restart();
                this.play();
            } else {
            }    
        }
    }    

    keyup(e) {
        switch (e.key) {
            case "ArrowUp":
                this.keys["ArrowUp"] = false;
                this.rightClawRetractActive = true;
                this.rightClawActive = false;
                break;
            case "ArrowDown":
                this.keys["ArrowDown"] = false;
                this.leftClawRetractActive = true;
                this.leftClawActive = false;
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
        this.peripheralCrabs.forEach(crab => {
            if (!this.bottomCrab.rightClaw.collidesWith(crab)) {
                // debugger
                if (this.keys["ArrowUp"] && this.keys["ArrowDown"]) { //currently two keys active
                    // debugger
                    this.peripheralCrabs.forEach(crab => {
                        if (this.bottomCrab.rightClaw.collidesWith(crab)) {
                            this.rightClawRetractActive = true;
                            this.rightClawActive = false;
                        } 
                        else if (this.bottomCrab.leftClaw.collidesWith(crab)) {
                            this.leftClawRetractActive = true;
                            this.leftClawActive = false;
                        }
                        else {
                            this.rightClawRetractActive = false;
                            this.rightClawActive = true;
                            this.leftClawRetractActive = false;
                            this.leftClawActive = true;
                        }
                    });
                    this.bottomCrabActiveCW = false;
                    this.bottomCrabActiveCCW = false;
                }
                else {
                    switch (e.key) {
                        case "ArrowUp":
                            this.keys["ArrowUp"] = true; //needed for double claw action.
                            this.peripheralCrabs.forEach(crab => {
                                if (this.bottomCrab.rightClaw.collidesWith(crab)) {
                                    this.rightClawRetractActive = true;
                                    this.rightClawActive = false;
                                } else {
                                    this.rightClawRetractActive = false;
                                    this.rightClawActive = true;
                                }
                            }); 
                            this.bottomCrabActiveCW = false;
                            this.bottomCrabActiveCCW = false;
                            break;
                        case "ArrowDown":
                            this.keys["ArrowDown"] = true;
                            this.peripheralCrabs.forEach(crab => {
                                if (this.bottomCrab.leftClaw.collidesWith(crab)) {
                                    this.leftClawRetractActive = true;
                                    this.leftClawActive = false;
                                } else {
                                    this.leftClawRetractActive = false;
                                    this.leftClawActive = true;
                                }
                            });
                            this.bottomCrabActiveCW = false;
                            this.bottomCrabActiveCCW = false;
                            break;
                        case "ArrowLeft":
                            this.bottomCrabActiveCCW = true;
                            // this.rightClawActive = false;
                            break;
                        case "ArrowRight":
                            this.bottomCrabActiveCW = true;
                            // this.rightClawActive = false;
                            break;
                    }
                }
            }
        })
    }

}