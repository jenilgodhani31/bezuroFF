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

/***/ "./components/gtag/index.js":
/*!**********************************!*\
  !*** ./components/gtag/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GA4Initializer: () => (/* binding */ GA4Initializer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga4 */ \"react-ga4\");\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga4__WEBPACK_IMPORTED_MODULE_2__);\n// gtag.js\n\n\n\nconst GA_MEASUREMENT_ID = \"G-MC4WRQMSLZ\"; // Replace with your GA4 Measurement ID\nfunction GA4Initializer() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            // Assuming pageview is not directly available\n            react_ga4__WEBPACK_IMPORTED_MODULE_2___default().send({\n                hitType: \"pageview\",\n                page: url\n            });\n        };\n        // Initialize GA4\n        react_ga4__WEBPACK_IMPORTED_MODULE_2___default().initialize(GA_MEASUREMENT_ID);\n        // Initial page load\n        react_ga4__WEBPACK_IMPORTED_MODULE_2___default().send({\n            hitType: \"pageview\",\n            page: window.location.pathname\n        });\n        // Listen for route changes\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        // Remove event listener on component unmount\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2d0YWcvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFVBQVU7QUFFd0I7QUFDTTtBQUNSO0FBRWhDLE1BQU1HLG9CQUFvQixnQkFBZ0IsdUNBQXVDO0FBRTFFLFNBQVNDO0lBQ2QsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLG9CQUFvQixDQUFDQztZQUN6Qiw4Q0FBOEM7WUFDOUNMLHFEQUFZLENBQUM7Z0JBQUVPLFNBQVM7Z0JBQVlDLE1BQU1IO1lBQUk7UUFDaEQ7UUFFQSxpQkFBaUI7UUFDakJMLDJEQUFrQixDQUFDQztRQUVuQixvQkFBb0I7UUFDcEJELHFEQUFZLENBQUM7WUFBRU8sU0FBUztZQUFZQyxNQUFNRSxPQUFPQyxRQUFRLENBQUNDLFFBQVE7UUFBQztRQUVuRSwyQkFBMkI7UUFDM0JULE9BQU9VLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QlY7UUFFeEMsNkNBQTZDO1FBQzdDLE9BQU87WUFDTEQsT0FBT1UsTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCWDtRQUMzQztJQUNGLEdBQUc7UUFBQ0QsT0FBT1UsTUFBTTtLQUFDO0lBRWxCLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvZ3RhZy9pbmRleC5qcz8xNDgwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGd0YWcuanNcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhNFwiO1xyXG5cclxuY29uc3QgR0FfTUVBU1VSRU1FTlRfSUQgPSBcIkctTUM0V1JRTVNMWlwiOyAvLyBSZXBsYWNlIHdpdGggeW91ciBHQTQgTWVhc3VyZW1lbnQgSURcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHQTRJbml0aWFsaXplcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBwYWdldmlldyBpcyBub3QgZGlyZWN0bHkgYXZhaWxhYmxlXHJcbiAgICAgIFJlYWN0R0Euc2VuZCh7IGhpdFR5cGU6IFwicGFnZXZpZXdcIiwgcGFnZTogdXJsIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIEdBNFxyXG4gICAgUmVhY3RHQS5pbml0aWFsaXplKEdBX01FQVNVUkVNRU5UX0lEKTtcclxuXHJcbiAgICAvLyBJbml0aWFsIHBhZ2UgbG9hZFxyXG4gICAgUmVhY3RHQS5zZW5kKHsgaGl0VHlwZTogXCJwYWdldmlld1wiLCBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciByb3V0ZSBjaGFuZ2VzXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbcm91dGVyLmV2ZW50c10pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiUmVhY3RHQSIsIkdBX01FQVNVUkVNRU5UX0lEIiwiR0E0SW5pdGlhbGl6ZXIiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInNlbmQiLCJoaXRUeXBlIiwicGFnZSIsImluaXRpYWxpemUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZXZlbnRzIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gtag/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/gtag */ \"./components/gtag/index.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! react-onesignal */ \"react-onesignal\")).then((OneSignal)=>{\n            OneSignal.default.init({\n                appId: \"5af166ef-dcda-406e-adce-63a790a18655\",\n                serviceWorkerPath: \"/OneSignalSDKWorker.js\"\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gtag__WEBPACK_IMPORTED_MODULE_1__.GA4Initializer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jenil\\\\Desktop\\\\Bhai Games Pro\\\\yash FF\\\\pages\\\\_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jenil\\\\Desktop\\\\Bhai Games Pro\\\\yash FF\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"bottom-right\",\n                autoClose: 2000,\n                hideProgressBar: true,\n                newestOnTop: true,\n                closeOnClick: false,\n                rtl: false,\n                draggable: false,\n                pauseOnHover: true,\n                theme: \"light\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jenil\\\\Desktop\\\\Bhai Games Pro\\\\yash FF\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jenil\\\\Desktop\\\\Bhai Games Pro\\\\yash FF\\\\pages\\\\_app.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNuQjtBQUNhO0FBQ0k7QUFDRDtBQUVoQyxTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xESixnREFBU0EsQ0FBQztRQUNSLDhIQUF5QixDQUFDSyxJQUFJLENBQUMsQ0FBQ0M7WUFDOUJBLFVBQVVDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO2dCQUNyQkMsT0FBTztnQkFDUEMsbUJBQW1CO1lBQ3JCO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1gsMkNBQVFBOzswQkFDUCw4REFBQ0QsNERBQWNBOzs7OzswQkFDZiw4REFBQ0s7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0gsMERBQWNBO2dCQUNiVSxVQUFTO2dCQUNUQyxXQUFXO2dCQUNYQyxlQUFlO2dCQUNmQyxXQUFXO2dCQUNYQyxjQUFjO2dCQUNkQyxLQUFLO2dCQUNMQyxXQUFXO2dCQUNYQyxZQUFZO2dCQUNaQyxPQUFNOzs7Ozs7Ozs7Ozs7QUFJZCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQTRJbml0aWFsaXplciB9IGZyb20gXCJAY29tcG9uZW50cy9ndGFnXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW1wb3J0KFwicmVhY3Qtb25lc2lnbmFsXCIpLnRoZW4oKE9uZVNpZ25hbCkgPT4ge1xyXG4gICAgICBPbmVTaWduYWwuZGVmYXVsdC5pbml0KHtcclxuICAgICAgICBhcHBJZDogXCI1YWYxNjZlZi1kY2RhLTQwNmUtYWRjZS02M2E3OTBhMTg2NTVcIixcclxuICAgICAgICBzZXJ2aWNlV29ya2VyUGF0aDogXCIvT25lU2lnbmFsU0RLV29ya2VyLmpzXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8R0E0SW5pdGlhbGl6ZXIgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiXHJcbiAgICAgICAgYXV0b0Nsb3NlPXsyMDAwfVxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhclxyXG4gICAgICAgIG5ld2VzdE9uVG9wXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrPXtmYWxzZX1cclxuICAgICAgICBydGw9e2ZhbHNlfVxyXG4gICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgcGF1c2VPbkhvdmVyXHJcbiAgICAgICAgdGhlbWU9XCJsaWdodFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkdBNEluaXRpYWxpemVyIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJUb2FzdENvbnRhaW5lciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW4iLCJPbmVTaWduYWwiLCJkZWZhdWx0IiwiaW5pdCIsImFwcElkIiwic2VydmljZVdvcmtlclBhdGgiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicnRsIiwiZHJhZ2dhYmxlIiwicGF1c2VPbkhvdmVyIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-ga4":
/*!****************************!*\
  !*** external "react-ga4" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ga4");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "react-onesignal":
/*!**********************************!*\
  !*** external "react-onesignal" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-onesignal");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();