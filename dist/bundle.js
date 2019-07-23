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
        this.BottomCrab.src = "./assets/images/BottomCrab2.png";
        // this.BottomCrab.src = "./assets/images/PeripheralCrab.png"
        // this.BottomCrab.src = "./assets/images/5d30157724707 copy.png"
        this.BottomCrabBody = new Image();
        this.BottomCrabBody.src = "./assets/images/5d30155431d42onearm.png";
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
        this.clawImage.src = "./assets/images/5d30155431d42claw3.png";
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
        this.winSplash.src = "./assets/images/BottomCrab Splash.jpg";
        this.loseSplash = new Image();
        this.loseSplash.src = "./assets/images/BottomCrab loseSplash.png";
        this.initialSplash = new Image();
        this.initialSplash.src = "./assets/images/CrabBucketEffect.jpg"
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
            let rect = {
                x: _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"].x * 0.8,
                y: _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"].y * 0.8,
                w: _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"].w * 0.8,
                h: _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"].h * 0.8,
            };
            let is = _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["isInside"];
            // debugger
            if (Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["isInside"])(mousePos, rect)) {
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
                        // this.clawActive = false;
                        break;
                    case "ArrowRight":
                        this.bottomCrabActiveCW = true;
                        // this.clawActive = false;
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
        this.oceanFloor.src = "./assets/images/ocean-1214747_1920cropped.jpeg";
        this.net = new Image();
        this.net.src = "./assets/images/net.png";
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
        this.PeripheralCrab.src = "./assets/images/PeripheralCrab.png";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGF3LmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3X2V4dHJhX3N0dWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0dBQW9HO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRDtBQUNBO0FBQ0EsNkI7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDIiwiZmlsZSI6Ii4vZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBDbGF3IGZyb20gJy4vY2xhdyc7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBST1RBVElPTl9BTkdMRTogMi41LCAgLy9pbiBkZWdyZWVzXG4gICAgQ1JBQl9SQUQxOiA3MCxcbiAgICBDUkFCX1JBRDI6IDQ1LFxuICAgIG91dGVyQm91bmQ6IDMyNSxcbn07XG4vLyBjb25zdCBCT1RUT01fQ1JBQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291cmNlXCIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbUNyYWIge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGgvMjtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yO1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9Cb3R0b21DcmFiMi5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5Cb3R0b21DcmFiLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL1BlcmlwaGVyYWxDcmFiLnBuZ1wiXG4gICAgICAgIC8vIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU3NzI0NzA3IGNvcHkucG5nXCJcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiQm9keSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWJCb2R5LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJvbmVhcm0ucG5nXCI7XG4gICAgICAgIHRoaXMuY2xhdyA9IG5ldyBDbGF3KHRoaXMuZGltZW5zaW9ucywgdGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbUNyYWIoY3R4KSB7XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuQm90dG9tQ3JhYiwgMCwgMCwgMTUwMCwgMTUwMCwgLTEwMCwgLTEwMCwgZGVzdERpbWVuLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLXRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmVsbGlwc2UoMTAwLCAxMDAsIENPTlNUQU5UUy5DUkFCX1JBRDEsIENPTlNUQU5UUy5DUkFCX1JBRDIsIDAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTsgLy8oeCwgeSwgcmFkaXVzMSwgcmFkaXVzMiwgcG9zaXRpb24gYW5nbGUsIHN0YXJ0IGFuZ2xlLCBlbmQgYW5nbGUsIGNvdW50ZXJjbG9ja3dpc2UgYm9vbGVhbilcbiAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICBkcmF3Qm90dG9tQ3JhYkJvZHkoY3R4KSB7XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuQm90dG9tQ3JhYkJvZHksIDAsIDAsIDE1MDAsIDE1MDAsIC0xMDAsIC0xMDAsIGRlc3REaW1lbiwgZGVzdERpbWVuKVxuICAgICAgICBjdHgucm90YXRlKC10aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICB9XG5cbiAgICBkcmF3R3JpZChjdHgpIHtcbiAgICAgICAgLy9jaXJjbGVzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMTAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAxNzUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDI1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgQ09OU1RBTlRTLm91dGVyQm91bmQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vbGluZXNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgdGhpcy55KTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMueSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8oMCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCb3R0b21DcmFiKGN0eClcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JpZChjdHgpO1xuICAgIH1cblxuICAgIGFuaW1hdGVCb2R5KGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCb3R0b21DcmFiQm9keShjdHgpO1xuICAgICAgICAvLyB0aGlzLmRyYXdHcmlkKGN0eCk7XG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWJDVygpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl9hbmdsZSArPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MClcbiAgICAgICAgdGhpcy5jbGF3LnBvc19hbmdsZSArPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWJDQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgLT0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmNsYXcucG9zX2FuZ2xlIC09IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICB9XG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIGNsYXdSYWRpdXM6IDQwLFxuICAgIGNsYXdTcGVlZDogMy4wLFxuICAgIG1heFJhbmdlOiAzMDAsXG4gICAgc3RhcnREaXN0OiA2MCxcbn1cblxubGV0IHBvc1g7XG5sZXQgcG9zWTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhdyB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgY3JhYkFuZ2xlKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuY2VudGVyID0gW3RoaXMuZGltZW5zaW9ucy53aWR0aC8yLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LzJdO1xuICAgICAgICB0aGlzLmNsYXdSYWRpdXMgPSBDT05TVEFOVFMuY2xhd1JhZGl1cztcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgPSBjcmFiQW5nbGUgKyAoMjIuNSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmNsYXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmNsYXdJbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU1NDMxZDQyY2xhdzMucG5nXCI7XG4gICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICB9XG5cbiAgICBtb3ZlQ2xhdygpIHtcbiAgICAgICAgcG9zWCA9IHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgcG9zWSA9IHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKTtcbiAgICB9XG5cbiAgICByZXRyYWN0Q2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuciA+IChDT05TVEFOVFMuY2xhd1NwZWVkICsgQ09OU1RBTlRTLnN0YXJ0RGlzdCkpIHtcbiAgICAgICAgICAgIHRoaXMuciAtPSAoQ09OU1RBTlRTLmNsYXdTcGVlZCk7IC8vY2FuIHR1bmUgZm9yIHNsb3dlciByZXRyYWN0aW9uIHJhdGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kQ2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuciA8IENPTlNUQU5UUy5tYXhSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5yICs9IENPTlNUQU5UUy5jbGF3U3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIHJlc2V0Q2xhdygpIHtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICB9XG5cbiAgICBkcmF3Q2xhdyhjdHgpIHtcbiAgICAgICAgbGV0IGRlc3REaW1lbiA9IDIwMDtcblxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NfYW5nbGUgLSAoMCAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzkwMjUyOVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgNDAsIHRoaXMuci0yMCwgNik7XG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLnBvc19hbmdsZSAtICgwICogTWF0aC5QSSAvIDE4MCkpKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtKHRoaXMuY2VudGVyWzBdKSwgLSh0aGlzLmNlbnRlclsxXSkpO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyBwb3NYLCB0aGlzLmNlbnRlclsxXSArIHBvc1kpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zX2FuZ2xlIC0gKDIyLjUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jbGF3SW1hZ2UsIDAsIDAsIDc1MCwgMTUwMCwgLTUwLCAtMTEyLCBkZXN0RGltZW4vMiwgZGVzdERpbWVuKVxuICAgICAgICBjdHgucm90YXRlKC0odGhpcy5wb3NfYW5nbGUgLSAoMjIuNSAqIE1hdGguUEkgLyAxODApKSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSArIHBvc1gpLCAtKHRoaXMuY2VudGVyWzFdICsgcG9zWSkpO1xuXG5cblxuICAgICAgICAvLyM5MDI1MjlcbiAgICAgICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyBjdHguYXJjKHRoaXMuY2VudGVyWzBdICsgcG9zWCwgdGhpcy5jZW50ZXJbMV0gKyBwb3NZLCA0MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcblxuXG4gICAgICAgIC8vIGN0eC5yb3RhdGUoLXRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgLy8gY3R4LnRyYW5zbGF0ZSgtdGhpcy5jZW50ZXJbMF0sIC10aGlzLmNlbnRlclsxXSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Q2xhdyhjdHgpO1xuICAgIH1cblxuICAgIGJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNlbnRlclg6IHRoaXMuY2VudGVyWzBdICsgcG9zWCxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgcG9zWSxcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5jbGF3UmFkaXVzLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZXNXaXRoKGNyYWIpIHtcbiAgICAgICAgY29uc3QgX292ZXJsYXAgPSAoYm91bmQxLCBib3VuZDIpID0+IHtcbiAgICAgICAgICAgIGxldCBkeCA9IGJvdW5kMS5jZW50ZXJYIC0gYm91bmQyLmNlbnRlclg7XG4gICAgICAgICAgICBsZXQgZHkgPSBib3VuZDEuY2VudGVyWSAtIGJvdW5kMi5jZW50ZXJZO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGlmICgyKmRpc3RhbmNlIDwgYm91bmQxLnJhZGl1cyArIGJvdW5kMi5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb2xsaXNpb24gZGV0ZWN0ZWQhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgXG4gICAgICAgIGlmIChfb3ZlcmxhcCh0aGlzLmJvdW5kcygpLCBjcmFiLmJvdW5kcygpKSkgeyBcbiAgICAgICAgICAgIC8vIHRoaXMucmVzZXRDbGF3KCk7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlOyBcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IHJlcGxheUJ1dHRvbiA9IHtcbiAgICB4OiAzMjUsXG4gICAgeTogNzI1LFxuICAgIHc6IDE1MCxcbiAgICBoOiA2MFxufVxuXG5leHBvcnQgY29uc3QgZHJhd1JlcGxheSA9IChjdHgpID0+IHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IFwiNVwiO1xuICAgIGN0eC5zdHJva2VSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmViMDBcIjtcbiAgICBjdHguZmlsbFJlY3QocmVwbGF5QnV0dG9uLngsIHJlcGxheUJ1dHRvbi55LCByZXBsYXlCdXR0b24udywgcmVwbGF5QnV0dG9uLmgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZm9udCA9IFwiMjRwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiUmVwbGF5XCIsIDM2MCwgcmVwbGF5QnV0dG9uLnkgKyAoMC41KnJlcGxheUJ1dHRvbi5oKSArIDEyKTsgLy8xMiBpcyBoYWxmIGZvbnQgc2l6ZVxufVxuXG5leHBvcnQgY29uc3QgZHJhd1N0YXJ0ID0gKGN0eCkgPT4ge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gXCI1XCI7XG4gICAgY3R4LnN0cm9rZVJlY3QocmVwbGF5QnV0dG9uLngsIHJlcGxheUJ1dHRvbi55LCByZXBsYXlCdXR0b24udywgcmVwbGF5QnV0dG9uLmgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZWIwMFwiO1xuICAgIGN0eC5maWxsUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5mb250ID0gXCIyNHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFRleHQoXCJTdGFydFwiLCAzNjUsIHJlcGxheUJ1dHRvbi55ICsgKDAuNSpyZXBsYXlCdXR0b24uaCkgKyAxMik7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNb3VzZVBvcyA9IChjYW52YXMsIGV2ZW50KSA9PiB7XG4gICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW5zaWRlID0gKHBvcywgcmVjdCkgPT4ge1xuICAgIHJldHVybiBwb3MueCA+IHJlY3QueCAmJiBwb3MueCA8IHJlY3QueCArIHJlY3QudyAmJiBwb3MueSA8IHJlY3QueSArIHJlY3QuaCAmJiBwb3MueSA+IHJlY3QueVxufVxuXG5leHBvcnQgY29uc3QgZHJhd1RpbWVyID0gKGN0eCwgY291bnRkb3duKSA9PiB7XG4gICAgY29uc3QgbG9jID0geyB4OiA1MCwgeTogNTAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChjb3VudGRvd24sIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KGNvdW50ZG93biwgbG9jLngsIGxvYy55KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdMb3N0VGV4dCA9IChjdHgpID0+IHtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDEyNSwgeTogMTAwIH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzZwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJZb3UncmUgbm90IEJvdHRvbUNyYWIgZW5vdWdoIVwiLCBsb2MueCwgbG9jLnkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlVGV4dChcIllvdSdyZSBub3QgQm90dG9tQ3JhYiBlbm91Z2ghXCIsIGxvYy54LCBsb2MueSk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3V2luVGV4dCA9IChjdHgpID0+IHtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDEyNSwgeTogNTAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIllvdSdyZSB0aGUgYm90dG9tZXN0IG9mIEJvdHRvbUNyYWJzIVwiLCBsb2MueCwgbG9jLnkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlVGV4dChcIllvdSdyZSB0aGUgYm90dG9tZXN0IG9mIEJvdHRvbUNyYWJzIVwiLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd1RpdGxlID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogMTUwLCB5OiAxMDAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzNnB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIkhvdyBCb3R0b21DcmFiIGFyZSB5b3UhP1wiLCBsb2MueCwgbG9jLnkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlVGV4dChcIkhvdyBCb3R0b21DcmFiIGFyZSB5b3UhP1wiLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd1Njb3JlID0gKGN0eCwgc2NvcmUpID0+IHtcbiAgICAvLyBpZiAodGhpcy5zY29yZSA+IDEwMDAwKSB0aGlzLnNjb3JlID0gMDtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDcwMCwgeTogNTAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChzY29yZSwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVRleHQoc2NvcmUsIGxvYy54LCBsb2MueSk7XG59IiwiaW1wb3J0IExldmVsIGZyb20gJy4vbGV2ZWwnO1xuaW1wb3J0IEJvdHRvbUNyYWIgZnJvbSAnLi9ib3R0b21fY3JhYic7XG5pbXBvcnQgUGVyaXBoZXJhbENyYWIgZnJvbSAnLi9wZXJpcGhlcmFsX2NyYWInO1xuaW1wb3J0IHsgZHJhd1RpbWVyLCBkcmF3TG9zdFRleHQsIGRyYXdXaW5UZXh0LFxuICAgIGRyYXdUaXRsZSwgZHJhd1Njb3JlLCBcbiAgICBkcmF3UmVwbGF5LCByZXBsYXlCdXR0b24sIGRyYXdTdGFydCxcbiAgICBnZXRNb3VzZVBvcywgaXNJbnNpZGUgfSBmcm9tICcuL2RyYXdfZXh0cmFfc3R1ZmYnO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgZXNjYXBlOiAzMCxcbiAgICBkdXJhdGlvbjogMTAwMCwgLy9tc1xuICAgIHN0YXJ0RGVsYXk6IDEwMDAsIC8vbXNcbiAgICBtb3ZlRGVsYXk6IDEwMDAsIC8vbXNcbiAgICBvdXRlckJvdW5kOiAzMjUsXG4gICAgbGV2ZWwxOiA5MDAwMCxcbiAgICBsZXZlbDI6IDYwMDAwLFxuICAgIGxldmVsMzogMzAwMDAsXG4gICAgUGVyaXBoZXJhbENyYWJTdGFydERpc3Q6IDE0MCxcbn1cblxubGV0IHN0YXJ0dGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xubGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xubGV0IGxhc3RyYW5kb20gPSA4O1xubGV0IHRpbWVzdGFtcCA9IDA7XG5sZXQgYnVmZmVyU3RhcnQgPSAwO1xubGV0IGludGVydmFsID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgICAgICB0aGlzLndpblNwbGFzaCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLndpblNwbGFzaC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9Cb3R0b21DcmFiIFNwbGFzaC5qcGdcIjtcbiAgICAgICAgdGhpcy5sb3NlU3BsYXNoID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubG9zZVNwbGFzaC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9Cb3R0b21DcmFiIGxvc2VTcGxhc2gucG5nXCI7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNwbGFzaCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTcGxhc2guc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvQ3JhYkJ1Y2tldEVmZmVjdC5qcGdcIlxuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluaXRpYWxTcGxhc2gsIDAsIDAsIDY1MCwgNTI2LCA3NSwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDUyNiAtIDEwMCwgNjUwLCA1MjYpICAgICAgICAgICAgXG4gICAgICAgICAgICBkcmF3VGl0bGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgZHJhd1N0YXJ0KHRoaXMuY3R4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVXb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZVdvbih0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMud2luU3BsYXNoLCAwLCAwLCAxMjAwLCAyNDAwLCAyNTAsIDc1LCAzMTUsIDYzMClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIllvdSdyZSB0aGUgYm90dG9tZXN0IG9mIEJvdHRvbUNyYWJzIVwiKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBkcmF3V2luVGV4dCh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgZHJhd1JlcGxheSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lTG9zdCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sb3NlU3BsYXNoLCAwLCAwLCAxMDI0LCA4MDgsIDE2LCAxMjUsIDc2OCwgNjA2KVxuICAgICAgICAgICAgICAgIGRyYXdMb3N0VGV4dCh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgZHJhd1JlcGxheSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlT2NlYW4odGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNyYWIuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIuY2xhdy5jb2xsaWRlc1dpdGgoY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyYWJTY29yZSArPSBNYXRoLmZsb29yKGNyYWIuci8xMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdWxsUGVyaXBoZXJhbENyYWIoY3JhYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGF3QWN0aXZlIHx8IHRoaXMuY2xhd1JldHJhY3RBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmNsYXcuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5hbmltYXRlQm9keSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRyYXdUaW1lcih0aGlzLmN0eCwgdGhpcy5jb3VudGRvd24oKSk7XG4gICAgICAgICAgICAgICAgZHJhd1Njb3JlKHRoaXMuY3R4LCB0aGlzLnNjb3JlKTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSA9IE1hdGguZmxvb3IoKHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0KSAvIDEwMDApICsgdGhpcy5jcmFiU2NvcmU7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IENPTlNUQU5UUy5sZXZlbDEgLSAodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlcmVkID0gdGltZXN0YW1wIC0gYnVmZmVyU3RhcnQgPiBDT05TVEFOVFMuc3RhcnREZWxheTtcbiAgICAgICAgICAgICAgICBsZXQgbW92ZURlbGF5ZWQgPSB0aW1lc3RhbXAgLSBpbnRlcnZhbCA+IENPTlNUQU5UUy5tb3ZlRGVsYXk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmZlcmVudENyYWIgPSBsYXN0cmFuZG9tICE9PSByYW5kb207XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXIHx8IHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCb3R0b21DcmFiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5jbGF3QWN0aXZlIHx8IHRoaXMuY2xhd1JldHJhY3RBY3RpdmUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlcmVkICYmIG1vdmVEZWxheWVkICYmIGRpZmZlcmVudENyYWIgKSB7IC8vYnVmZmVyIHRpbWUgYmVmb3JlIGNyYWJzIHN0YXJ0IG1vdmluZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyaXBoZXJhbENyYWIodGltZXN0YW1wLCByYW5kb20sIENPTlNUQU5UUy5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWIoKSB7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVykge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLm1vdmVCb3R0b21DcmFiQ1coKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDQ1coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5jbGF3QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuY2xhdy5leHRlbmRDbGF3KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuY2xhdy5yZXRyYWN0Q2xhdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5jbGF3LnIgPD0gNzMpIHRoaXMuY2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVQZXJpcGhlcmFsQ3JhYih0aW1lc3RhbXAsIGksIGR1cmF0aW9uKSB7XG4gICAgICAgIHN0YXJ0dGltZSA9IGludGVydmFsICsgQ09OU1RBTlRTLm1vdmVEZWxheTtcbiAgICAgICAgaWYgKCh0aW1lc3RhbXAgLSBzdGFydHRpbWUpIDw9IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFic1tpXS5tb3ZlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGxhc3RyYW5kb20gPSBpO1xuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWxsUGVyaXBoZXJhbENyYWIoY3JhYikge1xuICAgICAgICBpZiAoY3JhYi5yID49IENPTlNUQU5UUy5QZXJpcGhlcmFsQ3JhYlN0YXJ0RGlzdCkge1xuICAgICAgICAgICAgY3JhYi5wdWxsZWRJbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYiA9IG5ldyBCb3R0b21DcmFiKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLnB1c2gobmV3IFBlcmlwaGVyYWxDcmFiKHRoaXMuZGltZW5zaW9ucykpO1xuICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnNbaV0ucG9zaXRpb24oaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuY3JhYlNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRpbWVzdGFtcCA9IDA7XG4gICAgICAgIGJ1ZmZlclN0YXJ0ID0gMDtcbiAgICAgICAgaW50ZXJ2YWwgPSAwO1xuICAgIH1cblxuICAgIGdhbWVMb3N0KCkge1xuICAgICAgICBsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaCggKGNyYWIsIGkpID0+IHtcbiAgICAgICAgICAgIGlmKCBjcmFiLnIgPiBDT05TVEFOVFMub3V0ZXJCb3VuZCkgZ2FtZW92ZXIgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBnYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBnYW1lV29uKCkge1xuICAgICAgICBsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKCh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCkgPiBDT05TVEFOVFMubGV2ZWwxKSB7XG4gICAgICAgICAgICBnYW1lb3ZlciA9IHRydWU7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBnYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBjb3VudGRvd24oKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVyIC8gNjAwMDApO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IE1hdGguY2VpbCgodGhpcy50aW1lciAlIDYwMDAwKS8xMDAwKTtcbiAgICAgICAgcmV0dXJuIHNlY29uZHMgPj0gMTAgPyBgJHttaW51dGVzfToke3NlY29uZHN9YCA6IGAke21pbnV0ZXN9OjAke3NlY29uZHN9YFxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgc3RhcnR0aW1lID0gdGltZXN0YW1wO1xuICAgICAgICBidWZmZXJTdGFydCA9IHRpbWVzdGFtcDtcbiAgICAgICAgaW50ZXJ2YWwgPSB0aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBjbGljayhlKSB7XG4gICAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKHRoaXMuY3R4LmNhbnZhcywgZSk7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICBsZXQgcmVjdCA9IHtcbiAgICAgICAgICAgICAgICB4OiByZXBsYXlCdXR0b24ueCAqIDAuOCxcbiAgICAgICAgICAgICAgICB5OiByZXBsYXlCdXR0b24ueSAqIDAuOCxcbiAgICAgICAgICAgICAgICB3OiByZXBsYXlCdXR0b24udyAqIDAuOCxcbiAgICAgICAgICAgICAgICBoOiByZXBsYXlCdXR0b24uaCAqIDAuOCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgaXMgPSBpc0luc2lkZTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAoaXNJbnNpZGUobW91c2VQb3MsIHJlY3QpKSB7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ2NsaWNrZWQgaW5zaWRlIHJlY3QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ2NsaWNrZWQgb3V0c2lkZSByZWN0Jyk7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9XG4gICAgfSAgICBcblxuICAgIGtleXVwKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXdSZXRyYWN0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleWRvd24oZSkge1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKGNyYWIgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJvdHRvbUNyYWIuY2xhdy5jb2xsaWRlc1dpdGgoY3JhYikpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKGNyYWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIuY2xhdy5jb2xsaWRlc1dpdGgoY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGF3QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNsYXdBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ib3R0b21DcmFiLmNsYXcucmV0cmFjdENsYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHsgLy9ET01Db250ZW50TG9hZGVkXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICBuZXcgR2FtZShjYW52YXMpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLnggPSAyMDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMub2NlYW5GbG9vciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm9jZWFuRmxvb3Iuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvb2NlYW4tMTIxNDc0N18xOTIwY3JvcHBlZC5qcGVnXCI7XG4gICAgICAgIHRoaXMubmV0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubmV0LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25ldC5wbmdcIjtcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwZDFlZlwiXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3V29uQmcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM3ZGZlZDVcIlxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmltYXRlV29uKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdXb25CZyhjdHgpO1xuICAgIH1cblxuICAgIGRyYXdPY2VhbkZsb29yKGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMub2NlYW5GbG9vciwgdGhpcy54LCB0aGlzLnksIDEwNjcsIDgwMCwgMCwgMCwgMTA2NywgODAwKTtcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLm5ldCwgMCwgMCwgNjAwLCA2MDAsIDEwMCwgMTAwLCA2MDAsIDYwMCk7XG4gICAgICAgIC8vYmFja2dyb3VuZCBzY3JvbGxcbiAgICAgICAgaWYgKHRoaXMueCA8PSAxNzApIHtcbiAgICAgICAgICAgIHRoaXMuZmxvd0xlZnQgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgIGlmICh0aGlzLnggPj0gMjAwKSB7XG4gICAgICAgICAgICB0aGlzLmZsb3dMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mbG93TGVmdCkge1xuICAgICAgICAgICAgdGhpcy54IC09IDAuMTVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCArPSAwLjE1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZU9jZWFuKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdPY2VhbkZsb29yKGN0eCk7XG4gICAgfVxuXG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIHN0YXJ0RGlzdDogMTQwLFxuICAgIHNwZWVkOiAxLjIsXG4gICAgYm9keVJhZGl1czogNDAsXG4gICAgcHVsbGVkSW5TcGVlZDogMy4wLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpcGhlcmFsQ3JhYiB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNlbnRlciA9IFt0aGlzLmRpbWVuc2lvbnMud2lkdGgvMiwgdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yXTtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICAgICAgdGhpcy5ib2R5UmFkaXVzID0gQ09OU1RBTlRTLmJvZHlSYWRpdXM7XG4gICAgICAgIHRoaXMucG9zX2FuZ2xlID0gKDIyLjUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5QZXJpcGhlcmFsQ3JhYiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLlBlcmlwaGVyYWxDcmFiLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL1BlcmlwaGVyYWxDcmFiLnBuZ1wiO1xuICAgIH1cblxuICAgIGRyYXdQZXJpcGhlcmFsQ3JhYihjdHgpIHtcbiAgICAgICAgbGV0IHBvc1ggPSB0aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGxldCBwb3NZID0gdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBsZXQgcm90YXRlQW5nbGUgPSAgTWF0aC5QSSAvIDIgKyB0aGlzLnBvc19hbmdsZTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmNlbnRlclswXSArIHBvc1gsIHRoaXMuY2VudGVyWzFdICsgcG9zWSk7XG4gICAgICAgIGN0eC5yb3RhdGUocm90YXRlQW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuUGVyaXBoZXJhbENyYWIsIDAsIDAsIDgwMCwgODAwLCAtNDAsIC00MCwgODAsIDgwKVxuICAgICAgICBjdHgucm90YXRlKC1yb3RhdGVBbmdsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSArIHBvc1gpLCAtKHRoaXMuY2VudGVyWzFdICsgcG9zWSkpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd1BlcmlwaGVyYWxDcmFiKGN0eCk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oaSkge1xuICAgICAgICB0aGlzLnBvc19hbmdsZSArPSAoNDUgKiBNYXRoLlBJIC8gMTgwKSAqIGk7XG4gICAgfVxuXG4gICAgbW92ZU91dCgpIHtcbiAgICAgICAgdGhpcy5yICs9IENPTlNUQU5UUy5zcGVlZDtcbiAgICB9XG5cbiAgICBwdWxsZWRJbigpIHtcbiAgICAgICAgdGhpcy5yIC09IENPTlNUQU5UUy5wdWxsZWRJblNwZWVkO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgIH1cblxuICAgIGJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNlbnRlclg6IHRoaXMuY2VudGVyWzBdICsgdGhpcy5yICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUpLFxuICAgICAgICAgICAgY2VudGVyWTogdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnBvc19hbmdsZSksXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMuYm9keVJhZGl1cyxcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=