webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.component.jsx":
/*!******************************************************************************************!*\
  !*** ./src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.component.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectItemLeft.module.scss */ \"./src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.module.scss\");\n/* harmony import */ var _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/mac/Developer/myPortfolio/src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.component.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\ngsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__[\"ScrollTrigger\"]);\n\nconst ProjectItemLeft = ({\n  title,\n  subtitle,\n  technos,\n  image\n}) => {\n  _s();\n\n  let h3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let para = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let photo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let technosTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let technosPara = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(h3, 1, {\n      scrollTrigger: {\n        trigger: h3,\n        toggleActions: \"restart play reverse\",\n        end: \"top 94%\"\n      },\n      y: 200,\n      ease: \"back\"\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(para, 1, {\n      scrollTrigger: {\n        trigger: para,\n        toggleActions: \"restart play reverse\",\n        end: \"top 80%\"\n      },\n      opacity: 0,\n      ease: \"back\" //delay: 5,\n\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(technosTitle, 1, {\n      scrollTrigger: {\n        trigger: technosTitle,\n        toggleActions: \"restart play reverse\",\n        end: \"top 98%\"\n      },\n      y: 200,\n      ease: \"back\"\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(technosPara, 1.2, {\n      scrollTrigger: {\n        trigger: technosPara,\n        toggleActions: \"restart play reverse\",\n        end: \"top 98%\"\n      },\n      y: 200,\n      ease: \"back\"\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(photo, 1.2, {\n      scrollTrigger: {\n        trigger: photo,\n        toggleActions: \"restart play reverse\",\n        end: \"top 100%\"\n      },\n      y: 250,\n      scale: 1.2,\n      ease: \"back\"\n    });\n  });\n  return __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.h3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    ref: el => h3 = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, title)), __jsx(\"div\", {\n    style: {\n      overflow: \"hidden\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    ref: el => para = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, subtitle))), __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.technos,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(\"h5\", {\n    ref: el => technosTitle = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, \"Main Technos :\"), __jsx(\"p\", {\n    ref: el => technosPara = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, technos))), __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: image,\n    alt: \"Project\",\n    ref: el => photo = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(ProjectItemLeft, \"Ifqb72STie8jRKqKe+zc8kaIczA=\");\n\n_c = ProjectItemLeft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItemLeft);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectItemLeft\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0SXRlbUxlZnQvUHJvamVjdEl0ZW1MZWZ0LmNvbXBvbmVudC5qc3g/Y2FiNCJdLCJuYW1lcyI6WyJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiUHJvamVjdEl0ZW1MZWZ0IiwidGl0bGUiLCJzdWJ0aXRsZSIsInRlY2hub3MiLCJpbWFnZSIsImgzIiwidXNlUmVmIiwicGFyYSIsInBob3RvIiwidGVjaG5vc1RpdGxlIiwidGVjaG5vc1BhcmEiLCJ1c2VFZmZlY3QiLCJmcm9tIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJ0b2dnbGVBY3Rpb25zIiwiZW5kIiwieSIsImVhc2UiLCJvcGFjaXR5Iiwic2NhbGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250ZW50IiwiZWwiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLG1EQUFJLENBQUNDLGNBQUwsQ0FBb0JDLHFFQUFwQjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDLFNBQW5CO0FBQTRCQztBQUE1QixDQUFELEtBQXlDO0FBQUE7O0FBQy9ELE1BQUlDLEVBQUUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFqQjtBQUNBLE1BQUlFLEtBQUssR0FBR0Ysb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0EsTUFBSUcsWUFBWSxHQUFHSCxvREFBTSxDQUFDLElBQUQsQ0FBekI7QUFDQSxNQUFJSSxXQUFXLEdBQUdKLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUVBSyx5REFBUyxDQUFDLE1BQU07QUFDZGQsdURBQUksQ0FBQ2UsSUFBTCxDQUFVUCxFQUFWLEVBQWMsQ0FBZCxFQUFpQjtBQUNmUSxtQkFBYSxFQUFFO0FBQ2JDLGVBQU8sRUFBRVQsRUFESTtBQUViVSxxQkFBYSxFQUFFLHNCQUZGO0FBR2JDLFdBQUcsRUFBRTtBQUhRLE9BREE7QUFNZkMsT0FBQyxFQUFFLEdBTlk7QUFPZkMsVUFBSSxFQUFFO0FBUFMsS0FBakI7QUFTQXJCLHVEQUFJLENBQUNlLElBQUwsQ0FBVUwsSUFBVixFQUFnQixDQUFoQixFQUFtQjtBQUNqQk0sbUJBQWEsRUFBRTtBQUNiQyxlQUFPLEVBQUVQLElBREk7QUFFYlEscUJBQWEsRUFBRSxzQkFGRjtBQUdiQyxXQUFHLEVBQUU7QUFIUSxPQURFO0FBTWpCRyxhQUFPLEVBQUUsQ0FOUTtBQU9qQkQsVUFBSSxFQUFFLE1BUFcsQ0FRakI7O0FBUmlCLEtBQW5CO0FBVUFyQix1REFBSSxDQUFDZSxJQUFMLENBQVVILFlBQVYsRUFBd0IsQ0FBeEIsRUFBMkI7QUFDekJJLG1CQUFhLEVBQUU7QUFDYkMsZUFBTyxFQUFFTCxZQURJO0FBRWJNLHFCQUFhLEVBQUUsc0JBRkY7QUFHYkMsV0FBRyxFQUFFO0FBSFEsT0FEVTtBQU16QkMsT0FBQyxFQUFFLEdBTnNCO0FBT3pCQyxVQUFJLEVBQUU7QUFQbUIsS0FBM0I7QUFTQXJCLHVEQUFJLENBQUNlLElBQUwsQ0FBVUYsV0FBVixFQUF1QixHQUF2QixFQUE0QjtBQUMxQkcsbUJBQWEsRUFBRTtBQUNiQyxlQUFPLEVBQUVKLFdBREk7QUFFYksscUJBQWEsRUFBRSxzQkFGRjtBQUdiQyxXQUFHLEVBQUU7QUFIUSxPQURXO0FBTTFCQyxPQUFDLEVBQUUsR0FOdUI7QUFPMUJDLFVBQUksRUFBRTtBQVBvQixLQUE1QjtBQVNBckIsdURBQUksQ0FBQ2UsSUFBTCxDQUFVSixLQUFWLEVBQWlCLEdBQWpCLEVBQXNCO0FBQ3BCSyxtQkFBYSxFQUFFO0FBQ2JDLGVBQU8sRUFBRU4sS0FESTtBQUViTyxxQkFBYSxFQUFFLHNCQUZGO0FBR2JDLFdBQUcsRUFBRTtBQUhRLE9BREs7QUFNcEJDLE9BQUMsRUFBRSxHQU5pQjtBQU9wQkcsV0FBSyxFQUFFLEdBUGE7QUFRcEJGLFVBQUksRUFBRTtBQVJjLEtBQXRCO0FBVUQsR0FoRFEsQ0FBVDtBQWtEQSxTQUNFO0FBQUssYUFBUyxFQUFFRyxtRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELG1FQUFNLENBQUNFLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsbUVBQU0sQ0FBQ2hCLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLE9BQUcsRUFBR21CLEVBQUQsSUFBU25CLEVBQUUsR0FBR21CLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJ2QixLQUE3QixDQURGLENBREYsRUFJRTtBQUFLLFNBQUssRUFBRTtBQUFFd0IsY0FBUSxFQUFFO0FBQVosS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sT0FBRyxFQUFHRCxFQUFELElBQVNqQixJQUFJLEdBQUdpQixFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDdEIsUUFBakMsQ0FERixDQURGLENBSkYsRUFVRTtBQUFLLGFBQVMsRUFBRW1CLG1FQUFNLENBQUNsQixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxPQUFHLEVBQUdxQixFQUFELElBQVNmLFlBQVksR0FBR2UsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUcsT0FBRyxFQUFHQSxFQUFELElBQVNkLFdBQVcsR0FBR2MsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ3JCLE9BQXJDLENBRkYsQ0FWRixDQURGLEVBZ0JFO0FBQUssYUFBUyxFQUFFa0IsbUVBQU0sQ0FBQ2pCLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUEsS0FBVjtBQUFpQixPQUFHLEVBQUMsU0FBckI7QUFBK0IsT0FBRyxFQUFHb0IsRUFBRCxJQUFTaEIsS0FBSyxHQUFHZ0IsRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBaEJGLENBREY7QUFzQkQsQ0EvRUQ7O0dBQU14QixlOztLQUFBQSxlO0FBaUZTQSw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL2NvbXBvbmVudHMvUHJvamVjdEl0ZW1MZWZ0L1Byb2plY3RJdGVtTGVmdC5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvamVjdEl0ZW1MZWZ0Lm1vZHVsZS5zY3NzXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IFByb2plY3RJdGVtTGVmdCA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgdGVjaG5vcywgaW1hZ2UgfSkgPT4ge1xuICBsZXQgaDMgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBwYXJhID0gdXNlUmVmKG51bGwpO1xuICBsZXQgcGhvdG8gPSB1c2VSZWYobnVsbCk7XG4gIGxldCB0ZWNobm9zVGl0bGUgPSB1c2VSZWYobnVsbCk7XG4gIGxldCB0ZWNobm9zUGFyYSA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdzYXAuZnJvbShoMywgMSwge1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBoMyxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJyZXN0YXJ0IHBsYXkgcmV2ZXJzZVwiLFxuICAgICAgICBlbmQ6IFwidG9wIDk0JVwiLFxuICAgICAgfSxcbiAgICAgIHk6IDIwMCxcbiAgICAgIGVhc2U6IFwiYmFja1wiLFxuICAgIH0pO1xuICAgIGdzYXAuZnJvbShwYXJhLCAxLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHBhcmEsXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicmVzdGFydCBwbGF5IHJldmVyc2VcIixcbiAgICAgICAgZW5kOiBcInRvcCA4MCVcIixcbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgZWFzZTogXCJiYWNrXCIsXG4gICAgICAvL2RlbGF5OiA1LFxuICAgIH0pO1xuICAgIGdzYXAuZnJvbSh0ZWNobm9zVGl0bGUsIDEsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogdGVjaG5vc1RpdGxlLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInJlc3RhcnQgcGxheSByZXZlcnNlXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgOTglXCIsXG4gICAgICB9LFxuICAgICAgeTogMjAwLFxuICAgICAgZWFzZTogXCJiYWNrXCIsXG4gICAgfSk7XG4gICAgZ3NhcC5mcm9tKHRlY2hub3NQYXJhLCAxLjIsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogdGVjaG5vc1BhcmEsXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicmVzdGFydCBwbGF5IHJldmVyc2VcIixcbiAgICAgICAgZW5kOiBcInRvcCA5OCVcIixcbiAgICAgIH0sXG4gICAgICB5OiAyMDAsXG4gICAgICBlYXNlOiBcImJhY2tcIixcbiAgICB9KTtcbiAgICBnc2FwLmZyb20ocGhvdG8sIDEuMiwge1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBwaG90byxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJyZXN0YXJ0IHBsYXkgcmV2ZXJzZVwiLFxuICAgICAgICBlbmQ6IFwidG9wIDEwMCVcIixcbiAgICAgIH0sXG4gICAgICB5OiAyNTAsXG4gICAgICBzY2FsZTogMS4yLFxuICAgICAgZWFzZTogXCJiYWNrXCIsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oM30+XG4gICAgICAgICAgPGgzIHJlZj17KGVsKSA9PiAoaDMgPSBlbCl9Pnt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIHJlZj17KGVsKSA9PiAocGFyYSA9IGVsKX0+e3N1YnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vc30+XG4gICAgICAgICAgPGg1IHJlZj17KGVsKSA9PiAodGVjaG5vc1RpdGxlID0gZWwpfT5NYWluIFRlY2hub3MgOjwvaDU+XG4gICAgICAgICAgPHAgcmVmPXsoZWwpID0+ICh0ZWNobm9zUGFyYSA9IGVsKX0+e3RlY2hub3N9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiUHJvamVjdFwiIHJlZj17KGVsKSA9PiAocGhvdG8gPSBlbCl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJdGVtTGVmdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.component.jsx\n");

/***/ })

})