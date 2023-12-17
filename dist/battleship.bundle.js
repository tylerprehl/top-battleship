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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n}\n\n.name-entry-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  column-gap: 50px;\n  row-gap: 20px;\n}\n\nform {\n  padding: 1em;\n  border: 1px solid #ccc;\n  border-radius: 1em;\n}\n\n.all-game-boards-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 100px;\n  row-gap: 50px;\n}\n\n.game-board-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px\n}\n\n.game-board-grid {\n  display: grid;\n  grid-template: repeat(9, 30px) / repeat(9, 30px);\n  width: 278px;\n  height: 278px;\n  gap: 1px;\n  border: 1px solid #ccc;\n  border-radius: 1em 1em 0 1em;\n}\n\n.game-board-row-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n.game-board-col-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n.game-board-block {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: lightblue;\n  position: relative;\n}\n\n.ship-end {\n  position: absolute;\n  border-top: 5px solid transparent;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 25px solid rgb(94, 94, 94);\n  z-index: 1;\n}\n\n.ship-body {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background-color: rgb(94, 94, 94);\n  z-index: 1;\n}\n\n.point-east {\n  transform: rotate(90deg);\n}\n\n.point-south {\n  transform: rotate(180deg);\n}\n\n.point-west {\n  transform: rotate(270deg);\n}\n\n.masked {\n  border: none;\n  background-color: lightgray;\n  width: 30px;\n  height: 30px;\n  z-index: 2;\n}\n\n.hit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n\n.miss {\n  height: 5px;\n  width: 5px;\n  background-color: rgb(94, 94, 94);\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.full-reset-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _game_setup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-setup.js */ \"./src/game-setup.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n/*\nNotes (to Self) for Gameplay Design/Order\n- assign player1/player2 names\n- 'pass the computer' screen\n- build player1 board\n- 'pass' screen\n- build player2/AI board\n- game starts ('pass' screen)\n- player1 attacks\n  > can see own board unmasked and player 2's board masked\n- 'pass' screen\n- player2/AI attacks\n- 'pass' screen\n- etc...\n- player/AI win/play again/reset screen\n\n\n\nWhat are the next IMMEDIATE game setup activities?\n- display \"Player 1 turn\" empty screen\n  > remove all current elements except title\n    * boards\n    * reset buttons\n  > clicking anywhere continues to Player 1 board creation\n\n- on Player 1 board creation screen\n  > player's empty board\n  > submit button\n  > full reset button\n  > (eventually) reset board button\n\n- on Player 1 board submission\n  > display \"Player 2 turn\" empty screen\n    * remove all current elements except title\n    * clicking anywhere continues to Player 2 board creation\n\n\nGameplay Management:\n- Receive attack (already in gameboard)\n\nDOM Gameplay Management:\n- Attack hit\n- Attack miss\n\n*/\n\n\n\nconsole.log('Starting Game');\nlet player1 = null;\nlet player2 = null;\n\nlet startingPlayer = player1; // used for swapping starting player between games\nlet secondPlayer = player2;\n\nlet currentPlayer = startingPlayer; // used for game setup\nlet enemyPlayer = secondPlayer;\n\nconst shipLengths = [2,2,3,3,4]\nlet playAgain = false;\n\n// ***************************************\n// ************* GAME SETUP **************\n// ***************************************\nlistenForPlayerName();\n\n\n\n\n\nthrow new Error('stop game');\n\nconsole.log('Starting the actual game...');\n// ***************************************\n// ************** GAME LOOP **************\n// ***************************************\n\ndo {\n// ***************************************\n// ********** STILL GAME SETUP ***********\n// ***************************************\n  // placing ships by player will be a full function/class\n  console.log('Get Player 1 Ship Locations');\n  alert('Get Player 1 Ship Locations');\n  let shipsPlacedCount = 0; \n  while(shipsPlacedCount < shipLengths.length) {\n    try {\n      alert(`This ship will be ${shipLengths[shipsPlacedCount]} in length`);\n  \n      const shipInfoStr = prompt(\n        'Enter ship info\\n' +\n        'Ex: h,0,1 will be horizontal, starting at row 0, col 1'\n      )\n      const shipInfoArr = shipInfoStr.split(',');\n  \n      // getShipOrientation will be a radio button selection eventually\n      let orientation = shipInfoArr[0];\n      if (orientation === 'v') {\n        orientation = 'vertical';\n      }\n      else if (orientation === 'h') {\n        orientation = 'horizontal';\n      }\n      else {\n        throw new Error('invalid orientation');\n      }\n  \n      // getShipStartCoordinates will be some type of table-click selection\n      // because only table clicks will queue placeShip, sending a starting coordinate \n      // that is out of bounds is impossilbe\n      // (would be cool if there's a faded version of ship until placed)\n      player1.playerBoard.placeShip(\n        _ship_js__WEBPACK_IMPORTED_MODULE_2__.createShip(shipLengths[shipsPlacedCount]),\n        orientation,\n        Number(shipInfoArr[1]),\n        Number(shipInfoArr[2])\n      )\n      shipsPlacedCount++;\n    } catch (e) {\n      alert(`Error: ${e.message}\\nPlease try again`);\n    }\n  }\n  \n  console.log('Get Player 2 Ship Locations');\n  alert('Get Player 2 Ship Locations');\n  shipsPlacedCount = 0; \n  while(shipsPlacedCount < shipLengths.length) {\n    try {\n      alert(`This ship will be ${shipLengths[shipsPlacedCount]} in length`);\n  \n      const shipInfoStr = prompt(\n        'Enter ship info\\n' +\n        'Ex: h,0,1 will be horizontal, starting at row 0, col 1'\n      )\n      const shipInfoArr = shipInfoStr.split(',');\n  \n      // getShipOrientation will be a radio button selection eventually\n      let orientation = shipInfoArr[0];\n      if (orientation === 'v') {\n        orientation = 'vertical';\n      }\n      else if (orientation === 'h') {\n        orientation = 'horizontal';\n      }\n      else {\n        throw new Error('invalid orientation');\n      }\n  \n      // getShipStartCoordinates will be some type of table-click selection\n      // because only table clicks will queue placeShip, sending a starting coordinate \n      // that is out of bounds is impossilbe\n      // (would be cool if there's a faded version of ship until placed)\n      player2.playerBoard.placeShip(\n        _ship_js__WEBPACK_IMPORTED_MODULE_2__.createShip(shipLengths[shipsPlacedCount]),\n        orientation,\n        Number(shipInfoArr[1]),\n        Number(shipInfoArr[2])\n      )\n      shipsPlacedCount++;\n    } catch (e) {\n      alert(`Error: ${e.message}\\nPlease try again`);\n    }\n  }\n\n  alert('And the gameplay begins!');\n\n\n// ***************************************\n// ******** GAMEPLAY LOOP BEGINS *********\n// ***************************************\n  while (player1.playerBoard.allShipsAreSunk() === false && \n  player2.playerBoard.allShipsAreSunk() === false) {\n  \n    alert(`${currentPlayer.playerName}, it's your turn`);\n    \n    const attackCoordinatesStr = prompt(`Pick a coordinate to attack\\nEx: 1,1`);\n    const attackCoordinatesArr = attackCoordinatesStr.split(',');\n    \n    try {\n      const successfulAttack = enemyPlayer.playerBoard.receiveAttack(\n        Number(attackCoordinatesArr[0]),\n        Number(attackCoordinatesArr[1])\n      );\n      \n      if (successfulAttack) {\n        alert(`Nice hit!`);\n      }\n      else {\n        alert(`Miss!`);\n      }\n    \n      // switch turns\n      const tempPlayer = currentPlayer;\n      currentPlayer = enemyPlayer;\n      enemyPlayer = tempPlayer;\n    \n    } catch (e) {\n      alert(`Error: ${e.message}\\nPlease try again`);\n    }\n  }\n\n  console.log('Someone won the game!');\n\n  // this can definitely be a function\n  if (player1.playerBoard.allShipsAreSunk() === true) {\n    alert(`${player2.playerName} won the game!`);\n    player2.increaseWinCount();\n  }\n  else if (player2.playerBoard.allShipsAreSunk() === true) {\n    alert(`${player1.playerName} won the game!`);\n    player1.increaseWinCount();\n  }\n  else {\n    console.log('Actually, something went wrong cause nobody won');\n  }\n\n  // this can definitely be a function\n  const playAgainStr = prompt('Play again? (true/false)');\n  if (playAgainStr === 'true') {\n    playAgain = true;\n  }\n  else if (playAgainStr === 'false') {\n    playAgain = false;\n  }\n  else {\n    alert('You didn\\'t enter true OR false, so we\\'re gonna end it.');\n    playAgain = false;\n  }\n\n\n  // this can definitely be a function\n  if (playAgain) {\n    console.log('Playing again!...');\n    let tempPlayer = startingPlayer;\n    startingPlayer = secondPlayer;\n    secondPlayer = tempPlayer;\n\n    currentPlayer = startingPlayer;\n    enemyPlayer = secondPlayer;\n\n    player1.playerBoard.resetBoard();\n    player2.playerBoard.resetBoard();\n  }\n\n} while (playAgain)\n  \nconsole.log('Finished playing');\n\n\n\n\n\n\n\n\n// ***********************************************\n// ************* LISTENER FUNCTIONS **************\n// ***********************************************\n// Because listeners don't return data to where they were called,\n// but we want them to be able to access over-arching game data \n// (like the Players), they 'need' to be a part of battleship.js\n//\n// 'need' is quoted because I'm sure it's possible, just not with\n// what I currently know\n\nfunction listenForPlayerName() {\n  const playerNameForms = document.querySelectorAll('.name-entry-form');\n  playerNameForms.forEach((playerNameForm) => {\n    playerNameForm.addEventListener('submit', createPlayer);\n  });\n}\n\nfunction createPlayer(event) {\n  event.preventDefault();\n  const playerNum = event.srcElement[0].name.split('_')[1];\n  const playerName = event.srcElement[0].value;\n  console.log(`Player ${playerNum}: ${playerName}`);\n\n  if (playerName.length === 0) {\n    throw new Error('Name must be at least 1 character long');\n  }\n\n  if (playerNum === '1') {\n    player1 = _player_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer(\n      playerName,\n      _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard(),\n      _game_setup_js__WEBPACK_IMPORTED_MODULE_3__.createBaseHtmlGameboard(8),\n      null\n    );\n  }\n  else {\n    player2 = _player_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer(\n      playerName,\n      _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.createGameboard(),\n      _game_setup_js__WEBPACK_IMPORTED_MODULE_3__.createBaseHtmlGameboard(8),\n      null\n    );\n  }\n\n  // if both players are assigned, start the gameSetup\n  if (player1 !== null && player2 !== null) {\n    console.log('Ready to start the game!');\n    _game_setup_js__WEBPACK_IMPORTED_MODULE_3__.hidePlayerNameForms();\n    displayFullResetButton();\n    // next steps for game start!\n  }\n}\n\n\n\nfunction displayFullResetButton() {\n  const fullResetButton = document.querySelector('.full-reset-button');\n  fullResetButton.style.display = 'flex';\n  fullResetButton.addEventListener('onclick', onFullReset);\n}\n\nfunction hideFullResetButton() {\n  const fullResetButton = document.querySelector('.full-reset-button');\n  fullResetButton.style.display = 'none';\n}\n\nfunction onFullReset() {\n  _game_setup_js__WEBPACK_IMPORTED_MODULE_3__.displayPlayerNameForms();\n\n  player1 = null;\n  player2 = null;\n\n  startingPlayer = null;\n  secondPlayer = null;\n\n  currentPlayer = null;\n  enemyPlayer = null;\n\n  playAgain = false;\n\n  // remove whatever boards are currently showing\n}\n\n//# sourceURL=webpack://top-battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/game-setup.js":
/*!***************************!*\
  !*** ./src/game-setup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBaseHtmlGameboard: () => (/* binding */ createBaseHtmlGameboard),\n/* harmony export */   displayPlayerNameForms: () => (/* binding */ displayPlayerNameForms),\n/* harmony export */   hidePlayerNameForms: () => (/* binding */ hidePlayerNameForms)\n/* harmony export */ });\n/*\nGame Setup:\n- Get Player name\n  > require SOME name (form validation)\n- Get Ship starting coordinate\n- Get Ship orientation\n- Restart Game (restart with same players)\n- Reset from Scratch (restart with new players)\n\nDOM Game Setup:\n- Get Player name\n  > require SOME name (form validation)\n- Create Gameboard\n  > unmasked for game setup while player places ships\n- Mask Gameboard\n  > creates a second copy of the gameboard, but masked\n  > both copies should be updated on any change\n- Place Ship\n*/\nfunction createBaseHtmlGameboard(numRows) {\n  // creates the base HTML gameboard to be saved as a variable\n  // size is based on numRows provided (will ALWAYS be a square board)\n  // variable size does NOT currently work due to CSS specifications!!\n\n  const baseGameboardContainer = document.createElement('div');\n  baseGameboardContainer.classList.add('game-board-container');\n\n  const gameboardLabel = document.createElement('div');\n  gameboardLabel.classList.add('game-board-label')\n  gameboardLabel.textContent = 'My Board';\n  baseGameboardContainer.appendChild(gameboardLabel);\n\n  const rowHeaderDiv = document.createElement('div');\n  rowHeaderDiv.classList.add('game-board-row-header');\n\n  const colHeaderDiv = document.createElement('div');\n  colHeaderDiv.classList.add('game-board-col-header');\n\n  const gameBoardBlockDiv = document.createElement('div');\n  gameBoardBlockDiv.classList.add('game-board-block');\n\n  const baseGameboardGrid = document.createElement('div');\n  baseGameboardGrid.classList.add('game-board-grid');\n\n  // add the starting row header (the upper-left corner block)\n  baseGameboardGrid.appendChild(rowHeaderDiv.cloneNode());\n\n  // add the starting col headers\n  for (let i = 0; i < numRows; i++) {\n    const letter = String.fromCharCode(65 + i);\n    const newColHeaderDiv = colHeaderDiv.cloneNode();\n    newColHeaderDiv.textContent = letter;\n    baseGameboardGrid.appendChild(newColHeaderDiv);\n  }\n  \n  // add all of the following rows\n  for (let i = 0; i < numRows; i++) {\n    const newRowHeaderDiv = rowHeaderDiv.cloneNode();\n    newRowHeaderDiv.textContent = i+1;\n    baseGameboardGrid.appendChild(newRowHeaderDiv);\n\n    for (let j = 0; j < numRows; j++) {\n      const newGameBoardBlockDiv = gameBoardBlockDiv.cloneNode();\n      newGameBoardBlockDiv['id'] = i.toString() + '-' + j.toString();\n      baseGameboardGrid.appendChild(newGameBoardBlockDiv);\n    }\n  }\n  \n  baseGameboardContainer.appendChild(baseGameboardGrid);\n\n  return baseGameboardContainer;\n}\n\nfunction hidePlayerNameForms() {\n  const playerNameFormContainer = document.querySelector('.name-entry-container');\n  playerNameFormContainer.style.display = none;\n}\n\nfunction displayPlayerNameForms() {\n  const playerNameFormContainer = document.querySelector('.name-entry-container');\n  playerNameFormContainer.style.display = 'flex';\n}\n\n\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/game-setup.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPlayer: () => (/* binding */ createPlayer)\n/* harmony export */ });\nfunction createPlayer(\n  playerName,\n  playerBoard,\n  playerBoardPersonalViewHtml,\n  playerBoardMaskedHtml\n) {\n  let winCount = 0;\n\n  function getWinCount() {\n    return winCount;\n  }\n\n  function increaseWinCount() {\n    winCount++;\n  }\n\n  return {\n    playerName,\n    playerBoard,\n    playerBoardPersonalViewHtml,\n    playerBoardMaskedHtml,\n    getWinCount,\n    increaseWinCount,\n  };\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/player.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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