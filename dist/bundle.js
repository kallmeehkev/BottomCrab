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
const CONSTANTS = {
    ROTATION_ANGLE: 45,  //in degrees
    CRAB_RAD1: 70,
    CRAB_RAD2: 45,
};
// const BOTTOM_CRAB = document.getElementById("source")

class BottomCrab {
    constructor(dimensions) {
        this.dimensions = dimensions
        this.x = this.dimensions.width/2;
        this.y = this.dimensions.height/2;
        this.position_angle = 0;
        this.BottomCrab = new Image();
        this.BottomCrab.src = "../assets/images/BottomCrab2.png"
        // this.BottomCrab.src = "../assets/images/PeripheralCrab.png"
        // this.BottomCrab.src = "../assets/images/5d30157724707 copy.png"
        console.log(this.BottomCrab.src);
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
        ctx.arc(this.x, this.y, 325, 0, 2 * Math.PI);
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
    }

    moveBottomCrabCCW() {
        this.position_angle -= (CONSTANTS.ROTATION_ANGLE * Math.PI / 180)
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
    escape: 50,
}

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.registerEvents();
        this.restart();
    }

    animate() {
        this.level.animate(this.ctx);
        this.bottomCrab.drawGrid(this.ctx);
        for(let i = 7; i >= 0; i--) {
            this.peripheralCrabs[i].animate(this.ctx);
        }
        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
            // this.running = false;
        }
        let lastrandom = 8;
        if (Math.floor(Math.random() * CONSTANTS.escape) === 0) {
            let random = Math.floor(Math.random() * 8);
            // for(let i = 0; i < 60; i++) {
                if (lastrandom !== random) {
                    this.peripheralCrabs[random].moveOut();
                }
            // }
        }
    }

    animateBottomCrab() {
        this.bottomCrab.animate(this.ctx);
        // if (this.running) {
        //     requestAnimationFrame(this.animate.bind(this));
        //     this.running = false;
        // }
    }

    restart() {
        this.running = true;
        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions);
        this.bottomCrab = new _bottom_crab__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions);
        this.peripheralCrabs = [];
        for(let i = 0; i < 8; i++) {
            this.peripheralCrabs.push(new _peripheral_crab__WEBPACK_IMPORTED_MODULE_2__["default"](this.dimensions));
            if (i !== 0) {
                let j = 8-i;
                while( j > 0) {
                    this.peripheralCrabs[i].position();
                    j--;
                }
            }
        }
        this.animate();
        // this.animateBottomCrab();
    }

    play() {
        this.running = true;
        this.animate();
    }

    registerEvents() {
        document.addEventListener("keydown", this.keydown.bind(this))
        // this.ctx.canvas.addEventListener("click", this.click.bind(this));
        document.addEventListener("mousedown", this.animate.bind(this));
    }

    keydown(e) {
        if (!this.running) {
            this.play();
        }
        console.log(e.key)
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
                // Up pressed
                break;
            case "ArrowDown":
                // Down pressed
                break;
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
class PeripheralCrab {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.center = [this.dimensions.width/2, this.dimensions.height/2];
        this.r = 140;
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
        let rotateAngle = Math.PI / 4 + this.pos_angle;
        ctx.translate(this.center[0] + posX, this.center[1] - posY);
        ctx.rotate(rotateAngle);
        ctx.drawImage(this.PeripheralCrab, img.x, img.y, img.w, img.h, -40, -40, 80, 80)
        ctx.rotate(-rotateAngle);
        ctx.translate(-(this.center[0] + posX), -(this.center[1] - posY));
    }

    animate(ctx) {
        this.drawPeripheralCrab(ctx);
    }

    position() {
        this.pos_angle += (45 * Math.PI / 180);
    }

    moveOut() {
        this.r += 72;
    }

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvdHRvbV9jcmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcmlwaGVyYWxfY3JhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0dBQW9HO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDVztBQUNROztBQUUvQztBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBSztBQUM5Qiw4QkFBOEIsb0RBQVU7QUFDeEM7QUFDQSxzQkFBc0IsT0FBTztBQUM3QiwwQ0FBMEMsd0RBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEM7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQTBCO0FBQzFCO0FBQ0E7QUFDQSxRQUFRLDZDQUFJO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDIiwiZmlsZSI6Ii4vZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBST1RBVElPTl9BTkdMRTogNDUsICAvL2luIGRlZ3JlZXNcbiAgICBDUkFCX1JBRDE6IDcwLFxuICAgIENSQUJfUkFEMjogNDUsXG59O1xuLy8gY29uc3QgQk9UVE9NX0NSQUIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdXJjZVwiKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3R0b21DcmFiIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy54ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoLzI7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQvMjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbl9hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuQm90dG9tQ3JhYiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLkJvdHRvbUNyYWIuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL0JvdHRvbUNyYWIyLnBuZ1wiXG4gICAgICAgIC8vIHRoaXMuQm90dG9tQ3JhYi5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvUGVyaXBoZXJhbENyYWIucG5nXCJcbiAgICAgICAgLy8gdGhpcy5Cb3R0b21DcmFiLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy81ZDMwMTU3NzI0NzA3IGNvcHkucG5nXCJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Cb3R0b21DcmFiLnNyYyk7XG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbUNyYWIoY3R4KSB7XG4gICAgICAgIGxldCBpbWdEaW1lbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgdzogMTUwMCxcbiAgICAgICAgICAgIGg6IDE1MDAsXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlc3REaW1lbiA9IDIwMDtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5Cb3R0b21DcmFiLCBpbWdEaW1lbi54LCBpbWdEaW1lbi55LCBpbWdEaW1lbi53LCBpbWdEaW1lbi5oLCAtMTAwLCAtMTAwLCBkZXN0RGltZW4sIGRlc3REaW1lbilcbiAgICAgICAgY3R4LnJvdGF0ZSgtdGhpcy5wb3NpdGlvbl9hbmdsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG5cbiAgICAgICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyBjdHguZWxsaXBzZSgxMDAsIDEwMCwgQ09OU1RBTlRTLkNSQUJfUkFEMSwgQ09OU1RBTlRTLkNSQUJfUkFEMiwgMCwgMCwgMiAqIE1hdGguUEksIHRydWUpOyAvLyh4LCB5LCByYWRpdXMxLCByYWRpdXMyLCBwb3NpdGlvbiBhbmdsZSwgc3RhcnQgYW5nbGUsIGVuZCBhbmdsZSwgY291bnRlcmNsb2Nrd2lzZSBib29sZWFuKVxuICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuICAgIH1cblxuICAgIGRyYXdHcmlkKGN0eCkge1xuICAgICAgICAvL2NpcmNsZXNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAxMDAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDE3NSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMjUwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAzMjUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vbGluZXNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgdGhpcy55KTtcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMueSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIDApO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8oMCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCb3R0b21DcmFiKGN0eClcbiAgICAgICAgdGhpcy5kcmF3R3JpZChjdHgpO1xuICAgIH1cblxuICAgIG1vdmVCb3R0b21DcmFiQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgKz0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApXG4gICAgfVxuXG4gICAgbW92ZUJvdHRvbUNyYWJDQ1coKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fYW5nbGUgLT0gKENPTlNUQU5UUy5ST1RBVElPTl9BTkdMRSAqIE1hdGguUEkgLyAxODApXG4gICAgfVxufSIsImltcG9ydCBMZXZlbCBmcm9tICcuL2xldmVsJztcbmltcG9ydCBCb3R0b21DcmFiIGZyb20gJy4vYm90dG9tX2NyYWInO1xuaW1wb3J0IFBlcmlwaGVyYWxDcmFiIGZyb20gJy4vcGVyaXBoZXJhbF9jcmFiJztcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIGVzY2FwZTogNTAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiLmRyYXdHcmlkKHRoaXMuY3R4KTtcbiAgICAgICAgZm9yKGxldCBpID0gNzsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzW2ldLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAvLyB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdHJhbmRvbSA9IDg7XG4gICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDT05TVEFOVFMuZXNjYXBlKSA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICAgICAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGFzdHJhbmRvbSAhPT0gcmFuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbENyYWJzW3JhbmRvbV0ubW92ZU91dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGVCb3R0b21DcmFiKCkge1xuICAgICAgICB0aGlzLmJvdHRvbUNyYWIuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgIC8vIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5ib3R0b21DcmFiID0gbmV3IEJvdHRvbUNyYWIodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFsQ3JhYnMucHVzaChuZXcgUGVyaXBoZXJhbENyYWIodGhpcy5kaW1lbnNpb25zKSk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBqID0gOC1pO1xuICAgICAgICAgICAgICAgIHdoaWxlKCBqID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmlwaGVyYWxDcmFic1tpXS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICAvLyB0aGlzLmFuaW1hdGVCb3R0b21DcmFiKCk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bi5iaW5kKHRoaXMpKVxuICAgICAgICAvLyB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGtleWRvd24oZSkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZS5rZXkpXG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUNyYWIubW92ZUJvdHRvbUNyYWJDQ1coKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21DcmFiLm1vdmVCb3R0b21DcmFiQ0NXKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNXKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQ3JhYi5tb3ZlQm90dG9tQ3JhYkNXKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIC8vIFVwIHByZXNzZWRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICAvLyBEb3duIHByZXNzZWRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgIG5ldyBHYW1lKGNhbnZhcyk7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxMiwxMjQsMTIzLDEpXCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAwLCAwMCwgNzAwLCA3MDApO1xuXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5hcmMoMTAwLCAxMDAsIDIwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgIC8vIGN0eC5saW5lV2lkdGggPSA1O1xuICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgLy8gY3R4LmZpbGwoKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsNTEsNzIpXCJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpcGhlcmFsQ3JhYiB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNlbnRlciA9IFt0aGlzLmRpbWVuc2lvbnMud2lkdGgvMiwgdGhpcy5kaW1lbnNpb25zLmhlaWdodC8yXTtcbiAgICAgICAgdGhpcy5yID0gMTQwO1xuICAgICAgICB0aGlzLnBvc19hbmdsZSA9ICgyMi41ICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuUGVyaXBoZXJhbENyYWIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5QZXJpcGhlcmFsQ3JhYi5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvUGVyaXBoZXJhbENyYWIucG5nXCI7XG4gICAgfVxuXG4gICAgZHJhd1BlcmlwaGVyYWxDcmFiKGN0eCkge1xuICAgICAgICBsZXQgaW1nID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3OiA4MDAsXG4gICAgICAgICAgICBoOiA4MDBcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9zWCA9IHRoaXMuciAqIE1hdGguY29zKHRoaXMucG9zX2FuZ2xlKTtcbiAgICAgICAgbGV0IHBvc1kgPSB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnBvc19hbmdsZSk7XG4gICAgICAgIGxldCByb3RhdGVBbmdsZSA9IE1hdGguUEkgLyA0ICsgdGhpcy5wb3NfYW5nbGU7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXJbMF0gKyBwb3NYLCB0aGlzLmNlbnRlclsxXSAtIHBvc1kpO1xuICAgICAgICBjdHgucm90YXRlKHJvdGF0ZUFuZ2xlKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLlBlcmlwaGVyYWxDcmFiLCBpbWcueCwgaW1nLnksIGltZy53LCBpbWcuaCwgLTQwLCAtNDAsIDgwLCA4MClcbiAgICAgICAgY3R4LnJvdGF0ZSgtcm90YXRlQW5nbGUpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKC0odGhpcy5jZW50ZXJbMF0gKyBwb3NYKSwgLSh0aGlzLmNlbnRlclsxXSAtIHBvc1kpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdQZXJpcGhlcmFsQ3JhYihjdHgpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnBvc19hbmdsZSArPSAoNDUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICB9XG5cbiAgICBtb3ZlT3V0KCkge1xuICAgICAgICB0aGlzLnIgKz0gNzI7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==