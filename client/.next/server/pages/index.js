(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7879:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Register_form__GC0gv",
	"h1": "Register_h1__jGYj2",
	"input": "Register_input__5GZMu",
	"message": "Register_message__2oZb2",
	"submitFields": "Register_submitFields__dekWM",
	"loader": "Register_loader__rzIv_",
	"load1": "Register_load1__7OLBn"
};


/***/ }),

/***/ 8196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/App.tsx
var App = __webpack_require__(1523);
// EXTERNAL MODULE: ./components/InfoBox.tsx
var InfoBox = __webpack_require__(4939);
// EXTERNAL MODULE: ./components/Header.tsx
var Header = __webpack_require__(8969);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/components/Register.module.css
var Register_module = __webpack_require__(7879);
var Register_module_default = /*#__PURE__*/__webpack_require__.n(Register_module);
;// CONCATENATED MODULE: ./lib/mutations/createUser.ts

const CREATE_USER_MUTATION = client_.gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
      createUser(username: $username, email: $email, password: $password) {
        id
      }
  }
`;

;// CONCATENATED MODULE: ./lib/queries/isUsernameAvailable.ts

const IS_USERNAME_AVAILABLE_QUERY = client_.gql`
    query Query($username: String!) {
        isUsernameAvailable(username: $username)
    }
`;

;// CONCATENATED MODULE: ./components/Forms/Register.tsx






function Register() {
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        email: '',
        username: '',
        password: '',
        passwordVerify: '',
        message: '',
        loader: false,
        canSubmit: false
    });
    let { loading: usernameLoading , error , data  } = (0,client_.useQuery)(IS_USERNAME_AVAILABLE_QUERY, {
        variables: {
            username: state.username
        }
    });
    let [createUser, { loading: creatingUser  }] = (0,client_.useMutation)(CREATE_USER_MUTATION);
    (0,external_react_.useEffect)(()=>{
        if ((usernameLoading || creatingUser) && !state.loader) {
            console.dir('loader on');
            setState({
                ...state,
                loader: true
            });
        } else if (state.loader) {
            console.dir('loader off');
            setState({
                ...state,
                loader: false
            });
        }
    }, [
        usernameLoading,
        creatingUser
    ]);
    (0,external_react_.useEffect)(()=>{
        if (error) setState({
            ...state,
            message: error.message
        });
    }, [
        error
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!usernameLoading && !(data === null || data === void 0 ? void 0 : data.isUsernameAvailable)) {
            setState({
                ...state,
                message: 'Username Already Taken'
            });
        } else if (state.message !== '') {
            setState({
                ...state,
                message: ''
            });
        }
    }, [
        data
    ]);
    (0,external_react_.useEffect)(()=>{
        const { password , passwordVerify  } = state;
        const passwordsDoNotMatch = password !== passwordVerify && password !== '' && passwordVerify !== '';
        if (passwordsDoNotMatch) {
            setState({
                ...state,
                message: 'Passwords do not match',
                canSubmit: false
            });
        } else if (state.message !== '' || !state.canSubmit) {
            setState({
                ...state,
                message: '',
                canSubmit: true
            });
        }
    }, [
        state.password,
        state.passwordVerify
    ]);
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setState({
            ...state,
            [name]: value
        });
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const form = event.target;
        form.reset();
        if (state.password !== state.passwordVerify) {
            setState({
                ...state,
                message: 'Passwords do not match'
            });
            return;
        }
        const userId = await createUser({
            variables: {
                email: state.email,
                username: state.username,
                password: state.password
            }
        });
        console.log(userId);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (Register_module_default()).form,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Register_module_default()).h1,
                children: "Register User"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (Register_module_default()).input,
                placeholder: "email",
                value: state.email,
                onChange: handleChange,
                name: "email",
                type: "email",
                required: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (Register_module_default()).input,
                placeholder: "username",
                value: state.username,
                onChange: handleChange,
                name: "username",
                type: "text",
                required: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (Register_module_default()).input,
                placeholder: "password",
                value: state.password,
                onChange: handleChange,
                name: "password",
                type: "password",
                required: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (Register_module_default()).input,
                placeholder: "verify password",
                value: state.passwordVerify,
                onChange: handleChange,
                name: "passwordVerify",
                type: "password",
                required: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Register_module_default()).submitFields,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        disabled: !state.canSubmit,
                        children: "Submit"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Register_module_default()).message,
                        style: state.message ? {
                            visibility: "visible"
                        } : {
                            visibility: "hidden"
                        },
                        children: state.message
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Register_module_default()).loader,
                        style: state.loader ? {
                            visibility: "visible"
                        } : {
                            visibility: "hidden"
                        }
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/BookList.tsx + 1 modules
var BookList = __webpack_require__(3675);
// EXTERNAL MODULE: ./lib/queries/books.ts
var books = __webpack_require__(7503);
// EXTERNAL MODULE: ./lib/apolloClient.ts
var lib_apolloClient = __webpack_require__(2724);
;// CONCATENATED MODULE: ./pages/index.tsx








const IndexPage = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(App/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoBox/* default */.Z, {
                children: "ℹ️ This page shows how to use SSG with Apollo."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Register, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BookList/* default */.Z, {})
        ]
    })
;
async function getStaticProps() {
    const apolloClient = (0,lib_apolloClient/* initializeApollo */["in"])();
    await apolloClient.query({
        query: books/* ALL_BOOKS_QUERY */.k,
        variables: books/* allBooksQueryVars */.X
    });
    return (0,lib_apolloClient/* addApolloState */._p)(apolloClient, {
        props: {},
        revalidate: 1
    });
}
/* harmony default export */ const pages = (IndexPage);


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 7596:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ 6330:
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 4558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,72,964,724], () => (__webpack_exec__(8196)));
module.exports = __webpack_exports__;

})();