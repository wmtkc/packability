(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 1556:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "shared_layout__gHgBN"
};


/***/ }),

/***/ 1391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1199);
/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7062);
/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_shared_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1556);
/* harmony import */ var _styles_shared_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_shared_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_blog_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5988);
/* harmony import */ var _lib_notion_renderers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6596);
/* harmony import */ var _lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5904);
/* harmony import */ var _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_4__, _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_4__, _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









async function getStaticProps({ preview  }) {
    const postsTable = await (0,_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const authorsToGet = new Set();
    const posts = Object.keys(postsTable).map((slug)=>{
        const post = postsTable[slug];
        // remove draft posts in production
        if (!preview && !(0,_lib_blog_helpers__WEBPACK_IMPORTED_MODULE_6__/* .postIsPublished */ .tl)(post)) {
            return null;
        }
        post.Authors = post.Authors || [];
        for (const author of post.Authors){
            authorsToGet.add(author);
        }
        return post;
    }).filter(Boolean);
    const { users  } = await (0,_lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Array.from(authorsToGet));
    posts.map((post)=>{
        post.Authors = post.Authors.map((id)=>users[id].full_name
        );
    });
    return {
        props: {
            preview: preview || false,
            posts
        },
        revalidate: 10
    };
}
const Index = ({ posts =[] , preview  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                titlePre: "Blog"
            }),
            preview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().previewAlertContainer),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().previewAlert),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "Note:"
                        }),
                        ` `,
                        "Viewing in preview mode",
                        ' ',
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: `/api/clear-preview`,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().escapePreview),
                                children: "Exit Preview"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_shared_module_css__WEBPACK_IMPORTED_MODULE_8___default().layout)} ${(_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().blogIndex)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "My Notion Blog"
                    }),
                    posts.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().noPosts),
                        children: "There are no posts yet"
                    }),
                    posts.map((post)=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().postPreview),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().titleContainer),
                                        children: [
                                            !post.Published && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().draftBadge),
                                                children: "Draft"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: "/blog/[slug]",
                                                as: (0,_lib_blog_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getBlogLink */ .Np)(post.Slug),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: post.Page
                                                })
                                            })
                                        ]
                                    })
                                }),
                                post.Authors.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "authors",
                                    children: [
                                        "By: ",
                                        post.Authors.join(' ')
                                    ]
                                }),
                                post.Date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "posted",
                                    children: [
                                        "Posted: ",
                                        (0,_lib_blog_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getDateStr */ .mu)(post.Date)
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        (!post.preview || post.preview.length === 0) && 'No preview available',
                                        (post.preview || []).map((block, idx)=>(0,_lib_notion_renderers__WEBPACK_IMPORTED_MODULE_3__/* .textBlock */ .$)(block, true, `${post.Slug}${idx}`)
                                        )
                                    ]
                                })
                            ]
                        }, post.Slug));
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

});

/***/ }),

/***/ 5080:
/***/ ((module) => {

"use strict";
module.exports = require("async-sema");

/***/ }),

/***/ 8904:
/***/ ((module) => {

"use strict";
module.exports = require("github-slugger");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8871:
/***/ ((module) => {

"use strict";
module.exports = require("prismjs");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/components/prism-jsx");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 5020:
/***/ ((module) => {

"use strict";
module.exports = import("katex");;

/***/ }),

/***/ 6544:
/***/ ((module) => {

"use strict";
module.exports = import("node-fetch");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,676,664,152,303,199,62], () => (__webpack_exec__(1391)));
module.exports = __webpack_exports__;

})();