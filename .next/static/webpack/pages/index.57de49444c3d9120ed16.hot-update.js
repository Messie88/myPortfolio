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
  }, "Frontend Developer"), " based in France.", "Sensitive to design, i stress the smaller details to deliver pixel-perfect products. I know how precious time is, especially in business, and how challenging it can be to retain the user attention, so i adapt quickly and listen carefully to your needs and i constantly try to always offer that little more than what make the difference. The technologies I use most often are ReactJS, NextJS, Styled-Components, Gatsby, Html, Css, Sass."))), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImage,
    id: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.first,
    "data-depth": "0.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/image1.jpg",
    alt: "front-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heroImage,
    id: _HeroSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.second,
    "data-depth": "0.4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/image2.jpg",
    alt: "back-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24vSGVyb1NlY3Rpb24uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJIZXJvIiwiYXBwIiwidXNlUmVmIiwiaW1hZ2VzIiwiY29udGVudCIsInRsIiwiVGltZWxpbmVMaXRlIiwiZGVsYXkiLCJ1c2VFZmZlY3QiLCJzY2VuZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJhbGxheEluc3RhbmNlIiwiUGFyYWxsYXgiLCJyZWxhdGl2ZUlucHV0IiwiY2FsaWJyYXRlWCIsImNhbGlicmF0ZSIsImZpcnN0SW1nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzZWNvbmRJbWciLCJsYXN0RWxlbWVudENoaWxkIiwiaGVhZGxpbmVGaXJzdCIsImNoaWxkcmVuIiwiaGVhZGxpbmVTZWNvbmQiLCJoZWFkbGluZVRocmlkIiwiaGVhZGxpbmVGb3VydGgiLCJjb250ZW50UCIsImNvbnRlbnRCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiVHdlZW5NYXgiLCJ0byIsImNzcyIsInZpc2liaWxpdHkiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZU91dCIsImZyb20iLCJ5Iiwic2NhbGUiLCJzdGFnZ2VyRnJvbSIsIm9wYWNpdHkiLCJzdHlsZXMiLCJoZXJvIiwiZWwiLCJjb250YWluZXIiLCJoZXJvSW5uZXIiLCJoZXJvQ29udGVudCIsImhlcm9Db250ZW50SW5uZXIiLCJoZXJvQ29udGVudExpbmUiLCJzbWFsbCIsImhlcm9Db250ZW50TGluZUlubmVyIiwiaGVyb0ltYWdlcyIsImhlcm9JbWFnZXNJbm5lciIsImhlcm9JbWFnZSIsImZpcnN0Iiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQUE7O0FBQ2pCLE1BQUlDLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFE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QU0sQ0FBQ1ksU0FEcEI7QUFFRSxNQUFFLEVBQUVaLCtEQUFNLENBQUNhLEtBRmI7QUFHRSxrQkFBVyxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLE9BQUcsRUFBQyxvQkFBVDtBQUE4QixPQUFHLEVBQUMsV0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBUEYsRUFjRTtBQUNFLGFBQVMsRUFBRWIsK0RBQU0sQ0FBQ1ksU0FEcEI7QUFFRSxNQUFFLEVBQUVaLCtEQUFNLENBQUNjLE1BRmI7QUFHRSxrQkFBVyxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLE9BQUcsRUFBQyxvQkFBVDtBQUE4QixPQUFHLEVBQUMsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBZEYsQ0FERixDQWhERixDQURGLENBREYsQ0FERjtBQStFRCxDQXRLRDs7R0FBTXhELEk7O0tBQUFBLEk7QUF3S1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3ZGU0OTQ0NGMzZDkxMjBlZDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCJwYXJhbGxheC1qc1wiO1xyXG5pbXBvcnQgeyBUd2Vlbk1heCwgUG93ZXIzLCBUaW1lbGluZUxpdGUgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlcm9TZWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIGxldCBhcHAgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGltYWdlcyA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY29udGVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSh7IGRlbGF5OiAwLjggfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBQYXJhbGxheCBlZmZlY3Qgb24gaW1hZ2VzXHJcbiAgICB2YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjZW5lXCIpO1xyXG4gICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUsIHtcclxuICAgICAgcmVsYXRpdmVJbnB1dDogdHJ1ZSxcclxuICAgICAgY2FsaWJyYXRlWDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgcGFyYWxsYXhJbnN0YW5jZS5jYWxpYnJhdGUoMTAsIDAuNSk7XHJcblxyXG4gICAgLy9JbWFnZXMgVmFyc1xyXG4gICAgY29uc3QgZmlyc3RJbWcgPSBpbWFnZXMuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBzZWNvbmRJbWcgPSBpbWFnZXMubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAvL0NvbnRlbnQgVmFyc1xyXG4gICAgY29uc3QgaGVhZGxpbmVGaXJzdCA9IGNvbnRlbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XHJcbiAgICAvL2NvbnN0IGhlYWRsaW5lU2Vjb25kID0gaGVhZGxpbmVGaXJzdC5uZXh0U2libGluZztcclxuICAgIGNvbnN0IGhlYWRsaW5lU2Vjb25kID0gY29udGVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcclxuICAgIGNvbnN0IGhlYWRsaW5lVGhyaWQgPSBjb250ZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdO1xyXG4gICAgY29uc3QgaGVhZGxpbmVGb3VydGggPSBjb250ZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzNdO1xyXG4gICAgY29uc3QgY29udGVudFAgPSBjb250ZW50LmNoaWxkcmVuWzFdO1xyXG4gICAgY29uc3QgY29udGVudEJ1dHRvbiA9IGNvbnRlbnQuY2hpbGRyZW5bMl07XHJcblxyXG4gICAgY29uc29sZS5sb2coZmlyc3RJbWcsIHNlY29uZEltZyk7XHJcblxyXG4gICAgVHdlZW5NYXgudG8oYXBwLCAwLCB7XHJcbiAgICAgIGNzczogeyB2aXNpYmlsaXR5OiBcInZpc2libGVcIiB9LFxyXG4gICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vSW1hZ2VzIEFuaW1hdGlvbnNcclxuICAgIHRsLmZyb20oc2Vjb25kSW1nLCAxLjIsIHsgeTogMTI4MCwgZWFzZTogUG93ZXIzLmVhc2VPdXQgfSwgXCJTdGFydFwiKVxyXG4gICAgICAuZnJvbShcclxuICAgICAgICBzZWNvbmRJbWcubGFzdEVsZW1lbnRDaGlsZCxcclxuXHJcbiAgICAgICAgMixcclxuICAgICAgICB7IHk6IDEyMDAsIHNjYWxlOiAxLjYsIGVhc2U6IFwiYmFja1wiIH0sXHJcbiAgICAgICAgMC4yXHJcbiAgICAgIClcclxuICAgICAgLmZyb20oZmlyc3RJbWcsIDEuNSwgeyB5OiAxMjgwLCBlYXNlOiBcIlBvd2VyMy5lYXNlT3V0XCIgfSwgMC4yKVxyXG4gICAgICAuZnJvbShcclxuICAgICAgICBmaXJzdEltZy5maXJzdEVsZW1lbnRDaGlsZCxcclxuICAgICAgICAyLFxyXG4gICAgICAgIHsgeTogLTEyMDAsIHNjYWxlOiAxLjYsIGVhc2U6IFwiYmFja1wiIH0sXHJcbiAgICAgICAgMC4yXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy9Db250ZW50IEFuaW1hdGlvbnNcclxuICAgIHRsLnN0YWdnZXJGcm9tKFxyXG4gICAgICBbaGVhZGxpbmVGaXJzdCwgaGVhZGxpbmVTZWNvbmQsIGhlYWRsaW5lVGhyaWQsIGhlYWRsaW5lRm91cnRoXSxcclxuICAgICAgMSxcclxuICAgICAge1xyXG4gICAgICAgIHk6IDMyMCxcclxuICAgICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgICBkZWxheTogMC44LFxyXG4gICAgICB9LFxyXG4gICAgICAwLjE1LFxyXG4gICAgICBcIlN0YXJ0XCJcclxuICAgIClcclxuICAgICAgLmZyb20oXHJcbiAgICAgICAgY29udGVudFAsXHJcbiAgICAgICAgMSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5OiAyMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEuNFxyXG4gICAgICApXHJcbiAgICAgIC5mcm9tKFxyXG4gICAgICAgIGNvbnRlbnRCdXR0b24sXHJcbiAgICAgICAgMSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5OiAyMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEuNlxyXG4gICAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfSByZWY9eyhlbCkgPT4gKGFwcCA9IGVsKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9Jbm5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9Db250ZW50fT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9Db250ZW50SW5uZXJ9XHJcbiAgICAgICAgICAgICAgcmVmPXsoZWwpID0+IChjb250ZW50ID0gZWwpfVxyXG4gICAgICAgICAgICAgIGRhdGEtZGVwdGg9XCIwLjVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvQ29udGVudExpbmV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsfT5NZXNzaWUgTlVOR0kgUEFNQlU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvQ29udGVudExpbmVJbm5lcn0+UkVBQ1RKUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9Db250ZW50TGluZUlubmVyfT5GUk9OVEVORDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9Db250ZW50TGluZUlubmVyfT5ERVZFTE9QRVI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBIaSwgSSdtIDxzdHJvbmc+TWVzc2llPC9zdHJvbmc+LCBhe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Gcm9udGVuZCBEZXZlbG9wZXI8L3N0cm9uZz4gYmFzZWQgaW4gRnJhbmNlLlxyXG4gICAgICAgICAgICAgICAgey8qIEkgYW1cclxuICAgICAgICAgICAgICAgIHBhc3Npb25hdGUgYWJvdXQgc3RhcnR1cCdzIHdvcmxkLCBkZXNpZ24sIHBlbmNpbCBkcmF3aW5nLCBtdXNpYyxcclxuICAgICAgICAgICAgICAgIGFudGhyb3BvbG9neSwgdGhlIGVjb25vbXkuIFdlYiBkZXZlbG9wbWVudCBpcyBmb3IgbWUsIGEgd2F5IHRvXHJcbiAgICAgICAgICAgICAgICBjb21iaW5lIHNvbWUgYXNwZWN0cyBvZiBteSBwZXJzb25hbGl0eSwgd2l0aCBhIHBhcnQgb24gb25lIHNpZGVcclxuICAgICAgICAgICAgICAgIGFydGlzdGljIChkZXNpZ24sIFVYLCBVSSksIG15IGNlbnRlcnMgaW50ZXJlc3RzIGFuZCBvbiB0aGUgb3RoZXJcclxuICAgICAgICAgICAgICAgIG15IGFwcGV0aXRlIGZvciBwcm9ibGVtIHNvbHZpbmcuKi99XHJcbiAgICAgICAgICAgICAgICBTZW5zaXRpdmUgdG8gZGVzaWduLCBpIHN0cmVzcyB0aGUgc21hbGxlciBkZXRhaWxzIHRvIGRlbGl2ZXIgcGl4ZWwtcGVyZmVjdCBwcm9kdWN0cy5cclxuICAgICAgICAgICAgICAgIEkga25vdyBob3cgcHJlY2lvdXMgdGltZSBpcywgZXNwZWNpYWxseSBpbiBidXNpbmVzcywgYW5kIGhvdyBjaGFsbGVuZ2luZyBpdCBjYW4gYmUgdG8gXHJcbiAgICAgICAgICAgICAgICByZXRhaW4gdGhlIHVzZXIgYXR0ZW50aW9uLCBzbyBpIGFkYXB0IHF1aWNrbHkgYW5kXHJcbiAgICAgICAgICAgICAgICBsaXN0ZW4gY2FyZWZ1bGx5IHRvIHlvdXIgbmVlZHMgYW5kIGkgY29uc3RhbnRseSB0cnkgdG8gYWx3YXlzIG9mZmVyIHRoYXQgbGl0dGxlIFxyXG4gICAgICAgICAgICAgICAgbW9yZSB0aGFuIHdoYXQgbWFrZSB0aGUgZGlmZmVyZW5jZS5cclxuXHJcbiAgICAgICAgICAgICAgICBUaGUgdGVjaG5vbG9naWVzIEkgdXNlIG1vc3Qgb2Z0ZW4gYXJlIFJlYWN0SlMsIE5leHRKUywgXHJcbiAgICAgICAgICAgICAgICBTdHlsZWQtQ29tcG9uZW50cywgR2F0c2J5LCBIdG1sLCBDc3MsIFNhc3MuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuUm93fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+cHJvamVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3dJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXJyb3ctcmlndGguc3ZnXCIgYWx0PVwiYXJyb3dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd0ljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0RvdHRlZFdoaXRlLnN2Z1wiIGFsdD1cImFycm93XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0ltYWdlc30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSW1hZ2VzSW5uZXJ9XHJcbiAgICAgICAgICAgICAgcmVmPXsoZWwpID0+IChpbWFnZXMgPSBlbCl9XHJcbiAgICAgICAgICAgICAgZGF0YS1yZWxhdGl2ZS1pbnB1dD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtY2FsaWJyYXRlLXg9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBpZD1cInNjZW5lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9JbWFnZX1cclxuICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuZmlyc3R9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWRlcHRoPVwiMC41XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1hZ2UxLmpwZ1wiIGFsdD1cImZyb250LWltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e3N0eWxlcy5zZWNvbmR9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWRlcHRoPVwiMC40XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1hZ2UyLmpwZ1wiIGFsdD1cImJhY2staW1nXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==