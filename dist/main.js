/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MAX_LENGTH = 4;\nconst MIN_LENGTH = 1;\n\nfunction Ship(length = 1) {\n  if (length > MAX_LENGTH) length = MAX_LENGTH;\n  if (length < MIN_LENGTH) length = MIN_LENGTH;\n  let lives = length;\n  const hit = function () {\n    if (lives !== 0) lives -= 1;\n  };\n  const isSunk = function () {\n    return lives === 0;\n  };\n  return { length, hit, isSunk };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://project-battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/doms/createDomForBoard.js":
/*!***************************************!*\
  !*** ./src/doms/createDomForBoard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDomForBoard(size) {\n  const body = document.querySelector(\"#main\");\n  const board = document.createElement(\"div\");\n  board.className = \"board\";\n  let piece;\n  let row;\n  for (let i = 0; i < size; i++) {\n    row = document.createElement(\"div\");\n    row.className = \"row\";\n    for (let j = 0; j < size; j++) {\n      piece = document.createElement(\"div\");\n      piece.className = \"piece\";\n      row.appendChild(piece);\n    }\n    board.appendChild(row);\n  }\n  body.appendChild(board);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDomForBoard);\n\n\n//# sourceURL=webpack://project-battleship/./src/doms/createDomForBoard.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ \"./src/battleship.js\");\n\nfunction Piece(empty = true, hit = false) {\n  return { empty, hit };\n}\nfunction createBoard(size = 8) {\n  let missed = 0;\n  let sunkedShips = false;\n  let numberOfShips = 0;\n  function Board() {\n    let board = [];\n    for (let i = 0; i < size; i++) {\n      board.push([]);\n      for (let j = 0; j < size; j++) {\n        board[i].push(Piece());\n      }\n    }\n    return board;\n  }\n  let board = Board();\n  function isBoatThere(lenght, x, y) {\n    for (let i = 0; i < lenght; i++) {\n      if (!board[x][y + i] || !board[x][y + i].empty) return true;\n    }\n    return false;\n  }\n  const placeBoat = function (length, x, y) {\n    let newShip = (0,_battleship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n    length = newShip.length;\n    if (!isBoatThere(length, x, y)) {\n      numberOfShips += 1;\n      for (let i = 0; i < length; i++) {\n        board[x][y + i].empty = newShip;\n      }\n      return true;\n    }\n    return false;\n  };\n  function receiveAttack(x, y) {\n    let piece = board[x][y];\n    if (piece) {\n      if (piece.empty === true) {\n        missed += 1;\n        piece.hit = true;\n        piece.empty = false;\n      } else if (!piece.hit) {\n        piece.empty.hit();\n        piece.hit = true;\n        if (piece.empty.isSunk()) sunkedShips += 1;\n      } else {\n        return false;\n      }\n      return true;\n    }\n    return false;\n  }\n  function getMissed() {\n    return missed;\n  }\n  return { placeBoat, board, receiveAttack, getMissed };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);\n\n\n//# sourceURL=webpack://project-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _doms_createDomForBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doms/createDomForBoard */ \"./src/doms/createDomForBoard.js\");\n\n\n\n\nfunction newGame(size = 8) {\n  let newPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bob\");\n  let computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bob\", true);\n  (0,_doms_createDomForBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(size);\n  (0,_doms_createDomForBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(size);\n}\n\nnewGame();\n\n\n//# sourceURL=webpack://project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Player(name, computer = false) {\n  let ships = [];\n  function addShip(Ship) {\n    ships.push(Ship);\n  }\n  function makeMove() {}\n  return {\n    addShip,\n    name,\n    computer,\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://project-battleship/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;