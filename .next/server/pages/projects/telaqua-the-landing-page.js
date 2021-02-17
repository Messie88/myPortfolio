module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/projects/telaqua-the-landing-page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Layout/Layout.component.jsx":
/*!****************************************************!*\
  !*** ./src/components/Layout/Layout.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.scss */ \"./src/components/Layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mac/Developer/myPortfolio/src/components/Layout/Layout.component.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Layout = ({\n  children,\n  color\n}) => {\n  return __jsx(\"div\", {\n    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    id: color && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.color,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.containerInner,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmNvbXBvbmVudC5qc3g/ZDYwZiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsImNvbG9yIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVySW5uZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQXlCO0FBQ3RDLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLFNBQXZCO0FBQWtDLE1BQUUsRUFBRUYsS0FBSyxJQUFJQywwREFBTSxDQUFDRCxLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNFLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NKLFFBQXhDLENBREYsQ0FERjtBQUtELENBTkQ7O0FBUWVELHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBpZD17Y29sb3IgJiYgc3R5bGVzLmNvbG9yfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVySW5uZXJ9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/Layout.component.jsx\n");

/***/ }),

/***/ "./src/components/Layout/Layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Layout/Layout.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Layout_container__2QLYW\",\n\t\"containerInner\": \"Layout_containerInner__1J9kR\",\n\t\"color\": \"Layout_color__1z3P7\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzP2UyMGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxheW91dF9jb250YWluZXJfXzJRTFlXXCIsXG5cdFwiY29udGFpbmVySW5uZXJcIjogXCJMYXlvdXRfY29udGFpbmVySW5uZXJfXzFKOWtSXCIsXG5cdFwiY29sb3JcIjogXCJMYXlvdXRfY29sb3JfXzF6M1A3XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/Layout.module.scss\n");

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.component */ \"./src/components/Layout/Layout.component.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Layout_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanM/NjZkYiJdLCJuYW1lcyI6WyJMYXlvdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlQSx3SEFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0LmNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/index.js\n");

/***/ }),

/***/ "./src/components/Projects/components/ProjectItem/ProjectItem.component.jsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Projects/components/ProjectItem/ProjectItem.component.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectItem.module.scss */ \"./src/components/Projects/components/ProjectItem/ProjectItem.module.scss\");\n/* harmony import */ var _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mac/Developer/myPortfolio/src/components/Projects/components/ProjectItem/ProjectItem.component.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ProjectItem = ({\n  heroImage,\n  title,\n  role,\n  challenges,\n  technos,\n  linkToSeeLive,\n  imageOne,\n  imageTwo,\n  imageThree\n}) => {\n  return __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hero,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: heroImage,\n    alt: \"Project Screen\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, title)), __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionLeft,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"Role :\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, role)), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Challenges\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, challenges))), __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionRight,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"Technos :\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, technos)), __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionRightLink,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: linkToSeeLive,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"See live\")))), __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.images,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.leftImage,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: imageOne,\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightImage,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: imageTwo,\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }), __jsx(\"img\", {\n    src: imageThree,\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, \"Previous Project / next Project\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9jb21wb25lbnRzL1Byb2plY3RJdGVtL1Byb2plY3RJdGVtLmNvbXBvbmVudC5qc3g/YWY1NyJdLCJuYW1lcyI6WyJQcm9qZWN0SXRlbSIsImhlcm9JbWFnZSIsInRpdGxlIiwicm9sZSIsImNoYWxsZW5nZXMiLCJ0ZWNobm9zIiwibGlua1RvU2VlTGl2ZSIsImltYWdlT25lIiwiaW1hZ2VUd28iLCJpbWFnZVRocmVlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVybyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25MZWZ0IiwiZGVzY3JpcHRpb25SaWdodCIsImRlc2NyaXB0aW9uUmlnaHRMaW5rIiwiaW1hZ2VzIiwibGVmdEltYWdlIiwicmlnaHRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFDbkJDLFdBRG1CO0FBRW5CQyxPQUZtQjtBQUduQkMsTUFIbUI7QUFJbkJDLFlBSm1CO0FBS25CQyxTQUxtQjtBQU1uQkMsZUFObUI7QUFPbkJDLFVBUG1CO0FBUW5CQyxVQVJtQjtBQVNuQkM7QUFUbUIsQ0FBRCxLQVVkO0FBQ0osU0FDRTtBQUFLLGFBQVMsRUFBRUMsK0RBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCwrREFBTSxDQUFDRSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVYLFNBQVY7QUFBcUIsT0FBRyxFQUFDLGdCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtDLEtBQUwsQ0FGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUVRLCtEQUFNLENBQUNHLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsK0RBQU0sQ0FBQ0ksZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlYLElBQUosQ0FGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLFVBQUosQ0FGRixDQUxGLENBREYsRUFXRTtBQUFLLGFBQVMsRUFBRU0sK0RBQU0sQ0FBQ0ssZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVYsT0FBSixDQUZGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBRUssK0RBQU0sQ0FBQ00sb0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRVYsYUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBTEYsQ0FYRixDQUxGLEVBMEJFO0FBQUssYUFBUyxFQUFFSSwrREFBTSxDQUFDTyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVQLCtEQUFNLENBQUNRLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRVgsUUFBVjtBQUFvQixPQUFHLEVBQUMsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBRUcsK0RBQU0sQ0FBQ1MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFWCxRQUFWO0FBQW9CLE9BQUcsRUFBQyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLE9BQUcsRUFBRUMsVUFBVjtBQUFzQixPQUFHLEVBQUMsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBSkYsQ0ExQkYsRUFtQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FuQ0YsQ0FERjtBQXVDRCxDQWxERDs7QUFvRGVULDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0SXRlbS9Qcm9qZWN0SXRlbS5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Byb2plY3RJdGVtLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFByb2plY3RJdGVtID0gKHtcbiAgaGVyb0ltYWdlLFxuICB0aXRsZSxcbiAgcm9sZSxcbiAgY2hhbGxlbmdlcyxcbiAgdGVjaG5vcyxcbiAgbGlua1RvU2VlTGl2ZSxcbiAgaW1hZ2VPbmUsXG4gIGltYWdlVHdvLFxuICBpbWFnZVRocmVlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgIDxpbWcgc3JjPXtoZXJvSW1hZ2V9IGFsdD1cIlByb2plY3QgU2NyZWVuXCIgLz5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbkxlZnR9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+Um9sZSA6PC9oMz5cbiAgICAgICAgICAgIDxwPntyb2xlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPkNoYWxsZW5nZXM8L2gzPlxuICAgICAgICAgICAgPHA+e2NoYWxsZW5nZXN9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvblJpZ2h0fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPlRlY2hub3MgOjwvaDM+XG4gICAgICAgICAgICA8cD57dGVjaG5vc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvblJpZ2h0TGlua30+XG4gICAgICAgICAgICA8YSBocmVmPXtsaW5rVG9TZWVMaXZlfT5TZWUgbGl2ZTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0SW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZU9uZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRJbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlVHdvfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVRocmVlfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5QcmV2aW91cyBQcm9qZWN0IC8gbmV4dCBQcm9qZWN0PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects/components/ProjectItem/ProjectItem.component.jsx\n");

/***/ }),

/***/ "./src/components/Projects/components/ProjectItem/ProjectItem.module.scss":
/*!********************************************************************************!*\
  !*** ./src/components/Projects/components/ProjectItem/ProjectItem.module.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"ProjectItem_container__3xxGA\",\n\t\"hero\": \"ProjectItem_hero__1tkcB\",\n\t\"description\": \"ProjectItem_description__2BVoj\",\n\t\"descriptionLeft\": \"ProjectItem_descriptionLeft__1zhGi\",\n\t\"descriptionRight\": \"ProjectItem_descriptionRight__3HIiO\",\n\t\"descriptionRightLink\": \"ProjectItem_descriptionRightLink__2oeC3\",\n\t\"images\": \"ProjectItem_images__21MmH\",\n\t\"leftImage\": \"ProjectItem_leftImage__2Kkqp\",\n\t\"rightImage\": \"ProjectItem_rightImage__2n0yp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9jb21wb25lbnRzL1Byb2plY3RJdGVtL1Byb2plY3RJdGVtLm1vZHVsZS5zY3NzPzI1YjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0SXRlbS9Qcm9qZWN0SXRlbS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlByb2plY3RJdGVtX2NvbnRhaW5lcl9fM3h4R0FcIixcblx0XCJoZXJvXCI6IFwiUHJvamVjdEl0ZW1faGVyb19fMXRrY0JcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uX18yQlZvalwiLFxuXHRcImRlc2NyaXB0aW9uTGVmdFwiOiBcIlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uTGVmdF9fMXpoR2lcIixcblx0XCJkZXNjcmlwdGlvblJpZ2h0XCI6IFwiUHJvamVjdEl0ZW1fZGVzY3JpcHRpb25SaWdodF9fM0hJaU9cIixcblx0XCJkZXNjcmlwdGlvblJpZ2h0TGlua1wiOiBcIlByb2plY3RJdGVtX2Rlc2NyaXB0aW9uUmlnaHRMaW5rX18yb2VDM1wiLFxuXHRcImltYWdlc1wiOiBcIlByb2plY3RJdGVtX2ltYWdlc19fMjFNbUhcIixcblx0XCJsZWZ0SW1hZ2VcIjogXCJQcm9qZWN0SXRlbV9sZWZ0SW1hZ2VfXzJLa3FwXCIsXG5cdFwicmlnaHRJbWFnZVwiOiBcIlByb2plY3RJdGVtX3JpZ2h0SW1hZ2VfXzJuMHlwXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects/components/ProjectItem/ProjectItem.module.scss\n");

/***/ }),

/***/ "./src/components/Projects/components/ProjectItem/index.js":
/*!*****************************************************************!*\
  !*** ./src/components/Projects/components/ProjectItem/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectItem_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.component */ \"./src/components/Projects/components/ProjectItem/ProjectItem.component.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ProjectItem_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9jb21wb25lbnRzL1Byb2plY3RJdGVtL2luZGV4LmpzP2QyMDIiXSwibmFtZXMiOlsiUHJvamVjdEl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlQSw2SEFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL2NvbXBvbmVudHMvUHJvamVjdEl0ZW0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdEl0ZW0gZnJvbSBcIi4vUHJvamVjdEl0ZW0uY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Projects/components/ProjectItem/index.js\n");

/***/ }),

/***/ "./src/pages/projects/telaqua-the-landing-page.js":
/*!********************************************************!*\
  !*** ./src/pages/projects/telaqua-the-landing-page.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Projects_components_ProjectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Projects/components/ProjectItem */ \"./src/components/Projects/components/ProjectItem/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout/index.js\");\nvar _jsxFileName = \"/Users/mac/Developer/myPortfolio/src/pages/projects/telaqua-the-landing-page.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst telaquaLandingPage = () => {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Projects_components_ProjectItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    heroImage: \"/images/telaqua.png\",\n    title: \"Telaqua\",\n    role: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quam aliquid earum, porro quisquam perspiciatis iusto amet nesciunt officiis cupiditate?\",\n    challenges: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quam aliquid earum, porro\",\n    technos: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quam aliquid earum\",\n    linkToSeeLive: \"link\",\n    imageOne: \"/images/telaqua.png\",\n    imageTwo: \"/images/telaqua.png\",\n    imageThree: \"/images/telaqua.png\",\n    previousLink: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (telaquaLandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvamVjdHMvdGVsYXF1YS10aGUtbGFuZGluZy1wYWdlLmpzPzgyYTEiXSwibmFtZXMiOlsidGVsYXF1YUxhbmRpbmdQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLE1BQU1BLGtCQUFrQixHQUFHLE1BQU07QUFDL0IsU0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1GQUFEO0FBQ0UsYUFBUyxFQUFDLHFCQURaO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxRQUFJLEVBQUMsNkpBSFA7QUFNRSxjQUFVLEVBQUMsOEZBTmI7QUFRRSxXQUFPLEVBQUMsdUZBUlY7QUFVRSxpQkFBYSxFQUFDLE1BVmhCO0FBV0UsWUFBUSxFQUFDLHFCQVhYO0FBWUUsWUFBUSxFQUFDLHFCQVpYO0FBYUUsY0FBVSxFQUFDLHFCQWJiO0FBY0UsZ0JBQVksRUFBQyxHQWRmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBb0JELENBckJEOztBQXVCZUEsaUZBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMvdGVsYXF1YS10aGUtbGFuZGluZy1wYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUHJvamVjdEl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0SXRlbVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgdGVsYXF1YUxhbmRpbmdQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY29sb3I+XG4gICAgICA8UHJvamVjdEl0ZW1cbiAgICAgICAgaGVyb0ltYWdlPVwiL2ltYWdlcy90ZWxhcXVhLnBuZ1wiXG4gICAgICAgIHRpdGxlPVwiVGVsYXF1YVwiXG4gICAgICAgIHJvbGU9XCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhwZWRpdGFcbiAgICAgICAgICAgICAgcXVhbSBhbGlxdWlkIGVhcnVtLCBwb3JybyBxdWlzcXVhbSBwZXJzcGljaWF0aXMgaXVzdG8gYW1ldFxuICAgICAgICAgICAgICBuZXNjaXVudCBvZmZpY2lpcyBjdXBpZGl0YXRlP1wiXG4gICAgICAgIGNoYWxsZW5nZXM9XCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhwZWRpdGFcbiAgICAgICAgcXVhbSBhbGlxdWlkIGVhcnVtLCBwb3Jyb1wiXG4gICAgICAgIHRlY2hub3M9XCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhwZWRpdGFcbiAgICAgICAgcXVhbSBhbGlxdWlkIGVhcnVtXCJcbiAgICAgICAgbGlua1RvU2VlTGl2ZT1cImxpbmtcIlxuICAgICAgICBpbWFnZU9uZT1cIi9pbWFnZXMvdGVsYXF1YS5wbmdcIlxuICAgICAgICBpbWFnZVR3bz1cIi9pbWFnZXMvdGVsYXF1YS5wbmdcIlxuICAgICAgICBpbWFnZVRocmVlPVwiL2ltYWdlcy90ZWxhcXVhLnBuZ1wiXG4gICAgICAgIHByZXZpb3VzTGluaz1cIi9cIlxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlbGFxdWFMYW5kaW5nUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/projects/telaqua-the-landing-page.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });