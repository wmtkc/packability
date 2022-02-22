"use strict";
exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 6216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5020);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([katex__WEBPACK_IMPORTED_MODULE_1__]);
katex__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


function render(expression, displayMode) {
    let result;
    try {
        result = (0,katex__WEBPACK_IMPORTED_MODULE_1__.renderToString)(expression, {
            displayMode: displayMode
        });
    } catch (e) {
        console.dir(e);
        // if (typeof(e) === 'object' && e instanceof ParseError) {
        //   result = e.message
        // }
        if (false) {}
    }
    return result;
}
const Equation = ({ children , displayMode =true  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        dangerouslySetInnerHTML: {
            __html: render(children, displayMode)
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Equation);

});

/***/ })

};
;