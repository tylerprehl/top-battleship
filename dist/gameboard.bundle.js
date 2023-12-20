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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameboard: () => (/* binding */ createGameboard)\n/* harmony export */ });\nfunction createGameboard(size) {\n// note - although the createGameboard is configured to be able to handle a variable\n// size board, the CSS does not currently allow for it!\n\n  let gameboard = [];\n  for (let i = 0; i < size; i++) {\n    gameboard[i] = [];\n    for (let j = 0; j < size; j++) {\n      gameboard[i][j] = { ship: '-', attacked: false };\n    }\n  }\n\n  let ships = [];\n\n  function resetBoard() {\n    let newGameboard = [];\n    for (let i = 0; i < size; i++) {\n      newGameboard[i] = [];\n      for (let j = 0; j < size; j++) {\n        newGameboard[i][j] = { ship: '-', attacked: false };\n      }\n    }\n    \n    gameboard = newGameboard;\n    ships = [];\n  }\n  \n  function placeShip(ship, orientation, startRowIndex, startColIndex) {\n    const shipLength = ship.length;\n    if (orientation === 'horizontal') {\n      // first check for errors\n      for (let i=startColIndex; i<startColIndex+shipLength; i++) {\n        if (i > size-1) {\n          throw new Error('ship out of bounds');\n        }\n        if (gameboard[startRowIndex][i].ship !== '-') {\n          throw new Error('ship overlap');\n        }\n      }\n\n      // no errors, go ahead and add\n      for (let i=startColIndex; i<startColIndex+shipLength; i++) {\n        gameboard[startRowIndex][i] = { ship: ship, attacked: false };\n      }\n\n      ships.push(ship);\n    }\n    else if (orientation === 'vertical') {\n      // first check for errors\n      for (let i=startRowIndex; i<startRowIndex+shipLength; i++) {\n        if (i > size-1) {\n          throw new Error('ship out of bounds');\n        }\n        if (gameboard[i][startColIndex].ship !== '-') {\n          throw new Error('ship overlap');\n        }\n      }\n\n      // no errors, go ahead and add\n      for (let i=startRowIndex; i<startRowIndex+shipLength; i++) {\n        gameboard[i][startColIndex] = { ship: ship, attacked: false };\n      }\n\n      ships.push(ship);\n    }\n  }\n\n  function receiveAttack(rowIndex, colIndex) {\n    // return true if the attack strikes a ship\n    // return false if the attack is a miss\n    if (gameboard[rowIndex][colIndex].attacked === true){\n      throw new Error('cannot attack same location twice');\n    }\n\n    gameboard[rowIndex][colIndex].attacked = true;\n    if (gameboard[rowIndex][colIndex].ship !== '-') {\n      gameboard[rowIndex][colIndex].ship.hit();\n      return true;\n    }\n    else {\n      return false;\n    }\n  }\n\n  function getShipCoordinatesList(ship) {\n    let shipCoordinatesList = [];\n    for (let i = 0; i < size; i++) {\n      for (let j = 0; j < size; j++) {\n        if (gameboard[i][j].ship === ship) {\n          shipCoordinatesList.push([i,j]);\n        }\n      }\n    }\n    return shipCoordinatesList;\n  }\n\n  function allShipsAreSunk() {\n    for (let i = 0; i < ships.length; i++ ) {\n      const ship = ships[i];\n      if (ship.isSunk() === false) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  return { gameboard, resetBoard, placeShip, receiveAttack, getShipCoordinatesList, allShipsAreSunk };\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/gameboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/gameboard.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;