/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/apolloClient.ts":
/*!*********************************!*\
  !*** ./src/lib/apolloClient.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APOLLO_STATE_PROP_NAME\": () => (/* binding */ APOLLO_STATE_PROP_NAME),\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"addApolloState\": () => (/* binding */ addApolloState),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEqual */ \"lodash/isEqual\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';\nconst { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_3___default()();\nlet apolloClient;\nfunction createApolloClient() {\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === 'undefined',\n        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n            uri: publicRuntimeConfig.API_URL,\n            credentials: 'same-origin'\n        }),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n            typePolicies: {\n                Query: {\n                    fields: {\n                        books: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__.concatPagination)()\n                    }\n                }\n            }\n        })\n    });\n}\nfunction initializeApollo(initialState = null) {\n    const _apolloClient = apolloClient ?? createApolloClient();\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // gets hydrated here\n    if (initialState) {\n        // Get existing cache, loaded during client side data fetching\n        const existingCache = _apolloClient.extract();\n        // Merge the initialState from getStaticProps/getServerSideProps in the existing cache\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(existingCache, initialState, {\n            // combine arrays using object equality (like in sets)\n            arrayMerge: (destinationArray, sourceArray)=>[\n                    ...sourceArray,\n                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d, s)\n                        )\n                    ), \n                ]\n        });\n        // Restore the cache with the merged data\n        _apolloClient.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (true) return _apolloClient;\n    // Create the Apollo Client once in the client\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n    if (pageProps === null || pageProps === void 0 ? void 0 : pageProps.props) {\n        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n    }\n    return pageProps;\n}\nfunction useApollo(pageProps) {\n    const state = pageProps[APOLLO_STATE_PROP_NAME];\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state)\n    , [\n        state\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ0MsS0FBSztBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvbGliL2Fwb2xsb0NsaWVudC50cz9iMzg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IGNvbmNhdFBhZ2luYXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudC91dGlsaXRpZXMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxuZXhwb3J0IGNvbnN0IEFQT0xMT19TVEFURV9QUk9QX05BTUUgPSAnX19BUE9MTE9fU1RBVEVfXydcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcblxubGV0IGFwb2xsb0NsaWVudDogYW55O1xuXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiBwdWJsaWNSdW50aW1lQ29uZmlnLkFQSV9VUkwsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxuICAgIH0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIGJvb2tzOiBjb25jYXRQYWdpbmF0aW9uKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKVxuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKVxuXG4gICAgLy8gTWVyZ2UgdGhlIGluaXRpYWxTdGF0ZSBmcm9tIGdldFN0YXRpY1Byb3BzL2dldFNlcnZlclNpZGVQcm9wcyBpbiB0aGUgZXhpc3RpbmcgY2FjaGVcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoZXhpc3RpbmdDYWNoZSwgaW5pdGlhbFN0YXRlLCB7XG4gICAgICAvLyBjb21iaW5lIGFycmF5cyB1c2luZyBvYmplY3QgZXF1YWxpdHkgKGxpa2UgaW4gc2V0cylcbiAgICAgIGFycmF5TWVyZ2U6IChkZXN0aW5hdGlvbkFycmF5OiBBcnJheTxhbnk+LCBzb3VyY2VBcnJheTogQXJyYXk8YW55PikgPT4gW1xuICAgICAgICAuLi5zb3VyY2VBcnJheSxcbiAgICAgICAgLi4uZGVzdGluYXRpb25BcnJheS5maWx0ZXIoKGQpID0+XG4gICAgICAgICAgc291cmNlQXJyYXkuZXZlcnkoKHM6IGFueSkgPT4gIWlzRXF1YWwoZCwgcykpXG4gICAgICAgICksXG4gICAgICBdLFxuICAgIH0pXG5cbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB3aXRoIHRoZSBtZXJnZWQgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKVxuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFwb2xsb1N0YXRlKGNsaWVudDogYW55LCBwYWdlUHJvcHM6IGFueSkge1xuICBpZiAocGFnZVByb3BzPy5wcm9wcykge1xuICAgIHBhZ2VQcm9wcy5wcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXSA9IGNsaWVudC5jYWNoZS5leHRyYWN0KClcbiAgfVxuXG4gIHJldHVybiBwYWdlUHJvcHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhwYWdlUHJvcHM6IGFueSkge1xuICBjb25zdCBzdGF0ZSA9IHBhZ2VQcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXVxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhzdGF0ZSksIFtzdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufSJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiQXBvbGxvQ2xpZW50IiwiSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiY29uY2F0UGFnaW5hdGlvbiIsImdldENvbmZpZyIsIm1lcmdlIiwiaXNFcXVhbCIsIkFQT0xMT19TVEFURV9QUk9QX05BTUUiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJ1cmkiLCJBUElfVVJMIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYm9va3MiLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwiZGF0YSIsImFycmF5TWVyZ2UiLCJkZXN0aW5hdGlvbkFycmF5Iiwic291cmNlQXJyYXkiLCJmaWx0ZXIiLCJkIiwiZXZlcnkiLCJzIiwicmVzdG9yZSIsImFkZEFwb2xsb1N0YXRlIiwiY2xpZW50IiwicGFnZVByb3BzIiwicHJvcHMiLCJ1c2VBcG9sbG8iLCJzdGF0ZSIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/apolloClient.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notion/src/styles.css */ \"./node_modules/react-notion/src/styles.css\");\n/* harmony import */ var react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ \"./node_modules/prismjs/themes/prism-tomorrow.css\");\n/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_lib_apolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/lib/apolloClient */ \"./src/lib/apolloClient.ts\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const apolloClient = (0,src_lib_apolloClient__WEBPACK_IMPORTED_MODULE_5__.useApollo)(pageProps);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {\n        client: apolloClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/wmtkc/Documents/personal/jailbreak/packability/client/src/pages/_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wmtkc/Documents/personal/jailbreak/packability/client/src/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNRO0FBQ007QUFFSztBQUNDO1NBR3ZDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxLQUFLLENBQUNDLFlBQVksR0FBR0osK0RBQVMsQ0FBQ0csU0FBUztJQUV4QyxNQUFNLDZFQUNISiwwREFBYztRQUFDTSxNQUFNLEVBQUVELFlBQVk7OEZBQ2pDRixTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHN0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwicmVhY3Qtbm90aW9uL3NyYy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS10b21vcnJvdy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwic3JjL2xpYi9hcG9sbG9DbGllbnRcIjtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFwb2xsb1Byb3ZpZGVyIiwidXNlQXBvbGxvIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/prismjs/themes/prism-tomorrow.css":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-tomorrow.css ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-notion/src/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/react-notion/src/styles.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();