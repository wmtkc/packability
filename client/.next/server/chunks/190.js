"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 1190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Submit)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/lib/mutations/createBook.ts

const CREATE_BOOK_MUTATION = client_.gql`
    mutation Mutation($title: String!, $author: String!) {
        createBook(title: $title, author: $author) {
            id
            title
            author
        }
    }
`;

;// CONCATENATED MODULE: ./src/components/Forms/BookSubmit.tsx




function Submit() {
    const [createBook1, { loading  }] = (0,client_.useMutation)(CREATE_BOOK_MUTATION);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const formData = new window.FormData(form);
        const title = formData.get('title');
        const author = formData.get('author');
        form.reset();
        createBook1({
            variables: {
                title,
                author
            },
            update: (cache, { data: { createBook  }  })=>{
                cache.modify({
                    fields: {
                        books (existingBooks = []) {
                            const newBookRef = cache.writeFragment({
                                data: createBook,
                                fragment: client_.gql`
                  fragment NewBook on books {
                    id
                    type
                  }
                `
                            });
                            return [
                                newBookRef,
                                ...existingBooks
                            ];
                        }
                    }
                });
            }
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "jsx-f42919216699f74d",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "jsx-f42919216699f74d",
                children: "Submit"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                placeholder: "title",
                name: "title",
                type: "text",
                required: true,
                className: "jsx-f42919216699f74d"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                placeholder: "author",
                name: "author",
                type: "author",
                required: true,
                className: "jsx-f42919216699f74d"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                disabled: loading,
                className: "jsx-f42919216699f74d",
                children: "Submit"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "f42919216699f74d",
                children: "form.jsx-f42919216699f74d{border-bottom:1px solid #ececec;\npadding-bottom:20px;\nmargin-bottom:20px}\nh1.jsx-f42919216699f74d{font-size:20px}\ninput.jsx-f42919216699f74d{display:block;\nmargin-bottom:10px}"
            })
        ]
    }));
};


/***/ })

};
;