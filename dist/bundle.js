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
    ROTATION_ANGLE: 45,  //in degrees
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

    moveBottomCrabCW() {
        this.position_angle += (CONSTANTS.ROTATION_ANGLE * Math.PI / 180)
        this.claw.pos_angle = this.position_angle - (22.5 * Math.PI / 180);
    }

    moveBottomCrabCCW() {
        this.position_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180);
        this.claw.pos_angle = this.position_angle + (22.5 * Math.PI / 180);
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
    clawSpeed: 20,
    maxRange: 300,
    startDist: 40,
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
        ctx.beginPath();
        ctx.arc(this.center[0] + posX, this.center[1] + posY, 40, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = 'red';
        ctx.fill();
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
            if (5*distance < bound1.radius + bound2.radius) {
                // collision detected!
                return true;
            }    
            return false;
        };
        let collision = false;
       
        if (_overlap(this.bounds(), crab.bounds())) { 
            this.resetClaw();
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
    startDelay: 3000, //ms
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

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.registerEvents();
        this.restart();
    }

    animate() {
        if (this.gameOver()) {
            console.log("You're the bottomest of BottomCrabs!");
            this.restart();
        }
        this.level.animate(this.ctx);
        this.bottomCrab.animate(this.ctx);
        this.peripheralCrabs.forEach( crab => {
            crab.animate(this.ctx);
            if (this.bottomCrab.claw.collidesWith(crab)) crab.reset();
        });
        if (this.clawActive) {
            this.bottomCrab.claw.animate(this.ctx);
        }

        this.timer = CONSTANTS.level1 - (timestamp - bufferStart);
        this.drawTimer();

        this.score = Math.floor((timestamp - bufferStart) / 1000);
        this.drawScore();

        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
            timestamp = new Date().getTime();

            let buffered = timestamp - bufferStart > CONSTANTS.startDelay;
            let moveDelayed = timestamp - interval > CONSTANTS.moveDelay;
            let differentCrab = lastrandom !== random;

            if (buffered && moveDelayed && differentCrab ) { //buffer time before crabs start moving out
                this.movePeripheralCrab(timestamp, random, CONSTANTS.duration);
            } else {
                random = Math.floor(Math.random() * 8);
            }
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

    restart() {
        this.running = false;
        this.gameover = false;
        this.clawActive = false;
        this.score = 0;
        this.timer = 0;

        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions);
        this.bottomCrab = new _bottom_crab__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions);
        this.peripheralCrabs = [];
        for(let i = 0; i < 8; i++) {
            this.peripheralCrabs.push(new _peripheral_crab__WEBPACK_IMPORTED_MODULE_2__["default"](this.dimensions));
            this.peripheralCrabs[i].position(i);
        }
        this.animate();
    }

    gameOver() {
        if (timestamp - bufferStart > CONSTANTS.leve1) {
            this.gameOver = true;
        } else {
            this.peripheralCrabs.forEach( (crab) => {
                if( crab.r > CONSTANTS.outerBound) this.gameover = true;
            })
        }
        return this.gameover;
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
        this.animate();
        timestamp = new Date().getTime();
        starttime = timestamp;
        bufferStart = timestamp;
        interval = timestamp;
    }

    drawScore() {
        const loc = {x: this.dimensions.width - 100, y: 100};
        this.ctx.font = "bold 30pt serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.score, loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText(this.score, loc.x, loc.y);
    }

    registerEvents() {
        document.addEventListener("mousedown", this.click.bind(this));
        document.addEventListener("keydown", this.keydown.bind(this));
        // this.ctx.canvas.addEventListener("click", this.click.bind(this));
        document.addEventListener("keyup", this.keyup.bind(this));
    }

    keyup(e) {
        this.clawActive = false;
    }

    keydown(e) {
        if (!this.running) {
            this.play();
        }
        switch (e.key) {
            case "ArrowLeft":
                this.bottomCrab.moveBottomCrabCCW();
                break;
            case "a":
                this.bottomCrab.moveBottomCrabCCW();
                break;
            case "ArrowRight":
                this.bottomCrab.moveBottomCrabCW();
                break;
            case "d":
                this.bottomCrab.moveBottomCrabCW();
                break;
            case "ArrowUp":
                this.clawActive = true;
                this.bottomCrab.claw.extendClaw();
                break;
            case "ArrowDown":
                this.clawActive = true;
                this.bottomCrab.claw.retractClaw();
                break;
        }
    }

    click(e) {
        if (!this.running) {
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

document.addEventListener("DOMContentLoaded", function () {
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
    }

    drawBackground(ctx) {
        ctx.fillStyle = "rgb(0,51,72)"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate(ctx) {
        this.drawBackground(ctx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGF3LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvR0FBb0c7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEO0FBQ0E7QUFDQSw2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBQ1c7QUFDUTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsOENBQUs7QUFDOUIsOEJBQThCLG9EQUFVO0FBQ3hDO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsMENBQTBDLHdEQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUSxHQUFHLFFBQVEsT0FBTyxRQUFRLElBQUksUUFBUTtBQUNoRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSzs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUMxTEE7QUFBQTtBQUEwQjtBQUMxQjtBQUNBO0FBQ0EsUUFBUSw2Q0FBSTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDIiwiZmlsZSI6Ii4vZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBDbGF3IGZyb20gJy4vY2xhdyc7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBST1RBVElPTl9BTkdMRTogNDUsICAvL2luIGRlZ3JlZXNcbiAgICBDUkFCX1JBRDE6IDcwLFxuICAgIENSQUJfUkFEMjogNDUsXG4gICAgb3V0ZXJCb3VuZDogMzI1LFxufTtcbi8vIGNvbnN0IEJPVFRPTV9DUkFCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VyY2VcIilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tQ3JhYiB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMueCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aC8yO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LzI7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5Cb3R0b21DcmFiLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9Cb3R0b21DcmFiMi5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5Cb3R0b21DcmFiLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9QZXJpcGhlcmFsQ3JhYi5wbmdcIlxuICAgICAgICAvLyB0aGlzLkJvdHRvbUNyYWIuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzLzVkMzAxNTc3MjQ3MDcgY29weS5wbmdcIlxuICAgICAgICB0aGlzLmNsYXcgPSBuZXcgQ2xhdyh0aGlzLmRpbWVuc2lvbnMsIHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgIH1cblxuICAgIGRyYXdCb3R0b21DcmFiKGN0eCkge1xuICAgICAgICBsZXQgaW1nRGltZW4gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHc6IDE1MDAsXG4gICAgICAgICAgICBoOiAxNTAwLFxuICAgICAgICB9XG4gICAgICAgIGxldCBkZXN0RGltZW4gPSAyMDA7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuQm90dG9tQ3JhYiwgaW1nRGltZW4ueCwgaW1nRGltZW4ueSwgaW1nRGltZW4udywgaW1nRGltZW4uaCwgLTEwMCwgLTEwMCwgZGVzdERpbWVuLCBkZXN0RGltZW4pXG4gICAgICAgIGN0eC5yb3RhdGUoLXRoaXMucG9zaXRpb25fYW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLngsIC10aGlzLnkpO1xuXG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmVsbGlwc2UoMTAwLCAxMDAsIENPTlNUQU5UUy5DUkFCX1JBRDEsIENPTlNUQU5UUy5DUkFCX1JBRDIsIDAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTsgLy8oeCwgeSwgcmFkaXVzMSwgcmFkaXVzMiwgcG9zaXRpb24gYW5nbGUsIHN0YXJ0IGFuZ2xlLCBlbmQgYW5nbGUsIGNvdW50ZXJjbG9ja3dpc2UgYm9vbGVhbilcbiAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICBkcmF3R3JpZChjdHgpIHtcbiAgICAgICAgLy9jaXJjbGVzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMTAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAxNzUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDI1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgQ09OU1RBTlRTLm91dGVyQm91bmQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vbGluZXNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgdGhpcy55KTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMueSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8oMCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCb3R0b21DcmFiKGN0eClcbiAgICAgICAgdGhpcy5kcmF3R3JpZChjdHgpO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApXG4gICAgICAgIHRoaXMuY2xhdy5wb3NfYW5nbGUgPSB0aGlzLnBvc2l0aW9uX2FuZ2xlIC0gKDIyLjUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICB9XG5cbiAgICBtb3ZlQm90dG9tQ3JhYkNDVygpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl9hbmdsZSAtPSAoQ09OU1RBTlRTLlJPVEFUSU9OX0FOR0xFICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuY2xhdy5wb3NfYW5nbGUgPSB0aGlzLnBvc2l0aW9uX2FuZ2xlICsgKDIyLjUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICB9XG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIGNsYXdSYWRpdXM6IDQwLFxuICAgIGNsYXdTcGVlZDogMjAsXG4gICAgbWF4UmFuZ2U6IDMwMCxcbiAgICBzdGFydERpc3Q6IDQwLFxufVxuXG5sZXQgcG9zWDtcbmxldCBwb3NZO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGF3IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjcmFiQW5nbGUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBbdGhpcy5kaW1lbnNpb25zLndpZHRoLzIsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQvMl07XG4gICAgICAgIHRoaXMuY2xhd1JhZGl1cyA9IENPTlNUQU5UUy5jbGF3UmFkaXVzO1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgICAgICB0aGlzLnBvc19hbmdsZSA9IGNyYWJBbmdsZSArICgyMi41ICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMubW92ZUNsYXcoKTtcbiAgICB9XG5cbiAgICBtb3ZlQ2xhdygpIHtcbiAgICAgICAgcG9zWCA9IHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgcG9zWSA9IHRoaXMuciAqIE1hdGguc2luKHRoaXMucG9zX2FuZ2xlKTtcbiAgICB9XG5cbiAgICByZXRyYWN0Q2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuciA+IChDT05TVEFOVFMuY2xhd1NwZWVkICsgQ09OU1RBTlRTLnN0YXJ0RGlzdCkpIHtcbiAgICAgICAgICAgIHRoaXMuciAtPSAoQ09OU1RBTlRTLmNsYXdTcGVlZCk7IC8vY2FuIHR1bmUgZm9yIHNsb3dlciByZXRyYWN0aW9uIHJhdGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVDbGF3KCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kQ2xhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuciA8IENPTlNUQU5UUy5tYXhSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5yICs9IENPTlNUQU5UUy5jbGF3U3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlQ2xhdygpO1xuICAgIH1cblxuICAgIHJlc2V0Q2xhdygpIHtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICB9XG5cbiAgICBkcmF3Q2xhdyhjdHgpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMuY2VudGVyWzBdICsgcG9zWCwgdGhpcy5jZW50ZXJbMV0gKyBwb3NZLCA0MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gY3R4LnJvdGF0ZSgtdGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICAvLyBjdHgudHJhbnNsYXRlKC10aGlzLmNlbnRlclswXSwgLXRoaXMuY2VudGVyWzFdKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdDbGF3KGN0eCk7XG4gICAgfVxuXG4gICAgYm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VudGVyWDogdGhpcy5jZW50ZXJbMF0gKyBwb3NYLFxuICAgICAgICAgICAgY2VudGVyWTogdGhpcy5jZW50ZXJbMV0gKyBwb3NZLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmNsYXdSYWRpdXMsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlc1dpdGgoY3JhYikge1xuICAgICAgICBjb25zdCBfb3ZlcmxhcCA9IChib3VuZDEsIGJvdW5kMikgPT4ge1xuICAgICAgICAgICAgbGV0IGR4ID0gYm91bmQxLmNlbnRlclggLSBib3VuZDIuY2VudGVyWDtcbiAgICAgICAgICAgIGxldCBkeSA9IGJvdW5kMS5jZW50ZXJZIC0gYm91bmQyLmNlbnRlclk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgaWYgKDUqZGlzdGFuY2UgPCBib3VuZDEucmFkaXVzICsgYm91bmQyLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIC8vIGNvbGxpc2lvbiBkZXRlY3RlZCFcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICBcbiAgICAgICAgaWYgKF9vdmVybGFwKHRoaXMuYm91bmRzKCksIGNyYWIuYm91bmRzKCkpKSB7IFxuICAgICAgICAgICAgdGhpcy5yZXNldENsYXcoKTtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7IFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cbn0iLCJpbXBvcnQgTGV2ZWwgZnJvbSAnLi9sZXZlbCc7XG5pbXBvcnQgQm90dG9tQ3JhYiBmcm9tICcuL2JvdHRvbV9jcmFiJztcbmltcG9ydCBQZXJpcGhlcmFsQ3JhYiBmcm9tICcuL3BlcmlwaGVyYWxfY3JhYic7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBlc2NhcGU6IDMwLFxuICAgIGR1cmF0aW9uOiAxMDAwLCAvL21zXG4gICAgc3RhcnREZWxheTogMzAwMCwgLy9tc1xuICAgIG1vdmVEZWxheTogMTAwMCwgLy9tc1xuICAgIG91dGVyQm91bmQ6IDMyNSxcbiAgICBsZXZlbDE6IDkwMDAwLFxuICAgIGxldmVsMjogNjAwMDAsXG4gICAgbGV2ZWwzOiAzMDAwMFxufVxuXG5sZXQgc3RhcnR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5sZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG5sZXQgbGFzdHJhbmRvbSA9IDg7XG5sZXQgdGltZXN0YW1wID0gMDtcbmxldCBidWZmZXJTdGFydCA9IDA7XG5sZXQgaW50ZXJ2YWwgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91J3JlIHRoZSBib3R0b21lc3Qgb2YgQm90dG9tQ3JhYnMhXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5mb3JFYWNoKCBjcmFiID0+IHtcbiAgICAgICAgICAgIGNyYWIuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICBpZiAodGhpcy5ib3R0b21DcmFiLmNsYXcuY29sbGlkZXNXaXRoKGNyYWIpKSBjcmFiLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jbGF3QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIuY2xhdy5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXIgPSBDT05TVEFOVFMubGV2ZWwxIC0gKHRpbWVzdGFtcCAtIGJ1ZmZlclN0YXJ0KTtcbiAgICAgICAgdGhpcy5kcmF3VGltZXIoKTtcblxuICAgICAgICB0aGlzLnNjb3JlID0gTWF0aC5mbG9vcigodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQpIC8gMTAwMCk7XG4gICAgICAgIHRoaXMuZHJhd1Njb3JlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICBsZXQgYnVmZmVyZWQgPSB0aW1lc3RhbXAgLSBidWZmZXJTdGFydCA+IENPTlNUQU5UUy5zdGFydERlbGF5O1xuICAgICAgICAgICAgbGV0IG1vdmVEZWxheWVkID0gdGltZXN0YW1wIC0gaW50ZXJ2YWwgPiBDT05TVEFOVFMubW92ZURlbGF5O1xuICAgICAgICAgICAgbGV0IGRpZmZlcmVudENyYWIgPSBsYXN0cmFuZG9tICE9PSByYW5kb207XG5cbiAgICAgICAgICAgIGlmIChidWZmZXJlZCAmJiBtb3ZlRGVsYXllZCAmJiBkaWZmZXJlbnRDcmFiICkgeyAvL2J1ZmZlciB0aW1lIGJlZm9yZSBjcmFicyBzdGFydCBtb3Zpbmcgb3V0XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyaXBoZXJhbENyYWIodGltZXN0YW1wLCByYW5kb20sIENPTlNUQU5UUy5kdXJhdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBlcmlwaGVyYWxDcmFiKHRpbWVzdGFtcCwgaSwgZHVyYXRpb24pIHtcbiAgICAgICAgc3RhcnR0aW1lID0gaW50ZXJ2YWwgKyBDT05TVEFOVFMubW92ZURlbGF5O1xuICAgICAgICBpZiAoKHRpbWVzdGFtcCAtIHN0YXJ0dGltZSkgPD0gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzW2ldLm1vdmVPdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGludGVydmFsID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgbGFzdHJhbmRvbSA9IGk7XG4gICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG5cbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWIgPSBuZXcgQm90dG9tQ3JhYih0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicyA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFicy5wdXNoKG5ldyBQZXJpcGhlcmFsQ3JhYih0aGlzLmRpbWVuc2lvbnMpKTtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzW2ldLnBvc2l0aW9uKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGltZXN0YW1wIC0gYnVmZmVyU3RhcnQgPiBDT05TVEFOVFMubGV2ZTEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMuZm9yRWFjaCggKGNyYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiggY3JhYi5yID4gQ09OU1RBTlRTLm91dGVyQm91bmQpIHRoaXMuZ2FtZW92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lb3ZlcjtcbiAgICB9XG5cbiAgICBkcmF3VGltZXIoKSB7XG4gICAgICAgIGNvbnN0IGxvYyA9IHt4OiAxMDAsIHk6IDEwMH07XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgMzBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuY291bnRkb3duKCksIGxvYy54LCBsb2MueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMuY291bnRkb3duKCksIGxvYy54LCBsb2MueSk7XG4gICAgfVxuXG4gICAgY291bnRkb3duKCkge1xuICAgICAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IodGhpcy50aW1lciAvIDYwMDAwKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBNYXRoLmNlaWwoKHRoaXMudGltZXIgJSA2MDAwMCkvMTAwMCk7XG4gICAgICAgIHJldHVybiBzZWNvbmRzID49IDEwID8gYCR7bWludXRlc306JHtzZWNvbmRzfWAgOiBgJHttaW51dGVzfTowJHtzZWNvbmRzfWBcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHN0YXJ0dGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgYnVmZmVyU3RhcnQgPSB0aW1lc3RhbXA7XG4gICAgICAgIGludGVydmFsID0gdGltZXN0YW1wO1xuICAgIH1cblxuICAgIGRyYXdTY29yZSgpIHtcbiAgICAgICAgY29uc3QgbG9jID0ge3g6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEwMCwgeTogMTAwfTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCAzMHB0IHNlcmlmXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5zY29yZSwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5zY29yZSwgbG9jLngsIGxvYy55KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleWRvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXAuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAga2V5dXAoZSkge1xuICAgICAgICB0aGlzLmNsYXdBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBrZXlkb3duKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDQ1coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLm1vdmVCb3R0b21DcmFiQ0NXKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNXKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNXKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmNsYXcuZXh0ZW5kQ2xhdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhd0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLmNsYXcucmV0cmFjdENsYXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG4gICAgfSAgICBcblxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICBuZXcgR2FtZShjYW52YXMpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTIsMTI0LDEyMywxKVwiO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwMCwgMDAsIDcwMCwgNzAwKTtcblxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHguYXJjKDEwMCwgMTAwLCAyMCwgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAvLyBjdHgubGluZVdpZHRoID0gNTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIC8vIGN0eC5maWxsKCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigwLDUxLDcyKVwiXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICB9XG59IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIHN0YXJ0RGlzdDogMTQwLFxuICAgIHNwZWVkOiAxLjIsXG4gICAgYm9keVJhZGl1czogNDAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcmlwaGVyYWxDcmFiIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuY2VudGVyID0gW3RoaXMuZGltZW5zaW9ucy53aWR0aC8yLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0LzJdO1xuICAgICAgICB0aGlzLnIgPSBDT05TVEFOVFMuc3RhcnREaXN0O1xuICAgICAgICB0aGlzLmJvZHlSYWRpdXMgPSBDT05TVEFOVFMuYm9keVJhZGl1cztcbiAgICAgICAgdGhpcy5wb3NfYW5nbGUgPSAoMjIuNSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLlBlcmlwaGVyYWxDcmFiID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuUGVyaXBoZXJhbENyYWIuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL1BlcmlwaGVyYWxDcmFiLnBuZ1wiO1xuICAgIH1cblxuICAgIGRyYXdQZXJpcGhlcmFsQ3JhYihjdHgpIHtcbiAgICAgICAgbGV0IGltZyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgdzogODAwLFxuICAgICAgICAgICAgaDogODAwXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvc1ggPSB0aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGxldCBwb3NZID0gdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpO1xuICAgICAgICBsZXQgcm90YXRlQW5nbGUgPSAgTWF0aC5QSSAvIDIgKyB0aGlzLnBvc19hbmdsZTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmNlbnRlclswXSArIHBvc1gsIHRoaXMuY2VudGVyWzFdICsgcG9zWSk7XG4gICAgICAgIGN0eC5yb3RhdGUocm90YXRlQW5nbGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuUGVyaXBoZXJhbENyYWIsIGltZy54LCBpbWcueSwgaW1nLncsIGltZy5oLCAtNDAsIC00MCwgODAsIDgwKVxuICAgICAgICBjdHgucm90YXRlKC1yb3RhdGVBbmdsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLSh0aGlzLmNlbnRlclswXSArIHBvc1gpLCAtKHRoaXMuY2VudGVyWzFdICsgcG9zWSkpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd1BlcmlwaGVyYWxDcmFiKGN0eCk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oaSkge1xuICAgICAgICB0aGlzLnBvc19hbmdsZSArPSAoNDUgKiBNYXRoLlBJIC8gMTgwKSAqIGk7XG4gICAgfVxuXG4gICAgbW92ZU91dCgpIHtcbiAgICAgICAgdGhpcy5yICs9IENPTlNUQU5UUy5zcGVlZDtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5yID0gQ09OU1RBTlRTLnN0YXJ0RGlzdDtcbiAgICB9XG5cbiAgICBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW50ZXJYOiB0aGlzLmNlbnRlclswXSArIHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKSxcbiAgICAgICAgICAgIGNlbnRlclk6IHRoaXMuY2VudGVyWzFdICsgdGhpcy5yICogTWF0aC5zaW4odGhpcy5wb3NfYW5nbGUpLFxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmJvZHlSYWRpdXMsXG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9