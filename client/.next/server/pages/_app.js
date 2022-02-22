"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ExtLink = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        ...props,
        rel: "noopener",
        target: props.target || '_blank'
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtLink);


/***/ }),

/***/ 4881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./src/lib/apolloClient.ts
var lib_apolloClient = __webpack_require__(4539);
// EXTERNAL MODULE: ./src/components/rich-text/ext-link.tsx
var ext_link = __webpack_require__(2189);
;// CONCATENATED MODULE: ./src/components/footer.tsx


function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ext_link/* default */.Z, {
                    href: "https://github.com/ijjk/notion-blog",
                    children: "view source"
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    const apolloClient = (0,lib_apolloClient/* useApollo */.Uk)(pageProps);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(client_.ApolloProvider, {
        client: apolloClient,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 7596:
/***/ ((module) => {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [539], () => (__webpack_exec__(4881)));
module.exports = __webpack_exports__;

})();