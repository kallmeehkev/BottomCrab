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
    LCLAWOFFSET: Math.PI * (3 / 2),
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
        this.BottomCrabBody = new Image();
        this.BottomCrabBody.src = "./assets/images/5d30155431d42noarms.png";
        this.rightClawImage = new Image();
        this.rightClawImage.src = "./assets/images/5d30155431d42claw3.png";
        this.leftClawImage = new Image();
        this.leftClawImage.src = "./assets/images/5d30155431d42leftclaw.png";
        this.rightClaw = new _claw__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions, this.position_angle, this.rightClawImage);
        this.leftClaw = new _claw__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions, this.position_angle + CONSTANTS.LCLAWOFFSET, this.leftClawImage);
    }

    drawBottomCrab(ctx) {
        let destDimen = 200;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.position_angle);
        ctx.drawImage(this.BottomCrab, 0, 0, 1500, 1500, -100, -100, destDimen, destDimen)
        ctx.rotate(-this.position_angle);
        ctx.translate(-this.x, -this.y);

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
        this.drawGrid(ctx);
    }

    animateBody(ctx) {
        this.drawBottomCrabBody(ctx);
        this.drawGrid(ctx);
    }

    moveBottomCrabCW() {
        this.position_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180)
        this.rightClaw.pos_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
        this.leftClaw.pos_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
    }

    moveBottomCrabCCW() {
        this.position_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
        this.rightClaw.pos_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
        this.leftClaw.pos_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
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
    maxRightRange: 300,
    maxLeftRange: 250,
    startDist: 45,
}

// let posX;
// let posY;

class Claw {
    constructor(dimensions, clawAngle, image) {
        this.dimensions = dimensions;
        this.center = [this.dimensions.width/2, this.dimensions.height/2];
        this.clawRadius = CONSTANTS.clawRadius;
        this.r = CONSTANTS.startDist;
        this.pos_angle = clawAngle
        // this.rightClawImage = new Image();
        // this.rightClawImage.src = "./assets/images/5d30155431d42claw3.png";
        // this.leftClawImage = new Image();
        // this.leftClawImage.src = "./assets/images/5d30155431d42leftclaw.png";
        this.image = image;
        this.posX = 0;
        this.posY = 0;
        this.moveClaw();
    }

    moveClaw() {
        this.posX = this.r * Math.cos(this.pos_angle);
        this.posY = this.r * Math.sin(this.pos_angle);
    }

    retractClaw() {
        if (this.r >= (CONSTANTS.clawSpeed + CONSTANTS.startDist)) {
            this.r -= (CONSTANTS.clawSpeed); //can tune for slower retraction rate
        }
        this.moveClaw();
    }

    extendRightClaw() {
        if (this.r < CONSTANTS.maxRightRange) {
            this.r += CONSTANTS.clawSpeed;
        }
        this.moveClaw();
        
    }

    extendLeftClaw() {
        if (this.r < CONSTANTS.maxLeftRange) {
            this.r += CONSTANTS.clawSpeed;
        }
        this.moveClaw();
    }

    resetClaw() {
        this.r = CONSTANTS.startDist;
    }

    drawRightClaw(ctx) {
        let destDimen = 200;
        //arm represented by scaling rectangle

        ctx.translate(this.center[0], this.center[1]);
        ctx.rotate(this.pos_angle);
        ctx.fillStyle = "#902529";
        ctx.fillRect(-15, 40, this.r - 10, 6);
        ctx.rotate(-(this.pos_angle));
        ctx.translate(-(this.center[0]), -(this.center[1]));

        ctx.translate(this.center[0] + this.posX, this.center[1] + this.posY);
        // console.log(`right`)
        // console.log(`X: ${this.center[0] + this.posX + (45 * Math.cos(this.pos_angle + Math.PI / 2))}`);
        // console.log(`Y: ${this.center[1] + this.posY + (45 * Math.sin(this.pos_angle + Math.PI / 2))}`);
        // console.log(`Angle: ${this.pos_angle * (180/Math.PI)}`);
        ctx.rotate(this.pos_angle);
        ctx.drawImage(this.image, 0, 0, 750, 1500, -45, -100, destDimen/2, destDimen)
        ctx.rotate(-(this.pos_angle));
        ctx.translate(-(this.center[0] + this.posX), -(this.center[1] + this.posY));

        //#902529
        // ctx.beginPath();
        // ctx.arc(this.center[0] + this.posX, this.center[1] + this.posY, 40, 0, 2 * Math.PI);
        // ctx.stroke();
        // ctx.fillStyle = 'red';
        // ctx.fill();

        // ctx.rotate(-this.pos_angle);
        // ctx.translate(-this.center[0], -this.center[1]);
    }

    drawLeftClaw(ctx) {
        let destDimen = 200;

        ctx.translate(this.center[0], this.center[1]);
        ctx.rotate(this.pos_angle);
        ctx.fillStyle = "#902529";
        ctx.fillRect(-2, -60, this.r - 10, 6);
        ctx.rotate(-(this.pos_angle));
        ctx.translate(-(this.center[0]), -(this.center[1]));

        ctx.translate(this.center[0] + this.posX, this.center[1] + this.posY);
        // console.log(`left`)
        // console.log(`X: ${this.center[0] + this.posX + (45 * Math.cos(this.pos_angle - Math.PI / 2))}`);
        // console.log(`Y: ${this.center[1] + this.posY + (45 * Math.sin(this.pos_angle - Math.PI / 2))}`);
        // console.log(`Angle: ${this.pos_angle * (180/Math.PI)}`);
        ctx.rotate(this.pos_angle + Math.PI * (1 / 2));
        ctx.drawImage(this.image, 0, 0, 750, 1500, -85.5, -55, destDimen / 2, destDimen)
        ctx.rotate(-(this.pos_angle + Math.PI * (1 / 2)));
        ctx.translate(-(this.center[0] + this.posX), -(this.center[1] + this.posY));
    }

    animateRight(ctx) {
        this.drawRightClaw(ctx);
    }
    animateLeft(ctx) {
        this.drawLeftClaw(ctx);
    }

    rightBounds() {
        let bounds = {
            centerX: this.center[0] + this.posX + (48 * Math.cos(this.pos_angle + Math.PI / 2)),
            centerY: this.center[1] + this.posY + (48 * Math.sin(this.pos_angle + Math.PI / 2)),
            radius: this.clawRadius,
        }
        
        return bounds;
    }

    leftBounds() {
        let bounds = {
            centerX: this.center[0] + this.posX + (48 * Math.cos(this.pos_angle - Math.PI / 2)),
            centerY: this.center[1] + this.posY + (48 * Math.sin(this.pos_angle - Math.PI / 2)),
            radius: this.clawRadius,
        }
        
        return bounds;
    }


    collidesWith(bounds, crab) {
        const _overlap = (bound1, bound2) => {
            let dx = bound1.centerX - bound2.centerX;
            let dy = bound1.centerY - bound2.centerY;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (1.75*distance < bound1.radius + bound2.radius) {
                // collision detected!
                return true;
            }    
            return false;
        };
        let collision = false;
        if (_overlap(bounds, crab.bounds())) { 
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
        this.keys = {};
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
                this.level.animate(this.ctx);
                this.level.animateOcean(this.ctx);
                this.peripheralCrabs.forEach(crab => {
                    crab.animate(this.ctx);
                    if (this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
                        this.rightClawActive = false;
                        this.rightClawRetractActive = true;
                        this.crabScore += Math.floor(crab.r/100);
                        this.pullPeripheralCrab(crab);
                    }
                    if (this.bottomCrab.leftClaw.collidesWith(this.bottomCrab.leftClaw.leftBounds(), crab)) {
                        this.leftClawActive = false;
                        this.leftClawRetractActive = true;
                        this.crabScore += Math.floor(crab.r/100);
                        this.pullPeripheralCrab(crab);
                    }
                });
                if (this.rightClawActive || this.rightClawRetractActive || this.leftClawActive || this.leftClawRetractActive ) {
                    this.bottomCrab.rightClaw.animateRight(this.ctx);
                    this.bottomCrab.leftClaw.animateLeft(this.ctx);
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
            if (Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["isInside"])(mousePos, rect)) {
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
            if (!this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
                // debugger
                if (this.keys["ArrowUp"] && this.keys["ArrowDown"]) { //currently two keys active
                    // debugger
                    this.peripheralCrabs.forEach(crab => {
                        if (this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
                            this.rightClawRetractActive = true;
                            this.rightClawActive = false;
                        } 
                        else if (this.bottomCrab.leftClaw.collidesWith(this.bottomCrab.leftClaw.leftBounds(), crab)) {
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
                                if (this.bottomCrab.rightClaw.collidesWith(this.bottomCrab.rightClaw.rightBounds(), crab)) {
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
                                if (this.bottomCrab.leftClaw.collidesWith(this.bottomCrab.leftClaw.leftBounds(), crab)) {
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
        this.x = 130;
        this.y = 0;
        this.oceanFloor = new Image();
        this.oceanFloor.src = "./assets/images/ocean-1214747_1920cropped800.jpeg";
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
        ctx.drawImage(this.oceanFloor, 0, 0, 1067, 800, 0, 0, 1067, 800);
        ctx.drawImage(this.net, 0, 0, 575, 450, this.x, 120, 575, 450);
        //background scroll
        if (this.x <= 90) {
            this.flowLeft = false;
        } 
         if (this.x >= 130) {
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
    pulledInSpeed: 3.2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGF3LmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3X2V4dHJhX3N0dWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBDbGF3IGZyb20gJy4vY2xhdyc7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBST1RBVElPTl9BTkdMRTogMi41LCAgLy9pbiBkZWdyZWVzXG4gICAgTENMQVdPRkZTRVQ6IE1hdGguUEkgKiAoMyAvIDIpLFxuICAgIG91dGVyQm91bmQ6IDMyNSxcbn07XG4vLyBjb25zdCBCT1RUT01fQ1JBQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291cmNlXCIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbUNyYWIge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGgvMjtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yO1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9Cb3R0b21DcmFiMi5wbmdcIjtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiQm9keSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWJCb2R5LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJub2FybXMucG5nXCI7XG4gICAgICAgIHRoaXMucmlnaHRDbGF3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5yaWdodENsYXdJbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU1NDMxZDQyY2xhdzMucG5nXCI7XG4gICAgICAgIHRoaXMubGVmdENsYXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlZnRDbGF3SW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvNWQzMDE1NTQzMWQ0MmxlZnRjbGF3LnBuZ1wiO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhdyA9IG5ldyBDbGF3KHRoaXMuZGltZW5zaW9ucywgdGhpcy5wb3NpdGlvbl9hbmdsZSwgdGhpcy5yaWdodENsYXdJbWFnZSk7XG4gICAgICAgIHRoaXMubGVmdENsYXcgPSBuZXcgQ2xhdyh0aGlzLmRpbWVuc2lvbnMsIHRoaXMucG9zaXRpb25fYW5nbGUgKyBDT05TVEFOVFMuTENMQVdPRkZTRVQsIHRoaXMubGVmdENsYXdJbWFnZSk7XG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbUNyYWIoY3R4KSB7XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuQm90dG9tQ3JhYiwgMCwgMCwgMTUwMCwgMTUwMCwgLTEwMCwgLTEwMCwgZGVzdERpbWVuLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLXRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbUNyYWJCb2R5KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLkJvdHRvbUNyYWJCb2R5LCAwLCAwLCAxNTAwLCAxNTAwLCAtMTAwLCAtMTAwLCBkZXN0RGltZW4sIGRlc3REaW1lbilcbiAgICAgICAgY3R4LnJvdGF0ZSgtdGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgfVxuXG4gICAgZHJhd0dyaWQoY3R4KSB7XG4gICAgICAgIC8vY2lyY2xlc1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDEwMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMTc1LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAyNTAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIENPTlNUQU5UUy5vdXRlckJvdW5kLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvL2xpbmVzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIDApO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIHRoaXMueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIDApO1xuICAgICAgICBjdHgubGluZVRvKDAsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3JhYihjdHgpXG4gICAgICAgIHRoaXMuZHJhd0dyaWQoY3R4KTtcbiAgICB9XG5cbiAgICBhbmltYXRlQm9keShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3JhYkJvZHkoY3R4KTtcbiAgICAgICAgdGhpcy5kcmF3R3JpZChjdHgpO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApXG4gICAgICAgIHRoaXMucmlnaHRDbGF3LnBvc19hbmdsZSArPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMubGVmdENsYXcucG9zX2FuZ2xlICs9IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICB9XG5cbiAgICBtb3ZlQm90dG9tQ3JhYkNDVygpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl9hbmdsZSAtPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMucmlnaHRDbGF3LnBvc19hbmdsZSAtPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMubGVmdENsYXcucG9zX2FuZ2xlIC09IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICB9XG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIGNsYXdSYWRpdXM6IDQwLFxuICAgIGNsYXdTcGVlZDogMy4wLFxuICAgIG1heFJpZ2h0UmFuZ2U6IDMwMCxcbiAgICBtYXhMZWZ0UmFuZ2U6IDI1MCxcbiAgICBzdGFydERpc3Q6IDQ1LFxufVxuXG4vLyBsZXQgcG9zWDtcbi8vIGxldCBwb3NZO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGF3IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjbGF3QW5nbGUsIGltYWdlKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuY2VudGVyID0gW3RoaXMuZGltZW5zaW9ucy53aWR0aC8yLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LzJdO1xuICAgICAgICB0aGlzLmNsYXdSYWRpdXMgPSBDT05TVEFOVFMuY2xhd1JhZGl1cztcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgPSBjbGF3QW5nbGVcbiAgICAgICAgLy8gdGhpcy5yaWdodENsYXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyB0aGlzLnJpZ2h0Q2xhd0ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJjbGF3My5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5sZWZ0Q2xhd0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMubGVmdENsYXdJbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU1NDMxZDQybGVmdGNsYXcucG5nXCI7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgdGhpcy5wb3NYID0gMDtcbiAgICAgICAgdGhpcy5wb3NZID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIG1vdmVDbGF3KCkge1xuICAgICAgICB0aGlzLnBvc1ggPSB0aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIHRoaXMucG9zWSA9IHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKTtcbiAgICB9XG5cbiAgICByZXRyYWN0Q2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuciA+PSAoQ09OU1RBTlRTLmNsYXdTcGVlZCArIENPTlNUQU5UUy5zdGFydERpc3QpKSB7XG4gICAgICAgICAgICB0aGlzLnIgLT0gKENPTlNUQU5UUy5jbGF3U3BlZWQpOyAvL2NhbiB0dW5lIGZvciBzbG93ZXIgcmV0cmFjdGlvbiByYXRlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIGV4dGVuZFJpZ2h0Q2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuciA8IENPTlNUQU5UUy5tYXhSaWdodFJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnIgKz0gQ09OU1RBTlRTLmNsYXdTcGVlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGV4dGVuZExlZnRDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yIDwgQ09OU1RBTlRTLm1heExlZnRSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5yICs9IENPTlNUQU5UUy5jbGF3U3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIHJlc2V0Q2xhdygpIHtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICB9XG5cbiAgICBkcmF3UmlnaHRDbGF3KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuICAgICAgICAvL2FybSByZXByZXNlbnRlZCBieSBzY2FsaW5nIHJlY3RhbmdsZVxuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM5MDI1MjlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KC0xNSwgNDAsIHRoaXMuciAtIDEwLCA2KTtcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMucG9zX2FuZ2xlKSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSksIC0odGhpcy5jZW50ZXJbMV0pKTtcblxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYLCB0aGlzLmNlbnRlclsxXSArIHRoaXMucG9zWSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGByaWdodGApXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBYOiAke3RoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYICsgKDQ1ICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUgKyBNYXRoLlBJIC8gMikpfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgWTogJHt0aGlzLmNlbnRlclsxXSArIHRoaXMucG9zWSArICg0NSAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlICsgTWF0aC5QSSAvIDIpKX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEFuZ2xlOiAke3RoaXMucG9zX2FuZ2xlICogKDE4MC9NYXRoLlBJKX1gKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgNzUwLCAxNTAwLCAtNDUsIC0xMDAsIGRlc3REaW1lbi8yLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLnBvc19hbmdsZSkpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1gpLCAtKHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZKSk7XG5cbiAgICAgICAgLy8jOTAyNTI5XG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmFyYyh0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCwgdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnBvc1ksIDQwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgICAgIC8vIGN0eC5yb3RhdGUoLXRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgLy8gY3R4LnRyYW5zbGF0ZSgtdGhpcy5jZW50ZXJbMF0sIC10aGlzLmNlbnRlclsxXSk7XG4gICAgfVxuXG4gICAgZHJhd0xlZnRDbGF3KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM5MDI1MjlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KC0yLCAtNjAsIHRoaXMuciAtIDEwLCA2KTtcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMucG9zX2FuZ2xlKSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSksIC0odGhpcy5jZW50ZXJbMV0pKTtcblxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYLCB0aGlzLmNlbnRlclsxXSArIHRoaXMucG9zWSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBsZWZ0YClcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFg6ICR7dGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1ggKyAoNDUgKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSAtIE1hdGguUEkgLyAyKSl9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBZOiAke3RoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZICsgKDQ1ICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUgLSBNYXRoLlBJIC8gMikpfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgQW5nbGU6ICR7dGhpcy5wb3NfYW5nbGUgKiAoMTgwL01hdGguUEkpfWApO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zX2FuZ2xlICsgTWF0aC5QSSAqICgxIC8gMikpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDAsIDc1MCwgMTUwMCwgLTg1LjUsIC01NSwgZGVzdERpbWVuIC8gMiwgZGVzdERpbWVuKVxuICAgICAgICBjdHgucm90YXRlKC0odGhpcy5wb3NfYW5nbGUgKyBNYXRoLlBJICogKDEgLyAyKSkpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1gpLCAtKHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZKSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZVJpZ2h0KGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdSaWdodENsYXcoY3R4KTtcbiAgICB9XG4gICAgYW5pbWF0ZUxlZnQoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0xlZnRDbGF3KGN0eCk7XG4gICAgfVxuXG4gICAgcmlnaHRCb3VuZHMoKSB7XG4gICAgICAgIGxldCBib3VuZHMgPSB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCArICg0OCAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlICsgTWF0aC5QSSAvIDIpKSxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZICsgKDQ4ICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUgKyBNYXRoLlBJIC8gMikpLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmNsYXdSYWRpdXMsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfVxuXG4gICAgbGVmdEJvdW5kcygpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHtcbiAgICAgICAgICAgIGNlbnRlclg6IHRoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYICsgKDQ4ICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUgLSBNYXRoLlBJIC8gMikpLFxuICAgICAgICAgICAgY2VudGVyWTogdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnBvc1kgKyAoNDggKiBNYXRoLnNpbih0aGlzLnBvc19hbmdsZSAtIE1hdGguUEkgLyAyKSksXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMuY2xhd1JhZGl1cyxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG5cblxuICAgIGNvbGxpZGVzV2l0aChib3VuZHMsIGNyYWIpIHtcbiAgICAgICAgY29uc3QgX292ZXJsYXAgPSAoYm91bmQxLCBib3VuZDIpID0+IHtcbiAgICAgICAgICAgIGxldCBkeCA9IGJvdW5kMS5jZW50ZXJYIC0gYm91bmQyLmNlbnRlclg7XG4gICAgICAgICAgICBsZXQgZHkgPSBib3VuZDEuY2VudGVyWSAtIGJvdW5kMi5jZW50ZXJZO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGlmICgxLjc1KmRpc3RhbmNlIDwgYm91bmQxLnJhZGl1cyArIGJvdW5kMi5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb2xsaXNpb24gZGV0ZWN0ZWQhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChfb3ZlcmxhcChib3VuZHMsIGNyYWIuYm91bmRzKCkpKSB7IFxuICAgICAgICAgICAgLy8gdGhpcy5yZXNldENsYXcoKTtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7IFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgcmVwbGF5QnV0dG9uID0ge1xuICAgIHg6IDMyNSxcbiAgICB5OiA3MjUsXG4gICAgdzogMTUwLFxuICAgIGg6IDYwXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3UmVwbGF5ID0gKGN0eCkgPT4ge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gXCI1XCI7XG4gICAgY3R4LnN0cm9rZVJlY3QocmVwbGF5QnV0dG9uLngsIHJlcGxheUJ1dHRvbi55LCByZXBsYXlCdXR0b24udywgcmVwbGF5QnV0dG9uLmgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZWIwMFwiO1xuICAgIGN0eC5maWxsUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5mb250ID0gXCIyNHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFRleHQoXCJSZXBsYXlcIiwgMzYwLCByZXBsYXlCdXR0b24ueSArICgwLjUqcmVwbGF5QnV0dG9uLmgpICsgMTIpOyAvLzEyIGlzIGhhbGYgZm9udCBzaXplXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3U3RhcnQgPSAoY3R4KSA9PiB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSBcIjVcIjtcbiAgICBjdHguc3Ryb2tlUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZlYjAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjI0cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsVGV4dChcIlN0YXJ0XCIsIDM2NSwgcmVwbGF5QnV0dG9uLnkgKyAoMC41KnJlcGxheUJ1dHRvbi5oKSArIDEyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1vdXNlUG9zID0gKGNhbnZhcywgZXZlbnQpID0+IHtcbiAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnNpZGUgPSAocG9zLCByZWN0KSA9PiB7XG4gICAgcmV0dXJuIHBvcy54ID4gcmVjdC54ICYmIHBvcy54IDwgcmVjdC54ICsgcmVjdC53ICYmIHBvcy55IDwgcmVjdC55ICsgcmVjdC5oICYmIHBvcy55ID4gcmVjdC55XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3VGltZXIgPSAoY3R4LCBjb3VudGRvd24pID0+IHtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDUwLCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KGNvdW50ZG93biwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVRleHQoY291bnRkb3duLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0xvc3RUZXh0ID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogMTI1LCB5OiAxMDAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzNnB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIllvdSdyZSBub3QgQm90dG9tQ3JhYiBlbm91Z2ghXCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiWW91J3JlIG5vdCBCb3R0b21DcmFiIGVub3VnaCFcIiwgbG9jLngsIGxvYy55KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdXaW5UZXh0ID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogMTI1LCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIsIGxvYy54LCBsb2MueSk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3VGl0bGUgPSAoY3R4KSA9PiB7XG4gICAgY29uc3QgbG9jID0geyB4OiAxNTAsIHk6IDEwMCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDM2cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSG93IEJvdHRvbUNyYWIgYXJlIHlvdSE/XCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiSG93IEJvdHRvbUNyYWIgYXJlIHlvdSE/XCIsIGxvYy54LCBsb2MueSk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3U2NvcmUgPSAoY3R4LCBzY29yZSkgPT4ge1xuICAgIC8vIGlmICh0aGlzLnNjb3JlID4gMTAwMDApIHRoaXMuc2NvcmUgPSAwO1xuICAgIGNvbnN0IGxvYyA9IHsgeDogNzAwLCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KHNjb3JlLCBsb2MueCwgbG9jLnkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlVGV4dChzY29yZSwgbG9jLngsIGxvYy55KTtcbn0iLCJpbXBvcnQgTGV2ZWwgZnJvbSAnLi9sZXZlbCc7XG5pbXBvcnQgQm90dG9tQ3JhYiBmcm9tICcuL2JvdHRvbV9jcmFiJztcbmltcG9ydCBQZXJpcGhlcmFsQ3JhYiBmcm9tICcuL3BlcmlwaGVyYWxfY3JhYic7XG5pbXBvcnQgeyBkcmF3VGltZXIsIGRyYXdMb3N0VGV4dCwgZHJhd1dpblRleHQsXG4gICAgZHJhd1RpdGxlLCBkcmF3U2NvcmUsIFxuICAgIGRyYXdSZXBsYXksIHJlcGxheUJ1dHRvbiwgZHJhd1N0YXJ0LFxuICAgIGdldE1vdXNlUG9zLCBpc0luc2lkZSB9IGZyb20gJy4vZHJhd19leHRyYV9zdHVmZic7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBlc2NhcGU6IDMwLFxuICAgIGR1cmF0aW9uOiAxMDAwLCAvL21zXG4gICAgc3RhcnREZWxheTogMTAwMCwgLy9tc1xuICAgIG1vdmVEZWxheTogMTAwMCwgLy9tc1xuICAgIG91dGVyQm91bmQ6IDMyNSxcbiAgICBsZXZlbDE6IDYwMDAwLCAgICAgLy9tcyBmb3IgbGV2ZWwxIHRpbWUgbGVuZ3RoXG4gICAgbGV2ZWwyOiA0NTAwMCxcbiAgICBsZXZlbDM6IDMwMDAwLFxuICAgIFBlcmlwaGVyYWxDcmFiU3RhcnREaXN0OiAxNDAsXG59XG5cbmxldCBzdGFydHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbmxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbmxldCBsYXN0cmFuZG9tID0gODtcbmxldCB0aW1lc3RhbXAgPSAwO1xubGV0IGJ1ZmZlclN0YXJ0ID0gMDtcbmxldCBpbnRlcnZhbCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy53aW5TcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy53aW5TcGxhc2guc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvQm90dG9tQ3JhYiBTcGxhc2guanBnXCI7XG4gICAgICAgIHRoaXMubG9zZVNwbGFzaCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxvc2VTcGxhc2guc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvQm90dG9tQ3JhYiBsb3NlU3BsYXNoLnBuZ1wiO1xuICAgICAgICB0aGlzLmluaXRpYWxTcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU3BsYXNoLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0NyYWJCdWNrZXRFZmZlY3QuanBnXCJcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW5pdGlhbFNwbGFzaCwgMCwgMCwgNjUwLCA1MjYsIDc1LCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gNTI2IC0gMTAwLCA2NTAsIDUyNikgICAgICAgICAgICBcbiAgICAgICAgICAgIGRyYXdUaXRsZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICBkcmF3U3RhcnQodGhpcy5jdHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVdvbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlV29uKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy53aW5TcGxhc2gsIDAsIDAsIDEyMDAsIDI0MDAsIDI1MCwgNzUsIDMxNSwgNjMwKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgICAgIGRyYXdXaW5UZXh0KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICBkcmF3UmVwbGF5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVMb3N0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxvc2VTcGxhc2gsIDAsIDAsIDEwMjQsIDgwOCwgMTYsIDEyNSwgNzY4LCA2MDYpXG4gICAgICAgICAgICAgICAgZHJhd0xvc3RUZXh0KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICBkcmF3UmVwbGF5KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZU9jZWFuKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKGNyYWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjcmFiLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5jb2xsaWRlc1dpdGgodGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5yaWdodEJvdW5kcygpLCBjcmFiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyYWJTY29yZSArPSBNYXRoLmZsb29yKGNyYWIuci8xMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdWxsUGVyaXBoZXJhbENyYWIoY3JhYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5jb2xsaWRlc1dpdGgodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmxlZnRCb3VuZHMoKSwgY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdSZXRyYWN0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JhYlNjb3JlICs9IE1hdGguZmxvb3IoY3JhYi5yLzEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1bGxQZXJpcGhlcmFsQ3JhYihjcmFiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSB8fCB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgfHwgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSB8fCB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5hbmltYXRlUmlnaHQodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcuYW5pbWF0ZUxlZnQodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuYW5pbWF0ZUJvZHkodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkcmF3VGltZXIodGhpcy5jdHgsIHRoaXMuY291bnRkb3duKCkpO1xuICAgICAgICAgICAgICAgIGRyYXdTY29yZSh0aGlzLmN0eCwgdGhpcy5zY29yZSk7XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBNYXRoLmZsb29yKCh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCkgLyAxMDAwKSArIHRoaXMuY3JhYlNjb3JlO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBDT05TVEFOVFMubGV2ZWwxIC0gKHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJlZCA9IHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0ID4gQ09OU1RBTlRTLnN0YXJ0RGVsYXk7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVEZWxheWVkID0gdGltZXN0YW1wIC0gaW50ZXJ2YWwgPiBDT05TVEFOVFMubW92ZURlbGF5O1xuICAgICAgICAgICAgICAgIGxldCBkaWZmZXJlbnRDcmFiID0gbGFzdHJhbmRvbSAhPT0gcmFuZG9tO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyB8fCB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQm90dG9tQ3JhYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodENsYXdBY3RpdmUgfHwgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlIHx8IHRoaXMubGVmdENsYXdBY3RpdmUgfHwgdGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlcmVkICYmIG1vdmVEZWxheWVkICYmIGRpZmZlcmVudENyYWIgKSB7IC8vYnVmZmVyIHRpbWUgYmVmb3JlIGNyYWJzIHN0YXJ0IG1vdmluZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyaXBoZXJhbENyYWIodGltZXN0YW1wLCByYW5kb20sIENPTlNUQU5UUy5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWIoKSB7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVykge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLm1vdmVCb3R0b21DcmFiQ1coKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcubW92ZUNsYXcoKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNDVygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3Lm1vdmVDbGF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlQ2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRDbGF3QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LmV4dGVuZFJpZ2h0Q2xhdygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3Lm1vdmVDbGF3KCk7XG4gICAgICAgIH0gaWYgKHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5yZXRyYWN0Q2xhdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuciA8IDQ4KSB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKHRoaXMubGVmdENsYXdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5leHRlbmRMZWZ0Q2xhdygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICB9IGlmICh0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LnJldHJhY3RDbGF3KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LnIgPCA0OCkgdGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVQZXJpcGhlcmFsQ3JhYih0aW1lc3RhbXAsIGksIGR1cmF0aW9uKSB7XG4gICAgICAgIHN0YXJ0dGltZSA9IGludGVydmFsICsgQ09OU1RBTlRTLm1vdmVEZWxheTtcbiAgICAgICAgaWYgKCh0aW1lc3RhbXAgLSBzdGFydHRpbWUpIDw9IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFic1tpXS5tb3ZlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGxhc3RyYW5kb20gPSBpO1xuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWxsUGVyaXBoZXJhbENyYWIoY3JhYikge1xuICAgICAgICBpZiAoY3JhYi5yID49IENPTlNUQU5UUy5QZXJpcGhlcmFsQ3JhYlN0YXJ0RGlzdCkge1xuICAgICAgICAgICAgY3JhYi5wdWxsZWRJbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYiA9IG5ldyBCb3R0b21DcmFiKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLnB1c2gobmV3IFBlcmlwaGVyYWxDcmFiKHRoaXMuZGltZW5zaW9ucykpO1xuICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnNbaV0ucG9zaXRpb24oaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuY3JhYlNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRpbWVzdGFtcCA9IDA7XG4gICAgICAgIGJ1ZmZlclN0YXJ0ID0gMDtcbiAgICAgICAgaW50ZXJ2YWwgPSAwO1xuICAgIH1cblxuICAgIGdhbWVMb3N0KCkge1xuICAgICAgICBsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaCggKGNyYWIsIGkpID0+IHtcbiAgICAgICAgICAgIGlmKCBjcmFiLnIgPiBDT05TVEFOVFMub3V0ZXJCb3VuZCkgZ2FtZW92ZXIgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBnYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBnYW1lV29uKCkge1xuICAgICAgICBsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKCh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCkgPiBDT05TVEFOVFMubGV2ZWwxKSB7XG4gICAgICAgICAgICBnYW1lb3ZlciA9IHRydWU7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBnYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBjb3VudGRvd24oKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVyIC8gNjAwMDApO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IE1hdGguY2VpbCgodGhpcy50aW1lciAlIDYwMDAwKS8xMDAwKTtcbiAgICAgICAgcmV0dXJuIHNlY29uZHMgPj0gMTAgPyBgJHttaW51dGVzfToke3NlY29uZHN9YCA6IGAke21pbnV0ZXN9OjAke3NlY29uZHN9YFxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgc3RhcnR0aW1lID0gdGltZXN0YW1wO1xuICAgICAgICBidWZmZXJTdGFydCA9IHRpbWVzdGFtcDtcbiAgICAgICAgaW50ZXJ2YWwgPSB0aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBjbGljayhlKSB7XG4gICAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKHRoaXMuY3R4LmNhbnZhcywgZSk7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICBsZXQgcmVjdCA9IHtcbiAgICAgICAgICAgICAgICB4OiByZXBsYXlCdXR0b24ueCAqIDAuOCxcbiAgICAgICAgICAgICAgICB5OiByZXBsYXlCdXR0b24ueSAqIDAuOCxcbiAgICAgICAgICAgICAgICB3OiByZXBsYXlCdXR0b24udyAqIDAuOCxcbiAgICAgICAgICAgICAgICBoOiByZXBsYXlCdXR0b24uaCAqIDAuOCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNJbnNpZGUobW91c2VQb3MsIHJlY3QpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgfVxuICAgIH0gICAgXG5cbiAgICBrZXl1cChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzW1wiQXJyb3dVcFwiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmtleXNbXCJBcnJvd0Rvd25cIl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5ZG93bihlKSB7XG4gICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuY29sbGlkZXNXaXRoKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcucmlnaHRCb3VuZHMoKSwgY3JhYikpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleXNbXCJBcnJvd1VwXCJdICYmIHRoaXMua2V5c1tcIkFycm93RG93blwiXSkgeyAvL2N1cnJlbnRseSB0d28ga2V5cyBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LmNvbGxpZGVzV2l0aCh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LnJpZ2h0Qm91bmRzKCksIGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5jb2xsaWRlc1dpdGgodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmxlZnRCb3VuZHMoKSwgY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzW1wiQXJyb3dVcFwiXSA9IHRydWU7IC8vbmVlZGVkIGZvciBkb3VibGUgY2xhdyBhY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuY29sbGlkZXNXaXRoKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcucmlnaHRCb3VuZHMoKSwgY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXNbXCJBcnJvd0Rvd25cIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcuY29sbGlkZXNXaXRoKHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5sZWZ0Qm91bmRzKCksIGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yaWdodENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmlnaHRDbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7IC8vRE9NQ29udGVudExvYWRlZFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgbmV3IEdhbWUoY2FudmFzKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy54ID0gMTMwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLm9jZWFuRmxvb3IgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5vY2VhbkZsb29yLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL29jZWFuLTEyMTQ3NDdfMTkyMGNyb3BwZWQ4MDAuanBlZ1wiO1xuICAgICAgICB0aGlzLm5ldCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm5ldC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9uZXQucG5nXCI7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMGQxZWZcIlxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd1dvbkJnKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjN2RmZWQ1XCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZVdvbihjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3V29uQmcoY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3T2NlYW5GbG9vcihjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLm9jZWFuRmxvb3IsIDAsIDAsIDEwNjcsIDgwMCwgMCwgMCwgMTA2NywgODAwKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLm5ldCwgMCwgMCwgNTc1LCA0NTAsIHRoaXMueCwgMTIwLCA1NzUsIDQ1MCk7XG4gICAgICAgIC8vYmFja2dyb3VuZCBzY3JvbGxcbiAgICAgICAgaWYgKHRoaXMueCA8PSA5MCkge1xuICAgICAgICAgICAgdGhpcy5mbG93TGVmdCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICAgaWYgKHRoaXMueCA+PSAxMzApIHtcbiAgICAgICAgICAgIHRoaXMuZmxvd0xlZnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZsb3dMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnggLT0gMC4xNVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ICs9IDAuMTU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlT2NlYW4oY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd09jZWFuRmxvb3IoY3R4KTtcbiAgICB9XG5cbn0iLCJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgc3RhcnREaXN0OiAxNDAsXG4gICAgc3BlZWQ6IDEuMixcbiAgICBib2R5UmFkaXVzOiA0MCxcbiAgICBwdWxsZWRJblNwZWVkOiAzLjIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcmlwaGVyYWxDcmFiIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuY2VudGVyID0gW3RoaXMuZGltZW5zaW9ucy53aWR0aC8yLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LzJdO1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgICAgICB0aGlzLmJvZHlSYWRpdXMgPSBDT05TVEFOVFMuYm9keVJhZGl1cztcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgPSAoMjIuNSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLlBlcmlwaGVyYWxDcmFiID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuUGVyaXBoZXJhbENyYWIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvUGVyaXBoZXJhbENyYWIucG5nXCI7XG4gICAgfVxuXG4gICAgZHJhd1BlcmlwaGVyYWxDcmFiKGN0eCkge1xuICAgICAgICBsZXQgcG9zWCA9IHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgbGV0IHBvc1kgPSB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGxldCByb3RhdGVBbmdsZSA9ICBNYXRoLlBJIC8gMiArIHRoaXMucG9zX2FuZ2xlO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdICsgcG9zWCwgdGhpcy5jZW50ZXJbMV0gKyBwb3NZKTtcbiAgICAgICAgY3R4LnJvdGF0ZShyb3RhdGVBbmdsZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5QZXJpcGhlcmFsQ3JhYiwgMCwgMCwgODAwLCA4MDAsIC00MCwgLTQwLCA4MCwgODApXG4gICAgICAgIGN0eC5yb3RhdGUoLXJvdGF0ZUFuZ2xlKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtKHRoaXMuY2VudGVyWzBdICsgcG9zWCksIC0odGhpcy5jZW50ZXJbMV0gKyBwb3NZKSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3UGVyaXBoZXJhbENyYWIoY3R4KTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbihpKSB7XG4gICAgICAgIHRoaXMucG9zX2FuZ2xlICs9ICg0NSAqIE1hdGguUEkgLyAxODApICogaTtcbiAgICB9XG5cbiAgICBtb3ZlT3V0KCkge1xuICAgICAgICB0aGlzLnIgKz0gQ09OU1RBTlRTLnNwZWVkO1xuICAgIH1cblxuICAgIHB1bGxlZEluKCkge1xuICAgICAgICB0aGlzLnIgLT0gQ09OU1RBTlRTLnB1bGxlZEluU3BlZWQ7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuciA9IENPTlNUQU5UUy5zdGFydERpc3Q7XG4gICAgfVxuXG4gICAgYm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VudGVyWDogdGhpcy5jZW50ZXJbMF0gKyB0aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSksXG4gICAgICAgICAgICBjZW50ZXJZOiB0aGlzLmNlbnRlclsxXSArIHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKSxcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5ib2R5UmFkaXVzLFxuICAgICAgICB9XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==