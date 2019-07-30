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
        // this.drawGrid(ctx);
    }

    animateBody(ctx) {
        this.drawBottomCrabBody(ctx);
        // this.drawGrid(ctx);
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

class Claw {
    constructor(dimensions, clawAngle, image) {
        this.dimensions = dimensions;
        this.center = [this.dimensions.width/2, this.dimensions.height/2];
        this.clawRadius = CONSTANTS.clawRadius;
        this.r = CONSTANTS.startDist;
        this.pos_angle = clawAngle
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
        ctx.rotate(this.pos_angle);
        ctx.drawImage(this.image, 0, 0, 750, 1500, -45, -100, destDimen/2, destDimen)
        ctx.rotate(-(this.pos_angle));
        ctx.translate(-(this.center[0] + this.posX), -(this.center[1] + this.posY));
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
/*! exports provided: replayButton, drawReplay, drawStart, getMousePos, isInside, drawTimer, drawLostText, drawWinText, drawTitle, drawScore, drawFinalScore */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawFinalScore", function() { return drawFinalScore; });
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

const drawFinalScore = (ctx, score) => {
    // if (this.score > 10000) this.score = 0;
    const loc = { x: 600, y: 775 };
    ctx.font = "bold 20pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText(`Final Score: ${score}`, loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeText(`Final Score: ${score}`, loc.x, loc.y);
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
    duration: 2000, //ms
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
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawFinalScore"])(this.ctx, this.score);
                this.running = false;
            }
            if (this.gameLost()) {
                this.level.animate(this.ctx);
                this.ctx.drawImage(this.loseSplash, 0, 0, 1024, 808, 16, 125, 768, 606)
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawLostText"])(this.ctx);
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawReplay"])(this.ctx);
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawFinalScore"])(this.ctx, this.score);
                this.running = false;
            }
            if (this.running) {
                // this.level.animate(this.ctx);
                // this.level.animateOcean(this.ctx);
                this.level.animateBucket(this.ctx);

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
                } else {
                    this.bottomCrab.animate(this.ctx);
                }

                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawTimer"])(this.ctx, this.countdown());
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawScore"])(this.ctx, this.score);

                requestAnimationFrame(this.animate.bind(this));
                if (this.bottomCrabActiveCW || this.bottomCrabActiveCCW) {
                    this.moveBottomCrab();
                }
                if (this.rightClawActive || this.rightClawRetractActive || this.leftClawActive || this.leftClawRetractActive ) {
                    this.moveClaw();
                }
                timestamp = new Date().getTime();
                this.score = Math.floor((timestamp - bufferStart) / 1000) + this.crabScore;
                this.timer = CONSTANTS.level1 - (timestamp - bufferStart);

                let buffered = timestamp - bufferStart > CONSTANTS.startDelay;
                let moveDelayed = timestamp - interval > CONSTANTS.moveDelay;
                let differentCrab = lastrandom !== random;
                this.level.animateDarkness(this.ctx, this.darkness);                    
                if (buffered && moveDelayed && differentCrab ) { //buffer time before crabs start moving out
                    this.movePeripheralCrab(timestamp, random, CONSTANTS.duration);
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
            this.darkness = false;
        } else {
            this.darkness = true;
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
        this.darkness = true;
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
        this.bucket = new Image();
        this.bucket.src = "./assets/images/bucket.png";
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
        ctx.drawImage(this.net, 0, 0, 575, 450, this.x, 135, 575, 450);
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

    drawBucket(ctx) {
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        ctx.drawImage(this.bucket, 0, 0, 967, 957, (800 - (967 * 0.7)) / 2, (800 - (957 * 0.7))/2, 967*0.7, 957*0.7);
    }

    animateBucket(ctx) {
        this.drawBucket(ctx);
    }

    drawDarkness(ctx, off) {
        if (off) {
            debugger
            ctx.fillStyle = "rgba(0,0,0,0.88)"
        } else {
            ctx.fillStyle = "rgba(0,0,0,0.5)"
        }
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animateDarkness(ctx, off) {
        this.drawDarkness(ctx, off);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGF3LmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3X2V4dHJhX3N0dWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQUk7QUFDakMsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQixFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDN1ZBO0FBQUE7QUFBMEI7QUFDMUIsNkNBQTZDO0FBQzdDO0FBQ0EsUUFBUSw2Q0FBSTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDIiwiZmlsZSI6Ii4vZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBDbGF3IGZyb20gJy4vY2xhdyc7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBST1RBVElPTl9BTkdMRTogMi41LCAgLy9pbiBkZWdyZWVzXG4gICAgTENMQVdPRkZTRVQ6IE1hdGguUEkgKiAoMyAvIDIpLFxuICAgIG91dGVyQm91bmQ6IDMyNSxcbn07XG4vLyBjb25zdCBCT1RUT01fQ1JBQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291cmNlXCIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbUNyYWIge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGgvMjtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yO1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9Cb3R0b21DcmFiMi5wbmdcIjtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiQm9keSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWJCb2R5LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJub2FybXMucG5nXCI7XG4gICAgICAgIHRoaXMucmlnaHRDbGF3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5yaWdodENsYXdJbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU1NDMxZDQyY2xhdzMucG5nXCI7XG4gICAgICAgIHRoaXMubGVmdENsYXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlZnRDbGF3SW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvNWQzMDE1NTQzMWQ0MmxlZnRjbGF3LnBuZ1wiO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhdyA9IG5ldyBDbGF3KHRoaXMuZGltZW5zaW9ucywgdGhpcy5wb3NpdGlvbl9hbmdsZSwgdGhpcy5yaWdodENsYXdJbWFnZSk7XG4gICAgICAgIHRoaXMubGVmdENsYXcgPSBuZXcgQ2xhdyh0aGlzLmRpbWVuc2lvbnMsIHRoaXMucG9zaXRpb25fYW5nbGUgKyBDT05TVEFOVFMuTENMQVdPRkZTRVQsIHRoaXMubGVmdENsYXdJbWFnZSk7XG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbUNyYWIoY3R4KSB7XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuQm90dG9tQ3JhYiwgMCwgMCwgMTUwMCwgMTUwMCwgLTEwMCwgLTEwMCwgZGVzdERpbWVuLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLXRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbUNyYWJCb2R5KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLkJvdHRvbUNyYWJCb2R5LCAwLCAwLCAxNTAwLCAxNTAwLCAtMTAwLCAtMTAwLCBkZXN0RGltZW4sIGRlc3REaW1lbilcbiAgICAgICAgY3R4LnJvdGF0ZSgtdGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgfVxuXG4gICAgZHJhd0dyaWQoY3R4KSB7XG4gICAgICAgIC8vY2lyY2xlc1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDEwMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMTc1LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAyNTAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIENPTlNUQU5UUy5vdXRlckJvdW5kLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvL2xpbmVzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIDApO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIHRoaXMueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIDApO1xuICAgICAgICBjdHgubGluZVRvKDAsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3JhYihjdHgpXG4gICAgICAgIC8vIHRoaXMuZHJhd0dyaWQoY3R4KTtcbiAgICB9XG5cbiAgICBhbmltYXRlQm9keShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3JhYkJvZHkoY3R4KTtcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JpZChjdHgpO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApXG4gICAgICAgIHRoaXMucmlnaHRDbGF3LnBvc19hbmdsZSArPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMubGVmdENsYXcucG9zX2FuZ2xlICs9IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICB9XG5cbiAgICBtb3ZlQm90dG9tQ3JhYkNDVygpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl9hbmdsZSAtPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMucmlnaHRDbGF3LnBvc19hbmdsZSAtPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMubGVmdENsYXcucG9zX2FuZ2xlIC09IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICB9XG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIGNsYXdSYWRpdXM6IDQwLFxuICAgIGNsYXdTcGVlZDogMy4wLFxuICAgIG1heFJpZ2h0UmFuZ2U6IDMwMCxcbiAgICBtYXhMZWZ0UmFuZ2U6IDI1MCxcbiAgICBzdGFydERpc3Q6IDQ1LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGF3IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjbGF3QW5nbGUsIGltYWdlKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuY2VudGVyID0gW3RoaXMuZGltZW5zaW9ucy53aWR0aC8yLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LzJdO1xuICAgICAgICB0aGlzLmNsYXdSYWRpdXMgPSBDT05TVEFOVFMuY2xhd1JhZGl1cztcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgPSBjbGF3QW5nbGVcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgICB0aGlzLnBvc1ggPSAwO1xuICAgICAgICB0aGlzLnBvc1kgPSAwO1xuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgbW92ZUNsYXcoKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgdGhpcy5wb3NZID0gdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpO1xuICAgIH1cblxuICAgIHJldHJhY3RDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yID49IChDT05TVEFOVFMuY2xhd1NwZWVkICsgQ09OU1RBTlRTLnN0YXJ0RGlzdCkpIHtcbiAgICAgICAgICAgIHRoaXMuciAtPSAoQ09OU1RBTlRTLmNsYXdTcGVlZCk7IC8vY2FuIHR1bmUgZm9yIHNsb3dlciByZXRyYWN0aW9uIHJhdGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kUmlnaHRDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yIDwgQ09OU1RBTlRTLm1heFJpZ2h0UmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuciArPSBDT05TVEFOVFMuY2xhd1NwZWVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZXh0ZW5kTGVmdENsYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLnIgPCBDT05TVEFOVFMubWF4TGVmdFJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnIgKz0gQ09OU1RBTlRTLmNsYXdTcGVlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgcmVzZXRDbGF3KCkge1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgIH1cblxuICAgIGRyYXdSaWdodENsYXcoY3R4KSB7XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIC8vYXJtIHJlcHJlc2VudGVkIGJ5IHNjYWxpbmcgcmVjdGFuZ2xlXG5cbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV0pO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzkwMjUyOVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoLTE1LCA0MCwgdGhpcy5yIC0gMTAsIDYpO1xuICAgICAgICBjdHgucm90YXRlKC0odGhpcy5wb3NfYW5nbGUpKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtKHRoaXMuY2VudGVyWzBdKSwgLSh0aGlzLmNlbnRlclsxXSkpO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1gsIHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgNzUwLCAxNTAwLCAtNDUsIC0xMDAsIGRlc3REaW1lbi8yLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLnBvc19hbmdsZSkpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1gpLCAtKHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZKSk7XG4gICAgfVxuXG4gICAgZHJhd0xlZnRDbGF3KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM5MDI1MjlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KC0yLCAtNjAsIHRoaXMuciAtIDEwLCA2KTtcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMucG9zX2FuZ2xlKSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSksIC0odGhpcy5jZW50ZXJbMV0pKTtcblxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYLCB0aGlzLmNlbnRlclsxXSArIHRoaXMucG9zWSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NfYW5nbGUgKyBNYXRoLlBJICogKDEgLyAyKSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgNzUwLCAxNTAwLCAtODUuNSwgLTU1LCBkZXN0RGltZW4gLyAyLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLnBvc19hbmdsZSArIE1hdGguUEkgKiAoMSAvIDIpKSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCksIC0odGhpcy5jZW50ZXJbMV0gKyB0aGlzLnBvc1kpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlUmlnaHQoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd1JpZ2h0Q2xhdyhjdHgpO1xuICAgIH1cbiAgICBhbmltYXRlTGVmdChjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3TGVmdENsYXcoY3R4KTtcbiAgICB9XG5cbiAgICByaWdodEJvdW5kcygpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHtcbiAgICAgICAgICAgIGNlbnRlclg6IHRoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYICsgKDQ4ICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUgKyBNYXRoLlBJIC8gMikpLFxuICAgICAgICAgICAgY2VudGVyWTogdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnBvc1kgKyAoNDggKiBNYXRoLnNpbih0aGlzLnBvc19hbmdsZSArIE1hdGguUEkgLyAyKSksXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMuY2xhd1JhZGl1cyxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH1cblxuICAgIGxlZnRCb3VuZHMoKSB7XG4gICAgICAgIGxldCBib3VuZHMgPSB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCArICg0OCAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlIC0gTWF0aC5QSSAvIDIpKSxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZICsgKDQ4ICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUgLSBNYXRoLlBJIC8gMikpLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmNsYXdSYWRpdXMsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG5cblxuICAgIGNvbGxpZGVzV2l0aChib3VuZHMsIGNyYWIpIHtcbiAgICAgICAgY29uc3QgX292ZXJsYXAgPSAoYm91bmQxLCBib3VuZDIpID0+IHtcbiAgICAgICAgICAgIGxldCBkeCA9IGJvdW5kMS5jZW50ZXJYIC0gYm91bmQyLmNlbnRlclg7XG4gICAgICAgICAgICBsZXQgZHkgPSBib3VuZDEuY2VudGVyWSAtIGJvdW5kMi5jZW50ZXJZO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGlmICgxLjc1KmRpc3RhbmNlIDwgYm91bmQxLnJhZGl1cyArIGJvdW5kMi5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb2xsaXNpb24gZGV0ZWN0ZWQhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChfb3ZlcmxhcChib3VuZHMsIGNyYWIuYm91bmRzKCkpKSB7IFxuICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTsgXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCByZXBsYXlCdXR0b24gPSB7XG4gICAgeDogMzI1LFxuICAgIHk6IDcyNSxcbiAgICB3OiAxNTAsXG4gICAgaDogNjBcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdSZXBsYXkgPSAoY3R4KSA9PiB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSBcIjVcIjtcbiAgICBjdHguc3Ryb2tlUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZlYjAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjI0cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsVGV4dChcIlJlcGxheVwiLCAzNjAsIHJlcGxheUJ1dHRvbi55ICsgKDAuNSpyZXBsYXlCdXR0b24uaCkgKyAxMik7IC8vMTIgaXMgaGFsZiBmb250IHNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdTdGFydCA9IChjdHgpID0+IHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IFwiNVwiO1xuICAgIGN0eC5zdHJva2VSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmViMDBcIjtcbiAgICBjdHguZmlsbFJlY3QocmVwbGF5QnV0dG9uLngsIHJlcGxheUJ1dHRvbi55LCByZXBsYXlCdXR0b24udywgcmVwbGF5QnV0dG9uLmgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZm9udCA9IFwiMjRwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiU3RhcnRcIiwgMzY1LCByZXBsYXlCdXR0b24ueSArICgwLjUqcmVwbGF5QnV0dG9uLmgpICsgMTIpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0TW91c2VQb3MgPSAoY2FudmFzLCBldmVudCkgPT4ge1xuICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBpc0luc2lkZSA9IChwb3MsIHJlY3QpID0+IHtcbiAgICByZXR1cm4gcG9zLnggPiByZWN0LnggJiYgcG9zLnggPCByZWN0LnggKyByZWN0LncgJiYgcG9zLnkgPCByZWN0LnkgKyByZWN0LmggJiYgcG9zLnkgPiByZWN0Lnlcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdUaW1lciA9IChjdHgsIGNvdW50ZG93bikgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogNTAsIHk6IDUwIH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzBwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoY291bnRkb3duLCBsb2MueCwgbG9jLnkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlVGV4dChjb3VudGRvd24sIGxvYy54LCBsb2MueSk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3TG9zdFRleHQgPSAoY3R4KSA9PiB7XG4gICAgY29uc3QgbG9jID0geyB4OiAxMjUsIHk6IDEwMCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDM2cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiWW91J3JlIG5vdCBCb3R0b21DcmFiIGVub3VnaCFcIiwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVRleHQoXCJZb3UncmUgbm90IEJvdHRvbUNyYWIgZW5vdWdoIVwiLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd1dpblRleHQgPSAoY3R4KSA9PiB7XG4gICAgY29uc3QgbG9jID0geyB4OiAxMjUsIHk6IDUwIH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzBwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJZb3UncmUgdGhlIGJvdHRvbWVzdCBvZiBCb3R0b21DcmFicyFcIiwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVRleHQoXCJZb3UncmUgdGhlIGJvdHRvbWVzdCBvZiBCb3R0b21DcmFicyFcIiwgbG9jLngsIGxvYy55KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdUaXRsZSA9IChjdHgpID0+IHtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDE1MCwgeTogMTAwIH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzZwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJIb3cgQm90dG9tQ3JhYiBhcmUgeW91IT9cIiwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVRleHQoXCJIb3cgQm90dG9tQ3JhYiBhcmUgeW91IT9cIiwgbG9jLngsIGxvYy55KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdTY29yZSA9IChjdHgsIHNjb3JlKSA9PiB7XG4gICAgLy8gaWYgKHRoaXMuc2NvcmUgPiAxMDAwMCkgdGhpcy5zY29yZSA9IDA7XG4gICAgY29uc3QgbG9jID0geyB4OiA3MDAsIHk6IDUwIH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzBwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoc2NvcmUsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KHNjb3JlLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0ZpbmFsU2NvcmUgPSAoY3R4LCBzY29yZSkgPT4ge1xuICAgIC8vIGlmICh0aGlzLnNjb3JlID4gMTAwMDApIHRoaXMuc2NvcmUgPSAwO1xuICAgIGNvbnN0IGxvYyA9IHsgeDogNjAwLCB5OiA3NzUgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAyMHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChgRmluYWwgU2NvcmU6ICR7c2NvcmV9YCwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVRleHQoYEZpbmFsIFNjb3JlOiAke3Njb3JlfWAsIGxvYy54LCBsb2MueSk7XG59IiwiaW1wb3J0IExldmVsIGZyb20gJy4vbGV2ZWwnO1xuaW1wb3J0IEJvdHRvbUNyYWIgZnJvbSAnLi9ib3R0b21fY3JhYic7XG5pbXBvcnQgUGVyaXBoZXJhbENyYWIgZnJvbSAnLi9wZXJpcGhlcmFsX2NyYWInO1xuaW1wb3J0IHsgZHJhd1RpbWVyLCBkcmF3TG9zdFRleHQsIGRyYXdXaW5UZXh0LFxuICAgIGRyYXdUaXRsZSwgZHJhd1Njb3JlLCBkcmF3RmluYWxTY29yZSxcbiAgICBkcmF3UmVwbGF5LCByZXBsYXlCdXR0b24sIGRyYXdTdGFydCxcbiAgICBnZXRNb3VzZVBvcywgaXNJbnNpZGUgfSBmcm9tICcuL2RyYXdfZXh0cmFfc3R1ZmYnO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgZXNjYXBlOiAzMCxcbiAgICBkdXJhdGlvbjogMjAwMCwgLy9tc1xuICAgIHN0YXJ0RGVsYXk6IDEwMDAsIC8vbXNcbiAgICBtb3ZlRGVsYXk6IDIwMDAsIC8vbXNcbiAgICBvdXRlckJvdW5kOiAzMjUsXG4gICAgbGV2ZWwxOiA2MDAwMCwgICAgIC8vbXMgZm9yIGxldmVsMSB0aW1lIGxlbmd0aFxuICAgIGxldmVsMjogNDUwMDAsXG4gICAgbGV2ZWwzOiAzMDAwMCxcbiAgICBQZXJpcGhlcmFsQ3JhYlN0YXJ0RGlzdDogMTQwLFxufVxuXG5sZXQgc3RhcnR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5sZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG5sZXQgbGFzdHJhbmRvbSA9IDg7XG5sZXQgdGltZXN0YW1wID0gMDtcbmxldCBidWZmZXJTdGFydCA9IDA7XG5sZXQgaW50ZXJ2YWwgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIHRoaXMud2luU3BsYXNoID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMud2luU3BsYXNoLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0JvdHRvbUNyYWIgU3BsYXNoLmpwZ1wiO1xuICAgICAgICB0aGlzLmxvc2VTcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sb3NlU3BsYXNoLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0JvdHRvbUNyYWIgbG9zZVNwbGFzaC5wbmdcIjtcbiAgICAgICAgdGhpcy5pbml0aWFsU3BsYXNoID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNwbGFzaC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9DcmFiQnVja2V0RWZmZWN0LmpwZ1wiXG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluaXRpYWxTcGxhc2gsIDAsIDAsIDY1MCwgNTI2LCA3NSwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDUyNiAtIDEwMCwgNjUwLCA1MjYpICAgICAgICAgICAgXG4gICAgICAgICAgICBkcmF3VGl0bGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgZHJhd1N0YXJ0KHRoaXMuY3R4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVXb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZVdvbih0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMud2luU3BsYXNoLCAwLCAwLCAxMjAwLCAyNDAwLCAyNTAsIDc1LCAzMTUsIDYzMClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIllvdSdyZSB0aGUgYm90dG9tZXN0IG9mIEJvdHRvbUNyYWJzIVwiKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBkcmF3V2luVGV4dCh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgZHJhd1JlcGxheSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgZHJhd0ZpbmFsU2NvcmUodGhpcy5jdHgsIHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUxvc3QoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubG9zZVNwbGFzaCwgMCwgMCwgMTAyNCwgODA4LCAxNiwgMTI1LCA3NjgsIDYwNilcbiAgICAgICAgICAgICAgICBkcmF3TG9zdFRleHQodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIGRyYXdSZXBsYXkodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIGRyYXdGaW5hbFNjb3JlKHRoaXMuY3R4LCB0aGlzLnNjb3JlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubGV2ZWwuYW5pbWF0ZU9jZWFuKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGVCdWNrZXQodGhpcy5jdHgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3JhYi5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuY29sbGlkZXNXaXRoKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcucmlnaHRCb3VuZHMoKSwgY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdFRvZygpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyYWJTY29yZSArPSBNYXRoLmZsb29yKGNyYWIuci8xMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdWxsUGVyaXBoZXJhbENyYWIoY3JhYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5jb2xsaWRlc1dpdGgodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmxlZnRCb3VuZHMoKSwgY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdSZXRyYWN0VG9nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JhYlNjb3JlICs9IE1hdGguZmxvb3IoY3JhYi5yLzEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1bGxQZXJpcGhlcmFsQ3JhYihjcmFiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRDbGF3QWN0aXZlIHx8IHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSB8fCB0aGlzLmxlZnRDbGF3QWN0aXZlIHx8IHRoaXMubGVmdENsYXdSZXRyYWN0QWN0aXZlICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVDcmFiV2l0aENsYXdzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRyYXdUaW1lcih0aGlzLmN0eCwgdGhpcy5jb3VudGRvd24oKSk7XG4gICAgICAgICAgICAgICAgZHJhd1Njb3JlKHRoaXMuY3R4LCB0aGlzLnNjb3JlKTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXIHx8IHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCb3R0b21DcmFiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSB8fCB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgfHwgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSB8fCB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlID0gTWF0aC5mbG9vcigodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQpIC8gMTAwMCkgKyB0aGlzLmNyYWJTY29yZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gQ09OU1RBTlRTLmxldmVsMSAtICh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyZWQgPSB0aW1lc3RhbXAgLSBidWZmZXJTdGFydCA+IENPTlNUQU5UUy5zdGFydERlbGF5O1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlRGVsYXllZCA9IHRpbWVzdGFtcCAtIGludGVydmFsID4gQ09OU1RBTlRTLm1vdmVEZWxheTtcbiAgICAgICAgICAgICAgICBsZXQgZGlmZmVyZW50Q3JhYiA9IGxhc3RyYW5kb20gIT09IHJhbmRvbTtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGVEYXJrbmVzcyh0aGlzLmN0eCwgdGhpcy5kYXJrbmVzcyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyZWQgJiYgbW92ZURlbGF5ZWQgJiYgZGlmZmVyZW50Q3JhYiApIHsgLy9idWZmZXIgdGltZSBiZWZvcmUgY3JhYnMgc3RhcnQgbW92aW5nIG91dFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQZXJpcGhlcmFsQ3JhYih0aW1lc3RhbXAsIHJhbmRvbSwgQ09OU1RBTlRTLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlQ3JhYldpdGhDbGF3cygpIHtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5hbmltYXRlUmlnaHQodGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcuYW5pbWF0ZUxlZnQodGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWIuYW5pbWF0ZUJvZHkodGhpcy5jdHgpO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiKCkge1xuICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNXKCk7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3Lm1vdmVDbGF3KCk7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcubW92ZUNsYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDQ1coKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcubW92ZUNsYXcoKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUNsYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5leHRlbmRSaWdodENsYXcoKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICB9IGlmICh0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcucmV0cmFjdENsYXcoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LnIgPCA0OCkgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gXG4gICAgICAgIGlmICh0aGlzLmxlZnRDbGF3QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcuZXh0ZW5kTGVmdENsYXcoKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcubW92ZUNsYXcoKTtcbiAgICAgICAgfSBpZiAodGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5yZXRyYWN0Q2xhdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5yIDwgNDgpIHRoaXMubGVmdENsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGVyaXBoZXJhbENyYWIodGltZXN0YW1wLCBpLCBkdXJhdGlvbikge1xuICAgICAgICBzdGFydHRpbWUgPSBpbnRlcnZhbCArIENPTlNUQU5UUy5tb3ZlRGVsYXk7XG4gICAgICAgIGlmICgodGltZXN0YW1wIC0gc3RhcnR0aW1lKSA8PSBkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnNbaV0ubW92ZU91dCgpO1xuICAgICAgICAgICAgdGhpcy5kYXJrbmVzcyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXJrbmVzcyA9IHRydWU7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGxhc3RyYW5kb20gPSBpO1xuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWxsUGVyaXBoZXJhbENyYWIoY3JhYikge1xuICAgICAgICBpZiAoY3JhYi5yID49IENPTlNUQU5UUy5QZXJpcGhlcmFsQ3JhYlN0YXJ0RGlzdCkge1xuICAgICAgICAgICAgY3JhYi5wdWxsZWRJbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYiA9IG5ldyBCb3R0b21DcmFiKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLnB1c2gobmV3IFBlcmlwaGVyYWxDcmFiKHRoaXMuZGltZW5zaW9ucykpO1xuICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnNbaV0ucG9zaXRpb24oaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXJrbmVzcyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmNyYWJTY29yZSA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aW1lc3RhbXAgPSAwO1xuICAgICAgICBidWZmZXJTdGFydCA9IDA7XG4gICAgICAgIGludGVydmFsID0gMDtcbiAgICB9XG5cbiAgICBnYW1lTG9zdCgpIHtcbiAgICAgICAgbGV0IGdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goIChjcmFiLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiggY3JhYi5yID4gQ09OU1RBTlRTLm91dGVyQm91bmQpIGdhbWVvdmVyID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZ2FtZW92ZXI7XG4gICAgfVxuXG4gICAgZ2FtZVdvbigpIHtcbiAgICAgICAgbGV0IGdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIGlmICgodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQpID4gQ09OU1RBTlRTLmxldmVsMSkge1xuICAgICAgICAgICAgZ2FtZW92ZXIgPSB0cnVlO1xuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gZ2FtZW92ZXI7XG4gICAgfVxuXG4gICAgY291bnRkb3duKCkge1xuICAgICAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IodGhpcy50aW1lciAvIDYwMDAwKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBNYXRoLmNlaWwoKHRoaXMudGltZXIgJSA2MDAwMCkvMTAwMCk7XG4gICAgICAgIHJldHVybiBzZWNvbmRzID49IDEwID8gYCR7bWludXRlc306JHtzZWNvbmRzfWAgOiBgJHttaW51dGVzfTowJHtzZWNvbmRzfWBcbiAgICB9XG5cbiAgICByaWdodENsYXdUb2coKSB7XG4gICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmlnaHRDbGF3UmV0cmFjdFRvZygpIHtcbiAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yaWdodENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZWZ0Q2xhd1RvZygpIHtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgbGVmdENsYXdSZXRyYWN0VG9nKCkge1xuICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGVmdENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHN0YXJ0dGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgYnVmZmVyU3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgICAgIGludGVydmFsID0gdGltZXN0YW1wO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleWRvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGNsaWNrKGUpIHtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3ModGhpcy5jdHguY2FudmFzLCBlKTtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIGxldCByZWN0ID0ge1xuICAgICAgICAgICAgICAgIHg6IHJlcGxheUJ1dHRvbi54ICogMC44LFxuICAgICAgICAgICAgICAgIHk6IHJlcGxheUJ1dHRvbi55ICogMC44LFxuICAgICAgICAgICAgICAgIHc6IHJlcGxheUJ1dHRvbi53ICogMC44LFxuICAgICAgICAgICAgICAgIGg6IHJlcGxheUJ1dHRvbi5oICogMC44LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0luc2lkZShtb3VzZVBvcywgcmVjdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9XG4gICAgfSAgICBcblxuICAgIGtleXVwKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmtleXNbXCJkXCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0VG9nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgICAgICAgIHRoaXMua2V5c1tcImFcIl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdFRvZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5ZG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJkXCJdICYmIHRoaXMua2V5c1tcImFcIl0pIHsgLy9jdXJyZW50bHkgdHdvIGtleXMgYWN0aXZlXG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKGNyYWIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LmNvbGxpZGVzV2l0aCh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LnJpZ2h0Qm91bmRzKCksIGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdFRvZygpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmNvbGxpZGVzV2l0aCh0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcubGVmdEJvdW5kcygpLCBjcmFiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdFRvZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdUb2coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd1RvZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5c1tcImRcIl0gPSB0cnVlOyAvL25lZWRlZCBmb3IgZG91YmxlIGNsYXcgYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKGNyYWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuY29sbGlkZXNXaXRoKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcucmlnaHRCb3VuZHMoKSwgY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RUb2coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdUb2coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzW1wiYVwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmNvbGxpZGVzV2l0aCh0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcubGVmdEJvdW5kcygpLCBjcmFiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdSZXRyYWN0VG9nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdUb2coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHsgLy9ET01Db250ZW50TG9hZGVkXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICBuZXcgR2FtZShjYW52YXMpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLnggPSAxMzA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMub2NlYW5GbG9vciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm9jZWFuRmxvb3Iuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvb2NlYW4tMTIxNDc0N18xOTIwY3JvcHBlZDgwMC5qcGVnXCI7XG4gICAgICAgIHRoaXMubmV0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubmV0LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25ldC5wbmdcIjtcbiAgICAgICAgdGhpcy5idWNrZXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5idWNrZXQuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYnVja2V0LnBuZ1wiO1xuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDBkMWVmXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIH1cblxuICAgIGRyYXdXb25CZyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzdkZmVkNVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGFuaW1hdGVXb24oY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd1dvbkJnKGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd09jZWFuRmxvb3IoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5vY2VhbkZsb29yLCAwLCAwLCAxMDY3LCA4MDAsIDAsIDAsIDEwNjcsIDgwMCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5uZXQsIDAsIDAsIDU3NSwgNDUwLCB0aGlzLngsIDEzNSwgNTc1LCA0NTApO1xuICAgICAgICAvL2JhY2tncm91bmQgc2Nyb2xsXG4gICAgICAgIGlmICh0aGlzLnggPD0gOTApIHtcbiAgICAgICAgICAgIHRoaXMuZmxvd0xlZnQgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgIGlmICh0aGlzLnggPj0gMTMwKSB7XG4gICAgICAgICAgICB0aGlzLmZsb3dMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mbG93TGVmdCkge1xuICAgICAgICAgICAgdGhpcy54IC09IDAuMTVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCArPSAwLjE1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZU9jZWFuKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdPY2VhbkZsb29yKGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd0J1Y2tldChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYnVja2V0LCAwLCAwLCA5NjcsIDk1NywgKDgwMCAtICg5NjcgKiAwLjcpKSAvIDIsICg4MDAgLSAoOTU3ICogMC43KSkvMiwgOTY3KjAuNywgOTU3KjAuNyk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUJ1Y2tldChjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3QnVja2V0KGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd0RhcmtuZXNzKGN0eCwgb2ZmKSB7XG4gICAgICAgIGlmIChvZmYpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuODgpXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiXG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZURhcmtuZXNzKGN0eCwgb2ZmKSB7XG4gICAgICAgIHRoaXMuZHJhd0RhcmtuZXNzKGN0eCwgb2ZmKTtcbiAgICB9XG5cbn0iLCJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgc3RhcnREaXN0OiAxNDAsXG4gICAgc3BlZWQ6IDEuMixcbiAgICBib2R5UmFkaXVzOiA0MCxcbiAgICBwdWxsZWRJblNwZWVkOiAzLjIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcmlwaGVyYWxDcmFiIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuY2VudGVyID0gW3RoaXMuZGltZW5zaW9ucy53aWR0aC8yLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LzJdO1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgICAgICB0aGlzLmJvZHlSYWRpdXMgPSBDT05TVEFOVFMuYm9keVJhZGl1cztcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgPSAoMjIuNSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLlBlcmlwaGVyYWxDcmFiID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuUGVyaXBoZXJhbENyYWIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvUGVyaXBoZXJhbENyYWIucG5nXCI7XG4gICAgfVxuXG4gICAgZHJhd1BlcmlwaGVyYWxDcmFiKGN0eCkge1xuICAgICAgICBsZXQgcG9zWCA9IHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgbGV0IHBvc1kgPSB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGxldCByb3RhdGVBbmdsZSA9ICBNYXRoLlBJIC8gMiArIHRoaXMucG9zX2FuZ2xlO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdICsgcG9zWCwgdGhpcy5jZW50ZXJbMV0gKyBwb3NZKTtcbiAgICAgICAgY3R4LnJvdGF0ZShyb3RhdGVBbmdsZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5QZXJpcGhlcmFsQ3JhYiwgMCwgMCwgODAwLCA4MDAsIC00MCwgLTQwLCA4MCwgODApXG4gICAgICAgIGN0eC5yb3RhdGUoLXJvdGF0ZUFuZ2xlKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtKHRoaXMuY2VudGVyWzBdICsgcG9zWCksIC0odGhpcy5jZW50ZXJbMV0gKyBwb3NZKSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3UGVyaXBoZXJhbENyYWIoY3R4KTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbihpKSB7XG4gICAgICAgIHRoaXMucG9zX2FuZ2xlICs9ICg0NSAqIE1hdGguUEkgLyAxODApICogaTtcbiAgICB9XG5cbiAgICBtb3ZlT3V0KCkge1xuICAgICAgICB0aGlzLnIgKz0gQ09OU1RBTlRTLnNwZWVkO1xuICAgIH1cblxuICAgIHB1bGxlZEluKCkge1xuICAgICAgICB0aGlzLnIgLT0gQ09OU1RBTlRTLnB1bGxlZEluU3BlZWQ7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuciA9IENPTlNUQU5UUy5zdGFydERpc3Q7XG4gICAgfVxuXG4gICAgYm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VudGVyWDogdGhpcy5jZW50ZXJbMF0gKyB0aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSksXG4gICAgICAgICAgICBjZW50ZXJZOiB0aGlzLmNlbnRlclsxXSArIHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKSxcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5ib2R5UmFkaXVzLFxuICAgICAgICB9XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==