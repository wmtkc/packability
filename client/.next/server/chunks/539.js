"use strict";
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 4539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "in": () => (/* binding */ initializeApollo),
/* harmony export */   "_p": () => (/* binding */ addApolloState),
/* harmony export */   "Uk": () => (/* binding */ useApollo)
/* harmony export */ });
/* unused harmony export APOLLO_STATE_PROP_NAME */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7596);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6330);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);






const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_3___default()();
let apolloClient;
function createApolloClient() {
    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
        ssrMode: "undefined" === 'undefined',
        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({
            uri: publicRuntimeConfig.API_URL,
            credentials: 'same-origin'
        }),
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        books: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__.concatPagination)()
                    }
                }
            }
        })
    });
}
function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient();
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();
        // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
        const data = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(existingCache, initialState, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray)=>[
                    ...sourceArray,
                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d, s)
                        )
                    ), 
                ]
        });
        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (true) return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}
function addApolloState(client, pageProps) {
    if (pageProps === null || pageProps === void 0 ? void 0 : pageProps.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }
    return pageProps;
}
function useApollo(pageProps) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state)
    , [
        state
    ]);
    return store;
}


/***/ })

};
;