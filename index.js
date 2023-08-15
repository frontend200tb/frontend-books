/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer/element-footer.js":
/*!*************************************************!*\
  !*** ./src/components/footer/element-footer.js ***!
  \*************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Footer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Footer, _HTMLElement);
  var _super = _createSuper(Footer);
  function Footer() {
    _classCallCheck(this, Footer);
    return _super.call(this);
  }
  _createClass(Footer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <footer class=\"footer container\">\n      <div class=\"footer__logo\">200TERABYTE WEB STUDIO</div>\n    </footer>\n    ";
    }
  }]);
  return Footer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('footer-component', Footer);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");
/* harmony import */ var _element_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-footer */ "./src/components/footer/element-footer.js");
/* harmony import */ var _element_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_element_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/components/front-books/element-front-books.js":
/*!***********************************************************!*\
  !*** ./src/components/front-books/element-front-books.js ***!
  \***********************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var FrontBooks = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FrontBooks, _HTMLElement);
  var _super = _createSuper(FrontBooks);
  function FrontBooks() {
    _classCallCheck(this, FrontBooks);
    return _super.call(this);
  }
  _createClass(FrontBooks, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <h1>\u041C\u043E\u044F \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 frontend \u043A\u043D\u0438\u0433</h1>\n    ";
      this.className = 'front-books';
    }
  }]);
  return FrontBooks;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('front-books', FrontBooks);

/***/ }),

/***/ "./src/components/front-books/front-books.js":
/*!***************************************************!*\
  !*** ./src/components/front-books/front-books.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showFrontBooks: () => (/* binding */ showFrontBooks)
/* harmony export */ });
/* harmony import */ var _element_front_books__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-front-books */ "./src/components/front-books/element-front-books.js");
/* harmony import */ var _element_front_books__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_element_front_books__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_f_create_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/f-create-input.js */ "./src/components/front-books/js/f-create-input.js");
/* harmony import */ var _js_f_create_category_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/f-create-category.js */ "./src/components/front-books/js/f-create-category.js");
/* harmony import */ var _js_f_create_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/f-create-elements.js */ "./src/components/front-books/js/f-create-elements.js");
/* harmony import */ var _js_f_create_elem_main_nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/f-create-elem-main-nav.js */ "./src/components/front-books/js/f-create-elem-main-nav.js");
/* harmony import */ var _js_f_create_elem_section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/f-create-elem-section.js */ "./src/components/front-books/js/f-create-elem-section.js");
/****************
Скрипт из файла front-books.js
Функция showFrontBooks показывает страницу front-books
*******************/
/*
Алгоритм работы
1. Создаем объект frontBooks
2. В объекте frontBooks создаем свойство input
3. В объекте frontBooks создаем свойство category
4. В объекте frontBooks создаем свойство elements
5. В объекте frontBooks создаем свойство mainNav
6. В объекте frontBooks создаем свойство elemSection
7. Экспортируем функцию showFrontBooks()
*/








//1. Создаем объект frontBooks
var frontBooks = {};

//2. В объекте frontBooks создаем свойство input
frontBooks.input = (0,_js_f_create_input_js__WEBPACK_IMPORTED_MODULE_1__.createInput)();

//3. В объекте frontBooks создаем свойство category
frontBooks.category = (0,_js_f_create_category_js__WEBPACK_IMPORTED_MODULE_2__.createCategory)(frontBooks.input);

//4. В объекте frontBooks создаем свойство elements
frontBooks.elements = (0,_js_f_create_elements_js__WEBPACK_IMPORTED_MODULE_3__.createElements)(frontBooks.category);

//5. В объекте frontBooks создаем свойство mainNav
frontBooks.mainNav = (0,_js_f_create_elem_main_nav_js__WEBPACK_IMPORTED_MODULE_4__.createElemMainNav)(frontBooks.elements);

//6. В объекте frontBooks создаем свойство elementSection
frontBooks.elemSection = (0,_js_f_create_elem_section_js__WEBPACK_IMPORTED_MODULE_5__.createElemSection)(frontBooks.elements);

//7. Экспортируем функцию showFrontBooks()
function showFrontBooks() {
  console.log('frontBooks', frontBooks);
  var elementFrontBooks = document.querySelector('.front-books');
  if (elementFrontBooks) {
    elementFrontBooks.append(frontBooks.mainNav);
    elementFrontBooks.append(frontBooks.elemSection);
  }
}

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-angular-en.js":
/*!*********************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-angular-en.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksAngularEn: () => (/* binding */ dataBooksAngularEn)
/* harmony export */ });
var dataBooksAngularEn = [{
  "id": 1,
  "year": 2016,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 2 from theory to practice (eng)",
  "author": "Asim Hussain",
  "pages": "790",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2016,
  "category": "framework",
  "theme": "angular",
  "title": "Mastering Angular 2 Components (eng)",
  "author": "Gion Kunz",
  "pages": "422",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2016,
  "category": "framework",
  "theme": "angular",
  "title": "Learning Angular 2 (eng)",
  "author": "Pablo Deeleman",
  "pages": "421",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2016,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 2 (eng)",
  "author": "tutorialspoint",
  "pages": "91",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2016,
  "category": "framework",
  "theme": "angular",
  "title": "ASP.NET Core and Angular 2 (eng)",
  "author": "Valerio De Sanctis",
  "pages": "476",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Essential Angular for ASP.NET Core MVC (eng)",
  "author": "Adam Freeman",
  "pages": "307",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Pro Angular (2nd) (eng)",
  "author": "Adam Freeman",
  "pages": "801",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 2 From Theory To Practice (eng)",
  "author": "Asim Hussain",
  "pages": "673",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Learning Angular (2nd) (eng)",
  "author": "Christoffer Noring",
  "pages": "528",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Beginning Angular 2 with TypeScript (eng)",
  "author": "Greg Lim",
  "pages": "162",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "The Angular Firebase Survival Guide (eng)",
  "author": "Jeff Delaney",
  "pages": "110",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 4 Collected Essays (eng)",
  "author": "Jeffry Houser",
  "pages": "227",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Ang book The Complete Guide to Angular 4 (eng)",
  "author": "Nate Murray",
  "pages": "681",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Ang-book 2 The Complete Book on Angular 2 (eng)",
  "author": "Nate Murray",
  "pages": "696",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Reactive Programming with Angular and ngrx (eng)",
  "author": "Oren Farhi",
  "pages": "160",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Learn Angular step by step (eng)",
  "author": "Shivprasad Koirala",
  "pages": "90",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Building Modern Web Applications Using Angular (eng)",
  "author": "Shravan Kumar",
  "pages": "216",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Pro Angular 6 (3rd) (eng)",
  "author": "Adam Freeman",
  "pages": "780",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 6 by Example (eng)",
  "author": "Chandermani Arora",
  "pages": "499",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Developing with Angular (eng)",
  "author": "Denys Vuika",
  "pages": "477",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Mastering Angular Components (2ed) (eng)",
  "author": "Gion Kunz",
  "pages": "394",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular in Action (eng)",
  "author": "Jeremy Wilken",
  "pages": "321",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Testing Angular Applications (eng)",
  "author": "Jesse Palmer",
  "pages": "242",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 5 Projects (eng)",
  "author": "Mark Clow",
  "pages": "465",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular Design Patterns (eng)",
  "author": "Mathieu Nayrolles",
  "pages": "197",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Become a ninja with Angular (eng)",
  "author": "Ninja Squad",
  "pages": "267",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 2 (eng)",
  "author": "Notes for professionals",
  "pages": "230",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 2plus (eng)",
  "author": "Notes for professionals",
  "pages": "232",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "AngularJS (eng)",
  "author": "Notes for professionals",
  "pages": "201",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular 4 pocket primer (eng)",
  "author": "Oswald Campesato",
  "pages": "325",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Rangle's Angular 2 Training book (eng)",
  "author": "Rangle",
  "pages": "498",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Front-end Development with ASP NET Core, Angular and Bootstrap (eng)",
  "author": "Simone Chiaretta",
  "pages": "281",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2019,
  "category": "framework",
  "theme": "angular",
  "title": "Essential Angular for ASP.NET Core MVC 3 ( 2nd) (eng)",
  "author": "Adam Freeman",
  "pages": "357",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2019,
  "category": "framework",
  "theme": "angular",
  "title": "Progressive Web Apps with Angular (eng)",
  "author": "Majid Hajian",
  "pages": "386",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2019,
  "category": "framework",
  "theme": "angular",
  "title": "Enterprise Angular (eng)",
  "author": "Manfred Steyer",
  "pages": "49",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 36,
  "year": 2019,
  "category": "framework",
  "theme": "angular",
  "title": "Getting MEAN with Mongo Express Angular and Node (2nd) (eng)",
  "author": "Simon Holmes",
  "pages": "505",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 37,
  "year": 2020,
  "category": "framework",
  "theme": "angular",
  "title": "Become A Ninja With Angular (eng)",
  "author": "Ninja Squad",
  "pages": "320",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2020,
  "category": "framework",
  "theme": "angular",
  "title": "Practical Highcharts with Angular (eng)",
  "author": "Sourabh Mishra",
  "pages": "314",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 39,
  "year": 2021,
  "category": "framework",
  "theme": "angular",
  "title": "Angular Cookbook (eng)",
  "author": "Muhammad Ahsan",
  "pages": "652",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 40,
  "year": 2021,
  "category": "framework",
  "theme": "angular",
  "title": "Become A Ninja With Angular (eng)",
  "author": "Ninja Squad",
  "pages": "324",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-angular.js":
/*!******************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-angular.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksAngular: () => (/* binding */ dataBooksAngular)
/* harmony export */ });
var dataBooksAngular = [{
  "id": 1,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Изучаем Angular 2",
  "author": "Пабло Дилеман",
  "pages": "357",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2017,
  "category": "framework",
  "theme": "angular",
  "title": "Стек MEAN. Mongo, Express, Angular, Node",
  "author": "Саймон Холмс",
  "pages": "496",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular для профессионалов (2е)",
  "author": "Адам Фримен",
  "pages": "800",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular. Сборник рецептов",
  "author": "Мэтт Фрисби",
  "pages": "466",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2018,
  "category": "framework",
  "theme": "angular",
  "title": "Angular и TypeScript",
  "author": "Яков Файн",
  "pages": "464",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-base-en.js":
/*!******************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-base-en.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksBaseEn: () => (/* binding */ dataBooksBaseEn)
/* harmony export */ });
var dataBooksBaseEn = [{
  "id": 1,
  "year": 2015,
  "category": "other",
  "theme": "base",
  "title": "Modern Operating System (4th)",
  "author": "Andrew Tanenbaum",
  "pages": "1137",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2016,
  "category": "other",
  "theme": "base",
  "title": "Computer Organization and Architecture (10th)",
  "author": "William Stallings",
  "pages": "865",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2018,
  "category": "other",
  "theme": "base",
  "title": "Operating System Concepts (10th)",
  "author": "Abraham Silberschatz",
  "pages": "1278",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-base.js":
/*!***************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-base.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksBase: () => (/* binding */ dataBooksBase)
/* harmony export */ });
var dataBooksBase = [{
  "id": 1,
  "year": 2000,
  "category": "other",
  "theme": "base",
  "title": "Мифический человеко-месяц",
  "author": "Фредерик Брукс",
  "pages": "304",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2002,
  "category": "other",
  "theme": "base",
  "title": "Жемчужины программирования (2е)",
  "author": "Джон Бентли",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2002,
  "category": "other",
  "theme": "base",
  "title": "Искусство программирования Том 1 (3е)",
  "author": "Дональд Кнут",
  "pages": "682",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2002,
  "category": "other",
  "theme": "base",
  "title": "Искусство программирования Том 2 (3е)",
  "author": "Дональд Кнут",
  "pages": "788",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2002,
  "category": "other",
  "theme": "base",
  "title": "Искусство программирования Том 3 (3е)",
  "author": "Дональд Кнут",
  "pages": "800",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2002,
  "category": "other",
  "theme": "base",
  "title": "Инженерия программного обеспечения (6е)",
  "author": "Иан Соммервилл",
  "pages": "624",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2002,
  "category": "other",
  "theme": "base",
  "title": "Основы программирования для чайников (2е)",
  "author": "Уоллес Вонг",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2003,
  "category": "other",
  "theme": "base",
  "title": "Экстремальное программирование",
  "author": "Кент Бек",
  "pages": "212",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2003,
  "category": "other",
  "theme": "base",
  "title": "Рефакторинг. Улучшение существующего кода",
  "author": "Мартин Фаулер",
  "pages": "432",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2006,
  "category": "other",
  "theme": "base",
  "title": "Джоэл о программировании",
  "author": "Джоэл Спольски",
  "pages": "352",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2006,
  "category": "other",
  "theme": "base",
  "title": "Структура и интерпретация компьютерных программ",
  "author": "Харольд Абельсон",
  "pages": "608",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2007,
  "category": "other",
  "theme": "base",
  "title": "Лучшие примеры разработки ПО",
  "author": "Джоэл Спольски",
  "pages": "208",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2007,
  "category": "other",
  "theme": "base",
  "title": "Сколько стоит программный проект",
  "author": "Стив Макконнелл",
  "pages": "297",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2009,
  "category": "other",
  "theme": "base",
  "title": "И снова о программировании",
  "author": "Джоел Спольски",
  "pages": "320",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2009,
  "category": "other",
  "theme": "base",
  "title": "Эффективная работа с унаследованным кодом",
  "author": "Майкл Физерс",
  "pages": "400",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2010,
  "category": "other",
  "theme": "base",
  "title": "Путь программиста",
  "author": "Александр Никитин, Дмитрий Ляпин",
  "pages": "67",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2010,
  "category": "other",
  "theme": "base",
  "title": "Совершенный код",
  "author": "Стив Макконнелл",
  "pages": "896",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2011,
  "category": "other",
  "theme": "base",
  "title": "Предметно-ориентированные языки программирования",
  "author": "Мартин Фаулер",
  "pages": "576",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2011,
  "category": "other",
  "theme": "base",
  "title": "Кодеры за работой",
  "author": "Питер Сейбел",
  "pages": "544",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2011,
  "category": "other",
  "theme": "base",
  "title": "Идеальный код",
  "author": "Энди Орам",
  "pages": "624",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2012,
  "category": "other",
  "theme": "base",
  "title": "97 этюдов для программистов",
  "author": "Роберт Мартин",
  "pages": "256",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2013,
  "category": "other",
  "theme": "base",
  "title": "Жемчужины проектирования алгоритмов",
  "author": "Ричард Бёрд",
  "pages": "330",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2013,
  "category": "other",
  "theme": "base",
  "title": "Алгоритмы. Построение и анализ",
  "author": "Томас Кормен",
  "pages": "1328",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2013,
  "category": "other",
  "theme": "base",
  "title": "Архитектура компьютера (6е)",
  "author": "Эндрю Таненбаум",
  "pages": "816",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2015,
  "category": "other",
  "theme": "base",
  "title": "Современные операционные системы (4е)",
  "author": "Эндрю Таненбаум",
  "pages": "1120",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2015,
  "category": "other",
  "theme": "base",
  "title": "Приемы ООП. Паттерны проектирования (2е)",
  "author": "Эрик Гамма",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2016,
  "category": "other",
  "theme": "base",
  "title": "Путь программиста",
  "author": "Джон Сонмез",
  "pages": "448",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2016,
  "category": "other",
  "theme": "base",
  "title": "Шаблоны корпоративных приложений",
  "author": "Мартин Фаулер",
  "pages": "544",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2017,
  "category": "other",
  "theme": "base",
  "title": "Грокаем алгоритмы",
  "author": "Адитья Бхаргава",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2017,
  "category": "other",
  "theme": "base",
  "title": "Программирование без дураков",
  "author": "Катрин Пассиг",
  "pages": "416",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2017,
  "category": "other",
  "theme": "base",
  "title": "Не заставляйте меня думать (3е)",
  "author": "Стив Круг",
  "pages": "256",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2017,
  "category": "other",
  "theme": "base",
  "title": "Путь в программисты",
  "author": "Константин Шереметьев",
  "pages": "41",
  "isLearned": true,
  "dateLearned": "2021-08-23 пн"
}, {
  "id": 33,
  "year": 2018,
  "category": "other",
  "theme": "base",
  "title": "Психбольница в руках пациентов",
  "author": "Алан Купер",
  "pages": "302",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2018,
  "category": "other",
  "theme": "base",
  "title": "Теоретический минимум по Computer Science",
  "author": "Владстон Фило",
  "pages": "224",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2018,
  "category": "other",
  "theme": "base",
  "title": "Сам себе программист",
  "author": "Кори Альтхофф",
  "pages": "208",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 36,
  "year": 2018,
  "category": "other",
  "theme": "base",
  "title": "Идеальный программист (2е)",
  "author": "Роберт Мартин",
  "pages": "224",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 37,
  "year": 2018,
  "category": "other",
  "theme": "base",
  "title": "Head First. Паттерны проектирования (2е)",
  "author": "Эрик Фримен",
  "pages": "656",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2019,
  "category": "other",
  "theme": "base",
  "title": "Компьютерные науки. Базовый курс (13е)",
  "author": "Гленн Брукшир",
  "pages": "992",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 39,
  "year": 2019,
  "category": "other",
  "theme": "base",
  "title": "Чистый код (3е)",
  "author": "Роберт Мартин",
  "pages": "464",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 40,
  "year": 2019,
  "category": "other",
  "theme": "base",
  "title": "Код. Тайный язык информатики (2е)",
  "author": "Чарльз Петцольд",
  "pages": "448",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 41,
  "year": 2019,
  "category": "other",
  "theme": "base",
  "title": "Программист-фанатик (2е)",
  "author": "Чед Фаулер",
  "pages": "208",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 42,
  "year": 2020,
  "category": "other",
  "theme": "base",
  "title": "Карьера программиста (6е)",
  "author": "Лакман Макдауэлл",
  "pages": "688",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 43,
  "year": 2020,
  "category": "other",
  "theme": "base",
  "title": "Программист-прагматик (2е)",
  "author": "Эндрю Хант",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 44,
  "year": 2021,
  "category": "other",
  "theme": "base",
  "title": "Программирование Том 1 Азы программирования",
  "author": "Столяров",
  "pages": "707",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 45,
  "year": 2021,
  "category": "other",
  "theme": "base",
  "title": "Программирование Том 2 Системы и сети",
  "author": "Столяров",
  "pages": "707",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 46,
  "year": 2021,
  "category": "other",
  "theme": "base",
  "title": "Программирование Том 3 Парадигмы",
  "author": "Столяров",
  "pages": "707",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 47,
  "year": 2021,
  "category": "other",
  "theme": "base",
  "title": "Разработка интерфейсов. Паттерны проектирования",
  "author": "Тидвелл",
  "pages": "558",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 48,
  "year": 2023,
  "category": "other",
  "theme": "base",
  "title": "Кодер с улицы",
  "author": "Седат Капаноглу",
  "pages": "320",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 49,
  "year": 2023,
  "category": "other",
  "theme": "base",
  "title": "Ум программиста Как понять и осмыслить любой код",
  "author": "Фелин Херманс",
  "pages": "274",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-bootstrap-en.js":
/*!***********************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-bootstrap-en.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksBootstrapEn: () => (/* binding */ dataBooksBootstrapEn)
/* harmony export */ });
var dataBooksBootstrapEn = [{
  "id": 1,
  "year": 2020,
  "category": "library",
  "theme": "bootstrap",
  "title": "Practical Bootstrap",
  "author": "Panos Matsinopoulos",
  "pages": "506",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-bootstrap.js":
/*!********************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-bootstrap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksBootstrap: () => (/* binding */ dataBooksBootstrap)
/* harmony export */ });
var dataBooksBootstrap = [{
  "id": 1,
  "year": 2016,
  "category": "library",
  "theme": "bootstrap",
  "title": "Bootstrap. Руководство",
  "author": "Влад Мержевич",
  "pages": "58",
  "isLearned": true,
  "dateLearned": "2021-08-12 чт"
}, {
  "id": 2,
  "year": 2016,
  "category": "library",
  "theme": "bootstrap",
  "title": "Bootstrap Быстрое создание современных сайтов",
  "author": "Тимур Машнин",
  "pages": "145",
  "isLearned": true,
  "dateLearned": "2021-08-14 сб"
}, {
  "id": 3,
  "year": 2017,
  "category": "library",
  "theme": "bootstrap",
  "title": "Bootstrap в примерах",
  "author": "Сильвио Морето",
  "pages": "314",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2021,
  "category": "library",
  "theme": "bootstrap",
  "title": "Bootstrap и CSS-препроцессор Sass",
  "author": "Прохоренок",
  "pages": "497",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-htmlcss-en.js":
/*!*********************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-htmlcss-en.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksHtmlcssEn: () => (/* binding */ dataBooksHtmlcssEn)
/* harmony export */ });
var dataBooksHtmlcssEn = [{
  "id": 1,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Beginning CSS Preprocessors With Sass, Compass and Less",
  "author": "Anirudh Prabhu",
  "pages": "153",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 and CSS3 (3rd) (eng)",
  "author": "Anne Boehm",
  "pages": "703",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "How to code in HTML5 and CSS3 (eng)",
  "author": "Damian Wielgosik",
  "pages": "127",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Introduction to HTML and CSS (eng)",
  "author": "Danny Ajini",
  "pages": "155",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "The Book of CSS3 A Developer’s Guide(2nd)",
  "author": "Peter Gasston",
  "pages": "306",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Mastering Responsive Web Design with HTML5 and CSS3 (eng)",
  "author": "Ricardo Zea",
  "pages": "334",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Multiplayer Game Development with HTML5",
  "author": "Rodrigo Silveira",
  "pages": "180",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Beginning HTML5 Media: Make the most of the new video and audio standards for the Web (2nd ed)",
  "author": "Silvia Pfeiffer and Tom Green",
  "pages": "295",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS Tutorial",
  "author": "w3schools",
  "pages": "663",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS Floating",
  "author": "Eric Meyer",
  "pages": "60",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Professional CSS3",
  "author": "Piotr Sikora",
  "pages": "463",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 Quick Markup Reference",
  "author": "Wallace Jackson",
  "pages": "268",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2017,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Pro HTML5 Games Learn to Build your Own Games using HTML5 and JavaScript (2nd ed)",
  "author": "Aditya Shankar",
  "pages": "432",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2017,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML in easy steps (2nd ed)",
  "author": "Mike McGrath",
  "pages": "339",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2017,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 and CSS3 (7th) (eng)",
  "author": "Patrick Carey",
  "pages": "939",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2017,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Cross Over to HTML5 Game Development: Use Your Programming Experience to Create Mobile Games",
  "author": "Zarrar Chishti",
  "pages": "261",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2018,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS The Definitive Guide (4th)",
  "author": "Eric Meyer, Estelle Weyl",
  "pages": "1088",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2018,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS in 44 minutes",
  "author": "Jeremy Thomas",
  "pages": "44",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2018,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS",
  "author": "Notes For Professionals",
  "pages": "244",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2018,
  "category": "code",
  "theme": "HTML CSS",
  "title": "This HTML5",
  "author": "Notes for Professionals",
  "pages": "124",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2018,
  "category": "code",
  "theme": "HTML CSS",
  "title": "This HTML5 Canvas",
  "author": "Notes for Professionals",
  "pages": "180",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2019,
  "category": "code",
  "theme": "HTML CSS",
  "title": "The HTML and CSS Workshop (1st) (eng)",
  "author": "Lewis Coulson",
  "pages": "663",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2019,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS3 Quick Syntax Reference (2nd)",
  "author": "Mikael Olsson",
  "pages": "184",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2019,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Web Development and Design Foundations with HTML5",
  "author": "Terry Ann",
  "pages": "2059",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2020,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Responsive web design with HTML CSS (3rd) (eng)",
  "author": "Ben Frain",
  "pages": "409",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2022,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML CSS Handbook (eng)",
  "author": "Vikalp Kaushik",
  "pages": "50",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-htmlcss.js":
/*!******************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-htmlcss.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksHtmlcss: () => (/* binding */ dataBooksHtmlcss)
/* harmony export */ });
var dataBooksHtmlcss = [{
  "id": 1,
  "year": 1997,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML с самого начала",
  "author": "Брент Хеслоп",
  "pages": "417",
  "isLearned": true,
  "dateLearned": "2021-07-27 вт"
}, {
  "id": 2,
  "year": 1998,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML в подлиннике",
  "author": "Браун",
  "pages": "1048",
  "isLearned": true,
  "dateLearned": "2021-08-16 пн"
}, {
  "id": 3,
  "year": 2008,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML. Популярный самоучитель (2е)",
  "author": "Александр Чиртик",
  "pages": "256",
  "isLearned": true,
  "dateLearned": "2021-07-16 пт"
}, {
  "id": 1,
  "year": 2010,
  "category": "other",
  "theme": "web",
  "title": "HTML, XHTML и CSS на 100 %",
  "author": "Квинт",
  "pages": "384",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2010,
  "category": "other",
  "theme": "web",
  "title": "Веб-мастеринг на 100 HTML CSS JS PHP",
  "author": "Пётр Ташков",
  "pages": "512",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 1,
  "year": 2010,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS. 100 и 1 совет (3-е изд)",
  "author": "Рейчел Эндрю",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML и CSS. Путь к совершенству",
  "author": "Бен Хеник",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2011,
  "category": "other",
  "theme": "web",
  "title": "HTML скрипты и стили (3е)",
  "author": "Вадим Дунаев",
  "pages": "816",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Самоучитель HTML",
  "author": "Влад Мержевич",
  "pages": "97",
  "isLearned": true,
  "dateLearned": "2021-12-08 ср"
}, {
  "id": 7,
  "year": 2011,
  "category": "other",
  "theme": "web",
  "title": "HTML5, CSS3, Web 2.0. Разработка современных Web-сайтов",
  "author": "Владимир Дронов",
  "pages": "416",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS ручной работы",
  "author": "Дэн Седерхольм",
  "pages": "240",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML Самоучитель (2-е изд)",
  "author": "Комолова, Яковлева",
  "pages": "288",
  "isLearned": true,
  "dateLearned": "2021-12-18 сб"
}, {
  "id": 6,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS Рецепты программирования (3е)",
  "author": "Кристофер Шмитт",
  "pages": "672",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Изучаем HTML 5. Библиотека специалиста (1-е изд)",
  "author": "Лоусон, Шарп",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Погружение в HTML5",
  "author": "Марк Пилгрим",
  "pages": "304",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 для профессионалов: мощные инструменты для разработки современных веб-приложений",
  "author": "Питер Лабберс, Брайан Олберс, Фрэнк Салим",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2011,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 за 10 минут (5-е изд)",
  "author": "Стивен Хольцнер",
  "pages": "240",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2012,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 и CSS3. Веб-разработка",
  "author": "Брайан Хоган",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2012,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS3 для веб-дизайнеров",
  "author": "Дэн Седерхольм",
  "pages": "125",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2012,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Пуленепробиваемый веб-дизайн (3-е изд)",
  "author": "Дэн Седерхольм",
  "pages": "304",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2012,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Сила CSS3",
  "author": "Зои Джилленуотер",
  "pages": "304",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2012,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5. Рецепты программирования",
  "author": "Кайл Симпсон, Кристофер Шмитт",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2012,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Изучаем HTML 5. Библиотека специалиста (2-е изд)",
  "author": "Лоусон, Шарп",
  "pages": "304",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2012,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 Недостающее руководство",
  "author": "Мэтью Мак-Дональд",
  "pages": "480",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2013,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 для веб-дизайнеров",
  "author": "Джереми Кит",
  "pages": "80",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2013,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML и CSS. Разработка и дизайн веб-сайтов",
  "author": "Джон Дакетт",
  "pages": "480",
  "isLearned": true,
  "dateLearned": "2021-12-04 сб",
  "origin": {
    "year": 2011,
    "title": "HTML &amp; CSS Design and Build Websites (eng)",
    "author": "Jon Duckett"
  }
}, {
  "id": 20,
  "year": 2013,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML и CSS. Разработка и дизайн веб-сайтов (eng)",
  "author": "Джон Дакетт",
  "pages": "480",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2011,
    "title": "HTML &amp; CSS Design and Build Websites (eng)",
    "author": "Jon Duckett"
  }
}, {
  "id": 21,
  "year": 2013,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 - Путеводитель по технологии",
  "author": "Кирилл Сухов",
  "pages": "352",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2013,
  "category": "other",
  "theme": "web",
  "title": "Веб-мастеринг на 100 HTML CSS JS PHP",
  "author": "Роман Клименко",
  "pages": "512",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2013,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 Для профессоналов",
  "author": "Хуан Диего Гоше",
  "pages": "496",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2013,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HeadFirst Изучаем программирование на HTML5",
  "author": "Эрик Фримен, Элизабет Фримен",
  "pages": "640",
  "isLearned": true,
  "dateLearned": "2021-09-26 вс"
}, {
  "id": 18,
  "year": 2014,
  "category": "other",
  "theme": "web",
  "title": "HTML5, CSS3 и JavaScript Исчерпывающее руководство (4е)",
  "author": "Дженнифер Роббинс",
  "pages": "528",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2014,
  "category": "code",
  "theme": "HTML CSS",
  "title": "XHTML в примерах",
  "author": "Энн Наварро",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2014,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HeadFirst Изучаем HTML XHTML и CSS (2-е изд)",
  "author": "Эрик Фримен, Элизабет Фримен",
  "pages": "720",
  "isLearned": true,
  "dateLearned": "2021-09-22 ср"
}, {
  "id": 26,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 карманный справочник (5-е изд)",
  "author": "Дженнифер Роббинс",
  "pages": "192",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Лабораторные работы по языку гипертекстовой разметки HTML",
  "author": "Муслимова З.М.",
  "pages": "71",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2015,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 Разработка приложений для мобильных устройств",
  "author": "Эстель Вейл",
  "pages": "480",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Учебник HTML",
  "author": "Алексей Семикопенко",
  "pages": "94",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Большая книга CSS (4-е изд)",
  "author": "Дэвид Макфарланд",
  "pages": "720",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2015,
    "title": "CSS The Missing Manual (4th) (eng)",
    "author": "David McFarland"
  }
}, {
  "id": 31,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Большая книга CSS (4-е изд) (eng)",
  "author": "Дэвид Макфарланд",
  "pages": "720",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2015,
    "title": "CSS The Missing Manual (4th) (eng)",
    "author": "David McFarland"
  }
}, {
  "id": 32,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML 5. Основы клиентской разработки (2-е изд)",
  "author": "ИНТУИТ - Савельев А.О., Алексеев А.А.",
  "pages": "286",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Введение в HTML5 (2-е изд)",
  "author": "ИНТУИТ",
  "pages": "134",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Основы работы с HTML (2-е изд)",
  "author": "ИНТУИТ",
  "pages": "209",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Спецификация языка HTML (2-е изд)",
  "author": "ИНТУИТ",
  "pages": "490",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 36,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Секреты CSS. Идеальные решения ежедневных задач",
  "author": "Леа Веру",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 37,
  "year": 2016,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS. Карманный справочник (4-е изд)",
  "author": "Эрик Мейер",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2017,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 и CSS3. Разработка сайтов (2е)",
  "author": "Бен Фрэйн",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 39,
  "year": 2018,
  "category": "code",
  "theme": "HTML CSS",
  "title": "HTML5 + CSS3 Основы современного веб дезайна",
  "author": "А.В.Кириченко, А.А.Хрусталев",
  "pages": "352",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 39,
  "year": 2018,
  "category": "code",
  "theme": "HTML CSS",
  "title": "WEB и DHTML",
  "author": "Солодушкин",
  "pages": "132",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 40,
  "year": 2019,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS для профи",
  "author": "Кит Грант",
  "pages": "496",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 41,
  "year": 2019,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS полный справочник (4-е изд)",
  "author": "Эрик Мейер, Эстелл Уэйл",
  "pages": "1088",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2018,
    "title": "CSS The Definitive Guide (4th) (eng)",
    "author": "Eric Meyer, Estelle Weyl"
  }
}, {
  "id": 42,
  "year": 2019,
  "category": "code",
  "theme": "HTML CSS",
  "title": "CSS полный справочник (4-е изд) (eng)",
  "author": "Эрик Мейер, Эстелл Уэйл",
  "pages": "1088",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2018,
    "title": "CSS The Definitive Guide (4th) (eng)",
    "author": "Eric Meyer, Estelle Weyl"
  }
}, {
  "id": 43,
  "year": 2021,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Наглядный CSS",
  "author": "Грег Сидельников",
  "pages": "224",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 43,
  "year": 2021,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Веб-дизайн для начинающих. HTML, CSS, jаvascript и веб-графика",
  "author": "Дженнифер Роббинс",
  "pages": "943",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 44,
  "year": 2021,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Шпаргалки для начинающего верстальщика",
  "author": "Елена Эберт",
  "pages": "103",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 45,
  "year": 2022,
  "category": "code",
  "theme": "HTML CSS",
  "title": "Отзывчивый дизайн на HTML5 и CSS3",
  "author": "Бен Фрэйн",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-jquery-en.js":
/*!********************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-jquery-en.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksJqueryEn: () => (/* binding */ dataBooksJqueryEn)
/* harmony export */ });
var dataBooksJqueryEn = [{
  "id": 1,
  "year": 2012,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery Succinctly (eng)",
  "author": "Cody Lindley",
  "pages": "101",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2014,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery UI in Action (eng)",
  "author": "Anmol Goyal",
  "pages": "378",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2014,
  "category": "library",
  "theme": "jquery",
  "title": "Developing Responsive Web Applications with AJAX and jQuery (eng)",
  "author": "Sandeep Kumar Patel",
  "pages": "248",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2015,
  "category": "library",
  "theme": "jquery",
  "title": "A Smarter Way to Learn jQuery (eng)",
  "author": "Mark Myers",
  "pages": "208",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2015,
  "category": "library",
  "theme": "jquery",
  "title": "Practical jQuery (eng)",
  "author": "Mukund Chaundhary, Ankur Kumar",
  "pages": "305",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2015,
  "category": "library",
  "theme": "jquery",
  "title": "JQuery in 8 Hours (eng)",
  "author": "Ray Yao",
  "pages": "815",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2015,
  "category": "library",
  "theme": "jquery",
  "title": "A Simple Start to jQuery, JavaScript, and HTML5 (eng)",
  "author": "Scott Sanderson",
  "pages": "586",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2015,
  "category": "library",
  "theme": "jquery",
  "title": "Mastering jQuery UI (eng)",
  "author": "Vijay Joshi",
  "pages": "455",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2016,
  "category": "library",
  "theme": "jquery",
  "title": "Beyond jQuery (eng)",
  "author": "Ray Nicholus",
  "pages": "227",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2016,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery Mobile Web Development Essentials (3rd) (eng)",
  "author": "Raymond Camden, Andy Matthews",
  "pages": "421",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2016,
  "category": "library",
  "theme": "jquery",
  "title": "ASP NET jQuery Cookbook (2nd) (eng)",
  "author": "Sonal Aneel Allana",
  "pages": "478",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2016,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery Essentials (eng)",
  "author": "Troy Miles",
  "pages": "286",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2016,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery Web Application Library (eng)",
  "author": "Tutorialspoint",
  "pages": "339",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2016,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery 1.7 (eng)",
  "author": "Visual Cheat Sheet",
  "pages": "8",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2017,
  "category": "library",
  "theme": "jquery",
  "title": "Beginning jQuery (2nd) (eng)",
  "author": "Jack Franklin",
  "pages": "180",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2017,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery Mobile (eng)",
  "author": "Tutorial Point",
  "pages": "83",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2018,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery (eng)",
  "author": "Notes for Professionals",
  "pages": "67",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-jquery.js":
/*!*****************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-jquery.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksJquery: () => (/* binding */ dataBooksJquery)
/* harmony export */ });
var dataBooksJquery = [{
  "id": 1,
  "year": 2010,
  "category": "library",
  "theme": "jquery",
  "title": "Изучаем jQuery 1.3",
  "author": "Джонатан Чаффер",
  "pages": "448",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2010,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery. Новый стиль программирования на JavaScript",
  "author": "Николай Прохоренок",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2011,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery. Сборник рецептов (2е)",
  "author": "Геннадий Самков",
  "pages": "416",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2012,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery учебник для начинающих",
  "author": "Антон Шевчук",
  "pages": "122",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2012,
  "category": "library",
  "theme": "jquery",
  "title": "HeadFirst jQuery",
  "author": "Райан Бенедетти",
  "pages": "528",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2012,
  "category": "library",
  "theme": "jquery",
  "title": "Изучаем jQuery (2е)",
  "author": "Эрл Каслдайн",
  "pages": "400",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2013,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery для профессионалов",
  "author": "Адам Фримен",
  "pages": "960",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2013,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery Mobile Разработка приложений для смартфонов и планшетов",
  "author": "Максимилиано Фритман",
  "pages": "256",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2014,
  "category": "library",
  "theme": "jquery",
  "title": "Расширение библиотеки jQuery",
  "author": "Кит Вуд",
  "pages": "400",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2015,
  "category": "library",
  "theme": "jquery",
  "title": "JavaScript и jQuery исчерпывающее руководство (3е)",
  "author": "Дэвид Макфарланд",
  "pages": "880",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2015,
  "category": "library",
  "theme": "jquery",
  "title": "Разработка интерактивных сайтов jQuery",
  "author": "Перепелица",
  "pages": "142",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2016,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery для начинающих",
  "author": "Антон Шевчук",
  "pages": "156",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2017,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery в действии (3е)",
  "author": "Беэр Бибо, Иегуда Кац",
  "pages": "528",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2017,
  "category": "library",
  "theme": "jquery",
  "title": "JavaScript и jQuery. Интерактивная разработка",
  "author": "Джон Дакетт",
  "pages": "640",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2018,
  "category": "library",
  "theme": "jquery",
  "title": "jQuery для начинающих",
  "author": "Антон Шевчук",
  "pages": "269",
  "isLearned": true,
  "dateLearned": "2021-09-27 пн"
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-js-en.js":
/*!****************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-js-en.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksJsEn: () => (/* binding */ dataBooksJsEn)
/* harmony export */ });
var dataBooksJsEn = [{
  "id": 1,
  "year": 2014,
  "category": "code",
  "theme": "javascript",
  "title": "Full Stack JavaScript Development with MEAN (eng)",
  "author": "Adam Bretz",
  "pages": "320",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2014,
  "category": "code",
  "theme": "javascript",
  "title": "Speaking JavaScript (eng)",
  "author": "Axel Rauschmayer",
  "pages": "460",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2014,
  "category": "code",
  "theme": "javascript",
  "title": "Programming JavaScript Applications (eng)",
  "author": "Eric Elliott",
  "pages": "253",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2014,
  "category": "code",
  "theme": "javascript",
  "title": "The Principles of Object-Oriented JavaScript (eng)",
  "author": "Nicholas Zakas",
  "pages": "122",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript at Scale (eng)",
  "author": "Adam Boduch",
  "pages": "267",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "Beautiful JavaScript (eng)",
  "author": "Anton Kovalyov",
  "pages": "167",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript with Promises (eng)",
  "author": "Daniel Parker",
  "pages": "94",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "Learning Behavior-driven Development with JavaScript (eng)",
  "author": "Enrique Amodeo",
  "pages": "392",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "Engineering Front-End Web Apps with Plain JavaScript (eng)",
  "author": "Gerd Wagner",
  "pages": "149",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "Beginning JavaScript (5th) (eng)",
  "author": "Jeremy McPeak",
  "pages": "771",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "Web Animation using JavaScript (eng)",
  "author": "Julian Shapiro",
  "pages": "402",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Quick Syntax Reference (eng)",
  "author": "Mikael Olsson",
  "pages": "80",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript (6th) (eng)",
  "author": "Sasha Vodnik",
  "pages": "957",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "Reactive Programming with RxJS (eng)",
  "author": "Sergi Mansilla",
  "pages": "141",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Cookbook (2nd) (eng)",
  "author": "Shelley Powers",
  "pages": "633",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "Modern Programming Using Java and JavaScript (eng)",
  "author": "Adam Davis",
  "pages": "127",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "Mastering JavaScript Object Oriented Programming (eng)",
  "author": "Andrea Chiarelli",
  "pages": "287",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "Functional Programming in JavaScript (eng)",
  "author": "Luis Atencio",
  "pages": "274",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript For Web Designers (eng)",
  "author": "Mat Marquis",
  "pages": "141",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "Modern Programming Using Java and JavaScript (eng)",
  "author": "Narayan Prusty",
  "pages": "330",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript for .NET Developers (eng)",
  "author": "Ovais Mehboob, Ahmed Khan",
  "pages": "447",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "Modular Programming with JavaScript (eng)",
  "author": "Sasan Seydnejad",
  "pages": "274",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "Mastering JavaScript (eng)",
  "author": "Ved Antani",
  "pages": "255",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "Beginning Functional JavaScript (1st) (eng)",
  "author": "Anto Aravinth",
  "pages": "172",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "The JavaScript Way (eng)",
  "author": "Baptiste Pesquet",
  "pages": "184",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript by Example (eng)",
  "author": "Dani Akash",
  "pages": "310",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "ES6 for Humans (eng)",
  "author": "Deepak Grover",
  "pages": "148",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "Beginning Progressive Web App Development (eng)",
  "author": "Dennis Sheppard",
  "pages": "268",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Programming for absolute beginners (eng)",
  "author": "Elinda Lara",
  "pages": "106",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "Mastering Reactive JavaScript (eng)",
  "author": "Erich Oliveira",
  "pages": "300",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "Introducing JavaScript Game Development (eng)",
  "author": "Graeme Stuart",
  "pages": "211",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript mancy (eng)",
  "author": "Jaime Garcia",
  "pages": "424",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Recipes (eng)",
  "author": "Russ Ferguson",
  "pages": "391",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "Interactive Data Visualization for the Web (2nd) (eng)",
  "author": "Scott Murray",
  "pages": "472",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 36,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "Object Oriented JavaScript (3rd) (eng)",
  "author": "Ved Antani",
  "pages": "607",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 37,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "Beginning Functional JavaScript (2nd) (eng)",
  "author": "Anto Aravinth",
  "pages": "319",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "Modern JavaScript Web Development Cookbook (eng)",
  "author": "Federico Kereki",
  "pages": "632",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 39,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "Simplifying JavaScript (eng)",
  "author": "Joe Morgan",
  "pages": "330",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 40,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Cloud Native Development Cookbook (eng)",
  "author": "John Gilbert",
  "pages": "342",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 41,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript on things (eng)",
  "author": "Lyza Gardner",
  "pages": "628",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 42,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "Expert JavaScript (eng)",
  "author": "Mark Daggett",
  "pages": "235",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 43,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript (eng)",
  "author": "Notes for Professionals",
  "pages": "490",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 44,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "Reactive Programming with RxJS 5 (eng)",
  "author": "Sergi Mansilla",
  "pages": "187",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 45,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "Data Wrangling with JavaScript (eng)",
  "author": "Ashley Davis",
  "pages": "432",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 46,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "Building Microservices with JavaScript (eng)",
  "author": "Diogo Resende",
  "pages": "555",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 47,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Next (eng)",
  "author": "Raju Gandhi",
  "pages": "251",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 48,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Data Structures and Algorithms (eng)",
  "author": "Sammie Bae",
  "pages": "362",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 49,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Beginners (eng)",
  "author": "scorpio",
  "pages": "43",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 50,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Frameworks for Modern Web Development (2nd) (eng)",
  "author": "Sufyan bin Uzayr",
  "pages": "555",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 51,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript RegExp (eng)",
  "author": "Sundeep Agarwal",
  "pages": "59",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 52,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "Easy Learning Data Structures and Algorithms ES6+JS (eng)",
  "author": "Yang Hu",
  "pages": "250",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 53,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Deep Javascript Theory and techniques",
  "author": "Axel Rauschmayer",
  "pages": "50",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 54,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript The New Toys (eng)",
  "author": "Crowder",
  "pages": "588",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 55,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Javascript For Beginners (eng)",
  "author": "Enrique Sanchez",
  "pages": "127",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 56,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Mastering JavaScript Functional Programming (2nd) (eng)",
  "author": "Federico Kereki",
  "pages": "457",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 57,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Clean Code in JavaScript (eng)",
  "author": "James Padolsey",
  "pages": "527",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 58,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript for Gurus (eng)",
  "author": "Ockert Du Preez",
  "pages": "126",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 59,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Deep Learning with JavaScript (eng)",
  "author": "Shanqing Cai",
  "pages": "561",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 60,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Cookbook (3rd)",
  "author": "Adam Scott",
  "pages": "538",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 61,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "2015 You Don’t Know JS 1 Up & Going",
  "author": "Kyle Simpson",
  "pages": "87",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 62,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "2014 You Don’t Know JS 2 Scope and Closures",
  "author": "Kyle Simpson",
  "pages": "98",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 63,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "2014 You Don’t Know JS 3 this & Object Prototypes",
  "author": "Kyle Simpson",
  "pages": "173",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 64,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "2015 You Don’t Know JS 4 Types & Grammar",
  "author": "Kyle Simpson",
  "pages": "195",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 65,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "2015 You Don’t Know JS 5 Async & Performance",
  "author": "Kyle Simpson",
  "pages": "172",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 66,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "2016 You Don’t Know JS 6 ES6 and Beyond",
  "author": "Kyle Simpson",
  "pages": "278",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 67,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "advanced javascript visualized",
  "author": "Meet Patel",
  "pages": "282",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 68,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "Javascript for impatient programmers",
  "author": "Axel Rauschmayer",
  "pages": "375",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 69,
  "year": 2023,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript All-in-One For Dummies",
  "author": "Minnick Chris",
  "pages": "819",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-js.js":
/*!*************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-js.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksJs: () => (/* binding */ dataBooksJs)
/* harmony export */ });
var dataBooksJs = [{
  "id": 1,
  "year": 2011,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript шаблоны (рус)",
  "author": "Стоян Стефанов",
  "pages": 212,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2012,
  "category": "code",
  "theme": "javascript",
  "title": "Веб-приложения на JavaScript",
  "author": "Алекс Макоу",
  "pages": 288,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2012,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Сильные стороны",
  "author": "Дуглас Крокфорд",
  "pages": 176,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2012,
  "category": "code",
  "theme": "javascript",
  "title": "Web-программирование JavaScript",
  "author": "Зудилова, Буркова",
  "pages": 68,
  "isLearned": true,
  "dateLearned": "2022-05-31 вт"
}, {
  "id": 5,
  "year": 2012,
  "category": "code",
  "theme": "javascript",
  "title": "HeadFirst JavaScript",
  "author": "Майкл Моррисон",
  "pages": 608,
  "isLearned": true,
  "dateLearned": "2022-05-24 вт"
}, {
  "id": 6,
  "year": 2012,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Оптимизация производительности",
  "author": "Николас Закас",
  "pages": 256,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2013,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Карманный справочник (3е)",
  "author": "Дэвид Флэнаган",
  "pages": 320,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2013,
  "category": "code",
  "theme": "javascript",
  "title": "Сила JavaScript. 68 способов",
  "author": "Дэвид Херман",
  "pages": 288,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2013,
  "category": "code",
  "theme": "javascript",
  "title": "Графика на JavaScript",
  "author": "Рафаэлло Чекко",
  "pages": 272,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2014,
  "category": "code",
  "theme": "javascript",
  "title": "Сюрреализм на JavaScript",
  "author": "Алексей Бахирев",
  "pages": 228,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2014,
  "category": "code",
  "theme": "javascript",
  "title": "Создание игр на JavaScript",
  "author": "Арьян Эггес",
  "pages": 409,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2014,
  "category": "code",
  "theme": "javascript",
  "title": "Паттерны для масштабируемых JavaScript-приложений",
  "author": "Эдди Османи",
  "pages": 38,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "Конспект js-course",
  "author": "Конспект",
  "pages": 231,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript для профессиональных веб-разработчиков (3е)",
  "author": "Николас Закас",
  "pages": 960,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2015,
  "category": "code",
  "theme": "javascript",
  "title": "HeadFirst Программирование на JavaScript",
  "author": "Эрик Фримен, Элизабет Робсон",
  "pages": 640,
  "isLearned": true,
  "dateLearned": "2021-10-01 пт",
  "origin": {
    "year": 2014,
    "title": "Head First - JavaScript Programming (eng)",
    "author": "Eric Freeman, Elisabeth Robson",
    "pages": 704
  }
}, {
  "id": 16,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript для профессионалов (2е)",
  "author": "Джон Резиг",
  "pages": 240,
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2016,
    "title": "Pro JavaScript Techniques (2nd)",
    "author": "John Resig",
    "pages": 193
  }
}, {
  "id": 17,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "ИНТУИТ - Основы JavaScript",
  "author": "ИНТУИТ",
  "pages": 185,
  "isLearned": true,
  "dateLearned": "2022-06-06 пн"
}, {
  "id": 18,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "ИНТУИТ - Основы программирования на JavaScript (2е)",
  "author": "Кан",
  "pages": 168,
  "isLearned": true,
  "dateLearned": "2022-06-10 пт"
}, {
  "id": 19,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "Введение в ECMAScript 6",
  "author": "Нараян Прасти",
  "pages": 178,
  "isLearned": true,
  "dateLearned": "2023-03-18 сб",
  "origin": {
    "year": 2015,
    "title": "Learning ESMAScript 6 (eng)",
    "author": "Narayan Prusty",
    "pages": 202
  }
}, {
  "id": 20,
  "year": 2016,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript для детей. Самоучитель",
  "author": "Ник Морган",
  "pages": 288,
  "isLearned": true,
  "dateLearned": "2021-09-16 чт"
}, {
  "id": 21,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "Секреты JavaScript ниндзя (2е)",
  "author": "Джон Резиг",
  "pages": 544,
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2016,
    "title": "Secrets of the JavaScript Ninja (2nd) (eng)",
    "author": "John Resig",
    "pages": 468
  }
}, {
  "id": 22,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript в примерах",
  "author": "Кингсли-Хью",
  "pages": 272,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript для чайников",
  "author": "Крис Минник",
  "pages": 320,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "ECMAScript 6 для разработчиков",
  "author": "Николас Закас",
  "pages": 352,
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2016,
    "title": "Understanding Ecmascript 6 (eng)",
    "author": "Nicholas Zakas",
    "pages": 355
  }
}, {
  "id": 25,
  "year": 2017,
  "category": "code",
  "theme": "javascript",
  "title": "Изучаем JavaScript (3е)",
  "author": "Этан Браун",
  "pages": 368,
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2016,
    "title": "Learning JavaScript (3rd) (eng)",
    "author": "Ethan Brown",
    "pages": 364
  }
}, {
  "id": 26,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "Функциональное программирование на JavaScript",
  "author": "Луис Атенсио",
  "pages": 304,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2018,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript на примерах",
  "author": "Никольский",
  "pages": 272,
  "isLearned": false,
  "dateLearned": "",
  "oldEdition": {
    "year": 2017,
    "pages": 272
  }
}, {
  "id": 28,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "Учимся кодить на JavaScript",
  "author": "Джереми Мориц",
  "pages": 256,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "Как устроен JavaScript",
  "author": "Дуглас Крокфорд",
  "pages": 304,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "Введение в веб-разработку на JS",
  "author": "Илья Государев",
  "pages": 141,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "Выразительный JavaScript (3е)",
  "author": "Марейн Хавербек",
  "pages": 482,
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2018,
    "title": "Eloquent JavaScript (3rd) (eng)",
    "author": "Marijn Haverbeke",
    "pages": 448
  },
  "oldEdition": {
    "year": 2015,
    "title": "Выразительный JavaScript (2е)",
    "pages": 745
  }
}, {
  "id": 32,
  "year": 2019,
  "category": "code",
  "theme": "javascript",
  "title": "Рефакторинг кода на JavaScript (2e)",
  "author": "Мартин Фаулер",
  "pages": 464,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Клиентские технологии веб-программирования: JаvaScript и DOM",
  "author": "Андрей Диков",
  "pages": 124,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript для FrontEnd разработчиков",
  "author": "Андрей Кириченко",
  "pages": 320,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Javascript. Основы программирования",
  "author": "Попов",
  "pages": 116,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 36,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Бессерверные приложения на JavaScript",
  "author": "Слободан Стоянович",
  "pages": 394,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 37,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Разработка программных комплексов на языке JavaScript",
  "author": "Солодушкин",
  "pages": 136,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2020,
  "category": "code",
  "theme": "javascript",
  "title": "Веб-компоненты в действии",
  "author": "Фаррелл",
  "pages": 462,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 39,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Разработка на JavaScript",
  "author": "Адам Скотт",
  "pages": 320,
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2020,
    "title": "JavaScript Everywhere",
    "author": "Adam Scott",
    "pages": 50
  }
}, {
  "id": 40,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Web-программирование на javascript",
  "author": "Андрей Диков",
  "pages": 169,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 41,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Полное руководство (7е)",
  "author": "Дэвид Флэнаган",
  "pages": 720,
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2020,
    "title": "JavaScript. The Definitive Guide (7th)",
    "author": "David Flanagan",
    "pages": 707
  },
  "oldEdition": {
    "year": 2012,
    "title": "JavaScript. Полное руководство (6е)",
    "pages": 1080
  }
}, {
  "id": 42,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Полное руководство (7е) (eng)",
  "author": "Дэвид Флэнаган",
  "pages": "720",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2020,
    "title": "JavaScript. The Definitive Guide (7th)",
    "author": "David Flanagan",
    "pages": 707
  }
}, {
  "id": 43,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Вы не знаете JS 1 Приступим",
  "author": "Кайл Симпсон",
  "pages": 64,
  "isLearned": true,
  "dateLearned": "2021-09-15 ср"
}, {
  "id": 44,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Вы не знаете JS 2 Область видимости и замыкания",
  "author": "Кайл Симпсон",
  "pages": 59,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 45,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Вы не знаете JS 2 и 3 Замыкания и объекты",
  "author": "Кайл Симпсон",
  "pages": 336,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 46,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Вы не знаете JS 4 Типы и грамматические конструкции",
  "author": "Кайл Симпсон",
  "pages": 240,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 47,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Вы не знаете JS 5 Асинхронная обработка и оптимизация",
  "author": "Кайл Симпсон",
  "pages": 352,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 48,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Вы не знаете JS 6 ES6 и не только",
  "author": "Кайл Симпсон",
  "pages": 336,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 49,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Современный JavaScript для нетерпеливых",
  "author": "Кей Хорстман",
  "pages": 288,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 50,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript с нуля",
  "author": "Кирупа Чиннатхамби",
  "pages": 400,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 51,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "Справочник Javascript",
  "author": "Никольский",
  "pages": 306,
  "isLearned": true,
  "dateLearned": "2022-05-24 вт"
}, {
  "id": 52,
  "year": 2021,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript для глубокого обучения",
  "author": "Франсуа Шолле",
  "pages": 576,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 53,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "Программирование на JavaScript в примерах и задачах",
  "author": "Алексей Васильев",
  "pages": 722,
  "isLearned": false,
  "dateLearned": "",
  "oldEdition": {
    "year": 2022,
    "pages": 721
  }
}, {
  "id": 54,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript и PHP. Content management system",
  "author": "Валерий Янцев",
  "pages": 191,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 55,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Визуальные редакторы",
  "author": "Валерий Янцев",
  "pages": 168,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 56,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Готовые программы",
  "author": "Валерий Янцев",
  "pages": 201,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 57,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Как писать программы",
  "author": "Валерий Янцев",
  "pages": 199,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 58,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Картинки, галереи, слайдеры",
  "author": "Валерий Янцев",
  "pages": 252,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 59,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Обработка событий на примерах",
  "author": "Валерий Янцев",
  "pages": 175,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 60,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "Javascript дополнительные уроки",
  "author": "Владимир Дронов",
  "pages": 354,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 61,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "Введение в веб-разработку на языке JavaScript",
  "author": "Илья Государев",
  "pages": 142,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 62,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript для профессиональных веб-разработчиков (4е)",
  "author": "Мэтт Фрисби",
  "pages": 1219,
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2020,
    "title": "Professional JavaScript for Web Developers (4th) (eng)",
    "author": "Matt Frisbie",
    "pages": 1177
  }
}, {
  "id": 63,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "Разработка игр на языке JavaScript",
  "author": "Сергей Беляев",
  "pages": "151",
  "isLearned": false,
  "dateLearned": "",
  "oldEdition": {
    "year": 2020,
    "title": "Разработка игр на языке JavaScript",
    "pages": 128
  },
  "oldEdition2": {
    "year": 2016,
    "title": "Разработка игр на языке JavaScript",
    "pages": 128,
    "isLearned": true,
    "dateLearned": "2022-06-02 чт"
  }
}, {
  "id": 64,
  "year": 2022,
  "category": "code",
  "theme": "javascript",
  "title": "Многопоточный JavaScript",
  "author": "Хантер",
  "pages": 190,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 65,
  "year": 2023,
  "category": "code",
  "theme": "javascript",
  "title": "JS часть 1 Язык JavaScript",
  "author": "Илья Кантор",
  "pages": 778,
  "isLearned": false,
  "dateLearned": "",
  "oldEdition": {
    "year": 2021,
    "pages": 756,
    "isLearned": true,
    "dateLearned": "2023-05-24 ср"
  },
  "oldEdition2": {
    "year": 2019,
    "pages": 731
  }
}, {
  "id": 66,
  "year": 2023,
  "category": "code",
  "theme": "javascript",
  "title": "JS часть 2 Браузер: документ, события, интерфейсы",
  "author": "Илья Кантор",
  "pages": 320,
  "isLearned": false,
  "dateLearned": "",
  "oldEdition": {
    "year": 2021,
    "pages": 315
  },
  "oldEdition2": {
    "year": 2019,
    "pages": 309
  }
}, {
  "id": 67,
  "year": 2023,
  "category": "code",
  "theme": "javascript",
  "title": "JS часть 3 Дополнительные статьи",
  "author": "Илья Кантор",
  "pages": 474,
  "isLearned": false,
  "dateLearned": "",
  "oldEdition": {
    "year": 2021,
    "pages": 474
  },
  "oldEdition2": {
    "year": 2019,
    "pages": 478
  }
}, {
  "id": 68,
  "year": 2023,
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript с нуля до профи",
  "author": "Лоренс Свекис",
  "pages": 480,
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 69,
  "year": 2023,
  "category": "code",
  "theme": "javascript",
  "title": "Jаvascript для начинающих",
  "author": "Майк МакГрат",
  "pages": 232,
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-node-en.js":
/*!******************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-node-en.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksNodeEn: () => (/* binding */ dataBooksNodeEn)
/* harmony export */ });
var dataBooksNodeEn = [{
  "id": 1,
  "year": 2014,
  "category": "npm",
  "theme": "node",
  "title": "Learn JavaScript and Node.js (eng)",
  "author": "Seth Vincent",
  "pages": "52",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2015,
  "category": "npm",
  "theme": "node",
  "title": "Node.js in Practice (eng)",
  "author": "Alex Young",
  "pages": "426",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2015,
  "category": "npm",
  "theme": "node",
  "title": "Node.js High Performance (eng)",
  "author": "Diogo Resende",
  "pages": "136",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2015,
  "category": "npm",
  "theme": "node",
  "title": "The Node Craftsman Book (eng)",
  "author": "Manuel Kiessling",
  "pages": "170",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2015,
  "category": "npm",
  "theme": "node",
  "title": "Web Development with MongoDB and Node.js (2nd) (eng)",
  "author": "Mithun Satheesh",
  "pages": "301",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2015,
  "category": "npm",
  "theme": "node",
  "title": "Deploying Node.js (eng)",
  "author": "Sandro Pasquali",
  "pages": "274",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2015,
  "category": "npm",
  "theme": "node",
  "title": "Learning Node.js for Mobile (eng)",
  "author": "Stefan Buttigieg",
  "pages": "248",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2015,
  "category": "npm",
  "theme": "node",
  "title": "RESTful Web API Design with Node.js (eng)",
  "author": "Valentin Bojinov",
  "pages": "152",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2016,
  "category": "npm",
  "theme": "node",
  "title": "Building APIs with Node.js (eng)",
  "author": "Caio Pereira",
  "pages": "142",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2016,
  "category": "npm",
  "theme": "node",
  "title": "Node.JS 6.x Blueprints (eng)",
  "author": "Fernando Monteiro",
  "pages": "369",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2016,
  "category": "npm",
  "theme": "node",
  "title": "Node.js Design Patterns (2nd) (eng)",
  "author": "Mario Casciaro",
  "pages": "520",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2016,
  "category": "npm",
  "theme": "node",
  "title": "Learning Node (2nd) (eng)",
  "author": "Shelley Powers",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2017,
  "category": "npm",
  "theme": "node",
  "title": "Node.js for Embedded Systems (eng)",
  "author": "Patrick Mulder",
  "pages": "264",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Learning Node.js Development (eng)",
  "author": "Andrew Mead",
  "pages": "649",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Practical Node.js, (2nd) (eng)",
  "author": "Azat Mardan",
  "pages": "519",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Node.js, MongoDB and Angular (2nd) (eng)",
  "author": "Brad Dayley",
  "pages": "108",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Node.js Web Development (4th) (eng)",
  "author": "David Herron",
  "pages": "731",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "REST API Development with Node.js (2nd) (eng)",
  "author": "Fernando Doglio",
  "pages": "331",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Scaling Your Node.js Apps (eng)",
  "author": "Fernando Doglio",
  "pages": "170",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Node.js 8 the Right Way (eng)",
  "author": "Jim Wilson",
  "pages": "323",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Node.js (eng)",
  "author": "Notes For Professionals",
  "pages": "334",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "9 Practical Node.js Projects (eng)",
  "author": "sitepoint",
  "pages": "260",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2019,
  "category": "npm",
  "theme": "node",
  "title": "Fullstack Node.js (eng)",
  "author": "David Guttman",
  "pages": "258",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2019,
  "category": "npm",
  "theme": "node",
  "title": "A Progressive Node.js Framework (eng)",
  "author": "Greg Magolan",
  "pages": "313",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2019,
  "category": "npm",
  "theme": "node",
  "title": "Get Programming with Node.js (eng)",
  "author": "Jonathan Wexler",
  "pages": "482",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2019,
  "category": "npm",
  "theme": "node",
  "title": "Web Development with Node and Express (eng)",
  "author": "Max Beerbohm",
  "pages": "81",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2020,
  "category": "npm",
  "theme": "node",
  "title": "Distributed Systems with Node.js (eng)",
  "author": "Thomas Hunter",
  "pages": "637",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-node.js":
/*!***************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-node.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksNode: () => (/* binding */ dataBooksNode)
/* harmony export */ });
var dataBooksNode = [{
  "id": 1,
  "year": 2012,
  "category": "npm",
  "theme": "node",
  "title": "Node.js. Разработка серверных веб-приложений на JavaScript",
  "author": "Дэвид Хэррон",
  "pages": "146",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2015,
  "category": "npm",
  "theme": "node",
  "title": "Node.js. Путеводитель по технологии",
  "author": "Кирилл Сухов",
  "pages": "420",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2017,
  "category": "npm",
  "theme": "node",
  "title": "Учусь node.js",
  "author": "stackoverflow",
  "pages": "441",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2017,
    "title": "Learning Node.js",
    "author": "stackoverflow"
  }
}, {
  "id": 4,
  "year": 2017,
  "category": "npm",
  "theme": "node",
  "title": "Учусь node.js (eng)",
  "author": "stackoverflow",
  "pages": "441",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2017,
    "title": "Learning Node.js",
    "author": "stackoverflow"
  }
}, {
  "id": 5,
  "year": 2017,
  "category": "npm",
  "theme": "node",
  "title": "Веб разработка Node и Express",
  "author": "Итан Браун",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2017,
  "category": "npm",
  "theme": "node",
  "title": "Шаблоны проектирования Node.JS (2-е изд)",
  "author": "Марио Каскиаро",
  "pages": "397",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2016,
    "title": "Node.js Design Patterns",
    "author": "Mario Casciaro"
  }
}, {
  "id": 7,
  "year": 2017,
  "category": "npm",
  "theme": "node",
  "title": "Шаблоны проектирования Node.JS (2-е изд) (eng)",
  "author": "Марио Каскиаро",
  "pages": "520",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2016,
    "title": "Node.js Design Patterns",
    "author": "Mario Casciaro"
  }
}, {
  "id": 8,
  "year": 2017,
  "category": "npm",
  "theme": "node",
  "title": "Изучаем Node (2-е изд)",
  "author": "Шелли Пауэрс",
  "pages": "304",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2016,
    "title": "Learning Node (2nd)",
    "author": "Shelley Powers"
  }
}, {
  "id": 9,
  "year": 2017,
  "category": "npm",
  "theme": "node",
  "title": "Изучаем Node (2-е изд) (eng)",
  "author": "Шелли Пауэрс",
  "pages": "288",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2016,
    "title": "Learning Node (2nd)",
    "author": "Shelley Powers"
  }
}, {
  "id": 10,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Руководство по Node.js",
  "author": "ruvds",
  "pages": "121",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2018,
  "category": "npm",
  "theme": "node",
  "title": "Node.JS в действии (2-е изд)",
  "author": "Майк Кантелон",
  "pages": "432",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2021,
  "category": "npm",
  "theme": "node",
  "title": "Веб разработка с применением Node и Express (2-е изд)",
  "author": "Итан Браун",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-php-en.js":
/*!*****************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-php-en.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksPhpEn: () => (/* binding */ dataBooksPhpEn)
/* harmony export */ });
var dataBooksPhpEn = [{
  "id": 1,
  "year": 2016,
  "category": "code",
  "theme": "php",
  "title": "PHP and MySQL Recipes (2nd) (eng)",
  "author": "Frank Kromann",
  "pages": "386",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2018,
  "category": "code",
  "theme": "php",
  "title": "Learn SQL in one day (eng)",
  "author": "Jamie Chan",
  "pages": "175",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2018,
  "category": "code",
  "theme": "php",
  "title": "PHP (eng)",
  "author": "Notes For Professionals",
  "pages": "481",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2019,
  "category": "code",
  "theme": "php",
  "title": "Web programming for business PHP (eng)",
  "author": "David Paper",
  "pages": "413",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2019,
  "category": "code",
  "theme": "php",
  "title": "Learning PHP, MySQL & JavaScript (6th)",
  "author": "Robin Nixon",
  "pages": "828",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-php.js":
/*!**************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-php.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksPhp: () => (/* binding */ dataBooksPhp)
/* harmony export */ });
var dataBooksPhp = [{
  "id": 1,
  "year": 2010,
  "category": "code",
  "theme": "php",
  "title": "Web 2.0. Создание приложений на PHP",
  "author": "Квентин Зервас",
  "pages": "544",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2010,
  "category": "code",
  "theme": "php",
  "title": "HeadFirst Изучаем PHP и MySQL",
  "author": "Линн Бейли, Майкл Моррисон",
  "pages": "786",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2010,
  "category": "code",
  "theme": "php",
  "title": "PHP 5.6",
  "author": "Максим Кузнецов, Игорь Симдянов",
  "pages": "1024",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2010,
  "category": "code",
  "theme": "php",
  "title": "PHP и MySQL. Библия программиста (2е)",
  "author": "Стив Суэринг",
  "pages": "912",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2011,
  "category": "code",
  "theme": "php",
  "title": "PHP и jQuery для профессионалов",
  "author": "Джейсон Ленгсторф",
  "pages": "352",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2011,
  "category": "code",
  "theme": "php",
  "title": "PHP MySQL XML Программирование для интернета (3е)",
  "author": "Елена Бенкен",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2011,
  "category": "code",
  "theme": "php",
  "title": "PHP и MySQL. Создание интернет-магазина (2е)",
  "author": "Кристиан Дари",
  "pages": "640",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2012,
  "category": "code",
  "theme": "php",
  "title": "PHP это просто",
  "author": "Дмитрий Ляпин",
  "pages": "176",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2012,
  "category": "code",
  "theme": "php",
  "title": "PHP на примерах (2е)",
  "author": "Максим Кузнецов",
  "pages": "400",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2013,
  "category": "code",
  "theme": "php",
  "title": "PHP и MySQL от новичка к профессионалу",
  "author": "Кевин Янк",
  "pages": "384",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2014,
  "category": "code",
  "theme": "php",
  "title": "PHP для начинающих",
  "author": "Александр Жадаев",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2014,
  "category": "code",
  "theme": "php",
  "title": "PHP и MySQL. Исчерпывающее руководство (2е)",
  "author": "Бретт Маклафлин",
  "pages": "544",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2014,
  "category": "code",
  "theme": "php",
  "title": "128 рецептов PHP",
  "author": "Евгений Ипатов",
  "pages": "152",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2015,
  "category": "code",
  "theme": "php",
  "title": "PHP и MySQL Разработка Web-приложений (5е)",
  "author": "Денис Колисниченко",
  "pages": "592",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2015,
  "category": "code",
  "theme": "php",
  "title": "PHP. Рецепты программирования (3е)",
  "author": "Дэвид Скляр",
  "pages": "784",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2015,
  "category": "code",
  "theme": "php",
  "title": "PHP и MySQL. Cоздание интернет-магазинов (2е)",
  "author": "Ларри Ульман",
  "pages": "545",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2016,
  "category": "code",
  "theme": "php",
  "title": "PHP 7",
  "author": "Дмитрий Котеров",
  "pages": "1071",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2016,
  "category": "code",
  "theme": "php",
  "title": "Руководство по PHP",
  "author": "Peter Cowburn",
  "pages": "432",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2017,
  "category": "code",
  "theme": "php",
  "title": "Изучаем РНР 7",
  "author": "Дэвид Скляр",
  "pages": "464",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2017,
  "category": "code",
  "theme": "php",
  "title": "Разработка веб-приложений с помощью PHP и MySQL (5е)",
  "author": "Люк Веллинг, Лора Томсон",
  "pages": "770",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2018,
  "category": "code",
  "theme": "php",
  "title": "PHP 7 для начинающих",
  "author": "Майкл МакГрат",
  "pages": "256",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2018,
  "category": "code",
  "theme": "php",
  "title": "Самоучитель PHP 7",
  "author": "Максим Кузнецов",
  "pages": "448",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2019,
  "category": "code",
  "theme": "php",
  "title": "РНР. Объекты, шаблоны и методики программирования (5е)",
  "author": "Мэтт Зандстра",
  "pages": "736",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2019,
  "category": "code",
  "theme": "php",
  "title": "Учусь PHP",
  "author": "tutorial",
  "pages": "645",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2021,
  "category": "code",
  "theme": "php",
  "title": "PHP и MySQL. 25 уроков для начинающих",
  "author": "Дронов",
  "pages": "434",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2021,
  "category": "code",
  "theme": "php",
  "title": "Создаем динамические веб-сайты на PHP (4е)",
  "author": "Кевин Татро",
  "pages": "544",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-python-en.js":
/*!********************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-python-en.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksPythonEn: () => (/* binding */ dataBooksPythonEn)
/* harmony export */ });
var dataBooksPythonEn = [{
  "id": 1,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Tkinter GUI Application Development Blueprints",
  "author": "Bhaskar Chaudhary",
  "pages": "340",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Data Science Fundamentals for Python and MongoDB",
  "author": "David Paper",
  "pages": "220",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Head First Learn to Code",
  "author": "Eric Freeman",
  "pages": "640",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Python Data Analytics (2nd)",
  "author": "Fabio Nelli",
  "pages": "576",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "The Python Language Reference",
  "author": "Guido Rossum",
  "pages": "165",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Fundamentals of Python (2nd)",
  "author": "Kenneth Lambert",
  "pages": "498",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Python Graphics",
  "author": "Korites",
  "pages": "365",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Good Habits for Great Coding",
  "author": "Michael Stueben",
  "pages": "323",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Flask Mega Tutorial",
  "author": "Miguel Grinberg",
  "pages": "349",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "wxPython Recipes",
  "author": "Mike Driscoll",
  "pages": "357",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "The Quick Python Book (3rd)",
  "author": "Naomi Ceder",
  "pages": "473",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Python",
  "author": "Notes For Professionals",
  "pages": "816",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Make Your Own Python Text Adventure",
  "author": "Phillip Johnson",
  "pages": "156",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "PySpark Recipes",
  "author": "Raju Mishra",
  "pages": "280",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Build Better Chatbots",
  "author": "Rashid Khan",
  "pages": "113",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Web Scraping with Python (2nd)",
  "author": "Ryan Mitchell",
  "pages": "306",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Introduction to Python for Engineers and Scientists",
  "author": "Sandeep Nagar",
  "pages": "264",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Practical Docker with Python",
  "author": "Sathyajith Bhat",
  "pages": "195",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Advanced Data Analytics Using Python",
  "author": "Sayan Mukhopadhyay",
  "pages": "195",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Python for Bioinformatics (2nd)",
  "author": "Sebastian Bassi",
  "pages": "451",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Practical Web Scraping for Data Science",
  "author": "Seppe Broucke",
  "pages": "313",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Practical Python AI Projects",
  "author": "Serge Kruk",
  "pages": "287",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Starting Out with Python (4th)",
  "author": "Tony Gaddis",
  "pages": "748",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Learn Python The Hard Way (4th)",
  "author": "Zed Shaw",
  "pages": "345",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "The Python Workshop",
  "author": "Andrew Bird",
  "pages": "606",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Pro Python 3",
  "author": "Burton Browning",
  "pages": "468",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python for Programmers",
  "author": "Deitel",
  "pages": "810",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python Crash Course (2nd)",
  "author": "Eric Matthes",
  "pages": "548",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python Deep Learning (2nd)",
  "author": "Ivan Vasilev",
  "pages": "379",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Data Science from Scratch (2nd)",
  "author": "Joel Grus",
  "pages": "485",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Serious Python",
  "author": "Julien Danjou",
  "pages": "242",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Expert Python Programming (3rd)",
  "author": "Michal Jaworski",
  "pages": "629",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python Continuous Integration and Delivery",
  "author": "Moritz Lenz",
  "pages": "204",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "PyTorch Recipes",
  "author": "Pradeepta Mishra",
  "pages": "198",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Practical Cryptography in Python",
  "author": "Seth Nielson",
  "pages": "380",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 36,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Effective Python (2nd)",
  "author": "Bratt Slatkin",
  "pages": "472",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 37,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Intro to Python for Computer Science",
  "author": "Deitel",
  "pages": "887",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Programming For Computations - Python (2nd)",
  "author": "Svein Linge",
  "pages": "350",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-python.js":
/*!*****************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-python.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksPython: () => (/* binding */ dataBooksPython)
/* harmony export */ });
var dataBooksPython = [{
  "id": 1,
  "year": 2011,
  "category": "code",
  "theme": "python",
  "title": "Программирование на Python (4е) 1 том",
  "author": "Марк Лутц",
  "pages": "992",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2011,
  "category": "code",
  "theme": "python",
  "title": "Программирование на Python (4е) 2 том",
  "author": "Марк Лутц",
  "pages": "992",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2011,
  "category": "code",
  "theme": "python",
  "title": "PyQt Создание оконных приложений на Python 3",
  "author": "Николай Прохоренок",
  "pages": "243",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2011,
  "category": "code",
  "theme": "python",
  "title": "Python самое необходимое",
  "author": "Николай Прохоренок",
  "pages": "416",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2012,
  "category": "code",
  "theme": "python",
  "title": "Python глазами хакера",
  "author": "Джастин Сейтц",
  "pages": "208",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2012,
  "category": "code",
  "theme": "python",
  "title": "Python 3 и PyQT Разработка приложений",
  "author": "Николай Прохоренок",
  "pages": "704",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2014,
  "category": "code",
  "theme": "python",
  "title": "Основы программирования на языке Python",
  "author": "Буйначев",
  "pages": "91",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2014,
  "category": "code",
  "theme": "python",
  "title": "Программируем на Python (3е)",
  "author": "Майкл Доусон",
  "pages": "416",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2014,
  "category": "code",
  "theme": "python",
  "title": "Python на практике",
  "author": "Марк Саммерфилд",
  "pages": "338",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2015,
  "category": "code",
  "theme": "python",
  "title": "Самоучитель Python",
  "author": "Дмитрий Мусин",
  "pages": "136",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2015,
  "category": "code",
  "theme": "python",
  "title": "Программирование для детей Scratch и Python",
  "author": "Кэрол Вордерман",
  "pages": "224",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2015,
  "category": "code",
  "theme": "python",
  "title": "Программирование на Python для начинающих",
  "author": "Майк МакГратт",
  "pages": "192",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2015,
  "category": "code",
  "theme": "python",
  "title": "Python Карманный справочник (5е)",
  "author": "Марк Лутц",
  "pages": "320",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2015,
  "category": "code",
  "theme": "python",
  "title": "Python и анализ данных",
  "author": "Уэс Маккинни",
  "pages": "482",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2015,
  "category": "code",
  "theme": "python",
  "title": "Python создание приложений (3е)",
  "author": "Уэсли Чан",
  "pages": "816",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Простой Python",
  "author": "Билл Любанович",
  "pages": "480",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Секреты Python",
  "author": "Бретт Слаткин",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Python на примерах",
  "author": "Васильев",
  "pages": "432",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Построение систем машинного обучения на языке Python (2е)",
  "author": "Луис Коэльо",
  "pages": "302",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Python. К вершинам мастерства",
  "author": "Лучано Ромальо",
  "pages": "768",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Python и PyQt Разработка приложений",
  "author": "Николай Прохоренок",
  "pages": "832",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Python Самое необходимое",
  "author": "Николай Прохоренок",
  "pages": "460",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Скрапинг веб-сайтов с помощью Python",
  "author": "Райан Митчелл",
  "pages": "280",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Введение в программирование на Python (2е)",
  "author": "Северенс",
  "pages": "232",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Язык программирования Python (2е)",
  "author": "Сузи",
  "pages": "352",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Hello World! Занимательное программирование",
  "author": "Сэнд",
  "pages": "400",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2016,
  "category": "code",
  "theme": "python",
  "title": "Программирование компьютерного зрения на языке Python",
  "author": "Ян Солем",
  "pages": "312",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Введение в машинное обучение с помощью Python",
  "author": "Андреас Мюллер",
  "pages": "393",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Python для детей и родителей",
  "author": "Брайсон Пэйн",
  "pages": "352",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Python для детей",
  "author": "Джейсон Бриггс",
  "pages": "320",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Самоучитель Python",
  "author": "Дмитрий Мусин",
  "pages": "154",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Основы Data Science и Big Data. Python и наука о данных",
  "author": "Дэви Силен",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Легкий способ выучить Python (3е)",
  "author": "Зед Шоу",
  "pages": "352",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Основы программирования на языке Python (1е)",
  "author": "Златопольский",
  "pages": "284",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Программируем с Minecraft с помощью Python",
  "author": "Крэйг Ричардсон",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 36,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "HeadFirst Python (2е)",
  "author": "Пол Бэрри",
  "pages": "624",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 37,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Программирование на языке Python",
  "author": "Роберт Седжвик",
  "pages": "736",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Python и машинное обучение",
  "author": "Себастьян Рашка",
  "pages": "418",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 39,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Автоматизация при помощи Python",
  "author": "Эл Свейгарт",
  "pages": "592",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 40,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Разработка геоприложений на языке Python",
  "author": "Эрик Вестра",
  "pages": "446",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 41,
  "year": 2017,
  "category": "code",
  "theme": "python",
  "title": "Изучаем Python",
  "author": "Эрик Мэтиз",
  "pages": "496",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 42,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Байесовские модели на Python",
  "author": "Аллен Дауни",
  "pages": "182",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 43,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Python для сложных задач",
  "author": "Вандер Плас",
  "pages": "576",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 44,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Python. Разработка на основе тестирования",
  "author": "Гарри Персиваль",
  "pages": "624",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 45,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Чистый Python",
  "author": "Дэн Бейдер",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 46,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Основы программирования на языке Python (2е)",
  "author": "Златопольский",
  "pages": "396",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 47,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Сам себе программист",
  "author": "Кори Альтхофф",
  "pages": "210",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 48,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Программирование с нуля на языке Python",
  "author": "Сысоев",
  "pages": "180",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 49,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Основы программирования на Python",
  "author": "Федоров",
  "pages": "167",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 50,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Tkinter. Программирование GUI на Python",
  "author": "Шапошникова",
  "pages": "84",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 51,
  "year": 2018,
  "category": "code",
  "theme": "python",
  "title": "Учим Python делая крутые игры (4е)",
  "author": "Эл Свейгарт",
  "pages": "418",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 52,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python. Уроки (2е)",
  "author": "Абдрахманов",
  "pages": "157",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 53,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python. Справочник",
  "author": "Алекс Мартелли",
  "pages": "898",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 54,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Изучение сложных систем с помощью Python",
  "author": "Аллен Дауни",
  "pages": "160",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 55,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Прикладной анализ текстовых данных на Python",
  "author": "Бенджамин Бенгфорт",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 56,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Стандартная библиотека Python 3 (2е)",
  "author": "Даг Хеллман",
  "pages": "1375",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 57,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python для чайников (2е)",
  "author": "Джон Мюллер",
  "pages": "418",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 58,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python. Книга рецептов",
  "author": "Дэвид Бизли",
  "pages": "648",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 59,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Вероятностное программирование на Python",
  "author": "Дэвидсон-Пайлон",
  "pages": "256",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 60,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Язык программирования Python",
  "author": "Жуков",
  "pages": "216",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 61,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Машинное обучение с Python",
  "author": "Крис Элбон",
  "pages": "386",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 62,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Изучение робототехники с использованием Python",
  "author": "Лентин Джозеф",
  "pages": "250",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 63,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Изучаем Python Том 1 (5е)",
  "author": "Марк Лутц",
  "pages": "832",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 64,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Как устроен Python",
  "author": "Мэтт Харрисон",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 65,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python. Экспресс-курс (3е)",
  "author": "Наоми Седер",
  "pages": "480",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 66,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python 3 и PyQt 5 (2е)",
  "author": "Николай Прохоренок",
  "pages": "832",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 67,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python 3. Самое необходимое (2е)",
  "author": "Николай Прохоренок",
  "pages": "610",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 68,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Искусственный интеллект на Python",
  "author": "Пратик Джоши",
  "pages": "450",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 69,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Простой Python просто с нуля",
  "author": "Рик Гаско",
  "pages": "258",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 70,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Начинаем программировать на Python (4е)",
  "author": "Тони Гэддис",
  "pages": "770",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 71,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Программирование на Python",
  "author": "Федоров",
  "pages": "126",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 72,
  "year": 2019,
  "category": "code",
  "theme": "python",
  "title": "Python для детей",
  "author": "Шуман",
  "pages": "344",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 73,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Алгоритмы обучения с подкреплением на Python",
  "author": "Андреа Лонца",
  "pages": "286",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 74,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Знакомство с PyTorch",
  "author": "Брайан Макмахан",
  "pages": "256",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 75,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Python. Искусственный интеллект",
  "author": "Дейтел",
  "pages": "864",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 76,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Путь Python",
  "author": "Джульен Данжу",
  "pages": "258",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 77,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Классические задачи Computer Science на языке Python",
  "author": "Дэвид Копец",
  "pages": "258",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 78,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Изучаем Python Том 2 (5е)",
  "author": "Марк Лутц",
  "pages": "722",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 79,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Python. Непрерывная интеграция и доставка",
  "author": "Мориц Ленц",
  "pages": "168",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 80,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Машинное обучение на Python",
  "author": "Мэтт Харрисон",
  "pages": "322",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 81,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Байесовский анализ на Python",
  "author": "Освальдо Мартин",
  "pages": "340",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 82,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Изучаем Python",
  "author": "Эрик Мэтиз",
  "pages": "512",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 83,
  "year": 2020,
  "category": "code",
  "theme": "python",
  "title": "Эволюционные нейросети на языке Python",
  "author": "Ярослав Омельяненко",
  "pages": "310",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 84,
  "year": 2021,
  "category": "code",
  "theme": "python",
  "title": "Секреты Python Pro",
  "author": "Дейн Хиллард",
  "pages": "320",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 85,
  "year": 2021,
  "category": "code",
  "theme": "python",
  "title": "Непрактичный Python",
  "author": "Ли Воган",
  "pages": "466",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 86,
  "year": 2021,
  "category": "code",
  "theme": "python",
  "title": "Python для сетевых инженеров",
  "author": "Наташа Самойленко",
  "pages": "766",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-react-en.js":
/*!*******************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-react-en.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksReactEn: () => (/* binding */ dataBooksReactEn)
/* harmony export */ });
var dataBooksReactEn = [{
  "id": 1,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "Beginning React (eng)",
  "author": "Andrea Chiarelli",
  "pages": "208",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "Learning React Native (2nd) (eng)",
  "author": "Bonnie Eisenman",
  "pages": "248",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "React Cookbook (eng)",
  "author": "Carlos Roldan",
  "pages": "569",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "Practical React Native (eng)",
  "author": "Frank Zammetti",
  "pages": "342",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "React Native Cookbook (eng)",
  "author": "Jonathan Lebensold",
  "pages": "173",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "The complete beginners guide to React (eng)",
  "author": "Kristen Dyrr",
  "pages": "89",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "Thinking in Redux (eng)",
  "author": "Nir Kaufman",
  "pages": "54",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "React JS (eng)",
  "author": "Notes For Professionals",
  "pages": "110",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "React Native (eng)",
  "author": "Notes For Professionals",
  "pages": "91",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "Full-Stack React Projects (eng)",
  "author": "Shama Hoque",
  "pages": "460",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "React d3 v4 (eng)",
  "author": "Swizec Teller",
  "pages": "249",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "Pro React 16 (eng)",
  "author": "Adam Freeman",
  "pages": "750",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "React Native for Mobile Development (2nd) (eng)",
  "author": "Akshat Paul",
  "pages": "243",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "Delightful React (eng)",
  "author": "Bhargav Ponnapalli",
  "pages": "90",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "ASP.NET Core 3 and React (eng)",
  "author": "Carl Rippon",
  "pages": "768",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "React Design Patterns and Best Practices (2nd) (eng)",
  "author": "Carlos Roldan",
  "pages": "338",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "Mastering React Test-Driven Development (eng)",
  "author": "Daniel Irvine",
  "pages": "483",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "Pure React (4th) (eng)",
  "author": "Dave Ceddia",
  "pages": "244",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "React Native in Action (eng)",
  "author": "Nader Dabit",
  "pages": "321",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2020,
  "category": "framework",
  "theme": "react",
  "title": "FullStack React (eng)",
  "author": "Anthony Accomazzo",
  "pages": "1028",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2020,
  "category": "framework",
  "theme": "react",
  "title": "Full Stack React, TypeScript, and Node (eng)",
  "author": "David Choi",
  "pages": "648",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2020,
  "category": "framework",
  "theme": "react",
  "title": "30 days of react (eng)",
  "author": "fullstack",
  "pages": "290",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2020,
  "category": "framework",
  "theme": "react",
  "title": "The Ultimate Beginner's Guide to Learn React.js (1st) (eng)",
  "author": "John Bach",
  "pages": "153",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2020,
  "category": "framework",
  "theme": "react",
  "title": "Building React Apps with Server-Side Rendering (eng)",
  "author": "Mohit Thakkar",
  "pages": "202",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2021,
  "category": "framework",
  "theme": "react",
  "title": "React Up and Running (2nd) (eng)",
  "author": "Stoyan Stefanov",
  "pages": "77",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-react.js":
/*!****************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-react.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksReact: () => (/* binding */ dataBooksReact)
/* harmony export */ });
var dataBooksReact = [{
  "id": 1,
  "year": 2017,
  "category": "framework",
  "theme": "react",
  "title": "React.js. Быстрый старт",
  "author": "Стоян Стефанов",
  "pages": "304",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "React и Redux",
  "author": "Алекс Бэнкс",
  "pages": "336",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "React.js для начинающих (2е)",
  "author": "Пацианский",
  "pages": "147",
  "isLearned": true,
  "dateLearned": "2022-07-27 ср"
}, {
  "id": 4,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "Основы Redux",
  "author": "Пацианский",
  "pages": "102",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "Путь к изучению React",
  "author": "Робин Верух",
  "pages": "231",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2018,
  "category": "framework",
  "theme": "react",
  "title": "Путь к изучению React (eng)",
  "author": "Робин Верух",
  "pages": "231",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "React быстро",
  "author": "Азат Мардан",
  "pages": "560",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "React быстро (eng)",
  "author": "Азат Мардан",
  "pages": "560",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "Учебный курс по React",
  "author": "Боб Зиролл",
  "pages": "278",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "Изучаем React (2е)",
  "author": "Кирупа Чиннатамби",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2019,
  "category": "framework",
  "theme": "react",
  "title": "React в действии",
  "author": "Марк Томас",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-ts-en.js":
/*!****************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-ts-en.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksTsEn: () => (/* binding */ dataBooksTsEn)
/* harmony export */ });
var dataBooksTsEn = [{
  "id": 1,
  "year": 2015,
  "category": "code",
  "theme": "typescript",
  "title": "Mastering TypeScript (eng)",
  "author": "Nathan Rozentals",
  "pages": "364",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2015,
  "category": "code",
  "theme": "typescript",
  "title": "Learning TypeScript (eng)",
  "author": "Remo Jansen",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2016,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript Modern JavaScript Development (eng)",
  "author": "Packt",
  "pages": "833",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2016,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript Design Patterns (eng)",
  "author": "Vilic Vane",
  "pages": "249",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2017,
  "category": "code",
  "theme": "typescript",
  "title": "Getting Started with TypeScript (eng)",
  "author": "Thomas Guber",
  "pages": "94",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2018,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript Deep Dive (eng)",
  "author": "Basarat",
  "pages": "334",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2018,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript, React and NodeJs (eng)",
  "author": "Net Knowledge Vol5",
  "pages": "193",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2018,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript, React and Redux (eng)",
  "author": "Net Knowledge Vol6",
  "pages": "177",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2018,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript (eng)",
  "author": "Notes For Professionals",
  "pages": "97",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2018,
  "category": "code",
  "theme": "typescript",
  "title": "Pro TypeScript (eng)",
  "author": "Steve Fenton",
  "pages": "304",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2019,
  "category": "code",
  "theme": "typescript",
  "title": "Essential TypeScript From Beginner To Pro (eng)",
  "author": "Adam Freeman",
  "pages": "551",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2019,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript - The Complete Beginners Guide (eng)",
  "author": "Max Beerbohm",
  "pages": "167",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2019,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript Quickly (eng)",
  "author": "Yakov Fain",
  "pages": "520",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2020,
  "category": "code",
  "theme": "typescript",
  "title": "Effective TypeScript (eng)",
  "author": "Dan Vanderkam",
  "pages": "93",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2020,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript in 50 Lessons (eng)",
  "author": "Stefan Baumgartner",
  "pages": "466",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2021,
  "category": "code",
  "theme": "typescript",
  "title": "Tackling Typescript",
  "author": "Axel Rauschmayer",
  "pages": "67",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-ts.js":
/*!*************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-ts.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksTs: () => (/* binding */ dataBooksTs)
/* harmony export */ });
var dataBooksTs = [{
  "id": 1,
  "year": 2019,
  "category": "code",
  "theme": "typescript",
  "title": "Изучаем TypeScript (3е)",
  "author": "Натан Розенталс",
  "pages": "625",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2020,
  "category": "code",
  "theme": "typescript",
  "title": "Эффективный TypeScript 62 способа улучшить код",
  "author": "Дэн Вандеркам",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2021,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript Подробное Руководство",
  "author": "beta",
  "pages": "732",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2021,
  "category": "code",
  "theme": "typescript",
  "title": "Профессиональный TypeScript",
  "author": "Борис Черный",
  "pages": "352",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2021,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript быстро",
  "author": "Яков Файн",
  "pages": "528",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2019,
    "title": "TypeScript quickly (eng)",
    "author": "Yakov Fain"
  }
}, {
  "id": 6,
  "year": 2021,
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript быстро (eng)",
  "author": "Яков Файн",
  "pages": "528",
  "isLearned": false,
  "dateLearned": "",
  "origin": {
    "year": 2019,
    "title": "TypeScript quickly (eng)",
    "author": "Yakov Fain"
  }
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-vue-en.js":
/*!*****************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-vue-en.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksVueEn: () => (/* binding */ dataBooksVueEn)
/* harmony export */ });
var dataBooksVueEn = [{
  "id": 1,
  "year": 2016,
  "category": "framework",
  "theme": "vue",
  "title": "The Majesty Of Vue.js (eng)",
  "author": "Alex Kyriakidis",
  "pages": "145",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2016,
  "category": "framework",
  "theme": "vue",
  "title": "Learning Vue.js 2 (eng)",
  "author": "Olga Filipova",
  "pages": "383",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2017,
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js 2 Cookbook (eng)",
  "author": "Andrea Passaglia",
  "pages": "445",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2017,
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js 2 Web Development Projects (eng)",
  "author": "Guillaume Chau",
  "pages": "445",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2017,
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js 2 and Bootstrap 4 Web Development (eng)",
  "author": "Olga Filipova",
  "pages": "310",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2017,
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js 2 Basics (eng)",
  "author": "Tony Lea",
  "pages": "49",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2018,
  "category": "framework",
  "theme": "vue",
  "title": "Pro Vue.js 2 (eng)",
  "author": "Adam Freeman",
  "pages": "728",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2018,
  "category": "framework",
  "theme": "vue",
  "title": "Full stack web development with Vue.js and Node (eng)",
  "author": "Aneeta Sharma",
  "pages": "358",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2018,
  "category": "framework",
  "theme": "vue",
  "title": "Getting to Know Vue.js (eng)",
  "author": "Brett Nelson",
  "pages": "268",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2018,
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js Up and Running (eng)",
  "author": "Callum Macrae",
  "pages": "173",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2018,
  "category": "framework",
  "theme": "vue",
  "title": "Fullstack Vue (eng)",
  "author": "Hassan Djirdeh",
  "pages": "439",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2018,
  "category": "framework",
  "theme": "vue",
  "title": "Complete Vue.js 2 Web Development (eng)",
  "author": "Mike Street",
  "pages": "693",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2019,
  "category": "framework",
  "theme": "vue",
  "title": "Vue on Rails (eng)",
  "author": "Bryan Lim",
  "pages": "198",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2019,
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js - Tools and Skills (eng)",
  "author": "James Hibbard",
  "pages": "103",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2019,
  "category": "framework",
  "theme": "vue",
  "title": "Working with Vue.js (eng)",
  "author": "James Hibbard",
  "pages": "170",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2020,
  "category": "framework",
  "theme": "vue",
  "title": "Building Progressive Web Applications with Vue.js (eng)",
  "author": "Carlos Rojas",
  "pages": "242",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2020,
  "category": "framework",
  "theme": "vue",
  "title": "Fullstack Vue (Revision 13) eng",
  "author": "Hassan Djirdeh",
  "pages": "625",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-vue.js":
/*!**************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-vue.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksVue: () => (/* binding */ dataBooksVue)
/* harmony export */ });
var dataBooksVue = [{
  "id": 1,
  "year": 2019,
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js в действии",
  "author": "Эрик Хэнчетт",
  "pages": "306",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-web-en.js":
/*!*****************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-web-en.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksWebEn: () => (/* binding */ dataBooksWebEn)
/* harmony export */ });
var dataBooksWebEn = [{
  "id": 1,
  "year": 2016,
  "category": "other",
  "theme": "web",
  "title": "Sams Teach Yourself HTML, CSS and JavaScript Web Publishing in One Hour a Day (7th)",
  "author": "Laura Lemay, Rafe Coburn, Jennifer Kyrnin",
  "pages": "1471",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2017,
  "category": "other",
  "theme": "web",
  "title": "Developing for the Web With HTML CSS JS PHP (eng)",
  "author": "Laura Ubelhor, Christian Hur",
  "pages": "930",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2017,
  "category": "other",
  "theme": "web",
  "title": "Pro HTML5 with CSS, JavaScript, and Multimedia: Complete Website Development and Best Practices",
  "author": "Mark Collins",
  "pages": "568",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2017,
  "category": "other",
  "theme": "web",
  "title": "Coding",
  "author": "Nikhil Abraham",
  "pages": "768",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2018,
  "category": "other",
  "theme": "web",
  "title": "HTML5 and JavaScript Projects (2nd)",
  "author": "Jeanine Meyer",
  "pages": "432",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2018,
  "category": "other",
  "theme": "web",
  "title": "Learning web design HTML CSS JavaScript (5th)",
  "author": "Jennifer Robbins",
  "pages": "810",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2018,
  "category": "other",
  "theme": "web",
  "title": "PHP MySQL JavaScript (6th) (eng)",
  "author": "Julie Meloni",
  "pages": "1625",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2018,
  "category": "other",
  "theme": "web",
  "title": "Web Coding & Development All-in-One for Dummies (eng)",
  "author": "Paul McFedries",
  "pages": "843",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2018,
  "category": "other",
  "theme": "web",
  "title": "PHP MySQL JavaScript For Dummies (eng)",
  "author": "Richard Blum",
  "pages": "795",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2019,
  "category": "other",
  "theme": "web",
  "title": "Front-end Developer Handbook (eng)",
  "author": "Cody Lindley",
  "pages": "145",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2019,
  "category": "other",
  "theme": "web",
  "title": "Frameworkless Front-End Development (eng)",
  "author": "Francesco Strazzullo",
  "pages": "257",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2019,
  "category": "other",
  "theme": "web",
  "title": "The Guide Of HTML5 and JavaScript Programming for Beginners (eng)",
  "author": "Jeanine Meyer",
  "pages": "480",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2019,
  "category": "other",
  "theme": "web",
  "title": "Web Programming with HTML CSS JavaScript (eng)",
  "author": "John Dean",
  "pages": "699",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/data/data-books-web.js":
/*!**************************************************************!*\
  !*** ./src/components/front-books/js/data/data-books-web.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBooksWeb: () => (/* binding */ dataBooksWeb)
/* harmony export */ });
var dataBooksWeb = [{
  "id": 1,
  "year": 2007,
  "category": "other",
  "theme": "web",
  "title": "Фриланс Когда сам себе начальник",
  "author": "Анна Мурадова",
  "pages": "92",
  "isLearned": true,
  "dateLearned": "2021-07-21 ср"
}, {
  "id": 3,
  "year": 2010,
  "category": "other",
  "theme": "web",
  "title": "HeadFirst Изучаем веб-дизайн",
  "author": "Этан Вотролл, Джефф Сьярто",
  "pages": "496",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2010,
  "category": "other",
  "theme": "web",
  "title": "Веб дизайн",
  "author": "Якоб Нильсен",
  "pages": "496",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2010,
  "category": "other",
  "theme": "web",
  "title": "Веб дизайн. Анализ по движению глаз",
  "author": "Якоб Нильсен",
  "pages": "480",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2011,
  "category": "other",
  "theme": "web",
  "title": "SEO искусство раскрутки сайтов",
  "author": "Эрик Энж",
  "pages": "592",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2012,
  "category": "other",
  "theme": "web",
  "title": "Как самому создать сайт",
  "author": "Алексей Гладкий",
  "pages": "250",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2012,
  "category": "other",
  "theme": "web",
  "title": "Отзывчивый веб-дизайн",
  "author": "Итан Маркотт",
  "pages": "112",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2012,
  "category": "other",
  "theme": "web",
  "title": "Веб дизайн",
  "author": "Патрик Макнейл",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2013,
  "category": "other",
  "theme": "web",
  "title": "Веб дизайн",
  "author": "Дмитрий Кирсанов",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2013,
  "category": "other",
  "theme": "web",
  "title": "Контентная стратегия для мобильных устройств",
  "author": "Карен Макгрейн",
  "pages": "224",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2013,
  "category": "other",
  "theme": "web",
  "title": "Веб-программирование",
  "author": "Романчик",
  "pages": "407",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2013,
  "category": "other",
  "theme": "web",
  "title": "Современный веб-дизайн (2е)",
  "author": "Сырых",
  "pages": "368",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2013,
  "category": "other",
  "theme": "web",
  "title": "Книга веб-программиста",
  "author": "Хоган",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2014,
  "category": "other",
  "theme": "web",
  "title": "Разработка одностраничных веб приложений",
  "author": "Майкл Миковски",
  "pages": "512",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2014,
  "category": "other",
  "theme": "web",
  "title": "Создание сайта от начала и до конца",
  "author": "Михаил Русаков",
  "pages": "172",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2014,
  "category": "other",
  "theme": "web",
  "title": "Веб дизайн",
  "author": "Патрик Макнейл",
  "pages": "288",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2015,
  "category": "other",
  "theme": "web",
  "title": "Основы разработки веб-приложений",
  "author": "Сэмми Пьюривал",
  "pages": "272",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2016,
  "category": "other",
  "theme": "web",
  "title": "Введение в технологии создания Интернет-узлов (2е)",
  "author": "ИНТУИТ, Полубояров",
  "pages": "489",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2016,
  "category": "other",
  "theme": "web",
  "title": "Основы клиентской оптимизации (2е)",
  "author": "ИНТУИТ, Мациевский",
  "pages": "300",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2016,
  "category": "other",
  "theme": "web",
  "title": "Основы работы с XHTML и CSS",
  "author": "ИНТУИТ, Д.Р.Адамс, К.С.Флойд",
  "pages": "568",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2017,
  "category": "other",
  "theme": "web",
  "title": "Frontend клиентская разработка",
  "author": "Крис Аквино",
  "pages": "512",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2017,
  "category": "other",
  "theme": "web",
  "title": "Идеальный Landing Page",
  "author": "Петроченков",
  "pages": "316",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2018,
  "category": "other",
  "theme": "web",
  "title": "Создание web страниц",
  "author": "Рамазанова",
  "pages": "133",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2019,
  "category": "other",
  "theme": "web",
  "title": "Путь фрилансера",
  "author": "Артем Исламов",
  "pages": "218",
  "isLearned": true,
  "dateLearned": "2021-07-02 пт"
}, {
  "id": 30,
  "year": 2019,
  "category": "other",
  "theme": "web",
  "title": "Основы дизайна и композиции",
  "author": "Павловская",
  "pages": "184",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2019,
  "category": "other",
  "theme": "web",
  "title": "HTML, JavaScript, PHP и MySQL (5е)",
  "author": "Прохоренок",
  "pages": "912",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2019,
  "category": "other",
  "theme": "web",
  "title": "Создаем динамические веб-сайты с помощью PHP, MySQL, JavaScript, CSS и HTML5 (5е)",
  "author": "Робин Никсон",
  "pages": "816",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2020,
  "category": "other",
  "theme": "web",
  "title": "Проектирование и разработка web-приложений (2е)",
  "author": "Заяц, Васильев",
  "pages": "119",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2023,
  "category": "other",
  "theme": "web",
  "title": "Создаем динамические веб-сайты с помощью PHP, MySQL, JavaScript, CSS и HTML5 (6е)",
  "author": "Робин Никсон",
  "pages": "832",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-books/js/f-create-category.js":
/*!************************************************************!*\
  !*** ./src/components/front-books/js/f-create-category.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCategory: () => (/* binding */ createCategory)
/* harmony export */ });
/*****************
Функция createCategory принимает массив input, создает и возвращает объект category
*****************/
/*
Алгоритм работы
1. Импортируем массивы из файлов data-books.js...
2. Создаем объект dataFrontBooks
3. В объект dataFrontBooks добавим свойство inputArrays и запишем в него массив импортированных массивов
4. В объект dataFrontBooks добавим свойство allBooks и запишем в него массив всех книг
5. В объект dataFrontBooks добавим свойство category для массива с категориями
5. В объект dataFrontBooks добавим свойство learned для массива с изученными книгами
6. Проходим по массиву всех книг
  6.1 Если у книги есть категория и этой категории нет в массиве категорий то добавить
  6.2 Если у книги есть тема и этой темы нет в данной категории то добавить
  6.3 Если есть категория и тема то в тему добавить объект с книгой
  6.4 Если книга имеет свойство isLearned === true, то добавляем ее в массив dataFrontBooks.learned
7. Экспортируем объект dataFrontBooks
*/

function createCategory(data) {
  //4. Создаем объект result
  var result = {};
  result.result = {};
  result.learned = [];

  //6. Проходим по массиву data
  data.forEach(function (elem) {
    //6.1 Если у книги есть категория и этой категории нет в массиве категорий то добавить
    if (elem.category && !(elem.category in result.result)) {
      result.result[elem.category] = {};
    }

    //6.2 Если у книги есть тема и этой темы нет в данной категории то добавить
    if (elem.theme && !(elem.theme in result.result[elem.category])) {
      result.result[elem.category][elem.theme] = [];
    }

    //6.3 Если есть категория и тема то в тему добавить объект с книгой
    if (elem.category && elem.theme) {
      result.result[elem.category][elem.theme].push(elem);
    }

    //6.4 Если книга имеет свойство isLearned === true, то добавляем ее в массив learned
    if (elem.isLearned === true) {
      result.learned.push(elem);
    }
  });

  //9. Возвращаем объект result
  return result;
}

/***/ }),

/***/ "./src/components/front-books/js/f-create-elem-main-nav.js":
/*!*****************************************************************!*\
  !*** ./src/components/front-books/js/f-create-elem-main-nav.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElemMainNav: () => (/* binding */ createElemMainNav)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/*****************
Функция createElemMainNav принимает объект elements, создает и возвращает элемент mainNav
*****************/
function createElemMainNav(data) {
  //1. Создадим элемент main-nav
  var mainNav = document.createElement('nav');
  mainNav.className = 'nav container';
  mainNav.id = 'main-nav';
  mainNav.append.apply(mainNav, _toConsumableArray(data.navDiv));

  //3. Создадим и вызовем событие click на первом mainNav эелементе
  var eventClick = new Event('click');
  data.navDiv[0].dispatchEvent(eventClick);
  return mainNav;
}

/***/ }),

/***/ "./src/components/front-books/js/f-create-elem-section.js":
/*!****************************************************************!*\
  !*** ./src/components/front-books/js/f-create-elem-section.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElemSection: () => (/* binding */ createElemSection)
/* harmony export */ });
/*****************
Функция createElemSection принимает объект elements, создает и возвращает элемент Section
*****************/

function createElemSection(data) {
  var elemSection = document.createElement('section');
  elemSection.className = 'main__aside container';
  elemSection.append(data.aside, data.main);
  return elemSection;
}

/***/ }),

/***/ "./src/components/front-books/js/f-create-elements.js":
/*!************************************************************!*\
  !*** ./src/components/front-books/js/f-create-elements.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElements: () => (/* binding */ createElements)
/* harmony export */ });
/* harmony import */ var _f_create_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-create-list.js */ "./src/components/front-books/js/f-create-list.js");
/* harmony import */ var _f_create_learned_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-create-learned-list.js */ "./src/components/front-books/js/f-create-learned-list.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/****************
Функция createElements принимает объект category, создает и возвращает массив elements
*******************/
/*
Алгоритм работы

*/



function createElements(data) {
  //временные переменные для хранения контента, который появится на странице
  var aside = document.createElement('aside');
  aside.className = 'aside';
  var main = document.createElement('main');
  main.className = 'list';
  var h2 = document.createElement('h2');
  var currentContent = document.createElement('ol');
  currentContent.id = 'books';

  //1. Создаем объект для main-nav, aside и main
  var elements = {};

  //2. Создаем main-nav
  //2.1 Создаем массив navDiv для элементов main-nav
  var navDiv = [];
  var _loop = function _loop(category) {
    //2.2 Создаем элемент elementNav для каждой категории
    var elementNav = document.createElement('a');
    elementNav.href = "#";
    elementNav.innerHTML = category;

    //2.3 Добавляем элемент elementNav в массив navDiv
    navDiv.push(elementNav);

    //3. Создаем aside меню
    //3.1 Создаем массив asideDiv для элементов aside меню
    var asideDiv = [];
    var _loop2 = function _loop2(theme) {
      //3.2 Создаем элемент elementAside для каждой темы
      var elementAside = document.createElement('a');
      elementAside.href = "#";
      elementAside.innerHTML = theme;

      //3.3 Добавляем элемент elementAside в массив asideDiv
      asideDiv.push(elementAside);

      //4. Создаем контент для main
      //4.1 Создаем массив mainDiv для элементов main
      var mainDiv = [];
      var _iterator = _createForOfIteratorHelper(data.result[category][theme]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var content = _step.value;
          //4.2 Добавим в массив mainDiv массив с фильмами
          mainDiv.push(content);
        }

        //4.3 Создаем элемент elementsMain для каждой темы
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var elementMain = (0,_f_create_list_js__WEBPACK_IMPORTED_MODULE_0__.createList)(mainDiv);

      //5. По клику на элемент aside меню
      elementAside.addEventListener('click', function (e) {
        e.preventDefault();

        //5.1 добавим ему class="active"
        classActive(asideDiv, elementAside);

        //5.2 показываем нужный заголовок h2
        h2.innerHTML = theme;

        //5.3 показываем нужный main
        currentContent.innerHTML = '';
        currentContent.append.apply(currentContent, _toConsumableArray(elementMain));
      });
    };
    for (var theme in data.result[category]) {
      _loop2(theme);
    }

    //6. По клику на элемент main-nav
    elementNav.addEventListener('click', function (e) {
      e.preventDefault();

      //6.1 добавим ему class="active"
      classActive(navDiv, elementNav);

      //6.2 показываем нужный aside
      aside.innerHTML = '';
      aside.append.apply(aside, asideDiv);

      //показываем элемент aside меню
      aside.classList.remove('none');

      //7. Создадим и вызовем событие click на первом aside эелементе
      var eventClick = new Event('click');
      asideDiv[0].dispatchEvent(eventClick);
    });
  };
  for (var category in data.result) {
    _loop(category);
  }

  //4. Добавим в navDiv пункт меню learned
  addLearned();
  //mainNav.append(...navDiv);

  //6. Функция addLearned добавляет в main-nav элемент Learned
  function addLearned() {
    var elementNav = document.createElement('a');
    elementNav.href = "#";
    elementNav.innerHTML = 'Learned';
    navDiv.push(elementNav);
    var elementMain = (0,_f_create_learned_list_js__WEBPACK_IMPORTED_MODULE_1__.createLearnedList)(data.learned);

    //По клику на элемент Learned
    elementNav.addEventListener('click', function (e) {
      e.preventDefault();

      //добавим ему class="active"
      classActive(navDiv, elementNav);

      //показываем нужный заголовок h2
      h2.innerHTML = 'Прочитанные книги';

      //скрываем элемент aside меню
      aside.classList.add('none');

      //показываем нужный main
      currentContent.innerHTML = '';
      currentContent.append.apply(currentContent, _toConsumableArray(elementMain));
    });
  }

  //Ставим class="active" выбранному элементу меню и убираем с остальных
  function classActive(elementOl, elementLi) {
    elementOl.forEach(function (li) {
      li.classList.remove('active');
    });
    elementLi.classList.add('active');
  }
  main.append(h2, currentContent);
  elements.navDiv = navDiv;
  elements.aside = aside;
  elements.main = main;
  return elements;
}

/***/ }),

/***/ "./src/components/front-books/js/f-create-input.js":
/*!*********************************************************!*\
  !*** ./src/components/front-books/js/f-create-input.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInput: () => (/* binding */ createInput)
/* harmony export */ });
/* harmony import */ var _data_data_books_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data-books-base.js */ "./src/components/front-books/js/data/data-books-base.js");
/* harmony import */ var _data_data_books_base_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data-books-base-en.js */ "./src/components/front-books/js/data/data-books-base-en.js");
/* harmony import */ var _data_data_books_htmlcss_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data-books-htmlcss.js */ "./src/components/front-books/js/data/data-books-htmlcss.js");
/* harmony import */ var _data_data_books_htmlcss_en_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data-books-htmlcss-en.js */ "./src/components/front-books/js/data/data-books-htmlcss-en.js");
/* harmony import */ var _data_data_books_bootstrap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/data-books-bootstrap.js */ "./src/components/front-books/js/data/data-books-bootstrap.js");
/* harmony import */ var _data_data_books_bootstrap_en_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/data-books-bootstrap-en.js */ "./src/components/front-books/js/data/data-books-bootstrap-en.js");
/* harmony import */ var _data_data_books_js_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/data-books-js.js */ "./src/components/front-books/js/data/data-books-js.js");
/* harmony import */ var _data_data_books_js_en_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/data-books-js-en.js */ "./src/components/front-books/js/data/data-books-js-en.js");
/* harmony import */ var _data_data_books_jquery_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/data-books-jquery.js */ "./src/components/front-books/js/data/data-books-jquery.js");
/* harmony import */ var _data_data_books_jquery_en_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/data-books-jquery-en.js */ "./src/components/front-books/js/data/data-books-jquery-en.js");
/* harmony import */ var _data_data_books_ts_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/data-books-ts.js */ "./src/components/front-books/js/data/data-books-ts.js");
/* harmony import */ var _data_data_books_ts_en_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/data-books-ts-en.js */ "./src/components/front-books/js/data/data-books-ts-en.js");
/* harmony import */ var _data_data_books_angular_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/data-books-angular.js */ "./src/components/front-books/js/data/data-books-angular.js");
/* harmony import */ var _data_data_books_angular_en_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/data-books-angular-en.js */ "./src/components/front-books/js/data/data-books-angular-en.js");
/* harmony import */ var _data_data_books_react_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/data-books-react.js */ "./src/components/front-books/js/data/data-books-react.js");
/* harmony import */ var _data_data_books_react_en_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data/data-books-react-en.js */ "./src/components/front-books/js/data/data-books-react-en.js");
/* harmony import */ var _data_data_books_vue_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data/data-books-vue.js */ "./src/components/front-books/js/data/data-books-vue.js");
/* harmony import */ var _data_data_books_vue_en_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data/data-books-vue-en.js */ "./src/components/front-books/js/data/data-books-vue-en.js");
/* harmony import */ var _data_data_books_node_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data/data-books-node.js */ "./src/components/front-books/js/data/data-books-node.js");
/* harmony import */ var _data_data_books_node_en_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data/data-books-node-en.js */ "./src/components/front-books/js/data/data-books-node-en.js");
/* harmony import */ var _data_data_books_web_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data/data-books-web.js */ "./src/components/front-books/js/data/data-books-web.js");
/* harmony import */ var _data_data_books_web_en_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data/data-books-web-en.js */ "./src/components/front-books/js/data/data-books-web-en.js");
/* harmony import */ var _data_data_books_php_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./data/data-books-php.js */ "./src/components/front-books/js/data/data-books-php.js");
/* harmony import */ var _data_data_books_php_en_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./data/data-books-php-en.js */ "./src/components/front-books/js/data/data-books-php-en.js");
/* harmony import */ var _data_data_books_python_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./data/data-books-python.js */ "./src/components/front-books/js/data/data-books-python.js");
/* harmony import */ var _data_data_books_python_en_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./data/data-books-python-en.js */ "./src/components/front-books/js/data/data-books-python-en.js");
var _ref;
/*****************
Функция createInput создает inputArray
*****************/

//1. Импортируем массивы из файлов data-books.js...



























//2. Создаем массив dataArray для импортированных массивов
var dataArray = [_data_data_books_base_js__WEBPACK_IMPORTED_MODULE_0__.dataBooksBase, _data_data_books_base_en_js__WEBPACK_IMPORTED_MODULE_1__.dataBooksBaseEn, _data_data_books_htmlcss_js__WEBPACK_IMPORTED_MODULE_2__.dataBooksHtmlcss, _data_data_books_htmlcss_en_js__WEBPACK_IMPORTED_MODULE_3__.dataBooksHtmlcssEn, _data_data_books_bootstrap_js__WEBPACK_IMPORTED_MODULE_4__.dataBooksBootstrap, _data_data_books_bootstrap_en_js__WEBPACK_IMPORTED_MODULE_5__.dataBooksBootstrapEn, _data_data_books_js_js__WEBPACK_IMPORTED_MODULE_6__.dataBooksJs, _data_data_books_js_en_js__WEBPACK_IMPORTED_MODULE_7__.dataBooksJsEn, _data_data_books_jquery_js__WEBPACK_IMPORTED_MODULE_8__.dataBooksJquery, _data_data_books_jquery_en_js__WEBPACK_IMPORTED_MODULE_9__.dataBooksJqueryEn, _data_data_books_ts_js__WEBPACK_IMPORTED_MODULE_10__.dataBooksTs, _data_data_books_ts_en_js__WEBPACK_IMPORTED_MODULE_11__.dataBooksTsEn, _data_data_books_angular_js__WEBPACK_IMPORTED_MODULE_12__.dataBooksAngular, _data_data_books_angular_en_js__WEBPACK_IMPORTED_MODULE_13__.dataBooksAngularEn, _data_data_books_react_js__WEBPACK_IMPORTED_MODULE_14__.dataBooksReact, _data_data_books_react_en_js__WEBPACK_IMPORTED_MODULE_15__.dataBooksReactEn, _data_data_books_vue_js__WEBPACK_IMPORTED_MODULE_16__.dataBooksVue, _data_data_books_vue_en_js__WEBPACK_IMPORTED_MODULE_17__.dataBooksVueEn, _data_data_books_node_js__WEBPACK_IMPORTED_MODULE_18__.dataBooksNode, _data_data_books_node_en_js__WEBPACK_IMPORTED_MODULE_19__.dataBooksNodeEn, _data_data_books_web_js__WEBPACK_IMPORTED_MODULE_20__.dataBooksWeb, _data_data_books_web_en_js__WEBPACK_IMPORTED_MODULE_21__.dataBooksWebEn, _data_data_books_php_js__WEBPACK_IMPORTED_MODULE_22__.dataBooksPhp, _data_data_books_php_en_js__WEBPACK_IMPORTED_MODULE_23__.dataBooksPhpEn, _data_data_books_python_js__WEBPACK_IMPORTED_MODULE_24__.dataBooksPython, _data_data_books_python_en_js__WEBPACK_IMPORTED_MODULE_25__.dataBooksPythonEn];

//3. Создаем массив с книгами dataBooks из массива dataArray
var dataBooks = (_ref = []).concat.apply(_ref, dataArray);
function createInput() {
  return dataBooks;
}

/***/ }),

/***/ "./src/components/front-books/js/f-create-learned-list.js":
/*!****************************************************************!*\
  !*** ./src/components/front-books/js/f-create-learned-list.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLearnedList: () => (/* binding */ createLearnedList)
/* harmony export */ });
/*****************
Функция createLearnedList возвращает список элементов li с прочитанными книгами для элемента Learned меню
*****************/
/*
Алгоритм работы
1. Функция createLearnedList принимает массив прочитанных книг
2. Отсортируем книги по дате прочтения
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка книг
5. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/

//1. Функция createLearnedList принимает массив прочитанных книг
function createLearnedList(data) {
  //2. Отсортируем книги по дате прочтения
  data.sort(function (a, b) {
    //удалить всё, кроме цифр
    return a.dateLearned.replace(/[^0-9]/gi, '') - b.dateLearned.replace(/[^0-9]/gi, '');
  });

  //3. Создаем массив parentDiv для элементов li списка
  var parentDiv = [];
  var _loop = function _loop(i) {
    //4. Создадим элемент elementLi списка книг
    var elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);
    elementLi.innerHTML = "\n    <span>".concat(data[i].dateLearned, "</span>\n    <div><strong>[").concat(data[i].year, "] ").concat(data[i].title, "</strong></div>\n    <div><em>").concat(data[i].author, "</em></div>\n    <div>").concat(data[i].pages, " \u0441\u0442\u0440</div>\n    <div>\u0418\u0437\u0443\u0447\u0435\u043D\u043E ").concat(data[i].isLearned, "</div>\n    <div>").concat(origin(data[i]), "</div>");

    //5. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);
    function origin(book) {
      if (book.origin) {
        return "(\n        <strong>".concat(book.origin.title, "</strong>\n        - <em>").concat(book.origin.author, "</em>\n        )");
      } else {
        return '';
      }
    }
    function addColor() {
      elementLi.classList.add('over');
    }
    function removeColor() {
      elementLi.classList.remove('over');
    }
  };
  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
  return parentDiv;
}

/***/ }),

/***/ "./src/components/front-books/js/f-create-list.js":
/*!********************************************************!*\
  !*** ./src/components/front-books/js/f-create-list.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _sort_books_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-books.js */ "./src/components/front-books/js/sort-books.js");
/*****************
Функция createList возвращает список элементов li с книгами для элемента aside меню
*****************/
/*
Алгоритм работы
1. Функция createList принимает массив книг по одной теме
2. Отсортируем книги по году, автору и названию
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка книг
5. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/



//1. Функция createList принимает массив книг по одной теме
function createList(data) {
  //2. Отсортируем книги по году, автору и названию
  data = (0,_sort_books_js__WEBPACK_IMPORTED_MODULE_0__.sortBooks)(data);

  //3. Создаем массив parentDiv для элементов li списка
  var parentDiv = [];
  var _loop = function _loop(i) {
    //4. Создадим элемент elementLi списка книг
    var elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);
    elementLi.innerHTML = "\n    <strong>[".concat(data[i].year, "] ").concat(data[i].title, "</strong>\n    <div><em>").concat(data[i].author, "</em></div>\n    <div>").concat(data[i].pages, " \u0441\u0442\u0440</div>\n    <div>\u0418\u0437\u0443\u0447\u0435\u043D\u043E ").concat(data[i].isLearned, "</div>\n    <div>").concat(origin(data[i]), "</div>");

    //5. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);
    function origin(book) {
      if (book.origin) {
        return "(\n        <strong>".concat(book.origin.title, "</strong>\n        - <em>").concat(book.origin.author, "</em>\n        )");
      } else {
        return '';
      }
    }
    function addColor() {
      elementLi.classList.add('over');
    }
    function removeColor() {
      elementLi.classList.remove('over');
    }
  };
  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
  return parentDiv;
}

/***/ }),

/***/ "./src/components/front-books/js/sort-books.js":
/*!*****************************************************!*\
  !*** ./src/components/front-books/js/sort-books.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortBooks: () => (/* binding */ sortBooks)
/* harmony export */ });
/*****************
Функция sortBooks сортирует книги по году, автору и названию
*****************/
function sortBooks(books) {
  books = books.filter(function (el) {
    return el.title != undefined;
  });
  books.sort(function (a, b) {
    if (a.year === b.year) {
      //Если год одинаковый то сортировать по автору
      if (a.author === b.author) {
        //Если автор одинаковый то сортировать по названию
        return a.title.localeCompare(b.title, 'en');
      } else {
        //Иначе сортировать по автору
        return a.author.localeCompare(b.title, 'en');
      }
    } else {
      return a.year - b.year;
    }
  });
  return books;
}

/***/ }),

/***/ "./src/components/header/element-header.js":
/*!*************************************************!*\
  !*** ./src/components/header/element-header.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element_header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-header.html */ "./src/components/header/element-header.html");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Header = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Header, _HTMLElement);
  var _super = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super.call(this);
  }
  _createClass(Header, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = _element_header_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }]);
  return Header;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('header-component', Header);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");
/* harmony import */ var _element_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-header */ "./src/components/header/element-header.js");



/***/ }),

/***/ "./src/components/header/element-header.html":
/*!***************************************************!*\
  !*** ./src/components/header/element-header.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<header class=\"header container\" id=\"header\">\r\n  <div class=\"header__first-row\">\r\n    <div class=\"header__logo\">\r\n      <a href=\"https://github.com/frontend200tb\" target=\"_blank\">frontend200tb</a>\r\n    </div>\r\n    <div class=\"header__logo\">\r\n      <a href=\"https://frontend200tb.github.io/200tb/\" target=\"_blank\">frontend</a>\r\n    </div>\r\n  </div>\r\n</header>    ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _components_front_books_front_books__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/front-books/front-books */ "./src/components/front-books/front-books.js");




(0,_components_front_books_front_books__WEBPACK_IMPORTED_MODULE_3__.showFrontBooks)();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map