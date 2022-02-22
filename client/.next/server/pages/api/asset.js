"use strict";
(() => {
var exports = {};
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getNotionAsset)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6544);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5228);
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3316);
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_constants__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rpc__WEBPACK_IMPORTED_MODULE_1__, node_fetch__WEBPACK_IMPORTED_MODULE_0__]);
([_rpc__WEBPACK_IMPORTED_MODULE_1__, node_fetch__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



async function getNotionAsset(res, assetUrl, blockId) {
    const requestURL = `${_server_constants__WEBPACK_IMPORTED_MODULE_2__.API_ENDPOINT}/getSignedFileUrls`;
    const assetRes = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(requestURL, {
        method: 'POST',
        headers: {
            cookie: `token_v2=${_server_constants__WEBPACK_IMPORTED_MODULE_2__.NOTION_TOKEN}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            urls: [
                {
                    url: assetUrl,
                    permissionRecord: {
                        table: 'block',
                        id: blockId
                    }
                }, 
            ]
        })
    });
    if (assetRes.ok) {
        return assetRes.json();
    } else {
        console.log('bad request', assetRes.status);
        res.json({
            status: 'error',
            message: 'failed to load Notion asset'
        });
        throw new Error(await (0,_rpc__WEBPACK_IMPORTED_MODULE_1__/* .getError */ .by)(assetRes));
    }
};

});

/***/ }),

/***/ 7402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FU": () => (/* binding */ setHeaders),
/* harmony export */   "Cf": () => (/* binding */ handleData),
/* harmony export */   "S3": () => (/* binding */ handleError)
/* harmony export */ });
function setHeaders(req, res) {
    // set SPR/CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'pragma');
    if (req.method === 'OPTIONS') {
        res.status(200);
        res.end();
        return true;
    }
    return false;
}
async function handleData(res, data) {
    data = data || {
        status: 'error',
        message: 'unhandled request'
    };
    res.status(data.status !== 'error' ? 200 : 500);
    res.json(data);
}
function handleError(res, error) {
    console.error(error);
    res.status(500).json({
        status: 'error',
        message: 'an error occurred processing request'
    });
}


/***/ }),

/***/ 7970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ notionApi)
/* harmony export */ });
/* harmony import */ var _lib_notion_getNotionAssetUrls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4765);
/* harmony import */ var _lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7402);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notion_getNotionAssetUrls__WEBPACK_IMPORTED_MODULE_0__]);
_lib_notion_getNotionAssetUrls__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


async function notionApi(req, res) {
    if ((0,_lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__/* .setHeaders */ .FU)(req, res)) return;
    try {
        const { assetUrl , blockId  } = req.query;
        if (!assetUrl || !blockId) {
            (0,_lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__/* .handleData */ .Cf)(res, {
                status: 'error',
                message: 'asset url or blockId missing'
            });
        } else {
            // we need to re-encode it since it's decoded when added to req.query
            const { signedUrls =[] , ...urlsResponse } = await (0,_lib_notion_getNotionAssetUrls__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(res, assetUrl, blockId);
            if (signedUrls.length === 0) {
                console.error('Failed to get signedUrls', urlsResponse);
                return (0,_lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__/* .handleData */ .Cf)(res, {
                    status: 'error',
                    message: 'Failed to get asset URL'
                });
            }
            res.status(307);
            // @ts-ignore
            res.setHeader('Location', signedUrls.pop());
            res.end();
        }
    } catch (error) {
        // @ts-ignore
        (0,_lib_notion_utils__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .S3)(res, error);
    }
};

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [228], () => (__webpack_exec__(7970)));
module.exports = __webpack_exports__;

})();