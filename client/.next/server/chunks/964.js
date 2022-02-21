"use strict";
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 3675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BookList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./components/ErrorMessage.tsx


function ErrorMessage({ message  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: "jsx-2536a85f45ca4f77",
        children: [
            message,
            jsx_runtime_.jsx((style_default()), {
                id: "2536a85f45ca4f77",
                children: "aside.jsx-2536a85f45ca4f77{padding:1.5em;\nfont-size:14px;\ncolor:white;\nbackground-color:red}"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./lib/queries/books.ts
var queries_books = __webpack_require__(7503);
;// CONCATENATED MODULE: ./components/BookList.tsx





function BookList() {
    const { loading , error , data , fetchMore , networkStatus  } = (0,client_.useQuery)(queries_books/* ALL_BOOKS_QUERY */.k, {
        variables: queries_books/* allBooksQueryVars */.X,
        notifyOnNetworkStatusChange: true
    });
    const loadingMoreBooks = networkStatus === client_.NetworkStatus.fetchMore;
    if (error) return(/*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
        message: "Error loading posts."
    }));
    if (loading && !loadingMoreBooks) return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        /*#__PURE__*/ children: "Loading"
    }));
    const { books , _booksMeta  } = data;
    const areMoreBooks = books.length < _booksMeta.count;
    const loadMoreBooks = ()=>{
        fetchMore({
            variables: {
                skip: books.length
            }
        });
        console.log(data);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "jsx-b7d43af507891f0a",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "jsx-b7d43af507891f0a",
                children: books.map((book, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "jsx-b7d43af507891f0a",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-b7d43af507891f0a",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "jsx-b7d43af507891f0a",
                                    children: [
                                        index + 1,
                                        ". "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-b7d43af507891f0a",
                                    children: book.author + " — " + book.title
                                })
                            ]
                        })
                    }, book.id)
                )
            }),
            areMoreBooks && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>loadMoreBooks()
                ,
                disabled: loadingMoreBooks,
                className: "jsx-b7d43af507891f0a",
                children: loadingMoreBooks ? 'Loading...' : 'Show More'
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "b7d43af507891f0a",
                children: "section.jsx-b7d43af507891f0a{padding-bottom:20px}\nli.jsx-b7d43af507891f0a{display:block;\nmargin-bottom:10px}\ndiv.jsx-b7d43af507891f0a{-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}\na.jsx-b7d43af507891f0a{font-size:14px;\nmargin-right:10px;\n-webkit-text-decoration:none;\ntext-decoration:none;\npadding-bottom:0;\nborder:0}\nspan.jsx-b7d43af507891f0a{font-size:14px;\nmargin-right:5px}\nul.jsx-b7d43af507891f0a{margin:0;\npadding:0}\nbutton.jsx-b7d43af507891f0a:before{-webkit-align-self:center;\n-ms-flex-item-align:center;\nalign-self:center;\nborder-style:solid;\nborder-width:6px 4px 0 4px;\nborder-color:#ffffff transparent transparent transparent;\ncontent:'';\nheight:0;\nmargin-right:5px;\nwidth:0}"
            })
        ]
    }));
};


/***/ }),

/***/ 4939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


const InfoBox = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-ab96fc53b46f77b7" + " " + "info",
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ab96fc53b46f77b7",
                children: ".info.jsx-ab96fc53b46f77b7{margin-top:20px;\nmargin-bottom:20px;\npadding-top:20px;\npadding-bottom:20px;\nborder-top:1px solid #ececec;\nborder-bottom:1px solid #ececec}"
            }),
            children
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoBox);


/***/ }),

/***/ 7503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ allBooksQueryVars),
/* harmony export */   "k": () => (/* binding */ ALL_BOOKS_QUERY)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const allBooksQueryVars = {
    skip: 0,
    first: 5
};
const ALL_BOOKS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query ($skip: Int, $first: Int) {
      _booksMeta {
        count
      }
      books(skip: $skip, first: $first) {
        title
        author
        id
      }
    }
`;


/***/ })

};
;