webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Projects/components/ProjectItemRigth/ProjectItemRight.component.jsx":
/*!********************************************************************************************!*\
  !*** ./src/components/Projects/components/ProjectItemRigth/ProjectItemRight.component.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProjectItemRight_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectItemRight.module.scss */ \"./src/components/Projects/components/ProjectItemRigth/ProjectItemRight.module.scss\");\n/* harmony import */ var _ProjectItemRight_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectItemRight_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/mac/Developer/myPortfolio/src/components/Projects/components/ProjectItemRigth/ProjectItemRight.component.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\ngsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__[\"ScrollTrigger\"]);\n\nconst ProjectItemRight = ({\n  title,\n  subtitle,\n  technos,\n  image\n}) => {\n  _s();\n\n  let h3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let para = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let photo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let technosTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let technosPara = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(h3, 1, {\n      scrollTrigger: {\n        trigger: h3,\n        toggleActions: \"restart play reverse\",\n        end: \"top 94%\"\n      },\n      y: 120,\n      ease: \"back\"\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(para, 1, {\n      scrollTrigger: {\n        trigger: para,\n        toggleActions: \"restart play reverse\",\n        end: \"top 94%\"\n      },\n      opacity: 0,\n      letterSpacing: \"1rem\" //delay: 5,\n\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(technosTitle, 1, {\n      scrollTrigger: {\n        trigger: technosTitle,\n        toggleActions: \"restart play reverse\",\n        end: \"top 98%\"\n      },\n      y: 200,\n      ease: \"back\"\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(technosPara, 1.2, {\n      scrollTrigger: {\n        trigger: technosPara,\n        toggleActions: \"restart play reverse\",\n        end: \"top 98%\"\n      },\n      y: 200,\n      ease: \"back\"\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(photo, 1.2, {\n      scrollTrigger: {\n        trigger: photo,\n        toggleActions: \"restart play reverse\",\n        end: \"top 100%\"\n      },\n      y: 250,\n      scale: 1.2,\n      ease: \"back\"\n    });\n  });\n  return __jsx(\"div\", {\n    className: _ProjectItemRight_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItemRight_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: image,\n    alt: \"Project\",\n    ref: el => photo = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _ProjectItemRight_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItemRight_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.h3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    ref: el => h3 = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, title)), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    ref: el => para = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, subtitle)), __jsx(\"div\", {\n    className: _ProjectItemRight_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.technos,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(\"h5\", {\n    ref: el => technosTitle = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, \"Main Technos :\"), __jsx(\"p\", {\n    ref: el => technosPara = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, technos))));\n};\n\n_s(ProjectItemRight, \"Ifqb72STie8jRKqKe+zc8kaIczA=\");\n\n_c = ProjectItemRight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItemRight);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectItemRight\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0SXRlbVJpZ3RoL1Byb2plY3RJdGVtUmlnaHQuY29tcG9uZW50LmpzeD8yOWNkIl0sIm5hbWVzIjpbImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJQcm9qZWN0SXRlbVJpZ2h0IiwidGl0bGUiLCJzdWJ0aXRsZSIsInRlY2hub3MiLCJpbWFnZSIsImgzIiwidXNlUmVmIiwicGFyYSIsInBob3RvIiwidGVjaG5vc1RpdGxlIiwidGVjaG5vc1BhcmEiLCJ1c2VFZmZlY3QiLCJmcm9tIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJ0b2dnbGVBY3Rpb25zIiwiZW5kIiwieSIsImVhc2UiLCJvcGFjaXR5IiwibGV0dGVyU3BhY2luZyIsInNjYWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQUEsbURBQUksQ0FBQ0MsY0FBTCxDQUFvQkMscUVBQXBCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxVQUFUO0FBQW1CQyxTQUFuQjtBQUE0QkM7QUFBNUIsQ0FBRCxLQUF5QztBQUFBOztBQUNoRSxNQUFJQyxFQUFFLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFmO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBakI7QUFDQSxNQUFJRSxLQUFLLEdBQUdGLG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUNBLE1BQUlHLFlBQVksR0FBR0gsb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBQ0EsTUFBSUksV0FBVyxHQUFHSixvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFFQUsseURBQVMsQ0FBQyxNQUFNO0FBQ2RkLHVEQUFJLENBQUNlLElBQUwsQ0FBVVAsRUFBVixFQUFj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RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUcsT0FBRyxFQUFHQSxFQUFELElBQVNkLFdBQVcsR0FBR2MsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ3JCLE9BQXJDLENBRkYsQ0FQRixDQUpGLENBREY7QUFtQkQsQ0E1RUQ7O0dBQU1ILGdCOztLQUFBQSxnQjtBQThFU0EsK0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9jb21wb25lbnRzL1Byb2plY3RJdGVtUmlndGgvUHJvamVjdEl0ZW1SaWdodC5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvamVjdEl0ZW1SaWdodC5tb2R1bGUuc2Nzc1wiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCBQcm9qZWN0SXRlbVJpZ2h0ID0gKHsgdGl0bGUsIHN1YnRpdGxlLCB0ZWNobm9zLCBpbWFnZSB9KSA9PiB7XG4gIGxldCBoMyA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHBhcmEgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBwaG90byA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRlY2hub3NUaXRsZSA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRlY2hub3NQYXJhID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5mcm9tKGgzLCAxLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IGgzLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInJlc3RhcnQgcGxheSByZXZlcnNlXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgOTQlXCIsXG4gICAgICB9LFxuICAgICAgeTogMTIwLFxuICAgICAgZWFzZTogXCJiYWNrXCIsXG4gICAgfSk7XG4gICAgZ3NhcC5mcm9tKHBhcmEsIDEsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogcGFyYSxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJyZXN0YXJ0IHBsYXkgcmV2ZXJzZVwiLFxuICAgICAgICBlbmQ6IFwidG9wIDk0JVwiLFxuICAgICAgfSxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIjFyZW1cIixcbiAgICAgIC8vZGVsYXk6IDUsXG4gICAgfSk7XG4gICAgZ3NhcC5mcm9tKHRlY2hub3NUaXRsZSwgMSwge1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiB0ZWNobm9zVGl0bGUsXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicmVzdGFydCBwbGF5IHJldmVyc2VcIixcbiAgICAgICAgZW5kOiBcInRvcCA5OCVcIixcbiAgICAgIH0sXG4gICAgICB5OiAyMDAsXG4gICAgICBlYXNlOiBcImJhY2tcIixcbiAgICB9KTtcbiAgICBnc2FwLmZyb20odGVjaG5vc1BhcmEsIDEuMiwge1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiB0ZWNobm9zUGFyYSxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJyZXN0YXJ0IHBsYXkgcmV2ZXJzZVwiLFxuICAgICAgICBlbmQ6IFwidG9wIDk4JVwiLFxuICAgICAgfSxcbiAgICAgIHk6IDIwMCxcbiAgICAgIGVhc2U6IFwiYmFja1wiLFxuICAgIH0pO1xuICAgIGdzYXAuZnJvbShwaG90bywgMS4yLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHBob3RvLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInJlc3RhcnQgcGxheSByZXZlcnNlXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgMTAwJVwiLFxuICAgICAgfSxcbiAgICAgIHk6IDI1MCxcbiAgICAgIHNjYWxlOiAxLjIsXG4gICAgICBlYXNlOiBcImJhY2tcIixcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJQcm9qZWN0XCIgcmVmPXsoZWwpID0+IChwaG90byA9IGVsKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oM30+XG4gICAgICAgICAgPGgzIHJlZj17KGVsKSA9PiAoaDMgPSBlbCl9Pnt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gcmVmPXsoZWwpID0+IChwYXJhID0gZWwpfT57c3VidGl0bGV9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vc30+XG4gICAgICAgICAgPGg1IHJlZj17KGVsKSA9PiAodGVjaG5vc1RpdGxlID0gZWwpfT5NYWluIFRlY2hub3MgOjwvaDU+XG4gICAgICAgICAgPHAgcmVmPXsoZWwpID0+ICh0ZWNobm9zUGFyYSA9IGVsKX0+e3RlY2hub3N9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEl0ZW1SaWdodDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects/components/ProjectItemRigth/ProjectItemRight.component.jsx\n");

/***/ })

})