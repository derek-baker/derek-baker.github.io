"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/Context.js
var Context = __webpack_require__(744);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/popup/ModalContainer.js




const ModalContainer = ({ children , nullValue  })=>{
    const { modalToggle  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    let domNode = src_useClickOutside(()=>{
        modalToggle(false);
        nullValue(null);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tokyo_tm_modalbox opened",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "box_inner",
            ref: domNode,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "close",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        onClick: ()=>{
                            modalToggle(false);
                            nullValue(null);
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "icon-cancel"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "description_wrap",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const popup_ModalContainer = (ModalContainer);

;// CONCATENATED MODULE: ./src/components/popup/DetailsModal.js




const DetailsModal = ()=>{
    const { portfolioDetailsModal , setPortfolioDetailsModal  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx(popup_ModalContainer, {
        nullValue: setPortfolioDetailsModal,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "popup_details",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top_image",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "assets/img/thumbs/4-2.jpg",
                            alt: "image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main",
                            "data-img-url": portfolioDetailsModal.thumbnail,
                            style: {
                                backgroundImage: `url(${portfolioDetailsModal.thumbnail})`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "portfolio_main_title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: portfolioDetailsModal.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: portfolioDetailsModal.category
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main_details w-full h-auto clear-both flex mb-[90px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "textbox w-[70%] pr-[40px]",
                            children: portfolioDetailsModal.text.map((text, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: portfolioDetailsModal.text.length - 1 == i ? "" : "mb-[20px]",
                                    children: text
                                }, i))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "detailbox w-[30%] pl-[40px]",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-none",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "mb-[8px] w-full float-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first font-bold block text-black mb-[3px]",
                                                children: "Client"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: portfolioDetailsModal.client
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "mb-[8px] w-full float-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first font-bold block text-black mb-[3px]",
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "text-[#767676] transition-all duration-300 hover:text-black",
                                                    href: "#",
                                                    children: portfolioDetailsModal.category
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "mb-[8px] w-full float-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first font-bold block text-black mb-[3px]",
                                                children: "Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: portfolioDetailsModal.date
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "w-full float-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "first font-bold block text-black mb-[3px]",
                                                children: "Share"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "share list-none relative top-[7px]",
                                                children: portfolioDetailsModal.share.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "mr-[10px] inline-block",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "text-black text-[18px]",
                                                            href: social.link,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: social.iconName
                                                            })
                                                        })
                                                    }, social.id))
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "additional_images w-full h-auto clear-both float-left",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "ml-[-30px] list-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-[30px] float-left w-1/2 pl-[30px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list_inner w-full h-auto clear-both float-left relative",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "my_image relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "opacity-0 min-w-full",
                                                src: "assets/img/thumbs/4-2.jpg",
                                                alt: "image"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main absolute inset-0 bg-no-repeat bg-center bg-cover",
                                                "data-img-url": "assets/img/portfolio/1.jpg",
                                                style: {
                                                    backgroundImage: `url(${portfolioDetailsModal.bigImage})`
                                                }
                                            })
                                        ]
                                    })
                                })
                            }),
                            portfolioDetailsModal.images.map((img, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mb-[30px] float-left w-1/2 pl-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "list_inner w-full h-auto clear-both float-left relative",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "my_image relative",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "opacity-0 min-w-full",
                                                    src: "assets/img/thumbs/4-2.jpg",
                                                    alt: "image"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main absolute inset-0 bg-no-repeat bg-center bg-cover",
                                                    "data-img-url": "assets/img/portfolio/2.jpg",
                                                    style: {
                                                        backgroundImage: `url(${img})`
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                }, i))
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const popup_DetailsModal = (DetailsModal);

;// CONCATENATED MODULE: ./src/layout/Cursor.js


const Cursor = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    });
};
/* harmony default export */ const layout_Cursor = (Cursor);

;// CONCATENATED MODULE: ./src/layout/Mobile.js



const Mobile = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    const { navChange , nav , menus  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "tokyo_tm_topbar bg-white fixed top-0 left-0 right-0 h-[50px] z-[14] hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "logo",
                            "data-type": "image",
                            children: [
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "max-w-[100px] max-h-[40px]",
                                            src: "assets/img/logo/dark.png",
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "font-black font-poppins text-[25px] tracking-[4px]",
                                            children: "TOKYO"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "trigger relative top-[5px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
                                onClick: ()=>setToggle(!toggle),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hamburger-box w-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hamburger-inner"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `tokyo_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ${toggle ? "opened" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "menu_list w-full h-auto clear-both float-left text-right px-[20px] pt-[100px] pb-[0px]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "transition_link list-none",
                        children: menus.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `active mb-[7px] ${menu.href == nav ? "active" : ""}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-black font-montserrat",
                                    href: `#${menu.href}`,
                                    onClick: ()=>{
                                        navChange(menu.href);
                                        setToggle(!toggle);
                                    },
                                    children: menu.name
                                })
                            }, menu.id))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Mobile = (Mobile);

;// CONCATENATED MODULE: ./src/layout/Sidebar.js



const Sidebar = ()=>{
    const { navChange , nav , menus  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "leftpart_inner w-full h-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "logo",
                    "data-type": "image",
                    children: " "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "menu px-[0px] py-[50px] w-full float-left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "transition_link m-0 list-none",
                        children: menus.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `m-0 w-full float-left ${menu.href == nav ? "active" : ""}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black",
                                    href: `#${menu.href}`,
                                    onClick: ()=>navChange(menu.href),
                                    children: menu.name
                                })
                            }, menu.id))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "copyright w-full float-left",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-[15px] text-[#999] font-montserrat leading-[25px]",
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " Derek Baker",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Sidebar = (Sidebar);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(575);
;// CONCATENATED MODULE: ./src/components/popup/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("assets/img/")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const popup_ImageView = (ImageView);

;// CONCATENATED MODULE: external "react-player"
const external_react_player_namespaceObject = require("react-player");
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_namespaceObject);
;// CONCATENATED MODULE: ./src/components/popup/MediaPopup.js




const VideoPopup = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container popup-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
                                        url: videoID,
                                        playing: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const AudioPopup = ({ close , audioID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container popup-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: audioID,
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const MediaPopup = ()=>{
    const [videoValue, setVideoValue] = (0,external_react_.useState)(null);
    const [audio, setAudio] = (0,external_react_.useState)(false);
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        if (a.href.includes("soundcloud")) {
                            setAudio(a.href);
                            setToggle(true);
                        } else {
                            setVideoValue(a.href);
                            setToggle(true);
                        }
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            toggle && videoValue && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup, {
                close: ()=>{
                    setToggle(false);
                    setVideoValue(null);
                },
                videoID: videoValue
            }),
            toggle && audio && /*#__PURE__*/ jsx_runtime_.jsx(AudioPopup, {
                close: ()=>{
                    setToggle(false);
                    setAudio(null);
                },
                audioID: audio
            })
        ]
    });
};
/* harmony default export */ const popup_MediaPopup = (MediaPopup);

;// CONCATENATED MODULE: ./src/components/popup/NewsModal.js




const NewsModal = ()=>{
    const { newsModal , setNewsModal  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popup_ModalContainer, {
        nullValue: setNewsModal,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "image relative overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "min-w-full opacity-0",
                        src: "assets/img/thumbs/40-25.jpg",
                        alt: "image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300",
                        "data-img-url": newsModal.image,
                        style: {
                            backgroundImage: `url(${newsModal.image})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "tokyo_tm_full_link",
                        href: "#"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "extra flex items-center justify-between mb-[25px] relative",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "short",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "date font-montserrat text-[13px] text-[#767676]",
                                children: [
                                    "By",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-[#767676] transition-all duration-300 hover:text-black",
                                        href: "#",
                                        children: newsModal.author
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "relative",
                                        children: newsModal.date
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "title mb-[10px] leading-[1.4]",
                        children: newsModal.title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "main_content w-full float-left",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "descriptions w-full float-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "bigger text-[#888] text-[20px] mb-[31px]",
                            children: "Just because we can't get out and about like we normally would, doesn't mean we have to stop taking pictures. There's still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-[22px]",
                            children: "Most photographers love to shoot the unusual, and you don't get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "quotebox w-full clear-both float-left h-auto relative pl-[70px] mb-[24px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon absolute left-0 top-[5px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "icon-quote-left text-[40px] text-black"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-[20px]",
                                    children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-[22px]",
                            children: "Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-[22px]",
                            children: "Pretend everything is new and that you haven’t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again."
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const popup_NewsModal = (NewsModal);

;// CONCATENATED MODULE: ./src/components/popup/ServiceModal.js




const ServiceModal = ()=>{
    const { serviceModal , setServiceModal  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx(popup_ModalContainer, {
        nullValue: setServiceModal,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "service_popup_informations w-full h-auto clear-both float-left",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "image",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "assets/img/thumbs/4-2.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main",
                            "data-img-url": serviceModal.image,
                            style: {
                                backgroundImage: `url(${serviceModal.image})`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main_title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: serviceModal.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "descriptions w-full float-left",
                    children: serviceModal.text.map((text, i)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: serviceModal.text.length - 1 == i ? "" : "mb-[15px]",
                            children: text
                        }, i))
                })
            ]
        })
    });
};
/* harmony default export */ const popup_ServiceModal = (ServiceModal);

;// CONCATENATED MODULE: ./src/layout/Layout.js











// import dynamic from "next/dynamic";

// const Portfolio = dynamic(() => import("components/Portfolio"), {
//   ssr: false,
// });
const Layout = ({ children  })=>{
    (0,external_react_.useEffect)(()=>{
        utils/* tokyo.dataImage */.c.dataImage();
        utils/* tokyo.imageToSvg */.c.imageToSvg();
        utils/* tokyo.customCursor */.c.customCursor();
    }, []);
    const { modal , serviceModal , newsModal , portfolioDetailsModal  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popup_MediaPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageView, {}),
            modal && serviceModal && /*#__PURE__*/ jsx_runtime_.jsx(popup_ServiceModal, {}),
            modal && newsModal && /*#__PURE__*/ jsx_runtime_.jsx(popup_NewsModal, {}),
            modal && portfolioDetailsModal && /*#__PURE__*/ jsx_runtime_.jsx(popup_DetailsModal, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "tokyo_tm_all_wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Mobile, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Sidebar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]",
                            children: children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Cursor, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/SectionContainer.js



const SectionContainer = ({ name , children  })=>{
    const { nav , animation  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: name,
        className: `tokyo_tm_section ${name == nav ? `animated active ${animation}` : ""}`,
        children: children
    });
};
/* harmony default export */ const components_SectionContainer = (SectionContainer);

;// CONCATENATED MODULE: ./src/components/SectionTitle.js

const SectionTitle = ({ pageName , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]",
                children: pageName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-extrabold font-montserrat",
                children: title
            })
        ]
    });
};
/* harmony default export */ const components_SectionTitle = (SectionTitle);

;// CONCATENATED MODULE: external "emailjs-com"
const external_emailjs_com_namespaceObject = require("emailjs-com");
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
;// CONCATENATED MODULE: ./src/components/contact/ContactForm.js



const ContactForm = ()=>{
    const [mailData, setMailData] = (0,external_react_.useState)({
        name: "",
        email: "",
        message: ""
    });
    const { name , email , message  } = mailData;
    const [error, setError] = (0,external_react_.useState)(null);
    const onChange = (e)=>setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    const onSubmit = (e)=>{
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
            clearError();
        } else {
            external_emailjs_com_default().send("service_seruhwu", "template_21aw58z", mailData, "Q3pccdLZhU-mZT7tQ" // public api
            ).then(// eslint-disable-next-line no-unused-vars
            (response)=>{
                setError(false);
                clearError();
                setMailData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (err)=>{
                console.log(err.text);
            });
        }
    };
    const clearError = ()=>{
        setTimeout(()=>{
            setError(null);
        }, 2000);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fields w-full float-left clear-both h-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: "contact_form",
            id: "contact_form",
            onSubmit: (e)=>onSubmit(e),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: error ? "empty_notice" : "returnmessage",
                    style: {
                        display: error == null ? "none" : "block"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: error ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "first w-full float-left",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "list-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "w-full mb-[30px] float-left",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "name",
                                    onChange: (e)=>onChange(e),
                                    value: name,
                                    id: "name",
                                    type: "text",
                                    placeholder: "Name"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "w-full mb-[30px] float-left",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "email",
                                    onChange: (e)=>onChange(e),
                                    value: email,
                                    id: "email",
                                    type: "email",
                                    placeholder: "Email"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "last",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        name: "message",
                        onChange: (e)=>onChange(e),
                        value: message,
                        id: "message",
                        placeholder: "Message"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "tokyo_tm_button",
                    "data-position": "left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        children: "Send Message"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const contact_ContactForm = (ContactForm);

;// CONCATENATED MODULE: ./src/components/contact/Map.js

const Map = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "map_wrap w-full float-left clear-both h-auto mb-[50px]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mapouter",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "gmap_canvas",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                        width: "100%",
                        height: 355,
                        id: "gmap_canvas",
                        src: "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
                        frameBorder: 0,
                        scrolling: "no",
                        marginHeight: 0,
                        marginWidth: 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://fmovies-online.net",
                        children: "fmovies"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("style", {
                        dangerouslySetInnerHTML: {
                            __html: ".mapouter{position:relative;text-align:right;height:355px;width:100%;}"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.embedgooglemap.net",
                        children: "embedgooglemap.net"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("style", {
                        dangerouslySetInnerHTML: {
                            __html: ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}"
                        }
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const contact_Map = (Map);

;// CONCATENATED MODULE: ./src/components/Contact.js





const Contact = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(components_SectionContainer, {
        name: "contact",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title_flex w-full h-auto clear-both flex justify-between items-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_SectionTitle, {
                                pageName: "Contact",
                                title: "Get in Touch"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(contact_Map, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(contact_ContactForm, {})
                ]
            })
        })
    });
};
/* harmony default export */ const components_Contact = (Contact);

;// CONCATENATED MODULE: ./src/components/Home.js


const socialIcons = [
    {
        id: 0,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/in/derek-baker-270a9812b/"
    }
];
const Home = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(components_SectionContainer, {
        name: "home",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "home_content flex items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "avatar min-w-[300px] min-h-[300px] relative rounded-full",
                            "data-type": "wave",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image absolute inset-0 bg-no-repeat bg-center bg-cover",
                                    "data-img-url": "assets/img/slider/1.jpg"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "details ml-[80px]",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "name text-[55px] font-extrabold uppercase mb-[14px]",
                                    children: [
                                        "Derek ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Baker"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "job font-montserrat font-medium max-w-[450px] mb-[25px]",
                                    children: "This is my personal site. I used a template."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "social w-full float-left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "m-0 list-none",
                                        children: socialIcons.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-[8px] inline-block",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "text-black text-[20px] transition-all duration-300 hover:text-black",
                                                    href: item.link,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: item.iconName
                                                    })
                                                })
                                            }, item.id))
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Home = (Home);

;// CONCATENATED MODULE: ./src/components/service/FunFact.js

const funFacts = [
    {
        id: 1,
        value: "777+",
        name: "Projects Completed"
    },
    {
        id: 2,
        value: "3K",
        name: "Happy Clients"
    },
    {
        id: 3,
        value: "9K+",
        name: "Lines of Code"
    }
];
const FunFact = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tokyo_tm_facts w-full h-auto clear-both float-left px-0 pt-[100px] pb-[60px]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "tokyo_section_title w-full h-auto clear-both float-left mb-[40px]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-[20px] font-bold",
                        children: "Fun Facts"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "list w-full h-auto clear-both float-left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "ml-[-40px] list-none",
                        children: funFacts.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-[40px] pl-[40px] w-1/3 float-left",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "list_inner  w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border text-center px-[20px] py-[40px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "font-semibold text-[20px] mb-[3px]",
                                            children: item.value
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: item.name
                                        })
                                    ]
                                })
                            }, item.id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const service_FunFact = (FunFact);

;// CONCATENATED MODULE: ./src/components/service/Partners.js

const partnersDark = [
    {
        id: 1,
        image: "assets/img/partners/dark/1.png"
    },
    {
        id: 2,
        image: "assets/img/partners/dark/2.png"
    },
    {
        id: 3,
        image: "assets/img/partners/dark/3.png"
    },
    {
        id: 4,
        image: "assets/img/partners/dark/4.png"
    },
    {
        id: 5,
        image: "assets/img/partners/dark/5.png"
    },
    {
        id: 6,
        image: "assets/img/partners/dark/6.png"
    },
    {
        id: 7,
        image: "assets/img/partners/dark/7.png"
    },
    {
        id: 8,
        image: "assets/img/partners/dark/8.png"
    }
];
const Partners = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tokyo_tm_partners w-full h-auto clear-both float-left bg-white py-[100px] px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "tokyo_section_title w-full h-auto clear-both float-left mb-[40px]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-[20px] font-bold",
                        children: "Partners"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "partners_inner w-full h-auto clear-both float-left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] list-none pt-[2px] float-left pl-[2px]",
                        children: partnersDark.map((partner)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "m-0 float-left w-1/4 border-solid border-[#eee] border-2 text-center h-[145px] leading-[145px] relative mt-[-2px] ml-[-2px] overflow-hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "max-w-[50%] max-h-[100px] inline-block",
                                        src: partner.image,
                                        alt: "image"
                                    })
                                })
                            }, partner.id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const service_Partners = (Partners);

;// CONCATENATED MODULE: ./src/components/service/Pricing.js

const Pricing = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tokyo_tm_pricing w-full h-auto clear-both float-left px-[0px] pt-[100px] pb-[60px] bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "tokyo_section_title w-full h-auto clear-both float-left mb-[40px]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-[20px] font-bold",
                        children: "Pricing"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "list w-full h-auto clear-both float-left",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "ml-[-40px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-[40px] pl-[40px] w-1/3 float-left",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "price w-full float-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-[40px] font-semibold",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "0",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "currency",
                                                            children: "$"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "plan w-full float-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]",
                                                children: "Free"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "item list-none",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Premium Icons"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "opacity-50",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Quality Logo"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "opacity-50",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Stock Images"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "opacity-50",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Free Support"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "tokyo_tm_button",
                                            "data-position": "left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Purchase"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-[40px] pl-[40px] w-1/3 float-left",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "price w-full float-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-[40px] font-semibold",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "30",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "currency",
                                                            children: "$"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "plan w-full float-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]",
                                                children: "Basic"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "item list-none",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Premium Icons"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Quality Logo"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "opacity-50",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Stock Images"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "opacity-50",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Free Support"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "tokyo_tm_button",
                                            "data-position": "left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Purchase"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "popular absolute inline-block bg-black text-white text-[13px] px-[20px] pb-[3px] pt-0 top-[-17px] right-[10px]",
                                            children: "Popular"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-[40px] pl-[40px] w-1/3 float-left",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "price w-full float-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-[40px] font-semibold",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "70",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "currency",
                                                            children: "$"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "plan w-full float-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]",
                                                children: "Premium"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "item list-none",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Premium Icons"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Quality Logo"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Stock Images"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Free Support"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "tokyo_tm_button",
                                            "data-position": "left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Purchase"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const service_Pricing = (Pricing);

;// CONCATENATED MODULE: ./src/components/service/ServiceItems.js



const services = [
    {
        id: 1,
        name: "Web Design",
        text: [
            "TODO",
            "TODO"
        ],
        image: "assets/img/news/1.jpg"
    },
    {
        id: 2,
        name: "Content Writing",
        text: [
            "TODO",
            "TODO"
        ],
        image: "assets/img/news/2.jpg"
    },
    {
        id: 3,
        name: "Brand Identity",
        text: [
            "TODO",
            "TODO"
        ],
        image: "assets/img/news/3.jpg"
    },
    {
        id: 4,
        name: "Live Chat",
        text: [
            "TODO",
            "TODO"
        ],
        image: "assets/img/news/4.jpg"
    },
    {
        id: 5,
        name: "After Effects",
        text: [
            "TODO",
            "TODO"
        ],
        image: "assets/img/news/1.jpg"
    },
    {
        id: 6,
        name: "Mobile App",
        text: [
            "TODO",
            "TODO"
        ],
        image: "assets/img/news/2.jpg"
    }
];
const ServiceItems = ()=>{
    // eslint-disable-next-line no-unused-vars
    const { setServiceModal , modalToggle , modal  } = (0,external_react_.useContext)(Context/* TokyoContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "list w-full h-auto clear-both float-left",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "ml-[-40px] list-none flex flex-wrap",
            children: services.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "mb-[40px] w-1/3 pl-[40px]",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300",
                                children: service.id <= 9 ? `0${service.id}` : service.id
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "title font-bold text-black text-[18px] mb-[15px]",
                                children: service.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text",
                                children: [
                                    service.text[0].slice(0, 70),
                                    "..."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tokyo_tm_read_more",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    onClick: ()=>{
                                        modalToggle(true);
                                        setServiceModal(service);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Read More"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "tokyo_tm_full_link",
                                href: "#",
                                onClick: ()=>{
                                    modalToggle(true);
                                    setServiceModal(service);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "popup_service_image opacity-0 invisible hidden absolute z-[-111]",
                                src: service.image,
                                alt: "image"
                            })
                        ]
                    })
                }, service.id))
        })
    });
};
/* harmony default export */ const service_ServiceItems = (ServiceItems);

;// CONCATENATED MODULE: ./src/components/Service.js







const Service = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_SectionContainer, {
        name: "service",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "title_flex w-full h-auto clear-both flex justify-between items-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_SectionTitle, {
                                    pageName: "Services",
                                    title: "What I Do"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(service_ServiceItems, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(service_Partners, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(service_FunFact, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(service_Pricing, {})
        ]
    });
};
/* harmony default export */ const components_Service = (Service);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./pages/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components/About'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





// import News from "components/News";


const Portfolio = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "components/Portfolio"
        ]
    },
    ssr: false
});
const Index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Home, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components/About'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Service, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "tokyo_tm_portfolio_titles"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Portfolio, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Contact, {})
        ]
    });
};
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152,480], () => (__webpack_exec__(473)));
module.exports = __webpack_exports__;

})();