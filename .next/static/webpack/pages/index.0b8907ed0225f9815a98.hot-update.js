webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/Header.component.jsx":
/*!****************************************************!*\
  !*** ./src/components/Header/Header.component.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hamburger */ "./src/components/Header/Hamburger/index.js");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.scss */ "./src/components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\isabe\\Developper\\myPortfolio\\src\\components\\Header\\Header.component.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = () => {
  _s();

  let close1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let close2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let close3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let menuLogo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let menuProject = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let menuIcon = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]({
    delay: 0.8
  }); // State for menu button

  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    initial: false,
    clicked: null
  }); // State for disabled button

  const {
    0: disabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // HEADER ANIMATIONS
    tl.to(menuLogo, 0.1, {
      top: "0px",
      ease: "back",
      opacity: 1
    }, "Start"); // tl.from(
    //   menuProject,
    //   0.1,
    //   {
    //     y: "15px",
    //     ease: "back",
    //     //delay: .7,
    //     opacity: 0,
    //   },
    //   "Start"
    // );

    tl.to(menuIcon, 0.3, {
      top: 0,
      ease: "back",
      opacity: 1
    }, "Start"); // Menu icon animations

    if (state.clicked === true) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(close1, {
        css: {
          rotation: 45,
          top: 20
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(close2, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(close3, {
        css: {
          rotation: -45,
          top: 20
        }
      });
    } else if (state.clicked === false) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to([menuLogo,
      /*menuProject,*/
      menuIcon], 0, {
        y: 0,
        delay: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(close1, {
        css: {
          rotation: 0,
          top: 10
        },
        delay: 0.3,
        duration: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(close2, {
        opacity: 1,
        delay: 0.5,
        duration: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(close3, {
        css: {
          rotation: 0,
          top: 24
        },
        delay: 0.5,
        duration: 0.3
      });
    } // Page changing
    // history.listen(() => {
    // setState({ clicked: false });
    // });

  }, []);

  const handleMenu = () => {
    disableMenu(); // This will be rendered when the app first open

    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true
      });
    } //The next two, for the toggle
    else if (state.clicked === true) {
        setState({
          clicked: !state.clicked
        });
      } else if (state.clicked === false) {
        setState({
          clicked: !state.clicked
        });
      }
  };
  /* Determined if our menu should be disabled. 
    This is useful to prevent spam */


  const disableMenu = () => {
    setState(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
    ref: el => menuLogo = el,
    onClick: () => setState({
      clicked: false
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, "M."))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, "projects"), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.arrowIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/DottedWhite.svg",
    alt: "arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menu,
    onClick: handleMenu,
    disabled: disabled,
    ref: el => menuIcon = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.one,
    ref: el => {
      close1 = el;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.two,
    ref: el => {
      close2 = el;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.three,
    ref: el => {
      close3 = el;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  })), state.clicked && __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }));
};

_s(Header, "GZjuyZeVclGLKwe3iVjHcn3JQxg=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImNsb3NlMSIsInVzZVJlZiIsImNsb3NlMiIsImNsb3NlMyIsIm1lbnVMb2dvIiwibWVudVByb2plY3QiLCJtZW51SWNvbiIsInRsIiwiVGltZWxpbmVMaXRlIiwiZGVsYXkiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJpbml0aWFsIiwiY2xpY2tlZCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJ1c2VFZmZlY3QiLCJ0byIsInRvcCIsImVhc2UiLCJvcGFjaXR5IiwiVHdlZW5NYXgiLCJjc3MiLCJyb3RhdGlvbiIsInkiLCJkdXJhdGlvbiIsImhhbmRsZU1lbnUiLCJkaXNhYmxlTWVudSIsInNldFRpbWVvdXQiLCJjbGFzc2VzIiwiaGVhZGVyIiwibG9nbyIsImVsIiwiYXJyb3dJY29uIiwibWVudSIsIm9uZSIsInR3byIsInRocmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsTUFBSUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxNQUFJQyxNQUFNLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUNBLE1BQUlFLE1BQU0sR0FBR0Ysb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBQ0EsTUFBSUcsUUFBUSxHQUFHSCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFJSSxXQUFXLEdBQUdKLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQUlLLFFBQVEsR0FBR0wsb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBRUEsTUFBSU0sRUFBRSxHQUFHLElBQUlDLGlEQUFKLENBQWlCO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBQWpCLENB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QUEsTTtBQTBMU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGI4OTA3ZWQwMjI1Zjk4MTVhOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBUaW1lbGluZUxpdGUsIFR3ZWVuTWF4IH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmltcG9ydCBIYW1idXJnZXIgZnJvbSBcIi4vSGFtYnVyZ2VyXCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBsZXQgY2xvc2UxID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBjbG9zZTIgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNsb3NlMyA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgbWVudUxvZ28gPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IG1lbnVQcm9qZWN0ID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBtZW51SWNvbiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSh7IGRlbGF5OiAwLjggfSk7XHJcblxyXG4gIC8vIFN0YXRlIGZvciBtZW51IGJ1dHRvblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgaW5pdGlhbDogZmFsc2UsXHJcbiAgICBjbGlja2VkOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICAvLyBTdGF0ZSBmb3IgZGlzYWJsZWQgYnV0dG9uXHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBIRUFERVIgQU5JTUFUSU9OU1xyXG4gICAgdGwudG8oXHJcbiAgICAgIG1lbnVMb2dvLFxyXG4gICAgICAwLjEsXHJcbiAgICAgIHtcclxuICAgICAgICB0b3A6IFwiMHB4XCIsXHJcbiAgICAgICAgZWFzZTogXCJiYWNrXCIsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgfSxcclxuICAgICAgXCJTdGFydFwiXHJcbiAgICApO1xyXG4gICAgLy8gdGwuZnJvbShcclxuICAgIC8vICAgbWVudVByb2plY3QsXHJcbiAgICAvLyAgIDAuMSxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIHk6IFwiMTVweFwiLFxyXG4gICAgLy8gICAgIGVhc2U6IFwiYmFja1wiLFxyXG4gICAgLy8gICAgIC8vZGVsYXk6IC43LFxyXG4gICAgLy8gICAgIG9wYWNpdHk6IDAsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIFwiU3RhcnRcIlxyXG4gICAgLy8gKTtcclxuICAgIHRsLnRvKFxyXG4gICAgICBtZW51SWNvbixcclxuICAgICAgMC4zLFxyXG4gICAgICB7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGVhc2U6IFwiYmFja1wiLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiU3RhcnRcIlxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBNZW51IGljb24gYW5pbWF0aW9uc1xyXG4gICAgaWYgKHN0YXRlLmNsaWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgVHdlZW5NYXgudG8oY2xvc2UxLCB7XHJcbiAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICByb3RhdGlvbjogNDUsXHJcbiAgICAgICAgICB0b3A6IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTIsIHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9KTtcclxuICAgICAgVHdlZW5NYXgudG8oY2xvc2UzLCB7XHJcbiAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICByb3RhdGlvbjogLTQ1LFxyXG4gICAgICAgICAgdG9wOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgVHdlZW5NYXgudG8oW21lbnVMb2dvLCAvKm1lbnVQcm9qZWN0LCovIG1lbnVJY29uXSwgMCwge1xyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTEsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGF5OiAwLjMsXHJcbiAgICAgICAgZHVyYXRpb246IDAuNSxcclxuICAgICAgfSk7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMiwge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZGVsYXk6IDAuNSxcclxuICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICB9KTtcclxuICAgICAgVHdlZW5NYXgudG8oY2xvc2UzLCB7XHJcbiAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICByb3RhdGlvbjogMCxcclxuICAgICAgICAgIHRvcDogMjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxheTogMC41LFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhZ2UgY2hhbmdpbmdcclxuICAgIC8vIGhpc3RvcnkubGlzdGVuKCgpID0+IHtcclxuICAgIC8vIHNldFN0YXRlKHsgY2xpY2tlZDogZmFsc2UgfSk7XHJcbiAgICAvLyB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBkaXNhYmxlTWVudSgpO1xyXG4gICAgLy8gVGhpcyB3aWxsIGJlIHJlbmRlcmVkIHdoZW4gdGhlIGFwcCBmaXJzdCBvcGVuXHJcbiAgICBpZiAoc3RhdGUuaW5pdGlhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIGluaXRpYWw6IG51bGwsXHJcbiAgICAgICAgY2xpY2tlZDogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL1RoZSBuZXh0IHR3bywgZm9yIHRoZSB0b2dnbGVcclxuICAgIGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIGNsaWNrZWQ6ICFzdGF0ZS5jbGlja2VkLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIGNsaWNrZWQ6ICFzdGF0ZS5jbGlja2VkLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKiBEZXRlcm1pbmVkIGlmIG91ciBtZW51IHNob3VsZCBiZSBkaXNhYmxlZC4gXHJcbiAgICBUaGlzIGlzIHVzZWZ1bCB0byBwcmV2ZW50IHNwYW0gKi9cclxuICBjb25zdCBkaXNhYmxlTWVudSA9ICgpID0+IHtcclxuICAgIHNldFN0YXRlKCFkaXNhYmxlZCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgfSwgMTIwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XHJcbiAgICAgICAgICByZWY9eyhlbCkgPT4gKG1lbnVMb2dvID0gZWwpfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdGUoeyBjbGlja2VkOiBmYWxzZSB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YT5NLjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJvamVjdHN9IHJlZj17KGVsKSA9PiAobWVudVByb2plY3QgPSBlbCl9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgIDxhPlByb2plY3RzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+cHJvamVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3dJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9Eb3R0ZWRXaGl0ZS5zdmdcIiBhbHQ9XCJhcnJvd1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+ICAgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51fVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICByZWY9eyhlbCkgPT4gKG1lbnVJY29uID0gZWwpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9uZX1cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlMSA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnR3b31cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlMiA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRocmVlfVxyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgY2xvc2UzID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzdGF0ZS5jbGlja2VkICYmIDxIYW1idXJnZXIgc3RhdGU9e3N0YXRlfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=