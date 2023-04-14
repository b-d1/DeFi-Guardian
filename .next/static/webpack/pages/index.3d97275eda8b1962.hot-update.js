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

/***/ "./src/components/Button/RateLimitChart.tsx":
/*!**************************************************!*\
  !*** ./src/components/Button/RateLimitChart.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"../../node_modules/recharts/es6/index.js\");\n/* eslint-disable @next/next/no-img-element */ /* eslint-disable @typescript-eslint/no-shadow */ \n\nconst RateLimitChart = ()=>{\n    const data = [\n        {\n            name: \"5pm\",\n            uv: 4000,\n            pv: 2400,\n            amt: 2400\n        },\n        {\n            name: \"6pm\",\n            uv: 3000,\n            pv: 1398,\n            amt: 2210\n        },\n        {\n            name: \"7pm\",\n            uv: 2000,\n            pv: 9800,\n            amt: 2290\n        },\n        {\n            name: \"8pm\",\n            uv: 2780,\n            pv: 3908,\n            amt: 2000\n        },\n        {\n            name: \"9pm\",\n            uv: 1890,\n            pv: 4800,\n            amt: 2181\n        },\n        {\n            name: \"10pm\",\n            uv: 2390,\n            pv: 3800,\n            amt: 2500\n        },\n        {\n            name: \"11pm\",\n            uv: 3490,\n            pv: 4300,\n            amt: 2100\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {\n        width: 500,\n        height: 300,\n        data: data,\n        margin: {\n            top: 5,\n            right: 30,\n            left: 20,\n            bottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.CartesianGrid, {\n                strokeDasharray: \"3 3\"\n            }, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/Button/RateLimitChart.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {\n                range: [\n                    0,\n                    10\n                ],\n                dataKey: \"name\"\n            }, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/Button/RateLimitChart.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {}, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/Button/RateLimitChart.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/Button/RateLimitChart.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Legend, {}, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/Button/RateLimitChart.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                type: \"monotone\",\n                dataKey: \"pv\",\n                stroke: \"#8884d8\",\n                activeDot: {\n                    r: 8\n                }\n            }, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/Button/RateLimitChart.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                type: \"monotone\",\n                dataKey: \"uv\",\n                stroke: \"#82ca9d\"\n            }, void 0, false, {\n                fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/Button/RateLimitChart.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diyahirc/Files/GitHub/ETH-TOKYO-2023/turborepo-web3-starter-kit/apps/web/src/components/Button/RateLimitChart.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_c = RateLimitChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RateLimitChart);\nvar _c;\n$RefreshReg$(_c, \"RateLimitChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b24vUmF0ZUxpbWl0Q2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0Q0FBNEMsR0FDNUMsK0NBQStDO0FBVTdCO0FBRWxCLE1BQU1PLGlCQUFpQixJQUFNO0lBQzNCLE1BQU1DLE9BQU87UUFDWDtZQUNFQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxLQUFLO1FBQ1A7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxLQUFLO1FBQ1A7S0FDRDtJQUVELHFCQUNFLDhEQUFDWiwrQ0FBU0E7UUFDUmEsT0FBTztRQUNQQyxRQUFRO1FBQ1JOLE1BQU1BO1FBQ05PLFFBQVE7WUFDTkMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsUUFBUTtRQUNWOzswQkFDQSw4REFBQ2YsbURBQWFBO2dCQUFDZ0IsaUJBQWdCOzs7Ozs7MEJBQy9CLDhEQUFDbEIsMkNBQUtBO2dCQUFDbUIsT0FBTztvQkFBQztvQkFBRztpQkFBRztnQkFBRUMsU0FBUTs7Ozs7OzBCQUMvQiw4REFBQ25CLDJDQUFLQTs7Ozs7MEJBQ04sOERBQUNFLDZDQUFPQTs7Ozs7MEJBQ1IsOERBQUNDLDRDQUFNQTs7Ozs7MEJBQ1AsOERBQUNMLDBDQUFJQTtnQkFBQ3NCLE1BQUs7Z0JBQVdELFNBQVE7Z0JBQUtFLFFBQU87Z0JBQVVDLFdBQVc7b0JBQUVDLEdBQUc7Z0JBQUU7Ozs7OzswQkFDdEUsOERBQUN6QiwwQ0FBSUE7Z0JBQUNzQixNQUFLO2dCQUFXRCxTQUFRO2dCQUFLRSxRQUFPOzs7Ozs7Ozs7Ozs7QUFHaEQ7S0FsRU1qQjtBQW9FTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vUmF0ZUxpbWl0Q2hhcnQudHN4Pzk2YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvdyAqL1xuaW1wb3J0IHtcbiAgTGluZUNoYXJ0LFxuICBMaW5lLFxuICBYQXhpcyxcbiAgWUF4aXMsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbiAgUmVzcG9uc2l2ZUNvbnRhaW5lclxufSBmcm9tICdyZWNoYXJ0cyc7XG5cbmNvbnN0IFJhdGVMaW1pdENoYXJ0ID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICc1cG0nLFxuICAgICAgdXY6IDQwMDAsXG4gICAgICBwdjogMjQwMCxcbiAgICAgIGFtdDogMjQwMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJzZwbScsXG4gICAgICB1djogMzAwMCxcbiAgICAgIHB2OiAxMzk4LFxuICAgICAgYW10OiAyMjEwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnN3BtJyxcbiAgICAgIHV2OiAyMDAwLFxuICAgICAgcHY6IDk4MDAsXG4gICAgICBhbXQ6IDIyOTBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICc4cG0nLFxuICAgICAgdXY6IDI3ODAsXG4gICAgICBwdjogMzkwOCxcbiAgICAgIGFtdDogMjAwMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJzlwbScsXG4gICAgICB1djogMTg5MCxcbiAgICAgIHB2OiA0ODAwLFxuICAgICAgYW10OiAyMTgxXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnMTBwbScsXG4gICAgICB1djogMjM5MCxcbiAgICAgIHB2OiAzODAwLFxuICAgICAgYW10OiAyNTAwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnMTFwbScsXG4gICAgICB1djogMzQ5MCxcbiAgICAgIHB2OiA0MzAwLFxuICAgICAgYW10OiAyMTAwXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmVDaGFydFxuICAgICAgd2lkdGg9ezUwMH1cbiAgICAgIGhlaWdodD17MzAwfVxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIG1hcmdpbj17e1xuICAgICAgICB0b3A6IDUsXG4gICAgICAgIHJpZ2h0OiAzMCxcbiAgICAgICAgbGVmdDogMjAsXG4gICAgICAgIGJvdHRvbTogNVxuICAgICAgfX0+XG4gICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiAvPlxuICAgICAgPFhBeGlzIHJhbmdlPXtbMCwgMTBdfSBkYXRhS2V5PVwibmFtZVwiIC8+XG4gICAgICA8WUF4aXMgLz5cbiAgICAgIDxUb29sdGlwIC8+XG4gICAgICA8TGVnZW5kIC8+XG4gICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicHZcIiBzdHJva2U9XCIjODg4NGQ4XCIgYWN0aXZlRG90PXt7IHI6IDggfX0gLz5cbiAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJ1dlwiIHN0cm9rZT1cIiM4MmNhOWRcIiAvPlxuICAgIDwvTGluZUNoYXJ0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF0ZUxpbWl0Q2hhcnQ7XG4iXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwiTGluZSIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlJhdGVMaW1pdENoYXJ0IiwiZGF0YSIsIm5hbWUiLCJ1diIsInB2IiwiYW10Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJzdHJva2VEYXNoYXJyYXkiLCJyYW5nZSIsImRhdGFLZXkiLCJ0eXBlIiwic3Ryb2tlIiwiYWN0aXZlRG90IiwiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Button/RateLimitChart.tsx\n"));

/***/ })

});