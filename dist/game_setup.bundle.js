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

/***/ "./src/game-management.js":
/*!********************************!*\
  !*** ./src/game-management.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBaseHtmlGameboard: () => (/* binding */ createBaseHtmlGameboard),\n/* harmony export */   displayMessage: () => (/* binding */ displayMessage),\n/* harmony export */   displayOrientationRadio: () => (/* binding */ displayOrientationRadio),\n/* harmony export */   displayPlayerBoardMasked: () => (/* binding */ displayPlayerBoardMasked),\n/* harmony export */   displayPlayerBoardPersonalView: () => (/* binding */ displayPlayerBoardPersonalView),\n/* harmony export */   displayPlayerNameForms: () => (/* binding */ displayPlayerNameForms),\n/* harmony export */   hideOrientationRadio: () => (/* binding */ hideOrientationRadio),\n/* harmony export */   hidePlayerNameForms: () => (/* binding */ hidePlayerNameForms),\n/* harmony export */   maskPlayerBoard: () => (/* binding */ maskPlayerBoard),\n/* harmony export */   placeShipInHtml: () => (/* binding */ placeShipInHtml),\n/* harmony export */   removeAllBoardsFromScreen: () => (/* binding */ removeAllBoardsFromScreen),\n/* harmony export */   removeMessage: () => (/* binding */ removeMessage)\n/* harmony export */ });\n/*\nGame Setup:\n- Get Player name\n  > require SOME name (form validation)\n- Get Ship starting coordinate\n- Get Ship orientation\n- Restart Game (restart with same players)\n- Reset from Scratch (restart with new players)\n\nDOM Game Setup:\n- Get Player name\n  > require SOME name (form validation)\n- Create Gameboard\n  > unmasked for game setup while player places ships\n- Mask Gameboard\n  > creates a second copy of the gameboard, but masked\n  > both copies should be updated on any change\n- Place Ship\n*/\nfunction createBaseHtmlGameboard(numRows, playerName) {\n  // creates the base HTML gameboard to be saved as a variable\n  // size is based on numRows provided (will ALWAYS be a square board)\n  // variable size does NOT currently work due to CSS specifications!!\n\n  const baseGameboardContainer = document.createElement('div');\n  baseGameboardContainer.classList.add('game-board-container');\n\n  const gameboardLabel = document.createElement('div');\n  gameboardLabel.classList.add('game-board-label')\n  gameboardLabel.textContent = `${playerName}'s Board`;\n  baseGameboardContainer.appendChild(gameboardLabel);\n\n  const rowHeaderDiv = document.createElement('div');\n  rowHeaderDiv.classList.add('game-board-row-header');\n\n  const colHeaderDiv = document.createElement('div');\n  colHeaderDiv.classList.add('game-board-col-header');\n\n  const gameBoardBlockDiv = document.createElement('div');\n  gameBoardBlockDiv.classList.add('game-board-block');\n\n  const baseGameboardGrid = document.createElement('div');\n  baseGameboardGrid.classList.add('game-board-grid');\n\n  // add the starting row header (the upper-left corner block)\n  baseGameboardGrid.appendChild(rowHeaderDiv.cloneNode());\n\n  // add the starting col headers\n  for (let i = 0; i < numRows; i++) {\n    const letter = String.fromCharCode(65 + i);\n    const newColHeaderDiv = colHeaderDiv.cloneNode();\n    newColHeaderDiv.textContent = letter;\n    baseGameboardGrid.appendChild(newColHeaderDiv);\n  }\n  \n  // add all of the following rows\n  for (let i = 0; i < numRows; i++) {\n    const newRowHeaderDiv = rowHeaderDiv.cloneNode();\n    newRowHeaderDiv.textContent = i+1;\n    baseGameboardGrid.appendChild(newRowHeaderDiv);\n\n    for (let j = 0; j < numRows; j++) {\n      const newGameBoardBlockDiv = gameBoardBlockDiv.cloneNode();\n      newGameBoardBlockDiv['id'] = 'c-' + i.toString() + '-' + j.toString();\n      baseGameboardGrid.appendChild(newGameBoardBlockDiv);\n    }\n  }\n  \n  baseGameboardContainer.appendChild(baseGameboardGrid);\n\n  return baseGameboardContainer;\n}\n\nfunction hidePlayerNameForms() {\n  const playerNameFormContainer = document.querySelector('.name-entry-container');\n  playerNameFormContainer.style.display = 'none';\n}\n\nfunction displayPlayerNameForms() {\n  const playerNameFormContainer = document.querySelector('.name-entry-container');\n  playerNameFormContainer.style.display = 'flex';\n}\n\nfunction removeAllBoardsFromScreen() {\n  const allBoardContainers = document.querySelectorAll('.game-board-container');\n  allBoardContainers.forEach((gameBoardContainer) => {\n    gameBoardContainer.remove();\n  });\n}\n\nfunction displayPlayerBoardPersonalView(player) {\n  const board = player.playerBoardPersonalView;\n  const allBoardsContainer = document.querySelector('.all-game-boards-container');\n  allBoardsContainer.appendChild(board);\n}\n\nfunction displayPlayerBoardMasked(player) {\n  const board = player.playerBoardMaskedView;\n  const allBoardsContainer = document.querySelector('.all-game-boards-container');\n  allBoardsContainer.appendChild(board);\n}\n\nfunction hideOrientationRadio() {\n  const orientationChoiceContainer = document.querySelector('.orientation-choice-container');\n  orientationChoiceContainer.style.display = 'none';\n\n  document.querySelector('#horizontal').checked = true;\n}\n\nfunction displayOrientationRadio() {\n  const orientationChoiceContainer = document.querySelector('.orientation-choice-container');\n  orientationChoiceContainer.style.display = 'flex';\n}\n\nfunction removeMessage() {\n  try {\n    const messageContainerDiv = document.querySelector('.message-container');\n    messageContainerDiv.remove();\n  } catch (e) {\n    return;\n  }\n}\n\nfunction displayMessage(subjectText, detailsText) {\n  const messageContainerDiv = document.createElement('div');\n  messageContainerDiv.classList.add('message-container');\n\n  const messageSubjectDiv = document.createElement('div');\n  messageSubjectDiv.classList.add('message-head');\n  messageSubjectDiv.textContent = subjectText;\n  messageContainerDiv.appendChild(messageSubjectDiv);\n\n  const messageBodyDiv = document.createElement('div');\n  messageBodyDiv.classList.add('message-body');\n  messageBodyDiv.textContent = detailsText;\n  messageContainerDiv.appendChild(messageBodyDiv);\n\n  const body = document.querySelector('body');\n  body.appendChild(messageContainerDiv);\n}\n\nfunction placeShipInHtml(playerBoardHtml, newShip, orientation, rowIndex, colIndex) {\n  const shipLength = newShip.length;\n  let curRowIndex = rowIndex;\n  let curColIndex = colIndex;\n\n  for (let i = 0; i < shipLength; i++) {\n    const gameBoardBlock = playerBoardHtml.querySelector(\n      `#c-${curRowIndex.toString()}-${curColIndex.toString()}`\n    );\n\n    // does this need to be playerBoardHtml for this to not write to the screen immediately?\n    // do the changes occur live because it was placed on screen?\n    const shipPieceDiv = document.createElement('div');\n\n    let pieceType = '';\n    let pieceDirection = '';\n    if (i === 0) {\n      pieceType = 'ship-end';\n      if (orientation === 'horizontal') {\n        pieceDirection = 'point-west';\n      }\n      else {\n        pieceDirection = 'point-north';\n      }\n      shipPieceDiv.classList.add(pieceDirection);\n    } \n    \n    else if (i === shipLength-1) {\n      pieceType = 'ship-end';\n      if (orientation === 'horizontal') {\n        pieceDirection = 'point-east';\n      }\n      else {\n        pieceDirection = 'point-south';\n      }\n      shipPieceDiv.classList.add(pieceDirection);\n    }\n    \n    else {\n      pieceType = 'ship-body';\n    }\n\n    shipPieceDiv.classList.add(pieceType);\n\n    gameBoardBlock.appendChild(shipPieceDiv);\n\n    if (orientation === 'horizontal') {\n      curColIndex++;\n    }\n    else {\n      curRowIndex++;\n    }\n  }\n\n  return playerBoardHtml;\n}\n\nfunction maskPlayerBoard(playerBoard) {\n  const maskDiv = document.createElement('div');\n  maskDiv.classList.add('masked');\n  const gameBoardBlocks = playerBoard.querySelectorAll('.game-board-block');\n  gameBoardBlocks.forEach((gameBoardBlock) => {\n    gameBoardBlock.appendChild(maskDiv.cloneNode());\n  });\n}\n\n\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/game-management.js?");

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
/******/ 	__webpack_modules__["./src/game-management.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;