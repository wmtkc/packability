"use strict";
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 3547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8871);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4567);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3__);




const Code = ({ children , language ='javascript'  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: "jsx-8e441642cd999c60",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                    dangerouslySetInnerHTML: {
                        __html: prismjs__WEBPACK_IMPORTED_MODULE_2___default().highlight(children, (prismjs__WEBPACK_IMPORTED_MODULE_2___default().languages)[language.toLowerCase()] || (prismjs__WEBPACK_IMPORTED_MODULE_2___default().languages.javascript))
                    },
                    className: "jsx-8e441642cd999c60"
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8e441642cd999c60",
                children: "pre.jsx-8e441642cd999c60{tab-size:2}\ncode.jsx-8e441642cd999c60{overflow:auto;\ndisplay:block;\npadding:0.8rem;\nline-height:1.5;\nbackground:#f5f5f5;\nfont-size:0.75rem;\nborder-radius:var(--radius)}"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);


/***/ })

};
;