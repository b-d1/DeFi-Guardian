"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/RateLimitStatus.tsx":
/*!********************************************!*\
  !*** ./src/components/RateLimitStatus.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction RateLimitIndicator(param) {\n    let { limitReachedColor =\"red\" , limitNotReachedColor =\"green\"  } = param;\n    _s();\n    const [isLimitReached, setIsLimitReached] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dotColor = isLimitReached ? limitReachedColor : limitNotReachedColor;\n    const statusText = isLimitReached ? \"Rate limit breached\" : \"All systems good\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: dotColor,\n                    width: \"10px\",\n                    height: \"10px\",\n                    marginTop: \"5px\",\n                    borderRadius: \"50%\",\n                    marginRight: \"5px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/RateLimitStatus.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: statusText\n            }, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/RateLimitStatus.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/RateLimitStatus.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(RateLimitIndicator, \"NNIiTv1WsMDvKKv/OSZ+u/Mer58=\");\n_c = RateLimitIndicator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RateLimitIndicator);\nvar _c;\n$RefreshReg$(_c, \"RateLimitIndicator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SYXRlTGltaXRTdGF0dXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0UsbUJBQW1CLEtBQTZELEVBQUU7UUFBL0QsRUFBRUMsbUJBQW9CLE1BQUssRUFBRUMsc0JBQXVCLFFBQU8sRUFBRSxHQUE3RDs7SUFDMUIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFELE1BQU1NLFdBQVdGLGlCQUFpQkYsb0JBQW9CQyxvQkFBb0I7SUFDMUUsTUFBTUksYUFBYUgsaUJBQWlCLHdCQUF3QixrQkFBa0I7SUFFOUUscUJBQ0UsOERBQUNJO1FBQUlDLE9BQU87WUFBRUMsU0FBUztZQUFRQyxZQUFZO1FBQVM7OzBCQUNsRCw4REFBQ0g7Z0JBQ0NDLE9BQU87b0JBQ0xHLGlCQUFpQk47b0JBQ2pCTyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxXQUFXO29CQUNYQyxjQUFjO29CQUNkQyxhQUFhO2dCQUNmOzs7Ozs7MEJBQ0YsOERBQUNDOzBCQUFNWDs7Ozs7Ozs7Ozs7O0FBR2I7R0FwQlNOO0tBQUFBO0FBc0JULCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmF0ZUxpbWl0U3RhdHVzLnRzeD9mMjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBSYXRlTGltaXRJbmRpY2F0b3IoeyBsaW1pdFJlYWNoZWRDb2xvciA9ICdyZWQnLCBsaW1pdE5vdFJlYWNoZWRDb2xvciA9ICdncmVlbicgfSkge1xuICBjb25zdCBbaXNMaW1pdFJlYWNoZWQsIHNldElzTGltaXRSZWFjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBkb3RDb2xvciA9IGlzTGltaXRSZWFjaGVkID8gbGltaXRSZWFjaGVkQ29sb3IgOiBsaW1pdE5vdFJlYWNoZWRDb2xvcjtcbiAgY29uc3Qgc3RhdHVzVGV4dCA9IGlzTGltaXRSZWFjaGVkID8gJ1JhdGUgbGltaXQgYnJlYWNoZWQnIDogJ0FsbCBzeXN0ZW1zIGdvb2QnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZG90Q29sb3IsXG4gICAgICAgICAgd2lkdGg6ICcxMHB4JyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnXG4gICAgICAgIH19PjwvZGl2PlxuICAgICAgPHNwYW4+e3N0YXR1c1RleHR9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRlTGltaXRJbmRpY2F0b3I7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJhdGVMaW1pdEluZGljYXRvciIsImxpbWl0UmVhY2hlZENvbG9yIiwibGltaXROb3RSZWFjaGVkQ29sb3IiLCJpc0xpbWl0UmVhY2hlZCIsInNldElzTGltaXRSZWFjaGVkIiwiZG90Q29sb3IiLCJzdGF0dXNUZXh0IiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RateLimitStatus.tsx\n"));

/***/ })

});