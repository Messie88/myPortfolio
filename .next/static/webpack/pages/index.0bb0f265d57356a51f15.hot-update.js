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
  }), "Sensitive to design, i stress the smaller details to deliver pixel-perfect products.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }), "I know how precious time is, especially in business, and how challenging it can be to retain the user attention, so i adapt quickly and listen carefully to your needs and i constantly try to always offer that little more than what make the difference. The technologies I use most often are ReactJS, NextJS, Styled-Components, Gatsby, Html, Css, Sass."))), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImage,
    id: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.first,
    "data-depth": "0.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/image1.jpg",
    alt: "front-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImage,
    id: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.second,
    "data-depth": "0.4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/image2.jpg",
    alt: "back-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24vSGVyb1NlY3Rpb24uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJIZXJvIiwiYXBwIiwidXNlUmVmIiwiaW1hZ2VzIiwiY29udGVudCIsInRsIiwiVGltZWxpbmVMaXRlIiwiZGVsYXkiLCJ1c2VFZmZlY3QiLCJzY2VuZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJhbGxheEluc3RhbmNlIiwiUGFyYWxsYXgiLCJyZWxhdGl2ZUlucHV0IiwiY2FsaWJyYXRlWCIsImNhbGlicmF0ZSIsImZpcnN0SW1nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzZWNvbmRJbWciLCJsYXN0RWxlbWVudENoaWxkIiwiaGVhZGxpbmVGaXJzdCIsImNoaWxkcmVuIiwiaGVhZGxpbmVTZWNvbmQiLCJoZWFkbGluZVRocmlkIiwiaGVhZGxpbmVGb3VydGgiLCJjb250ZW50UCIsImNvbnRlbnRCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiVHdlZW5NYXgiLCJ0byIsImNzcyIsInZpc2liaWxpdHkiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZU91dCIsImZyb20iLCJ5Iiwic2NhbGUiLCJzdGFnZ2VyRnJvbSIsIm9wYWNpdHkiLCJzdHlsZXMiLCJoZXJvIiwiZWwiLCJjb250YWluZXIiLCJoZXJvSW5uZXIiLCJoZXJvQ29udGVudCIsImhlcm9Db250ZW50SW5uZXIiLCJoZXJvQ29udGVudExpbmUiLCJzbWFsbCIsImhlcm9Db250ZW50TGluZUlubmVyIiwiaGVyb0ltYWdlcyIsImhlcm9JbWFnZXNJbm5lciIsImhlcm9JbWFnZSIsImZpcnN0Iiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQUE7O0FBQ2pCLE1BQUlDLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFE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RVYsK0RBQU0sQ0FBQ1csZUFEcEI7QUFFRSxPQUFHLEVBQUdULEVBQUQsSUFBU3pDLE1BQU0sR0FBR3lDLEVBRnpCO0FBR0UsMkJBQW9CLE1BSHRCO0FBSUUsd0JBQWlCLE1BSm5CO0FBS0UsTUFBRSxFQUFDLE9BTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQ0UsYUFBUyxFQUFFRiwrREFBTSxDQUFDWSxTQURwQjtBQUVFLE1BQUUsRUFBRVosK0RBQU0sQ0FBQ2EsS0FGYjtBQUdFLGtCQUFXLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssT0FBRyxFQUFDLG9CQUFUO0FBQThCLE9BQUcsRUFBQyxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FQRixFQWNFO0FBQ0UsYUFBUyxFQUFFYiwrREFBTSxDQUFDWSxTQURwQjtBQUVFLE1BQUUsRUFBRVosK0RBQU0sQ0FBQ2MsTUFGYjtBQUdFLGtCQUFXLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssT0FBRyxFQUFDLG9CQUFUO0FBQThCLE9BQUcsRUFBQyxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FkRixDQURGLENBakRGLENBREYsQ0FERixDQURGO0FBZ0ZELENBdktEOztHQUFNeEQsSTs7S0FBQUEsSTtBQXlLU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGJiMGYyNjVkNTczNTZhNTFmMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSBcInBhcmFsbGF4LWpzXCI7XHJcbmltcG9ydCB7IFR3ZWVuTWF4LCBQb3dlcjMsIFRpbWVsaW5lTGl0ZSB9IGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVyb1NlY3Rpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEhlcm8gPSAoKSA9PiB7XHJcbiAgbGV0IGFwcCA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgaW1hZ2VzID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgdGwgPSBuZXcgVGltZWxpbmVMaXRlKHsgZGVsYXk6IDAuOCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFBhcmFsbGF4IGVmZmVjdCBvbiBpbWFnZXNcclxuICAgIHZhciBzY2VuZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVcIik7XHJcbiAgICB2YXIgcGFyYWxsYXhJbnN0YW5jZSA9IG5ldyBQYXJhbGxheChzY2VuZSwge1xyXG4gICAgICByZWxhdGl2ZUlucHV0OiB0cnVlLFxyXG4gICAgICBjYWxpYnJhdGVYOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBwYXJhbGxheEluc3RhbmNlLmNhbGlicmF0ZSgxMCwgMC41KTtcclxuXHJcbiAgICAvL0ltYWdlcyBWYXJzXHJcbiAgICBjb25zdCBmaXJzdEltZyA9IGltYWdlcy5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGNvbnN0IHNlY29uZEltZyA9IGltYWdlcy5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgIC8vQ29udGVudCBWYXJzXHJcbiAgICBjb25zdCBoZWFkbGluZUZpcnN0ID0gY29udGVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcclxuICAgIC8vY29uc3QgaGVhZGxpbmVTZWNvbmQgPSBoZWFkbGluZUZpcnN0Lm5leHRTaWJsaW5nO1xyXG4gICAgY29uc3QgaGVhZGxpbmVTZWNvbmQgPSBjb250ZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xyXG4gICAgY29uc3QgaGVhZGxpbmVUaHJpZCA9IGNvbnRlbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl07XHJcbiAgICBjb25zdCBoZWFkbGluZUZvdXJ0aCA9IGNvbnRlbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bM107XHJcbiAgICBjb25zdCBjb250ZW50UCA9IGNvbnRlbnQuY2hpbGRyZW5bMV07XHJcbiAgICBjb25zdCBjb250ZW50QnV0dG9uID0gY29udGVudC5jaGlsZHJlblsyXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmaXJzdEltZywgc2Vjb25kSW1nKTtcclxuXHJcbiAgICBUd2Vlbk1heC50byhhcHAsIDAsIHtcclxuICAgICAgY3NzOiB7IHZpc2liaWxpdHk6IFwidmlzaWJsZVwiIH0sXHJcbiAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9JbWFnZXMgQW5pbWF0aW9uc1xyXG4gICAgdGwuZnJvbShzZWNvbmRJbWcsIDEuMiwgeyB5OiAxMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9LCBcIlN0YXJ0XCIpXHJcbiAgICAgIC5mcm9tKFxyXG4gICAgICAgIHNlY29uZEltZy5sYXN0RWxlbWVudENoaWxkLFxyXG5cclxuICAgICAgICAyLFxyXG4gICAgICAgIHsgeTogMTIwMCwgc2NhbGU6IDEuNiwgZWFzZTogXCJiYWNrXCIgfSxcclxuICAgICAgICAwLjJcclxuICAgICAgKVxyXG4gICAgICAuZnJvbShmaXJzdEltZywgMS41LCB7IHk6IDEyODAsIGVhc2U6IFwiUG93ZXIzLmVhc2VPdXRcIiB9LCAwLjIpXHJcbiAgICAgIC5mcm9tKFxyXG4gICAgICAgIGZpcnN0SW1nLmZpcnN0RWxlbWVudENoaWxkLFxyXG4gICAgICAgIDIsXHJcbiAgICAgICAgeyB5OiAtMTIwMCwgc2NhbGU6IDEuNiwgZWFzZTogXCJiYWNrXCIgfSxcclxuICAgICAgICAwLjJcclxuICAgICAgKTtcclxuXHJcbiAgICAvL0NvbnRlbnQgQW5pbWF0aW9uc1xyXG4gICAgdGwuc3RhZ2dlckZyb20oXHJcbiAgICAgIFtoZWFkbGluZUZpcnN0LCBoZWFkbGluZVNlY29uZCwgaGVhZGxpbmVUaHJpZCwgaGVhZGxpbmVGb3VydGhdLFxyXG4gICAgICAxLFxyXG4gICAgICB7XHJcbiAgICAgICAgeTogMzIwLFxyXG4gICAgICAgIGVhc2U6IFwiYmFja1wiLFxyXG4gICAgICAgIGRlbGF5OiAwLjgsXHJcbiAgICAgIH0sXHJcbiAgICAgIDAuMTUsXHJcbiAgICAgIFwiU3RhcnRcIlxyXG4gICAgKVxyXG4gICAgICAuZnJvbShcclxuICAgICAgICBjb250ZW50UCxcclxuICAgICAgICAxLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIGVhc2U6IFwiYmFja1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMS40XHJcbiAgICAgIClcclxuICAgICAgLmZyb20oXHJcbiAgICAgICAgY29udGVudEJ1dHRvbixcclxuICAgICAgICAxLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIGVhc2U6IFwiYmFja1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMS42XHJcbiAgICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99IHJlZj17KGVsKSA9PiAoYXBwID0gZWwpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0lubmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRlbnRJbm5lcn1cclxuICAgICAgICAgICAgICByZWY9eyhlbCkgPT4gKGNvbnRlbnQgPSBlbCl9XHJcbiAgICAgICAgICAgICAgZGF0YS1kZXB0aD1cIjAuNVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9Db250ZW50TGluZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGx9Pk1lc3NpZSBOVU5HSSBQQU1CVTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9Db250ZW50TGluZUlubmVyfT5SRUFDVEpTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRlbnRMaW5lSW5uZXJ9PkZST05URU5EPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRlbnRMaW5lSW5uZXJ9PkRFVkVMT1BFUjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEhpLCBJJ20gPHN0cm9uZz5NZXNzaWU8L3N0cm9uZz4sIGF7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZyb250ZW5kIERldmVsb3Blcjwvc3Ryb25nPiBiYXNlZCBpbiBGcmFuY2UuIEkgYW1cclxuICAgICAgICAgICAgICAgIHBhc3Npb25hdGUgYWJvdXQgc3RhcnR1cCdzIHdvcmxkLCBkZXNpZ24sIHBlbmNpbCBkcmF3aW5nLCBtdXNpYyxcclxuICAgICAgICAgICAgICAgIGFudGhyb3BvbG9neSwgdGhlIGVjb25vbXkuIFdlYiBkZXZlbG9wbWVudCBpcyBmb3IgbWUsIGEgd2F5IHRvXHJcbiAgICAgICAgICAgICAgICBjb21iaW5lIHNvbWUgYXNwZWN0cyBvZiBteSBwZXJzb25hbGl0eSwgd2l0aCBhIHBhcnQgb24gb25lIHNpZGVcclxuICAgICAgICAgICAgICAgIGFydGlzdGljIChkZXNpZ24sIFVYLCBVSSksIG15IGNlbnRlcnMgaW50ZXJlc3RzIGFuZCBvbiB0aGUgb3RoZXJcclxuICAgICAgICAgICAgICAgIG15IGFwcGV0aXRlIGZvciBwcm9ibGVtIHNvbHZpbmcuXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFNlbnNpdGl2ZSB0byBkZXNpZ24sIGkgc3RyZXNzIHRoZSBzbWFsbGVyIGRldGFpbHMgdG8gZGVsaXZlciBwaXhlbC1wZXJmZWN0IHByb2R1Y3RzLlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBJIGtub3cgaG93IHByZWNpb3VzIHRpbWUgaXMsIGVzcGVjaWFsbHkgaW4gYnVzaW5lc3MsIGFuZCBob3cgY2hhbGxlbmdpbmcgaXQgY2FuIGJlIHRvIHJldGFpbiB0aGUgdXNlciBhdHRlbnRpb24sIHNvIGkgYWRhcHQgcXVpY2tseSBhbmRcclxuICAgICAgICAgICAgICAgIGxpc3RlbiBjYXJlZnVsbHkgdG8geW91ciBuZWVkcyBhbmQgaSBjb25zdGFudGx5IHRyeSB0byBhbHdheXMgb2ZmZXIgdGhhdCBsaXR0bGUgbW9yZSB0aGFuIHdoYXQgbWFrZSB0aGUgZGlmZmVyZW5jZS5cclxuXHJcbiAgICAgICAgICAgICAgICBUaGUgdGVjaG5vbG9naWVzIEkgdXNlIG1vc3Qgb2Z0ZW4gYXJlIFJlYWN0SlMsIE5leHRKUywgXHJcbiAgICAgICAgICAgICAgICBTdHlsZWQtQ29tcG9uZW50cywgR2F0c2J5LCBIdG1sLCBDc3MsIFNhc3MuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuUm93fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+cHJvamVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3dJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXJyb3ctcmlndGguc3ZnXCIgYWx0PVwiYXJyb3dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd0ljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0RvdHRlZFdoaXRlLnN2Z1wiIGFsdD1cImFycm93XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0ltYWdlc30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSW1hZ2VzSW5uZXJ9XHJcbiAgICAgICAgICAgICAgcmVmPXsoZWwpID0+IChpbWFnZXMgPSBlbCl9XHJcbiAgICAgICAgICAgICAgZGF0YS1yZWxhdGl2ZS1pbnB1dD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtY2FsaWJyYXRlLXg9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBpZD1cInNjZW5lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9JbWFnZX1cclxuICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuZmlyc3R9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWRlcHRoPVwiMC41XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1hZ2UxLmpwZ1wiIGFsdD1cImZyb250LWltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e3N0eWxlcy5zZWNvbmR9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWRlcHRoPVwiMC40XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1hZ2UyLmpwZ1wiIGFsdD1cImJhY2staW1nXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==