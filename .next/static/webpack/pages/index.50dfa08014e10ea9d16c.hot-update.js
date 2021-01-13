webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/Header.component.jsx":
/*!****************************************************!*\
  !*** ./src/components/Header/Header.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hamburger */ \"./src/components/Header/Hamburger/index.js\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mac/Developer/myPortfolio/src/components/Header/Header.component.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Header = () => {\n  _s();\n\n  let close1 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let close2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let close3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let menuLogo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let menuProject = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let menuIcon = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let tl = new gsap__WEBPACK_IMPORTED_MODULE_2__[\"TimelineLite\"]({\n    delay: 0.8\n  }); // State for menu button\n\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    initial: false,\n    clicked: null\n  }); // State for disabled button\n\n  const {\n    0: disabled,\n    1: setDisabled\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // HEADER ANIMATIONS\n    tl.to(menuLogo, 0.1, {\n      top: \"0px\",\n      ease: \"back\",\n      opacity: 1\n    }, \"Start\"); // tl.from(\n    //   menuProject,\n    //   0.1,\n    //   {\n    //     y: \"15px\",\n    //     ease: \"back\",\n    //     //delay: .7,\n    //     opacity: 0,\n    //   },\n    //   \"Start\"\n    // );\n\n    tl.to(menuIcon, 0.3, {\n      top: 0,\n      ease: \"back\",\n      opacity: 1\n    }, \"Start\"); // Menu icon animations\n\n    if (state.clicked === true) {\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close1, {\n        css: {\n          rotation: 45,\n          top: 20\n        }\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close2, {\n        opacity: 0\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close3, {\n        css: {\n          rotation: -45,\n          top: 20\n        }\n      });\n    } else if (state.clicked === false) {\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to([menuLogo,\n      /*menuProject,*/\n      menuIcon], 0, {\n        y: 0,\n        delay: 0\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close1, {\n        css: {\n          rotation: 0,\n          top: 10\n        },\n        delay: 0.3,\n        duration: 0.5\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close2, {\n        opacity: 1,\n        delay: 0.5,\n        duration: 0.5\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close3, {\n        css: {\n          rotation: 0,\n          top: 24\n        },\n        delay: 0.5,\n        duration: 0.3\n      });\n    } // Page changing\n    // history.listen(() => {\n    // setState({ clicked: false });\n    // });\n\n  }, []);\n\n  const handleMenu = () => {\n    disableMenu(); // This will be rendered when the app first open\n\n    if (state.initial === false) {\n      setState({\n        initial: null,\n        clicked: true\n      });\n    } //The next two, for the toggle\n    else if (state.clicked === true) {\n        setState({\n          clicked: !state.clicked\n        });\n      } else if (state.clicked === false) {\n        setState({\n          clicked: !state.clicked\n        });\n      }\n  };\n  /* Determined if our menu should be disabled. \n    This is useful to prevent spam */\n\n\n  const disableMenu = () => {\n    setState(!disabled);\n    setTimeout(() => {\n      setDisabled(false);\n    }, 1200);\n  };\n\n  return __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,\n    ref: el => menuLogo = el,\n    onClick: () => setState({\n      clicked: false\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 11\n    }\n  }, \"M.\"))), __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menu,\n    onClick: handleMenu,\n    disabled: disabled,\n    ref: el => menuIcon = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.one,\n    ref: el => {\n      close1 = el;\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.two,\n    ref: el => {\n      close2 = el;\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.three,\n    ref: el => {\n      close3 = el;\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 9\n    }\n  })), state.clicked && __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    state: state,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s(Header, \"30H8ZMSHxRCDtNIcAtiWy4mXHrs=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4PzQ2OWIiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2xvc2UxIiwidXNlUmVmIiwiY2xvc2UyIiwiY2xvc2UzIiwibWVudUxvZ28iLCJtZW51UHJvamVjdCIsIm1lbnVJY29uIiwidGwiLCJUaW1lbGluZUxpdGUiLCJkZWxheSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImluaXRpYWwiLCJjbGlja2VkIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsInVzZUVmZmVjdCIsInRvIiwidG9wIiwiZWFzZSIsIm9wYWNpdHkiLCJUd2Vlbk1heCIsImNzcyIsInJvdGF0aW9uIiwieSIsImR1cmF0aW9uIiwiaGFuZGxlTWVudSIsImRpc2FibGVNZW51Iiwic2V0VGltZW91dCIsImNsYXNzZXMiLCJoZWFkZXIiLCJsb2dvIiwiZWwiLCJtZW51Iiwib25lIiwidHdvIiwidGhyZWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQUE7O0FBQ25CLE1BQUlDLE1BQU0sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBQ0EsTUFBSUMsTUFBTSxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxNQUFJRSxNQUFNLEdBQUdGLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUNBLE1BQUlHLFFBQVEsR0FBR0gsb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBQ0EsTUFBSUksV0FBVyxHQUFHSixvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxNQUFJSyxRQUFRLEdBQUdMLG9EQUFNLENBQUMsSUFBRCxDQUFyQjtBQUVBLE1BQUlNLEVBQUUsR0FBRyxJQUFJQyxpREFBSixDQUFpQjtBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFqQixDQUFULENBUm1CLENBVW5COztB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUNFLGFBQVMsRUFBRUgsMERBQU8sQ0FBQ0ssR0FEckI7QUFFRSxPQUFHLEVBQUdGLEVBQUQsSUFBUTtBQUNYakMsWUFBTSxHQUFHaUMsRUFBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBWUU7QUFDRSxhQUFTLEVBQUVILDBEQUFPLENBQUNNLEdBRHJCO0FBRUUsT0FBRyxFQUFHSCxFQUFELElBQVE7QUFDWC9CLFlBQU0sR0FBRytCLEVBQVQ7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWtCRTtBQUNFLGFBQVMsRUFBRUgsMERBQU8sQ0FBQ08sS0FEckI7QUFFRSxPQUFHLEVBQUdKLEVBQUQsSUFBUTtBQUNYOUIsWUFBTSxHQUFHOEIsRUFBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixDQWZGLEVBd0NHdkIsS0FBSyxDQUFDSSxPQUFOLElBQWlCLE1BQUMsa0RBQUQ7QUFBVyxTQUFLLEVBQUVKLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4Q3BCLENBREY7QUE0Q0QsQ0FsTEQ7O0dBQU1YLE07O0tBQUFBLE07QUFvTFNBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgVGltZWxpbmVMaXRlLCBnc2FwLCBQb3dlcjMsIFR3ZWVuTWF4IH0gZnJvbSBcImdzYXBcIjtcblxuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiLi9IYW1idXJnZXJcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgbGV0IGNsb3NlMSA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGNsb3NlMiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGNsb3NlMyA9IHVzZVJlZihudWxsKTtcbiAgbGV0IG1lbnVMb2dvID0gdXNlUmVmKG51bGwpO1xuICBsZXQgbWVudVByb2plY3QgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBtZW51SWNvbiA9IHVzZVJlZihudWxsKTtcblxuICBsZXQgdGwgPSBuZXcgVGltZWxpbmVMaXRlKHsgZGVsYXk6IDAuOCB9KTtcblxuICAvLyBTdGF0ZSBmb3IgbWVudSBidXR0b25cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5pdGlhbDogZmFsc2UsXG4gICAgY2xpY2tlZDogbnVsbCxcbiAgfSk7XG5cbiAgLy8gU3RhdGUgZm9yIGRpc2FibGVkIGJ1dHRvblxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEhFQURFUiBBTklNQVRJT05TXG4gICAgdGwudG8oXG4gICAgICBtZW51TG9nbyxcbiAgICAgIDAuMSxcbiAgICAgIHtcbiAgICAgICAgdG9wOiBcIjBweFwiLFxuICAgICAgICBlYXNlOiBcImJhY2tcIixcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgICBcIlN0YXJ0XCJcbiAgICApO1xuICAgIC8vIHRsLmZyb20oXG4gICAgLy8gICBtZW51UHJvamVjdCxcbiAgICAvLyAgIDAuMSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgeTogXCIxNXB4XCIsXG4gICAgLy8gICAgIGVhc2U6IFwiYmFja1wiLFxuICAgIC8vICAgICAvL2RlbGF5OiAuNyxcbiAgICAvLyAgICAgb3BhY2l0eTogMCxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBcIlN0YXJ0XCJcbiAgICAvLyApO1xuICAgIHRsLnRvKFxuICAgICAgbWVudUljb24sXG4gICAgICAwLjMsXG4gICAgICB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgZWFzZTogXCJiYWNrXCIsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgICAgXCJTdGFydFwiXG4gICAgKTtcblxuICAgIC8vIE1lbnUgaWNvbiBhbmltYXRpb25zXG4gICAgaWYgKHN0YXRlLmNsaWNrZWQgPT09IHRydWUpIHtcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMSwge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICByb3RhdGlvbjogNDUsXG4gICAgICAgICAgdG9wOiAyMCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgVHdlZW5NYXgudG8oY2xvc2UyLCB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9KTtcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMywge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICByb3RhdGlvbjogLTQ1LFxuICAgICAgICAgIHRvcDogMjAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICBUd2Vlbk1heC50byhbbWVudUxvZ28sIC8qbWVudVByb2plY3QsKi8gbWVudUljb25dLCAwLCB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgfSk7XG4gICAgICBUd2Vlbk1heC50byhjbG9zZTEsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXk6IDAuMyxcbiAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgIH0pO1xuICAgICAgVHdlZW5NYXgudG8oY2xvc2UyLCB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICB9KTtcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMywge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICB0b3A6IDI0LFxuICAgICAgICB9LFxuICAgICAgICBkZWxheTogMC41LFxuICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFnZSBjaGFuZ2luZ1xuICAgIC8vIGhpc3RvcnkubGlzdGVuKCgpID0+IHtcbiAgICAvLyBzZXRTdGF0ZSh7IGNsaWNrZWQ6IGZhbHNlIH0pO1xuICAgIC8vIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTWVudSA9ICgpID0+IHtcbiAgICBkaXNhYmxlTWVudSgpO1xuICAgIC8vIFRoaXMgd2lsbCBiZSByZW5kZXJlZCB3aGVuIHRoZSBhcHAgZmlyc3Qgb3BlblxuICAgIGlmIChzdGF0ZS5pbml0aWFsID09PSBmYWxzZSkge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBpbml0aWFsOiBudWxsLFxuICAgICAgICBjbGlja2VkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vVGhlIG5leHQgdHdvLCBmb3IgdGhlIHRvZ2dsZVxuICAgIGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IHRydWUpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgY2xpY2tlZDogIXN0YXRlLmNsaWNrZWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGNsaWNrZWQ6ICFzdGF0ZS5jbGlja2VkLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qIERldGVybWluZWQgaWYgb3VyIG1lbnUgc2hvdWxkIGJlIGRpc2FibGVkLiBcbiAgICBUaGlzIGlzIHVzZWZ1bCB0byBwcmV2ZW50IHNwYW0gKi9cbiAgY29uc3QgZGlzYWJsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoIWRpc2FibGVkKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcbiAgICB9LCAxMjAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XG4gICAgICAgICAgcmVmPXsoZWwpID0+IChtZW51TG9nbyA9IGVsKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSh7IGNsaWNrZWQ6IGZhbHNlIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPGE+TS48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2plY3RzfSByZWY9eyhlbCkgPT4gKG1lbnVQcm9qZWN0ID0gZWwpfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgIDxhPlByb2plY3RzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51fVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHJlZj17KGVsKSA9PiAobWVudUljb24gPSBlbCl9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub25lfVxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICBjbG9zZTEgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudHdvfVxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICBjbG9zZTIgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGhyZWV9XG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIGNsb3NlMyA9IGVsO1xuICAgICAgICAgIH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3N0YXRlLmNsaWNrZWQgJiYgPEhhbWJ1cmdlciBzdGF0ZT17c3RhdGV9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/Header.component.jsx\n");

/***/ })

})