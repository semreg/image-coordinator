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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/env_development.json":
/*!*************************************!*\
  !*** ./config/env_development.json ***!
  \*************************************/
/*! exports provided: name, description, default */
/***/ (function(module) {

module.exports = {"name":"development","description":"Add here any environment specific stuff you like."};

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppUpdater; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron_updater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-updater */ "electron-updater");
/* harmony import */ var electron_updater__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_updater__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var electron_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron-log */ "electron-log");
/* harmony import */ var electron_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron_log__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_dev_menu_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/dev_menu_template */ "./src/menu/dev_menu_template.js");
/* harmony import */ var env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! env */ "./config/env_development.json");
var env__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! env */ "./config/env_development.json", 1);
/* eslint global-require: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */







class AppUpdater {
  constructor() {
    electron_log__WEBPACK_IMPORTED_MODULE_2___default.a.transports.file.level = 'info';
    electron_updater__WEBPACK_IMPORTED_MODULE_1__["autoUpdater"].logger = electron_log__WEBPACK_IMPORTED_MODULE_2___default.a;
    electron_updater__WEBPACK_IMPORTED_MODULE_1__["autoUpdater"].checkForUpdatesAndNotify();
  }

}
let mainWindow = null;

const setApplicationMenu = () => {
  const menus = []; // if (env.name !== 'production') {
  //   menus.push(devMenuTemplate)
  // }

  electron__WEBPACK_IMPORTED_MODULE_0__["Menu"].setApplicationMenu(electron__WEBPACK_IMPORTED_MODULE_0__["Menu"].buildFromTemplate(menus));
};

if (false) {}

if (true) {
  __webpack_require__(/*! electron-debug */ "electron-debug")();
}

const installExtensions = async () => {
  const installer = __webpack_require__(/*! electron-devtools-installer */ "electron-devtools-installer");

  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
  return Promise.all(extensions.map(name => installer.default(installer[name], forceDownload))).catch(console.log);
};
/**
 * Add event listeners...
 */


electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
  }
});
electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('ready', async () => {
  setApplicationMenu();

  if (true) {
    await installExtensions();
  }

  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
    show: false,
    width: 1366,
    height: 800
  });
  mainWindow.loadURL(url__WEBPACK_IMPORTED_MODULE_3___default.a.format({
    pathname: path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, './index.html'),
    protocol: 'file:',
    slashes: true
  })); // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event

  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }

    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
  }); // Remove this if your app does not use auto updates
  // eslint-disable-next-line

  new AppUpdater();
});

/***/ }),

/***/ "./src/menu/dev_menu_template.js":
/*!***************************************!*\
  !*** ./src/menu/dev_menu_template.js ***!
  \***************************************/
/*! exports provided: devMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devMenuTemplate", function() { return devMenuTemplate; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);

const devMenuTemplate = {
  label: 'Development',
  submenu: [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: () => {
      electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"].getFocusedWindow().webContents.reloadIgnoringCache();
    }
  }, {
    label: 'Toggle DevTools',
    accelerator: 'Alt+CmdOrCtrl+I',
    click: () => {
      electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"].getFocusedWindow().toggleDevTools();
    }
  }, {
    label: 'Quit',
    accelerator: 'CmdOrCtrl+Q',
    click: () => {
      electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
    }
  }]
};

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "electron-debug":
/*!*********************************!*\
  !*** external "electron-debug" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-debug");

/***/ }),

/***/ "electron-devtools-installer":
/*!**********************************************!*\
  !*** external "electron-devtools-installer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-devtools-installer");

/***/ }),

/***/ "electron-log":
/*!*******************************!*\
  !*** external "electron-log" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-log");

/***/ }),

/***/ "electron-updater":
/*!***********************************!*\
  !*** external "electron-updater" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-updater");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=background.js.map