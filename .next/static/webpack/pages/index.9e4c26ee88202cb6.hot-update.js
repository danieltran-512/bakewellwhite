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

/***/ "./components/Design.tsx":
/*!*******************************!*\
  !*** ./components/Design.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Design\": function() { return /* binding */ Design; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/parallax */ \"./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Mesh2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/Mesh2.svg */ \"./public/Mesh2.svg\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_mockDesignData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/mockDesignData */ \"./data/mockDesignData.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Design_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Design.module.css */ \"./styles/Design.module.css\");\n/* harmony import */ var _styles_Design_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Design_module_css__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Design = function() {\n    _s();\n    //Keep track of the current viewport\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__.useInView)(), 2), ref1 = ref[0], inView = ref[1];\n    //Render the design contents\n    var renderDesignContents = function(design, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n            initial: {\n                opacity: 0,\n                x: -100\n            },\n            animate: inView ? {\n                opacity: 1,\n                x: 0\n            } : {\n                opacity: 0,\n                x: -100\n            },\n            transition: {\n                type: \"spring\",\n                delay: 0.05 * index\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                ref: ref1,\n                display: \"flex\",\n                alignItems: \"flex-start\",\n                justifyContent: \"space-between\",\n                p: \"0.5em\",\n                sx: {\n                    borderTop: \"2px solid #0E1219\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                        display: \"flex\",\n                        alignItems: \"flex-start\",\n                        gap: \"10px\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {\n                                variant: \"subtitle1\",\n                                display: \"inline\",\n                                children: design.id < 10 ? \"[0\".concat(design.id, \"]\") : \"[\".concat(design.id, \"]\")\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/design/\".concat(design.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {\n                                    className: (_styles_Design_module_css__WEBPACK_IMPORTED_MODULE_12___default().designLink),\n                                    variant: \"h3\",\n                                    display: \"inline\",\n                                    children: design.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {\n                        variant: \"body1\",\n                        textAlign: \"right\",\n                        children: design.description\n                    }, void 0, false, {\n                        fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Design_module_css__WEBPACK_IMPORTED_MODULE_12___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {\n            container: true,\n            p: {\n                lg: \"4em 3em 4em 3em\",\n                xl: \"10em 3em 10em 3em\",\n                md: \"4em 3em 4em 3em\",\n                sm: \"4.5em 3em\",\n                xs: \"3em\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {\n                    item: true,\n                    lg: 7,\n                    md: 6,\n                    sm: 6,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {\n                            variant: \"h1\",\n                            children: [\n                                \"Award-Winning \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 27\n                                }, _this),\n                                \" Designs\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_1__.ParallaxLayer, {\n                            offset: 1.5,\n                            speed: 0.5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                                display: {\n                                    xs: \"none\",\n                                    md: \"block\"\n                                },\n                                sx: {\n                                    position: \"relative\",\n                                    left: \"-5%\",\n                                    bottom: {\n                                        xl: \"-10vh\",\n                                        md: \"0\"\n                                    },\n                                    zIndex: \"20\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: _public_Mesh2_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"Mesh2\",\n                                    width: 600,\n                                    height: 600\n                                }, void 0, false, {\n                                    fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {\n                    item: true,\n                    lg: 5,\n                    md: 6,\n                    sm: 6,\n                    zIndex: 200,\n                    style: {\n                        overflowY: \"scroll\",\n                        maxHeight: \"90vh\"\n                    },\n                    children: [\n                        _data_mockDesignData__WEBPACK_IMPORTED_MODULE_5__.designs.map(function(design, index) {\n                            return renderDesignContents(design, index);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                            initial: {\n                                opacity: 0,\n                                x: -100\n                            },\n                            animate: inView ? {\n                                opacity: 1,\n                                x: 0\n                            } : {\n                                opacity: 0,\n                                x: -100\n                            },\n                            transition: {\n                                delay: 0.05 * 10\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                                p: \"1em 0em 1em 1em\",\n                                textAlign: \"right\",\n                                sx: {\n                                    borderTop: \"2px solid #0E1219\",\n                                    borderBottom: \"2px solid #0E1219\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                                    sx: {\n                                        color: \"#0E1219\"\n                                    },\n                                    variant: \"text\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: \"/design\",\n                                        children: \"View More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/daniel/Documents/GitHub/bakewellwhite/components/Design.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(Design, \"GpcLnEGLCRT/LcXgsVwPMCbjDPg=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__.useInView\n    ];\n});\n_c = Design;\nvar _c;\n$RefreshReg$(_c, \"Design\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxxREFBVTs0QkFDWFcsT0FBTyxFQUFFO2dDQUFDQyxPQUFPLEVBQUMsQ0FBQztnQ0FBRUMsQ0FBQyxFQUFFLENBQUMsR0FBRzs2QkFBQzs0QkFDN0JDLE9BQU8sRUFBRVIsTUFBTSxHQUFHO2dDQUFDTSxPQUFPLEVBQUMsQ0FBQztnQ0FBRUMsQ0FBQyxFQUFFLENBQUM7NkJBQUMsR0FBRTtnQ0FBQ0QsT0FBTyxFQUFDLENBQUM7Z0NBQUVDLENBQUMsRUFBRSxDQUFDLEdBQUc7NkJBQUM7NEJBQ3pERSxVQUFVLEVBQUU7Z0NBQUNFLEtBQUssRUFBRSxJQUFJLEdBQUMsRUFBRTs2QkFBQztzQ0FFMUIsNEVBQUNwQiw2Q0FBRztnQ0FDSndCLENBQUMsRUFBQyxpQkFBaUI7Z0NBQ25CVSxTQUFTLEVBQUMsT0FBTztnQ0FDakJULEVBQUUsRUFBRTtvQ0FDRkMsU0FBUyxFQUFDLG1CQUFtQjtvQ0FDN0JnQyxZQUFZLEVBQUMsbUJBQW1CO2lDQUNqQzswQ0FDRCw0RUFBQ2hFLGtEQUFNO29DQUFDK0IsRUFBRSxFQUFFO3dDQUFDa0MsS0FBSyxFQUFDLFNBQVM7cUNBQUM7b0NBQUUvQixPQUFPLEVBQUMsTUFBTTs4Q0FDM0MsNEVBQUN2QixrREFBSTt3Q0FBQ3lCLElBQUksRUFBRSxTQUFTO2tEQUFFLFdBRXZCOzs7Ozs2Q0FBTzs7Ozs7eUNBQ0E7Ozs7O3FDQUNIOzs7OztpQ0FDSzs7Ozs7O3lCQUNSOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0gsQ0FDUDtBQUNILENBQUM7R0F6R1l2QixNQUFNOztRQUVLSCxrRUFBUzs7O0FBRnBCRyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGVzaWduLnRzeD80MzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgeyBQYXJhbGxheExheWVyIH0gZnJvbSAnQHJlYWN0LXNwcmluZy9wYXJhbGxheCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNZXNoMiBmcm9tICcuLi9wdWJsaWMvTWVzaDIuc3ZnJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9zeXN0ZW0nXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IGRlc2lnbnMsIERlc2lnbkNvbnRlbnQgfSBmcm9tICcuLi9kYXRhL21vY2tEZXNpZ25EYXRhJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvRGVzaWduLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGNvbnN0IERlc2lnbiA9ICgpID0+IHtcbiAgLy9LZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0XG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKTtcblxuICAvL1JlbmRlciB0aGUgZGVzaWduIGNvbnRlbnRzXG4gIGNvbnN0IHJlbmRlckRlc2lnbkNvbnRlbnRzID0gKGRlc2lnbjogRGVzaWduQ29udGVudCwgaW5kZXg6bnVtYmVyKSA9PiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICBpbml0aWFsPXt7b3BhY2l0eTowLCB4OiAtMTAwfX1cbiAgICBhbmltYXRlPXtpblZpZXcgPyB7b3BhY2l0eToxLCB4OiAwfToge29wYWNpdHk6MCwgeDogLTEwMH19XG4gICAgdHJhbnNpdGlvbj17e3R5cGU6J3NwcmluZycsIGRlbGF5OiAwLjA1KmluZGV4fX1cbiAgICA+XG5cbiAgICA8Qm94IHJlZj17cmVmfVxuICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgYWxpZ25JdGVtcz0nZmxleC1zdGFydCdcbiAgICBqdXN0aWZ5Q29udGVudD0nc3BhY2UtYmV0d2VlbidcbiAgICBwPVwiMC41ZW1cIlxuICAgIHN4PXt7XG4gICAgICBib3JkZXJUb3A6JzJweCBzb2xpZCAjMEUxMjE5J1xuICAgIH19XG4gICAgPlxuICAgICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnIGdhcD0nMTBweCc+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMScgZGlzcGxheT0naW5saW5lJz5cbiAgICAgICAgICB7ZGVzaWduLmlkIDwgMTAgPyBgWzAke2Rlc2lnbi5pZH1dYCA6IGBbJHtkZXNpZ24uaWR9XWB9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPExpbmsgaHJlZj17YC9kZXNpZ24vJHtkZXNpZ24uaWR9YH0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgIGNsYXNzTmFtZT17c3R5bGVzLmRlc2lnbkxpbmt9IHZhcmlhbnQ9J2gzJyBkaXNwbGF5PSdpbmxpbmUnPlxuICAgICAgICAgICAge2Rlc2lnbi5uYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgdGV4dEFsaWduPSdyaWdodCc+XG4gICAgICAgICAge2Rlc2lnbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQm94PlxuXG4gICAgPC9tb3Rpb24uZGl2PlxuXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBwPXt7XG4gICAgICAgIGxnOiAnNGVtIDNlbSA0ZW0gM2VtJyxcbiAgICAgICAgeGw6ICcxMGVtIDNlbSAxMGVtIDNlbScsXG4gICAgICAgIG1kOiAnNGVtIDNlbSA0ZW0gM2VtJyxcbiAgICAgICAgc206ICc0LjVlbSAzZW0nLFxuICAgICAgICB4czogJzNlbSdcbiAgICAgIH19PlxuICAgICAgICA8R3JpZCBpdGVtIGxnPXs3fSBtZD17Nn0gc209ezZ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnPlxuICAgICAgICAgICAgQXdhcmQtV2lubmluZyA8YnI+PC9icj4gRGVzaWducyAgXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8UGFyYWxsYXhMYXllciBvZmZzZXQ9ezEuNX0gc3BlZWQ9ezAuNX0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkaXNwbGF5PXt7eHM6J25vbmUnLCBtZDonYmxvY2snfX1cbiAgICAgICAgICAgIHN4ID0ge3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIGxlZnQ6ICctNSUnLFxuICAgICAgICAgICAgICBib3R0b206IHt4bDonLTEwdmgnLCBtZDonMCd9LFxuICAgICAgICAgICAgICB6SW5kZXg6ICcyMCdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e01lc2gyfVxuICAgICAgICAgICAgICBhbHQ9J01lc2gyJ1xuICAgICAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9QYXJhbGxheExheWVyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0gbGc9ezV9IG1kPXs2fSBzbT17Nn1cbiAgICAgICAgekluZGV4PXsyMDB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxuICAgICAgICAgIG1heEhlaWdodDogXCI5MHZoXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAge2Rlc2lnbnMubWFwKChkZXNpZ24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICByZW5kZXJEZXNpZ25Db250ZW50cyhkZXNpZ24sIGluZGV4KVxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6MCwgeDogLTEwMH19XG4gICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8ge29wYWNpdHk6MSwgeDogMH06IHtvcGFjaXR5OjAsIHg6IC0xMDB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3tkZWxheTogMC4wNSoxMH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgcD0nMWVtIDBlbSAxZW0gMWVtJ1xuICAgICAgICAgICAgdGV4dEFsaWduPSdyaWdodCdcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJvcmRlclRvcDonMnB4IHNvbGlkICMwRTEyMTknLFxuICAgICAgICAgICAgICBib3JkZXJCb3R0b206JzJweCBzb2xpZCAjMEUxMjE5J1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8QnV0dG9uIHN4PXt7Y29sb3I6JyMwRTEyMTknfX0gdmFyaWFudD0ndGV4dCc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvZGVzaWduJ30+XG4gICAgICAgICAgICAgIFZpZXcgTW9yZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJQYXJhbGxheExheWVyIiwiUmVhY3QiLCJNZXNoMiIsIkJveCIsIkltYWdlIiwiZGVzaWducyIsIm1vdGlvbiIsInVzZUluVmlldyIsIkxpbmsiLCJzdHlsZXMiLCJEZXNpZ24iLCJyZWYiLCJpblZpZXciLCJyZW5kZXJEZXNpZ25Db250ZW50cyIsImRlc2lnbiIsImluZGV4IiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZGVsYXkiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicCIsInN4IiwiYm9yZGVyVG9wIiwiZ2FwIiwidmFyaWFudCIsImlkIiwiaHJlZiIsImNsYXNzTmFtZSIsImRlc2lnbkxpbmsiLCJuYW1lIiwidGV4dEFsaWduIiwiZGVzY3JpcHRpb24iLCJjb250YWluZXIiLCJsZyIsInhsIiwibWQiLCJzbSIsInhzIiwiaXRlbSIsImJyIiwib2Zmc2V0Iiwic3BlZWQiLCJwb3NpdGlvbiIsImxlZnQiLCJib3R0b20iLCJ6SW5kZXgiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwib3ZlcmZsb3dZIiwibWF4SGVpZ2h0IiwibWFwIiwiYm9yZGVyQm90dG9tIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Design.tsx\n"));

/***/ })

});