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

/***/ "./public/js/components/beforeAuth/forms/formToggle.ts":
/*!*************************************************************!*\
  !*** ./public/js/components/beforeAuth/forms/formToggle.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showSignUpForm: () => (/* binding */ showSignUpForm)\n/* harmony export */ });\n/* harmony import */ var _registrationForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrationForm */ \"./public/js/components/beforeAuth/forms/registrationForm.ts\");\n\nvar loginForm = document.getElementById(\"login-form\");\nvar signupForm = document.getElementById(\"sign-up-form\");\nvar showSignUpForm = function () {\n    (0,_registrationForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (loginForm)\n        loginForm.style.display = \"none\";\n    if (signupForm)\n        signupForm.style.display = \"block\";\n};\nvar showLoginForm = function () {\n    if (signupForm && loginForm) {\n        signupForm.style.display = \"none\";\n        loginForm.style.display = \"block\";\n    }\n};\n\n\n//# sourceURL=webpack://social-app/./public/js/components/beforeAuth/forms/formToggle.ts?");

/***/ }),

/***/ "./public/js/components/beforeAuth/forms/loginForm.ts":
/*!************************************************************!*\
  !*** ./public/js/components/beforeAuth/forms/loginForm.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/auth */ \"./public/js/modules/auth.ts\");\n/* harmony import */ var _formToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formToggle */ \"./public/js/components/beforeAuth/forms/formToggle.ts\");\n\n\nvar html = \"<form class=\\\"form\\\">\\n            <h2>Log in</h2>\\n            <input\\n              id=\\\"loginEmail\\\"\\n              type=\\\"email\\\"\\n              name=\\\"email\\\"\\n              placeholder=\\\"email\\\"\\n              required\\n            />\\n\\n            <input\\n              id=\\\"loginPassword\\\"\\n              type=\\\"password\\\"\\n              name=\\\"password\\\"\\n              placeholder=\\\"Password\\\"\\n              required\\n            />\\n\\n            <button id=\\\"LoginBtn\\\" type=\\\"button\\\" class=\\\"LoginBtn\\\">Login</button>\\n            <p id=\\\"login-error-message\\\" class=\\\"auth-error-message\\\"></p>\\n            <div class=\\\"separator\\\"></div>\\n\\n\\n            <button type=\\\"button\\\" class=\\\"createBtn\\\" id=\\\"createAccountBtn\\\">\\n              Create Account\\n            </button>\\n          </form>\";\nvar renderLoginForm = function () {\n    var loginForm = document.getElementById(\"login-form\");\n    if (loginForm)\n        loginForm.innerHTML = html;\n    var loginButton = document.getElementById(\"LoginBtn\");\n    var createAccountBtn = document.getElementById(\"createAccountBtn\");\n    createAccountBtn === null || createAccountBtn === void 0 ? void 0 : createAccountBtn.addEventListener(\"click\", _formToggle__WEBPACK_IMPORTED_MODULE_1__.showSignUpForm);\n    loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener(\"click\", _modules_auth__WEBPACK_IMPORTED_MODULE_0__.login);\n    createAccountBtn === null || createAccountBtn === void 0 ? void 0 : createAccountBtn.addEventListener(\"click\", _formToggle__WEBPACK_IMPORTED_MODULE_1__.showSignUpForm);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLoginForm);\n\n\n//# sourceURL=webpack://social-app/./public/js/components/beforeAuth/forms/loginForm.ts?");

/***/ }),

/***/ "./public/js/components/beforeAuth/forms/registrationForm.ts":
/*!*******************************************************************!*\
  !*** ./public/js/components/beforeAuth/forms/registrationForm.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/auth */ \"./public/js/modules/auth.ts\");\n/* harmony import */ var _formToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formToggle */ \"./public/js/components/beforeAuth/forms/formToggle.ts\");\n\n\nvar html = \"<form class=\\\"form\\\">\\n            <div class=\\\"sign-up-header\\\">\\n              <h2>Sign Up</h2>\\n\\n              <button\\n                type=\\\"button\\\"\\n                class=\\\"closeBtn\\\"\\n                id=\\\"closeRegistrationFormBtn\\\"\\n              >\\n                X\\n              </button>\\n            </div>\\n\\n            <input\\n              id=\\\"reg-username\\\"\\n              type=\\\"text\\\"\\n              name=\\\"username\\\"\\n              placeholder=\\\"Username\\\"\\n              required\\n            />\\n            <input\\n              id=\\\"reg-password\\\"\\n              type=\\\"password\\\"\\n              name=\\\"password\\\"\\n              placeholder=\\\"Password\\\"\\n              required\\n            />\\n\\n            <input\\n              id=\\\"reg-email\\\"\\n              type=\\\"email\\\"\\n              name=\\\"email\\\"\\n              placeholder=\\\"Email\\\"\\n              required\\n            />\\n            <button type=\\\"button\\\" id=\\\"sign-up-button\\\" class=\\\"SignUpBtn\\\">\\n              Sign Up\\n            </button>\\n          </form>\";\nvar renderSignUpForm = function () {\n    var signUpForm = document.getElementById(\"sign-up-form\");\n    if (signUpForm)\n        signUpForm.innerHTML = html;\n    var signUpButton = document.getElementById(\"sign-up-button\");\n    var closeRegistrationFormBtn = document.getElementById(\"closeRegistrationFormBtn\");\n    closeRegistrationFormBtn === null || closeRegistrationFormBtn === void 0 ? void 0 : closeRegistrationFormBtn.addEventListener(\"click\", _formToggle__WEBPACK_IMPORTED_MODULE_1__.showLoginForm);\n    signUpButton === null || signUpButton === void 0 ? void 0 : signUpButton.addEventListener(\"click\", _modules_auth__WEBPACK_IMPORTED_MODULE_0__.registration);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSignUpForm);\n\n\n//# sourceURL=webpack://social-app/./public/js/components/beforeAuth/forms/registrationForm.ts?");

/***/ }),

/***/ "./public/js/helpers/constants.ts":
/*!****************************************!*\
  !*** ./public/js/helpers/constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseUrl: () => (/* binding */ baseUrl)\n/* harmony export */ });\nvar baseUrl = \"http://localhost:3000\";\n\n\n//# sourceURL=webpack://social-app/./public/js/helpers/constants.ts?");

/***/ }),

/***/ "./public/js/modules/api.ts":
/*!**********************************!*\
  !*** ./public/js/modules/api.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar fetchData = function (url, method, body) { return __awaiter(void 0, void 0, void 0, function () {\n    var header, response;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                header = {\n                    \"Content-Type\": \"application/json\",\n                };\n                return [4 /*yield*/, fetch(url, {\n                        method: method,\n                        body: body,\n                        headers: header,\n                    })];\n            case 1:\n                response = _a.sent();\n                return [2 /*return*/, response];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/api.ts?");

/***/ }),

/***/ "./public/js/modules/auth.ts":
/*!***********************************!*\
  !*** ./public/js/modules/auth.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authCheck: () => (/* binding */ authCheck),\n/* harmony export */   logOut: () => (/* binding */ logOut),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logoutEventListener: () => (/* binding */ logoutEventListener),\n/* harmony export */   registration: () => (/* binding */ registration)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./public/js/modules/api.ts\");\n/* harmony import */ var _components_beforeAuth_forms_formToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/beforeAuth/forms/formToggle */ \"./public/js/components/beforeAuth/forms/formToggle.ts\");\n/* harmony import */ var _validation_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/index */ \"./public/js/validation/index.ts\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./public/js/modules/dom.ts\");\n/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/constants */ \"./public/js/helpers/constants.ts\");\n/* harmony import */ var _components_beforeAuth_forms_loginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/beforeAuth/forms/loginForm */ \"./public/js/components/beforeAuth/forms/loginForm.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\nvar logoutEventListener = function () {\n    var logOutIcon = document.getElementById(\"logOutIcon\");\n    if (logOutIcon) {\n        logOutIcon.addEventListener(\"click\", logOut);\n    }\n};\nvar authCheck = function () {\n    if (window.userData.authenticated === \"true\") {\n        if (_dom__WEBPACK_IMPORTED_MODULE_3__.MAIN.authenticatedContent)\n            _dom__WEBPACK_IMPORTED_MODULE_3__.MAIN.authenticatedContent.style.display = \"block\";\n        logoutEventListener();\n    }\n    else {\n        if (_dom__WEBPACK_IMPORTED_MODULE_3__.MAIN.unauthenticatedContent)\n            _dom__WEBPACK_IMPORTED_MODULE_3__.MAIN.unauthenticatedContent.style.display = \"block\";\n        (0,_components_beforeAuth_forms_loginForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    }\n};\nvar login = function () {\n    var _a, _b;\n    var loginEmail = (_a = document.getElementById(\"loginEmail\")) === null || _a === void 0 ? void 0 : _a.value;\n    var loginPassword = (_b = document.getElementById(\"loginPassword\")) === null || _b === void 0 ? void 0 : _b.value;\n    var url = \"\".concat(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.baseUrl, \"/api/user/login\");\n    var body = JSON.stringify({\n        email: loginEmail,\n        password: loginPassword,\n    });\n    var res = (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\", body);\n    res\n        .then(function (response) {\n        // @ts-ignore\n        if (response.status === 401) {\n            alert(\"Invalid email or password\");\n            return;\n        }\n        // @ts-ignore\n        return response.json();\n    })\n        .then(function (data) {\n        if (!data)\n            return;\n        if (data.errors) {\n            document.getElementById(\"login-error-message\").innerHTML =\n                data.errors[0];\n        }\n        if (data == \"success\") {\n            window.location.reload();\n        }\n    });\n};\nvar registration = function () {\n    var _a, _b, _c;\n    var email = (_a = document.getElementById(\"reg-email\")) === null || _a === void 0 ? void 0 : _a.value;\n    var password = (_b = document.getElementById(\"reg-password\")) === null || _b === void 0 ? void 0 : _b.value;\n    var username = (_c = document.getElementById(\"reg-username\")) === null || _c === void 0 ? void 0 : _c.value;\n    if (!(0,_validation_index__WEBPACK_IMPORTED_MODULE_2__.registrationValidation)(email, password, username)) {\n        alert(\"Please fill in all fields\");\n        return;\n    }\n    var url = \"\".concat(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.baseUrl, \"/api/user/register\");\n    var body = JSON.stringify({\n        email: email,\n        password: password,\n        username: username,\n    });\n    var res = (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\", body);\n    res\n        .then(function (response) { return response.json(); })\n        .then(function (data) {\n        if (data.errors) {\n            var errorMessage = data.errors[0];\n            alert(errorMessage);\n        }\n        console.log(data);\n    })\n        .then(function () { return (0,_components_beforeAuth_forms_formToggle__WEBPACK_IMPORTED_MODULE_1__.showLoginForm)(); });\n};\nvar logOut = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var url, res;\n    return __generator(this, function (_a) {\n        url = \"\".concat(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.baseUrl, \"/api/user/logout\");\n        res = (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\");\n        res\n            .then(function (response) {\n            return response.json();\n        })\n            .then(function (data) {\n            if (data === \"success\") {\n                window.location.reload();\n            }\n            else {\n                alert(\"Failed to log out\");\n            }\n        });\n        return [2 /*return*/];\n    });\n}); };\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/auth.ts?");

/***/ }),

/***/ "./public/js/modules/dom.ts":
/*!**********************************!*\
  !*** ./public/js/modules/dom.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAIN: () => (/* binding */ MAIN)\n/* harmony export */ });\nvar MAIN = {\n    authenticatedContent: document.getElementById(\"authenticated-content\"),\n    unauthenticatedContent: document.getElementById(\"unauthenticated-content\"),\n    loginErrorMeessage: document.getElementById(\"login-error-message\"),\n};\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/dom.ts?");

/***/ }),

/***/ "./public/js/validation/index.ts":
/*!***************************************!*\
  !*** ./public/js/validation/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registrationValidation: () => (/* binding */ registrationValidation)\n/* harmony export */ });\nvar registrationValidation = function (email, password, username) {\n    if (email === \"\" || password === \"\" || username === \"\") {\n        return false;\n    }\n    return true;\n};\n\n\n//# sourceURL=webpack://social-app/./public/js/validation/index.ts?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth.ts */ \"./public/js/modules/auth.ts\");\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_modules_auth_ts__WEBPACK_IMPORTED_MODULE_0__.authCheck)();\n});\n\n\n//# sourceURL=webpack://social-app/./public/js/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/main.js");
/******/ 	
/******/ })()
;