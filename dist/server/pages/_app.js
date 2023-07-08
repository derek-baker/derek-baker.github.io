(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/Context.js
var Context = __webpack_require__(744);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(575);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js



const PreLoader = ()=>{
    (0,external_react_.useEffect)(()=>{
        utils/* tokyo.preloader */.c.preloader();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "loader_line"
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Context/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_PreLoader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [480], () => (__webpack_exec__(282)));
module.exports = __webpack_exports__;

})();