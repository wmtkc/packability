"use strict";
(() => {
var exports = {};
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 2201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4886);
/* harmony import */ var _components_InfoBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9845);
/* harmony import */ var _components_OldHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9962);
/* harmony import */ var _components_Forms_BookSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1190);
/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5433);
/* harmony import */ var _lib_queries_books__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6335);
/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4539);








const SSRPage = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_App__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OldHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InfoBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: "ℹ️ This page shows how to use SSR with Apollo."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Forms_BookSubmit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BookList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    })
;
async function getServerSideProps() {
    const apolloClient = (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_7__/* .initializeApollo */ ["in"])();
    await apolloClient.query({
        query: _lib_queries_books__WEBPACK_IMPORTED_MODULE_6__/* .ALL_BOOKS_QUERY */ .k,
        variables: _lib_queries_books__WEBPACK_IMPORTED_MODULE_6__/* .allBooksQueryVars */ .X
    });
    return (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_7__/* .addApolloState */ ._p)(apolloClient, {
        props: {}
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSRPage);


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

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,676,664,987,937,539,190], () => (__webpack_exec__(2201)));
module.exports = __webpack_exports__;

})();