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
    }, "Start");
    tl.to(menuProject, 0.1, {
      top: "0px",
      ease: "back",
      //delay: .7,
      opacity: 1
    }, "Start");
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
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.arrowIcon,
    ref: el => menuProject = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/DottedWhite.svg",
    alt: "arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 164,
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
      lineNumber: 170,
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
      lineNumber: 176,
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
      lineNumber: 182,
      columnNumber: 9
    }
  })), state.clicked && __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImNsb3NlMSIsInVzZVJlZiIsImNsb3NlMiIsImNsb3NlMyIsIm1lbnVMb2dvIiwibWVudVByb2plY3QiLCJtZW51SWNvbiIsInRsIiwiVGltZWxpbmVMaXRlIiwiZGVsYXkiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJpbml0aWFsIiwiY2xpY2tlZCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJ1c2VFZmZlY3QiLCJ0byIsInRvcCIsImVhc2UiLCJvcGFjaXR5IiwiVHdlZW5NYXgiLCJjc3MiLCJyb3RhdGlvbiIsInkiLCJkdXJhdGlvbiIsImhhbmRsZU1lbnUiLCJkaXNhYmxlTWVudSIsInNldFRpbWVvdXQiLCJjbGFzc2VzIiwiaGVhZGVyIiwibG9nbyIsImVsIiwiYXJyb3dJY29uIiwibWVudSIsIm9uZSIsInR3byIsInRocmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsTUFBSUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxNQUFJQyxNQUFNLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUNBLE1BQUlFLE1BQU0sR0FBR0Ysb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBQ0EsTUFBSUcsUUFBUSxHQUFHSCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFJSSxXQUFXLEdBQUdKLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQUlLLFFBQVEsR0FBR0wsb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBRUEsTUFBSU0sRUFBRSxHQUFHLElBQUlDLGlEQUFKLENBQWlCO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBQWpCLENB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0NwQixDQURGO0FBaURELENBdkxEOztHQUFNWCxNOztLQUFBQSxNO0FBeUxTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZjk5ZGI4Zjg1ODg1MzliNzgzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFRpbWVsaW5lTGl0ZSwgVHdlZW5NYXggfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiLi9IYW1idXJnZXJcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGxldCBjbG9zZTEgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNsb3NlMiA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY2xvc2UzID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBtZW51TG9nbyA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgbWVudVByb2plY3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IG1lbnVJY29uID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgdGwgPSBuZXcgVGltZWxpbmVMaXRlKHsgZGVsYXk6IDAuOCB9KTtcclxuXHJcbiAgLy8gU3RhdGUgZm9yIG1lbnUgYnV0dG9uXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbml0aWFsOiBmYWxzZSxcclxuICAgIGNsaWNrZWQ6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIC8vIFN0YXRlIGZvciBkaXNhYmxlZCBidXR0b25cclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhFQURFUiBBTklNQVRJT05TXHJcbiAgICB0bC50byhcclxuICAgICAgbWVudUxvZ28sXHJcbiAgICAgIDAuMSxcclxuICAgICAge1xyXG4gICAgICAgIHRvcDogXCIwcHhcIixcclxuICAgICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICBcIlN0YXJ0XCJcclxuICAgICk7XHJcbiAgICB0bC50byhcclxuICAgICAgbWVudVByb2plY3QsXHJcbiAgICAgIDAuMSxcclxuICAgICAge1xyXG4gICAgICAgIHRvcDogXCIwcHhcIixcclxuICAgICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgICAvL2RlbGF5OiAuNyxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICBcIlN0YXJ0XCJcclxuICAgICk7XHJcbiAgICB0bC50byhcclxuICAgICAgbWVudUljb24sXHJcbiAgICAgIDAuMyxcclxuICAgICAge1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICBcIlN0YXJ0XCJcclxuICAgICk7XHJcblxyXG4gICAgLy8gTWVudSBpY29uIGFuaW1hdGlvbnNcclxuICAgIGlmIChzdGF0ZS5jbGlja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMSwge1xyXG4gICAgICAgIGNzczoge1xyXG4gICAgICAgICAgcm90YXRpb246IDQ1LFxyXG4gICAgICAgICAgdG9wOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgVHdlZW5NYXgudG8oY2xvc2UyLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSk7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMywge1xyXG4gICAgICAgIGNzczoge1xyXG4gICAgICAgICAgcm90YXRpb246IC00NSxcclxuICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKFttZW51TG9nbywgLyptZW51UHJvamVjdCwqLyBtZW51SWNvbl0sIDAsIHtcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICB9KTtcclxuICAgICAgVHdlZW5NYXgudG8oY2xvc2UxLCB7XHJcbiAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICByb3RhdGlvbjogMCxcclxuICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxheTogMC4zLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTIsIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgZHVyYXRpb246IDAuNSxcclxuICAgICAgfSk7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMywge1xyXG4gICAgICAgIGNzczoge1xyXG4gICAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgICB0b3A6IDI0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsYXk6IDAuNSxcclxuICAgICAgICBkdXJhdGlvbjogMC4zLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYWdlIGNoYW5naW5nXHJcbiAgICAvLyBoaXN0b3J5Lmxpc3RlbigoKSA9PiB7XHJcbiAgICAvLyBzZXRTdGF0ZSh7IGNsaWNrZWQ6IGZhbHNlIH0pO1xyXG4gICAgLy8gfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgZGlzYWJsZU1lbnUoKTtcclxuICAgIC8vIFRoaXMgd2lsbCBiZSByZW5kZXJlZCB3aGVuIHRoZSBhcHAgZmlyc3Qgb3BlblxyXG4gICAgaWYgKHN0YXRlLmluaXRpYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICBpbml0aWFsOiBudWxsLFxyXG4gICAgICAgIGNsaWNrZWQ6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9UaGUgbmV4dCB0d28sIGZvciB0aGUgdG9nZ2xlXHJcbiAgICBlbHNlIGlmIChzdGF0ZS5jbGlja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICBjbGlja2VkOiAhc3RhdGUuY2xpY2tlZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICBjbGlja2VkOiAhc3RhdGUuY2xpY2tlZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyogRGV0ZXJtaW5lZCBpZiBvdXIgbWVudSBzaG91bGQgYmUgZGlzYWJsZWQuIFxyXG4gICAgVGhpcyBpcyB1c2VmdWwgdG8gcHJldmVudCBzcGFtICovXHJcbiAgY29uc3QgZGlzYWJsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSghZGlzYWJsZWQpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgIH0sIDEyMDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IChtZW51TG9nbyA9IGVsKX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHsgY2xpY2tlZDogZmFsc2UgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGE+TS48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2plY3RzfSByZWY9eyhlbCkgPT4gKG1lbnVQcm9qZWN0ID0gZWwpfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICA8YT5Qcm9qZWN0czwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93SWNvbn0gcmVmPXsoZWwpID0+IChtZW51UHJvamVjdCA9IGVsKX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRG90dGVkV2hpdGUuc3ZnXCIgYWx0PVwiYXJyb3dcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+ICAgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51fVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICByZWY9eyhlbCkgPT4gKG1lbnVJY29uID0gZWwpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9uZX1cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlMSA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnR3b31cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlMiA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRocmVlfVxyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgY2xvc2UzID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzdGF0ZS5jbGlja2VkICYmIDxIYW1idXJnZXIgc3RhdGU9e3N0YXRlfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=