/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AbstractComponent.js":
/*!*********************************************!*\
  !*** ./src/components/AbstractComponent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");


class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (AbstractComponent);


/***/ }),

/***/ "./src/components/card-page-img.js":
/*!*****************************************!*\
  !*** ./src/components/card-page-img.js ***!
  \*****************************************/
/*! exports provided: createImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImg", function() { return createImg; });
const createImg = (img) => `<li><img src=${img}></li>`;


/***/ }),

/***/ "./src/components/card-page.js":
/*!*************************************!*\
  !*** ./src/components/card-page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComponent */ "./src/components/AbstractComponent.js");
/* harmony import */ var _card_page_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-page-img */ "./src/components/card-page-img.js");



const createCardPage = (card) => {
  const {title, price, sale, images, material} = card;

  const getImages = (pictures) => pictures.map((it) => Object(_card_page_img__WEBPACK_IMPORTED_MODULE_1__["createImg"])(it)).join(`\n`);

  return (
    `<section class="card-page">
      <h1 class="card-page__title">
        ${title}
      </h1>
      <div class="card-page__info-box">
        <ul class="card-page__list owl-carousel">
          ${getImages(images)}
        </ul>
        <div class="card-page__info">
          <p class="card-page__info-text card-page__info-text--price">
            <span>Цена:</span> ${price} ₽
          </p>
          <p class="card-page__info-text card-page__info-text--price">
            <span>Цена со скидкой:</span> ${sale} ₽
          </p>
          <p class="card-page__info-text">
            <span>Артикул:</span>  RALPH-2K-СЕРО-ЗЕЛЕНЫЙ-CRU10
          </p>
          <p class="card-page__info-text">
            <span>Материалы:</span>  ${material}
          </p>
          <a class="card-page__buy-btn" href="">Купить</a>
        </div>
      </div>
      <div class="card-page__description">
        <h2>Описание:</h2>
        <p>
          Механизм трансформации «Миллениум», обладает усиленными прочностными характеристиками и удобным способом раскладывания раскладывания. При раскладывании дивана не нужно снимать подушки сидения и спинки. Габариты сиденья: длина 186см, высота 50см, глубина 60см. Спальное место : 158*196см, толщина матраса: 14см Декоративные подушки в комплект дивана не входят, их следует заказывать допонительно.
        </p>
      </div>
    </section>`
  );
}

class CardPage extends _AbstractComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();

    this._card = card;
  }

  getTemplate() {
    return createCardPage(this._card);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CardPage);


/***/ }),

/***/ "./src/components/consts.js":
/*!**********************************!*\
  !*** ./src/components/consts.js ***!
  \**********************************/
/*! exports provided: START_SHOW_TASK, MORE_SHOW_TASK, Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_SHOW_TASK", function() { return START_SHOW_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MORE_SHOW_TASK", function() { return MORE_SHOW_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
const START_SHOW_TASK = 9;
const MORE_SHOW_TASK = 6;

const Place = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};


/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/*! exports provided: cleanContainer, render, createElement, regexp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanContainer", function() { return cleanContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexp", function() { return regexp; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/components/consts.js");


const cleanContainer = (container) => {
  container.innerHTML = ``;
};

const render = (container, element, place) => {
  switch (place) {
    case _consts__WEBPACK_IMPORTED_MODULE_0__["Place"].AFTERBEGIN:
      container.prepend(element);
      break;
    case _consts__WEBPACK_IMPORTED_MODULE_0__["Place"].BEFOREEND:
      container.append(element);
      break;
    case _consts__WEBPACK_IMPORTED_MODULE_0__["Place"].AFTERNODE:
      container.after(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const regexp = /[а-я А-Я \d ( )]/iug;


/***/ }),

/***/ "./src/load/load-card.js":
/*!*******************************!*\
  !*** ./src/load/load-card.js ***!
  \*******************************/
/*! exports provided: Url, load, loadCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCard", function() { return loadCard; });
/* harmony import */ var _components_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card-page */ "./src/components/card-page.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/utils */ "./src/components/utils.js");
/* harmony import */ var _components_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/consts */ "./src/components/consts.js");



const Url = {
  offers: `./data/decor.json`,
  category: `./data/category.json`
};

const STATUS_OK = 200;

let offers = [];
const main = document.querySelector(`main`);

const getImage = (img) => {
  if (typeof (img) === `string`) {
    return [img];
  } else {
    return img.filter((it) => it.endsWith(`jpg`));
  }
};

const getOffers = (data) => {
  return data.reduce((cardList, card) => {
    const product = {
      title: card.name,
      price: card.price,
      sale: card.wholesalePrice,
      images: getImage(card.picture),
      categoryId: card.categoryId,
      id: card.id,
      material: card.material,
      article: card.vendorCode
    };
    cardList.push(product);
    return cardList;
  }, []);
};

const load = (onload, url) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;

  xhr.addEventListener(`load`, () => {
    if (xhr.status === STATUS_OK) {
      onload(xhr.response);
    }
  });

  xhr.open(`GET`, url);
  xhr.send();
};

const getCard = (offs, id) => {
  offs.forEach((card) => {
    if (card.id === id) {
      const cardPageComponent = new _components_card_page__WEBPACK_IMPORTED_MODULE_0__["default"](card);
      Object(_components_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(main, cardPageComponent.getElement(card), _components_consts__WEBPACK_IMPORTED_MODULE_2__["Place"].BEFOREEND);
    }
  });
};

const loadCard = (data) => {
  offers = getOffers(data);
  let strGET = window.location.search.replace(`?`, ``);
  getCard(offers, strGET);

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      dots: false,
      nav: true
    });
  });
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_load_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load/load-card */ "./src/load/load-card.js");


Object(_load_load_card__WEBPACK_IMPORTED_MODULE_0__["load"])(_load_load_card__WEBPACK_IMPORTED_MODULE_0__["loadCard"], _load_load_card__WEBPACK_IMPORTED_MODULE_0__["Url"].offers);

/***/ })

/******/ });
