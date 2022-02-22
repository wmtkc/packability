"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 1268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const collectText = (el, acc = [])=>{
    if (el) {
        if (typeof el === 'string') acc.push(el);
        if (Array.isArray(el)) el.map((item)=>collectText(item, acc)
        );
        if (typeof el === 'object') collectText(el.props && el.props.children, acc);
    }
    return acc.join('').trim();
};
const Heading = ({ children: component , id  })=>{
    const children = component.props.children || '';
    let text = children;
    if (null == id) {
        id = collectText(text).toLowerCase().replace(/\s/g, '-').replace(/[?!:]/g, '');
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: `#${id}`,
        id: id,
        style: {
            color: 'inherit'
        },
        children: component
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 9458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6544);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1199);
/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1268);
/* harmony import */ var _components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8170);
/* harmony import */ var _zeit_react_jsx_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2423);
/* harmony import */ var _zeit_react_jsx_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_zeit_react_jsx_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7062);
/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_notion_renderers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6596);
/* harmony import */ var _lib_notion_getPageData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6325);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8300);
/* harmony import */ var _lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5904);
/* harmony import */ var _lib_blog_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5988);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_11__, _lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_12__, node_fetch__WEBPACK_IMPORTED_MODULE_2__, _lib_notion_getPageData__WEBPACK_IMPORTED_MODULE_9__]);
([_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_11__, _lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_12__, node_fetch__WEBPACK_IMPORTED_MODULE_2__, _lib_notion_getPageData__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
















// Get the data for each blog post
async function getStaticProps({ params: { slug  } , preview  }) {
    // load the postsTable so that we can get the page's ID
    const postsTable = await (0,_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const post = postsTable[slug];
    // if we can't find the post or if it is unpublished and
    // viewed without preview mode then we just redirect to /blog
    if (!post || post.Published !== 'Yes' && !preview) {
        console.log(`Failed to find post for slug: ${slug}`);
        return {
            props: {
                redirect: '/blog',
                preview: false
            },
            unstable_revalidate: 5
        };
    }
    const postData = await (0,_lib_notion_getPageData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(post.id);
    post.content = postData.blocks;
    for(let i = 0; i < postData.blocks.length; i++){
        const { value  } = postData.blocks[i];
        const { type , properties  } = value;
        if (type == 'tweet') {
            const src = properties.source[0][0];
            // parse id from https://twitter.com/_ijjk/status/TWEET_ID format
            const tweetId = src.split('/')[5].split('?')[0];
            if (!tweetId) continue;
            try {
                const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_2__["default"])(`https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`);
                const json = await res.json();
                properties.html = json.html.split('<script')[0];
                post.hasTweet = true;
            } catch (_) {
                console.log(`Failed to get tweet embed for ${src}`);
            }
        }
    }
    const { users  } = await (0,_lib_notion_getNotionUsers__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(post.Authors || []);
    post.Authors = Object.keys(users).map((id)=>users[id].full_name
    );
    return {
        props: {
            post,
            preview: preview || false
        },
        revalidate: 10
    };
}
// Return our list of blog posts to prerender
async function getStaticPaths() {
    const postsTable = await (0,_lib_notion_getBlogIndex__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    // we fallback for any unpublished posts to save build time
    // for actually published ones
    return {
        paths: Object.keys(postsTable).filter((post)=>postsTable[post].Published === 'Yes'
        ).map((slug)=>(0,_lib_blog_helpers__WEBPACK_IMPORTED_MODULE_14__/* .getBlogLink */ .Np)(slug)
        ),
        fallback: true
    };
}
const listTypes = new Set([
    'bulleted_list',
    'numbered_list'
]);
const RenderPost = ({ post , redirect , preview  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let listTagName = null;
    let listLastId = null;
    let listMap = {};
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        const twitterSrc = 'https://platform.twitter.com/widgets.js';
        // make sure to initialize any new widgets loading on
        // client navigation
        if (post && post.hasTweet) {
            var ref, ref1;
            if ((ref = window) === null || ref === void 0 ? void 0 : (ref1 = ref.twttr) === null || ref1 === void 0 ? void 0 : ref1.widgets) {
                window.twttr.widgets.load();
            } else if (!document.querySelector(`script[src="${twitterSrc}"]`)) {
                const script = document.createElement('script');
                script.async = true;
                script.src = twitterSrc;
                document.querySelector('body').appendChild(script);
            }
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (redirect && !post) {
            router.replace(redirect);
        }
    }, [
        redirect,
        post
    ]);
    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        }));
    }
    // if you don't have a post at this point, and are not
    // loading one from fallback then  redirect back to the index
    if (!post) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().post),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Woops! didn't find that post, redirecting you back to the blog index"
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                titlePre: post.Page
            }),
            preview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().previewAlertContainer),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().previewAlert),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "Note:"
                        }),
                        ` `,
                        "Viewing in preview mode",
                        ' ',
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: `/api/clear-preview?slug=${post.Slug}`,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().escapePreview),
                                children: "Exit Preview"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().post),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: post.Page || ''
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
                            (0,_lib_blog_helpers__WEBPACK_IMPORTED_MODULE_14__/* .getDateStr */ .mu)(post.Date)
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                    (!post.content || post.content.length === 0) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "This post has no content"
                    }),
                    (post.content || []).map((block, blockIdx)=>{
                        const { value  } = block;
                        const { type , properties , id , parent_id  } = value;
                        const isLast = blockIdx === post.content.length - 1;
                        const isList = listTypes.has(type);
                        let toRender = [];
                        if (isList) {
                            listTagName = _components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z[type === 'bulleted_list' ? 'ul' : 'ol'];
                            listLastId = `list${id}`;
                            listMap[id] = {
                                key: id,
                                nested: [],
                                children: (0,_lib_notion_renderers__WEBPACK_IMPORTED_MODULE_8__/* .textBlock */ .$)(properties.title, true, id)
                            };
                            if (listMap[parent_id]) {
                                listMap[id].isNested = true;
                                listMap[parent_id].nested.push(id);
                            }
                        }
                        if (listTagName && (isLast || !isList)) {
                            toRender.push(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_10___default().createElement(listTagName, {
                                key: listLastId
                            }, Object.keys(listMap).map((itemId)=>{
                                if (listMap[itemId].isNested) return null;
                                const createEl = (item)=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_6__/* ["default"].li */ .Z.li || 'ul', {
                                        key: item.key
                                    }, item.children, item.nested.length > 0 ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_6__/* ["default"].ul */ .Z.ul || 'ul', {
                                        key: item + 'sub-list'
                                    }, item.nested.map((nestedId)=>createEl(listMap[nestedId])
                                    )) : null)
                                ;
                                return createEl(listMap[itemId]);
                            })));
                            listMap = {};
                            listLastId = null;
                            listTagName = null;
                        }
                        const renderHeading = (Type)=>{
                            toRender.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Type, {
                                    children: (0,_lib_notion_renderers__WEBPACK_IMPORTED_MODULE_8__/* .textBlock */ .$)(properties.title, true, id)
                                }, id)
                            }, id));
                        };
                        const renderBookmark = ({ link , title , description , format  })=>{
                            const { bookmark_icon: icon , bookmark_cover: cover  } = format;
                            toRender.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmark),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            display: 'flex'
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkContentsWrapper),
                                            href: link,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                role: "button",
                                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkContents),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkInfo),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkTitle),
                                                                children: title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkDescription),
                                                                children: description
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkLinkWrapper),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                                        src: icon,
                                                                        className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkLinkIcon),
                                                                        alt: "bookmark link icon"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkLink),
                                                                        children: link
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkCoverWrapper1),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkCoverWrapper2),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkCoverWrapper3),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                                    src: cover,
                                                                    className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_15___default().bookmarkCover),
                                                                    alt: "bookmark cover"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }));
                        };
                        switch(type){
                            case 'page':
                            case 'divider':
                                break;
                            case 'text':
                                if (properties) {
                                    toRender.push((0,_lib_notion_renderers__WEBPACK_IMPORTED_MODULE_8__/* .textBlock */ .$)(properties.title, false, id));
                                }
                                break;
                            case 'image':
                            case 'video':
                            case 'embed':
                                {
                                    const { format ={}  } = value;
                                    const { block_width , block_height , display_source , block_aspect_ratio ,  } = format;
                                    const baseBlockWidth = 768;
                                    const roundFactor = Math.pow(10, 2);
                                    // calculate percentages
                                    const width = block_width ? `${Math.round(block_width / baseBlockWidth * 100 * roundFactor) / roundFactor}%` : block_height || '100%';
                                    const isImage = type === 'image';
                                    const Comp = isImage ? 'img' : 'video';
                                    const useWrapper = block_aspect_ratio && !block_height;
                                    const childStyle = useWrapper ? {
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        position: 'absolute',
                                        top: 0
                                    } : {
                                        width,
                                        border: 'none',
                                        height: block_height,
                                        display: 'block',
                                        maxWidth: '100%'
                                    };
                                    let child = null;
                                    if (!isImage && !value.file_ids) {
                                        // external resource use iframe
                                        child = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                            style: childStyle,
                                            src: display_source,
                                            className: !useWrapper ? 'asset-wrapper' : undefined
                                        }, !useWrapper ? id : undefined);
                                    } else {
                                        // notion resource
                                        child = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
                                            src: `/api/asset?assetUrl=${encodeURIComponent(display_source)}&blockId=${id}`,
                                            controls: !isImage,
                                            alt: `An ${isImage ? 'image' : 'video'} from Notion`,
                                            loop: !isImage,
                                            muted: !isImage,
                                            autoPlay: !isImage,
                                            style: childStyle
                                        }, !useWrapper ? id : undefined);
                                    }
                                    toRender.push(useWrapper ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            paddingTop: `${Math.round(block_aspect_ratio * 100)}%`,
                                            position: 'relative'
                                        },
                                        className: "asset-wrapper",
                                        children: child
                                    }, id) : child);
                                    break;
                                }
                            case 'header':
                                renderHeading('h1');
                                break;
                            case 'sub_header':
                                renderHeading('h2');
                                break;
                            case 'sub_sub_header':
                                renderHeading('h3');
                                break;
                            case 'bookmark':
                                const { link: link1 , title: title1 , description: description1  } = properties;
                                const { format: format1 = {}  } = value;
                                renderBookmark({
                                    link: link1,
                                    title: title1,
                                    description: description1,
                                    format: format1
                                });
                                break;
                            case 'code':
                                {
                                    if (properties.title) {
                                        const content = properties.title[0][0];
                                        const language = properties.language[0][0];
                                        if (language === 'LiveScript') {
                                            // this requires the DOM for now
                                            toRender.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_zeit_react_jsx_parser__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                jsx: content,
                                                components: _components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                componentsOnly: false,
                                                renderInpost: false,
                                                allowUnknownElements: true,
                                                blacklistedTags: [
                                                    'script',
                                                    'style'
                                                ]
                                            }, id));
                                        } else {
                                            toRender.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Code */ .Z.Code, {
                                                language: language || '',
                                                children: content
                                            }, id));
                                        }
                                    }
                                    break;
                                }
                            case 'quote':
                                {
                                    if (properties.title) {
                                        toRender.push(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_6__/* ["default"].blockquote */ .Z.blockquote, {
                                            key: id
                                        }, properties.title));
                                    }
                                    break;
                                }
                            case 'callout':
                                {
                                    var ref, ref2;
                                    toRender.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "callout",
                                        children: [
                                            ((ref = value.format) === null || ref === void 0 ? void 0 : ref.page_icon) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: (ref2 = value.format) === null || ref2 === void 0 ? void 0 : ref2.page_icon
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text",
                                                children: (0,_lib_notion_renderers__WEBPACK_IMPORTED_MODULE_8__/* .textBlock */ .$)(properties.title, true, id)
                                            })
                                        ]
                                    }, id));
                                    break;
                                }
                            case 'tweet':
                                {
                                    if (properties.html) {
                                        toRender.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: properties.html
                                            }
                                        }, id));
                                    }
                                    break;
                                }
                            case 'equation':
                                {
                                    if (properties && properties.title) {
                                        const content = properties.title[0][0];
                                        toRender.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_rich_text_dynamic__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Equation */ .Z.Equation, {
                                            displayMode: true,
                                            children: content
                                        }, id));
                                    }
                                    break;
                                }
                            default:
                                if (false) {}
                                break;
                        }
                        return toRender;
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderPost);

});

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("@zeit/react-jsx-parser");

/***/ }),

/***/ 5080:
/***/ ((module) => {

module.exports = require("async-sema");

/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,676,664,675,152,303,199,62], () => (__webpack_exec__(9458)));
module.exports = __webpack_exports__;

})();