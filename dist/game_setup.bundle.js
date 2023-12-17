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

/***/ "./src/game-setup.js":
/*!***************************!*\
  !*** ./src/game-setup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBaseHtmlGameboard: () => (/* binding */ createBaseHtmlGameboard)\n/* harmony export */ });\n/*\nGame Setup:\n- Get Player name\n  > require SOME name (form validation)\n- Get Ship starting coordinate\n- Get Ship orientation\n- Restart Game (restart with same players)\n- Reset from Scratch (restart with new players)\n\nDOM Game Setup:\n- Get Player name\n  > require SOME name (form validation)\n- Create Gameboard\n  > unmasked for game setup while player places ships\n- Mask Gameboard\n  > creates a second copy of the gameboard, but masked\n  > both copies should be updated on any change\n- Place Ship\n*/\nfunction createBaseHtmlGameboard(numRows) {\n  // creates the base HTML gameboard to be saved as a variable\n  // size is based on numRows provided (will ALWAYS be a square board)\n  // variable size does NOT currently work due to CSS specifications!!\n\n  const baseGameboardContainer = document.createElement('div');\n  baseGameboardContainer.classList.add('game-board-container');\n\n  const gameboardLabel = document.createElement('div');\n  gameboardLabel.classList.add('game-board-label')\n  gameboardLabel.textContent = 'My Board';\n  baseGameboardContainer.appendChild(gameboardLabel);\n\n  const rowHeaderDiv = document.createElement('div');\n  rowHeaderDiv.classList.add('game-board-row-header');\n\n  const colHeaderDiv = document.createElement('div');\n  colHeaderDiv.classList.add('game-board-col-header');\n\n  const gameBoardBlockDiv = document.createElement('div');\n  gameBoardBlockDiv.classList.add('game-board-block');\n\n  const baseGameboardGrid = document.createElement('div');\n  baseGameboardGrid.classList.add('game-board-grid');\n\n  // add the starting row header (the upper-left corner block)\n  baseGameboardGrid.appendChild(rowHeaderDiv.cloneNode());\n\n  // add the starting col headers\n  for (let i = 0; i < numRows; i++) {\n    const letter = String.fromCharCode(65 + i);\n    const newColHeaderDiv = colHeaderDiv.cloneNode();\n    newColHeaderDiv.textContent = letter;\n    baseGameboardGrid.appendChild(newColHeaderDiv);\n  }\n  \n  // add all of the following rows\n  for (let i = 0; i < numRows; i++) {\n    const newRowHeaderDiv = rowHeaderDiv.cloneNode();\n    newRowHeaderDiv.textContent = i+1;\n    baseGameboardGrid.appendChild(newRowHeaderDiv);\n\n    for (let j = 0; j < numRows; j++) {\n      const newGameBoardBlockDiv = gameBoardBlockDiv.cloneNode();\n      newGameBoardBlockDiv['id'] = i.toString() + '-' + j.toString();\n      baseGameboardGrid.appendChild(newGameBoardBlockDiv);\n    }\n  }\n  \n  baseGameboardContainer.appendChild(baseGameboardGrid);\n\n  return baseGameboardContainer;\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/game-setup.js?");

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
/******/ 	__webpack_modules__["./src/game-setup.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;