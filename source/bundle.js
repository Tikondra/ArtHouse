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

/***/ "./src/components/button-more.js":
/*!***************************************!*\
  !*** ./src/components/button-more.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");


const createButtonMore = () => `<button class="store-content__btn-more" type="button">Показать еще</button>`;

class ButtonMore {
  constructor() {
    this._element = null;
  }

  getTemplate() {

    return createButtonMore();
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

/* harmony default export */ __webpack_exports__["default"] = (ButtonMore);


/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");


const createCard = (card) => {
  const {title, price, sale, image} = card;

  const getTitle = () => {
    return title.match(_utils__WEBPACK_IMPORTED_MODULE_0__["regexp"]).join(``);
  };

  return (
    `<li class="cards__item">
      <img src=${image} width="213" height="213" alt="Название товара">
      <h3 class="cards__title">${getTitle()}</h3>
      <p class="cards__material">Материал: нерж.сталь, МДФ, пленка ПВХ.</p>
      <div class="cards__prices">
        <p class="cards__price">${sale} ₽</p>
        <p class="cards__price cards__price--sale">${price} ₽</p>
      </div>
      <div class="cards__sale-value">-10%</div>
    </li>`
  );
};

class Card {
  constructor(card) {
    this._card = card;
    this._element = null;
  }

  getTemplate() {
    return createCard(this._card);
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


/***/ }),

/***/ "./src/components/category.js":
/*!************************************!*\
  !*** ./src/components/category.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");


const createCategory = (category) => {
  const {title, id} = category;

  return (
    `<li class="sort__item">
       <a class="sort__link" href="" id="${id}">${title}</a>
     </li>`
  );
};

class Category {
  constructor(category) {
    this._category = category;
    this._element = null;
  }

  getTemplate() {
    return createCategory(this._category);
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

/***/ "./src/load/load.js":
/*!**************************!*\
  !*** ./src/load/load.js ***!
  \**************************/
/*! exports provided: load, loadCard, loadCategory, Url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCard", function() { return loadCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategory", function() { return loadCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/utils */ "./src/components/utils.js");
/* harmony import */ var _components_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/consts */ "./src/components/consts.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card */ "./src/components/card.js");
/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/category */ "./src/components/category.js");
/* harmony import */ var _components_button_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/button-more */ "./src/components/button-more.js");






const Url = {
  offers: `./data/decor.json`,
  category: `./data/category.json`
};

const STATUS_OK = 200;
const cardBox = document.querySelector(`.cards`);
const buttonMoreBox = document.querySelector(`.store-content__more-box`);
const loadMoreButton = document.querySelector(`.store-content__btn-more`);
const categoryList = document.querySelector(`.sort__list--category`);
const allCategoruBtn = document.querySelector(`.sort__link--category`);
let offers = [];
let categories = [];
let isSort = null;

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

const getImage = (img) => {
  if (typeof (img) === `string`) {
    return img;
  } else {
    if (!img[0].endsWith(`jpg`)) {
      return img[1];
    }
    return img[0];
  }
};

const getOffers = (data) => {
  return data.reduce((cardList, card) => {
    const product = {
      title: card.name,
      price: card.price,
      sale: card.wholesalePrice,
      image: getImage(card.picture),
      categoryId: card.categoryId,
    };
    cardList.push(product);
    return cardList;
  }, []);
};

const renderCards = (container, cards) => {
  cards.splice(0, _components_consts__WEBPACK_IMPORTED_MODULE_1__["START_SHOW_TASK"])
    .forEach((card) => {
      renderCard(cardBox, card);
    });

  const onMoreView = (evt) => {
    cards.splice(0, _components_consts__WEBPACK_IMPORTED_MODULE_1__["MORE_SHOW_TASK"])
      .forEach((card) => renderCard(cardBox, card));

    if (cards.length === 0) {
      evt.target.remove();
    }
  };

  if (isSort) {
    const buttonMoreComponent = new _components_button_more__WEBPACK_IMPORTED_MODULE_4__["default"]();

    Object(_components_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(buttonMoreBox, buttonMoreComponent.getElement(), _components_consts__WEBPACK_IMPORTED_MODULE_1__["Place"].BEFOREEND);

    buttonMoreComponent.getElement().addEventListener(`click`, onMoreView);
  } else {
    loadMoreButton.addEventListener(`click`, onMoreView);
  }
};

const renderCard = (container, card) => {
  const cardComponent = new _components_card__WEBPACK_IMPORTED_MODULE_2__["default"](card);

  Object(_components_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(container, cardComponent.getElement(card), _components_consts__WEBPACK_IMPORTED_MODULE_1__["Place"].BEFOREEND);
};

const renderCategory = (container, category) => {
  const categoryComponent = new _components_category__WEBPACK_IMPORTED_MODULE_3__["default"](category);

  const someCategory = categories.filter((it) => {
    return it.parentId === category.id;
  }).reduce((catList, cat) => {
    catList.push(cat.id);
    return catList;
  }, []);

  // сравнение двух массивов
  const getTrue = (card) => card.categoryId.some((n) => someCategory.includes(n));

  categoryComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();

    const categoryButtons = categoryList.querySelectorAll(`.sort__link`);

    categoryButtons.forEach((link) => {
      link.classList.remove(`sort__link--active`);
    });

    evt.target.classList.add(`sort__link--active`);

    const someCards = offers.filter((card) => {
      if (typeof card.categoryId === `string`) {
        return card.categoryId === category.id;
      } else {
        return getTrue(card);
      }
    });

    Object(_components_utils__WEBPACK_IMPORTED_MODULE_0__["cleanContainer"])(cardBox);

    const btnMore = document.querySelector(`.store-content__btn-more`);

    if (btnMore) {
      btnMore.remove();
    }

    isSort = true;

    renderCards(cardBox, someCards);
  });

  Object(_components_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(container, categoryComponent.getElement(category), _components_consts__WEBPACK_IMPORTED_MODULE_1__["Place"].BEFOREEND);
};

const loadCard = (data) => {

  offers = getOffers(data);
  const offersCopy = offers.slice();

  renderCards(cardBox, offersCopy);
};

const getParentId = (id) => id ? id : ``;

const getCategory = (data) => {
  return data.reduce((categoriesList, card) => {
    const category = {
      title: card.title,
      id: card.id,
      parentId: getParentId(card.parentId)
    };
    categoriesList.push(category);
    return categoriesList;
  }, []);
};

const loadCategory = (data) => {
  categories = getCategory(data);
  const someCategory = categories.filter((it) => {
    return it.parentId === ``;
  });

  someCategory.forEach((category) => renderCategory(categoryList, category));
};



allCategoruBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  const copyOffers = offers.slice();
  const categoryButtons = categoryList.querySelectorAll(`.sort__link`);

  categoryButtons.forEach((link) => {
    link.classList.remove(`sort__link--active`);
  });

  if (isSort) {
    Object(_components_utils__WEBPACK_IMPORTED_MODULE_0__["cleanContainer"])(cardBox);

    const btnMore = document.querySelector(`.store-content__btn-more`);

    if (btnMore) {
      btnMore.remove();
    }

    renderCards(cardBox, copyOffers);

    isSort = null;
  }

});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load/load */ "./src/load/load.js");


Object(_load_load__WEBPACK_IMPORTED_MODULE_0__["load"])(_load_load__WEBPACK_IMPORTED_MODULE_0__["loadCard"], _load_load__WEBPACK_IMPORTED_MODULE_0__["Url"].offers);
Object(_load_load__WEBPACK_IMPORTED_MODULE_0__["load"])(_load_load__WEBPACK_IMPORTED_MODULE_0__["loadCategory"], _load_load__WEBPACK_IMPORTED_MODULE_0__["Url"].category);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map