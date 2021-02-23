webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/HeroSection/HeroSection.component.jsx":
/*!**************************************************************!*\
  !*** ./src/components/HeroSection/HeroSection.component.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroSection.module.scss */ "./src/components/HeroSection/HeroSection.module.scss");
/* harmony import */ var _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\isabe\\Developper\\myPortfolio\\src\\components\\HeroSection\\HeroSection.component.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Hero = () => {
  _s();

  let app = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let images = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let content = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]({
    delay: 0.8
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Parallax effect on images
    var scene = document.getElementById("scene");
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_1___default.a(scene, {
      relativeInput: true,
      calibrateX: true
    });
    parallaxInstance.calibrate(10, 0.5); //Images Vars

    const firstImg = images.firstElementChild;
    const secondImg = images.lastElementChild; //Content Vars

    const headlineFirst = content.children[0].children[0].children[0]; //const headlineSecond = headlineFirst.nextSibling;

    const headlineSecond = content.children[0].children[0].children[1];
    const headlineThrid = content.children[0].children[0].children[2];
    const headlineFourth = content.children[0].children[0].children[3];
    const contentP = content.children[1];
    const contentButton = content.children[2];
    console.log(firstImg, secondImg);
    gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(app, 0, {
      css: {
        visibility: "visible"
      },
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeOut
    }); //Images Animations

    tl.from(secondImg, 1.2, {
      y: 1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeOut
    }, "Start").from(secondImg.lastElementChild, 2, {
      y: 1200,
      scale: 1.6,
      ease: "back"
    }, 0.2).from(firstImg, 1.5, {
      y: 1280,
      ease: "Power3.easeOut"
    }, 0.2).from(firstImg.firstElementChild, 2, {
      y: -1200,
      scale: 1.6,
      ease: "back"
    }, 0.2); //Content Animations

    tl.staggerFrom([headlineFirst, headlineSecond, headlineThrid, headlineFourth], 1, {
      y: 320,
      ease: "back",
      delay: 0.8
    }, 0.15, "Start").from(contentP, 1, {
      y: 20,
      opacity: 0,
      ease: "back"
    }, 1.4).from(contentButton, 1, {
      y: 20,
      opacity: 0,
      ease: "back"
    }, 1.6);
  });
  return __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.hero,
    ref: el => app = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroInner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroContentInner,
    ref: el => content = el,
    "data-depth": "0.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroContentLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.small,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, "Messie NUNGI PAMBU"), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroContentLineInner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, "REACTJS"), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroContentLineInner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, "FRONTEND"), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroContentLineInner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, "DEVELOPER"))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Hi, I'm ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, "Messie"), ", a", " ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, "Frontend Developer"), " based in France. I am passionate about startup's world, design, pencil drawing, music, anthropology, the economy. Web development is for me, a way to combine some aspects of my personality, with a part on one side artistic (design, UX, UI), my centers interests and on the other my appetite for problem solving.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), "We understand there's often a disconnect between design and development and things can often go awry. We are frontend specialists that stress the smaller details to deliver pixel-perfect products."))), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImagesInner,
    ref: el => images = el,
    "data-relative-input": "true",
    "data-calibrate-x": "true",
    id: "scene",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImage,
    id: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.first,
    "data-depth": "0.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/image1.jpg",
    alt: "front-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImage,
    id: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.second,
    "data-depth": "0.4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/image2.jpg",
    alt: "back-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  })))))));
};

_s(Hero, "JQ8zj7pizEw+5pHz9En8SO5lgoU=");

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24vSGVyb1NlY3Rpb24uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJIZXJvIiwiYXBwIiwidXNlUmVmIiwiaW1hZ2VzIiwiY29udGVudCIsInRsIiwiVGltZWxpbmVMaXRlIiwiZGVsYXkiLCJ1c2VFZmZlY3QiLCJzY2VuZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJhbGxheEluc3RhbmNlIiwiUGFyYWxsYXgiLCJyZWxhdGl2ZUlucHV0IiwiY2FsaWJyYXRlWCIsImNhbGlicmF0ZSIsImZpcnN0SW1nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzZWNvbmRJbWciLCJsYXN0RWxlbWVudENoaWxkIiwiaGVhZGxpbmVGaXJzdCIsImNoaWxkcmVuIiwiaGVhZGxpbmVTZWNvbmQiLCJoZWFkbGluZVRocmlkIiwiaGVhZGxpbmVGb3VydGgiLCJjb250ZW50UCIsImNvbnRlbnRCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiVHdlZW5NYXgiLCJ0byIsImNzcyIsInZpc2liaWxpdHkiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZU91dCIsImZyb20iLCJ5Iiwic2NhbGUiLCJzdGFnZ2VyRnJvbSIsIm9wYWNpdHkiLCJzdHlsZXMiLCJoZXJvIiwiZWwiLCJjb250YWluZXIiLCJoZXJvSW5uZXIiLCJoZXJvQ29udGVudCIsImhlcm9Db250ZW50SW5uZXIiLCJoZXJvQ29udGVudExpbmUiLCJzbWFsbCIsImhlcm9Db250ZW50TGluZUlubmVyIiwiaGVyb0ltYWdlcyIsImhlcm9JbWFnZXNJbm5lciIsImhlcm9JbWFnZSIsImZpcnN0Iiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQUE7O0FBQ2pCLE1BQUlDLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFE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QkFBaUIsTUFKbkI7QUFLRSxNQUFFLEVBQUMsT0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFDRSxhQUFTLEVBQUVGLCtEQUFNLENBQUNZLFNBRHBCO0FBRUUsTUFBRSxFQUFFWiwrREFBTSxDQUFDYSxLQUZiO0FBR0Usa0JBQVcsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBOEIsT0FBRyxFQUFDLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQVBGLEVBY0U7QUFDRSxhQUFTLEVBQUViLCtEQUFNLENBQUNZLFNBRHBCO0FBRUUsTUFBRSxFQUFFWiwrREFBTSxDQUFDYyxNQUZiO0FBR0Usa0JBQVcsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBOEIsT0FBRyxFQUFDLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQWRGLENBREYsQ0E1Q0YsQ0FERixDQURGLENBREY7QUEyRUQsQ0FsS0Q7O0dBQU14RCxJOztLQUFBQSxJO0FBb0tTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMWZmYzY5OWM3MzlmNmI4YjRmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwicGFyYWxsYXgtanNcIjtcclxuaW1wb3J0IHsgVHdlZW5NYXgsIFBvd2VyMywgVGltZWxpbmVMaXRlIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZXJvU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgSGVybyA9ICgpID0+IHtcclxuICBsZXQgYXBwID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBpbWFnZXMgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGNvbnRlbnQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCB0bCA9IG5ldyBUaW1lbGluZUxpdGUoeyBkZWxheTogMC44IH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUGFyYWxsYXggZWZmZWN0IG9uIGltYWdlc1xyXG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2VuZVwiKTtcclxuICAgIHZhciBwYXJhbGxheEluc3RhbmNlID0gbmV3IFBhcmFsbGF4KHNjZW5lLCB7XHJcbiAgICAgIHJlbGF0aXZlSW5wdXQ6IHRydWUsXHJcbiAgICAgIGNhbGlicmF0ZVg6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHBhcmFsbGF4SW5zdGFuY2UuY2FsaWJyYXRlKDEwLCAwLjUpO1xyXG5cclxuICAgIC8vSW1hZ2VzIFZhcnNcclxuICAgIGNvbnN0IGZpcnN0SW1nID0gaW1hZ2VzLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3Qgc2Vjb25kSW1nID0gaW1hZ2VzLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgLy9Db250ZW50IFZhcnNcclxuICAgIGNvbnN0IGhlYWRsaW5lRmlyc3QgPSBjb250ZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xyXG4gICAgLy9jb25zdCBoZWFkbGluZVNlY29uZCA9IGhlYWRsaW5lRmlyc3QubmV4dFNpYmxpbmc7XHJcbiAgICBjb25zdCBoZWFkbGluZVNlY29uZCA9IGNvbnRlbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XHJcbiAgICBjb25zdCBoZWFkbGluZVRocmlkID0gY29udGVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblsyXTtcclxuICAgIGNvbnN0IGhlYWRsaW5lRm91cnRoID0gY29udGVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblszXTtcclxuICAgIGNvbnN0IGNvbnRlbnRQID0gY29udGVudC5jaGlsZHJlblsxXTtcclxuICAgIGNvbnN0IGNvbnRlbnRCdXR0b24gPSBjb250ZW50LmNoaWxkcmVuWzJdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpcnN0SW1nLCBzZWNvbmRJbWcpO1xyXG5cclxuICAgIFR3ZWVuTWF4LnRvKGFwcCwgMCwge1xyXG4gICAgICBjc3M6IHsgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIgfSxcclxuICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0ltYWdlcyBBbmltYXRpb25zXHJcbiAgICB0bC5mcm9tKHNlY29uZEltZywgMS4yLCB7IHk6IDEyODAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0sIFwiU3RhcnRcIilcclxuICAgICAgLmZyb20oXHJcbiAgICAgICAgc2Vjb25kSW1nLmxhc3RFbGVtZW50Q2hpbGQsXHJcblxyXG4gICAgICAgIDIsXHJcbiAgICAgICAgeyB5OiAxMjAwLCBzY2FsZTogMS42LCBlYXNlOiBcImJhY2tcIiB9LFxyXG4gICAgICAgIDAuMlxyXG4gICAgICApXHJcbiAgICAgIC5mcm9tKGZpcnN0SW1nLCAxLjUsIHsgeTogMTI4MCwgZWFzZTogXCJQb3dlcjMuZWFzZU91dFwiIH0sIDAuMilcclxuICAgICAgLmZyb20oXHJcbiAgICAgICAgZmlyc3RJbWcuZmlyc3RFbGVtZW50Q2hpbGQsXHJcbiAgICAgICAgMixcclxuICAgICAgICB7IHk6IC0xMjAwLCBzY2FsZTogMS42LCBlYXNlOiBcImJhY2tcIiB9LFxyXG4gICAgICAgIDAuMlxyXG4gICAgICApO1xyXG5cclxuICAgIC8vQ29udGVudCBBbmltYXRpb25zXHJcbiAgICB0bC5zdGFnZ2VyRnJvbShcclxuICAgICAgW2hlYWRsaW5lRmlyc3QsIGhlYWRsaW5lU2Vjb25kLCBoZWFkbGluZVRocmlkLCBoZWFkbGluZUZvdXJ0aF0sXHJcbiAgICAgIDEsXHJcbiAgICAgIHtcclxuICAgICAgICB5OiAzMjAsXHJcbiAgICAgICAgZWFzZTogXCJiYWNrXCIsXHJcbiAgICAgICAgZGVsYXk6IDAuOCxcclxuICAgICAgfSxcclxuICAgICAgMC4xNSxcclxuICAgICAgXCJTdGFydFwiXHJcbiAgICApXHJcbiAgICAgIC5mcm9tKFxyXG4gICAgICAgIGNvbnRlbnRQLFxyXG4gICAgICAgIDEsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgZWFzZTogXCJiYWNrXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxLjRcclxuICAgICAgKVxyXG4gICAgICAuZnJvbShcclxuICAgICAgICBjb250ZW50QnV0dG9uLFxyXG4gICAgICAgIDEsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgZWFzZTogXCJiYWNrXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxLjZcclxuICAgICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30gcmVmPXsoZWwpID0+IChhcHAgPSBlbCl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSW5uZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZXJvQ29udGVudElubmVyfVxyXG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiAoY29udGVudCA9IGVsKX1cclxuICAgICAgICAgICAgICBkYXRhLWRlcHRoPVwiMC41XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRlbnRMaW5lfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbH0+TWVzc2llIE5VTkdJIFBBTUJVPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRlbnRMaW5lSW5uZXJ9PlJFQUNUSlM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvQ29udGVudExpbmVJbm5lcn0+RlJPTlRFTkQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvQ29udGVudExpbmVJbm5lcn0+REVWRUxPUEVSPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgSGksIEknbSA8c3Ryb25nPk1lc3NpZTwvc3Ryb25nPiwgYXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RnJvbnRlbmQgRGV2ZWxvcGVyPC9zdHJvbmc+IGJhc2VkIGluIEZyYW5jZS4gSSBhbVxyXG4gICAgICAgICAgICAgICAgcGFzc2lvbmF0ZSBhYm91dCBzdGFydHVwJ3Mgd29ybGQsIGRlc2lnbiwgcGVuY2lsIGRyYXdpbmcsIG11c2ljLFxyXG4gICAgICAgICAgICAgICAgYW50aHJvcG9sb2d5LCB0aGUgZWNvbm9teS4gV2ViIGRldmVsb3BtZW50IGlzIGZvciBtZSwgYSB3YXkgdG9cclxuICAgICAgICAgICAgICAgIGNvbWJpbmUgc29tZSBhc3BlY3RzIG9mIG15IHBlcnNvbmFsaXR5LCB3aXRoIGEgcGFydCBvbiBvbmUgc2lkZVxyXG4gICAgICAgICAgICAgICAgYXJ0aXN0aWMgKGRlc2lnbiwgVVgsIFVJKSwgbXkgY2VudGVycyBpbnRlcmVzdHMgYW5kIG9uIHRoZSBvdGhlclxyXG4gICAgICAgICAgICAgICAgbXkgYXBwZXRpdGUgZm9yIHByb2JsZW0gc29sdmluZy5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgV2UgdW5kZXJzdGFuZCB0aGVyZSdzIG9mdGVuIGEgZGlzY29ubmVjdCBiZXR3ZWVuIGRlc2lnbiBhbmQgXHJcbiAgICAgICAgICAgICAgICBkZXZlbG9wbWVudCBhbmQgdGhpbmdzIGNhbiBvZnRlbiBnbyBhd3J5LiBXZSBhcmUgZnJvbnRlbmQgXHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXN0cyB0aGF0IHN0cmVzcyB0aGUgc21hbGxlciBkZXRhaWxzIHRvIGRlbGl2ZXIgcGl4ZWwtcGVyZmVjdCBwcm9kdWN0cy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5Sb3d9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5leHBsb3JlQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5wcm9qZWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd0ljb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hcnJvdy1yaWd0aC5zdmdcIiBhbHQ9XCJhcnJvd1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvRG90dGVkV2hpdGUuc3ZnXCIgYWx0PVwiYXJyb3dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSW1hZ2VzfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9JbWFnZXNJbm5lcn1cclxuICAgICAgICAgICAgICByZWY9eyhlbCkgPT4gKGltYWdlcyA9IGVsKX1cclxuICAgICAgICAgICAgICBkYXRhLXJlbGF0aXZlLWlucHV0PVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1jYWxpYnJhdGUteD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2NlbmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e3N0eWxlcy5maXJzdH1cclxuICAgICAgICAgICAgICAgIGRhdGEtZGVwdGg9XCIwLjVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZTEuanBnXCIgYWx0PVwiZnJvbnQtaW1nXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBpZD17c3R5bGVzLnNlY29uZH1cclxuICAgICAgICAgICAgICAgIGRhdGEtZGVwdGg9XCIwLjRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZTIuanBnXCIgYWx0PVwiYmFjay1pbWdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9