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
        let imgDimen = {
            x: 0,
            y: 0,
            w: 1500,
            h: 1500,
        }
        let destDimen = 200;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.position_angle);
        ctx.drawImage(this.BottomCrab, imgDimen.x, imgDimen.y, imgDimen.w, imgDimen.h, -100, -100, destDimen, destDimen)
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
        let img = {
            x: 0,
            y: 0,
            w: 1500,
            h: 1500,
        }
        let destDimen = 200;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.position_angle);
        ctx.drawImage(this.BottomCrabBody, img.x, img.y, img.w, img.h, -100, -100, destDimen, destDimen)
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
        let img = {
            x: 0,
            y: 0,
            w: 750,
            h: 1500,
        }
        let destDimen = 200;
        ctx.translate(this.center[0] + posX, this.center[1] + posY);
        ctx.rotate(this.pos_angle);
        ctx.drawImage(this.clawImage, img.x, img.y, img.w, img.h, -50, -125, destDimen/2, destDimen)
        ctx.rotate(-this.pos_angle);
        ctx.translate(-(this.center[0] + posX), -(this.center[1] + posY));


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
            this.drawTitle();
        } else {
            if (this.gameWon()) {
                this.level.animate(this.ctx);
                this.ctx.drawImage(this.winSplash, 0, 0, 1200, 2400, 200, 0, this.dimensions.width / 2, this.dimensions.height)
                // console.log("You're the bottomest of BottomCrabs!");
                // this.restart();
                this.running = false;
            }
            if (this.gameLost()) {
                this.level.animate(this.ctx);
                this.ctx.drawImage(this.loseSplash, 0, 0, 1024, 800, 16, 125, 768, 600)
                this.drawLostText();
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

                this.drawTimer();
                this.drawScore();

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

        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions);
        this.bottomCrab = new _bottom_crab__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions);
        this.peripheralCrabs = [];
        for(let i = 0; i < 8; i++) {
            this.peripheralCrabs.push(new _peripheral_crab__WEBPACK_IMPORTED_MODULE_2__["default"](this.dimensions));
            this.peripheralCrabs[i].position(i);
        }
        this.animate();
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

    drawTimer() {
        const loc = {x: 50, y: 50};
        this.ctx.font = "bold 30pt Bangers";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.countdown(), loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText(this.countdown(), loc.x, loc.y);
    }

    drawLostText() {
        const loc = { x: 125, y: 100 };
        this.ctx.font = "bold 36pt Bangers";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("You're not BottomCrab enough!", loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText("You're not BottomCrab enough!", loc.x, loc.y);
    }

    drawTitle() {
        const loc = { x: 125, y: 100 };
        this.ctx.font = "bold 36pt Bangers";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("How BottomCrab are you!?", loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText("How BottomCrab are you!?", loc.x, loc.y);
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
        // if (this.score > 10000) this.score = 0;
        const loc = {x: this.dimensions.width - 100, y: 50};
        this.ctx.font = "bold 30pt Bangers";
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
        })
    }

    click(e) {
        if (!this.running) {
            this.restart();
            this.play();
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
    // ctx.fillStyle = "rgba(12,124,123,1)";
    // ctx.fillRect(00, 00, 700, 700);

    // ctx.beginPath();
    // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fillStyle = "blue";
    // ctx.fill();
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
    }

    drawBackground(ctx) {
        ctx.fillStyle = "#00d1ef"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate(ctx) {
        this.drawBackground(ctx);
    }

    drawOceanFloor(ctx) {
        ctx.drawImage(this.oceanFloor, this.x, this.y, 1067, 800, 0, 0, 1067, 800);
        //background scroll
        if (this.x <= 170) {
            this.flowLeft = false;
        } 
         if (this.x >= 200) {
            this.flowLeft = true;
        }
        if (this.flowLeft) {
            this.x -= 0.2
        } else {
            this.x += 0.2;
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
        let img = {
            x: 0,
            y: 0,
            w: 800,
            h: 800
        }
        let posX = this.r * Math.cos(this.pos_angle);
        let posY = this.r * Math.sin(this.pos_angle);
        let rotateAngle =  Math.PI / 2 + this.pos_angle;
        ctx.translate(this.center[0] + posX, this.center[1] + posY);
        ctx.rotate(rotateAngle);
        ctx.drawImage(this.PeripheralCrab, img.x, img.y, img.w, img.h, -40, -40, 80, 80)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGF3LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0dBQW9HO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUQ7QUFDQTtBQUNBLDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDVztBQUNROztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLDhDQUFLO0FBQzlCLDhCQUE4QixvREFBVTtBQUN4QztBQUNBLHNCQUFzQixPQUFPO0FBQzdCLDBDQUEwQyx3REFBYztBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVEsR0FBRyxRQUFRLE9BQU8sUUFBUSxJQUFJLFFBQVE7QUFDaEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsRTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSzs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUEwQjtBQUMxQiw2Q0FBNkM7QUFDN0M7QUFDQSxRQUFRLDZDQUFJO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDIiwiZmlsZSI6Ii4vZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBDbGF3IGZyb20gJy4vY2xhdyc7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBST1RBVElPTl9BTkdMRTogMi41LCAgLy9pbiBkZWdyZWVzXG4gICAgQ1JBQl9SQUQxOiA3MCxcbiAgICBDUkFCX1JBRDI6IDQ1LFxuICAgIG91dGVyQm91bmQ6IDMyNSxcbn07XG4vLyBjb25zdCBCT1RUT01fQ1JBQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291cmNlXCIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbUNyYWIge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGgvMjtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yO1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvQm90dG9tQ3JhYjIucG5nXCI7XG4gICAgICAgIC8vIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvUGVyaXBoZXJhbENyYWIucG5nXCJcbiAgICAgICAgLy8gdGhpcy5Cb3R0b21DcmFiLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU3NzI0NzA3IGNvcHkucG5nXCJcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiQm9keSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWJCb2R5LnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU1NDMxZDQyb25lYXJtLnBuZ1wiO1xuICAgICAgICB0aGlzLmNsYXcgPSBuZXcgQ2xhdyh0aGlzLmRpbWVuc2lvbnMsIHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgIH1cblxuICAgIGRyYXdCb3R0b21DcmFiKGN0eCkge1xuICAgICAgICBsZXQgaW1nRGltZW4gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHc6IDE1MDAsXG4gICAgICAgICAgICBoOiAxNTAwLFxuICAgICAgICB9XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuQm90dG9tQ3JhYiwgaW1nRGltZW4ueCwgaW1nRGltZW4ueSwgaW1nRGltZW4udywgaW1nRGltZW4uaCwgLTEwMCwgLTEwMCwgZGVzdERpbWVuLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLXRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmVsbGlwc2UoMTAwLCAxMDAsIENPTlNUQU5UUy5DUkFCX1JBRDEsIENPTlNUQU5UUy5DUkFCX1JBRDIsIDAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTsgLy8oeCwgeSwgcmFkaXVzMSwgcmFkaXVzMiwgcG9zaXRpb24gYW5nbGUsIHN0YXJ0IGFuZ2xlLCBlbmQgYW5nbGUsIGNvdW50ZXJjbG9ja3dpc2UgYm9vbGVhbilcbiAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICBkcmF3Qm90dG9tQ3JhYkJvZHkoY3R4KSB7XG4gICAgICAgIGxldCBpbWcgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHc6IDE1MDAsXG4gICAgICAgICAgICBoOiAxNTAwLFxuICAgICAgICB9XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuQm90dG9tQ3JhYkJvZHksIGltZy54LCBpbWcueSwgaW1nLncsIGltZy5oLCAtMTAwLCAtMTAwLCBkZXN0RGltZW4sIGRlc3REaW1lbilcbiAgICAgICAgY3R4LnJvdGF0ZSgtdGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgfVxuXG4gICAgZHJhd0dyaWQoY3R4KSB7XG4gICAgICAgIC8vY2lyY2xlc1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDEwMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMTc1LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAyNTAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIENPTlNUQU5UUy5vdXRlckJvdW5kLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvL2xpbmVzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLngsIDApO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIHRoaXMueSk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIDApO1xuICAgICAgICBjdHgubGluZVRvKDAsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3JhYihjdHgpXG4gICAgICAgIHRoaXMuZHJhd0dyaWQoY3R4KTtcbiAgICB9XG5cbiAgICBhbmltYXRlQm9keShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Qm90dG9tQ3JhYkJvZHkoY3R4KTtcbiAgICAgICAgdGhpcy5kcmF3R3JpZChjdHgpO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApXG4gICAgICAgIHRoaXMuY2xhdy5wb3NfYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ0NXKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2FuZ2xlIC09IChDT05TVEFOVFMuUk9UQVRJT05fQU5HTEUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jbGF3LnBvc19hbmdsZSAtPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgfVxufSIsImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBjbGF3UmFkaXVzOiA0MCxcbiAgICBjbGF3U3BlZWQ6IDMuMCxcbiAgICBtYXhSYW5nZTogMzAwLFxuICAgIHN0YXJ0RGlzdDogNjAsXG59XG5cbmxldCBwb3NYO1xubGV0IHBvc1k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXcge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGNyYWJBbmdsZSkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNlbnRlciA9IFt0aGlzLmRpbWVuc2lvbnMud2lkdGgvMiwgdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yXTtcbiAgICAgICAgdGhpcy5jbGF3UmFkaXVzID0gQ09OU1RBTlRTLmNsYXdSYWRpdXM7XG4gICAgICAgIHRoaXMuciA9IENPTlNUQU5UUy5zdGFydERpc3Q7XG4gICAgICAgIHRoaXMucG9zX2FuZ2xlID0gY3JhYkFuZ2xlICsgKDIyLjUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jbGF3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5jbGF3SW1hZ2Uuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTU0MzFkNDJjbGF3My5wbmdcIjtcbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIG1vdmVDbGF3KCkge1xuICAgICAgICBwb3NYID0gdGhpcy5yICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBwb3NZID0gdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpO1xuICAgIH1cblxuICAgIHJldHJhY3RDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yID4gKENPTlNUQU5UUy5jbGF3U3BlZWQgKyBDT05TVEFOVFMuc3RhcnREaXN0KSkge1xuICAgICAgICAgICAgdGhpcy5yIC09IChDT05TVEFOVFMuY2xhd1NwZWVkKTsgLy9jYW4gdHVuZSBmb3Igc2xvd2VyIHJldHJhY3Rpb24gcmF0ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICB9XG5cbiAgICBleHRlbmRDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5yIDwgQ09OU1RBTlRTLm1heFJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnIgKz0gQ09OU1RBTlRTLmNsYXdTcGVlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgcmVzZXRDbGF3KCkge1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgIH1cblxuICAgIGRyYXdDbGF3KGN0eCkge1xuICAgICAgICBsZXQgaW1nID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3OiA3NTAsXG4gICAgICAgICAgICBoOiAxNTAwLFxuICAgICAgICB9XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyBwb3NYLCB0aGlzLmNlbnRlclsxXSArIHBvc1kpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNsYXdJbWFnZSwgaW1nLngsIGltZy55LCBpbWcudywgaW1nLmgsIC01MCwgLTEyNSwgZGVzdERpbWVuLzIsIGRlc3REaW1lbilcbiAgICAgICAgY3R4LnJvdGF0ZSgtdGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyBwb3NYKSwgLSh0aGlzLmNlbnRlclsxXSArIHBvc1kpKTtcblxuXG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmFyYyh0aGlzLmNlbnRlclswXSArIHBvc1gsIHRoaXMuY2VudGVyWzFdICsgcG9zWSwgNDAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIC8vIGN0eC5maWxsKCk7XG5cblxuICAgICAgICAvLyBjdHgucm90YXRlKC10aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIC8vIGN0eC50cmFuc2xhdGUoLXRoaXMuY2VudGVyWzBdLCAtdGhpcy5jZW50ZXJbMV0pO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0NsYXcoY3R4KTtcbiAgICB9XG5cbiAgICBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHBvc1gsXG4gICAgICAgICAgICBjZW50ZXJZOiB0aGlzLmNlbnRlclsxXSArIHBvc1ksXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMuY2xhd1JhZGl1cyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGVzV2l0aChjcmFiKSB7XG4gICAgICAgIGNvbnN0IF9vdmVybGFwID0gKGJvdW5kMSwgYm91bmQyKSA9PiB7XG4gICAgICAgICAgICBsZXQgZHggPSBib3VuZDEuY2VudGVyWCAtIGJvdW5kMi5jZW50ZXJYO1xuICAgICAgICAgICAgbGV0IGR5ID0gYm91bmQxLmNlbnRlclkgLSBib3VuZDIuY2VudGVyWTtcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICBpZiAoMipkaXN0YW5jZSA8IGJvdW5kMS5yYWRpdXMgKyBib3VuZDIucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sbGlzaW9uIGRldGVjdGVkIVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgIFxuICAgICAgICBpZiAoX292ZXJsYXAodGhpcy5ib3VuZHMoKSwgY3JhYi5ib3VuZHMoKSkpIHsgXG4gICAgICAgICAgICAvLyB0aGlzLnJlc2V0Q2xhdygpO1xuICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTsgXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxufSIsImltcG9ydCBMZXZlbCBmcm9tICcuL2xldmVsJztcbmltcG9ydCBCb3R0b21DcmFiIGZyb20gJy4vYm90dG9tX2NyYWInO1xuaW1wb3J0IFBlcmlwaGVyYWxDcmFiIGZyb20gJy4vcGVyaXBoZXJhbF9jcmFiJztcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIGVzY2FwZTogMzAsXG4gICAgZHVyYXRpb246IDEwMDAsIC8vbXNcbiAgICBzdGFydERlbGF5OiAxMDAwLCAvL21zXG4gICAgbW92ZURlbGF5OiAxMDAwLCAvL21zXG4gICAgb3V0ZXJCb3VuZDogMzI1LFxuICAgIGxldmVsMTogOTAwMDAsXG4gICAgbGV2ZWwyOiA2MDAwMCxcbiAgICBsZXZlbDM6IDMwMDAwLFxuICAgIFBlcmlwaGVyYWxDcmFiU3RhcnREaXN0OiAxNDAsXG59XG5cbmxldCBzdGFydHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbmxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbmxldCBsYXN0cmFuZG9tID0gODtcbmxldCB0aW1lc3RhbXAgPSAwO1xubGV0IGJ1ZmZlclN0YXJ0ID0gMDtcbmxldCBpbnRlcnZhbCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy53aW5TcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy53aW5TcGxhc2guc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL0JvdHRvbUNyYWIgU3BsYXNoLmpwZ1wiO1xuICAgICAgICB0aGlzLmxvc2VTcGxhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sb3NlU3BsYXNoLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9Cb3R0b21DcmFiIGxvc2VTcGxhc2gucG5nXCI7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNwbGFzaCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTcGxhc2guc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL0NyYWJCdWNrZXRFZmZlY3QuanBnXCJcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbml0aWFsU3BsYXNoLCAwLCAwLCA2NTAsIDUyNiwgNzUsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSA1MjYgLSAxMDAsIDY1MCwgNTI2KSAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kcmF3VGl0bGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVXb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMud2luU3BsYXNoLCAwLCAwLCAxMjAwLCAyNDAwLCAyMDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJZb3UncmUgdGhlIGJvdHRvbWVzdCBvZiBCb3R0b21DcmFicyFcIik7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lTG9zdCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sb3NlU3BsYXNoLCAwLCAwLCAxMDI0LCA4MDAsIDE2LCAxMjUsIDc2OCwgNjAwKVxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xvc3RUZXh0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlT2NlYW4odGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzLmZvckVhY2goY3JhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNyYWIuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWIuY2xhdy5jb2xsaWRlc1dpdGgoY3JhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyYWJTY29yZSArPSBNYXRoLmZsb29yKGNyYWIuci8xMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdWxsUGVyaXBoZXJhbENyYWIoY3JhYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGF3QWN0aXZlIHx8IHRoaXMuY2xhd1JldHJhY3RBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmNsYXcuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5hbmltYXRlQm9keSh0aGlzLmN0eCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1RpbWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3U2NvcmUoKTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSA9IE1hdGguZmxvb3IoKHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0KSAvIDEwMDApICsgdGhpcy5jcmFiU2NvcmU7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IENPTlNUQU5UUy5sZXZlbDEgLSAodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlcmVkID0gdGltZXN0YW1wIC0gYnVmZmVyU3RhcnQgPiBDT05TVEFOVFMuc3RhcnREZWxheTtcbiAgICAgICAgICAgICAgICBsZXQgbW92ZURlbGF5ZWQgPSB0aW1lc3RhbXAgLSBpbnRlcnZhbCA+IENPTlNUQU5UUy5tb3ZlRGVsYXk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmZlcmVudENyYWIgPSBsYXN0cmFuZG9tICE9PSByYW5kb207XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXIHx8IHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCb3R0b21DcmFiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5jbGF3QWN0aXZlIHx8IHRoaXMuY2xhd1JldHJhY3RBY3RpdmUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlcmVkICYmIG1vdmVEZWxheWVkICYmIGRpZmZlcmVudENyYWIgKSB7IC8vYnVmZmVyIHRpbWUgYmVmb3JlIGNyYWJzIHN0YXJ0IG1vdmluZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyaXBoZXJhbENyYWIodGltZXN0YW1wLCByYW5kb20sIENPTlNUQU5UUy5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWIoKSB7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUNyYWJBY3RpdmVDVykge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLm1vdmVCb3R0b21DcmFiQ1coKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDQ1coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVDbGF3KCkge1xuICAgICAgICBpZiAodGhpcy5jbGF3QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuY2xhdy5leHRlbmRDbGF3KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuY2xhdy5yZXRyYWN0Q2xhdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYm90dG9tQ3JhYi5jbGF3LnIgPD0gNzMpIHRoaXMuY2xhd1JldHJhY3RBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVQZXJpcGhlcmFsQ3JhYih0aW1lc3RhbXAsIGksIGR1cmF0aW9uKSB7XG4gICAgICAgIHN0YXJ0dGltZSA9IGludGVydmFsICsgQ09OU1RBTlRTLm1vdmVEZWxheTtcbiAgICAgICAgaWYgKCh0aW1lc3RhbXAgLSBzdGFydHRpbWUpIDw9IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFic1tpXS5tb3ZlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIGxhc3RyYW5kb20gPSBpO1xuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWxsUGVyaXBoZXJhbENyYWIoY3JhYikge1xuICAgICAgICBpZiAoY3JhYi5yID49IENPTlNUQU5UUy5QZXJpcGhlcmFsQ3JhYlN0YXJ0RGlzdCkge1xuICAgICAgICAgICAgY3JhYi5wdWxsZWRJbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jcmFiU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGltZXN0YW1wID0gMDtcbiAgICAgICAgYnVmZmVyU3RhcnQgPSAwO1xuICAgICAgICBpbnRlcnZhbCA9IDA7XG5cbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWIgPSBuZXcgQm90dG9tQ3JhYih0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicyA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5wdXNoKG5ldyBQZXJpcGhlcmFsQ3JhYih0aGlzLmRpbWVuc2lvbnMpKTtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzW2ldLnBvc2l0aW9uKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGdhbWVMb3N0KCkge1xuICAgICAgICBsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaCggKGNyYWIsIGkpID0+IHtcbiAgICAgICAgICAgIGlmKCBjcmFiLnIgPiBDT05TVEFOVFMub3V0ZXJCb3VuZCkgZ2FtZW92ZXIgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBnYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBnYW1lV29uKCkge1xuICAgICAgICBsZXQgZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKCh0aW1lc3RhbXAgLSBidWZmZXJTdGFydCkgPiBDT05TVEFOVFMubGV2ZWwxKSB7XG4gICAgICAgICAgICBnYW1lb3ZlciA9IHRydWU7XG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBnYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBkcmF3VGltZXIoKSB7XG4gICAgICAgIGNvbnN0IGxvYyA9IHt4OiA1MCwgeTogNTB9O1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuY291bnRkb3duKCksIGxvYy54LCBsb2MueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMuY291bnRkb3duKCksIGxvYy54LCBsb2MueSk7XG4gICAgfVxuXG4gICAgZHJhd0xvc3RUZXh0KCkge1xuICAgICAgICBjb25zdCBsb2MgPSB7IHg6IDEyNSwgeTogMTAwIH07XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgMzZwdCBCYW5nZXJzXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UncmUgbm90IEJvdHRvbUNyYWIgZW5vdWdoIVwiLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcIllvdSdyZSBub3QgQm90dG9tQ3JhYiBlbm91Z2ghXCIsIGxvYy54LCBsb2MueSk7XG4gICAgfVxuXG4gICAgZHJhd1RpdGxlKCkge1xuICAgICAgICBjb25zdCBsb2MgPSB7IHg6IDEyNSwgeTogMTAwIH07XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgMzZwdCBCYW5nZXJzXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIb3cgQm90dG9tQ3JhYiBhcmUgeW91IT9cIiwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoXCJIb3cgQm90dG9tQ3JhYiBhcmUgeW91IT9cIiwgbG9jLngsIGxvYy55KTtcbiAgICB9XG5cbiAgICBjb3VudGRvd24oKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVyIC8gNjAwMDApO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IE1hdGguY2VpbCgodGhpcy50aW1lciAlIDYwMDAwKS8xMDAwKTtcbiAgICAgICAgcmV0dXJuIHNlY29uZHMgPj0gMTAgPyBgJHttaW51dGVzfToke3NlY29uZHN9YCA6IGAke21pbnV0ZXN9OjAke3NlY29uZHN9YFxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgc3RhcnR0aW1lID0gdGltZXN0YW1wO1xuICAgICAgICBidWZmZXJTdGFydCA9IHRpbWVzdGFtcDtcbiAgICAgICAgaW50ZXJ2YWwgPSB0aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgZHJhd1Njb3JlKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5zY29yZSA+IDEwMDAwKSB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgY29uc3QgbG9jID0ge3g6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEwMCwgeTogNTB9O1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDMwcHQgQmFuZ2Vyc1wiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc2NvcmUsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMuc2NvcmUsIGxvYy54LCBsb2MueSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBrZXl1cChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGF3UmV0cmFjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGF3QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlkb3duKGUpIHtcbiAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ib3R0b21DcmFiLmNsYXcuY29sbGlkZXNXaXRoKGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaChjcmFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLmNsYXcuY29sbGlkZXNXaXRoKGNyYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd1JldHJhY3RBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXdSZXRyYWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ1cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNDVyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNDVygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiQWN0aXZlQ0NXID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDQ1coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ib3R0b21DcmFiLm1vdmVCb3R0b21DcmFiQ1coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYkFjdGl2ZUNXID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDVygpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmJvdHRvbUNyYWIuY2xhdy5yZXRyYWN0Q2xhdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsaWNrKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9ICAgIFxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7IC8vRE9NQ29udGVudExvYWRlZFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgbmV3IEdhbWUoY2FudmFzKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDEyLDEyNCwxMjMsMSlcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMDAsIDAwLCA3MDAsIDcwMCk7XG5cbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LmFyYygxMDAsIDEwMCwgMjAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgLy8gY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLnggPSAyMDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMub2NlYW5GbG9vciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLm9jZWFuRmxvb3Iuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL29jZWFuLTEyMTQ3NDdfMTkyMGNyb3BwZWQuanBlZ1wiO1xuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDBkMWVmXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIH1cblxuICAgIGRyYXdPY2VhbkZsb29yKGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMub2NlYW5GbG9vciwgdGhpcy54LCB0aGlzLnksIDEwNjcsIDgwMCwgMCwgMCwgMTA2NywgODAwKTtcbiAgICAgICAgLy9iYWNrZ3JvdW5kIHNjcm9sbFxuICAgICAgICBpZiAodGhpcy54IDw9IDE3MCkge1xuICAgICAgICAgICAgdGhpcy5mbG93TGVmdCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICAgaWYgKHRoaXMueCA+PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuZmxvd0xlZnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZsb3dMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnggLT0gMC4yXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggKz0gMC4yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZU9jZWFuKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdPY2VhbkZsb29yKGN0eCk7XG4gICAgfVxuXG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIHN0YXJ0RGlzdDogMTQwLFxuICAgIHNwZWVkOiAxLjIsXG4gICAgYm9keVJhZGl1czogNDAsXG4gICAgcHVsbGVkSW5TcGVlZDogMy4wLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpcGhlcmFsQ3JhYiB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNlbnRlciA9IFt0aGlzLmRpbWVuc2lvbnMud2lkdGgvMiwgdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yXTtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICAgICAgdGhpcy5ib2R5UmFkaXVzID0gQ09OU1RBTlRTLmJvZHlSYWRpdXM7XG4gICAgICAgIHRoaXMucG9zX2FuZ2xlID0gKDIyLjUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5QZXJpcGhlcmFsQ3JhYiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLlBlcmlwaGVyYWxDcmFiLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9QZXJpcGhlcmFsQ3JhYi5wbmdcIjtcbiAgICB9XG5cbiAgICBkcmF3UGVyaXBoZXJhbENyYWIoY3R4KSB7XG4gICAgICAgIGxldCBpbWcgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHc6IDgwMCxcbiAgICAgICAgICAgIGg6IDgwMFxuICAgICAgICB9XG4gICAgICAgIGxldCBwb3NYID0gdGhpcy5yICogTWF0aC5jb3ModGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBsZXQgcG9zWSA9IHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgbGV0IHJvdGF0ZUFuZ2xlID0gIE1hdGguUEkgLyAyICsgdGhpcy5wb3NfYW5nbGU7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyBwb3NYLCB0aGlzLmNlbnRlclsxXSArIHBvc1kpO1xuICAgICAgICBjdHgucm90YXRlKHJvdGF0ZUFuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLlBlcmlwaGVyYWxDcmFiLCBpbWcueCwgaW1nLnksIGltZy53LCBpbWcuaCwgLTQwLCAtNDAsIDgwLCA4MClcbiAgICAgICAgY3R4LnJvdGF0ZSgtcm90YXRlQW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyBwb3NYKSwgLSh0aGlzLmNlbnRlclsxXSArIHBvc1kpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdQZXJpcGhlcmFsQ3JhYihjdHgpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKGkpIHtcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgKz0gKDQ1ICogTWF0aC5QSSAvIDE4MCkgKiBpO1xuICAgIH1cblxuICAgIG1vdmVPdXQoKSB7XG4gICAgICAgIHRoaXMuciArPSBDT05TVEFOVFMuc3BlZWQ7XG4gICAgfVxuXG4gICAgcHVsbGVkSW4oKSB7XG4gICAgICAgIHRoaXMuciAtPSBDT05TVEFOVFMucHVsbGVkSW5TcGVlZDtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICB9XG5cbiAgICBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKSxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmJvZHlSYWRpdXMsXG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9