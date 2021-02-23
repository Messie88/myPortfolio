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
      opacity: 1,
      delay: 0
    });
    tl.to(menuProject, 0.1, {
      top: "0px",
      ease: "back",
      delay: .1,
      opacity: 1
    });
    tl.to(menuIcon, 0.1, {
      top: 0,
      ease: "back",
      opacity: 1,
      delay: .2
    }); // Menu icon animations

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
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, "M"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.arrowIcon,
    ref: el => menuProject = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/DottedWhite.svg",
    alt: "arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menu,
    onClick: handleMenu,
    disabled: disabled,
    ref: el => menuIcon = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 169,
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
      lineNumber: 175,
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
      lineNumber: 181,
      columnNumber: 9
    }
  })), state.clicked && __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImNsb3NlMSIsInVzZVJlZiIsImNsb3NlMiIsImNsb3NlMyIsIm1lbnVMb2dvIiwibWVudVByb2plY3QiLCJtZW51SWNvbiIsInRsIiwiVGltZWxpbmVMaXRlIiwiZGVsYXkiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJpbml0aWFsIiwiY2xpY2tlZCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJ1c2VFZmZlY3QiLCJ0byIsInRvcCIsImVhc2UiLCJvcGFjaXR5IiwiVHdlZW5NYXgiLCJjc3MiLCJyb3RhdGlvbiIsInkiLCJkdXJhdGlvbiIsImhhbmRsZU1lbnUiLCJkaXNhYmxlTWVudSIsInNldFRpbWVvdXQiLCJjbGFzc2VzIiwiaGVhZGVyIiwibG9nbyIsImVsIiwiYXJyb3dJY29uIiwibWVudSIsIm9uZSIsInR3byIsInRocmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsTUFBSUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxNQUFJQyxNQUFNLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUNBLE1BQUlFLE1BQU0sR0FBR0Ysb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBQ0EsTUFBSUcsUUFBUSxHQUFHSCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFJSSxXQUFXLEdBQUdKLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQUlLLFFBQVEsR0FBR0wsb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBRUEsTUFBSU0sRUFBRSxHQUFHLElBQUlDLGlEQUFKLENBQWlCO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBQWpCLENB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REFBRDtBQUFXLFNBQUssRUFBRUosS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDcEIsQ0FERjtBQWlERCxDQXRMRDs7R0FBTVgsTTs7S0FBQUEsTTtBQXdMU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2U5N2VlNTFlZjljMWQwMDRlODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBUaW1lbGluZUxpdGUsIFR3ZWVuTWF4IH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmltcG9ydCBIYW1idXJnZXIgZnJvbSBcIi4vSGFtYnVyZ2VyXCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBsZXQgY2xvc2UxID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBjbG9zZTIgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNsb3NlMyA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgbWVudUxvZ28gPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IG1lbnVQcm9qZWN0ID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBtZW51SWNvbiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSh7IGRlbGF5OiAwLjggfSk7XHJcblxyXG4gIC8vIFN0YXRlIGZvciBtZW51IGJ1dHRvblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgaW5pdGlhbDogZmFsc2UsXHJcbiAgICBjbGlja2VkOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICAvLyBTdGF0ZSBmb3IgZGlzYWJsZWQgYnV0dG9uXHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBIRUFERVIgQU5JTUFUSU9OU1xyXG4gICAgdGwudG8oXHJcbiAgICAgIG1lbnVMb2dvLFxyXG4gICAgICAwLjEsXHJcbiAgICAgIHtcclxuICAgICAgICB0b3A6IFwiMHB4XCIsXHJcbiAgICAgICAgZWFzZTogXCJiYWNrXCIsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkZWxheTogMFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGwudG8oXHJcbiAgICAgIG1lbnVQcm9qZWN0LFxyXG4gICAgICAwLjEsXHJcbiAgICAgIHtcclxuICAgICAgICB0b3A6IFwiMHB4XCIsXHJcbiAgICAgICAgZWFzZTogXCJiYWNrXCIsXHJcbiAgICAgICAgZGVsYXk6IC4xLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0bC50byhcclxuICAgICAgbWVudUljb24sXHJcbiAgICAgIDAuMSxcclxuICAgICAge1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGRlbGF5OiAuMlxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIE1lbnUgaWNvbiBhbmltYXRpb25zXHJcbiAgICBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTEsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIHJvdGF0aW9uOiA0NSxcclxuICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMiwge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTMsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIHJvdGF0aW9uOiAtNDUsXHJcbiAgICAgICAgICB0b3A6IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5jbGlja2VkID09PSBmYWxzZSkge1xyXG4gICAgICBUd2Vlbk1heC50byhbbWVudUxvZ28sIC8qbWVudVByb2plY3QsKi8gbWVudUljb25dLCAwLCB7XHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBkZWxheTogMCxcclxuICAgICAgfSk7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMSwge1xyXG4gICAgICAgIGNzczoge1xyXG4gICAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsYXk6IDAuMyxcclxuICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICB9KTtcclxuICAgICAgVHdlZW5NYXgudG8oY2xvc2UyLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkZWxheTogMC41LFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTMsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgdG9wOiAyNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFnZSBjaGFuZ2luZ1xyXG4gICAgLy8gaGlzdG9yeS5saXN0ZW4oKCkgPT4ge1xyXG4gICAgLy8gc2V0U3RhdGUoeyBjbGlja2VkOiBmYWxzZSB9KTtcclxuICAgIC8vIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudSA9ICgpID0+IHtcclxuICAgIGRpc2FibGVNZW51KCk7XHJcbiAgICAvLyBUaGlzIHdpbGwgYmUgcmVuZGVyZWQgd2hlbiB0aGUgYXBwIGZpcnN0IG9wZW5cclxuICAgIGlmIChzdGF0ZS5pbml0aWFsID09PSBmYWxzZSkge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgaW5pdGlhbDogbnVsbCxcclxuICAgICAgICBjbGlja2VkOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vVGhlIG5leHQgdHdvLCBmb3IgdGhlIHRvZ2dsZVxyXG4gICAgZWxzZSBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgY2xpY2tlZDogIXN0YXRlLmNsaWNrZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5jbGlja2VkID09PSBmYWxzZSkge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgY2xpY2tlZDogIXN0YXRlLmNsaWNrZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qIERldGVybWluZWQgaWYgb3VyIG1lbnUgc2hvdWxkIGJlIGRpc2FibGVkLiBcclxuICAgIFRoaXMgaXMgdXNlZnVsIHRvIHByZXZlbnQgc3BhbSAqL1xyXG4gIGNvbnN0IGRpc2FibGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoIWRpc2FibGVkKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICB9LCAxMjAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiAobWVudUxvZ28gPSBlbCl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSh7IGNsaWNrZWQ6IGZhbHNlIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhPk08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2plY3RzfSByZWY9eyhlbCkgPT4gKG1lbnVQcm9qZWN0ID0gZWwpfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICA8YT5Qcm9qZWN0czwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93SWNvbn0gcmVmPXsoZWwpID0+IChtZW51UHJvamVjdCA9IGVsKX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRG90dGVkV2hpdGUuc3ZnXCIgYWx0PVwiYXJyb3dcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+ICAgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51fVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICByZWY9eyhlbCkgPT4gKG1lbnVJY29uID0gZWwpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9uZX1cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlMSA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnR3b31cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlMiA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRocmVlfVxyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgY2xvc2UzID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzdGF0ZS5jbGlja2VkICYmIDxIYW1idXJnZXIgc3RhdGU9e3N0YXRlfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=