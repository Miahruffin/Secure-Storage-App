/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/components/navbar/navbar.module.js":
/*!****************************************************!*\
  !*** ./src/app/components/navbar/navbar.module.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.js":
/*!***************************!*\
  !*** ./src/app/layout.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/layout.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/layout.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.module */ \"(app-pages-browser)/./src/app/components/navbar/navbar.module.js\");\n/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__);\n// src/app/layout.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            className: (next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                        fileName: \"/Users/jeremiahruffin/Desktop/GitHub Repos/Secure-Storage-App/secure-storage-files/src/app/layout.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeremiahruffin/Desktop/GitHub Repos/Secure-Storage-App/secure-storage-files/src/app/layout.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/jeremiahruffin/Desktop/GitHub Repos/Secure-Storage-App/secure-storage-files/src/app/layout.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                    fileName: \"/Users/jeremiahruffin/Desktop/GitHub Repos/Secure-Storage-App/secure-storage-files/src/app/layout.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeremiahruffin/Desktop/GitHub Repos/Secure-Storage-App/secure-storage-files/src/app/layout.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeremiahruffin/Desktop/GitHub Repos/Secure-Storage-App/secure-storage-files/src/app/layout.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7O0FBT2RBO0FBSmlCO0FBRWdDO0FBSXhDLFNBQVNFLFdBQVcsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaO0lBQ2pDLHFCQUNFLDhEQUFDQztRQUFLQyxNQUFLO2tCQUNULDRFQUFDQztZQUFLQyxXQUFXUCw4SkFBZTs7OEJBQzlCLDhEQUFDUTs4QkFFQyw0RUFBQ1AseUVBQU1BOzs7Ozs7Ozs7OzhCQUdULDhEQUFDUTs4QkFDRU47Ozs7Ozs4QkFHSCw4REFBQ087Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtLQW5Cd0JSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0LmpzPzViMTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9sYXlvdXQuanNcbid1c2UgY2xpZW50JzsgLy8gTWFrZSBzdXJlIHRvIGluY2x1ZGUgdGhpc1xuXG5pbXBvcnQgJy4vZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIubW9kdWxlJztcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICB7LyogSGVhZGVyIENvbnRlbnQgKGUuZy4sIExvZ28sIFRpdGxlKSAqL31cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgey8qIEZvb3RlciBDb250ZW50IChlLmcuLCBDb3B5cmlnaHQsIExpbmtzKSAqL31cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsiaW50ZXIiLCJOYXZiYXIiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJodG1sIiwibGFuZyIsImJvZHkiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJtYWluIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.js\n"));

/***/ })

});