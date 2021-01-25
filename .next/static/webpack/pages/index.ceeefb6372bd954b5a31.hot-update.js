webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.component.jsx":
/*!******************************************************************************************!*\
  !*** ./src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.component.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/gsap */ \"./node_modules/gsap/dist/gsap.js\");\n/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectItemLeft.module.scss */ \"./src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.module.scss\");\n/* harmony import */ var _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/mac/Developer/myPortfolio/src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.component.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\ngsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__[\"ScrollTrigger\"]);\n\nconst ProjectItemLeft = ({\n  title,\n  subtitle,\n  technos,\n  image\n}) => {\n  _s();\n\n  let h3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let para = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let photo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let technosTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let technosPara = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(h3, 1, {\n      scrollTrigger: {\n        trigger: h3,\n        toggleActions: \"restart play reverse\",\n        end: \"top 94%\"\n      },\n      y: 200,\n      ease: \"back\"\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(para, 3, {\n      scrollTrigger: {\n        trigger: para,\n        toggleActions: \"restart play reverse\",\n        end: \"top 80%\"\n      },\n      //opacity: 0,\n      ease: \"back\",\n      y: 200 //delay: 5,\n\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from([technosPara, technosTitle], 1, {\n      scrollTrigger: {\n        trigger: [technosPara, technosTitle],\n        toggleActions: \"restart play reverse\",\n        end: \"top 98%\"\n      },\n      y: 200,\n      ease: \"back\"\n    });\n    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].from(photo, 1.2, {\n      scrollTrigger: {\n        trigger: photo,\n        toggleActions: \"restart play reverse\",\n        end: \"top 100%\"\n      },\n      y: -250,\n      scale: 1.2,\n      ease: \"back\"\n    });\n  });\n  return __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.h3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    ref: el => h3 = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, title)), __jsx(\"div\", {\n    style: {\n      overflow: \"hidden\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    ref: el => para = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, subtitle))), __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.technos,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"h5\", {\n    ref: el => technosTitle = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, \"Main Technos :\"), __jsx(\"p\", {\n    ref: el => technosPara = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, technos))), __jsx(\"div\", {\n    className: _ProjectItemLeft_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: image,\n    alt: \"Project\",\n    ref: el => photo = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(ProjectItemLeft, \"Ifqb72STie8jRKqKe+zc8kaIczA=\");\n\n_c = ProjectItemLeft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItemLeft);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectItemLeft\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0SXRlbUxlZnQvUHJvamVjdEl0ZW1MZWZ0LmNvbXBvbmVudC5qc3g/Y2FiNCJdLCJuYW1lcyI6WyJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiUHJvamVjdEl0ZW1MZWZ0IiwidGl0bGUiLCJzdWJ0aXRsZSIsInRlY2hub3MiLCJpbWFnZSIsImgzIiwidXNlUmVmIiwicGFyYSIsInBob3RvIiwidGVjaG5vc1RpdGxlIiwidGVjaG5vc1BhcmEiLCJ1c2VFZmZlY3QiLCJmcm9tIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJ0b2dnbGVBY3Rpb25zIiwiZW5kIiwieSIsImVhc2UiLCJzY2FsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJlbCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQUEsbURBQUksQ0FBQ0MsY0FBTCxDQUFvQkMscUVBQXBCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsVUFBVDtBQUFtQkMsU0FBbkI7QUFBNEJDO0FBQTVCLENBQUQsS0FBeUM7QUFBQTs7QUFDL0QsTUFBSUMsRUFBRSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBZjtBQUNBLE1BQUlDLElBQUksR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQWpCO0FBQ0EsTUFBSUUsS0FBSyxHQUFHRixvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQSxNQUFJRyxZQUFZLEdBQUdILG9EQUFNLENBQUMsSUFBRCxDQUF6QjtBQUNBLE1BQUlJLFdBQVcsR0FBR0osb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRUFLLHlEQUFTLENBQUMsTUFBTTtBQUNkZCx1REFBSSxDQUFDZSxJQUFMLENBQVVQLEVBQVYsRUFBYyxDQUFkLEVBQWlCO0FBQ2ZRLG1C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QUcsRUFBR21CLEVBQUQsSUFBU2YsS0FBSyxHQUFHZSxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsQ0FERjtBQXNCRCxDQXZFRDs7R0FBTXZCLGU7O0tBQUFBLGU7QUF5RVNBLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvY29tcG9uZW50cy9Qcm9qZWN0SXRlbUxlZnQvUHJvamVjdEl0ZW1MZWZ0LmNvbXBvbmVudC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcC9kaXN0L2dzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9qZWN0SXRlbUxlZnQubW9kdWxlLnNjc3NcIjtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3QgUHJvamVjdEl0ZW1MZWZ0ID0gKHsgdGl0bGUsIHN1YnRpdGxlLCB0ZWNobm9zLCBpbWFnZSB9KSA9PiB7XG4gIGxldCBoMyA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHBhcmEgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBwaG90byA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRlY2hub3NUaXRsZSA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRlY2hub3NQYXJhID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5mcm9tKGgzLCAxLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IGgzLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInJlc3RhcnQgcGxheSByZXZlcnNlXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgOTQlXCIsXG4gICAgICB9LFxuICAgICAgeTogMjAwLFxuICAgICAgZWFzZTogXCJiYWNrXCIsXG4gICAgfSk7XG4gICAgZ3NhcC5mcm9tKHBhcmEsIDMsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogcGFyYSxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJyZXN0YXJ0IHBsYXkgcmV2ZXJzZVwiLFxuICAgICAgICBlbmQ6IFwidG9wIDgwJVwiLFxuICAgICAgfSxcbiAgICAgIC8vb3BhY2l0eTogMCxcbiAgICAgIGVhc2U6IFwiYmFja1wiLFxuICAgICAgeTogMjAwLFxuICAgICAgLy9kZWxheTogNSxcbiAgICB9KTtcbiAgICBnc2FwLmZyb20oW3RlY2hub3NQYXJhLCB0ZWNobm9zVGl0bGVdLCAxLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IFt0ZWNobm9zUGFyYSwgdGVjaG5vc1RpdGxlXSxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJyZXN0YXJ0IHBsYXkgcmV2ZXJzZVwiLFxuICAgICAgICBlbmQ6IFwidG9wIDk4JVwiLFxuICAgICAgfSxcbiAgICAgIHk6IDIwMCxcbiAgICAgIGVhc2U6IFwiYmFja1wiLFxuICAgIH0pO1xuICAgIGdzYXAuZnJvbShwaG90bywgMS4yLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHBob3RvLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInJlc3RhcnQgcGxheSByZXZlcnNlXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgMTAwJVwiLFxuICAgICAgfSxcbiAgICAgIHk6IC0yNTAsXG4gICAgICBzY2FsZTogMS4yLFxuICAgICAgZWFzZTogXCJiYWNrXCIsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oM30+XG4gICAgICAgICAgPGgzIHJlZj17KGVsKSA9PiAoaDMgPSBlbCl9Pnt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIHJlZj17KGVsKSA9PiAocGFyYSA9IGVsKX0+e3N1YnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vc30+XG4gICAgICAgICAgPGg1IHJlZj17KGVsKSA9PiAodGVjaG5vc1RpdGxlID0gZWwpfT5NYWluIFRlY2hub3MgOjwvaDU+XG4gICAgICAgICAgPHAgcmVmPXsoZWwpID0+ICh0ZWNobm9zUGFyYSA9IGVsKX0+e3RlY2hub3N9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiUHJvamVjdFwiIHJlZj17KGVsKSA9PiAocGhvdG8gPSBlbCl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJdGVtTGVmdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects/components/ProjectItemLeft/ProjectItemLeft.component.jsx\n");

/***/ })

})