/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bottom_crab.js":
/*!****************************!*\
  !*** ./src/bottom_crab.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BottomCrab; });
/* harmony import */ var _claw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claw */ "./src/claw.js");


const CONSTANTS = {
    ROTATION_ANGLE: 2.5,  //in degrees
    CRAB_RAD1: 70,
    CRAB_RAD2: 45,
    outerBound: 325,
};
// const BOTTOM_CRAB = document.getElementById("source")

class BottomCrab {
    constructor(dimensions) {
        this.dimensions = dimensions
        this.x = this.dimensions.width/2;
        this.y = this.dimensions.height/2;
        this.position_angle = 0;
        this.BottomCrab = new Image();
        this.BottomCrab.src = "../assets/images/BottomCrab2.png";
        // this.BottomCrab.src = "../assets/images/PeripheralCrab.png"
        // this.BottomCrab.src = "../assets/images/5d30157724707 copy.png"
        this.BottomCrabBody = new Image();
        this.BottomCrabBody.src = "../assets/images/5d30155431d42onearm.png";
        this.claw = new _claw__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions, this.position_angle);
    }

    drawBottomCrab(ctx) {
        let destDimen = 200;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.position_angle);
        ctx.drawImage(this.BottomCrab, 0, 0, 1500, 1500, -100, -100, destDimen, destDimen)
        ctx.rotate(-this.position_angle);
        ctx.translate(-this.x, -this.y);

        // ctx.beginPath();
        // ctx.ellipse(100, 100, CONSTANTS.CRAB_RAD1, CONSTANTS.CRAB_RAD2, 0, 0, 2 * Math.PI, true); //(x, y, radius1, radius2, position angle, start angle, end angle, counterclockwise boolean)
        // ctx.strokeStyle = "black";
        // ctx.lineWidth = 1;
        // ctx.stroke();
        // ctx.fillStyle = "red";
        // ctx.fill();
    }

    drawBottomCrabBody(ctx) {
        let destDimen = 200;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.position_angle);
        ctx.drawImage(this.BottomCrabBody, 0, 0, 1500, 1500, -100, -100, destDimen, destDimen)
        ctx.rotate(-this.position_angle);
        ctx.translate(-this.x, -this.y);
    }

    drawGrid(ctx) {
        //circles
        ctx.beginPath();
        ctx.arc(this.x, this.y, 100, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 175, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 250, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, CONSTANTS.outerBound, 0, 2 * Math.PI);
        ctx.stroke();

        //lines
        ctx.beginPath();
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, this.dimensions.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, this.y);
        ctx.lineTo(this.dimensions.width, this.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.dimensions.width, this.dimensions.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.dimensions.width, 0);
        ctx.lineTo(0, this.dimensions.height);
        ctx.stroke();
    }

    animate(ctx) {
        this.drawBottomCrab(ctx)
        // this.drawGrid(ctx);
    }

    animateBody(ctx) {
        this.drawBottomCrabBody(ctx);
        // this.drawGrid(ctx);
    }

    moveBottomCrabCW() {
        this.position_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180)
        this.claw.pos_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
    }

    moveBottomCrabCCW() {
        this.position_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
        this.claw.pos_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
    }
}

/***/ }),

/***/ "./src/claw.js":
/*!*********************!*\
  !*** ./src/claw.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Claw; });
const CONSTANTS = {
    clawRadius: 40,
    clawSpeed: 3.0,
    maxRange: 300,
    startDist: 60,
}

let posX;
let posY;

class Claw {
    constructor(dimensions, crabAngle) {
        this.dimensions = dimensions;
        this.center = [this.dimensions.width/2, this.dimensions.height/2];
        this.clawRadius = CONSTANTS.clawRadius;
        this.r = CONSTANTS.startDist;
        this.pos_angle = crabAngle + (22.5 * Math.PI / 180);
        this.clawImage = new Image();
        this.clawImage.src = "../assets/images/5d30155431d42claw3.png";
        this.moveClaw();
    }

    moveClaw() {
        posX = this.r * Math.cos(this.pos_angle);
        posY = this.r * Math.sin(this.pos_angle);
    }

    retractClaw() {
        if (this.r > (CONSTANTS.clawSpeed + CONSTANTS.startDist)) {
            this.r -= (CONSTANTS.clawSpeed); //can tune for slower retraction rate
        }
        this.moveClaw();
    }

    extendClaw() {
        if (this.r < CONSTANTS.maxRange) {
            this.r += CONSTANTS.clawSpeed;
        }
        this.moveClaw();
    }

    resetClaw() {
        this.r = CONSTANTS.startDist;
    }

    drawClaw(ctx) {
        let destDimen = 200;

        ctx.translate(this.center[0], this.center[1]);
        ctx.rotate(this.pos_angle - (0 * Math.PI / 180));
        ctx.fillStyle = "#902529";
        ctx.fillRect(0, 40, this.r-20, 6);
        ctx.rotate(-(this.pos_angle - (0 * Math.PI / 180)));
        ctx.translate(-(this.center[0]), -(this.center[1]));

        ctx.translate(this.center[0] + posX, this.center[1] + posY);
        ctx.rotate(this.pos_angle - (22.5 * Math.PI / 180));
        ctx.drawImage(this.clawImage, 0, 0, 750, 1500, -50, -112, destDimen/2, destDimen)
        ctx.rotate(-(this.pos_angle - (22.5 * Math.PI / 180)));
        ctx.translate(-(this.center[0] + posX), -(this.center[1] + posY));



        //#902529
        // ctx.beginPath();
        // ctx.arc(this.center[0] + posX, this.center[1] + posY, 40, 0, 2 * Math.PI);
        // ctx.stroke();
        // ctx.fillStyle = 'red';
        // ctx.fill();


        // ctx.rotate(-this.pos_angle);
        // ctx.translate(-this.center[0], -this.center[1]);
    }

    animate(ctx) {
        this.drawClaw(ctx);
    }

    bounds() {
        return {
            centerX: this.center[0] + posX,
            centerY: this.center[1] + posY,
            radius: this.clawRadius,
        }
    }

    collidesWith(crab) {
        const _overlap = (bound1, bound2) => {
            let dx = bound1.centerX - bound2.centerX;
            let dy = bound1.centerY - bound2.centerY;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (2*distance < bound1.radius + bound2.radius) {
                // collision detected!
                return true;
            }    
            return false;
        };
        let collision = false;
       
        if (_overlap(this.bounds(), crab.bounds())) { 
            // this.resetClaw();
            collision = true; 
        };
        return collision;
    }
}

/***/ }),

/***/ "./src/draw_extra_stuff.js":
/*!*********************************!*\
  !*** ./src/draw_extra_stuff.js ***!
  \*********************************/
/*! exports provided: replayButton, drawReplay, drawStart, getMousePos, isInside, drawTimer, drawLostText, drawWinText, drawTitle, drawScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replayButton", function() { return replayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawReplay", function() { return drawReplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawStart", function() { return drawStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMousePos", function() { return getMousePos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInside", function() { return isInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTimer", function() { return drawTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLostText", function() { return drawLostText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawWinText", function() { return drawWinText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTitle", function() { return drawTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawScore", function() { return drawScore; });
const replayButton = {
    x: 325,
    y: 725,
    w: 150,
    h: 60
}

const drawReplay = (ctx) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = "5";
    ctx.strokeRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "#ffeb00";
    ctx.fillRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "black";
    ctx.font = "24pt Bangers";
    ctx.fillText("Replay", 360, replayButton.y + (0.5*replayButton.h) + 12); //12 is half font size
}

const drawStart = (ctx) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = "5";
    ctx.strokeRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "#ffeb00";
    ctx.fillRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "black";
    ctx.font = "24pt Bangers";
    ctx.fillText("Start", 365, replayButton.y + (0.5*replayButton.h) + 12);
}

const getMousePos = (canvas, event) => {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

const isInside = (pos, rect) => {
    return pos.x > rect.x && pos.x < rect.x + rect.w && pos.y < rect.y + rect.h && pos.y > rect.y
}

const drawTimer = (ctx, countdown) => {
    const loc = { x: 50, y: 50 };
    ctx.font = "bold 30pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText(countdown, loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeText(countdown, loc.x, loc.y);
}

const drawLostText = (ctx) => {
    const loc = { x: 125, y: 100 };
    ctx.font = "bold 36pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText("You're not BottomCrab enough!", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeText("You're not BottomCrab enough!", loc.x, loc.y);
}

const drawWinText = (ctx) => {
    const loc = { x: 125, y: 50 };
    ctx.font = "bold 30pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText("You're the bottomest of BottomCrabs!", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeText("You're the bottomest of BottomCrabs!", loc.x, loc.y);
}

const drawTitle = (ctx) => {
    const loc = { x: 150, y: 100 };
    ctx.font = "bold 36pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText("How BottomCrab are you!?", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeText("How BottomCrab are you!?", loc.x, loc.y);
}

const drawScore = (ctx, score) => {
    // if (this.score > 10000) this.score = 0;
    const loc = { x: 700, y: 50 };
    ctx.font = "bold 30pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText(score, loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeText(score, loc.x, loc.y);
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./src/level.js");
/* harmony import */ var _bottom_crab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom_crab */ "./src/bottom_crab.js");
/* harmony import */ var _peripheral_crab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peripheral_crab */ "./src/peripheral_crab.js");
/* harmony import */ var _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw_extra_stuff */ "./src/draw_extra_stuff.js");





const CONSTANTS = {
    escape: 30,
    duration: 1000, //ms
    startDelay: 1000, //ms
    moveDelay: 1000, //ms
    outerBound: 325,
    level1: 90000,
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

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.registerEvents();
        this.winSplash = new Image();
        this.winSplash.src = "../assets/images/BottomCrab Splash.jpg";
        this.loseSplash = new Image();
        this.loseSplash.src = "../assets/images/BottomCrab loseSplash.png";
        this.initialSplash = new Image();
        this.initialSplash.src = "../assets/images/CrabBucketEffect.jpg"
        this.restart();
    }

    animate() {
        if (!this.running) {
            this.level.animate(this.ctx);
            this.ctx.drawImage(this.initialSplash, 0, 0, 650, 526, 75, this.dimensions.height - 526 - 100, 650, 526)            
            Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawTitle"])(this.ctx);
            Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawStart"])(this.ctx);
        } else {
            if (this.gameWon()) {
                this.level.animateWon(this.ctx);
                this.ctx.drawImage(this.winSplash, 0, 0, 1200, 2400, 250, 75, 315, 630)
                // console.log("You're the bottomest of BottomCrabs!");
                // this.restart();
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawWinText"])(this.ctx);
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawReplay"])(this.ctx);
                this.running = false;
            }
            if (this.gameLost()) {
                this.level.animate(this.ctx);
                this.ctx.drawImage(this.loseSplash, 0, 0, 1024, 808, 16, 125, 768, 606)
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawLostText"])(this.ctx);
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawReplay"])(this.ctx);
                this.running = false;
            }
            if (this.running) {
                this.level.animateOcean(this.ctx);
                this.peripheralCrabs.forEach(crab => {
                    crab.animate(this.ctx);
                    if (this.bottomCrab.claw.collidesWith(crab)) {
                        this.clawActive = false;
                        this.clawRetractActive = true;
                        this.crabScore += Math.floor(crab.r/100);
                        this.pullPeripheralCrab(crab);
                    }
                });
                if (this.clawActive || this.clawRetractActive) {
                    this.bottomCrab.claw.animate(this.ctx);
                    this.bottomCrab.animateBody(this.ctx);
                } else {
                    this.bottomCrab.animate(this.ctx);
                }

                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawTimer"])(this.ctx, this.countdown());
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawScore"])(this.ctx, this.score);

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
        if (crab.r >= CONSTANTS.PeripheralCrabStartDist) {
            crab.pulledIn();
        }
    }

    restart() {
        this.reset();
        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions);
        this.bottomCrab = new _bottom_crab__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions);
        this.peripheralCrabs = [];
        for(let i = 0; i < 8; i++) {
            this.peripheralCrabs.push(new _peripheral_crab__WEBPACK_IMPORTED_MODULE_2__["default"](this.dimensions));
            this.peripheralCrabs[i].position(i);
        }
        this.animate();
    }

    reset() {
        this.running = false;
        this.clawActive = false;
        this.clawRetractActive = false;
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
        this.peripheralCrabs.forEach( (crab, i) => {
            if( crab.r > CONSTANTS.outerBound) gameover = true
        })
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
        let mousePos = Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["getMousePos"])(this.ctx.canvas, e);
        if (!this.running) {
            if (Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["isInside"])(mousePos, _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"])) {
                // alert('clicked inside rect');
                this.restart();
                this.play();
            } else {
                // alert('clicked outside rect');
            }    
        }
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
        this.peripheralCrabs.forEach(crab => {
            if (!this.bottomCrab.claw.collidesWith(crab)) {
                switch (e.key) {
                    case "ArrowUp":
                        this.peripheralCrabs.forEach(crab => {
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
                        this.bottomCrabActiveCCW = true;
                        this.clawActive = false;
                        break;
                    case "ArrowRight":
                        this.bottomCrabActiveCW = true;
                        this.clawActive = false;
                        break;
                    // case "ArrowDown":
                    //     this.clawActive = true;
                    //     this.bottomCrab.claw.retractClaw();
                    //     break;
                }
            }
        })
    }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

window.addEventListener("load", function () { //DOMContentLoaded
    const canvas = document.getElementById("myCanvas");
    new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
});


/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = 200;
        this.y = 0;
        this.oceanFloor = new Image();
        this.oceanFloor.src = "../assets/images/ocean-1214747_1920cropped.jpeg";
        this.net = new Image();
        this.net.src = "../assets/images/net.png";
    }

    drawBackground(ctx) {
        ctx.fillStyle = "#00d1ef"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate(ctx) {
        this.drawBackground(ctx);
    }

    drawWonBg(ctx) {
        ctx.fillStyle = "#7dfed5"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animateWon(ctx) {
        this.drawWonBg(ctx);
    }

    drawOceanFloor(ctx) {
        ctx.drawImage(this.oceanFloor, this.x, this.y, 1067, 800, 0, 0, 1067, 800);
        // ctx.drawImage(this.net, 0, 0, 600, 600, 100, 100, 600, 600);
        //background scroll
        if (this.x <= 170) {
            this.flowLeft = false;
        } 
         if (this.x >= 200) {
            this.flowLeft = true;
        }
        if (this.flowLeft) {
            this.x -= 0.15
        } else {
            this.x += 0.15;
        }
    }

    animateOcean(ctx) {
        this.drawOceanFloor(ctx);
    }

}

/***/ }),

/***/ "./src/peripheral_crab.js":
/*!********************************!*\
  !*** ./src/peripheral_crab.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PeripheralCrab; });
const CONSTANTS = {
    startDist: 140,
    speed: 1.2,
    bodyRadius: 40,
    pulledInSpeed: 3.0,
}

class PeripheralCrab {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.center = [this.dimensions.width/2, this.dimensions.height/2];
        this.r = CONSTANTS.startDist;
        this.bodyRadius = CONSTANTS.bodyRadius;
        this.pos_angle = (22.5 * Math.PI / 180);
        this.PeripheralCrab = new Image();
        this.PeripheralCrab.src = "../assets/images/PeripheralCrab.png";
    }

    drawPeripheralCrab(ctx) {
        let posX = this.r * Math.cos(this.pos_angle);
        let posY = this.r * Math.sin(this.pos_angle);
        let rotateAngle =  Math.PI / 2 + this.pos_angle;
        ctx.translate(this.center[0] + posX, this.center[1] + posY);
        ctx.rotate(rotateAngle);
        ctx.drawImage(this.PeripheralCrab, 0, 0, 800, 800, -40, -40, 80, 80)
        ctx.rotate(-rotateAngle);
        ctx.translate(-(this.center[0] + posX), -(this.center[1] + posY));
    }

    animate(ctx) {
        this.drawPeripheralCrab(ctx);
    }

    position(i) {
        this.pos_angle += (45 * Math.PI / 180) * i;
    }

    moveOut() {
        this.r += CONSTANTS.speed;
    }

    pulledIn() {
        this.r -= CONSTANTS.pulledInSpeed;
    }

    reset() {
        this.r = CONSTANTS.startDist;
    }

    bounds() {
        return {
            centerX: this.center[0] + this.r * Math.cos(this.pos_angle),
            centerY: this.center[1] + this.r * Math.sin(this.pos_angle),
            radius: this.bodyRadius,
        }
    }

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGF3LmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3X2V4dHJhX3N0dWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0dBQW9HO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRDtBQUNBO0FBQ0EsNkI7QUFDQTtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDIiwiZmlsZSI6Ii4vZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBDbGF3IGZyb20gJy4vY2xhdyc7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBST1RBVElPTl9BTkdMRTogMi41LCAgLy9pbiBkZWdyZWVzXG4gICAgQ1JBQl9SQUQxOiA3MCxcbiAgICBDUkFCX1JBRDI6IDQ1LFxuICAgIG91dGVyQm91bmQ6IDMyNSxcbn07XG4vLyBjb25zdCBCT1RUT01fQ1JBQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291cmNlXCIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbUNyYWIge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGgvMjtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yO1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvQm90dG9tQ3JhYjIucG5nXCI7XG4gICAgICAgIC8vIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvUGVyaXBoZXJhbENyYWIucG5nXCJcbiAgICAgICAgLy8gdGhpcy5Cb3R0b21DcmFiLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU3NzI0NzA3IGNvcHkucG5nXCJcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiQm9keSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWJCb2R5LnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU1NDMxZDQyb25lYXJtLnBuZ1wiO1xuICAgICAgICB0aGlzLmNsYXcgPSBuZXcgQ2xhdyh0aGlzLmRpbWVuc2lvbnMsIHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgIH1cblxuICAgIGRyYXdCb3R0b21DcmFiKGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLkJvdHRvbUNyYWIsIDAsIDAsIDE1MDAsIDE1MDAsIC0xMDAsIC0xMDAsIGRlc3REaW1lbiwgZGVzdERpbWVuKVxuICAgICAgICBjdHgucm90YXRlKC10aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcblxuICAgICAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIGN0eC5lbGxpcHNlKDEwMCwgMTAwLCBDT05TVEFOVFMuQ1JBQl9SQUQxLCBDT05TVEFOVFMuQ1JBQl9SQUQyLCAwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7IC8vKHgsIHksIHJhZGl1czEsIHJhZGl1czIsIHBvc2l0aW9uIGFuZ2xlLCBzdGFydCBhbmdsZSwgZW5kIGFuZ2xlLCBjb3VudGVyY2xvY2t3aXNlIGJvb2xlYW4pXG4gICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIC8vIGN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbUNyYWJCb2R5KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLkJvdHRvbUNyYWJCb2R5LCAwLCAwLCAxNTAwLCAxNTAwLCAtMTAwLCAtMTAwLCBkZXN0RGltZW4sIGRlc3REaW1lbilcbiAgICAgICAgY3R4LnJvdGF0ZSgtdGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgfVxuXG4gICAgZHJhd0dyaWQoY3R4KSB7XG4gICAgICAgIC8vY2lyY2xlc1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDEwMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMTc1LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAyNTAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIENPTlNUQU5UUy5vdXRlckJvdW5kLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvL2xpbmVzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIDApO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIHRoaXMueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIDApO1xuICAgICAgICBjdHgubGluZVRvKDAsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3JhYihjdHgpXG4gICAgICAgIC8vIHRoaXMuZHJhd0dyaWQoY3R4KTtcbiAgICB9XG5cbiAgICBhbmltYXRlQm9keShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3JhYkJvZHkoY3R4KTtcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JpZChjdHgpO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApXG4gICAgICAgIHRoaXMuY2xhdy5wb3NfYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ0NXKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlIC09IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jbGF3LnBvc19hbmdsZSAtPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgfVxufSIsImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBjbGF3UmFkaXVzOiA0MCxcbiAgICBjbGF3U3BlZWQ6IDMuMCxcbiAgICBtYXhSYW5nZTogMzAwLFxuICAgIHN0YXJ0RGlzdDogNjAsXG59XG5cbmxldCBwb3NYO1xubGV0IHBvc1k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXcge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGNyYWJBbmdsZSkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNlbnRlciA9IFt0aGlzLmRpbWVuc2lvbnMud2lkdGgvMiwgdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yXTtcbiAgICAgICAgdGhpcy5jbGF3UmFkaXVzID0gQ09OU1RBTlRTLmNsYXdSYWRpdXM7XG4gICAgICAgIHRoaXMuciA9IENPTlNUQU5UUy5zdGFydERpc3Q7XG4gICAgICAgIHRoaXMucG9zX2FuZ2xlID0gY3JhYkFuZ2xlICsgKDIyLjUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jbGF3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5jbGF3SW1hZ2Uuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJjbGF3My5wbmdcIjtcbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIG1vdmVDbGF3KCkge1xuICAgICAgICBwb3NYID0gdGhpcy5yICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBwb3NZID0gdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpO1xuICAgIH1cblxuICAgIHJldHJhY3RDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yID4gKENPTlNUQU5UUy5jbGF3U3BlZWQgKyBDT05TVEFOVFMuc3RhcnREaXN0KSkge1xuICAgICAgICAgICAgdGhpcy5yIC09IChDT05TVEFOVFMuY2xhd1NwZWVkKTsgLy9jYW4gdHVuZSBmb3Igc2xvd2VyIHJldHJhY3Rpb24gcmF0ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICB9XG5cbiAgICBleHRlbmRDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yIDwgQ09OU1RBTlRTLm1heFJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnIgKz0gQ09OU1RBTlRTLmNsYXdTcGVlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgcmVzZXRDbGF3KCkge1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgIH1cblxuICAgIGRyYXdDbGF3KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSAtICgwICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjOTAyNTI5XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCA0MCwgdGhpcy5yLTIwLCA2KTtcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMucG9zX2FuZ2xlIC0gKDAgKiBNYXRoLlBJIC8gMTgwKSkpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0pLCAtKHRoaXMuY2VudGVyWzFdKSk7XG5cbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmNlbnRlclswXSArIHBvc1gsIHRoaXMuY2VudGVyWzFdICsgcG9zWSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NfYW5nbGUgLSAoMjIuNSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNsYXdJbWFnZSwgMCwgMCwgNzUwLCAxNTAwLCAtNTAsIC0xMTIsIGRlc3REaW1lbi8yLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLnBvc19hbmdsZSAtICgyMi41ICogTWF0aC5QSSAvIDE4MCkpKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtKHRoaXMuY2VudGVyWzBdICsgcG9zWCksIC0odGhpcy5jZW50ZXJbMV0gKyBwb3NZKSk7XG5cblxuXG4gICAgICAgIC8vIzkwMjUyOVxuICAgICAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIGN0eC5hcmModGhpcy5jZW50ZXJbMF0gKyBwb3NYLCB0aGlzLmNlbnRlclsxXSArIHBvc1ksIDQwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuXG5cbiAgICAgICAgLy8gY3R4LnJvdGF0ZSgtdGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICAvLyBjdHgudHJhbnNsYXRlKC10aGlzLmNlbnRlclswXSwgLXRoaXMuY2VudGVyWzFdKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdDbGF3KGN0eCk7XG4gICAgfVxuXG4gICAgYm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VudGVyWDogdGhpcy5jZW50ZXJbMF0gKyBwb3NYLFxuICAgICAgICAgICAgY2VudGVyWTogdGhpcy5jZW50ZXJbMV0gKyBwb3NZLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmNsYXdSYWRpdXMsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlc1dpdGgoY3JhYikge1xuICAgICAgICBjb25zdCBfb3ZlcmxhcCA9IChib3VuZDEsIGJvdW5kMikgPT4ge1xuICAgICAgICAgICAgbGV0IGR4ID0gYm91bmQxLmNlbnRlclggLSBib3VuZDIuY2VudGVyWDtcbiAgICAgICAgICAgIGxldCBkeSA9IGJvdW5kMS5jZW50ZXJZIC0gYm91bmQyLmNlbnRlclk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgaWYgKDIqZGlzdGFuY2UgPCBib3VuZDEucmFkaXVzICsgYm91bmQyLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIC8vIGNvbGxpc2lvbiBkZXRlY3RlZCFcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICBcbiAgICAgICAgaWYgKF9vdmVybGFwKHRoaXMuYm91bmRzKCksIGNyYWIuYm91bmRzKCkpKSB7IFxuICAgICAgICAgICAgLy8gdGhpcy5yZXNldENsYXcoKTtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7IFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgcmVwbGF5QnV0dG9uID0ge1xuICAgIHg6IDMyNSxcbiAgICB5OiA3MjUsXG4gICAgdzogMTUwLFxuICAgIGg6IDYwXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3UmVwbGF5ID0gKGN0eCkgPT4ge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gXCI1XCI7XG4gICAgY3R4LnN0cm9rZVJlY3QocmVwbGF5QnV0dG9uLngsIHJlcGxheUJ1dHRvbi55LCByZXBsYXlCdXR0b24udywgcmVwbGF5QnV0dG9uLmgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZWIwMFwiO1xuICAgIGN0eC5maWxsUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5mb250ID0gXCIyNHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFRleHQoXCJSZXBsYXlcIiwgMzYwLCByZXBsYXlCdXR0b24ueSArICgwLjUqcmVwbGF5QnV0dG9uLmgpICsgMTIpOyAvLzEyIGlzIGhhbGYgZm9udCBzaXplXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3U3RhcnQgPSAoY3R4KSA9PiB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSBcIjVcIjtcbiAgICBjdHguc3Ryb2tlUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZlYjAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjI0cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsVGV4dChcIlN0YXJ0XCIsIDM2NSwgcmVwbGF5QnV0dG9uLnkgKyAoMC41KnJlcGxheUJ1dHRvbi5oKSArIDEyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1vdXNlUG9zID0gKGNhbnZhcywgZXZlbnQpID0+IHtcbiAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnNpZGUgPSAocG9zLCByZWN0KSA9PiB7XG4gICAgcmV0dXJuIHBvcy54ID4gcmVjdC54ICYmIHBvcy54IDwgcmVjdC54ICsgcmVjdC53ICYmIHBvcy55IDwgcmVjdC55ICsgcmVjdC5oICYmIHBvcy55ID4gcmVjdC55XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3VGltZXIgPSAoY3R4LCBjb3VudGRvd24pID0+IHtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDUwLCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KGNvdW50ZG93biwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVRleHQoY291bnRkb3duLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0xvc3RUZXh0ID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogMTI1LCB5OiAxMDAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzNnB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIllvdSdyZSBub3QgQm90dG9tQ3JhYiBlbm91Z2ghXCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiWW91J3JlIG5vdCBCb3R0b21DcmFiIGVub3VnaCFcIiwgbG9jLngsIGxvYy55KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdXaW5UZXh0ID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogMTI1LCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIsIGxvYy54LCBsb2MueSk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3VGl0bGUgPSAoY3R4KSA9PiB7XG4gICAgY29uc3QgbG9jID0geyB4OiAxNTAsIHk6IDEwMCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDM2cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSG93IEJvdHRvbUNyYWIgYXJlIHlvdSE/XCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiSG93IEJvdHRvbUNyYWIgYXJlIHlvdSE/XCIsIGxvYy54LCBsb2MueSk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3U2NvcmUgPSAoY3R4LCBzY29yZSkgPT4ge1xuICAgIC8vIGlmICh0aGlzLnNjb3JlID4gMTAwMDApIHRoaXMuc2NvcmUgPSAwO1xuICAgIGNvbnN0IGxvYyA9IHsgeDogNzAwLCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KHNjb3JlLCBsb2MueCwgbG9jLnkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlVGV4dChzY29yZSwgbG9jLngsIGxvYy55KTtcbn0iLCJpbXBvcnQgTGV2ZWwgZnJvbSAnLi9sZXZlbCc7XG5pbXBvcnQgQm90dG9tQ3JhYiBmcm9tICcuL2JvdHRvbV9jcmFiJztcbmltcG9ydCBQZXJpcGhlcmFsQ3JhYiBmcm9tICcuL3BlcmlwaGVyYWxfY3JhYic7XG5pbXBvcnQgeyBkcmF3VGltZXIsIGRyYXdMb3N0VGV4dCwgZHJhd1dpblRleHQsXG4gICAgZHJhd1RpdGxlLCBkcmF3U2NvcmUsIFxuICAgIGRyYXdSZXBsYXksIHJlcGxheUJ1dHRvbiwgZHJhd1N0YXJ0LFxuICAgIGdldE1vdXNlUG9zLCBpc0luc2lkZSB9IGZyb20gJy4vZHJhd19leHRyYV9zdHVmZic7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBlc2NhcGU6IDMwLFxuICAgIGR1cmF0aW9uOiAxMDAwLCAvL21zXG4gICAgc3RhcnREZWxheTogMTAwMCwgLy9tc1xuICAgIG1vdmVEZWxheTogMTAwMCwgLy9tc1xuICAgIG91dGVyQm91bmQ6IDMyNSxcbiAgICBsZXZlbDE6IDkwMDAwLFxuICAgIGxldmVsMjogNjAwMDAsXG4gICAgbGV2ZWwzOiAzMDAwMCxcbiAgICBQZXJpcGhlcmFsQ3JhYlN0YXJ0RGlzdDogMTQwLFxufVxuXG5sZXQgc3RhcnR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5sZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG5sZXQgbGFzdHJhbmRvbSA9IDg7XG5sZXQgdGltZXN0YW1wID0gMDtcbmxldCBidWZmZXJTdGFydCA9IDA7XG5sZXQgaW50ZXJ2YWwgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIHRoaXMud2luU3BsYXNoID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMud2luU3BsYXNoLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9Cb3R0b21DcmFiIFNwbGFzaC5qcGdcIjtcbiAgICAgICAgdGhpcy5sb3NlU3BsYXNoID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubG9zZVNwbGFzaC5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvQm90dG9tQ3JhYiBsb3NlU3BsYXNoLnBuZ1wiO1xuICAgICAgICB0aGlzLmluaXRpYWxTcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU3BsYXNoLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9DcmFiQnVja2V0RWZmZWN0LmpwZ1wiXG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5pdGlhbFNwbGFzaCwgMCwgMCwgNjUwLCA1MjYsIDc1LCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gNTI2IC0gMTAwLCA2NTAsIDUyNikgICAgICAgICAgICBcbiAgICAgICAgICAgIGRyYXdUaXRsZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICBkcmF3U3RhcnQodGhpcy5jdHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVdvbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlV29uKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy53aW5TcGxhc2gsIDAsIDAsIDEyMDAsIDI0MDAsIDI1MCwgNzUsIDMxNSwgNjMwKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgICAgIGRyYXdXaW5UZXh0KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICBkcmF3UmVwbGF5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVMb3N0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxvc2VTcGxhc2gsIDAsIDAsIDEwMjQsIDgwOCwgMTYsIDEyNSwgNzY4LCA2MDYpXG4gICAgICAgICAgICAgICAgZHJhd0xvc3RUZXh0KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICBkcmF3UmVwbGF5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGVPY2Vhbih0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3JhYi5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5jbGF3LmNvbGxpZGVzV2l0aChjcmFiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXdSZXRyYWN0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JhYlNjb3JlICs9IE1hdGguZmxvb3IoY3JhYi5yLzEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1bGxQZXJpcGhlcmFsQ3JhYihjcmFiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYXdBY3RpdmUgfHwgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuY2xhdy5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmFuaW1hdGVCb2R5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZHJhd1RpbWVyKHRoaXMuY3R4LCB0aGlzLmNvdW50ZG93bigpKTtcbiAgICAgICAgICAgICAgICBkcmF3U2NvcmUodGhpcy5jdHgsIHRoaXMuc2NvcmUpO1xuXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlID0gTWF0aC5mbG9vcigodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQpIC8gMTAwMCkgKyB0aGlzLmNyYWJTY29yZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gQ09OU1RBTlRTLmxldmVsMSAtICh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyZWQgPSB0aW1lc3RhbXAgLSBidWZmZXJTdGFydCA+IENPTlNUQU5UUy5zdGFydERlbGF5O1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlRGVsYXllZCA9IHRpbWVzdGFtcCAtIGludGVydmFsID4gQ09OU1RBTlRTLm1vdmVEZWxheTtcbiAgICAgICAgICAgICAgICBsZXQgZGlmZmVyZW50Q3JhYiA9IGxhc3RyYW5kb20gIT09IHJhbmRvbTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgfHwgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJvdHRvbUNyYWIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmNsYXdBY3RpdmUgfHwgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyZWQgJiYgbW92ZURlbGF5ZWQgJiYgZGlmZmVyZW50Q3JhYiApIHsgLy9idWZmZXIgdGltZSBiZWZvcmUgY3JhYnMgc3RhcnQgbW92aW5nIG91dFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQZXJpcGhlcmFsQ3JhYih0aW1lc3RhbXAsIHJhbmRvbSwgQ09OU1RBTlRTLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlQm90dG9tQ3JhYigpIHtcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDVygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNDVygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUNsYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYXdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5jbGF3LmV4dGVuZENsYXcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5jbGF3LnJldHJhY3RDbGF3KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLmNsYXcuciA8PSA3MykgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBlcmlwaGVyYWxDcmFiKHRpbWVzdGFtcCwgaSwgZHVyYXRpb24pIHtcbiAgICAgICAgc3RhcnR0aW1lID0gaW50ZXJ2YWwgKyBDT05TVEFOVFMubW92ZURlbGF5O1xuICAgICAgICBpZiAoKHRpbWVzdGFtcCAtIHN0YXJ0dGltZSkgPD0gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzW2ldLm1vdmVPdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGludGVydmFsID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgbGFzdHJhbmRvbSA9IGk7XG4gICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1bGxQZXJpcGhlcmFsQ3JhYihjcmFiKSB7XG4gICAgICAgIGlmIChjcmFiLnIgPj0gQ09OU1RBTlRTLlBlcmlwaGVyYWxDcmFiU3RhcnREaXN0KSB7XG4gICAgICAgICAgICBjcmFiLnB1bGxlZEluKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiID0gbmV3IEJvdHRvbUNyYWIodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMucHVzaChuZXcgUGVyaXBoZXJhbENyYWIodGhpcy5kaW1lbnNpb25zKSk7XG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFic1tpXS5wb3NpdGlvbihpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jcmFiU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGltZXN0YW1wID0gMDtcbiAgICAgICAgYnVmZmVyU3RhcnQgPSAwO1xuICAgICAgICBpbnRlcnZhbCA9IDA7XG4gICAgfVxuXG4gICAgZ2FtZUxvc3QoKSB7XG4gICAgICAgIGxldCBnYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKCAoY3JhYiwgaSkgPT4ge1xuICAgICAgICAgICAgaWYoIGNyYWIuciA+IENPTlNUQU5UUy5vdXRlckJvdW5kKSBnYW1lb3ZlciA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGdhbWVvdmVyO1xuICAgIH1cblxuICAgIGdhbWVXb24oKSB7XG4gICAgICAgIGxldCBnYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICBpZiAoKHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0KSA+IENPTlNUQU5UUy5sZXZlbDEpIHtcbiAgICAgICAgICAgIGdhbWVvdmVyID0gdHJ1ZTtcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIGdhbWVvdmVyO1xuICAgIH1cblxuICAgIGNvdW50ZG93bigpIHtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMudGltZXIgLyA2MDAwMCk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gTWF0aC5jZWlsKCh0aGlzLnRpbWVyICUgNjAwMDApLzEwMDApO1xuICAgICAgICByZXR1cm4gc2Vjb25kcyA+PSAxMCA/IGAke21pbnV0ZXN9OiR7c2Vjb25kc31gIDogYCR7bWludXRlc306MCR7c2Vjb25kc31gXG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBzdGFydHRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIGJ1ZmZlclN0YXJ0ID0gdGltZXN0YW1wO1xuICAgICAgICBpbnRlcnZhbCA9IHRpbWVzdGFtcDtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5jbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlkb3duLmJpbmQodGhpcykpO1xuICAgICAgICAvLyB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGNsaWNrKGUpIHtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3ModGhpcy5jdHguY2FudmFzLCBlKTtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIGlmIChpc0luc2lkZShtb3VzZVBvcywgcmVwbGF5QnV0dG9uKSkge1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdjbGlja2VkIGluc2lkZSByZWN0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdjbGlja2VkIG91dHNpZGUgcmVjdCcpO1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgfVxuICAgIH0gICAgXG5cbiAgICBrZXl1cChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlkb3duKGUpIHtcbiAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ib3R0b21DcmFiLmNsYXcuY29sbGlkZXNXaXRoKGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLmNsYXcuY29sbGlkZXNXaXRoKGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd1JldHJhY3RBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jbGF3QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYm90dG9tQ3JhYi5jbGF3LnJldHJhY3RDbGF3KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7IC8vRE9NQ29udGVudExvYWRlZFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgbmV3IEdhbWUoY2FudmFzKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy54ID0gMjAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLm9jZWFuRmxvb3IgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5vY2VhbkZsb29yLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9vY2Vhbi0xMjE0NzQ3XzE5MjBjcm9wcGVkLmpwZWdcIjtcbiAgICAgICAgdGhpcy5uZXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5uZXQuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL25ldC5wbmdcIjtcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwZDFlZlwiXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3V29uQmcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM3ZGZlZDVcIlxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmltYXRlV29uKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdXb25CZyhjdHgpO1xuICAgIH1cblxuICAgIGRyYXdPY2VhbkZsb29yKGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMub2NlYW5GbG9vciwgdGhpcy54LCB0aGlzLnksIDEwNjcsIDgwMCwgMCwgMCwgMTA2NywgODAwKTtcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLm5ldCwgMCwgMCwgNjAwLCA2MDAsIDEwMCwgMTAwLCA2MDAsIDYwMCk7XG4gICAgICAgIC8vYmFja2dyb3VuZCBzY3JvbGxcbiAgICAgICAgaWYgKHRoaXMueCA8PSAxNzApIHtcbiAgICAgICAgICAgIHRoaXMuZmxvd0xlZnQgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgIGlmICh0aGlzLnggPj0gMjAwKSB7XG4gICAgICAgICAgICB0aGlzLmZsb3dMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mbG93TGVmdCkge1xuICAgICAgICAgICAgdGhpcy54IC09IDAuMTVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCArPSAwLjE1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZU9jZWFuKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdPY2VhbkZsb29yKGN0eCk7XG4gICAgfVxuXG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIHN0YXJ0RGlzdDogMTQwLFxuICAgIHNwZWVkOiAxLjIsXG4gICAgYm9keVJhZGl1czogNDAsXG4gICAgcHVsbGVkSW5TcGVlZDogMy4wLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpcGhlcmFsQ3JhYiB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNlbnRlciA9IFt0aGlzLmRpbWVuc2lvbnMud2lkdGgvMiwgdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yXTtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICAgICAgdGhpcy5ib2R5UmFkaXVzID0gQ09OU1RBTlRTLmJvZHlSYWRpdXM7XG4gICAgICAgIHRoaXMucG9zX2FuZ2xlID0gKDIyLjUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5QZXJpcGhlcmFsQ3JhYiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLlBlcmlwaGVyYWxDcmFiLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9QZXJpcGhlcmFsQ3JhYi5wbmdcIjtcbiAgICB9XG5cbiAgICBkcmF3UGVyaXBoZXJhbENyYWIoY3R4KSB7XG4gICAgICAgIGxldCBwb3NYID0gdGhpcy5yICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBsZXQgcG9zWSA9IHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgbGV0IHJvdGF0ZUFuZ2xlID0gIE1hdGguUEkgLyAyICsgdGhpcy5wb3NfYW5nbGU7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyBwb3NYLCB0aGlzLmNlbnRlclsxXSArIHBvc1kpO1xuICAgICAgICBjdHgucm90YXRlKHJvdGF0ZUFuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLlBlcmlwaGVyYWxDcmFiLCAwLCAwLCA4MDAsIDgwMCwgLTQwLCAtNDAsIDgwLCA4MClcbiAgICAgICAgY3R4LnJvdGF0ZSgtcm90YXRlQW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyBwb3NYKSwgLSh0aGlzLmNlbnRlclsxXSArIHBvc1kpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdQZXJpcGhlcmFsQ3JhYihjdHgpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKGkpIHtcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgKz0gKDQ1ICogTWF0aC5QSSAvIDE4MCkgKiBpO1xuICAgIH1cblxuICAgIG1vdmVPdXQoKSB7XG4gICAgICAgIHRoaXMuciArPSBDT05TVEFOVFMuc3BlZWQ7XG4gICAgfVxuXG4gICAgcHVsbGVkSW4oKSB7XG4gICAgICAgIHRoaXMuciAtPSBDT05TVEFOVFMucHVsbGVkSW5TcGVlZDtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICB9XG5cbiAgICBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKSxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmJvZHlSYWRpdXMsXG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9