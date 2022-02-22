"use strict";
(() => {
var exports = {};
exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 8760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_fs_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5801);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8684);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_notion_renderers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6596);
/* harmony import */ var _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8300);
/* harmony import */ var _lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5904);
/* harmony import */ var _blog_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5988);
/* harmony import */ var _next_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5360);
/* harmony import */ var _next_env__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_env__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_notion_server_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4010);
/* harmony import */ var _lib_notion_server_constants__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_notion_server_constants__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_5__, _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_5__, _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









// must use weird syntax to bypass auto replacing of NODE_ENV
process.env['NODE' + '_ENV'] = 'production';
process.env.USE_CACHE = 'true';
// constants
const NOW = new Date().toJSON();
function mapToAuthor(author) {
    return `<author><name>${author.full_name}</name></author>`;
}
function decode(string) {
    return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
function mapToEntry(post) {
    return `
    <entry>
      <id>${post.link}</id>
      <title>${decode(post.title)}</title>
      <link href="${post.link}"/>
      <updated>${new Date(post.date).toJSON()}</updated>
      <content type="xhtml">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${(0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToStaticMarkup)(post.preview ? (post.preview || []).map((block, idx)=>(0,_lib_notion_renderers__WEBPACK_IMPORTED_MODULE_3__/* .textBlock */ .$)(block, false, post.title + idx)
    ) : post.content)}
          <p class="more">
            <a href="${post.link}">Read more</a>
          </p>
        </div>
      </content>
      ${(post.authors || []).map(mapToAuthor).join('\n      ')}
    </entry>`;
}
function concat(total, item) {
    return total + item;
}
function createRSS(blogPosts = []) {
    const postsString = blogPosts.map(mapToEntry).reduce(concat, '');
    return `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>My Blog</title>
    <subtitle>Blog</subtitle>
    <link href="/atom" rel="self" type="application/rss+xml"/>
    <link href="/" />
    <updated>${NOW}</updated>
    <id>My Notion Blog</id>${postsString}
  </feed>`;
}
async function main() {
    await (0,_next_env__WEBPACK_IMPORTED_MODULE_6__.loadEnvConfig)(process.cwd());
    (_lib_notion_server_constants__WEBPACK_IMPORTED_MODULE_7___default().NOTION_TOKEN) = process.env.NOTION_TOKEN;
    (_lib_notion_server_constants__WEBPACK_IMPORTED_MODULE_7___default().BLOG_INDEX_ID) = _lib_notion_server_constants__WEBPACK_IMPORTED_MODULE_7___default().normalizeId(process.env.BLOG_INDEX_ID);
    const postsTable = await (0,_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(true);
    const neededAuthors = new Set();
    const blogPosts = Object.keys(postsTable).map((slug)=>{
        const post = postsTable[slug];
        if (!(0,_blog_helpers__WEBPACK_IMPORTED_MODULE_8__/* .postIsPublished */ .tl)(post)) return;
        post.authors = post.Authors || [];
        for (const author of post.authors){
            neededAuthors.add(author);
        }
        return post;
    }).filter(Boolean);
    const { users  } = await (0,_lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(Array.from(neededAuthors));
    blogPosts.forEach((post)=>{
        post.authors = post.authors.map((id)=>users[id]
        );
        post.link = (0,_blog_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getBlogLink */ .Np)(post.Slug);
        post.title = post.Page;
        post.date = post.Date;
    });
    const outputPath = './public/atom';
    await (0,_lib_fs_helpers__WEBPACK_IMPORTED_MODULE_1__/* .writeFile */ .N)((0,path__WEBPACK_IMPORTED_MODULE_0__.resolve)(outputPath), createRSS(blogPosts));
    console.log(`Atom feed file generated at \`${outputPath}\``);
}
main().catch((error)=>console.error(error)
);

});

/***/ }),

/***/ 5360:
/***/ ((module) => {

module.exports = require("@next/env");

/***/ }),

/***/ 5080:
/***/ ((module) => {

module.exports = require("async-sema");

/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8871:
/***/ ((module) => {

module.exports = require("prismjs");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-jsx");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8684:
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 5020:
/***/ ((module) => {

module.exports = import("katex");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,303], () => (__webpack_exec__(8760)));
module.exports = __webpack_exports__;

})();