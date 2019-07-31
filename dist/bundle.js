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
/*! exports provided: replayButton, drawReplayButton, drawStartButton, drawNextStageButton, getMousePos, isInside, drawTimer, drawLostText, drawWinText, drawPostLevel1Text, drawTitle, drawScore, drawFinalScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replayButton", function() { return replayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawReplayButton", function() { return drawReplayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawStartButton", function() { return drawStartButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawNextStageButton", function() { return drawNextStageButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMousePos", function() { return getMousePos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInside", function() { return isInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTimer", function() { return drawTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLostText", function() { return drawLostText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawWinText", function() { return drawWinText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPostLevel1Text", function() { return drawPostLevel1Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTitle", function() { return drawTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawScore", function() { return drawScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawFinalScore", function() { return drawFinalScore; });
const replayButton = {
    x: 325,
    y: 725,
    w: 150,
    h: 60
}


const drawReplayButton = (ctx) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = "5";
    ctx.strokeRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "#ffeb00";
    ctx.fillRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "black";
    ctx.font = "24pt Bangers";
    ctx.fillText("Replay", 360, replayButton.y + (0.5*replayButton.h) + 12); //12 is half font size
}

const drawStartButton = (ctx) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = "5";
    ctx.strokeRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "#ffeb00";
    ctx.fillRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "black";
    ctx.font = "24pt Bangers";
    ctx.fillText("Start", 365, replayButton.y + (0.5*replayButton.h) + 12);
}

const drawNextStageButton = (ctx) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = "5";
    ctx.strokeRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "#ffeb00";
    ctx.fillRect(replayButton.x, replayButton.y, replayButton.w, replayButton.h);

    ctx.fillStyle = "black";
    ctx.font = "24pt Bangers";
    ctx.fillText("Next Stage", 340, replayButton.y + (0.5*replayButton.h) + 12);
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
    ctx.lineWidth = 0.5;
    ctx.strokeText(countdown, loc.x, loc.y);
}

const drawLostText = (ctx) => {
    const loc = { x: 125, y: 100 };
    ctx.font = "bold 36pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText("You're not BottomCrab enough!", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    ctx.strokeText("You're not BottomCrab enough!", loc.x, loc.y);
}

const drawWinText = (ctx) => {
    const loc = { x: 125, y: 50 };
    ctx.font = "bold 30pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText("You're the bottomest of BottomCrabs!", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    ctx.strokeText("You're the bottomest of BottomCrabs!", loc.x, loc.y);
}

const drawPostLevel1Text = (ctx) => {
    let postLevel1Text1 = "Nicely done..."
    let postLevel1Text2 = "You've brought along all your crab friends for all the fun ahead."
    let postLevel1Text3 = "Now get ready for Stage2.  Keep them from escaping the bucket!"
    const loc = { x: 50, y: 50 };
    ctx.font = "bold 22pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText(postLevel1Text1, loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    ctx.strokeText(postLevel1Text1, loc.x, loc.y);
    ctx.font = "bold 22pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText(postLevel1Text2, loc.x, loc.y + 40);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    ctx.strokeText(postLevel1Text2, loc.x, loc.y + 40);
    ctx.font = "bold 22pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText(postLevel1Text3, loc.x, loc.y + 80);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    ctx.strokeText(postLevel1Text3, loc.x, loc.y + 80);
}

const drawTitle = (ctx) => {
    const loc = { x: 150, y: 100 };
    ctx.font = "bold 36pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText("How BottomCrab are you!?", loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    ctx.strokeText("How BottomCrab are you!?", loc.x, loc.y);
}

const drawScore = (ctx, score) => {
    // if (this.score > 10000) this.score = 0;
    const loc = { x: 700, y: 50 };
    ctx.font = "bold 30pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText(score, loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
    ctx.strokeText(score, loc.x, loc.y);
}

const drawFinalScore = (ctx, score) => {
    // if (this.score > 10000) this.score = 0;
    const loc = { x: 600, y: 775 };
    ctx.font = "bold 20pt Bangers";
    ctx.fillStyle = "white";
    ctx.fillText(`Final Score: ${score}`, loc.x, loc.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
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
                this.betweenLevels = true;
            }
            if (this.betweenLevels) {
                this.level.animate(this.ctx);
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawPostLevel1Text"])(this.ctx);
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawNextStageButton"])(this.ctx);
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

                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawTimer"])(this.ctx, this.countdown());
                Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawScore"])(this.ctx, this.score);

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
        Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawTitle"])(this.ctx);
        Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawStartButton"])(this.ctx);
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
        Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawLostText"])(this.ctx);
        Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawReplayButton"])(this.ctx);
        Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawFinalScore"])(this.ctx, this.score);
    }

    drawWonScreen() {
        this.level.animateWon(this.ctx);
        this.ctx.drawImage(this.winSplash, 0, 0, 1200, 2400, 250, 75, 315, 630)
        Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawWinText"])(this.ctx);
        Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawReplayButton"])(this.ctx);
        Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["drawFinalScore"])(this.ctx, this.score);
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
        let mousePos = Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["getMousePos"])(this.ctx.canvas, e);
        let rect = {
            x: _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"].x * 0.8,
            y: _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"].y * 0.8,
            w: _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"].w * 0.8,
            h: _draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["replayButton"].h * 0.8,
        };
        if (Object(_draw_extra_stuff__WEBPACK_IMPORTED_MODULE_3__["isInside"])(mousePos, rect)) {
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
        this.boat = new Image();
        this.boat.src = "./assets/images/boat1.png";
        this.lidX = 400;
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
        ctx.drawImage(this.boat, 0, 0, 400, 400, 0, 0, 800, 800);
        ctx.drawImage(this.bucket, 0, 0, 967, 957, (800 - (967 * 0.7)) / 2, (800 - (957 * 0.7))/2, 967*0.7, 957*0.7);
    }

    animateBucket(ctx) {
        this.drawBucket(ctx);
    }

    drawLid(ctx) {

        // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        //dark circle in bucket.  needs own fillstyle

        ctx.fillStyle = `rgba(0,0,0,${this.lidX / 400 - 0.12})`
        ctx.beginPath();
        ctx.arc(400, 415, 307, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "rgba(210,37,41,1)"
        ctx.beginPath();
        ctx.arc(this.lidX, 415, 307, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        if (this.lidX <= -500) {
            this.lidOff = false;
        }
        if (this.lidX >= 400) {
            this.lidOff = true;
        }
        if (this.lidOff) {
            setTimeout(() => {
                this.lidX -= 2
            }, 1000)
        } else {
            if (this.lidX < 400) this.lidX += 10;
        }
    }

    animateLid(ctx) {
        this.drawLid(ctx);
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
        this.speed = 1.2;
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
        this.r += this.speed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGF3LmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3X2V4dHJhX3N0dWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQUk7QUFDakMsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDO0FBQ0EsNkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QztBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekMsQzs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNXO0FBQ1E7QUFHSTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEVBQWtCO0FBQ2xDLGdCQUFnQiw2RUFBbUI7QUFDbkMsYTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHNFOztBQUVBLGdCQUFnQixtRUFBUztBQUN6QixnQkFBZ0IsbUVBQVM7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBSztBQUM5Qiw4QkFBOEIsb0RBQVU7QUFDeEM7QUFDQSxzQkFBc0IsT0FBTztBQUM3QiwwQ0FBMEMsd0RBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVM7QUFDakIsUUFBUSx5RUFBZTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQVk7QUFDcEIsUUFBUSwwRUFBZ0I7QUFDeEIsUUFBUSx3RUFBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFXO0FBQ25CLFFBQVEsMEVBQWdCO0FBQ3hCLFFBQVEsd0VBQWM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUSxHQUFHLFFBQVEsT0FBTyxRQUFRLElBQUksUUFBUTtBQUNoRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIscUVBQVc7QUFDbEM7QUFDQSxlQUFlLDhEQUFZO0FBQzNCLGVBQWUsOERBQVk7QUFDM0IsZUFBZSw4REFBWTtBQUMzQixlQUFlLDhEQUFZO0FBQzNCO0FBQ0EsWUFBWSxrRUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhO0FBQ0E7O0FBRUEsSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsaUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUIsRTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ25ZQTtBQUFBO0FBQTBCO0FBQzFCLDZDQUE2QztBQUM3QztBQUNBLFFBQVEsNkNBQUk7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLHVCQUF1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ25HQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQyIsImZpbGUiOiIuL2Rpc3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQ2xhdyBmcm9tICcuL2NsYXcnO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgUk9UQVRJT05fQU5HTEU6IDIuNSwgIC8vaW4gZGVncmVlc1xuICAgIExDTEFXT0ZGU0VUOiBNYXRoLlBJICogKDMgLyAyKSxcbiAgICBvdXRlckJvdW5kOiAzMjUsXG59O1xuLy8gY29uc3QgQk9UVE9NX0NSQUIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdXJjZVwiKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3R0b21DcmFiIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy54ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoLzI7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQvMjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl9hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvQm90dG9tQ3JhYjIucG5nXCI7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYkJvZHkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiQm9keS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU1NDMxZDQybm9hcm1zLnBuZ1wiO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmlnaHRDbGF3SW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvNWQzMDE1NTQzMWQ0MmNsYXczLnBuZ1wiO1xuICAgICAgICB0aGlzLmxlZnRDbGF3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd0ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJsZWZ0Y2xhdy5wbmdcIjtcbiAgICAgICAgdGhpcy5yaWdodENsYXcgPSBuZXcgQ2xhdyh0aGlzLmRpbWVuc2lvbnMsIHRoaXMucG9zaXRpb25fYW5nbGUsIHRoaXMucmlnaHRDbGF3SW1hZ2UpO1xuICAgICAgICB0aGlzLmxlZnRDbGF3ID0gbmV3IENsYXcodGhpcy5kaW1lbnNpb25zLCB0aGlzLnBvc2l0aW9uX2FuZ2xlICsgQ09OU1RBTlRTLkxDTEFXT0ZGU0VULCB0aGlzLmxlZnRDbGF3SW1hZ2UpO1xuICAgIH1cblxuICAgIGRyYXdCb3R0b21DcmFiKGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLkJvdHRvbUNyYWIsIDAsIDAsIDE1MDAsIDE1MDAsIC0xMDAsIC0xMDAsIGRlc3REaW1lbiwgZGVzdERpbWVuKVxuICAgICAgICBjdHgucm90YXRlKC10aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcblxuICAgIH1cblxuICAgIGRyYXdCb3R0b21DcmFiQm9keShjdHgpIHtcbiAgICAgICAgbGV0IGRlc3REaW1lbiA9IDIwMDtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5Cb3R0b21DcmFiQm9keSwgMCwgMCwgMTUwMCwgMTUwMCwgLTEwMCwgLTEwMCwgZGVzdERpbWVuLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLXRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuICAgIH1cblxuICAgIGRyYXdHcmlkKGN0eCkge1xuICAgICAgICAvL2NpcmNsZXNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAxMDAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDE3NSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMjUwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCBDT05TVEFOVFMub3V0ZXJCb3VuZCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgLy9saW5lc1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy54LCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCB0aGlzLnkpO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy55KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5kaW1lbnNpb25zLndpZHRoLCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbygwLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0JvdHRvbUNyYWIoY3R4KVxuICAgICAgICAvLyB0aGlzLmRyYXdHcmlkKGN0eCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUJvZHkoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0JvdHRvbUNyYWJCb2R5KGN0eCk7XG4gICAgICAgIC8vIHRoaXMuZHJhd0dyaWQoY3R4KTtcbiAgICB9XG5cbiAgICBtb3ZlQm90dG9tQ3JhYkNXKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlICs9IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKVxuICAgICAgICB0aGlzLnJpZ2h0Q2xhdy5wb3NfYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmxlZnRDbGF3LnBvc19hbmdsZSArPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWJDQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgLT0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhdy5wb3NfYW5nbGUgLT0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmxlZnRDbGF3LnBvc19hbmdsZSAtPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgfVxufSIsImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBjbGF3UmFkaXVzOiA0MCxcbiAgICBjbGF3U3BlZWQ6IDMuMCxcbiAgICBtYXhSaWdodFJhbmdlOiAzMDAsXG4gICAgbWF4TGVmdFJhbmdlOiAyNTAsXG4gICAgc3RhcnREaXN0OiA0NSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhdyB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgY2xhd0FuZ2xlLCBpbWFnZSkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNlbnRlciA9IFt0aGlzLmRpbWVuc2lvbnMud2lkdGgvMiwgdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yXTtcbiAgICAgICAgdGhpcy5jbGF3UmFkaXVzID0gQ09OU1RBTlRTLmNsYXdSYWRpdXM7XG4gICAgICAgIHRoaXMuciA9IENPTlNUQU5UUy5zdGFydERpc3Q7XG4gICAgICAgIHRoaXMucG9zX2FuZ2xlID0gY2xhd0FuZ2xlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgdGhpcy5wb3NYID0gMDtcbiAgICAgICAgdGhpcy5wb3NZID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIG1vdmVDbGF3KCkge1xuICAgICAgICB0aGlzLnBvc1ggPSB0aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIHRoaXMucG9zWSA9IHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKTtcbiAgICB9XG5cbiAgICByZXRyYWN0Q2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuciA+PSAoQ09OU1RBTlRTLmNsYXdTcGVlZCArIENPTlNUQU5UUy5zdGFydERpc3QpKSB7XG4gICAgICAgICAgICB0aGlzLnIgLT0gKENPTlNUQU5UUy5jbGF3U3BlZWQpOyAvL2NhbiB0dW5lIGZvciBzbG93ZXIgcmV0cmFjdGlvbiByYXRlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIGV4dGVuZFJpZ2h0Q2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuciA8IENPTlNUQU5UUy5tYXhSaWdodFJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnIgKz0gQ09OU1RBTlRTLmNsYXdTcGVlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGV4dGVuZExlZnRDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yIDwgQ09OU1RBTlRTLm1heExlZnRSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5yICs9IENPTlNUQU5UUy5jbGF3U3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIHJlc2V0Q2xhdygpIHtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICB9XG5cbiAgICBkcmF3UmlnaHRDbGF3KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuICAgICAgICAvL2FybSByZXByZXNlbnRlZCBieSBzY2FsaW5nIHJlY3RhbmdsZVxuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM5MDI1MjlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KC0xNSwgNDAsIHRoaXMuciAtIDEwLCA2KTtcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMucG9zX2FuZ2xlKSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSksIC0odGhpcy5jZW50ZXJbMV0pKTtcblxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYLCB0aGlzLmNlbnRlclsxXSArIHRoaXMucG9zWSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDAsIDc1MCwgMTUwMCwgLTQ1LCAtMTAwLCBkZXN0RGltZW4vMiwgZGVzdERpbWVuKVxuICAgICAgICBjdHgucm90YXRlKC0odGhpcy5wb3NfYW5nbGUpKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtKHRoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYKSwgLSh0aGlzLmNlbnRlclsxXSArIHRoaXMucG9zWSkpO1xuICAgIH1cblxuICAgIGRyYXdMZWZ0Q2xhdyhjdHgpIHtcbiAgICAgICAgbGV0IGRlc3REaW1lbiA9IDIwMDtcblxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjOTAyNTI5XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgtMiwgLTYwLCB0aGlzLnIgLSAxMCwgNik7XG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLnBvc19hbmdsZSkpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0pLCAtKHRoaXMuY2VudGVyWzFdKSk7XG5cbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCwgdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnBvc1kpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zX2FuZ2xlICsgTWF0aC5QSSAqICgxIC8gMikpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDAsIDc1MCwgMTUwMCwgLTg1LjUsIC01NSwgZGVzdERpbWVuIC8gMiwgZGVzdERpbWVuKVxuICAgICAgICBjdHgucm90YXRlKC0odGhpcy5wb3NfYW5nbGUgKyBNYXRoLlBJICogKDEgLyAyKSkpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1gpLCAtKHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZKSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZVJpZ2h0KGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdSaWdodENsYXcoY3R4KTtcbiAgICB9XG4gICAgYW5pbWF0ZUxlZnQoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0xlZnRDbGF3KGN0eCk7XG4gICAgfVxuXG4gICAgcmlnaHRCb3VuZHMoKSB7XG4gICAgICAgIGxldCBib3VuZHMgPSB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCArICg0OCAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlICsgTWF0aC5QSSAvIDIpKSxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZICsgKDQ4ICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUgKyBNYXRoLlBJIC8gMikpLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmNsYXdSYWRpdXMsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG5cbiAgICBsZWZ0Qm91bmRzKCkge1xuICAgICAgICBsZXQgYm91bmRzID0ge1xuICAgICAgICAgICAgY2VudGVyWDogdGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1ggKyAoNDggKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSAtIE1hdGguUEkgLyAyKSksXG4gICAgICAgICAgICBjZW50ZXJZOiB0aGlzLmNlbnRlclsxXSArIHRoaXMucG9zWSArICg0OCAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlIC0gTWF0aC5QSSAvIDIpKSxcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5jbGF3UmFkaXVzLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfVxuXG5cbiAgICBjb2xsaWRlc1dpdGgoYm91bmRzLCBjcmFiKSB7XG4gICAgICAgIGNvbnN0IF9vdmVybGFwID0gKGJvdW5kMSwgYm91bmQyKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHggPSBib3VuZDEuY2VudGVyWCAtIGJvdW5kMi5jZW50ZXJYO1xuICAgICAgICAgICAgbGV0IGR5ID0gYm91bmQxLmNlbnRlclkgLSBib3VuZDIuY2VudGVyWTtcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICBpZiAoMS43NSpkaXN0YW5jZSA8IGJvdW5kMS5yYWRpdXMgKyBib3VuZDIucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sbGlzaW9uIGRldGVjdGVkIVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBpZiAoX292ZXJsYXAoYm91bmRzLCBjcmFiLmJvdW5kcygpKSkgeyBcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7IFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgcmVwbGF5QnV0dG9uID0ge1xuICAgIHg6IDMyNSxcbiAgICB5OiA3MjUsXG4gICAgdzogMTUwLFxuICAgIGg6IDYwXG59XG5cblxuZXhwb3J0IGNvbnN0IGRyYXdSZXBsYXlCdXR0b24gPSAoY3R4KSA9PiB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSBcIjVcIjtcbiAgICBjdHguc3Ryb2tlUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZlYjAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjI0cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsVGV4dChcIlJlcGxheVwiLCAzNjAsIHJlcGxheUJ1dHRvbi55ICsgKDAuNSpyZXBsYXlCdXR0b24uaCkgKyAxMik7IC8vMTIgaXMgaGFsZiBmb250IHNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdTdGFydEJ1dHRvbiA9IChjdHgpID0+IHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IFwiNVwiO1xuICAgIGN0eC5zdHJva2VSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmViMDBcIjtcbiAgICBjdHguZmlsbFJlY3QocmVwbGF5QnV0dG9uLngsIHJlcGxheUJ1dHRvbi55LCByZXBsYXlCdXR0b24udywgcmVwbGF5QnV0dG9uLmgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZm9udCA9IFwiMjRwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiU3RhcnRcIiwgMzY1LCByZXBsYXlCdXR0b24ueSArICgwLjUqcmVwbGF5QnV0dG9uLmgpICsgMTIpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd05leHRTdGFnZUJ1dHRvbiA9IChjdHgpID0+IHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IFwiNVwiO1xuICAgIGN0eC5zdHJva2VSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmViMDBcIjtcbiAgICBjdHguZmlsbFJlY3QocmVwbGF5QnV0dG9uLngsIHJlcGxheUJ1dHRvbi55LCByZXBsYXlCdXR0b24udywgcmVwbGF5QnV0dG9uLmgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZm9udCA9IFwiMjRwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiTmV4dCBTdGFnZVwiLCAzNDAsIHJlcGxheUJ1dHRvbi55ICsgKDAuNSpyZXBsYXlCdXR0b24uaCkgKyAxMik7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNb3VzZVBvcyA9IChjYW52YXMsIGV2ZW50KSA9PiB7XG4gICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW5zaWRlID0gKHBvcywgcmVjdCkgPT4ge1xuICAgIHJldHVybiBwb3MueCA+IHJlY3QueCAmJiBwb3MueCA8IHJlY3QueCArIHJlY3QudyAmJiBwb3MueSA8IHJlY3QueSArIHJlY3QuaCAmJiBwb3MueSA+IHJlY3QueVxufVxuXG5leHBvcnQgY29uc3QgZHJhd1RpbWVyID0gKGN0eCwgY291bnRkb3duKSA9PiB7XG4gICAgY29uc3QgbG9jID0geyB4OiA1MCwgeTogNTAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChjb3VudGRvd24sIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgY3R4LnN0cm9rZVRleHQoY291bnRkb3duLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0xvc3RUZXh0ID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogMTI1LCB5OiAxMDAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzNnB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIllvdSdyZSBub3QgQm90dG9tQ3JhYiBlbm91Z2ghXCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgY3R4LnN0cm9rZVRleHQoXCJZb3UncmUgbm90IEJvdHRvbUNyYWIgZW5vdWdoIVwiLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd1dpblRleHQgPSAoY3R4KSA9PiB7XG4gICAgY29uc3QgbG9jID0geyB4OiAxMjUsIHk6IDUwIH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzBwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJZb3UncmUgdGhlIGJvdHRvbWVzdCBvZiBCb3R0b21DcmFicyFcIiwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICBjdHguc3Ryb2tlVGV4dChcIllvdSdyZSB0aGUgYm90dG9tZXN0IG9mIEJvdHRvbUNyYWJzIVwiLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd1Bvc3RMZXZlbDFUZXh0ID0gKGN0eCkgPT4ge1xuICAgIGxldCBwb3N0TGV2ZWwxVGV4dDEgPSBcIk5pY2VseSBkb25lLi4uXCJcbiAgICBsZXQgcG9zdExldmVsMVRleHQyID0gXCJZb3UndmUgYnJvdWdodCBhbG9uZyBhbGwgeW91ciBjcmFiIGZyaWVuZHMgZm9yIGFsbCB0aGUgZnVuIGFoZWFkLlwiXG4gICAgbGV0IHBvc3RMZXZlbDFUZXh0MyA9IFwiTm93IGdldCByZWFkeSBmb3IgU3RhZ2UyLiAgS2VlcCB0aGVtIGZyb20gZXNjYXBpbmcgdGhlIGJ1Y2tldCFcIlxuICAgIGNvbnN0IGxvYyA9IHsgeDogNTAsIHk6IDUwIH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMjJwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQocG9zdExldmVsMVRleHQxLCBsb2MueCwgbG9jLnkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMC41O1xuICAgIGN0eC5zdHJva2VUZXh0KHBvc3RMZXZlbDFUZXh0MSwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAyMnB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChwb3N0TGV2ZWwxVGV4dDIsIGxvYy54LCBsb2MueSArIDQwKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICBjdHguc3Ryb2tlVGV4dChwb3N0TGV2ZWwxVGV4dDIsIGxvYy54LCBsb2MueSArIDQwKTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAyMnB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChwb3N0TGV2ZWwxVGV4dDMsIGxvYy54LCBsb2MueSArIDgwKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICBjdHguc3Ryb2tlVGV4dChwb3N0TGV2ZWwxVGV4dDMsIGxvYy54LCBsb2MueSArIDgwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdUaXRsZSA9IChjdHgpID0+IHtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDE1MCwgeTogMTAwIH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzZwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJIb3cgQm90dG9tQ3JhYiBhcmUgeW91IT9cIiwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICBjdHguc3Ryb2tlVGV4dChcIkhvdyBCb3R0b21DcmFiIGFyZSB5b3UhP1wiLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd1Njb3JlID0gKGN0eCwgc2NvcmUpID0+IHtcbiAgICAvLyBpZiAodGhpcy5zY29yZSA+IDEwMDAwKSB0aGlzLnNjb3JlID0gMDtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDcwMCwgeTogNTAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChzY29yZSwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICBjdHguc3Ryb2tlVGV4dChzY29yZSwgbG9jLngsIGxvYy55KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdGaW5hbFNjb3JlID0gKGN0eCwgc2NvcmUpID0+IHtcbiAgICAvLyBpZiAodGhpcy5zY29yZSA+IDEwMDAwKSB0aGlzLnNjb3JlID0gMDtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDYwMCwgeTogNzc1IH07XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMjBwdCBCYW5nZXJzXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbFRleHQoYEZpbmFsIFNjb3JlOiAke3Njb3JlfWAsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgY3R4LnN0cm9rZVRleHQoYEZpbmFsIFNjb3JlOiAke3Njb3JlfWAsIGxvYy54LCBsb2MueSk7XG59IiwiaW1wb3J0IExldmVsIGZyb20gJy4vbGV2ZWwnO1xuaW1wb3J0IEJvdHRvbUNyYWIgZnJvbSAnLi9ib3R0b21fY3JhYic7XG5pbXBvcnQgUGVyaXBoZXJhbENyYWIgZnJvbSAnLi9wZXJpcGhlcmFsX2NyYWInO1xuaW1wb3J0IHsgZHJhd1RpbWVyLCBkcmF3TG9zdFRleHQsIGRyYXdXaW5UZXh0LCBkcmF3VGl0bGUsIGRyYXdTY29yZSwgZHJhd0ZpbmFsU2NvcmUsIGRyYXdOZXh0U3RhZ2VCdXR0b24sXG4gICAgZHJhd1JlcGxheUJ1dHRvbiwgcmVwbGF5QnV0dG9uLCBkcmF3U3RhcnRCdXR0b24sIGdldE1vdXNlUG9zLCBpc0luc2lkZSxcbiAgICBkcmF3UG9zdExldmVsMVRleHQgfSBmcm9tICcuL2RyYXdfZXh0cmFfc3R1ZmYnO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgZXNjYXBlOiAzMCxcbiAgICBkdXJhdGlvbjE6IDEwMDAsXG4gICAgZHVyYXRpb24yOiAyMDAwLCAvL21zXG4gICAgc3RhcnREZWxheTogMTAwMCwgLy9tc1xuICAgIG1vdmVEZWxheTogMjAwMCwgLy9tc1xuICAgIG91dGVyQm91bmQ6IDMyNSxcbiAgICBsZXZlbDE6IDYwMDAwLCAgICAgLy9tcyBmb3IgbGV2ZWwxIHRpbWUgbGVuZ3RoXG4gICAgbGV2ZWwyOiA0NTAwMCxcbiAgICBsZXZlbDM6IDMwMDAwLFxuICAgIFBlcmlwaGVyYWxDcmFiU3RhcnREaXN0OiAxNDAsXG59XG5cbmxldCBzdGFydHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbmxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbmxldCBsYXN0cmFuZG9tID0gODtcbmxldCB0aW1lc3RhbXAgPSAwO1xubGV0IGJ1ZmZlclN0YXJ0ID0gMDtcbmxldCBpbnRlcnZhbCA9IDA7XG5sZXQgZHVyYXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy53aW5TcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy53aW5TcGxhc2guc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvQm90dG9tQ3JhYiBTcGxhc2guanBnXCI7XG4gICAgICAgIHRoaXMubG9zZVNwbGFzaCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxvc2VTcGxhc2guc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvQm90dG9tQ3JhYiBsb3NlU3BsYXNoLnBuZ1wiO1xuICAgICAgICB0aGlzLmluaXRpYWxTcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU3BsYXNoLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0NyYWJCdWNrZXRFZmZlY3QuanBnXCJcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0luaXRpYWxTcGxhc2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVXb24oQ09OU1RBTlRTLmxldmVsMikgJiYgdGhpcy5zdGFnZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1dvblNjcmVlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lTG9zdCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TG9zdFNjcmVlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lV29uKENPTlNUQU5UUy5sZXZlbDEpICYmIHRoaXMuc3RhZ2UgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWdlID0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLmJldHdlZW5MZXZlbHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYmV0d2VlbkxldmVscykge1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgZHJhd1Bvc3RMZXZlbDFUZXh0KHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICBkcmF3TmV4dFN0YWdlQnV0dG9uKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nICYmICF0aGlzLmJldHdlZW5MZXZlbHMpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLnN0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gQ09OU1RBTlRTLmR1cmF0aW9uMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZU9jZWFuKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBDT05TVEFOVFMubGV2ZWwxIC0gKHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IENPTlNUQU5UUy5kdXJhdGlvbjI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsMlBlcmlwaGVyYWxDcmFiTWVjaGFuaWNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGVCdWNrZXQodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IENPTlNUQU5UUy5sZXZlbDIgLSAodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNyYWIuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LmNvbGxpZGVzV2l0aCh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LnJpZ2h0Qm91bmRzKCksIGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RUb2coKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmFiU2NvcmUgKz0gTWF0aC5mbG9vcihjcmFiLnIvMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVsbFBlcmlwaGVyYWxDcmFiKGNyYWIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcuY29sbGlkZXNXaXRoKHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5sZWZ0Qm91bmRzKCksIGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdFRvZygpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyYWJTY29yZSArPSBNYXRoLmZsb29yKGNyYWIuci8xMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdWxsUGVyaXBoZXJhbENyYWIoY3JhYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSB8fCB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgfHwgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSB8fCB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlQ3JhYldpdGhDbGF3cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFnZSA9PT0gMikgdGhpcy5sZXZlbC5hbmltYXRlTGlkKHRoaXMuY3R4KTsgICAgXG5cbiAgICAgICAgICAgICAgICBkcmF3VGltZXIodGhpcy5jdHgsIHRoaXMuY291bnRkb3duKCkpO1xuICAgICAgICAgICAgICAgIGRyYXdTY29yZSh0aGlzLmN0eCwgdGhpcy5zY29yZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgfHwgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJvdHRvbUNyYWIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5jcmFiU2NvcmU7IC8vKyBNYXRoLmZsb29yKCh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCkgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJlZCA9IHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0ID4gQ09OU1RBTlRTLnN0YXJ0RGVsYXk7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVEZWxheWVkID0gdGltZXN0YW1wIC0gaW50ZXJ2YWwgPiBDT05TVEFOVFMubW92ZURlbGF5O1xuICAgICAgICAgICAgICAgIGxldCBkaWZmZXJlbnRDcmFiID0gbGFzdHJhbmRvbSAhPT0gcmFuZG9tO1xuICAgICAgICAgICAgICAgIGlmIChidWZmZXJlZCAmJiBtb3ZlRGVsYXllZCAmJiBkaWZmZXJlbnRDcmFiICkgeyAvL2J1ZmZlciB0aW1lIGJlZm9yZSBjcmFicyBzdGFydCBtb3Zpbmcgb3V0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBlcmlwaGVyYWxDcmFiKHRpbWVzdGFtcCwgcmFuZG9tLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZUNyYWJXaXRoQ2xhd3MoKSB7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuYW5pbWF0ZVJpZ2h0KHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmFuaW1hdGVMZWZ0KHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiLmFuaW1hdGVCb2R5KHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBtb3ZlQm90dG9tQ3JhYigpIHtcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDVygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3Lm1vdmVDbGF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVykge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLm1vdmVCb3R0b21DcmFiQ0NXKCk7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3Lm1vdmVDbGF3KCk7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcubW92ZUNsYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yaWdodENsYXdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuZXh0ZW5kUmlnaHRDbGF3KCk7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcubW92ZUNsYXcoKTtcbiAgICAgICAgfSBpZiAodGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LnJldHJhY3RDbGF3KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5yIDwgNDgpIHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICBpZiAodGhpcy5sZWZ0Q2xhd0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmV4dGVuZExlZnRDbGF3KCk7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3Lm1vdmVDbGF3KCk7XG4gICAgICAgIH0gaWYgKHRoaXMubGVmdENsYXdSZXRyYWN0QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcucmV0cmFjdENsYXcoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcuciA8IDQ4KSB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBlcmlwaGVyYWxDcmFiKHRpbWVzdGFtcCwgaSwgZHVyYXRpb24pIHtcbiAgICAgICAgc3RhcnR0aW1lID0gaW50ZXJ2YWwgKyBDT05TVEFOVFMubW92ZURlbGF5O1xuICAgICAgICBpZiAoKHRpbWVzdGFtcCAtIHN0YXJ0dGltZSkgPD0gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzW2ldLm1vdmVPdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGludGVydmFsID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgbGFzdHJhbmRvbSA9IGk7XG4gICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldmVsMlBlcmlwaGVyYWxDcmFiTWVjaGFuaWNzKCkge1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKCBjcmFiID0+IGNyYWIuc3BlZWQgPSAwLjYpXG4gICAgfVxuXG4gICAgcHVsbFBlcmlwaGVyYWxDcmFiKGNyYWIpIHtcbiAgICAgICAgaWYgKGNyYWIuciA+PSBDT05TVEFOVFMuUGVyaXBoZXJhbENyYWJTdGFydERpc3QpIHtcbiAgICAgICAgICAgIGNyYWIucHVsbGVkSW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWIgPSBuZXcgQm90dG9tQ3JhYih0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicyA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5wdXNoKG5ldyBQZXJpcGhlcmFsQ3JhYih0aGlzLmRpbWVuc2lvbnMpKTtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzW2ldLnBvc2l0aW9uKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXID0gZmFsc2U7XG4gICAgICAgIHRoaXMuTGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuY3JhYlNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRpbWVzdGFtcCA9IDA7XG4gICAgICAgIGJ1ZmZlclN0YXJ0ID0gMDtcbiAgICAgICAgaW50ZXJ2YWwgPSAwO1xuICAgICAgICB0aGlzLnN0YWdlID0gMTtcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgfVxuXG4gICAgZHJhd0luaXRpYWxTcGxhc2goKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluaXRpYWxTcGxhc2gsIDAsIDAsIDY1MCwgNTI2LCA3NSwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDUyNiAtIDEwMCwgNjUwLCA1MjYpXG4gICAgICAgIGRyYXdUaXRsZSh0aGlzLmN0eCk7XG4gICAgICAgIGRyYXdTdGFydEJ1dHRvbih0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgZ2FtZUxvc3QoKSB7XG4gICAgICAgIGxldCBnYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKCAoY3JhYiwgaSkgPT4ge1xuICAgICAgICAgICAgaWYoIGNyYWIuciA+IENPTlNUQU5UUy5vdXRlckJvdW5kKSBnYW1lb3ZlciA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGdhbWVvdmVyO1xuICAgIH1cblxuICAgIGRyYXdMb3N0U2NyZWVuKCkge1xuICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sb3NlU3BsYXNoLCAwLCAwLCAxMDI0LCA4MDgsIDE2LCAxMjUsIDc2OCwgNjA2KVxuICAgICAgICBkcmF3TG9zdFRleHQodGhpcy5jdHgpO1xuICAgICAgICBkcmF3UmVwbGF5QnV0dG9uKHRoaXMuY3R4KTtcbiAgICAgICAgZHJhd0ZpbmFsU2NvcmUodGhpcy5jdHgsIHRoaXMuc2NvcmUpO1xuICAgIH1cblxuICAgIGRyYXdXb25TY3JlZW4oKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZVdvbih0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLndpblNwbGFzaCwgMCwgMCwgMTIwMCwgMjQwMCwgMjUwLCA3NSwgMzE1LCA2MzApXG4gICAgICAgIGRyYXdXaW5UZXh0KHRoaXMuY3R4KTtcbiAgICAgICAgZHJhd1JlcGxheUJ1dHRvbih0aGlzLmN0eCk7XG4gICAgICAgIGRyYXdGaW5hbFNjb3JlKHRoaXMuY3R4LCB0aGlzLnNjb3JlKTtcbiAgICB9XG5cbiAgICBnYW1lV29uKGxldmVsRHVyYXRpb24pIHtcbiAgICAgICAgbGV0IGdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIGlmICgodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQpID4gbGV2ZWxEdXJhdGlvbikge1xuICAgICAgICAgICAgZ2FtZW92ZXIgPSB0cnVlO1xuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gZ2FtZW92ZXI7XG4gICAgfVxuXG4gICAgY291bnRkb3duKCkge1xuICAgICAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IodGhpcy50aW1lciAvIDYwMDAwKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBNYXRoLmNlaWwoKHRoaXMudGltZXIgJSA2MDAwMCkvMTAwMCk7XG4gICAgICAgIHJldHVybiBzZWNvbmRzID49IDEwID8gYCR7bWludXRlc306JHtzZWNvbmRzfWAgOiBgJHttaW51dGVzfTowJHtzZWNvbmRzfWBcbiAgICB9XG5cbiAgICByaWdodENsYXdUb2coKSB7XG4gICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmlnaHRDbGF3UmV0cmFjdFRvZygpIHtcbiAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yaWdodENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZWZ0Q2xhd1RvZygpIHtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgbGVmdENsYXdSZXRyYWN0VG9nKCkge1xuICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGVmdENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHN0YXJ0dGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgYnVmZmVyU3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgICAgIGludGVydmFsID0gdGltZXN0YW1wO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleWRvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGNsaWNrKGUpIHtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gZ2V0TW91c2VQb3ModGhpcy5jdHguY2FudmFzLCBlKTtcbiAgICAgICAgbGV0IHJlY3QgPSB7XG4gICAgICAgICAgICB4OiByZXBsYXlCdXR0b24ueCAqIDAuOCxcbiAgICAgICAgICAgIHk6IHJlcGxheUJ1dHRvbi55ICogMC44LFxuICAgICAgICAgICAgdzogcmVwbGF5QnV0dG9uLncgKiAwLjgsXG4gICAgICAgICAgICBoOiByZXBsYXlCdXR0b24uaCAqIDAuOCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzSW5zaWRlKG1vdXNlUG9zLCByZWN0KSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iZXR3ZWVuTGV2ZWxzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJldHdlZW5MZXZlbHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBidWZmZXJTdGFydCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSAgICBcblxuICAgIGtleXVwKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmtleXNbXCJkXCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0VG9nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgICAgICAgIHRoaXMua2V5c1tcImFcIl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdFRvZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5ZG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJkXCJdICYmIHRoaXMua2V5c1tcImFcIl0pIHsgLy9jdXJyZW50bHkgdHdvIGtleXMgYWN0aXZlXG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKGNyYWIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LmNvbGxpZGVzV2l0aCh0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LnJpZ2h0Qm91bmRzKCksIGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdFRvZygpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmNvbGxpZGVzV2l0aCh0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcubGVmdEJvdW5kcygpLCBjcmFiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdFRvZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdUb2coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd1RvZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5c1tcImRcIl0gPSB0cnVlOyAvL25lZWRlZCBmb3IgZG91YmxlIGNsYXcgYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKGNyYWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuY29sbGlkZXNXaXRoKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcucmlnaHRCb3VuZHMoKSwgY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RUb2coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdUb2coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzW1wiYVwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmNvbGxpZGVzV2l0aCh0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcubGVmdEJvdW5kcygpLCBjcmFiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdSZXRyYWN0VG9nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdUb2coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHsgLy9ET01Db250ZW50TG9hZGVkXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICBuZXcgR2FtZShjYW52YXMpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLnggPSAxMzA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMub2NlYW5GbG9vciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm9jZWFuRmxvb3Iuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvb2NlYW4tMTIxNDc0N18xOTIwY3JvcHBlZDgwMC5qcGVnXCI7XG4gICAgICAgIHRoaXMubmV0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubmV0LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25ldC5wbmdcIjtcbiAgICAgICAgdGhpcy5idWNrZXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5idWNrZXQuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYnVja2V0LnBuZ1wiO1xuICAgICAgICB0aGlzLmJvYXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5ib2F0LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2JvYXQxLnBuZ1wiO1xuICAgICAgICB0aGlzLmxpZFggPSA0MDA7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMGQxZWZcIlxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd1dvbkJnKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjN2RmZWQ1XCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZVdvbihjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3V29uQmcoY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3T2NlYW5GbG9vcihjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLm9jZWFuRmxvb3IsIDAsIDAsIDEwNjcsIDgwMCwgMCwgMCwgMTA2NywgODAwKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLm5ldCwgMCwgMCwgNTc1LCA0NTAsIHRoaXMueCwgMTM1LCA1NzUsIDQ1MCk7XG4gICAgICAgIC8vYmFja2dyb3VuZCBzY3JvbGxcbiAgICAgICAgaWYgKHRoaXMueCA8PSA5MCkge1xuICAgICAgICAgICAgdGhpcy5mbG93TGVmdCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICAgaWYgKHRoaXMueCA+PSAxMzApIHtcbiAgICAgICAgICAgIHRoaXMuZmxvd0xlZnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZsb3dMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnggLT0gMC4xNVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ICs9IDAuMTU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlT2NlYW4oY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd09jZWFuRmxvb3IoY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3QnVja2V0KGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYm9hdCwgMCwgMCwgNDAwLCA0MDAsIDAsIDAsIDgwMCwgODAwKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJ1Y2tldCwgMCwgMCwgOTY3LCA5NTcsICg4MDAgLSAoOTY3ICogMC43KSkgLyAyLCAoODAwIC0gKDk1NyAqIDAuNykpLzIsIDk2NyowLjcsIDk1NyowLjcpO1xuICAgIH1cblxuICAgIGFuaW1hdGVCdWNrZXQoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0J1Y2tldChjdHgpO1xuICAgIH1cblxuICAgIGRyYXdMaWQoY3R4KSB7XG5cbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIC8vZGFyayBjaXJjbGUgaW4gYnVja2V0LiAgbmVlZHMgb3duIGZpbGxzdHlsZVxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgwLDAsMCwke3RoaXMubGlkWCAvIDQwMCAtIDAuMTJ9KWBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDQwMCwgNDE1LCAzMDcsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjEwLDM3LDQxLDEpXCJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMubGlkWCwgNDE1LCAzMDcsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBpZiAodGhpcy5saWRYIDw9IC01MDApIHtcbiAgICAgICAgICAgIHRoaXMubGlkT2ZmID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGlkWCA+PSA0MDApIHtcbiAgICAgICAgICAgIHRoaXMubGlkT2ZmID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5saWRPZmYpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlkWCAtPSAyXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlkWCA8IDQwMCkgdGhpcy5saWRYICs9IDEwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZUxpZChjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3TGlkKGN0eCk7XG4gICAgfVxuXG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIHN0YXJ0RGlzdDogMTQwLFxuICAgIGJvZHlSYWRpdXM6IDQwLFxuICAgIHB1bGxlZEluU3BlZWQ6IDMuMixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyaXBoZXJhbENyYWIge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBbdGhpcy5kaW1lbnNpb25zLndpZHRoLzIsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQvMl07XG4gICAgICAgIHRoaXMuciA9IENPTlNUQU5UUy5zdGFydERpc3Q7XG4gICAgICAgIHRoaXMuYm9keVJhZGl1cyA9IENPTlNUQU5UUy5ib2R5UmFkaXVzO1xuICAgICAgICB0aGlzLnBvc19hbmdsZSA9ICgyMi41ICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuUGVyaXBoZXJhbENyYWIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5QZXJpcGhlcmFsQ3JhYi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9QZXJpcGhlcmFsQ3JhYi5wbmdcIjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEuMjtcbiAgICB9XG5cbiAgICBkcmF3UGVyaXBoZXJhbENyYWIoY3R4KSB7XG4gICAgICAgIGxldCBwb3NYID0gdGhpcy5yICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBsZXQgcG9zWSA9IHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgbGV0IHJvdGF0ZUFuZ2xlID0gIE1hdGguUEkgLyAyICsgdGhpcy5wb3NfYW5nbGU7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyBwb3NYLCB0aGlzLmNlbnRlclsxXSArIHBvc1kpO1xuICAgICAgICBjdHgucm90YXRlKHJvdGF0ZUFuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLlBlcmlwaGVyYWxDcmFiLCAwLCAwLCA4MDAsIDgwMCwgLTQwLCAtNDAsIDgwLCA4MClcbiAgICAgICAgY3R4LnJvdGF0ZSgtcm90YXRlQW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyBwb3NYKSwgLSh0aGlzLmNlbnRlclsxXSArIHBvc1kpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdQZXJpcGhlcmFsQ3JhYihjdHgpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKGkpIHtcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgKz0gKDQ1ICogTWF0aC5QSSAvIDE4MCkgKiBpO1xuICAgIH1cblxuICAgIG1vdmVPdXQoKSB7XG4gICAgICAgIHRoaXMuciArPSB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIHB1bGxlZEluKCkge1xuICAgICAgICB0aGlzLnIgLT0gQ09OU1RBTlRTLnB1bGxlZEluU3BlZWQ7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuciA9IENPTlNUQU5UUy5zdGFydERpc3Q7XG4gICAgfVxuXG4gICAgYm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VudGVyWDogdGhpcy5jZW50ZXJbMF0gKyB0aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSksXG4gICAgICAgICAgICBjZW50ZXJZOiB0aGlzLmNlbnRlclsxXSArIHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKSxcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy5ib2R5UmFkaXVzLFxuICAgICAgICB9XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==