"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 8170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var _ext_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2189);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // default tags
    ol: 'ol',
    ul: 'ul',
    li: 'li',
    p: 'p',
    blockquote: 'blockquote',
    a: _ext_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    Code: (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(()=>__webpack_require__.e(/* import() */ 547).then(__webpack_require__.bind(__webpack_require__, 3547))
    , {
        loadableGenerated: {
            modules: [
                "../components/rich-text/dynamic.tsx -> " + "./code"
            ]
        }
    }),
    Counter: (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(()=>__webpack_require__.e(/* import() */ 681).then(__webpack_require__.bind(__webpack_require__, 4681))
    , {
        loadableGenerated: {
            modules: [
                "../components/rich-text/dynamic.tsx -> " + "./counter"
            ]
        }
    }),
    Equation: (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(()=>__webpack_require__.e(/* import() */ 216).then(__webpack_require__.bind(__webpack_require__, 6216))
    , {
        loadableGenerated: {
            modules: [
                "../components/rich-text/dynamic.tsx -> " + "./equation"
            ]
        }
    })
});


/***/ }),

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

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Np": () => (/* binding */ getBlogLink),
/* harmony export */   "mu": () => (/* binding */ getDateStr),
/* harmony export */   "tl": () => (/* binding */ postIsPublished),
/* harmony export */   "E1": () => (/* binding */ normalizeSlug)
/* harmony export */ });
const getBlogLink = (slug)=>{
    return `/blog/${slug}`;
};
const getDateStr = (date)=>{
    return new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    });
};
const postIsPublished = (post)=>{
    return post.Published === 'Yes';
};
const normalizeSlug = (slug)=>{
    if (typeof slug !== 'string') return slug;
    let startingSlash = slug.startsWith('/');
    let endingSlash = slug.endsWith('/');
    if (startingSlash) {
        slug = slug.substr(1);
    }
    if (endingSlash) {
        slug = slug.substr(0, slug.length - 1);
    }
    return startingSlash || endingSlash ? normalizeSlug(slug) : slug;
};


/***/ }),

/***/ 5801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ readFile),
/* harmony export */   "N": () => (/* binding */ writeFile)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3837);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


const readFile = (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().readFile));
const writeFile = (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile));


/***/ }),

/***/ 8300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getBlogIndex)
/* harmony export */ });
/* harmony import */ var async_sema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5080);
/* harmony import */ var async_sema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(async_sema__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9670);
/* harmony import */ var _getTableData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9909);
/* harmony import */ var _getPostPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6394);
/* harmony import */ var _fs_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5801);
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4010);
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_server_constants__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getPostPreview__WEBPACK_IMPORTED_MODULE_3__, _getTableData__WEBPACK_IMPORTED_MODULE_2__, _rpc__WEBPACK_IMPORTED_MODULE_1__]);
([_getPostPreview__WEBPACK_IMPORTED_MODULE_3__, _getTableData__WEBPACK_IMPORTED_MODULE_2__, _rpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






async function getBlogIndex(previews = true) {
    let postsTable = null;
    const useCache = process.env.USE_CACHE === 'true';
    const cacheFile = `${_server_constants__WEBPACK_IMPORTED_MODULE_5__.BLOG_INDEX_CACHE}${previews ? '_previews' : ''}`;
    if (useCache) {
        try {
            postsTable = JSON.parse(await (0,_fs_helpers__WEBPACK_IMPORTED_MODULE_4__/* .readFile */ .p)(cacheFile, 'utf8'));
        } catch (_) {
        /* not fatal */ }
    }
    if (!postsTable) {
        try {
            const data = await (0,_rpc__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('loadPageChunk', {
                pageId: _server_constants__WEBPACK_IMPORTED_MODULE_5__.BLOG_INDEX_ID,
                limit: 100,
                cursor: {
                    stack: []
                },
                chunkNumber: 0,
                verticalColumns: false
            });
            // Parse table with posts
            const tableBlock = (0,_rpc__WEBPACK_IMPORTED_MODULE_1__/* .values */ .VO)(data.recordMap.block).find((block)=>block.value.type === 'collection_view'
            );
            postsTable = await (0,_getTableData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(tableBlock, true);
        } catch (err) {
            console.warn(`Failed to load Notion posts, have you run the create-table script?`);
            return {};
        }
        // only get 10 most recent post's previews
        const postsKeys = Object.keys(postsTable).splice(0, 10);
        const sema = new async_sema__WEBPACK_IMPORTED_MODULE_0__.Sema(3, {
            capacity: postsKeys.length
        });
        if (previews) {
            await Promise.all(postsKeys.sort((a, b)=>{
                const postA = postsTable[a];
                const postB = postsTable[b];
                const timeA = postA.Date;
                const timeB = postB.Date;
                return Math.sign(timeB - timeA);
            }).map(async (postKey)=>{
                await sema.acquire();
                const post = postsTable[postKey];
                post.preview = post.id ? await (0,_getPostPreview__WEBPACK_IMPORTED_MODULE_3__/* .getPostPreview */ .p)(postsTable[postKey].id) : [];
                sema.release();
            }));
        }
        if (useCache) {
            (0,_fs_helpers__WEBPACK_IMPORTED_MODULE_4__/* .writeFile */ .N)(cacheFile, JSON.stringify(postsTable), 'utf8').catch(()=>{});
        }
    }
    return postsTable;
};

});

/***/ }),

/***/ 5904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getNotionUsers)
/* harmony export */ });
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rpc__WEBPACK_IMPORTED_MODULE_0__]);
_rpc__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

async function getNotionUsers(ids) {
    const { results =[]  } = await (0,_rpc__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('getRecordValues', {
        requests: ids.map((id)=>({
                id,
                table: 'notion_user'
            })
        )
    });
    const users = {};
    for (const result of results){
        const { value  } = result || {
            value: {}
        };
        const { given_name , family_name  } = value;
        let full_name = given_name || '';
        if (family_name) {
            full_name = `${full_name} ${family_name}`;
        }
        users[value.id] = {
            full_name
        };
    }
    return {
        users
    };
};

});

/***/ }),

/***/ 6325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getPageData),
/* harmony export */   "z": () => (/* binding */ loadPageChunk)
/* harmony export */ });
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rpc__WEBPACK_IMPORTED_MODULE_0__]);
_rpc__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

async function getPageData(pageId) {
    // a reasonable size limit for the largest blog post (1MB),
    // as one chunk is about 10KB
    const maximumChunckNumer = 100;
    try {
        var chunkNumber = 0;
        var data = await loadPageChunk({
            pageId,
            chunkNumber
        });
        var blocks = data.recordMap.block;
        while(data.cursor.stack.length !== 0 && chunkNumber < maximumChunckNumer){
            chunkNumber = chunkNumber + 1;
            data = await loadPageChunk({
                pageId,
                chunkNumber,
                cursor: data.cursor
            });
            blocks = Object.assign(blocks, data.recordMap.block);
        }
        const blockArray = (0,_rpc__WEBPACK_IMPORTED_MODULE_0__/* .values */ .VO)(blocks);
        if (blockArray[0] && blockArray[0].value.content) {
            // remove table blocks
            blockArray.splice(0, 3);
        }
        return {
            blocks: blockArray
        };
    } catch (err) {
        console.error(`Failed to load pageData for ${pageId}`, err);
        return {
            blocks: []
        };
    }
};
function loadPageChunk({ pageId , limit =30 , cursor ={
    stack: []
} , chunkNumber =0 , verticalColumns =false  }) {
    return (0,_rpc__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('loadPageChunk', {
        pageId,
        limit,
        cursor,
        chunkNumber,
        verticalColumns
    });
}

});

/***/ }),

/***/ 6394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getPostPreview)
/* harmony export */ });
/* harmony import */ var _getPageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6325);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rpc__WEBPACK_IMPORTED_MODULE_1__, _getPageData__WEBPACK_IMPORTED_MODULE_0__]);
([_rpc__WEBPACK_IMPORTED_MODULE_1__, _getPageData__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


const nonPreviewTypes = new Set([
    'editor',
    'page',
    'collection_view'
]);
async function getPostPreview(pageId) {
    let blocks;
    let dividerIndex = 0;
    const data = await (0,_getPageData__WEBPACK_IMPORTED_MODULE_0__/* .loadPageChunk */ .z)({
        pageId,
        limit: 10
    });
    blocks = (0,_rpc__WEBPACK_IMPORTED_MODULE_1__/* .values */ .VO)(data.recordMap.block);
    for(let i = 0; i < blocks.length; i++){
        if (blocks[i].value.type === 'divider') {
            dividerIndex = i;
            break;
        }
    }
    blocks = blocks.splice(0, dividerIndex).filter(({ value: { type , properties  }  })=>!nonPreviewTypes.has(type) && properties
    ).map((block)=>block.value.properties.title
    );
    return blocks;
}

});

/***/ }),

/***/ 9909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ loadTable)
/* harmony export */ });
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9670);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8904);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(github_slugger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queryCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8450);
/* harmony import */ var _blog_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5988);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rpc__WEBPACK_IMPORTED_MODULE_0__, _queryCollection__WEBPACK_IMPORTED_MODULE_2__]);
([_rpc__WEBPACK_IMPORTED_MODULE_0__, _queryCollection__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




async function loadTable(collectionBlock, isPosts = false) {
    const slugger = new (github_slugger__WEBPACK_IMPORTED_MODULE_1___default())();
    const { value  } = collectionBlock;
    let table = {};
    const col = await (0,_queryCollection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        collectionId: value.collection_id,
        collectionViewId: value.view_ids[0]
    });
    const entries = (0,_rpc__WEBPACK_IMPORTED_MODULE_0__/* .values */ .VO)(col.recordMap.block).filter((block)=>{
        return block.value && block.value.parent_id === value.collection_id;
    });
    const colId = Object.keys(col.recordMap.collection)[0];
    const schema = col.recordMap.collection[colId].value.schema;
    const schemaKeys = Object.keys(schema);
    for (const entry of entries){
        const props = entry.value && entry.value.properties;
        const row = {};
        if (!props) continue;
        if (entry.value.content) {
            row.id = entry.value.id;
        }
        schemaKeys.forEach((key)=>{
            // might be undefined
            let val = props[key] && props[key][0][0];
            // authors and blocks are centralized
            if (val && props[key][0][1]) {
                const type = props[key][0][1][0];
                switch(type[0]){
                    case 'a':
                        val = type[1];
                        break;
                    case 'u':
                        val = props[key].filter((arr)=>arr.length > 1
                        ).map((arr)=>arr[1][0][1]
                        );
                        break;
                    case 'p':
                        const page = col.recordMap.block[type[1]];
                        row.id = page.value.id;
                        val = page.value.properties.title[0][0];
                        break;
                    case 'd':
                        // start_date: 2019-06-18
                        // start_time: 07:00
                        // time_zone: Europe/Berlin, America/Los_Angeles
                        if (!type[1].start_date) {
                            break;
                        }
                        // initial with provided date
                        const providedDate = new Date(type[1].start_date + ' ' + (type[1].start_time || '')).getTime();
                        // calculate offset from provided time zone
                        const timezoneOffset = new Date(new Date().toLocaleString('en-US', {
                            timeZone: type[1].time_zone
                        })).getTime() - new Date().getTime();
                        // initialize subtracting time zone offset
                        val = new Date(providedDate - timezoneOffset).getTime();
                        break;
                    default:
                        console.error('unknown type', type[0], type);
                        break;
                }
            }
            if (typeof val === 'string') {
                val = val.trim();
            }
            row[schema[key].name] = val || null;
        });
        // auto-generate slug from title
        row.Slug = (0,_blog_helpers__WEBPACK_IMPORTED_MODULE_3__/* .normalizeSlug */ .E1)(row.Slug || slugger.slug(row.Page || ''));
        const key1 = row.Slug;
        if (isPosts && !key1) continue;
        if (key1) {
            table[key1] = row;
        } else {
            if (!Array.isArray(table)) table = [];
            table.push(row);
        }
    }
    return table;
};

});

/***/ }),

/***/ 8450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ queryCollection)
/* harmony export */ });
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rpc__WEBPACK_IMPORTED_MODULE_0__]);
_rpc__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

function queryCollection({ collectionId , collectionViewId , loader ={} , query ={}  }) {
    const queryCollectionBody = {
        loader: {
            type: 'reducer',
            reducers: {
                collection_group_results: {
                    type: 'results',
                    limit: 999,
                    loadContentCover: true
                },
                'table:uncategorized:title:count': {
                    type: 'aggregation',
                    aggregation: {
                        property: 'title',
                        aggregator: 'count'
                    }
                }
            },
            searchQuery: '',
            userTimeZone: 'America/Phoenix'
        }
    };
    return (0,_rpc__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('queryCollection', {
        collectionId,
        collectionViewId,
        ...queryCollectionBody
    });
};

});

/***/ }),

/***/ 6596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ textBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8170);


function applyTags(tags = [], children, noPTag = false, key) {
    let child = children;
    for (const tag of tags){
        const props = {
            key
        };
        let tagName = tag[0];
        if (noPTag && tagName === 'p') tagName = (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);
        if (tagName === 'c') tagName = 'code';
        if (tagName === '_') {
            tagName = 'span';
            props.className = 'underline';
        }
        if (tagName === 'a') {
            props.href = tag[1];
        }
        if (tagName === 'e') {
            tagName = _components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Equation */ .Z.Equation;
            props.displayMode = false;
            child = tag[1];
        }
        child = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z[tagName] || tagName, props, child);
    }
    return child;
}
function textBlock(text = [], noPTag = false, mainKey) {
    const children = [];
    let key = 0;
    for (const textItem of text){
        key++;
        if (textItem.length === 1) {
            children.push(textItem);
            continue;
        }
        children.push(applyTags(textItem[1], textItem[0], noPTag, key));
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(noPTag ? (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) : _components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_1__/* ["default"].p */ .Z.p, {
        key: mainKey
    }, ...children, noPTag);
}


/***/ }),

/***/ 9670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ rpc),
/* harmony export */   "VO": () => (/* binding */ values)
/* harmony export */ });
/* unused harmony exports getError, getJSONHeaders, getBodyOrNull */
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6544);
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4010);
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_constants__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);
node_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


async function rpc(fnName, body) {
    if (!_server_constants__WEBPACK_IMPORTED_MODULE_1__.NOTION_TOKEN) {
        throw new Error('NOTION_TOKEN is not set in env');
    }
    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(`${_server_constants__WEBPACK_IMPORTED_MODULE_1__.API_ENDPOINT}/${fnName}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            cookie: `token_v2=${_server_constants__WEBPACK_IMPORTED_MODULE_1__.NOTION_TOKEN}`
        },
        body: JSON.stringify(body)
    });
    if (res.ok) {
        return res.json();
    } else {
        console.dir(await getError(res));
    //throw new Error(await getError(res))
    }
};
async function getError(res) {
    return `Notion API error (${res.status}) \n${getJSONHeaders(res)}\n ${await getBodyOrNull(res)}`;
}
function getJSONHeaders(res) {
    return JSON.stringify(res.headers.raw());
}
function getBodyOrNull(res) {
    try {
        return res.text();
    } catch (err) {
        return null;
    }
}
function values(obj) {
    const vals = [];
    Object.keys(obj).forEach((key)=>{
        vals.push(obj[key]);
    });
    return vals;
}

});

/***/ }),

/***/ 4010:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// use commonjs so it can be required without transpiling
const path = __webpack_require__(1017);
const normalizeId = (id)=>{
    if (!id) return id;
    if (id.length === 36) return id;
    if (id.length !== 32) {
        throw new Error(`Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`);
    }
    return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(16, 4)}-${id.substr(20)}`;
};
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID);
const API_ENDPOINT = 'https://www.notion.so/api/v3';
const BLOG_INDEX_CACHE = path.resolve('.blog_index_data');
module.exports = {
    NOTION_TOKEN,
    BLOG_INDEX_ID,
    API_ENDPOINT,
    BLOG_INDEX_CACHE,
    normalizeId
};


/***/ })

};
;