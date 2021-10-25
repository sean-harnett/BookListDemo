/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500i,900,900i);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --foreground: #272727;\r\n    --background: #161616;\r\n    --highlight: #413f3f;\r\n    --white: #cfc6c6;\r\n    --light: #afb5c1;\r\n    --accent: #ac91e7;\r\n    --btn-text: #f2f2f2;\r\n    --btn-primary: #855cdd;\r\n    --btn-secondary: #4a22a1;\r\n}\r\n\r\n*, *::before, *::after {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Nunito', sans-serif;\r\n}\r\n\r\nbody {\r\n    background: var(--background);\r\n}\r\n\r\n.popupContainer {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    transition: all 1s ease-in-out;\r\n    animation-duration: 1.8s;\r\n}\r\n\r\n.mainContainer {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    /* transition: all 1s ease-in-out;\r\n    animation-duration: 1.8s; */\r\n}\r\n\r\n.hide__popup {\r\n    display: none;\r\n}\r\n\r\n.zoom_in {\r\n    animation-name: zoomIn;\r\n}\r\n\r\n.zoom_out {\r\n    animation-name: zoomOut;\r\n}\r\n\r\n@keyframes zoomOut {\r\n    from {\r\n        transform: scale(1);\r\n        z-index: 2;\r\n    }\r\n    to {\r\n        transform: scale(0);\r\n        z-index: -1;\r\n    }\r\n}\r\n\r\n@keyframes zoomIn {\r\n    from {\r\n        transform: scale(0);\r\n        z-index: -1;\r\n    }\r\n    to {\r\n        transform: scale(1);\r\n        z-index: 2;\r\n    }\r\n}\r\n\r\n.bookInfoPopup__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.bookInfoPopup_close {\r\n    font-size: 2.5rem;\r\n    cursor: pointer;\r\n    color: var(--white);\r\n}\r\n\r\n.bookListContainer {\r\n    max-width: 1000px;\r\n    background: var(--foreground);\r\n    margin: auto;\r\n    margin-top: 5rem;\r\n    padding: 2rem;\r\n}\r\n\r\n.bookListContainer__title {\r\n    width: 50%;\r\n    color: var(--white);\r\n    font-size: 1.3rem;\r\n    border-bottom: 2px solid var(--btn-primary);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.bookList__book__fakeBook {\r\n    height: 150px;\r\n    width: 100px;\r\n    border-radius: 0.8rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: var(--highlight);\r\n    border: 2px dotted var(--light);\r\n    padding: 1rem;\r\n}\r\n\r\n.bookList__book__fakeBook__title {\r\n    text-align: center;\r\n    color: var(--white);\r\n}\r\n\r\n.bookList__book__fakeBook__plus {\r\n    font-size: 4rem;\r\n    color: var(--white);\r\n}\r\n\r\n.bookList {\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: start;\r\n    justify-content: center;\r\n    border-radius: 1rem;\r\n    gap: 1.5rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.bookList__book {\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: all 0.3s ease-out;\r\n    position: relative;\r\n}\r\n\r\n.bookList__book:hover {\r\n    cursor: pointer;\r\n    z-index: 0;\r\n    transform: scale(1.2);\r\n}\r\n\r\n.bookList__book__cover {\r\n    height: 150px;\r\n    width: 100px;\r\n    margin-bottom: 0.3rem;\r\n    border-radius: 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.bookList__book__title {\r\n    max-width: 110px;\r\n    overflow: hidden;\r\n    font-weight: bold;\r\n    color: var(--white);\r\n    margin-bottom: 0.2rem;\r\n    font-size: 13px;\r\n}\r\n\r\n.bookList__book__author {\r\n    max-width: 150px;\r\n    overflow: hidden;\r\n    color: var(--white);\r\n    font-size: 12px;\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    animation-duration: 0.9s;\r\n    /* background: rgba(96, 31, 216, 0.2); */\r\n    background-color: rgba(38, 15, 87, 0.5);\r\n    color: white;\r\n}\r\n\r\n.fade_out {\r\n    animation-name: fadeOut;\r\n}\r\n\r\n.fade_in {\r\n    animation-name: fadeIn;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeOut {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.bookInfoPopup {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 1rem;\r\n    border-radius: 1rem;\r\n    gap: 0rem;\r\n    padding: 2rem;\r\n    width: 80%;\r\n    height: 50%;\r\n    max-width: 850px;\r\n    max-height: 500px;\r\n    background-color: var(--highlight);\r\n    position: fixed;\r\n    z-index: 2;\r\n    top: 10%;\r\n}\r\n\r\n.bookInfoPopup_title {\r\n    font-size: 1.3rem;\r\n    width: 50%;\r\n    border-bottom: 2px solid var(--btn-primary);\r\n    color: var(--white);\r\n}\r\n\r\n.bookInfoPopup_bookContainer {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    padding-top: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.bookInfoPopup_bookContainer__img {\r\n    display: none;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer {\r\n    /* border: 2px solid red; */\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2rem;\r\n    padding-top: 1rem;\r\n    max-width: 475px;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    color: var(--light);\r\n    padding: 1rem;\r\n    background: var(--highlight);\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__author {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__author__portrait {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 0.3rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__author__name {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__biography {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    justify-content: center;\r\n    text-align: left;\r\n    color: var(--light);\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook__name {\r\n    color: var(--white);\r\n    font-weight: bold;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook__description {\r\n    max-width: 500px;\r\n    font-weight: light;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__author__years {\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook__button {\r\n    margin-top: 0.5rem;\r\n    background: var(--btn-primary);\r\n    color: var(--btn-text);\r\n    border-radius: 0.3rem;\r\n    border: 0;\r\n    padding-top: 0.4rem;\r\n    padding-bottom: 0.4rem;\r\n    padding-left: 1.3rem;\r\n    padding-right: 1.3rem;\r\n    font-size: 1rem;\r\n    text-align: center;\r\n    box-shadow: 0 9px var(--foreground);\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook__button:active {\r\n    box-shadow: 0 5px var(--foreground);\r\n    transform: translateY(4px);\r\n}\r\n\r\n.toReadClicked {\r\n    background: var(--btn-secondary);\r\n}\r\n\r\n.test-border {\r\n    border: 2px solid red;\r\n}\r\n\r\n.addBookContainer {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.addBookContainer__didAddTitle {\r\n    font-size: 2rem;\r\n}\r\n\r\n.addBookContainer__form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1.5rem;\r\n    width: 100%;\r\n}\r\n\r\n.addBookContainer__form input[type=\"text\"] {\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid var(--btn-primary);\r\n    background: inherit;\r\n    color: var(--btn-text);\r\n    font-size: 1.5rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.addBookContainer__form input[type=\"text\"]:focus, .addBookContainer__form input[type=\"submit\"] {\r\n    outline: none;\r\n}\r\n\r\n.addBookContainer__form input[type=\"submit\"] {\r\n    background: var(--btn-primary);\r\n    color: var(--btn-text);\r\n    border-radius: 0.3rem;\r\n    border: 0;\r\n    padding-top: 0.4rem;\r\n    padding-bottom: 0.4rem;\r\n    padding-left: 0.8rem;\r\n    padding-right: 0.8rem;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n/* Small sized Screens */\r\n\r\n@media all and (min-width: 568px) {\r\n\r\n    .bookInfoPopup_bookContainer__img{\r\n        width: 100;\r\n        height: 150px;\r\n    }\r\n    .bookListContainer__title {\r\n        width: 20%;\r\n    }\r\n    .bookInfoPopup_bookContainer__aboutBook__button {\r\n        white-space: nowrap;\r\n    }\r\n}\r\n\r\n/* Medium sized screens */\r\n\r\n@media all and (min-width: 768px) {\r\n    .bookInfoPopup_bookContainer{\r\n        flex-direction: row;\r\n    }\r\n    .bookInfoPopup_bookContainer__img{\r\n        display: block;\r\n        width: 100px;\r\n        height: 150px;\r\n    }\r\n    .addBookContainer {\r\n        width: 60%;\r\n    }\r\n    .bookList {\r\n        justify-content: start;\r\n    }\r\n    .bookInfoPopup_title {\r\n        width: 25%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AACA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB;+BAC2B;AAC/B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI;QACI,mBAAmB;QACnB,UAAU;IACd;IACA;QACI,mBAAmB;QACnB,WAAW;IACf;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,WAAW;IACf;IACA;QACI,mBAAmB;QACnB,UAAU;IACd;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;IACZ,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,iBAAiB;IACjB,2CAA2C;IAC3C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,wCAAwC;IACxC,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,kCAAkC;IAClC,eAAe;IACf,UAAU;IACV,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,2CAA2C;IAC3C,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,sBAAsB;IACtB,qBAAqB;IACrB,SAAS;IACT,mBAAmB;IACnB,sBAAsB;IACtB,oBAAoB;IACpB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;IACnC,0BAA0B;AAC9B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,2CAA2C;IAC3C,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,sBAAsB;IACtB,qBAAqB;IACrB,SAAS;IACT,mBAAmB;IACnB,sBAAsB;IACtB,oBAAoB;IACpB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA,wBAAwB;;AAExB;;IAEI;QACI,UAAU;QACV,aAAa;IACjB;IACA;QACI,UAAU;IACd;IACA;QACI,mBAAmB;IACvB;AACJ;;AAEA,yBAAyB;;AAEzB;IACI;QACI,mBAAmB;IACvB;IACA;QACI,cAAc;QACd,YAAY;QACZ,aAAa;IACjB;IACA;QACI,UAAU;IACd;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,UAAU;IACd;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500i,900,900i');\r\n:root {\r\n    --foreground: #272727;\r\n    --background: #161616;\r\n    --highlight: #413f3f;\r\n    --white: #cfc6c6;\r\n    --light: #afb5c1;\r\n    --accent: #ac91e7;\r\n    --btn-text: #f2f2f2;\r\n    --btn-primary: #855cdd;\r\n    --btn-secondary: #4a22a1;\r\n}\r\n\r\n*, *::before, *::after {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Nunito', sans-serif;\r\n}\r\n\r\nbody {\r\n    background: var(--background);\r\n}\r\n\r\n.popupContainer {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    transition: all 1s ease-in-out;\r\n    animation-duration: 1.8s;\r\n}\r\n\r\n.mainContainer {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    /* transition: all 1s ease-in-out;\r\n    animation-duration: 1.8s; */\r\n}\r\n\r\n.hide__popup {\r\n    display: none;\r\n}\r\n\r\n.zoom_in {\r\n    animation-name: zoomIn;\r\n}\r\n\r\n.zoom_out {\r\n    animation-name: zoomOut;\r\n}\r\n\r\n@keyframes zoomOut {\r\n    from {\r\n        transform: scale(1);\r\n        z-index: 2;\r\n    }\r\n    to {\r\n        transform: scale(0);\r\n        z-index: -1;\r\n    }\r\n}\r\n\r\n@keyframes zoomIn {\r\n    from {\r\n        transform: scale(0);\r\n        z-index: -1;\r\n    }\r\n    to {\r\n        transform: scale(1);\r\n        z-index: 2;\r\n    }\r\n}\r\n\r\n.bookInfoPopup__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.bookInfoPopup_close {\r\n    font-size: 2.5rem;\r\n    cursor: pointer;\r\n    color: var(--white);\r\n}\r\n\r\n.bookListContainer {\r\n    max-width: 1000px;\r\n    background: var(--foreground);\r\n    margin: auto;\r\n    margin-top: 5rem;\r\n    padding: 2rem;\r\n}\r\n\r\n.bookListContainer__title {\r\n    width: 50%;\r\n    color: var(--white);\r\n    font-size: 1.3rem;\r\n    border-bottom: 2px solid var(--btn-primary);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.bookList__book__fakeBook {\r\n    height: 150px;\r\n    width: 100px;\r\n    border-radius: 0.8rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: var(--highlight);\r\n    border: 2px dotted var(--light);\r\n    padding: 1rem;\r\n}\r\n\r\n.bookList__book__fakeBook__title {\r\n    text-align: center;\r\n    color: var(--white);\r\n}\r\n\r\n.bookList__book__fakeBook__plus {\r\n    font-size: 4rem;\r\n    color: var(--white);\r\n}\r\n\r\n.bookList {\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: start;\r\n    justify-content: center;\r\n    border-radius: 1rem;\r\n    gap: 1.5rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.bookList__book {\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: all 0.3s ease-out;\r\n    position: relative;\r\n}\r\n\r\n.bookList__book:hover {\r\n    cursor: pointer;\r\n    z-index: 0;\r\n    transform: scale(1.2);\r\n}\r\n\r\n.bookList__book__cover {\r\n    height: 150px;\r\n    width: 100px;\r\n    margin-bottom: 0.3rem;\r\n    border-radius: 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.bookList__book__title {\r\n    max-width: 110px;\r\n    overflow: hidden;\r\n    font-weight: bold;\r\n    color: var(--white);\r\n    margin-bottom: 0.2rem;\r\n    font-size: 13px;\r\n}\r\n\r\n.bookList__book__author {\r\n    max-width: 150px;\r\n    overflow: hidden;\r\n    color: var(--white);\r\n    font-size: 12px;\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    animation-duration: 0.9s;\r\n    /* background: rgba(96, 31, 216, 0.2); */\r\n    background-color: rgba(38, 15, 87, 0.5);\r\n    color: white;\r\n}\r\n\r\n.fade_out {\r\n    animation-name: fadeOut;\r\n}\r\n\r\n.fade_in {\r\n    animation-name: fadeIn;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeOut {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.bookInfoPopup {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 1rem;\r\n    border-radius: 1rem;\r\n    gap: 0rem;\r\n    padding: 2rem;\r\n    width: 80%;\r\n    height: 50%;\r\n    max-width: 850px;\r\n    max-height: 500px;\r\n    background-color: var(--highlight);\r\n    position: fixed;\r\n    z-index: 2;\r\n    top: 10%;\r\n}\r\n\r\n.bookInfoPopup_title {\r\n    font-size: 1.3rem;\r\n    width: 50%;\r\n    border-bottom: 2px solid var(--btn-primary);\r\n    color: var(--white);\r\n}\r\n\r\n.bookInfoPopup_bookContainer {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    padding-top: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.bookInfoPopup_bookContainer__img {\r\n    display: none;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer {\r\n    /* border: 2px solid red; */\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2rem;\r\n    padding-top: 1rem;\r\n    max-width: 475px;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    color: var(--light);\r\n    padding: 1rem;\r\n    background: var(--highlight);\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__author {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__author__portrait {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 0.3rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__author__name {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__biography {\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    justify-content: center;\r\n    text-align: left;\r\n    color: var(--light);\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook__name {\r\n    color: var(--white);\r\n    font-weight: bold;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook__description {\r\n    max-width: 500px;\r\n    font-weight: light;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.bookInfoPopup__bookAuthorContainer__authorAttributes__author__years {\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook__button {\r\n    margin-top: 0.5rem;\r\n    background: var(--btn-primary);\r\n    color: var(--btn-text);\r\n    border-radius: 0.3rem;\r\n    border: 0;\r\n    padding-top: 0.4rem;\r\n    padding-bottom: 0.4rem;\r\n    padding-left: 1.3rem;\r\n    padding-right: 1.3rem;\r\n    font-size: 1rem;\r\n    text-align: center;\r\n    box-shadow: 0 9px var(--foreground);\r\n}\r\n\r\n.bookInfoPopup_bookContainer__aboutBook__button:active {\r\n    box-shadow: 0 5px var(--foreground);\r\n    transform: translateY(4px);\r\n}\r\n\r\n.toReadClicked {\r\n    background: var(--btn-secondary);\r\n}\r\n\r\n.test-border {\r\n    border: 2px solid red;\r\n}\r\n\r\n.addBookContainer {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.addBookContainer__didAddTitle {\r\n    font-size: 2rem;\r\n}\r\n\r\n.addBookContainer__form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1.5rem;\r\n    width: 100%;\r\n}\r\n\r\n.addBookContainer__form input[type=\"text\"] {\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid var(--btn-primary);\r\n    background: inherit;\r\n    color: var(--btn-text);\r\n    font-size: 1.5rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.addBookContainer__form input[type=\"text\"]:focus, .addBookContainer__form input[type=\"submit\"] {\r\n    outline: none;\r\n}\r\n\r\n.addBookContainer__form input[type=\"submit\"] {\r\n    background: var(--btn-primary);\r\n    color: var(--btn-text);\r\n    border-radius: 0.3rem;\r\n    border: 0;\r\n    padding-top: 0.4rem;\r\n    padding-bottom: 0.4rem;\r\n    padding-left: 0.8rem;\r\n    padding-right: 0.8rem;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n/* Small sized Screens */\r\n\r\n@media all and (min-width: 568px) {\r\n\r\n    .bookInfoPopup_bookContainer__img{\r\n        width: 100;\r\n        height: 150px;\r\n    }\r\n    .bookListContainer__title {\r\n        width: 20%;\r\n    }\r\n    .bookInfoPopup_bookContainer__aboutBook__button {\r\n        white-space: nowrap;\r\n    }\r\n}\r\n\r\n/* Medium sized screens */\r\n\r\n@media all and (min-width: 768px) {\r\n    .bookInfoPopup_bookContainer{\r\n        flex-direction: row;\r\n    }\r\n    .bookInfoPopup_bookContainer__img{\r\n        display: block;\r\n        width: 100px;\r\n        height: 150px;\r\n    }\r\n    .addBookContainer {\r\n        width: 60%;\r\n    }\r\n    .bookList {\r\n        justify-content: start;\r\n    }\r\n    .bookInfoPopup_title {\r\n        width: 25%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFB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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tsaXN0cmVhY3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ib29rbGlzdHJlYWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ib29rbGlzdHJlYWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYm9va2xpc3RyZWFjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ib29rbGlzdHJlYWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ib29rbGlzdHJlYWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jvb2tsaXN0cmVhY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYm9va2xpc3RyZWFjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jvb2tsaXN0cmVhY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ib29rbGlzdHJlYWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jvb2tsaXN0cmVhY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYm9va2xpc3RyZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9va2xpc3RyZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jvb2tsaXN0cmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib29rbGlzdHJlYWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6MzAwLDQwMCw1MDBpLDkwMCw5MDBpKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWZvcmVncm91bmQ6ICMyNzI3Mjc7XFxyXFxuICAgIC0tYmFja2dyb3VuZDogIzE2MTYxNjtcXHJcXG4gICAgLS1oaWdobGlnaHQ6ICM0MTNmM2Y7XFxyXFxuICAgIC0td2hpdGU6ICNjZmM2YzY7XFxyXFxuICAgIC0tbGlnaHQ6ICNhZmI1YzE7XFxyXFxuICAgIC0tYWNjZW50OiAjYWM5MWU3O1xcclxcbiAgICAtLWJ0bi10ZXh0OiAjZjJmMmYyO1xcclxcbiAgICAtLWJ0bi1wcmltYXJ5OiAjODU1Y2RkO1xcclxcbiAgICAtLWJ0bi1zZWNvbmRhcnk6ICM0YTIyYTE7XFxyXFxufVxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuOHM7XFxyXFxufVxcclxcblxcclxcbi5tYWluQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjhzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZV9fcG9wdXAge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uem9vbV9pbiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XFxyXFxufVxcclxcblxcclxcbi56b29tX291dCB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX19oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX2Nsb3NlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0Q29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcmVncm91bmQpO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5ib29rTGlzdENvbnRhaW5lcl9fdGl0bGUge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5KTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0X19ib29rX19mYWtlQm9vayB7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0KTtcXHJcXG4gICAgYm9yZGVyOiAycHggZG90dGVkIHZhcigtLWxpZ2h0KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0X19ib29rX19mYWtlQm9va19fdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5ib29rTGlzdF9fYm9va19fZmFrZUJvb2tfX3BsdXMge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5ib29rTGlzdCB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0X19ib29rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0X19ib29rOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5ib29rTGlzdF9fYm9va19fY292ZXIge1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ib29rTGlzdF9fYm9va19fdGl0bGUge1xcclxcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi5ib29rTGlzdF9fYm9va19fYXV0aG9yIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDk2LCAzMSwgMjE2LCAwLjIpOyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAxNSwgODcsIDAuNSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGVfb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XFxyXFxufVxcclxcblxcclxcbi5mYWRlX2luIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGdhcDogMHJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIG1heC13aWR0aDogODUwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHQpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHRvcDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF90aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYnRuLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9ib29rQ29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfYm9va0NvbnRhaW5lcl9faW1nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9fYm9va0F1dGhvckNvbnRhaW5lciB7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfX2Jvb2tBdXRob3JDb250YWluZXJfX2F1dGhvckF0dHJpYnV0ZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfX2Jvb2tBdXRob3JDb250YWluZXJfX2F1dGhvckF0dHJpYnV0ZXNfX2F1dGhvciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9fYm9va0F1dGhvckNvbnRhaW5lcl9fYXV0aG9yQXR0cmlidXRlc19fYXV0aG9yX19wb3J0cmFpdCB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfX2Jvb2tBdXRob3JDb250YWluZXJfX2F1dGhvckF0dHJpYnV0ZXNfX2F1dGhvcl9fbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9fYm9va0F1dGhvckNvbnRhaW5lcl9fYXV0aG9yQXR0cmlidXRlc19fYmlvZ3JhcGh5IHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX2Jvb2tDb250YWluZXJfX2Fib3V0Qm9vayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfYm9va0NvbnRhaW5lcl9fYWJvdXRCb29rX19uYW1lIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9ib29rQ29udGFpbmVyX19hYm91dEJvb2tfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfX2Jvb2tBdXRob3JDb250YWluZXJfX2F1dGhvckF0dHJpYnV0ZXNfX2F1dGhvcl9feWVhcnMge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX2Jvb2tDb250YWluZXJfX2Fib3V0Qm9va19fYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1idG4tdGV4dCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMS4zcmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA5cHggdmFyKC0tZm9yZWdyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX2Jvb2tDb250YWluZXJfX2Fib3V0Qm9va19fYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IHZhcigtLWZvcmVncm91bmQpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvUmVhZENsaWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3QtYm9yZGVyIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQm9va0NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRCb29rQ29udGFpbmVyX19kaWRBZGRUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJvb2tDb250YWluZXJfX2Zvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQm9va0NvbnRhaW5lcl9fZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnRuLXByaW1hcnkpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tYnRuLXRleHQpO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQm9va0NvbnRhaW5lcl9fZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsIC5hZGRCb29rQ29udGFpbmVyX19mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJvb2tDb250YWluZXJfX2Zvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1idG4tdGV4dCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU21hbGwgc2l6ZWQgU2NyZWVucyAqL1xcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU2OHB4KSB7XFxyXFxuXFxyXFxuICAgIC5ib29rSW5mb1BvcHVwX2Jvb2tDb250YWluZXJfX2ltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAxMDA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5ib29rTGlzdENvbnRhaW5lcl9fdGl0bGUge1xcclxcbiAgICAgICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuYm9va0luZm9Qb3B1cF9ib29rQ29udGFpbmVyX19hYm91dEJvb2tfX2J1dHRvbiB7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1lZGl1bSBzaXplZCBzY3JlZW5zICovXFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLmJvb2tJbmZvUG9wdXBfYm9va0NvbnRhaW5lcntcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJvb2tJbmZvUG9wdXBfYm9va0NvbnRhaW5lcl9faW1ne1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hZGRCb29rQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJvb2tMaXN0IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJvb2tJbmZvUG9wdXBfdGl0bGUge1xcclxcbiAgICAgICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsd0JB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SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUEsd0JBQXdCOztBQUV4Qjs7SUFFSTtRQUNJLFVBQVU7UUFDVixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBLHlCQUF5Qjs7QUFFekI7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpazozMDAsNDAwLDUwMGksOTAwLDkwMGknKTtcXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tZm9yZWdyb3VuZDogIzI3MjcyNztcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTYxNjE2O1xcclxcbiAgICAtLWhpZ2hsaWdodDogIzQxM2YzZjtcXHJcXG4gICAgLS13aGl0ZTogI2NmYzZjNjtcXHJcXG4gICAgLS1saWdodDogI2FmYjVjMTtcXHJcXG4gICAgLS1hY2NlbnQ6ICNhYzkxZTc7XFxyXFxuICAgIC0tYnRuLXRleHQ6ICNmMmYyZjI7XFxyXFxuICAgIC0tYnRuLXByaW1hcnk6ICM4NTVjZGQ7XFxyXFxuICAgIC0tYnRuLXNlY29uZGFyeTogIzRhMjJhMTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cENvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuOHM7ICovXFxyXFxufVxcclxcblxcclxcbi5oaWRlX19wb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi56b29tX2luIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXHJcXG59XFxyXFxuXFxyXFxuLnpvb21fb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbU91dCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbUluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfX2hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfY2xvc2Uge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0xpc3RDb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZm9yZWdyb3VuZCk7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0Q29udGFpbmVyX190aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYnRuLXByaW1hcnkpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0xpc3RfX2Jvb2tfX2Zha2VCb29rIHtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oaWdobGlnaHQpO1xcclxcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgdmFyKC0tbGlnaHQpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0xpc3RfX2Jvb2tfX2Zha2VCb29rX190aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0X19ib29rX19mYWtlQm9va19fcGx1cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0IHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0xpc3RfX2Jvb2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0xpc3RfX2Jvb2s6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0X19ib29rX19jb3ZlciB7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0X19ib29rX190aXRsZSB7XFxyXFxuICAgIG1heC13aWR0aDogMTEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tMaXN0X19ib29rX19hdXRob3Ige1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoOTYsIDMxLCAyMTYsIDAuMik7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDE1LCA4NywgMC41KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZV9vdXQge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGVfaW4ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgZ2FwOiAwcmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA4NTBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgdG9wOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX2Jvb2tDb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9ib29rQ29udGFpbmVyX19pbWcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX19ib29rQXV0aG9yQ29udGFpbmVyIHtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9fYm9va0F1dGhvckNvbnRhaW5lcl9fYXV0aG9yQXR0cmlidXRlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oaWdobGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9fYm9va0F1dGhvckNvbnRhaW5lcl9fYXV0aG9yQXR0cmlidXRlc19fYXV0aG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX19ib29rQXV0aG9yQ29udGFpbmVyX19hdXRob3JBdHRyaWJ1dGVzX19hdXRob3JfX3BvcnRyYWl0IHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9fYm9va0F1dGhvckNvbnRhaW5lcl9fYXV0aG9yQXR0cmlidXRlc19fYXV0aG9yX19uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX19ib29rQXV0aG9yQ29udGFpbmVyX19hdXRob3JBdHRyaWJ1dGVzX19iaW9ncmFwaHkge1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfYm9va0NvbnRhaW5lcl9fYWJvdXRCb29rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9ib29rQ29udGFpbmVyX19hYm91dEJvb2tfX25hbWUge1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5ib29rSW5mb1BvcHVwX2Jvb2tDb250YWluZXJfX2Fib3V0Qm9va19fZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va0luZm9Qb3B1cF9fYm9va0F1dGhvckNvbnRhaW5lcl9fYXV0aG9yQXR0cmlidXRlc19fYXV0aG9yX195ZWFycyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfYm9va0NvbnRhaW5lcl9fYWJvdXRCb29rX19idXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ0bi1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJ0bi10ZXh0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjRyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS4zcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDlweCB2YXIoLS1mb3JlZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2tJbmZvUG9wdXBfYm9va0NvbnRhaW5lcl9fYWJvdXRCb29rX19idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA1cHggdmFyKC0tZm9yZWdyb3VuZCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9SZWFkQ2xpY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ0bi1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdC1ib3JkZXIge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5hZGRCb29rQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJvb2tDb250YWluZXJfX2RpZEFkZFRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQm9va0NvbnRhaW5lcl9fZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hZGRCb29rQ29udGFpbmVyX19mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1idG4tdGV4dCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRCb29rQ29udGFpbmVyX19mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cywgLmFkZEJvb2tDb250YWluZXJfX2Zvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQm9va0NvbnRhaW5lcl9fZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ0bi1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJ0bi10ZXh0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjRyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTbWFsbCBzaXplZCBTY3JlZW5zICovXFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNTY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLmJvb2tJbmZvUG9wdXBfYm9va0NvbnRhaW5lcl9faW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDEwMDtcXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJvb2tMaXN0Q29udGFpbmVyX190aXRsZSB7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5ib29rSW5mb1BvcHVwX2Jvb2tDb250YWluZXJfX2Fib3V0Qm9va19fYnV0dG9uIHtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaXVtIHNpemVkIHNjcmVlbnMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuYm9va0luZm9Qb3B1cF9ib29rQ29udGFpbmVye1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcbiAgICAuYm9va0luZm9Qb3B1cF9ib29rQ29udGFpbmVyX19pbWd7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFkZEJvb2tDb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuYm9va0xpc3Qge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgfVxcclxcbiAgICAuYm9va0luZm9Qb3B1cF90aXRsZSB7XFxyXFxuICAgICAgICB3aWR0aDogMjUlO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9