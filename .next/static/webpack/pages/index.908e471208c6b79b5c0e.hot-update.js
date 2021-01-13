webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/Header.component.jsx":
/*!****************************************************!*\
  !*** ./src/components/Header/Header.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hamburger */ \"./src/components/Header/Hamburger/index.js\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mac/Developer/myPortfolio/src/components/Header/Header.component.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Header = () => {\n  _s();\n\n  let close1 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let close2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let close3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let menuLogo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let menuProject = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let menuIcon = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let tl = new gsap__WEBPACK_IMPORTED_MODULE_2__[\"TimelineLite\"]({\n    delay: 0.8\n  }); // State for menu button\n\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    initial: false,\n    clicked: null\n  }); // State for disabled button\n\n  const {\n    0: disabled,\n    1: setDisabled\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // HEADER ANIMATIONS\n    tl.to(menuLogo, 0.1, {\n      to: \"0px\",\n      ease: \"back\",\n      opacity: 1\n    }, \"Start\"); // tl.from(\n    //   menuProject,\n    //   0.1,\n    //   {\n    //     y: \"15px\",\n    //     ease: \"back\",\n    //     //delay: .7,\n    //     opacity: 0,\n    //   },\n    //   \"Start\"\n    // );\n\n    tl.from(menuIcon, 0.3, {\n      y: \"15px\",\n      ease: \"back\",\n      //delay: .5,\n      opacity: 0\n    }, \"Start\"); // Menu icon animations\n\n    if (state.clicked === true) {\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close1, {\n        css: {\n          rotation: 45,\n          top: 20\n        }\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close2, {\n        opacity: 0\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close3, {\n        css: {\n          rotation: -45,\n          top: 20\n        }\n      });\n    } else if (state.clicked === false) {\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to([menuLogo,\n      /*menuProject,*/\n      menuIcon], 0, {\n        y: 0,\n        delay: 0\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close1, {\n        css: {\n          rotation: 0,\n          top: 10\n        },\n        delay: 0.3,\n        duration: 0.5\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close2, {\n        opacity: 1,\n        delay: 0.5,\n        duration: 0.5\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"TweenMax\"].to(close3, {\n        css: {\n          rotation: 0,\n          top: 24\n        },\n        delay: 0.5,\n        duration: 0.3\n      });\n    } // Page changing\n    // history.listen(() => {\n    // setState({ clicked: false });\n    // });\n\n  }, []);\n\n  const handleMenu = () => {\n    disableMenu(); // This will be rendered when the app first open\n\n    if (state.initial === false) {\n      setState({\n        initial: null,\n        clicked: true\n      });\n    } //The next two, for the toggle\n    else if (state.clicked === true) {\n        setState({\n          clicked: !state.clicked\n        });\n      } else if (state.clicked === false) {\n        setState({\n          clicked: !state.clicked\n        });\n      }\n  };\n  /* Determined if our menu should be disabled. \n    This is useful to prevent spam */\n\n\n  const disableMenu = () => {\n    setState(!disabled);\n    setTimeout(() => {\n      setDisabled(false);\n    }, 1200);\n  };\n\n  return __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,\n    ref: el => menuLogo = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 9\n    }\n  }, \"M.\")), __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menu,\n    onClick: handleMenu,\n    disabled: disabled,\n    ref: el => menuIcon = el,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.one,\n    ref: el => {\n      close1 = el;\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.two,\n    ref: el => {\n      close2 = el;\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.three,\n    ref: el => {\n      close3 = el;\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  })), state.clicked && __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    state: state,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 25\n    }\n  }));\n};\n\n_s(Header, \"30H8ZMSHxRCDtNIcAtiWy4mXHrs=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4PzQ2OWIiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2xvc2UxIiwidXNlUmVmIiwiY2xvc2UyIiwiY2xvc2UzIiwibWVudUxvZ28iLCJtZW51UHJvamVjdCIsIm1lbnVJY29uIiwidGwiLCJUaW1lbGluZUxpdGUiLCJkZWxheSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImluaXRpYWwiLCJjbGlja2VkIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsInVzZUVmZmVjdCIsInRvIiwiZWFzZSIsIm9wYWNpdHkiLCJmcm9tIiwieSIsIlR3ZWVuTWF4IiwiY3NzIiwicm90YXRpb24iLCJ0b3AiLCJkdXJhdGlvbiIsImhhbmRsZU1lbnUiLCJkaXNhYmxlTWVudSIsInNldFRpbWVvdXQiLCJjbGFzc2VzIiwiaGVhZGVyIiwibG9nbyIsImVsIiwibWVudSIsIm9uZSIsInR3byIsInRocmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUNuQixNQUFJQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUNBLE1BQUlDLE1BQU0sR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBQ0EsTUFBSUUsTUFBTSxHQUFHRixvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxNQUFJRyxRQUFRLEdBQUdILG9EQUFNLENBQUMsSUFBRCxDQUFyQjtBQUNBLE1BQUlJLFdBQVcsR0FBR0osb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBQ0EsTUFBSUssUUFBUSxHQUFHTCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFFQSxNQUFJTSxFQUFFLEdBQUcsSUFBSUMsaURBQUosQ0FBaUI7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBakIsQ0FBVCxDQVJtQixD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QUFRO0FBQ1hsQyxZQUFNLEdBQUdrQyxFQUFUO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFZRTtBQUNFLGFBQVMsRUFBRUgsMERBQU8sQ0FBQ00sR0FEckI7QUFFRSxPQUFHLEVBQUdILEVBQUQsSUFBUTtBQUNYaEMsWUFBTSxHQUFHZ0MsRUFBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBa0JFO0FBQ0UsYUFBUyxFQUFFSCwwREFBTyxDQUFDTyxLQURyQjtBQUVFLE9BQUcsRUFBR0osRUFBRCxJQUFRO0FBQ1gvQixZQUFNLEdBQUcrQixFQUFUO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLENBVEYsRUFrQ0d4QixLQUFLLENBQUNJLE9BQU4sSUFBaUIsTUFBQyxrREFBRDtBQUFXLFNBQUssRUFBRUosS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDcEIsQ0FERjtBQXNDRCxDQTdLRDs7R0FBTVgsTTs7S0FBQUEsTTtBQStLU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNvbXBvbmVudC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBUaW1lbGluZUxpdGUsIGdzYXAsIFBvd2VyMywgVHdlZW5NYXggfSBmcm9tIFwiZ3NhcFwiO1xuXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCIuL0hhbWJ1cmdlclwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBsZXQgY2xvc2UxID0gdXNlUmVmKG51bGwpO1xuICBsZXQgY2xvc2UyID0gdXNlUmVmKG51bGwpO1xuICBsZXQgY2xvc2UzID0gdXNlUmVmKG51bGwpO1xuICBsZXQgbWVudUxvZ28gPSB1c2VSZWYobnVsbCk7XG4gIGxldCBtZW51UHJvamVjdCA9IHVzZVJlZihudWxsKTtcbiAgbGV0IG1lbnVJY29uID0gdXNlUmVmKG51bGwpO1xuXG4gIGxldCB0bCA9IG5ldyBUaW1lbGluZUxpdGUoeyBkZWxheTogMC44IH0pO1xuXG4gIC8vIFN0YXRlIGZvciBtZW51IGJ1dHRvblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBpbml0aWFsOiBmYWxzZSxcbiAgICBjbGlja2VkOiBudWxsLFxuICB9KTtcblxuICAvLyBTdGF0ZSBmb3IgZGlzYWJsZWQgYnV0dG9uXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSEVBREVSIEFOSU1BVElPTlNcbiAgICB0bC50byhcbiAgICAgIG1lbnVMb2dvLFxuICAgICAgMC4xLFxuICAgICAge1xuICAgICAgICB0bzogXCIwcHhcIixcbiAgICAgICAgZWFzZTogXCJiYWNrXCIsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgICAgXCJTdGFydFwiXG4gICAgKTtcbiAgICAvLyB0bC5mcm9tKFxuICAgIC8vICAgbWVudVByb2plY3QsXG4gICAgLy8gICAwLjEsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHk6IFwiMTVweFwiLFxuICAgIC8vICAgICBlYXNlOiBcImJhY2tcIixcbiAgICAvLyAgICAgLy9kZWxheTogLjcsXG4gICAgLy8gICAgIG9wYWNpdHk6IDAsXG4gICAgLy8gICB9LFxuICAgIC8vICAgXCJTdGFydFwiXG4gICAgLy8gKTtcbiAgICB0bC5mcm9tKFxuICAgICAgbWVudUljb24sXG4gICAgICAwLjMsXG4gICAgICB7XG4gICAgICAgIHk6IFwiMTVweFwiLFxuICAgICAgICBlYXNlOiBcImJhY2tcIixcbiAgICAgICAgLy9kZWxheTogLjUsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAgXCJTdGFydFwiXG4gICAgKTtcblxuICAgIC8vIE1lbnUgaWNvbiBhbmltYXRpb25zXG4gICAgaWYgKHN0YXRlLmNsaWNrZWQgPT09IHRydWUpIHtcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMSwge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICByb3RhdGlvbjogNDUsXG4gICAgICAgICAgdG9wOiAyMCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgVHdlZW5NYXgudG8oY2xvc2UyLCB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9KTtcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMywge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICByb3RhdGlvbjogLTQ1LFxuICAgICAgICAgIHRvcDogMjAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICBUd2Vlbk1heC50byhbbWVudUxvZ28sIC8qbWVudVByb2plY3QsKi8gbWVudUljb25dLCAwLCB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgfSk7XG4gICAgICBUd2Vlbk1heC50byhjbG9zZTEsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXk6IDAuMyxcbiAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgIH0pO1xuICAgICAgVHdlZW5NYXgudG8oY2xvc2UyLCB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICB9KTtcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMywge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICB0b3A6IDI0LFxuICAgICAgICB9LFxuICAgICAgICBkZWxheTogMC41LFxuICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFnZSBjaGFuZ2luZ1xuICAgIC8vIGhpc3RvcnkubGlzdGVuKCgpID0+IHtcbiAgICAvLyBzZXRTdGF0ZSh7IGNsaWNrZWQ6IGZhbHNlIH0pO1xuICAgIC8vIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTWVudSA9ICgpID0+IHtcbiAgICBkaXNhYmxlTWVudSgpO1xuICAgIC8vIFRoaXMgd2lsbCBiZSByZW5kZXJlZCB3aGVuIHRoZSBhcHAgZmlyc3Qgb3BlblxuICAgIGlmIChzdGF0ZS5pbml0aWFsID09PSBmYWxzZSkge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBpbml0aWFsOiBudWxsLFxuICAgICAgICBjbGlja2VkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vVGhlIG5leHQgdHdvLCBmb3IgdGhlIHRvZ2dsZVxuICAgIGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IHRydWUpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgY2xpY2tlZDogIXN0YXRlLmNsaWNrZWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGNsaWNrZWQ6ICFzdGF0ZS5jbGlja2VkLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qIERldGVybWluZWQgaWYgb3VyIG1lbnUgc2hvdWxkIGJlIGRpc2FibGVkLiBcbiAgICBUaGlzIGlzIHVzZWZ1bCB0byBwcmV2ZW50IHNwYW0gKi9cbiAgY29uc3QgZGlzYWJsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoIWRpc2FibGVkKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcbiAgICB9LCAxMjAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSByZWY9eyhlbCkgPT4gKG1lbnVMb2dvID0gZWwpfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5NLjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2plY3RzfSByZWY9eyhlbCkgPT4gKG1lbnVQcm9qZWN0ID0gZWwpfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgIDxhPlByb2plY3RzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51fVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHJlZj17KGVsKSA9PiAobWVudUljb24gPSBlbCl9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMub25lfVxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICBjbG9zZTEgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudHdvfVxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICBjbG9zZTIgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGhyZWV9XG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIGNsb3NlMyA9IGVsO1xuICAgICAgICAgIH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3N0YXRlLmNsaWNrZWQgJiYgPEhhbWJ1cmdlciBzdGF0ZT17c3RhdGV9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/Header.component.jsx\n");

/***/ })

})