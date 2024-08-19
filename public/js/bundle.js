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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showLoginForm: () => (/* binding */ showLoginForm),\n/* harmony export */   showSignUpForm: () => (/* binding */ showSignUpForm)\n/* harmony export */ });\n/* harmony import */ var _registrationForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrationForm.js */ \"./public/js/components/beforeAuth/forms/registrationForm.js\");\n\n\nconst loginForm = document.getElementById(\"login-form\");\nconst signupForm = document.getElementById(\"sign-up-form\");\n\nconst showSignUpForm = () => {\n  (0,_registrationForm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  loginForm.style.display = \"none\";\n  signupForm.style.display = \"block\";\n};\n\nconst showLoginForm = () => {\n  signupForm.style.display = \"none\";\n  loginForm.style.display = \"block\";\n};\n\n\n//# sourceURL=webpack://social-app/./public/js/components/beforeAuth/forms/formToggle.js?");

/***/ }),

/***/ "./public/js/components/beforeAuth/forms/loginForm.js":
/*!************************************************************!*\
  !*** ./public/js/components/beforeAuth/forms/loginForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/auth.js */ \"./public/js/modules/auth.js\");\n/* harmony import */ var _formToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formToggle.js */ \"./public/js/components/beforeAuth/forms/formToggle.js\");\n\n\n\nconst html = `<form class=\"form\">\n            <h2>Log in</h2>\n            <input\n              id=\"loginEmail\"\n              type=\"email\"\n              name=\"email\"\n              placeholder=\"email\"\n              required\n            />\n\n            <input\n              id=\"loginPassword\"\n              type=\"password\"\n              name=\"password\"\n              placeholder=\"Password\"\n              required\n            />\n\n            <button id=\"LoginBtn\" type=\"button\" class=\"LoginBtn\">Login</button>\n            <div class=\"separator\"></div>\n\n            <button type=\"button\" class=\"createBtn\" id=\"createAccountBtn\">\n              Create Account\n            </button>\n          </form>`;\n\nconst renderLoginForm = () => {\n  const loginForm = document.getElementById(\"login-form\");\n  loginForm.innerHTML = html;\n\n  const loginButton = document.getElementById(\"LoginBtn\");\n  const createAccountBtn = document.getElementById(\"createAccountBtn\");\n\n  createAccountBtn.addEventListener(\"click\", _formToggle_js__WEBPACK_IMPORTED_MODULE_1__.showSignUpForm);\n  loginButton.addEventListener(\"click\", _modules_auth_js__WEBPACK_IMPORTED_MODULE_0__.login);\n  createAccountBtn.addEventListener(\"click\", _formToggle_js__WEBPACK_IMPORTED_MODULE_1__.showSignUpForm);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLoginForm);\n\n\n//# sourceURL=webpack://social-app/./public/js/components/beforeAuth/forms/loginForm.js?");

/***/ }),

/***/ "./public/js/components/beforeAuth/forms/registrationForm.js":
/*!*******************************************************************!*\
  !*** ./public/js/components/beforeAuth/forms/registrationForm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/auth.js */ \"./public/js/modules/auth.js\");\n/* harmony import */ var _formToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formToggle.js */ \"./public/js/components/beforeAuth/forms/formToggle.js\");\n\n\n\nconst html = `<form class=\"form\">\n            <div class=\"sign-up-header\">\n              <h2>Sign Up</h2>\n\n              <button\n                type=\"button\"\n                class=\"closeBtn\"\n                id=\"closeRegistrationFormBtn\"\n              >\n                X\n              </button>\n            </div>\n\n            <input\n              id=\"reg-username\"\n              type=\"text\"\n              name=\"username\"\n              placeholder=\"Username\"\n              required\n            />\n            <input\n              id=\"reg-password\"\n              type=\"password\"\n              name=\"password\"\n              placeholder=\"Password\"\n              required\n            />\n\n            <input\n              id=\"reg-email\"\n              type=\"email\"\n              name=\"email\"\n              placeholder=\"Email\"\n              required\n            />\n            <button type=\"button\" id=\"sign-up-button\" class=\"SignUpBtn\">\n              Sign Up\n            </button>\n          </form>`;\n\nconst renderSignUpForm = () => {\n  const signUpForm = document.getElementById(\"sign-up-form\");\n  signUpForm.innerHTML = html;\n\n  const signUpButton = document.getElementById(\"sign-up-button\");\n  const closeRegistrationFormBtn = document.getElementById(\n    \"closeRegistrationFormBtn\"\n  );\n\n  closeRegistrationFormBtn.addEventListener(\"click\", _formToggle_js__WEBPACK_IMPORTED_MODULE_1__.showLoginForm);\n  signUpButton.addEventListener(\"click\", _modules_auth_js__WEBPACK_IMPORTED_MODULE_0__.registration);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSignUpForm);\n\n\n//# sourceURL=webpack://social-app/./public/js/components/beforeAuth/forms/registrationForm.js?");

/***/ }),

/***/ "./public/js/helpers/constants.js":
/*!****************************************!*\
  !*** ./public/js/helpers/constants.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseUrl: () => (/* binding */ baseUrl)\n/* harmony export */ });\nconst baseUrl = \"http://localhost:3000\";\n\n\n//# sourceURL=webpack://social-app/./public/js/helpers/constants.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_beforeAuth_forms_loginForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/beforeAuth/forms/loginForm.js */ \"./public/js/components/beforeAuth/forms/loginForm.js\");\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth.js */ \"./public/js/modules/auth.js\");\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.authCheck)();\n  (0,_components_beforeAuth_forms_loginForm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.logoutEventListener)();\n});\n\n\n//# sourceURL=webpack://social-app/./public/js/main.js?");

/***/ }),

/***/ "./public/js/modules/api.js":
/*!**********************************!*\
  !*** ./public/js/modules/api.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\nconst fetchData = async (url, method, body) => {\n  const header = {\n    \"Content-Type\": \"application/json\",\n  };\n\n  const response = await fetch(url, {\n    method,\n    body,\n    headers: header,\n  });\n\n  if (!response.ok) {\n    throw new Error(\"Network response was not ok\");\n  }\n  return response;\n};\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/api.js?");

/***/ }),

/***/ "./public/js/modules/auth.js":
/*!***********************************!*\
  !*** ./public/js/modules/auth.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authCheck: () => (/* binding */ authCheck),\n/* harmony export */   logOut: () => (/* binding */ logOut),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logoutEventListener: () => (/* binding */ logoutEventListener),\n/* harmony export */   registration: () => (/* binding */ registration)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./public/js/modules/api.js\");\n/* harmony import */ var _components_beforeAuth_forms_formToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/beforeAuth/forms/formToggle.js */ \"./public/js/components/beforeAuth/forms/formToggle.js\");\n/* harmony import */ var _validation_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/index.js */ \"./public/js/validation/index.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ \"./public/js/modules/dom.js\");\n/* harmony import */ var _helpers_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/constants.js */ \"./public/js/helpers/constants.js\");\n\n\n\n\n\n\nconst authCheck = () => {\n  if (window.userData.authenticated === \"true\") {\n    _dom_js__WEBPACK_IMPORTED_MODULE_3__.MAIN.authenticatedContent.style.display = \"block\";\n  } else {\n    _dom_js__WEBPACK_IMPORTED_MODULE_3__.MAIN.unauthenticatedContent.style.display = \"block\";\n  }\n};\n\nconst login = () => {\n  const loginEmail = document.getElementById(\"loginEmail\").value;\n  const loginPassword = document.getElementById(\"loginPassword\").value;\n\n  const url = `${_helpers_constants_js__WEBPACK_IMPORTED_MODULE_4__.baseUrl}/api/user/login`;\n  const body = JSON.stringify({\n    email: loginEmail,\n    password: loginPassword,\n  });\n\n  const res = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\", body);\n\n  res\n    .then((response) => {\n      if (response.status === 401) {\n        alert(\"Invalid email or password\");\n        return;\n      }\n      return response.json();\n    })\n    .then((data) => {\n      if (!data) return;\n      if (data.errors) {\n        const errorMessage = data.errors[0];\n        alert(errorMessage);\n      }\n      console.log(data);\n\n      if (data == \"success\") {\n        window.location.reload();\n      }\n    });\n};\n\nconst registration = () => {\n  const email = document.getElementById(\"reg-email\").value;\n  const password = document.getElementById(\"reg-password\").value;\n  const username = document.getElementById(\"reg-username\").value;\n\n  if (!(0,_validation_index_js__WEBPACK_IMPORTED_MODULE_2__.registrationValidation)(email, password, username)) {\n    alert(\"Please fill in all fields\");\n    return;\n  }\n\n  const url = `${_helpers_constants_js__WEBPACK_IMPORTED_MODULE_4__.baseUrl}/api/user/register`;\n  const body = JSON.stringify({\n    email,\n    password,\n    username,\n  });\n\n  const res = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\", body);\n\n  res\n    .then((response) => response.json())\n    .then((data) => {\n      if (data.errors) {\n        const errorMessage = data.errors[0];\n        alert(errorMessage);\n      }\n\n      console.log(data);\n    })\n    .then(() => (0,_components_beforeAuth_forms_formToggle_js__WEBPACK_IMPORTED_MODULE_1__.showLoginForm)());\n};\n\nconst logOut = async () => {\n  const url = `${_helpers_constants_js__WEBPACK_IMPORTED_MODULE_4__.baseUrl}/api/user/logout`;\n  const res = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url, \"POST\");\n\n  res\n    .then((response) => {\n      return response.json();\n    })\n    .then((data) => {\n      if (data === \"success\") {\n        window.location.reload();\n      } else {\n        alert(\"Failed to log out\");\n      }\n    });\n};\n\nconst logoutEventListener = () => {\n  const logOutIcon = document.getElementById(\"logOutIcon\");\n  if (logOutIcon) {\n    logOutIcon.addEventListener(\"click\", logOut);\n  }\n};\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/auth.js?");

/***/ }),

/***/ "./public/js/modules/dom.js":
/*!**********************************!*\
  !*** ./public/js/modules/dom.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAIN: () => (/* binding */ MAIN)\n/* harmony export */ });\nconst MAIN = {\n  authenticatedContent: document.getElementById(\"authenticated-content\"),\n  unauthenticatedContent: document.getElementById(\"unauthenticated-content\"),\n};\n\n\n//# sourceURL=webpack://social-app/./public/js/modules/dom.js?");

/***/ }),

/***/ "./public/js/validation/index.js":
/*!***************************************!*\
  !*** ./public/js/validation/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registrationValidation: () => (/* binding */ registrationValidation)\n/* harmony export */ });\nconst registrationValidation = (email, password, username) => {\n  if (email === \"\" || password === \"\" || username === \"\") {\n    return false;\n  }\n  return true;\n};\n\n\n//# sourceURL=webpack://social-app/./public/js/validation/index.js?");

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