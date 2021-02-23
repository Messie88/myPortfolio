webpackHotUpdate_N_E("pages/projects/telaqua-the-landing-page",{

/***/ "./src/pages/projects/ProjectItem/ProjectItem.component.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/projects/ProjectItem/ProjectItem.component.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/gsap */ "./node_modules/gsap/dist/gsap.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectItem.module.scss */ "./src/pages/projects/ProjectItem/ProjectItem.module.scss");
/* harmony import */ var _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\isabe\\Developper\\myPortfolio\\src\\pages\\projects\\ProjectItem\\ProjectItem.component.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);

const ProjectItem = ({
  heroImage,
  title,
  role,
  challenges,
  technos,
  linkToSeeLive,
  imageOne,
  imageTwo,
  imageThree,
  tabletImageOne,
  tabletImageTwo,
  tabletImageThree,
  mobileImageOne,
  mobileImageTwo,
  mobileImageThree
}) => {
  _s();

  let heroTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let image = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(heroTitle, 1.1, {
      y: 200,
      ease: "back",
      delay: 0.5
    });
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(image, 1, {
      scrollTrigger: {
        trigger: heroTitle,
        toggleActions: "play",
        end: "top 1%"
      },
      width: "100vw"
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hero,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: heroImage,
    alt: "Project Screen",
    ref: el => image = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("h1", {
    ref: el => heroTitle = el,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, title))), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.descriptionLeft,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Role :"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, role)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Challenges"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, challenges))), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.descriptionRight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Technos :"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, technos)), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.descriptionRightLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: linkToSeeLive,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "See live")))), __jsx("p", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "DESKTOP"), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: imageOne,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: imageTwo,
    alt: "",
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageTwo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: imageThree,
    alt: "",
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageThree,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "TABLET"), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: tabletImageOne,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tabletImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: tabletImageTwo,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tabletImage,
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageTwo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: tabletImageThree,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tabletImage,
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageThree,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.screen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "MOBILE"), __jsx("div", {
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: mobileImageOne,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: mobileImageTwo,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileImage,
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageTwo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: mobileImageThree,
    alt: "",
    id: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileImage,
    className: _ProjectItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageThree,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "Previous Project / next Project")));
};

_s(ProjectItem, "yAmFeQoaBVjdlncL/vnPWb8NQzQ=");

_c = ProjectItem;
/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

var _c;

$RefreshReg$(_c, "ProjectItem");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzL1Byb2plY3RJdGVtL1Byb2plY3RJdGVtLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsIlByb2plY3RJdGVtIiwiaGVyb0ltYWdlIiwidGl0bGUiLCJyb2xlIiwiY2hhbGxlbmdlcyIsInRlY2hub3MiLCJsaW5rVG9TZWVMaXZlIiwiaW1hZ2VPbmUiLCJpbWFnZVR3byIsImltYWdlVGhyZWUiLCJ0YWJsZXRJbWFnZU9uZSIsInRhYmxldEltYWdlVHdvIiwidGFibGV0SW1hZ2VUaHJlZSIsIm1vYmlsZUltYWdlT25lIiwibW9iaWxlSW1hZ2VUd28iLCJtb2JpbGVJbWFnZVRocmVlIiwiaGVyb1RpdGxlIiwidXNlUmVmIiwiaW1hZ2UiLCJ1c2VFZmZlY3QiLCJmcm9tIiwieSIsImVhc2UiLCJkZWxheSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwidG9nZ2xlQWN0aW9ucyIsImVuZCIsIndpZHRoIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVybyIsImVsIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkxlZnQiLCJkZXNjcmlwdGlvblJpZ2h0IiwiZGVzY3JpcHRpb25SaWdodExpbmsiLCJzY3JlZW4iLCJpbWFnZXMiLCJ0YWJsZXRJbWFnZSIsIm1vYmlsZUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLG1EQUFJLENBQUNDLGNBQUwsQ0FBb0JDLHFFQUFwQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQztBQUNuQkMsV0FEbUI7QUFFbkJDLE9BRm1CO0FBR25CQyxNQUhtQjtBQUluQkMsWUFKbUI7QUFLbkJDLFNBTG1CO0FBTW5CQyxlQU5tQjtBQU9uQkMsVUFQbUI7QUFRbkJDLFVBUm1CO0FBU25CQyxZQVRtQjtBQVVuQkMsZ0JBVm1CO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQXBERixDQURBLENBREY7QUEwREQsQ0EvRkQ7O0dBQU1ULFc7O0tBQUFBLFc7QUFpR1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL3RlbGFxdWEtdGhlLWxhbmRpbmctcGFnZS4xYmEwNzQzYWE0NGU3MmViMDdhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdzYXAsIFBvd2VyMyB9IGZyb20gXCJnc2FwL2Rpc3QvZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Byb2plY3RJdGVtLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG5cclxuY29uc3QgUHJvamVjdEl0ZW0gPSAoe1xyXG4gIGhlcm9JbWFnZSxcclxuICB0aXRsZSxcclxuICByb2xlLFxyXG4gIGNoYWxsZW5nZXMsXHJcbiAgdGVjaG5vcyxcclxuICBsaW5rVG9TZWVMaXZlLFxyXG4gIGltYWdlT25lLFxyXG4gIGltYWdlVHdvLFxyXG4gIGltYWdlVGhyZWUsXHJcbiAgdGFibGV0SW1hZ2VPbmUsXHJcbiAgdGFibGV0SW1hZ2VUd28sXHJcbiAgdGFibGV0SW1hZ2VUaHJlZSxcclxuICBtb2JpbGVJbWFnZU9uZSxcclxuICBtb2JpbGVJbWFnZVR3byxcclxuICBtb2JpbGVJbWFnZVRocmVlXHJcbn0pID0+IHtcclxuXHJcbiAgbGV0IGhlcm9UaXRsZSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgaW1hZ2UgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnc2FwLmZyb20oaGVyb1RpdGxlLCAxLjEsIHtcclxuICAgICAgeTogMjAwLFxyXG4gICAgICBlYXNlOiBcImJhY2tcIixcclxuICAgICAgZGVsYXk6IDAuNVxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20oaW1hZ2UsIDEsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IGhlcm9UaXRsZSxcclxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXlcIixcclxuICAgICAgICBlbmQ6IFwidG9wIDElXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxyXG4gICAgICAgIDxpbWcgXHJcbiAgICAgICAgc3JjPXtoZXJvSW1hZ2V9IFxyXG4gICAgICAgIGFsdD1cIlByb2plY3QgU2NyZWVuXCIgXHJcbiAgICAgICAgcmVmPXsoZWwpID0+IChpbWFnZSA9IGVsKX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9UaXRsZX0+XHJcbiAgICAgICAgICA8aDEgcmVmPXsoZWwpID0+IChoZXJvVGl0bGUgPSBlbCl9Pnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbkxlZnR9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlJvbGUgOjwvaDM+XHJcbiAgICAgICAgICAgIDxwPntyb2xlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPkNoYWxsZW5nZXM8L2gzPlxyXG4gICAgICAgICAgICA8cD57Y2hhbGxlbmdlc308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9uUmlnaHR9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlRlY2hub3MgOjwvaDM+XHJcbiAgICAgICAgICAgIDxwPnt0ZWNobm9zfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvblJpZ2h0TGlua30+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2xpbmtUb1NlZUxpdmV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5TZWUgbGl2ZTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbn0+REVTS1RPUDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXN9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlT25lfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlVHdvfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVR3b30gLz5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVRocmVlfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVRocmVlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbn0+VEFCTEVUPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc30+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dGFibGV0SW1hZ2VPbmV9IGFsdD1cIlwiIGlkPXtzdHlsZXMudGFibGV0SW1hZ2V9IC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dGFibGV0SW1hZ2VUd299IGFsdD1cIlwiIGlkPXtzdHlsZXMudGFibGV0SW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlVHdvfSAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3RhYmxldEltYWdlVGhyZWV9IGFsdD1cIlwiIGlkPXtzdHlsZXMudGFibGV0SW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlVGhyZWV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2NyZWVufT5NT0JJTEU8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VzfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXttb2JpbGVJbWFnZU9uZX0gYWx0PVwiXCIgaWQ9e3N0eWxlcy5tb2JpbGVJbWFnZX0gLz5cclxuICAgICAgICAgIDxpbWcgc3JjPXttb2JpbGVJbWFnZVR3b30gYWx0PVwiXCIgaWQ9e3N0eWxlcy5tb2JpbGVJbWFnZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VUd299IC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bW9iaWxlSW1hZ2VUaHJlZX0gYWx0PVwiXCIgaWQ9e3N0eWxlcy5tb2JpbGVJbWFnZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VUaHJlZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+UHJldmlvdXMgUHJvamVjdCAvIG5leHQgUHJvamVjdDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=