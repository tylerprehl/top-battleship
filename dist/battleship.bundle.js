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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\n\n\n\nconsole.log('Starting Game');\n\nconsole.log('Get Player 1 Name');\nconst player1Name = prompt('Player 1 Name');\nconst player1 = _player_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer(player1Name, _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard());\nif (player1Name.length === 0) {\n  throw new Error('stop game');\n}\n\nconsole.log('Get Player 2 Name');\nconst player2Name = prompt('Player 2 Name');\nconst player2 = _player_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer(player2Name, _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard());\n\nconst shipLengths = [2]\n\nconsole.log('Starting the actual game...');\n\nlet startingPlayer = player1; // used for swapping starting player between games\nlet secondPlayer = player2;\n\nlet currentPlayer = startingPlayer; // used for game setup\nlet enemyPlayer = secondPlayer;\n\nlet playAgain = false;\n\ndo {\n\n  // placing ships by player will be a full function/class\n  console.log('Get Player 1 Ship Locations');\n  alert('Get Player 1 Ship Locations');\n  let shipsPlacedCount = 0; \n  while(shipsPlacedCount < shipLengths.length) {\n    try {\n      alert(`This ship will be ${shipLengths[shipsPlacedCount]} in length`);\n  \n      const shipInfoStr = prompt(\n        'Enter ship info\\n' +\n        'Ex: h,0,1 will be horizontal, starting at row 0, col 1'\n      )\n      const shipInfoArr = shipInfoStr.split(',');\n  \n      // getShipOrientation will be a radio button selection eventually\n      let orientation = shipInfoArr[0];\n      if (orientation === 'v') {\n        orientation = 'vertical';\n      }\n      else if (orientation === 'h') {\n        orientation = 'horizontal';\n      }\n      else {\n        throw new Error('invalid orientation');\n      }\n  \n      // getShipStartCoordinates will be some type of table-click selection\n      // because only table clicks will queue placeShip, sending a starting coordinate \n      // that is out of bounds is impossilbe\n      // (would be cool if there's a faded version of ship until placed)\n      player1.playerBoard.placeShip(\n        _ship_js__WEBPACK_IMPORTED_MODULE_2__.createShip(shipLengths[shipsPlacedCount]),\n        orientation,\n        Number(shipInfoArr[1]),\n        Number(shipInfoArr[2])\n      )\n      shipsPlacedCount++;\n    } catch (e) {\n      alert(`Error: ${e.message}\\nPlease try again`);\n    }\n  }\n  \n  console.log('Get Player 2 Ship Locations');\n  alert('Get Player 2 Ship Locations');\n  shipsPlacedCount = 0; \n  while(shipsPlacedCount < shipLengths.length) {\n    try {\n      alert(`This ship will be ${shipLengths[shipsPlacedCount]} in length`);\n  \n      const shipInfoStr = prompt(\n        'Enter ship info\\n' +\n        'Ex: h,0,1 will be horizontal, starting at row 0, col 1'\n      )\n      const shipInfoArr = shipInfoStr.split(',');\n  \n      // getShipOrientation will be a radio button selection eventually\n      let orientation = shipInfoArr[0];\n      if (orientation === 'v') {\n        orientation = 'vertical';\n      }\n      else if (orientation === 'h') {\n        orientation = 'horizontal';\n      }\n      else {\n        throw new Error('invalid orientation');\n      }\n  \n      // getShipStartCoordinates will be some type of table-click selection\n      // because only table clicks will queue placeShip, sending a starting coordinate \n      // that is out of bounds is impossilbe\n      // (would be cool if there's a faded version of ship until placed)\n      player2.playerBoard.placeShip(\n        _ship_js__WEBPACK_IMPORTED_MODULE_2__.createShip(shipLengths[shipsPlacedCount]),\n        orientation,\n        Number(shipInfoArr[1]),\n        Number(shipInfoArr[2])\n      )\n      shipsPlacedCount++;\n    } catch (e) {\n      alert(`Error: ${e.message}\\nPlease try again`);\n    }\n  }\n\n  alert('And the gameplay begins!');\n\n  while (player1.playerBoard.allShipsAreSunk() === false && \n  player2.playerBoard.allShipsAreSunk() === false) {\n  \n    alert(`${currentPlayer.playerName}, it's your turn`);\n    \n    const attackCoordinatesStr = prompt(`Pick a coordinate to attack\\nEx: 1,1`);\n    const attackCoordinatesArr = attackCoordinatesStr.split(',');\n    \n    try {\n      const successfulAttack = enemyPlayer.playerBoard.receiveAttack(\n        Number(attackCoordinatesArr[0]),\n        Number(attackCoordinatesArr[1])\n      );\n      \n      if (successfulAttack) {\n        alert(`Nice hit!`);\n      }\n      else {\n        alert(`Miss!`);\n      }\n    \n      // switch turns\n      const tempPlayer = currentPlayer;\n      currentPlayer = enemyPlayer;\n      enemyPlayer = tempPlayer;\n    \n    } catch (e) {\n      alert(`Error: ${e.message}\\nPlease try again`);\n    }\n  }\n\n  console.log('Someone won the game!');\n\n  // this can definitely be a function\n  if (player1.playerBoard.allShipsAreSunk() === true) {\n    alert(`${player2.playerName} won the game!`);\n    player2.increaseWinCount();\n  }\n  else if (player2.playerBoard.allShipsAreSunk() === true) {\n    alert(`${player1.playerName} won the game!`);\n    player1.increaseWinCount();\n  }\n  else {\n    console.log('Actually, something went wrong cause nobody won');\n  }\n\n  // this can definitely be a function\n  const playAgainStr = prompt('Play again? (true/false)');\n  if (playAgainStr === 'true') {\n    playAgain = true;\n  }\n  else if (playAgainStr === 'false') {\n    playAgain = false;\n  }\n  else {\n    alert('You didn\\'t enter true OR false, so we\\'re gonna end it.');\n    playAgain = false;\n  }\n\n\n  // this can definitely be a function\n  if (playAgain) {\n    console.log('Playing again!...');\n    let tempPlayer = startingPlayer;\n    startingPlayer = secondPlayer;\n    secondPlayer = tempPlayer;\n\n    currentPlayer = startingPlayer;\n    enemyPlayer = secondPlayer;\n\n    player1.playerBoard.resetBoard();\n    player2.playerBoard.resetBoard();\n  }\n\n} while (playAgain)\n  \nconsole.log('Finished playing');\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameboard: () => (/* binding */ createGameboard)\n/* harmony export */ });\nfunction createGameboard() {\n  let gameboard = [];\n  for (let i = 0; i < 8; i++) {\n    gameboard[i] = [];\n    for (let j = 0; j < 8; j++) {\n      gameboard[i][j] = { ship: '-', attacked: false };\n    }\n  }\n\n  let ships = [];\n\n  function resetBoard() {\n    let newGameboard = [];\n    for (let i = 0; i < 8; i++) {\n      newGameboard[i] = [];\n      for (let j = 0; j < 8; j++) {\n        newGameboard[i][j] = { ship: '-', attacked: false };\n      }\n    }\n    \n    gameboard = newGameboard;\n    ships = [];\n  }\n  \n  function placeShip(ship, orientation, startRowIndex, startColIndex) {\n    const shipLength = ship.length;\n    if (orientation === 'horizontal') {\n      // first check for errors\n      for (let i=startColIndex; i<startColIndex+shipLength; i++) {\n        if (i > 7) {\n          throw new Error('ship out of bounds');\n        }\n        if (gameboard[startRowIndex][i].ship !== '-') {\n          throw new Error('ship overlap');\n        }\n      }\n\n      // no errors, go ahead and add\n      for (let i=startColIndex; i<startColIndex+shipLength; i++) {\n        gameboard[startRowIndex][i] = { ship: ship, attacked: false };\n      }\n\n      ships.push(ship);\n    }\n    else if (orientation === 'vertical') {\n      // first check for errors\n      for (let i=startRowIndex; i<startRowIndex+shipLength; i++) {\n        if (i > 7) {\n          throw new Error('ship out of bounds');\n        }\n        if (gameboard[i][startColIndex].ship !== '-') {\n          throw new Error('ship overlap');\n        }\n      }\n\n      // no errors, go ahead and add\n      for (let i=startRowIndex; i<startRowIndex+shipLength; i++) {\n        gameboard[i][startColIndex] = { ship: ship, attacked: false };\n      }\n\n      ships.push(ship);\n    }\n  }\n\n  function receiveAttack(rowIndex, colIndex) {\n    // return true if the attack strikes a ship\n    // return false if the attack is a miss\n    if (gameboard[rowIndex][colIndex].attacked === true){\n      throw new Error('cannot attack same location twice');\n    }\n    gameboard[rowIndex][colIndex].attacked = true;\n    if (gameboard[rowIndex][colIndex].ship !== '-') {\n      gameboard[rowIndex][colIndex].ship.hit();\n      return true;\n    }\n    else {\n      return false;\n    }\n  }\n\n  function allShipsAreSunk() {\n    for (let i = 0; i < ships.length; i++ ) {\n      const ship = ships[i];\n      if (ship.isSunk() === false) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  // access to gameboard is only really necessary for testing purposes\n  // (some tests check specific coordinates, which requires access to the \n  // gameboard array itself)\n  return { gameboard, resetBoard, placeShip, receiveAttack, allShipsAreSunk };\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPlayer: () => (/* binding */ createPlayer)\n/* harmony export */ });\nfunction createPlayer(playerName, playerBoard) { \n  let winCount = 0;\n\n  function getWinCount() {\n    return winCount;\n  }\n\n  function increaseWinCount() {\n    winCount++;\n  }\n\n  return { playerName, playerBoard, getWinCount, increaseWinCount };\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createShip: () => (/* binding */ createShip)\n/* harmony export */ });\nfunction createShip(length) {\n  let hitCount = 0;\n\n  function getHitCount() {\n    return hitCount;\n  }\n\n  function hit() {\n    hitCount += 1;\n  }\n\n  function isSunk() {\n    if (hitCount === length) {\n      return true;\n    }\n    return false;\n  }\n\n  return { length, getHitCount, hit, isSunk };\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/ship.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/battleship.js");
/******/ 	
/******/ })()
;