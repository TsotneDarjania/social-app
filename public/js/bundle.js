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

/***/ "./public/js/components/beforeAuth/forms/formToggle.js":
/*!*************************************************************!*\
  !*** ./public/js/components/beforeAuth/forms/formToggle.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showSignUpForm: () => (/* binding */ showSignUpForm)\n/* harmony export */ });\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/dom.js */ \"./public/js/modules/dom.js\");\n\r\n\r\nconst showSignUpForm = () => {\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_0__.FORMS.loginForm.style.display = \"none\";\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_0__.FORMS.signupForm.style.display = \"block\";\r\n};\r\n\r\nconst showLoginForm = () => {\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_0__.FORMS.signupForm.style.display = \"none\";\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_0__.FORMS.loginForm.style.display = \"block\";\r\n};\r\n\n\n//# sourceURL=webpack://social-app/./public/js/components/beforeAuth/forms/formToggle.js?");

/***/ }),

/***/ "./public/js/helpers/constants.js":
/*!****************************************!*\
  !*** ./public/js/helpers/constants.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseUrl: () => (/* binding */ baseUrl)\n/* harmony export */ });\nconst baseUrl = \"http://localhost:3000\";\r\n\n\n//# sourceURL=webpack://social-app/./public/js/helpers/constants.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_eventHandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/eventHandlers.js */ \"./public/js/modules/eventHandlers.js\");\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth.js */ \"./public/js/modules/auth.js\");\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.authCheck)();\r\n  (0,_modules_eventHandlers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://social-app/./public/js/main.js?");

/***/ }),

/***/ "./public/js/modules/api.js":
/*!**********************************!*\
  !*** ./public/js/modules/api.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\nconst fetchData = async (url, method, body) => {\r\n  const header = {\r\n    \"Content-Type\": \"application/json\",\r\n  };\r\n\r\n  const response = await fetch(url, {\r\n    method,\r\n    body,\r\n    headers: header,\r\n  });\r\n\r\n  if (!response.ok) {\r\n    throw new Error(\"Network response was not ok\");\r\n  }\r\n  return response;\r\n};\r\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/api.js?");

/***/ }),

/***/ "./public/js/modules/auth.js":
/*!***********************************!*\
  !*** ./public/js/modules/auth.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authCheck: () => (/* binding */ authCheck),\n/* harmony export */   logOut: () => (/* binding */ logOut),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   registration: () => (/* binding */ registration)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./public/js/modules/api.js\");\n/* harmony import */ var _components_beforeAuth_forms_formToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/beforeAuth/forms/formToggle.js */ \"./public/js/components/beforeAuth/forms/formToggle.js\");\n/* harmony import */ var _validation_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/index.js */ \"./public/js/validation/index.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ \"./public/js/modules/dom.js\");\n/* harmony import */ var _helpers_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/constants.js */ \"./public/js/helpers/constants.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst authCheck = () => {\r\n  if (window.userData.authenticated === \"true\") {\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_3__.MAIN.authenticatedContent.style.display = \"block\";\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_3__.HEADER.userName.innerHTML = window.userData.username;\r\n  } else {\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_3__.MAIN.unauthenticatedContent.style.display = \"block\";\r\n  }\r\n};\r\n\r\nconst login = () => {\r\n  const loginEmail = _dom_js__WEBPACK_IMPORTED_MODULE_3__.FORMS.loginEmail.value;\r\n  const loginPassword = _dom_js__WEBPACK_IMPORTED_MODULE_3__.FORMS.loginPassword.value;\r\n\r\n  const url = `${_helpers_constants_js__WEBPACK_IMPORTED_MODULE_4__.baseUrl}/api/user/login`;\r\n  const body = JSON.stringify({\r\n    email: loginEmail,\r\n    password: loginPassword,\r\n  });\r\n\r\n  const res = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\", body);\r\n\r\n  res\r\n    .then((response) => {\r\n      if (response.status === 401) {\r\n        alert(\"Invalid email or password\");\r\n        return;\r\n      }\r\n      return response.json();\r\n    })\r\n    .then((data) => {\r\n      if (!data) return;\r\n      if (data.errors) {\r\n        const errorMessage = data.errors[0];\r\n        alert(errorMessage);\r\n      }\r\n      console.log(data);\r\n\r\n      if (data == \"success\") {\r\n        window.location.reload();\r\n      }\r\n    });\r\n};\r\n\r\nconst registration = () => {\r\n  const email = _dom_js__WEBPACK_IMPORTED_MODULE_3__.FORMS.registrationEmail.value;\r\n  const password = _dom_js__WEBPACK_IMPORTED_MODULE_3__.FORMS.registrationPassword.value;\r\n  const username = _dom_js__WEBPACK_IMPORTED_MODULE_3__.FORMS.registrationUserName.value;\r\n\r\n  if (!(0,_validation_index_js__WEBPACK_IMPORTED_MODULE_2__.registrationValidation)(email, password, username)) {\r\n    alert(\"Please fill in all fields\");\r\n    return;\r\n  }\r\n\r\n  const url = `${_helpers_constants_js__WEBPACK_IMPORTED_MODULE_4__.baseUrl}/api/user/register`;\r\n  const body = JSON.stringify({\r\n    email,\r\n    password,\r\n    username,\r\n  });\r\n\r\n  const res = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\", body);\r\n\r\n  res\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      if (data.errors) {\r\n        const errorMessage = data.errors[0];\r\n        alert(errorMessage);\r\n      }\r\n\r\n      console.log(data);\r\n    })\r\n    .then(() => (0,_components_beforeAuth_forms_formToggle_js__WEBPACK_IMPORTED_MODULE_1__.showLoginForm)());\r\n};\r\n\r\nconst logOut = async () => {\r\n  const url = `${_helpers_constants_js__WEBPACK_IMPORTED_MODULE_4__.baseUrl}/api/user/logout`;\r\n\r\n  const res = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\");\r\n\r\n  res\r\n    .then((response) => {\r\n      return response.json();\r\n    })\r\n    .then((data) => {\r\n      if (data === \"success\") {\r\n        window.location.reload();\r\n      } else {\r\n        alert(\"Failed to log out\");\r\n      }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/auth.js?");

/***/ }),

/***/ "./public/js/modules/dom.js":
/*!**********************************!*\
  !*** ./public/js/modules/dom.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FORMS: () => (/* binding */ FORMS),\n/* harmony export */   HEADER: () => (/* binding */ HEADER),\n/* harmony export */   MAIN: () => (/* binding */ MAIN)\n/* harmony export */ });\nconst MAIN = {\r\n  authenticatedContent: document.getElementById(\"authenticated-content\"),\r\n  unauthenticatedContent: document.getElementById(\"unauthenticated-content\"),\r\n};\r\n\r\nconst FORMS = {\r\n  loginForm: document.getElementById(\"login-form\"),\r\n  signupForm: document.getElementById(\"sign-up-form\"),\r\n  loginEmail: document.getElementById(\"loginEmail\"),\r\n  loginPassword: document.getElementById(\"loginPassword\"),\r\n  registrationEmail: document.getElementById(\"reg-email\"),\r\n  registrationPassword: document.getElementById(\"reg-password\"),\r\n  registrationUserName: document.getElementById(\"reg-username\"),\r\n  signUpButton: document.getElementById(\"sign-up-button\"),\r\n  loginButton: document.getElementById(\"LoginBtn\"),\r\n  createAccountBtn: document.getElementById(\"createAccountBtn\"),\r\n  closeRegistrationFormBtn: document.getElementById(\"closeRegistrationFormBtn\"),\r\n};\r\n\r\nconst HEADER = {\r\n  header: document.getElementById(\"header\"),\r\n  userProfile: document.getElementById(\"userProfile\"),\r\n  userName: document.getElementById(\"userName\"),\r\n  logoutBtn: document.getElementById(\"logoutBtn\"),\r\n};\r\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/dom.js?");

/***/ }),

/***/ "./public/js/modules/eventHandlers.js":
/*!********************************************!*\
  !*** ./public/js/modules/eventHandlers.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_beforeAuth_forms_formToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/beforeAuth/forms/formToggle.js */ \"./public/js/components/beforeAuth/forms/formToggle.js\");\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/auth.js */ \"./public/js/modules/auth.js\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/dom.js */ \"./public/js/modules/dom.js\");\n\r\n\r\n\r\n\r\nconst setupEventListeners = () => {\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.FORMS.signUpButton.addEventListener(\"click\", _modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.registration);\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.FORMS.loginButton.addEventListener(\"click\", _modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.login);\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.HEADER.logoutBtn.addEventListener(\"click\", _modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.logOut);\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.FORMS.createAccountBtn.addEventListener(\"click\", _components_beforeAuth_forms_formToggle_js__WEBPACK_IMPORTED_MODULE_0__.showSignUpForm);\r\n  _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__.FORMS.closeRegistrationFormBtn.addEventListener(\"click\", _components_beforeAuth_forms_formToggle_js__WEBPACK_IMPORTED_MODULE_0__.showLoginForm);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupEventListeners);\r\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/eventHandlers.js?");

/***/ }),

/***/ "./public/js/validation/index.js":
/*!***************************************!*\
  !*** ./public/js/validation/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registrationValidation: () => (/* binding */ registrationValidation)\n/* harmony export */ });\nconst registrationValidation = (email, password, username) => {\r\n  if (email === \"\" || password === \"\" || username === \"\") {\r\n    return false;\r\n  }\r\n  return true;\r\n};\r\n\n\n//# sourceURL=webpack://social-app/./public/js/validation/index.js?");

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