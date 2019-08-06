import Level from './level';
import BottomCrab from './bottom_crab';
import PeripheralCrab from './peripheral_crab';
import { drawTimer, drawLostText, drawWinText, drawTitle, drawScore, drawFinalScore, drawNextStageButton,
    drawReplayButton, replayButton, drawStartButton, getMousePos, isInside,
    drawPostLevel1Text } from './draw_extra_stuff';

const CONSTANTS = {
    escape: 30,
    duration1: 1000,
    duration2: 2000, //ms
    startDelay: 1000, //ms
    moveDelay: 2000, //ms
    outerBound: 325,
    level1: 60000,     //ms for level1 time length
    level2: 45000,
    level3: 30000,
    PeripheralCrabStartDist: 140,
}

let starttime = new Date().getTime();
let random = Math.floor(Math.random() * 8);
let lastrandom = 8;
let timestamp = 0;
let bufferStart = 0;
let interval = 0;
let duration;

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
        this.restart();
    }

    animate() {
        if (!this.running) {
            this.drawInitialSplash();
        } else {
            if (this.gameWon(CONSTANTS.level2) && this.stage === 2) {
                this.drawWonScreen();
                this.running = false;
            }
            else if (this.gameLost()) {
                this.drawLostScreen();
                this.running = false;
            }
            else if (this.gameWon(CONSTANTS.level1) && this.stage === 1) {
                this.stage = 2;
                this.peripheralCrabs.forEach(crab => crab.reset());
                this.betweenLevels = true;
            }
            if (this.betweenLevels) {
                this.level.animate(this.ctx);
                drawPostLevel1Text(this.ctx);
                drawNextStageButton(this.ctx);
            } 
            if (this.running && !this.betweenLevels) {
                requestAnimationFrame(this.animate.bind(this));
                timestamp = new Date().getTime();
                switch(this.stage) {
                    case 1:
                        duration = CONSTANTS.duration1;
                        this.level.animateOcean(this.ctx);
                        this.timer = CONSTANTS.level1 - (timestamp - bufferStart);
                        break;
                    case 2:
                        duration = CONSTANTS.duration2;
                        this.level2PeripheralCrabMechanics();
                        this.level.animateBucket(this.ctx);
                        this.timer = CONSTANTS.level2 - (timestamp - bufferStart);
                        break;
                    default:
                        this.level.animate(this.ctx);
                        break;
                }
                this.peripheralCrabs.forEach(crab => {
                    crab.animate(this.ctx);
                    if (this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
                        this.rightClawRetractTog()
                        this.crabScore += Math.floor(crab.r/100);
                        this.pullPeripheralCrab(crab);
                    }
                    if (this.bottomCrab.leftClaw.collidesWith(this.bottomCrab.leftClaw.leftBounds(), crab)) {
                        this.leftClawRetractTog()
                        this.crabScore += Math.floor(crab.r/100);
                        this.pullPeripheralCrab(crab);
                    }
                });

                if (this.rightClawActive || this.rightClawRetractActive || this.leftClawActive || this.leftClawRetractActive ) {
                    this.animateCrabWithClaws();
                    this.moveClaw();
                } else {
                    this.bottomCrab.animate(this.ctx);
                }
                if (this.stage === 2) this.level.animateLid(this.ctx);    

                drawTimer(this.ctx, this.countdown());
                drawScore(this.ctx, this.score);

                if (this.bottomCrabActiveCW || this.bottomCrabActiveCCW) {
                    this.moveBottomCrab();
                }

                this.score = this.crabScore; //+ Math.floor((timestamp - bufferStart) / 1000);

                let buffered = timestamp - bufferStart > CONSTANTS.startDelay;
                let moveDelayed = timestamp - interval > CONSTANTS.moveDelay;
                let differentCrab = lastrandom !== random;
                if (buffered && moveDelayed && differentCrab ) { //buffer time before crabs start moving out
                    this.movePeripheralCrab(timestamp, random, duration);
                } else {
                    random = Math.floor(Math.random() * 8);
                }
            }
        }
    }

    animateCrabWithClaws() {
        this.bottomCrab.rightClaw.animateRight(this.ctx);
        this.bottomCrab.leftClaw.animateLeft(this.ctx);
        this.bottomCrab.animateBody(this.ctx);
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

    level2PeripheralCrabMechanics() {
        this.peripheralCrabs.forEach( crab => crab.speed = 0.6)
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
        this.Lid = true;
        this.score = 0;
        this.crabScore = 0;
        this.timer = 0;
        timestamp = 0;
        bufferStart = 0;
        interval = 0;
        this.stage = 1;
        this.keys = {};
    }

    drawInitialSplash() {
        this.level.animate(this.ctx);
        this.ctx.drawImage(this.initialSplash, 0, 0, 650, 526, 75, this.dimensions.height - 526 - 100, 650, 526)
        drawTitle(this.ctx);
        drawStartButton(this.ctx);
    }

    gameLost() {
        let gameover = false;
        this.peripheralCrabs.forEach( (crab, i) => {
            if( crab.r > CONSTANTS.outerBound) gameover = true
        })
        return gameover;
    }

    drawLostScreen() {
        this.level.animate(this.ctx);
        this.ctx.drawImage(this.loseSplash, 0, 0, 1024, 808, 16, 125, 768, 606)
        drawLostText(this.ctx);
        drawReplayButton(this.ctx);
        drawFinalScore(this.ctx, this.score);
    }

    drawWonScreen() {
        this.level.animateWon(this.ctx);
        this.ctx.drawImage(this.winSplash, 0, 0, 1200, 2400, 250, 75, 315, 630)
        drawWinText(this.ctx);
        drawReplayButton(this.ctx);
        drawFinalScore(this.ctx, this.score);
    }

    gameWon(levelDuration) {
        let gameover = false;
        if ((timestamp - bufferStart) > levelDuration) {
            gameover = true;
        } 
        return gameover;
    }

    countdown() {
        let minutes = Math.floor(this.timer / 60000);
        let seconds = Math.ceil((this.timer % 60000)/1000);
        return seconds >= 10 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`
    }

    rightClawTog() {
        this.rightClawRetractActive = false;
        this.rightClawActive = true;
    }

    rightClawRetractTog() {
        this.rightClawRetractActive = true;
        this.rightClawActive = false;
    }

    leftClawTog() {
        this.leftClawRetractActive = false;
        this.leftClawActive = true;
    }

    leftClawRetractTog() {
        this.leftClawRetractActive = true;
        this.leftClawActive = false;
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
        document.addEventListener("keyup", this.keyup.bind(this));
    }

    click(e) {
        let mousePos = getMousePos(this.ctx.canvas, e);
        let rect = {
            x: replayButton.x * 0.8,
            y: replayButton.y * 0.8,
            w: replayButton.w * 0.8,
            h: replayButton.h * 0.8,
        };
        if (isInside(mousePos, rect)) {
            if (!this.running) {
                this.restart();
                this.play();
            } else if (this.betweenLevels){
                this.betweenLevels = false;
                timestamp = new Date().getTime();
                bufferStart = timestamp;
                this.animate();
            }    
        }
        
    }    

    keyup(e) {
        switch (e.key) {
            case "d":
                this.keys["d"] = false;
                this.rightClawRetractTog();
                break;
            case "a":
                this.keys["a"] = false;
                this.leftClawRetractTog();
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
        if (this.keys["d"] && this.keys["a"]) { //currently two keys active
            this.peripheralCrabs.forEach(crab => {
                if (this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
                    this.rightClawRetractTog();
                } 
                else if (this.bottomCrab.leftClaw.collidesWith(this.bottomCrab.leftClaw.leftBounds(), crab)) {
                    this.leftClawRetractTog();
                }
                else {
                    this.rightClawTog();
                    this.leftClawTog();
                }
            });
            this.bottomCrabActiveCW = false;
            this.bottomCrabActiveCCW = false;
        }
        else {
            switch (e.key) {
                case "d":
                    this.keys["d"] = true; //needed for double claw action.
                    this.peripheralCrabs.forEach(crab => {
                        if (this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
                            this.rightClawRetractTog();
                        } else {
                            this.rightClawTog();
                        }
                    }); 
                    this.bottomCrabActiveCW = false;
                    this.bottomCrabActiveCCW = false;
                    break;
                case "a":
                    this.keys["a"] = true;
                    this.peripheralCrabs.forEach(crab => {
                        if (this.bottomCrab.leftClaw.collidesWith(this.bottomCrab.leftClaw.leftBounds(), crab)) {
                            this.leftClawRetractTog();
                        } else {
                            this.leftClawTog();
                        }
                    });
                    this.bottomCrabActiveCW = false;
                    this.bottomCrabActiveCCW = false;
                    break;
                case "ArrowLeft":
                    this.bottomCrabActiveCCW = true;
                    break;
                case "ArrowRight":
                    this.bottomCrabActiveCW = true;
                    break;
            }
        }
    }

}