"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 5080:
/***/ ((module) => {

module.exports = require("async-sema");

/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 4053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_0__]);
_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (typeof req.query.token !== 'string') {
        return res.status(401).json({
            message: 'invalid token'
        });
    }
    if (req.query.token !== process.env.NOTION_TOKEN) {
        return res.status(404).json({
            message: 'not authorized'
        });
    }
    const postsTable = await (0,_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (!postsTable) {
        return res.status(401).json({
            message: 'Failed to fetch posts'
        });
    }
    res.setPreviewData({});
    res.writeHead(307, {
        Location: `/blog`
    });
    res.end();
});

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [228,482], () => (__webpack_exec__(4053)));
module.exports = __webpack_exports__;

})();