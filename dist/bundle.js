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

    bounds() {
        return {
            centerX: this.center[0] + this.posX,
            centerY: this.center[1] + this.posY,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGF3LmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3X2V4dHJhX3N0dWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQUk7QUFDakMsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQzNVQTtBQUFBO0FBQTBCO0FBQzFCLDZDQUE2QztBQUM3QztBQUNBLFFBQVEsNkNBQUk7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEMiLCJmaWxlIjoiLi9kaXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IENsYXcgZnJvbSAnLi9jbGF3JztcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIFJPVEFUSU9OX0FOR0xFOiAyLjUsICAvL2luIGRlZ3JlZXNcbiAgICBMQ0xBV09GRlNFVDogTWF0aC5QSSAqICgzIC8gMiksXG4gICAgb3V0ZXJCb3VuZDogMzI1LFxufTtcbi8vIGNvbnN0IEJPVFRPTV9DUkFCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VyY2VcIilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tQ3JhYiB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMueCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aC8yO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LzI7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0JvdHRvbUNyYWIyLnBuZ1wiO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWJCb2R5ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYkJvZHkuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvNWQzMDE1NTQzMWQ0Mm5vYXJtcy5wbmdcIjtcbiAgICAgICAgdGhpcy5yaWdodENsYXdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd0ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJjbGF3My5wbmdcIjtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdENsYXdJbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU1NDMxZDQybGVmdGNsYXcucG5nXCI7XG4gICAgICAgIHRoaXMucmlnaHRDbGF3ID0gbmV3IENsYXcodGhpcy5kaW1lbnNpb25zLCB0aGlzLnBvc2l0aW9uX2FuZ2xlLCB0aGlzLnJpZ2h0Q2xhd0ltYWdlKTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhdyA9IG5ldyBDbGF3KHRoaXMuZGltZW5zaW9ucywgdGhpcy5wb3NpdGlvbl9hbmdsZSArIENPTlNUQU5UUy5MQ0xBV09GRlNFVCwgdGhpcy5sZWZ0Q2xhd0ltYWdlKTtcbiAgICB9XG5cbiAgICBkcmF3Qm90dG9tQ3JhYihjdHgpIHtcbiAgICAgICAgbGV0IGRlc3REaW1lbiA9IDIwMDtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5Cb3R0b21DcmFiLCAwLCAwLCAxNTAwLCAxNTAwLCAtMTAwLCAtMTAwLCBkZXN0RGltZW4sIGRlc3REaW1lbilcbiAgICAgICAgY3R4LnJvdGF0ZSgtdGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG5cbiAgICB9XG5cbiAgICBkcmF3Qm90dG9tQ3JhYkJvZHkoY3R4KSB7XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuQm90dG9tQ3JhYkJvZHksIDAsIDAsIDE1MDAsIDE1MDAsIC0xMDAsIC0xMDAsIGRlc3REaW1lbiwgZGVzdERpbWVuKVxuICAgICAgICBjdHgucm90YXRlKC10aGlzLnBvc2l0aW9uX2FuZ2xlKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICB9XG5cbiAgICBkcmF3R3JpZChjdHgpIHtcbiAgICAgICAgLy9jaXJjbGVzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMTAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAxNzUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDI1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgQ09OU1RBTlRTLm91dGVyQm91bmQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vbGluZXNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgdGhpcy55KTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMueSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8oMCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCb3R0b21DcmFiKGN0eClcbiAgICAgICAgdGhpcy5kcmF3R3JpZChjdHgpO1xuICAgIH1cblxuICAgIGFuaW1hdGVCb2R5KGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCb3R0b21DcmFiQm9keShjdHgpO1xuICAgICAgICAvLyB0aGlzLmRyYXdHcmlkKGN0eCk7XG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWJDVygpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl9hbmdsZSArPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MClcbiAgICAgICAgdGhpcy5yaWdodENsYXcucG9zX2FuZ2xlICs9IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhdy5wb3NfYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ0NXKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlIC09IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5yaWdodENsYXcucG9zX2FuZ2xlIC09IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhdy5wb3NfYW5nbGUgLT0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApO1xuICAgIH1cbn0iLCJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgY2xhd1JhZGl1czogNDAsXG4gICAgY2xhd1NwZWVkOiAzLjAsXG4gICAgbWF4UmlnaHRSYW5nZTogMzAwLFxuICAgIG1heExlZnRSYW5nZTogMjUwLFxuICAgIHN0YXJ0RGlzdDogNDUsXG59XG5cbi8vIGxldCBwb3NYO1xuLy8gbGV0IHBvc1k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXcge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGNsYXdBbmdsZSwgaW1hZ2UpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBbdGhpcy5kaW1lbnNpb25zLndpZHRoLzIsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQvMl07XG4gICAgICAgIHRoaXMuY2xhd1JhZGl1cyA9IENPTlNUQU5UUy5jbGF3UmFkaXVzO1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgICAgICB0aGlzLnBvc19hbmdsZSA9IGNsYXdBbmdsZVxuICAgICAgICAvLyB0aGlzLnJpZ2h0Q2xhd0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMucmlnaHRDbGF3SW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvNWQzMDE1NTQzMWQ0MmNsYXczLnBuZ1wiO1xuICAgICAgICAvLyB0aGlzLmxlZnRDbGF3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gdGhpcy5sZWZ0Q2xhd0ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJsZWZ0Y2xhdy5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgICB0aGlzLnBvc1ggPSAwO1xuICAgICAgICB0aGlzLnBvc1kgPSAwO1xuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgbW92ZUNsYXcoKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgdGhpcy5wb3NZID0gdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpO1xuICAgIH1cblxuICAgIHJldHJhY3RDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yID49IChDT05TVEFOVFMuY2xhd1NwZWVkICsgQ09OU1RBTlRTLnN0YXJ0RGlzdCkpIHtcbiAgICAgICAgICAgIHRoaXMuciAtPSAoQ09OU1RBTlRTLmNsYXdTcGVlZCk7IC8vY2FuIHR1bmUgZm9yIHNsb3dlciByZXRyYWN0aW9uIHJhdGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kUmlnaHRDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yIDwgQ09OU1RBTlRTLm1heFJpZ2h0UmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuciArPSBDT05TVEFOVFMuY2xhd1NwZWVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZXh0ZW5kTGVmdENsYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLnIgPCBDT05TVEFOVFMubWF4TGVmdFJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnIgKz0gQ09OU1RBTlRTLmNsYXdTcGVlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgcmVzZXRDbGF3KCkge1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgIH1cblxuICAgIGRyYXdSaWdodENsYXcoY3R4KSB7XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIC8vYXJtIHJlcHJlc2VudGVkIGJ5IHNjYWxpbmcgcmVjdGFuZ2xlXG5cbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV0pO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzkwMjUyOVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoLTE1LCA0MCwgdGhpcy5yIC0gMTAsIDYpO1xuICAgICAgICBjdHgucm90YXRlKC0odGhpcy5wb3NfYW5nbGUpKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtKHRoaXMuY2VudGVyWzBdKSwgLSh0aGlzLmNlbnRlclsxXSkpO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1gsIHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgNzUwLCAxNTAwLCAtNDUsIC0xMDAsIGRlc3REaW1lbi8yLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLnBvc19hbmdsZSkpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyB0aGlzLnBvc1gpLCAtKHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZKSk7XG5cbiAgICAgICAgLy8jOTAyNTI5XG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmFyYyh0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCwgdGhpcy5jZW50ZXJbMV0gKyB0aGlzLnBvc1ksIDQwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgICAgIC8vIGN0eC5yb3RhdGUoLXRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgLy8gY3R4LnRyYW5zbGF0ZSgtdGhpcy5jZW50ZXJbMF0sIC10aGlzLmNlbnRlclsxXSk7XG4gICAgfVxuXG4gICAgZHJhd0xlZnRDbGF3KGN0eCkge1xuICAgICAgICBsZXQgZGVzdERpbWVuID0gMjAwO1xuXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0sIHRoaXMuY2VudGVyWzFdKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM5MDI1MjlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KC0yLCAtNjAsIHRoaXMuciAtIDEwLCA2KTtcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMucG9zX2FuZ2xlKSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSksIC0odGhpcy5jZW50ZXJbMV0pKTtcblxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyWzBdICsgdGhpcy5wb3NYLCB0aGlzLmNlbnRlclsxXSArIHRoaXMucG9zWSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NfYW5nbGUgKyBNYXRoLlBJICogKDEgLyAyKSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgNzUwLCAxNTAwLCAtODUuNSwgLTU1LCBkZXN0RGltZW4gLyAyLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLnBvc19hbmdsZSArIE1hdGguUEkgKiAoMSAvIDIpKSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCksIC0odGhpcy5jZW50ZXJbMV0gKyB0aGlzLnBvc1kpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlUmlnaHQoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd1JpZ2h0Q2xhdyhjdHgpO1xuICAgIH1cbiAgICBhbmltYXRlTGVmdChjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3TGVmdENsYXcoY3R4KTtcbiAgICB9XG5cbiAgICBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHRoaXMucG9zWCxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgdGhpcy5wb3NZLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmNsYXdSYWRpdXMsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlc1dpdGgoY3JhYikge1xuICAgICAgICBjb25zdCBfb3ZlcmxhcCA9IChib3VuZDEsIGJvdW5kMikgPT4ge1xuICAgICAgICAgICAgbGV0IGR4ID0gYm91bmQxLmNlbnRlclggLSBib3VuZDIuY2VudGVyWDtcbiAgICAgICAgICAgIGxldCBkeSA9IGJvdW5kMS5jZW50ZXJZIC0gYm91bmQyLmNlbnRlclk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgaWYgKDIqZGlzdGFuY2UgPCBib3VuZDEucmFkaXVzICsgYm91bmQyLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIC8vIGNvbGxpc2lvbiBkZXRlY3RlZCFcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICBcbiAgICAgICAgaWYgKF9vdmVybGFwKHRoaXMuYm91bmRzKCksIGNyYWIuYm91bmRzKCkpKSB7IFxuICAgICAgICAgICAgLy8gdGhpcy5yZXNldENsYXcoKTtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7IFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgcmVwbGF5QnV0dG9uID0ge1xuICAgIHg6IDMyNSxcbiAgICB5OiA3MjUsXG4gICAgdzogMTUwLFxuICAgIGg6IDYwXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3UmVwbGF5ID0gKGN0eCkgPT4ge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gXCI1XCI7XG4gICAgY3R4LnN0cm9rZVJlY3QocmVwbGF5QnV0dG9uLngsIHJlcGxheUJ1dHRvbi55LCByZXBsYXlCdXR0b24udywgcmVwbGF5QnV0dG9uLmgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZWIwMFwiO1xuICAgIGN0eC5maWxsUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5mb250ID0gXCIyNHB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFRleHQoXCJSZXBsYXlcIiwgMzYwLCByZXBsYXlCdXR0b24ueSArICgwLjUqcmVwbGF5QnV0dG9uLmgpICsgMTIpOyAvLzEyIGlzIGhhbGYgZm9udCBzaXplXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3U3RhcnQgPSAoY3R4KSA9PiB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSBcIjVcIjtcbiAgICBjdHguc3Ryb2tlUmVjdChyZXBsYXlCdXR0b24ueCwgcmVwbGF5QnV0dG9uLnksIHJlcGxheUJ1dHRvbi53LCByZXBsYXlCdXR0b24uaCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZlYjAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KHJlcGxheUJ1dHRvbi54LCByZXBsYXlCdXR0b24ueSwgcmVwbGF5QnV0dG9uLncsIHJlcGxheUJ1dHRvbi5oKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZvbnQgPSBcIjI0cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsVGV4dChcIlN0YXJ0XCIsIDM2NSwgcmVwbGF5QnV0dG9uLnkgKyAoMC41KnJlcGxheUJ1dHRvbi5oKSArIDEyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1vdXNlUG9zID0gKGNhbnZhcywgZXZlbnQpID0+IHtcbiAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXNJbnNpZGUgPSAocG9zLCByZWN0KSA9PiB7XG4gICAgcmV0dXJuIHBvcy54ID4gcmVjdC54ICYmIHBvcy54IDwgcmVjdC54ICsgcmVjdC53ICYmIHBvcy55IDwgcmVjdC55ICsgcmVjdC5oICYmIHBvcy55ID4gcmVjdC55XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3VGltZXIgPSAoY3R4LCBjb3VudGRvd24pID0+IHtcbiAgICBjb25zdCBsb2MgPSB7IHg6IDUwLCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KGNvdW50ZG93biwgbG9jLngsIGxvYy55KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVRleHQoY291bnRkb3duLCBsb2MueCwgbG9jLnkpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0xvc3RUZXh0ID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogMTI1LCB5OiAxMDAgfTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzNnB0IEJhbmdlcnNcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsVGV4dChcIllvdSdyZSBub3QgQm90dG9tQ3JhYiBlbm91Z2ghXCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiWW91J3JlIG5vdCBCb3R0b21DcmFiIGVub3VnaCFcIiwgbG9jLngsIGxvYy55KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdXaW5UZXh0ID0gKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxvYyA9IHsgeDogMTI1LCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIsIGxvYy54LCBsb2MueSk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3VGl0bGUgPSAoY3R4KSA9PiB7XG4gICAgY29uc3QgbG9jID0geyB4OiAxNTAsIHk6IDEwMCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDM2cHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSG93IEJvdHRvbUNyYWIgYXJlIHlvdSE/XCIsIGxvYy54LCBsb2MueSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiSG93IEJvdHRvbUNyYWIgYXJlIHlvdSE/XCIsIGxvYy54LCBsb2MueSk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3U2NvcmUgPSAoY3R4LCBzY29yZSkgPT4ge1xuICAgIC8vIGlmICh0aGlzLnNjb3JlID4gMTAwMDApIHRoaXMuc2NvcmUgPSAwO1xuICAgIGNvbnN0IGxvYyA9IHsgeDogNzAwLCB5OiA1MCB9O1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxUZXh0KHNjb3JlLCBsb2MueCwgbG9jLnkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlVGV4dChzY29yZSwgbG9jLngsIGxvYy55KTtcbn0iLCJpbXBvcnQgTGV2ZWwgZnJvbSAnLi9sZXZlbCc7XG5pbXBvcnQgQm90dG9tQ3JhYiBmcm9tICcuL2JvdHRvbV9jcmFiJztcbmltcG9ydCBQZXJpcGhlcmFsQ3JhYiBmcm9tICcuL3BlcmlwaGVyYWxfY3JhYic7XG5pbXBvcnQgeyBkcmF3VGltZXIsIGRyYXdMb3N0VGV4dCwgZHJhd1dpblRleHQsXG4gICAgZHJhd1RpdGxlLCBkcmF3U2NvcmUsIFxuICAgIGRyYXdSZXBsYXksIHJlcGxheUJ1dHRvbiwgZHJhd1N0YXJ0LFxuICAgIGdldE1vdXNlUG9zLCBpc0luc2lkZSB9IGZyb20gJy4vZHJhd19leHRyYV9zdHVmZic7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBlc2NhcGU6IDMwLFxuICAgIGR1cmF0aW9uOiAxMDAwLCAvL21zXG4gICAgc3RhcnREZWxheTogMTAwMCwgLy9tc1xuICAgIG1vdmVEZWxheTogMTAwMCwgLy9tc1xuICAgIG91dGVyQm91bmQ6IDMyNSxcbiAgICBsZXZlbDE6IDkwMDAwMCwgICAgIC8vbXMgZm9yIGxldmVsMSB0aW1lIGxlbmd0aFxuICAgIGxldmVsMjogNjAwMDAsXG4gICAgbGV2ZWwzOiAzMDAwMCxcbiAgICBQZXJpcGhlcmFsQ3JhYlN0YXJ0RGlzdDogMTQwLFxufVxuXG5sZXQgc3RhcnR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5sZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG5sZXQgbGFzdHJhbmRvbSA9IDg7XG5sZXQgdGltZXN0YW1wID0gMDtcbmxldCBidWZmZXJTdGFydCA9IDA7XG5sZXQgaW50ZXJ2YWwgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIHRoaXMud2luU3BsYXNoID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMud2luU3BsYXNoLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0JvdHRvbUNyYWIgU3BsYXNoLmpwZ1wiO1xuICAgICAgICB0aGlzLmxvc2VTcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sb3NlU3BsYXNoLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0JvdHRvbUNyYWIgbG9zZVNwbGFzaC5wbmdcIjtcbiAgICAgICAgdGhpcy5pbml0aWFsU3BsYXNoID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNwbGFzaC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9DcmFiQnVja2V0RWZmZWN0LmpwZ1wiXG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmluaXRpYWxTcGxhc2gsIDAsIDAsIDY1MCwgNTI2LCA3NSwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDUyNiAtIDEwMCwgNjUwLCA1MjYpICAgICAgICAgICAgXG4gICAgICAgICAgICBkcmF3VGl0bGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgZHJhd1N0YXJ0KHRoaXMuY3R4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVXb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZVdvbih0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMud2luU3BsYXNoLCAwLCAwLCAxMjAwLCAyNDAwLCAyNTAsIDc1LCAzMTUsIDYzMClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIllvdSdyZSB0aGUgYm90dG9tZXN0IG9mIEJvdHRvbUNyYWJzIVwiKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBkcmF3V2luVGV4dCh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgZHJhd1JlcGxheSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lTG9zdCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sb3NlU3BsYXNoLCAwLCAwLCAxMDI0LCA4MDgsIDE2LCAxMjUsIDc2OCwgNjA2KVxuICAgICAgICAgICAgICAgIGRyYXdMb3N0VGV4dCh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgZHJhd1JlcGxheSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxldmVsLmFuaW1hdGVPY2Vhbih0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY3JhYi5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuY29sbGlkZXNXaXRoKGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuY3JhYlNjb3JlICs9IE1hdGguZmxvb3IoY3JhYi5yLzEwMCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnB1bGxQZXJpcGhlcmFsQ3JhYihjcmFiKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSB8fCB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgfHwgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSB8fCB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5hbmltYXRlUmlnaHQodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcuYW5pbWF0ZUxlZnQodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuYW5pbWF0ZUJvZHkodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkcmF3VGltZXIodGhpcy5jdHgsIHRoaXMuY291bnRkb3duKCkpO1xuICAgICAgICAgICAgICAgIGRyYXdTY29yZSh0aGlzLmN0eCwgdGhpcy5zY29yZSk7XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBNYXRoLmZsb29yKCh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCkgLyAxMDAwKSArIHRoaXMuY3JhYlNjb3JlO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBDT05TVEFOVFMubGV2ZWwxIC0gKHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJlZCA9IHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0ID4gQ09OU1RBTlRTLnN0YXJ0RGVsYXk7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVEZWxheWVkID0gdGltZXN0YW1wIC0gaW50ZXJ2YWwgPiBDT05TVEFOVFMubW92ZURlbGF5O1xuICAgICAgICAgICAgICAgIGxldCBkaWZmZXJlbnRDcmFiID0gbGFzdHJhbmRvbSAhPT0gcmFuZG9tO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyB8fCB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQm90dG9tQ3JhYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodENsYXdBY3RpdmUgfHwgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlIHx8IHRoaXMubGVmdENsYXdBY3RpdmUgfHwgdGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlcmVkICYmIG1vdmVEZWxheWVkICYmIGRpZmZlcmVudENyYWIgKSB7IC8vYnVmZmVyIHRpbWUgYmVmb3JlIGNyYWJzIHN0YXJ0IG1vdmluZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyaXBoZXJhbENyYWIodGltZXN0YW1wLCByYW5kb20sIENPTlNUQU5UUy5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWIoKSB7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVykge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLm1vdmVCb3R0b21DcmFiQ1coKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcubW92ZUNsYXcoKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNDVygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3Lm1vdmVDbGF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlQ2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRDbGF3QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIucmlnaHRDbGF3LmV4dGVuZFJpZ2h0Q2xhdygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3Lm1vdmVDbGF3KCk7XG4gICAgICAgIH0gaWYgKHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5yZXRyYWN0Q2xhdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuciA8IDQ4KSB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKHRoaXMubGVmdENsYXdBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5sZWZ0Q2xhdy5leHRlbmRMZWZ0Q2xhdygpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5tb3ZlQ2xhdygpO1xuICAgICAgICB9IGlmICh0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LnJldHJhY3RDbGF3KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LnIgPCA0OCkgdGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVQZXJpcGhlcmFsQ3JhYih0aW1lc3RhbXAsIGksIGR1cmF0aW9uKSB7XG4gICAgICAgIHN0YXJ0dGltZSA9IGludGVydmFsICsgQ09OU1RBTlRTLm1vdmVEZWxheTtcbiAgICAgICAgaWYgKCh0aW1lc3RhbXAgLSBzdGFydHRpbWUpIDw9IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFic1tpXS5tb3ZlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGxhc3RyYW5kb20gPSBpO1xuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWxsUGVyaXBoZXJhbENyYWIoY3JhYikge1xuICAgICAgICBpZiAoY3JhYi5yID49IENPTlNUQU5UUy5QZXJpcGhlcmFsQ3JhYlN0YXJ0RGlzdCkge1xuICAgICAgICAgICAgY3JhYi5wdWxsZWRJbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYiA9IG5ldyBCb3R0b21DcmFiKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLnB1c2gobmV3IFBlcmlwaGVyYWxDcmFiKHRoaXMuZGltZW5zaW9ucykpO1xuICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnNbaV0ucG9zaXRpb24oaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuY3JhYlNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRpbWVzdGFtcCA9IDA7XG4gICAgICAgIGJ1ZmZlclN0YXJ0ID0gMDtcbiAgICAgICAgaW50ZXJ2YWwgPSAwO1xuICAgIH1cblxuICAgIGdhbWVMb3N0KCkge1xuICAgICAgICBsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaCggKGNyYWIsIGkpID0+IHtcbiAgICAgICAgLy8gICAgIGlmKCBjcmFiLnIgPiBDT05TVEFOVFMub3V0ZXJCb3VuZCkgZ2FtZW92ZXIgPSB0cnVlXG4gICAgICAgIC8vIH0pXG4gICAgICAgIHJldHVybiBnYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBnYW1lV29uKCkge1xuICAgICAgICBsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKCh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCkgPiBDT05TVEFOVFMubGV2ZWwxKSB7XG4gICAgICAgICAgICBnYW1lb3ZlciA9IHRydWU7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBnYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBjb3VudGRvd24oKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVyIC8gNjAwMDApO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IE1hdGguY2VpbCgodGhpcy50aW1lciAlIDYwMDAwKS8xMDAwKTtcbiAgICAgICAgcmV0dXJuIHNlY29uZHMgPj0gMTAgPyBgJHttaW51dGVzfToke3NlY29uZHN9YCA6IGAke21pbnV0ZXN9OjAke3NlY29uZHN9YFxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgc3RhcnR0aW1lID0gdGltZXN0YW1wO1xuICAgICAgICBidWZmZXJTdGFydCA9IHRpbWVzdGFtcDtcbiAgICAgICAgaW50ZXJ2YWwgPSB0aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBjbGljayhlKSB7XG4gICAgICAgIGxldCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKHRoaXMuY3R4LmNhbnZhcywgZSk7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICBsZXQgcmVjdCA9IHtcbiAgICAgICAgICAgICAgICB4OiByZXBsYXlCdXR0b24ueCAqIDAuOCxcbiAgICAgICAgICAgICAgICB5OiByZXBsYXlCdXR0b24ueSAqIDAuOCxcbiAgICAgICAgICAgICAgICB3OiByZXBsYXlCdXR0b24udyAqIDAuOCxcbiAgICAgICAgICAgICAgICBoOiByZXBsYXlCdXR0b24uaCAqIDAuOCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNJbnNpZGUobW91c2VQb3MsIHJlY3QpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgfVxuICAgIH0gICAgXG5cbiAgICBrZXl1cChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzW1wiQXJyb3dVcFwiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmtleXNbXCJBcnJvd0Rvd25cIl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5ZG93bihlKSB7XG4gICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYm90dG9tQ3JhYi5yaWdodENsYXcuY29sbGlkZXNXaXRoKGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXlzW1wiQXJyb3dVcFwiXSAmJiB0aGlzLmtleXNbXCJBcnJvd0Rvd25cIl0pIHsgLy9jdXJyZW50bHkgdHdvIGtleXMgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5jb2xsaWRlc1dpdGgoY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ib3R0b21DcmFiLmxlZnRDbGF3LmNvbGxpZGVzV2l0aChjcmFiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENsYXdSZXRyYWN0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXNbXCJBcnJvd1VwXCJdID0gdHJ1ZTsgLy9uZWVkZWQgZm9yIGRvdWJsZSBjbGF3IGFjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKGNyYWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLnJpZ2h0Q2xhdy5jb2xsaWRlc1dpdGgoY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXNbXCJBcnJvd0Rvd25cIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIubGVmdENsYXcuY29sbGlkZXNXaXRoKGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDbGF3UmV0cmFjdEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yaWdodENsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmlnaHRDbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7IC8vRE9NQ29udGVudExvYWRlZFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgbmV3IEdhbWUoY2FudmFzKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy54ID0gMjAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLm9jZWFuRmxvb3IgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5vY2VhbkZsb29yLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL29jZWFuLTEyMTQ3NDdfMTkyMGNyb3BwZWQuanBlZ1wiO1xuICAgICAgICB0aGlzLm5ldCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm5ldC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9uZXQucG5nXCI7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMGQxZWZcIlxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd1dvbkJnKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjN2RmZWQ1XCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZVdvbihjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3V29uQmcoY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3T2NlYW5GbG9vcihjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLm9jZWFuRmxvb3IsIHRoaXMueCwgdGhpcy55LCAxMDY3LCA4MDAsIDAsIDAsIDEwNjcsIDgwMCk7XG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UodGhpcy5uZXQsIDAsIDAsIDYwMCwgNjAwLCAxMDAsIDEwMCwgNjAwLCA2MDApO1xuICAgICAgICAvL2JhY2tncm91bmQgc2Nyb2xsXG4gICAgICAgIGlmICh0aGlzLnggPD0gMTcwKSB7XG4gICAgICAgICAgICB0aGlzLmZsb3dMZWZ0ID0gZmFsc2U7XG4gICAgICAgIH0gXG4gICAgICAgICBpZiAodGhpcy54ID49IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5mbG93TGVmdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmxvd0xlZnQpIHtcbiAgICAgICAgICAgIHRoaXMueCAtPSAwLjE1XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggKz0gMC4xNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGVPY2VhbihjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3T2NlYW5GbG9vcihjdHgpO1xuICAgIH1cblxufSIsImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBzdGFydERpc3Q6IDE0MCxcbiAgICBzcGVlZDogMS4yLFxuICAgIGJvZHlSYWRpdXM6IDQwLFxuICAgIHB1bGxlZEluU3BlZWQ6IDMuMCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyaXBoZXJhbENyYWIge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBbdGhpcy5kaW1lbnNpb25zLndpZHRoLzIsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQvMl07XG4gICAgICAgIHRoaXMuciA9IENPTlNUQU5UUy5zdGFydERpc3Q7XG4gICAgICAgIHRoaXMuYm9keVJhZGl1cyA9IENPTlNUQU5UUy5ib2R5UmFkaXVzO1xuICAgICAgICB0aGlzLnBvc19hbmdsZSA9ICgyMi41ICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuUGVyaXBoZXJhbENyYWIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5QZXJpcGhlcmFsQ3JhYi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9QZXJpcGhlcmFsQ3JhYi5wbmdcIjtcbiAgICB9XG5cbiAgICBkcmF3UGVyaXBoZXJhbENyYWIoY3R4KSB7XG4gICAgICAgIGxldCBwb3NYID0gdGhpcy5yICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBsZXQgcG9zWSA9IHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgbGV0IHJvdGF0ZUFuZ2xlID0gIE1hdGguUEkgLyAyICsgdGhpcy5wb3NfYW5nbGU7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyBwb3NYLCB0aGlzLmNlbnRlclsxXSArIHBvc1kpO1xuICAgICAgICBjdHgucm90YXRlKHJvdGF0ZUFuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLlBlcmlwaGVyYWxDcmFiLCAwLCAwLCA4MDAsIDgwMCwgLTQwLCAtNDAsIDgwLCA4MClcbiAgICAgICAgY3R4LnJvdGF0ZSgtcm90YXRlQW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyBwb3NYKSwgLSh0aGlzLmNlbnRlclsxXSArIHBvc1kpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdQZXJpcGhlcmFsQ3JhYihjdHgpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKGkpIHtcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgKz0gKDQ1ICogTWF0aC5QSSAvIDE4MCkgKiBpO1xuICAgIH1cblxuICAgIG1vdmVPdXQoKSB7XG4gICAgICAgIHRoaXMuciArPSBDT05TVEFOVFMuc3BlZWQ7XG4gICAgfVxuXG4gICAgcHVsbGVkSW4oKSB7XG4gICAgICAgIHRoaXMuciAtPSBDT05TVEFOVFMucHVsbGVkSW5TcGVlZDtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICB9XG5cbiAgICBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKSxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmJvZHlSYWRpdXMsXG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9