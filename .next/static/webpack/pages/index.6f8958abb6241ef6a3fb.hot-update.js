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
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.arrowIcon,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsImNsb3NlMSIsInVzZVJlZiIsImNsb3NlMiIsImNsb3NlMyIsIm1lbnVMb2dvIiwibWVudVByb2plY3QiLCJtZW51SWNvbiIsInRsIiwiVGltZWxpbmVMaXRlIiwiZGVsYXkiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJpbml0aWFsIiwiY2xpY2tlZCIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJ1c2VFZmZlY3QiLCJ0byIsInRvcCIsImVhc2UiLCJvcGFjaXR5IiwiVHdlZW5NYXgiLCJjc3MiLCJyb3RhdGlvbiIsInkiLCJkdXJhdGlvbiIsImhhbmRsZU1lbnUiLCJkaXNhYmxlTWVudSIsInNldFRpbWVvdXQiLCJjbGFzc2VzIiwiaGVhZGVyIiwibG9nbyIsImVsIiwiYXJyb3dJY29uIiwibWVudSIsIm9uZSIsInR3byIsInRocmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsTUFBSUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxNQUFJQyxNQUFNLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUNBLE1BQUlFLE1BQU0sR0FBR0Ysb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBQ0EsTUFBSUcsUUFBUSxHQUFHSCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFJSSxXQUFXLEdBQUdKLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQUlLLFFBQVEsR0FBR0wsb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBRUEsTUFBSU0sRUFBRSxHQUFHLElBQUlDLGlEQUFKLENBQWlCO0FBQUVDLFNBQUssRUFBRTtBQUFULEdBQWpCLENBQVQsQ0FSbUIsQ0FVbkI7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUUsS0FEd0I7QUFFakNDLFdBQU8sRUFBRTtBQUZ3QixHQUFELENBQWxDLENBWG1CLENBZ0JuQjs7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBSyx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBVixNQUFFLENBQUNXLEVBQUgsQ0FDRWQsUUFERixFQUVFLEdBRkYsRUFHRTtBQUNFZSxTQUFHLEVBQUUsS0FEUDtBQUVFQyxVQUFJLEVBQUUsTUFGUjtBQUdFQyxhQUFPLEVBQUU7QUFIWCxLQUhGLEVBUUUsT0FSRixFQUZjLENBWWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWQsTUFBRSxDQUFDVyxFQUFILENBQ0VaLFFBREYsRUFFRSxHQUZGLEVBR0U7QUFDRWEsU0FBRyxFQUFFLENBRFA7QUFFRUMsVUFBSSxFQUFFLE1BRlI7QUFHRUMsYUFBTyxFQUFFO0FBSFgsS0FIRixFQVFFLE9BUkYsRUF2QmMsQ0FrQ2Q7O0FBQ0EsUUFBSVgsS0FBSyxDQUFDSSxPQUFOLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCUSxtREFBUSxDQUFDSixFQUFULENBQVlsQixNQUFaLEVBQW9CO0FBQ2xCdUIsV0FBRyxFQUFFO0FBQ0hDLGtCQUFRLEVBQUUsRUFEUDtBQUVITCxhQUFHLEVBQUU7QUFGRjtBQURhLE9BQXBCO0FBTUFHLG1EQUFRLENBQUNKLEVBQVQsQ0FBWWhCLE1BQVosRUFBb0I7QUFDbEJtQixlQUFPLEVBQUU7QUFEUyxPQUFwQjtBQUdBQyxtREFBUSxDQUFDSixFQUFULENBQVlmLE1BQVosRUFBb0I7QUFDbEJvQixXQUFHLEVBQUU7QUFDSEMsa0JBQVEsRUFBRSxDQUFDLEVBRFI7QUFFSEwsYUFBRyxFQUFFO0FBRkY7QUFEYSxPQUFwQjtBQU1ELEtBaEJELE1BZ0JPLElBQUlULEtBQUssQ0FBQ0ksT0FBTixLQUFrQixLQUF0QixFQUE2QjtBQUNsQ1EsbURBQVEsQ0FBQ0osRUFBVCxDQUFZLENBQUNkLFFBQUQ7QUFBVztBQUFpQkUsY0FBNUIsQ0FBWixFQUFtRCxDQUFuRCxFQUFzRDtBQUNwRG1CLFNBQUMsRUFBRSxDQURpRDtBQUVwRGhCLGFBQUssRUFBRTtBQUY2QyxPQUF0RDtBQUlBYSxtREFBUSxDQUFDSixFQUFULENBQVlsQixNQUFaLEVBQW9CO0FBQ2xCdUIsV0FBRyxFQUFFO0FBQ0hDLGtCQUFRLEVBQUUsQ0FEUDtBQUVITCxhQUFHLEVBQUU7QUFGRixTQURhO0FBS2xCVixhQUFLLEVBQUUsR0FMVztBQU1sQmlCLGdCQUFRLEVBQUU7QUFOUSxPQUFwQjtBQVFBSixtREFBUSxDQUFDSixFQUFULENBQVloQixNQUFaLEVBQW9CO0FBQ2xCbUIsZUFBTyxFQUFFLENBRFM7QUFFbEJaLGFBQUssRUFBRSxHQUZXO0FBR2xCaUIsZ0JBQVEsRUFBRTtBQUhRLE9BQXBCO0FBS0FKLG1EQUFRLENBQUNKLEVBQVQsQ0FBWWYsTUFBWixFQUFvQjtBQUNsQm9CLFdBQUcsRUFBRTtBQUNIQyxrQkFBUSxFQUFFLENBRFA7QUFFSEwsYUFBRyxFQUFFO0FBRkYsU0FEYTtBQUtsQlYsYUFBSyxFQUFFLEdBTFc7QUFNbEJpQixnQkFBUSxFQUFFO0FBTlEsT0FBcEI7QUFRRCxLQTdFYSxDQStFZDtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxHQW5GUSxFQW1GTixFQW5GTSxDQUFUOztBQXFGQSxRQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUN2QkMsZUFBVyxHQURZLENBRXZCOztBQUNBLFFBQUlsQixLQUFLLENBQUNHLE9BQU4sS0FBa0IsS0FBdEIsRUFBNkI7QUFDM0JGLGNBQVEsQ0FBQztBQUNQRSxlQUFPLEVBQUUsSUFERjtBQUVQQyxlQUFPLEVBQUU7QUFGRixPQUFELENBQVI7QUFJRCxLQUxELENBTUE7QUFOQSxTQU9LLElBQUlKLEtBQUssQ0FBQ0ksT0FBTixLQUFrQixJQUF0QixFQUE0QjtBQUMvQkgsZ0JBQVEsQ0FBQztBQUNQRyxpQkFBTyxFQUFFLENBQUNKLEtBQUssQ0FBQ0k7QUFEVCxTQUFELENBQVI7QUFHRCxPQUpJLE1BSUUsSUFBSUosS0FBSyxDQUFDSSxPQUFOLEtBQWtCLEtBQXRCLEVBQTZCO0FBQ2xDSCxnQkFBUSxDQUFDO0FBQ1BHLGlCQUFPLEVBQUUsQ0FBQ0osS0FBSyxDQUFDSTtBQURULFNBQUQsQ0FBUjtBQUdEO0FBQ0YsR0FuQkQ7QUFxQkE7QUFDRjs7O0FBQ0UsUUFBTWMsV0FBVyxHQUFHLE1BQU07QUFDeEJqQixZQUFRLENBQUMsQ0FBQ0ksUUFBRixDQUFSO0FBQ0FjLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZiLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBTEQ7O0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBRWMsMERBQU8sQ0FBQ0MsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUVELDBEQUFPLENBQUNFLElBRHJCO0FBRUUsT0FBRyxFQUFHQyxFQUFELElBQVM3QixRQUFRLEdBQUc2QixFQUYzQjtBQUdFLFdBQU8sRUFBRSxNQUFNdEIsUUFBUSxDQUFDO0FBQUVHLGFBQU8sRUFBRTtBQUFYLEtBQUQsQ0FIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFMRixDQURGLENBREYsRUFlRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFZ0IsMERBQU8sQ0FBQ0ksU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHlCQUFUO0FBQW1DLE9BQUcsRUFBQyxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQWZGLEVBb0JFO0FBQ0UsYUFBUyxFQUFFSiwwREFBTyxDQUFDSyxJQURyQjtBQUVFLFdBQU8sRUFBRVIsVUFGWDtBQUdFLFlBQVEsRUFBRVosUUFIWjtBQUlFLE9BQUcsRUFBR2tCLEVBQUQsSUFBUzNCLFFBQVEsR0FBRzJCLEVBSjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUNFLGFBQVMsRUFBRUgsMERBQU8sQ0FBQ00sR0FEckI7QUFFRSxPQUFHLEVBQUdILEVBQUQsSUFBUTtBQUNYakMsWUFBTSxHQUFHaUMsRUFBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBWUU7QUFDRSxhQUFTLEVBQUVILDBEQUFPLENBQUNPLEdBRHJCO0FBRUUsT0FBRyxFQUFHSixFQUFELElBQVE7QUFDWC9CLFlBQU0sR0FBRytCLEVBQVQ7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWtCRTtBQUNFLGFBQVMsRUFBRUgsMERBQU8sQ0FBQ1EsS0FEckI7QUFFRSxPQUFHLEVBQUdMLEVBQUQsSUFBUTtBQUNYOUIsWUFBTSxHQUFHOEIsRUFBVDtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixDQXBCRixFQTZDR3ZCLEtBQUssQ0FBQ0ksT0FBTixJQUFpQixNQUFDLGtEQUFEO0FBQVcsU0FBSyxFQUFFSixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0NwQixDQURGO0FBaURELENBdkxEOztHQUFNWCxNOztLQUFBQSxNO0FBeUxTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Zjg5NThhYmI2MjQxZWY2YTNmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFRpbWVsaW5lTGl0ZSwgVHdlZW5NYXggfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiLi9IYW1idXJnZXJcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGxldCBjbG9zZTEgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNsb3NlMiA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY2xvc2UzID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBtZW51TG9nbyA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgbWVudVByb2plY3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IG1lbnVJY29uID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgdGwgPSBuZXcgVGltZWxpbmVMaXRlKHsgZGVsYXk6IDAuOCB9KTtcclxuXHJcbiAgLy8gU3RhdGUgZm9yIG1lbnUgYnV0dG9uXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbml0aWFsOiBmYWxzZSxcclxuICAgIGNsaWNrZWQ6IG51bGwsXHJcbiAgfSk7XHJcblxyXG4gIC8vIFN0YXRlIGZvciBkaXNhYmxlZCBidXR0b25cclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhFQURFUiBBTklNQVRJT05TXHJcbiAgICB0bC50byhcclxuICAgICAgbWVudUxvZ28sXHJcbiAgICAgIDAuMSxcclxuICAgICAge1xyXG4gICAgICAgIHRvcDogXCIwcHhcIixcclxuICAgICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICBcIlN0YXJ0XCJcclxuICAgICk7XHJcbiAgICAvLyB0bC5mcm9tKFxyXG4gICAgLy8gICBtZW51UHJvamVjdCxcclxuICAgIC8vICAgMC4xLFxyXG4gICAgLy8gICB7XHJcbiAgICAvLyAgICAgeTogXCIxNXB4XCIsXHJcbiAgICAvLyAgICAgZWFzZTogXCJiYWNrXCIsXHJcbiAgICAvLyAgICAgLy9kZWxheTogLjcsXHJcbiAgICAvLyAgICAgb3BhY2l0eTogMCxcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgXCJTdGFydFwiXHJcbiAgICAvLyApO1xyXG4gICAgdGwudG8oXHJcbiAgICAgIG1lbnVJY29uLFxyXG4gICAgICAwLjMsXHJcbiAgICAgIHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgZWFzZTogXCJiYWNrXCIsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgfSxcclxuICAgICAgXCJTdGFydFwiXHJcbiAgICApO1xyXG5cclxuICAgIC8vIE1lbnUgaWNvbiBhbmltYXRpb25zXHJcbiAgICBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTEsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIHJvdGF0aW9uOiA0NSxcclxuICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMiwge1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTMsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIHJvdGF0aW9uOiAtNDUsXHJcbiAgICAgICAgICB0b3A6IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5jbGlja2VkID09PSBmYWxzZSkge1xyXG4gICAgICBUd2Vlbk1heC50byhbbWVudUxvZ28sIC8qbWVudVByb2plY3QsKi8gbWVudUljb25dLCAwLCB7XHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBkZWxheTogMCxcclxuICAgICAgfSk7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKGNsb3NlMSwge1xyXG4gICAgICAgIGNzczoge1xyXG4gICAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsYXk6IDAuMyxcclxuICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICB9KTtcclxuICAgICAgVHdlZW5NYXgudG8oY2xvc2UyLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkZWxheTogMC41LFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBUd2Vlbk1heC50byhjbG9zZTMsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgdG9wOiAyNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFnZSBjaGFuZ2luZ1xyXG4gICAgLy8gaGlzdG9yeS5saXN0ZW4oKCkgPT4ge1xyXG4gICAgLy8gc2V0U3RhdGUoeyBjbGlja2VkOiBmYWxzZSB9KTtcclxuICAgIC8vIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudSA9ICgpID0+IHtcclxuICAgIGRpc2FibGVNZW51KCk7XHJcbiAgICAvLyBUaGlzIHdpbGwgYmUgcmVuZGVyZWQgd2hlbiB0aGUgYXBwIGZpcnN0IG9wZW5cclxuICAgIGlmIChzdGF0ZS5pbml0aWFsID09PSBmYWxzZSkge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgaW5pdGlhbDogbnVsbCxcclxuICAgICAgICBjbGlja2VkOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vVGhlIG5leHQgdHdvLCBmb3IgdGhlIHRvZ2dsZVxyXG4gICAgZWxzZSBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgY2xpY2tlZDogIXN0YXRlLmNsaWNrZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5jbGlja2VkID09PSBmYWxzZSkge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgY2xpY2tlZDogIXN0YXRlLmNsaWNrZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qIERldGVybWluZWQgaWYgb3VyIG1lbnUgc2hvdWxkIGJlIGRpc2FibGVkLiBcclxuICAgIFRoaXMgaXMgdXNlZnVsIHRvIHByZXZlbnQgc3BhbSAqL1xyXG4gIGNvbnN0IGRpc2FibGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoIWRpc2FibGVkKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICB9LCAxMjAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiAobWVudUxvZ28gPSBlbCl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSh7IGNsaWNrZWQ6IGZhbHNlIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhPk0uPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9qZWN0c30gcmVmPXsoZWwpID0+IChtZW51UHJvamVjdCA9IGVsKX0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgPGE+UHJvamVjdHM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd0ljb259PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0RvdHRlZFdoaXRlLnN2Z1wiIGFsdD1cImFycm93XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPiAgIFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnV9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlTWVudX1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgcmVmPXsoZWwpID0+IChtZW51SWNvbiA9IGVsKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vbmV9XHJcbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9zZTEgPSBlbDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50d299XHJcbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9zZTIgPSBlbDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aHJlZX1cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlMyA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c3RhdGUuY2xpY2tlZCAmJiA8SGFtYnVyZ2VyIHN0YXRlPXtzdGF0ZX0gLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9