module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export oneOf */
/* unused harmony export hasOwn */
/* unused harmony export isDef */
/* unused harmony export isKorean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return warning; });
/* harmony export (immutable) */ __webpack_exports__["d"] = debounce;
/* harmony export (immutable) */ __webpack_exports__["l"] = onlyOnLeftClick;
/* harmony export (immutable) */ __webpack_exports__["o"] = scrollIntoView;
/* harmony export (immutable) */ __webpack_exports__["j"] = isPromise;
/* harmony export (immutable) */ __webpack_exports__["k"] = once;
/* unused harmony export noop */
/* harmony export (immutable) */ __webpack_exports__["h"] = identity;
/* harmony export (immutable) */ __webpack_exports__["b"] = constant;
/* harmony export (immutable) */ __webpack_exports__["c"] = createMap;
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
/* harmony export (immutable) */ __webpack_exports__["e"] = deepExtend;
/* harmony export (immutable) */ __webpack_exports__["g"] = getLast;
/* harmony export (immutable) */ __webpack_exports__["i"] = includes;
/* harmony export (immutable) */ __webpack_exports__["f"] = find;
/* harmony export (immutable) */ __webpack_exports__["n"] = removeFromArray;
/* harmony export (immutable) */ __webpack_exports__["m"] = quickDiff;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray__);





var hasOwnProperty = Object.prototype.hasOwnProperty;
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (var i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

function hasOwn(obj, value) {
  return hasOwnProperty.call(obj, value);
}

// 判断变量是否存在
function isDef(val) {
  return val !== undefined && val !== null;
}

// 判断是否为韩文
function isKorean(text) {
  var reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}

// Debugger
var warning =  true ? /* istanbul ignore next */noop : function warning(checker, complainer) {
  if (!checker()) {
    var _console;

    var message = ['[Okendo-Treeselect Warning]'].concat(complainer());
    // eslint-disable-next-line no-console
    (_console = console).error.apply(_console, _toConsumableArray(message));
    // eslint-disable-next-line no-debugger
    debugger;
  }
};

// 节流， 防抖
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var timeout = void 0,
      args = void 0,
      context = void 0,
      timestamp = void 0;

  function later() {
    var diff = Date.now() - timestamp;

    if (diff < wait && diff > 0) {
      timeout = setTimeout(later, wait - diff);
    } else {
      timeout = null;
      func.apply(context, args);
      context = args = null;
    }
  }

  return function debounced() {
    context = this;

    for (var _len = arguments.length, _args = Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    args = _args;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
  };
}

function onlyOnLeftClick(mouseDownHandler) {
  return function onMouseDown(evt) {
    if (evt.type === 'mousedown' && evt.button === 0) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      mouseDownHandler.call.apply(mouseDownHandler, [this, evt].concat(args));
    }
  };
}

// from react-select
function scrollIntoView(scrollingEl, focusedEl) {
  var scrollingReact = scrollingEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > scrollingReact.bottom) {
    scrollingEl.scrollTop = Math.min(focusedEl.offsetTop + focusedEl.clientHeight - scrollingEl.offsetHeight + overScroll, scrollingEl.scrollHeight);
  } else if (focusedRect.top - overScroll < scrollingReact.top) {
    scrollingEl.scrollTop = Math.max(focusedEl.offsetTop - overScroll, 0);
  }
}

function isPromise(x) {
  return x != null && ((typeof x === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(x)) === 'object' || typeof x === 'function') && typeof x.then === 'function';
}

function once(fn) {
  var val = void 0;
  return function () {
    if (fn.called) return val;
    fn.called = true;
    val = fn.apply(undefined, arguments);
    return val;
  };
}

function noop() {
  // empty
}

function identity(x) {
  return x;
}

function constant(x) {
  return function () {
    return x;
  };
}

function createMap() {
  return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_create___default()(null);
}

function isPlainObject(value) {
  if (value == null || (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(value)) !== 'object') return false;
  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(value) === Object.prototype;
}

function copy(obj, key, value) {
  if (isPlainObject(value)) {
    obj[key] || (obj[key] = {});
    deepExtend(obj[key], value);
  } else {
    obj[key] = value;
  }
}

function assign(target) {
  for (var _len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    sources[_key3 - 1] = arguments[_key3];
  }

  for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    for (var key in source) {
      // istanbul ignore else
      if (hasOwn(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}

function deepExtend(target, source) {
  if (isPlainObject(source)) {
    var keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(source);
    for (var i = 0, len = keys.length; i < len; i++) {
      copy(target, keys[i], source[keys[i]]);
    }
  }

  return target;
}

function getLast(arr) {
  return arr[arr.length - 1];
}

function includes(arr, elem) {
  return arr.indexOf(elem) !== -1;
}

function find(arr, predicate, ctx) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (predicate.call(ctx, arr[i], i, arr)) return arr[i];
  }
  return undefined;
}

function removeFromArray(arr, elem) {
  var idx = arr.indexOf(elem);
  if (idx !== -1) arr.splice(idx, 1);
}

function quickDiff(arrA, arrB) {
  if (arrA.length !== arrB.length) return true;

  for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return true;
  }

  return false;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create__);

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_create___default()(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/create");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg=="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg=="

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg=="

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_treeSelect__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hiddenValue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiValue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleValue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__options__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tip__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'OkendoTreeselect',
  components: {
    HiddenField: __WEBPACK_IMPORTED_MODULE_1__hiddenValue__["a" /* default */],
    MultiValue: __WEBPACK_IMPORTED_MODULE_2__multiValue__["a" /* default */],
    SingleValue: __WEBPACK_IMPORTED_MODULE_3__singleValue__["a" /* default */],
    TreeselectOption: __WEBPACK_IMPORTED_MODULE_4__options__["a" /* default */],
    Tip: __WEBPACK_IMPORTED_MODULE_5__tip__["a" /* default */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_treeSelect__["a" /* default */]]
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return NO_PARENT_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return UNCHECKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return INDETERMINATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHECKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALL_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ALL_DESCENDANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LEAF_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LEAF_DESCENDANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_ROOT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_CHILDREN_OPTIONS; });
/* unused harmony export ASYNC_SEARCH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BRANCH_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LEAF_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ALL_WITH_INDETERMINATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ORDER_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return KEY_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return INPUT_DEBOUNCE_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return MIN_INPUT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MENU_BUFFER; });
// Const
var NO_PARENT_NODE = null;

// checked state
var UNCHECKED = 0;
var INDETERMINATE = 1;
var CHECKED = 2;

// types of count number
var ALL_CHILDREN = 'ALL_CHILDREN';
var ALL_DESCENDANTS = 'ALL_DESCENDANTS';
var LEAF_CHILDREN = 'LEAF_CHILDREN';
var LEAF_DESCENDANTS = 'LEAF_DESCENDANTS';

// action types of delayed loading
var LOAD_ROOT_OPTIONS = 'LOAD_ROOT_OPTIONS';
var LOAD_CHILDREN_OPTIONS = 'LOAD_CHILDREN_OPTIONS';
var ASYNC_SEARCH = 'ASYNC_SEARCH';

// acceptable values of `valueConsistsOf` prop
var ALL = 'ALL';
var BRANCH_PRIORITY = 'BRANCH_PRIORITY';
var LEAF_PRIORITY = 'LEAF_PRIORITY';
var ALL_WITH_INDETERMINATE = 'ALL_WITH_INDETERMINATE';

// acceptable values of `sortValueBy` prop
var ORDER_SELECTED = 'ORDER_SELECTED';
var LEVEL = 'LEVEL';
var INDEX = 'INDEX';

// the code explains itself
var KEY_CODES = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46

  // other constants
};var INPUT_DEBOUNCE_DELAY =  false ? 10 // to speed up unit testing
: /* istanbul ignore next */200;
var MIN_INPUT_WIDTH = 5;
var MENU_BUFFER = 40;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'okendo-treeselect--hidden-field',
  inject: ['instance'],
  props: {
    stringifiedValue: {
      type: String,
      required: true
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_treeSelectValue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Placeholder__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchInput__ = __webpack_require__(21);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'okendo-treeselect--multi-value',
  components: { Placeholder: __WEBPACK_IMPORTED_MODULE_1__Placeholder__["a" /* default */], SearchInput: __WEBPACK_IMPORTED_MODULE_2__SearchInput__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_treeSelectValue__["a" /* default */]],
  inject: ['instance']
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_assist__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    limitText: function limitText() {
      var count = this.instance.internalValue.length - this.instance.limit;
      return this.instance.limitText(count);
    }
  },
  methods: {
    focusInput: function focusInput() {
      this.$refs.input.focus();
    },
    blurInput: function blurInput() {
      this.$refs.input.blur();
    },

    handleMouseDownOnValueItem: Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["l" /* onlyOnLeftClick */])(function handleMouseDownOnValueItem(evt, node) {
      this.instance.select(node); // deselect
    })
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Placeholder_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3800a31e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Placeholder_vue__ = __webpack_require__(56);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Placeholder_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3800a31e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Placeholder_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'okendo-treeselect--placeholder',
  inject: ['instance']
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchInput_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchInput_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_assist__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(15);




var keysThatRequireMenuBeingOpen = [__WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ENTER, __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].END, __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].HOME, __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ARROW_LEFT, __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ARROW_UP, __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ARROW_RIGHT, __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ARROW_DOWN];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'okendo-treeselect--input',
  inject: ['instance'],
  data: function data() {
    return {
      inputWidth: __WEBPACK_IMPORTED_MODULE_1__utils_constants__["r" /* MIN_INPUT_WIDTH */]
    };
  },
  computed: {
    needsAutoSize: function needsAutoSize() {
      return this.instance.searchable && !this.instance.disabled && this.instance.multiple;
    }
  },
  updated: function updated() {
    // istanbul ignore else
    if (this.needsAutoSize) this.updateInputWidth();
  },

  methods: {
    focus: function focus() {
      if (!this.instance.disabled) {
        this.$refs.input && this.$refs.input.focus();
      }
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus: function onFocus() {
      this.instance.trigger.isFocused = true;
      // istanbul ignore else
      if (this.instance.openOnFocus) this.instance.openMenu();
    },
    onBlur: function onBlur() {
      // #15
      // istanbul ignore next
      if (document.activeElement === this.instance.$refs.menu) {
        this.focus();
        return;
      }
      this.instance.trigger.isFocused = false;
      this.instance.closeMenu();
    },
    onInput: function onInput(evt) {
      this.instance.trigger.searchQuery = evt.target.value;
    },

    // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
    onKeyDown: function onKeyDown(evt) {
      if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) {
        return;
      }
      // https://css-tricks.com/snippets/javascript/javascript-keycodes/
      // https://stackoverflow.com/questions/4471582/javascript-keycode-vs-which
      var key = 'which' in evt ? evt.which : /* istanbul ignore next */evt.keyCode;
      if (!this.instance.menu.isOpen && Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["i" /* includes */])(keysThatRequireMenuBeingOpen, key)) {
        evt.preventDefault();
        return this.instance.openMenu();
      }
      switch (key) {
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].BACKSPACE:
          {
            if (this.instance.backspaceRemoves && !this.instance.trigger.searchQuery.length) {
              this.instance.removeLastValue();
            }
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ENTER:
          {
            evt.preventDefault();
            var current = this.instance.getNode(this.instance.menu.current);
            if (current.isBranch && this.instance.disableBranchNodes) return;
            this.instance.select(current);
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ESCAPE:
          {
            if (this.instance.trigger.searchQuery.length) {
              this.instance.trigger.searchQuery = '';
            } else if (this.instance.menu.isOpen) {
              this.instance.closeMenu();
            } else if (this.instance.escapeClearsValue) {
              this.instance.clear();
            }
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].END:
          {
            evt.preventDefault();
            this.instance.highlightLastOption();
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].HOME:
          {
            evt.preventDefault();
            this.instance.highlightFirstOption();
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ARROW_LEFT:
          {
            var _current = this.instance.getNode(this.instance.menu.current);
            if (_current.isBranch && this.instance.shouldExpand(_current)) {
              evt.preventDefault();
              this.instance.toggleExpanded(_current);
            } else if (!_current.isRootNode && (_current.isLeaf || _current.isBranch && !this.instance.shouldExpand(_current))) {
              evt.preventDefault();
              this.instance.setCurrentHighlightedOption(_current.parentNode);
            }
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ARROW_UP:
          {
            evt.preventDefault();
            this.instance.highlightPrevOption();
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ARROW_RIGHT:
          {
            var _current2 = this.instance.getNode(this.instance.menu.current);
            if (_current2.isBranch && !this.instance.shouldExpand(_current2)) {
              evt.preventDefault();
              this.instance.toggleExpanded(_current2);
            }
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].ARROW_DOWN:
          {
            evt.preventDefault();
            this.instance.highlightNextOption();
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_1__utils_constants__["j" /* KEY_CODES */].DELETE:
          {
            if (this.instance.deleteRemoves && !this.instance.trigger.searchQuery.length) {
              this.instance.removeLastValue();
            }
            break;
          }
        default:
          {
            // istanbul ignore else
            this.instance.openMenu();
          }
      }
    },
    onMouseDown: function onMouseDown(evt) {
      // istanbul ignore next
      if (this.instance.trigger.searchQuery.length) {
        // Prevent it from bubbling to the top level and triggering `preventDefault()`
        // to make the textbox unselectable
        evt.stopPropagation();
      }
    },
    renderInputContainer: function renderInputContainer(h) {
      var props = {
        class: 'okendo-treeselect__input-container'
      };
      var children = [];
      if (this.instance.searchable && !this.instance.disabled) {
        children.push(this.renderInput(h));
        if (this.needsAutoSize) children.push(this.renderSizer(h));
      }
      if (!this.instance.searchable) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["e" /* deepExtend */])(props, {
          on: {
            focus: this.onFocus,
            blur: this.onBlur,
            keydown: this.onKeyDown
          },
          ref: 'input'
        });
      }
      if (!this.instance.searchable && !this.instance.disabled) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["e" /* deepExtend */])(props, {
          attrs: {
            tabIndex: this.instance.tabIndex
          }
        });
      }
      return h('div', props, children);
    },
    renderInput: function renderInput(h) {
      return h('input', {
        class: 'okendo-treeselect__input',
        attrs: {
          type: 'text',
          autocomplete: 'off',
          tabIndex: this.instance.tabIndex,
          required: this.instance.required && !this.instance.hasValue
        },
        domProps: {
          value: this.instance.trigger.searchQuery
        },
        style: {
          width: this.needsAutoSize ? this.inputWidth + 'px' : null
        },
        on: {
          focus: this.onFocus,
          input: this.onInput,
          blur: this.onBlur,
          keydown: this.onKeyDown,
          mousedown: this.onMouseDown
        },
        ref: 'input'
      });
    },
    renderSizer: function renderSizer(h) {
      return h('div', {
        class: 'okendo-treeselect__sizer',
        domProps: {
          textContent: this.instance.trigger.searchQuery
        },
        ref: 'sizer'
      });
    },
    updateInputWidth: function updateInputWidth() {
      this.inputWidth = Math.max(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["r" /* MIN_INPUT_WIDTH */], this.$refs.sizer.scrollWidth + 15);
    }
  },
  render: function render(h) {
    return this.renderInputContainer(h);
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_treeSelectValue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Placeholder__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchInput__ = __webpack_require__(21);
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'okendo-treeselect--single-value',
  components: { Placeholder: __WEBPACK_IMPORTED_MODULE_1__Placeholder__["a" /* default */], SearchInput: __WEBPACK_IMPORTED_MODULE_2__SearchInput__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_treeSelectValue__["a" /* default */]],
  inject: ['instance']
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_treeSelectOptions__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tip__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'okendo-treeselect--option',
  inject: ['instance', 'UNCHECKED', 'INDETERMINATE', 'CHECKED'],
  components: { Tip: __WEBPACK_IMPORTED_MODULE_1__tip__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_treeSelectOptions__["a" /* default */]]
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tip_vue__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d206722_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tip_vue__ = __webpack_require__(62);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tip_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d206722_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tip_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'okendo-treeselect--tip',
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
});

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__treeselect_vue__ = __webpack_require__(32);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__treeselect_vue__["a" /* default */]);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_treeselect_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5aa3c855_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_treeselect_vue__ = __webpack_require__(64);
function injectStyle (ssrContext) {
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_treeselect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5aa3c855_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_treeselect_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(45)("7b921264", content, true, {});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(35);
exports = module.exports = __webpack_require__(36)(false);
// imports


// module
exports.push([module.i, ".utils-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-bar::-webkit-scrollbar{z-index:11;width:6px}.scroll-bar::-webkit-scrollbar:horizontal{height:6px}.scroll-bar::-webkit-scrollbar-thumb{border-radius:5px;width:6px;background:#b4bccc}.scroll-bar::-webkit-scrollbar--track,.scroll-bar::-webkit-scrollbar-corner{background:#fff}.scroll-bar::-webkit-scrollbar--track--piece{background:#fff;width:6px}.cell,.wide-cell{display:table-cell;vertical-align:middle}.wide-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;padding-left:5px}.narrow-cell{display:table-cell;vertical-align:middle;width:16px;text-align:center;line-height:0}.row{padding-left:5px;padding-right:5px;display:table;table-layout:fixed;width:100%}.okendo-treeselect{position:relative;text-align:left}.okendo-treeselect div,.okendo-treeselect span{-webkit-box-sizing:border-box;box-sizing:border-box}.okendo-treeselect__control{padding-left:5px;padding-right:5px;display:table;table-layout:fixed;width:100%;height:36px;border:1px solid #ddd;border-radius:4px;background:#fff;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-out-cubic;transition-timing-function:ease-out-cubic}.okendo-treeselect:not(.okendo-treeselect--disabled):not(.okendo-treeselect--focus) .okendo-treeselect:hover{border-color:#989ba2}.okendo-treeselect--focused:not(.okendo-treeselect---open) .okendo-treeselect{border-color:#989ba2;-webkit-box-shadow:0 0 0 3px hsla(222,5%,62%,.1);box-shadow:0 0 0 3px hsla(222,5%,62%,.1)}.okendo-treeselect--disabled .okendo-treeselect{background-color:#f9f9f9}.okendo-treeselect--open .okendo-treeselect,.okendo-treeselect:hover{border-color:#cfcfcf}.okendo-treeselect--open.okendo-treeselect--open-below .okendo-treeselect{border-bottom-left-radius:0;border-bottom-right-radius:0}.okendo-treeselect--open.okendo-treeselect--open-above .okendo-treeselect{border-top-left-radius:0;border-top-right-radius:0}.okendo-treeselect__multi-value,.okendo-treeselect__value-container{width:100%;vertical-align:middle}.okendo-treeselect__value-container{display:table-cell;position:relative}.okendo-treeselect--searchable:not(.okendo-treeselect--disabled) .okendo-treeselect__value-container{cursor:text}.okendo-treeselect__multi-value{display:inline-block}.okendo-treeselect--has-value .okendo-treeselect__multi-value{margin-bottom:5px}.okendo-treeselect__placeholder,.okendo-treeselect__single-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:5px;padding-right:5px;position:absolute;top:0;right:0;bottom:0;left:0;line-height:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.okendo-treeselect__placeholder{color:#c9ccd3}.okendo-treeselect__single-value{color:#333}.okendo-treeselect--focused.okendo-treeselect--searchable .okendo-treeselect__single-value{color:#c9ccd3}.okendo-treeselect__multi-value-item-container{display:inline-block;padding-top:5px;padding-right:5px;vertical-align:top}.okendo-treeselect__multi-value-item{display:inline-table;background:#82dab8;padding:2px 0;border:1px solid transparent;border-radius:4px;color:#989ba2;font-size:12px;vertical-align:top}.okendo-treeselect:not(.okendo-treeselect--disabled) .okendo-treeselect__multi-value-item:not(.okendo-treeselect__multi-value-item-disabled):hover{cursor:pointer;background:#82dab8;color:#989ba2}.okendo-treeselect__multi-value-item.okendo-treeselect__multi-value-item-disabled{cursor:default;background:#c9ccd3;color:#c9ccd3}.okendo-treeselect--disabled .okendo-treeselect__multi-value-item{cursor:default;background:#fff;border-color:#e5e5e5;color:#555}.okendo-treeselect__multi-value-label,.okendo-treeselect__value-remove{display:table-cell;padding:0 5px;vertical-align:middle}.okendo-treeselect__value-remove{cursor:pointer;color:#989ba2;padding-left:5px;border-left:1px solid #fff;line-height:0}.okendo-treeselect__multi-value-item:hover .okendo-treeselect__value-remove{color:#989ba2}.okendo-treeselect--disabled .okendo-treeselect__value-remove,.okendo-treeselect__multi-value-item-disabled .okendo-treeselect__value-remove{display:none}.okendo-treeselect__multi-value-label{padding-right:5px;white-space:pre-line;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.okendo-treeselect__limit-tip{display:inline-block;padding-top:5px;padding-right:5px;vertical-align:top}.okendo-treeselect__limit-tip-text{cursor:default;display:block;margin:2px 0;padding:1px 0;color:#989ba2;font-size:12px;font-weight:600}.okendo-treeselect__input-container{display:block;max-width:100%;outline:none}.okendo-treeselect--single .okendo-treeselect__input-container{font-size:inherit;height:100%}.okendo-treeselect--multi .okendo-treeselect__input-container{display:inline-block;font-size:12px;vertical-align:top}.okendo-treeselect--searchable .okendo-treeselect__input-container{padding-left:5px;padding-right:5px}.okendo-treeselect--searchable.okendo-treeselect--multi.okendo-treeselect--has-value .okendo-treeselect__input-container{padding-top:5px;padding-left:0}.okendo-treeselect--disabled .okendo-treeselect__input-container{display:none}.okendo-treeselect__input,.okendo-treeselect__sizer{margin:0;line-height:inherit;font-family:inherit;font-size:inherit}.okendo-treeselect__input{max-width:100%;margin:0;padding:0;border:0;outline:none;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-shadow:none;box-shadow:none;background:none transparent;line-height:1;vertical-align:middle}.okendo-treeselect__input::-ms-clear{display:none}.okendo-treeselect--single .okendo-treeselect__input{width:100%;height:100%}.okendo-treeselect--multi .okendo-treeselect__input{padding-top:3px;padding-bottom:3px}.okendo-treeselect--has-value .okendo-treeselect__input{line-height:inherit;vertical-align:top}.okendo-treeselect__sizer{position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre}.okendo-treeselect__x-container{display:table-cell;vertical-align:middle;width:16px;text-align:center;line-height:0;cursor:pointer;color:#ccc;-webkit-animation:.2s vue-treeselect-animation-fade-in cubic-bezier(.075,.82,.165,1);animation:.2s vue-treeselect-animation-fade-in cubic-bezier(.075,.82,.165,1)}.okendo-treeselect__x-container:hover{color:#989ba2}.okendo-treeselect__x{width:16px;height:16px}.okendo-treeselect__control-arrow-container{display:table-cell;vertical-align:middle;width:16px;text-align:center;line-height:0;cursor:pointer}.okendo-treeselect--disabled .okendo-treeselect__control-arrow-container{cursor:default}.okendo-treeselect .okendo-treeselect__control-arrow{width:16px;height:16px;color:#ccc}.okendo-treeselect:not(.vue-treeselect--disabled) .okendo-treeselect__control-arrow-container:hover .okendo-treeselect .okendo-treeselect__control-arrow{color:#989ba2}.okendo-treeselect--disabled .okendo-treeselect .okendo-treeselect__control-arrow{opacity:.35}.okendo-treeselect .okendo-treeselect__control-arrow--rotated{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.okendo-treeselect__menu{padding-top:5px;padding-bottom:5px;display:block;position:absolute;right:0;left:0;z-index:999;overflow-x:hidden;overflow-y:auto;border:1px solid #cfcfcf;background:#fff;line-height:180%;-webkit-overflow-scrolling:touch}.okendo-treeselect--open-below .okendo-treeselect__menu{border-bottom-left-radius:4px;border-bottom-right-radius:4px;top:100%;margin-top:-1px;border-top-color:#f2f2f2;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.06);box-shadow:0 1px 0 rgba(0,0,0,.06)}.okendo-treeselect--open-above .okendo-treeselect__menu{border-top-left-radius:4px;border-top-right-radius:4px;bottom:100%;margin-bottom:-1px;border-bottom-color:#f2f2f2}.okendo-treeselect__indent-level-0 .okendo-treeselect__option{padding-left:5px}.okendo-treeselect__indent-level-0 .okendo-treeselect__tip,.okendo-treeselect__indent-level-1 .okendo-treeselect__option{padding-left:25px}.okendo-treeselect__indent-level-1 .okendo-treeselect__tip,.okendo-treeselect__indent-level-2 .okendo-treeselect__option{padding-left:45px}.okendo-treeselect__indent-level-2 .okendo-treeselect__tip,.okendo-treeselect__indent-level-3 .okendo-treeselect__option{padding-left:65px}.okendo-treeselect__indent-level-3 .okendo-treeselect__tip,.okendo-treeselect__indent-level-4 .okendo-treeselect__option{padding-left:85px}.okendo-treeselect__indent-level-4 .okendo-treeselect__tip,.okendo-treeselect__indent-level-5 .okendo-treeselect__option{padding-left:105px}.okendo-treeselect__indent-level-5 .okendo-treeselect__tip,.okendo-treeselect__indent-level-6 .okendo-treeselect__option{padding-left:125px}.okendo-treeselect__indent-level-6 .okendo-treeselect__tip,.okendo-treeselect__indent-level-7 .okendo-treeselect__option{padding-left:145px}.okendo-treeselect__indent-level-7 .okendo-treeselect__tip,.okendo-treeselect__indent-level-8 .okendo-treeselect__option{padding-left:165px}.okendo-treeselect__indent-level-8 .okendo-treeselect__tip{padding-left:185px}.okendo-treeselect__option{padding-left:5px;padding-right:5px;display:table;table-layout:fixed;width:100%}.okendo-treeselect__option--highlight{background:#f6f6f6}.okendo-treeselect--single .okendo-treeselect__option--select{background:#f6f6f6;font-weight:600}.okendo-treeselect--single .okendo-treeselect__option--select:hover{background:#f6f6f6}.okendo-treeselect__option--hide{display:none}.okendo-treeselect__option-arrow-container,.okendo-treeselect__option-arrow-placeholder{display:table-cell;vertical-align:middle;width:16px;text-align:center;line-height:0}.okendo-treeselect__option-arrow-container{cursor:pointer}.okendo-treeselect__option-arrow{display:inline-block;width:16px;height:16px;color:#ccc;vertical-align:middle;-webkit-transition:-webkit-transform .2s cubic-bezier(.19,1,.22,1);transition:-webkit-transform .2s cubic-bezier(.19,1,.22,1);transition:transform .2s cubic-bezier(.19,1,.22,1);transition:transform .2s cubic-bezier(.19,1,.22,1),-webkit-transform .2s cubic-bezier(.19,1,.22,1);-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.okendo-treeselect__option-arrow-container:hover .okendo-treeselect__option-arrow,.okendo-treeselect__option-arrow .okendo-treeselect--branch-nodes-disbaled .okendo-treeselect__option:hover{color:#989ba2}.okendo-treeselect__option-arrow--rotated{-webkit-transform:rotate(0);transform:rotate(0)}.okendo-treeselect__option-arrow--rotated.okendo-treeselect__option-arrow--prepare-enter{-webkit-transform:rotate(-90deg)!important;transform:rotate(-90deg)!important}.okendo-treeselect__label-container{display:table-cell;vertical-align:middle;cursor:pointer;display:table;width:100%;table-layout:fixed;color:inherit}.okendo-treeselect__option--disbaled .okendo-treeselect__label-container{cursor:not-allowed;color:rgba(0,0,0,.25)}.okendo-treeselect__checkbox-container{display:table-cell;width:20px;min-width:20px;height:100%;text-align:center;vertical-align:middle}.okendo-treeselect__checkbox{display:block;margin:auto;width:12px;height:12px;border-width:1px;border-style:solid;border-radius:2px;position:relative;-webkit-transition:all .2s cubic-bezier(.075,.82,.165,1);transition:all .2s cubic-bezier(.075,.82,.165,1)}.okendo-treeselect__check-mark,.okendo-treeselect__minus-mark{display:block;position:absolute;left:1px;top:1px;background-repeat:no-repeat;opacity:0;-webkit-transition:all .2s ease;transition:all .2s ease}.okendo-treeselect__minus-mark{width:8px;height:8px;background-image:url(" + escape(__webpack_require__(37)) + ");background-size:8px 8px}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.okendo-treeselect__minus-mark{background-image:url(" + escape(__webpack_require__(9)) + ")}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.okendo-treeselect__minus-mark{background-image:url(" + escape(__webpack_require__(9)) + ")}}@media (-webkit-min-device-pixel-ratio:3),(min-resolution:288dpi){.okendo-treeselect__minus-mark{background-image:url(" + escape(__webpack_require__(38)) + ")}}.okendo-treeselect__checkbox--indeterminate>.okendo-treeselect__minus-mark{opacity:1}.okendo-treeselect__checkbox--disabled .okendo-treeselect__minus-mark{background-image:url(" + escape(__webpack_require__(39)) + ")}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.okendo-treeselect__checkbox--disabled .okendo-treeselect__minus-mark{background-image:url(" + escape(__webpack_require__(10)) + ")}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.okendo-treeselect__checkbox--disabled .okendo-treeselect__minus-mark{background-image:url(" + escape(__webpack_require__(10)) + ")}}@media (-webkit-min-device-pixel-ratio:3),(min-resolution:288dpi){.okendo-treeselect__checkbox--disabled .okendo-treeselect__minus-mark{background-image:url(" + escape(__webpack_require__(40)) + ")}}.okendo-treeselect__check-mark{width:8px;height:8px;background-image:url(" + escape(__webpack_require__(41)) + ");background-size:8px 8px;-webkit-transform:scaleY(.125);transform:scaleY(.125)}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.okendo-treeselect__check-mark{background-image:url(" + escape(__webpack_require__(11)) + ")}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.okendo-treeselect__check-mark{background-image:url(" + escape(__webpack_require__(11)) + ")}}@media (-webkit-min-device-pixel-ratio:3),(min-resolution:288dpi){.okendo-treeselect__check-mark{background-image:url(" + escape(__webpack_require__(42)) + ")}}.okendo-treeselect__checkbox--checked>.okendo-treeselect__check-mark{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1)}.okendo-treeselect__checkbox--disabled .okendo-treeselect__check-mark{background-image:url(" + escape(__webpack_require__(43)) + ")}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.okendo-treeselect__checkbox--disabled .okendo-treeselect__check-mark{background-image:url(" + escape(__webpack_require__(12)) + ")}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.okendo-treeselect__checkbox--disabled .okendo-treeselect__check-mark{background-image:url(" + escape(__webpack_require__(12)) + ")}}@media (-webkit-min-device-pixel-ratio:3),(min-resolution:288dpi){.okendo-treeselect__checkbox--disabled .okendo-treeselect__check-mark{background-image:url(" + escape(__webpack_require__(44)) + ")}}.okendo-treeselect__checkbox--unchecked,.okendo-treeselect__label-container:hover .okendo-treeselect__checkbox--unchecked{border-color:#f6f6f6;background:#fff}.okendo-treeselect__checkbox--checked,.okendo-treeselect__checkbox--indeterminate,.okendo-treeselect__label-container:hover .okendo-treeselect__checkbox--checked,.okendo-treeselect__label-container:hover .okendo-treeselect__checkbox--indeterminate{border-color:#f6f6f6;background:#f6f6f6}.okendo-treeselect__checkbox--disabled,.okendo-treeselect__label-container:hover .okendo-treeselect__checkbox--disabled{border-color:#f6f6f6;background-color:#f7f7f7}.okendo-treeselect__label{display:table-cell;padding-left:5px;max-width:100%;vertical-align:middle;cursor:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.okendo-treeselect__count{font-weight:400;opacity:.6}.okendo-treeselect__tip{padding-left:5px;padding-right:5px;display:table;table-layout:fixed;width:100%;color:#989ba2}.okendo-treeselect__tip-text{display:table-cell;vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;padding-left:5px;font-size:12px}.okendo-treeselect__error-tip .okendo-treeselect__retry{cursor:pointer;font-style:normal;font-weight:600;text-decoration:none;color:#989ba2}.okendo-treeselect__icon-container{display:table-cell;vertical-align:middle;width:16px;text-align:center;line-height:0}.okendo-treeselect--single .okendo-treeselect__icon-container{padding-left:5px}.okendo-treeselect__icon-warning{display:block;margin:auto;border-radius:50%;position:relative;width:12px;height:12px;background:#989ba2}.okendo-treeselect__icon-warning:after{display:block;position:absolute;content:\"\";left:5px;top:2.5px;width:2px;height:1px;border:0 solid #fff;border-top-width:5px;border-bottom-width:1px}.okendo-treeselect__icon-error{display:block;margin:auto;border-radius:50%;position:relative;width:12px;height:12px;background:#989ba2}.okendo-treeselect__icon-error:after,.okendo-treeselect__icon-error:before{display:block;position:absolute;content:\"\";background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.okendo-treeselect__icon-error:before{width:6px;height:2px;left:3px;top:5px}.okendo-treeselect__icon-error:after{width:2px;height:6px;left:5px;top:3px}.okendo-treeselect__icon-loader{display:block;margin:auto;position:relative;width:12px;height:12px;text-align:center;-webkit-animation:1.6s vue-treeselect-animation-rotate linear infinite;animation:1.6s vue-treeselect-animation-rotate linear infinite}.okendo-treeselect__icon-loader:after,.okendo-treeselect__icon-loader:before{border-radius:50%;position:absolute;content:\"\";left:0;top:0;display:block;width:100%;height:100%;opacity:.6;-webkit-animation:1.6s vue-treeselect-animation-bounce ease-in-out infinite;animation:1.6s vue-treeselect-animation-bounce ease-in-out infinite}.okendo-treeselect__icon-loader:before{background:#989ba2}.okendo-treeselect__icon-loader:after{background:#989ba2;-webkit-animation-delay:-.8s;animation-delay:-.8s}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url;
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
    }

    return url;
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAD///////9zeKVjAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII="

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg=="

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAADi4uLh4eHOxeSRAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII="

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAADh4eHg4ODNzc3h4eEYfw2wAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg=="

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA8u24NxILB+Tawb6jiH1zRz0xIQIIP3GUAAAAMklEQVQI1y3FtQEAMQDDQD+EGbz/qkEVOpyEOP6PudKjZNSXn4Jm2CKRdBKzSLsFWl8fMG0Bl6Jk1rMAAAAASUVORK5CYII="

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA/PiJhGNI9XlEHJB/b2ldV08+Oibk49vPp6QhAYgGBuwAAACCSURBVCjPrdHdDoIwDAXgTWAqCigo/+f9X5OwnoUwtis4V92XNWladUl+rzQPeQJAN2EHxoOnsPn7/oYk8fxBv08Rr/deOH/aZ2Nm8ZJ+s573QGfWKnNuZGzWm3+lv2V3pcU1XQ385/yjmBoM3Z+dXvlbYLLD3ujhTaOM3KaIXvNkFkuSEvYy1LqOAAAAAElFTkSuQmCC"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUAAADj4+Pf39/h4eHh4eHh4eHk5OTh4eHg4ODi4uLh4eHh4eHg4ODh4eHh4eHg4ODh4eHh4eHp6en////h4eFqcyvUAAAAFHRSTlMAOQfy7bgS5NrBvqOIfXNHMSELAgQ/iFsAAAA2SURBVAjXY4AANjYIzcjMAaVFuBkY+RkEWERYmRjYRXjANAOfiIgIFxNIAa8IpxBEi6AwiAQAK2MBd7xY8csAAAAASUVORK5CYII="

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUAAADh4eHh4eHh4eHh4eHi4uLi4uLh4eHh4eHh4eHf39/j4+Ph4eHh4eHh4eHg4ODi4uLh4eHh4eHi4uLh4eHh4eHh4eHh4eHh4eH////h4eF3FMFTAAAAGnRSTlMA+/eJhGhfSHE9JBzz5KaQf3pXT0Xbz0I5AYDw8F0AAAB+SURBVCjPrdHbDoMgEEVRKAii1dZe9fz/hxplTiKIT7qfYCWTEEZdUvOwbckNAD2WHeh3brHW5f5EzGQ+iN+b1Gt6KPvtv16Dn6JX9M9ya3/A1yfu5dlyduL6Hec7mXY6ddXLPP2lpABGZ8PWXfYLTJxZekVhhl7eTX24zZPNKXoRC7zQLjUAAAAASUVORK5CYII="

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(46)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fuzzysearch__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fuzzysearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fuzzysearch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_assist__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_constants__ = __webpack_require__(15);












function sortValueByIndex(a, b) {
  var i = 0;
  do {
    if (a.level < i) return -1;
    if (b.level < i) return 1;
    if (a.index[i] !== b.index[i]) return a.index[i] - b.index[i];
    i++;
  } while (true);
}

function sortValueByLevel(a, b) {
  return a.level !== b.level ? a.level - b.level : sortValueByIndex(a, b);
}

function createAsyncOptionsStates() {
  return {
    isLoaded: false,
    isLoading: false,
    loadingError: ''
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  provide: function provide() {
    return {
      // enable access to the instance of root component of vue-treeselect across hierarchy
      instance: this,

      // constants
      UNCHECKED: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["u" /* UNCHECKED */],
      INDETERMINATE: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["g" /* INDETERMINATE */],
      CHECKED: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["f" /* CHECKED */]
    };
  },


  props: {
    /**
     * Whether the menu should be always open
     */
    alwaysOpen: {
      type: Boolean,
      default: false
    },

    /**
     * Deprecated. Use `autoFocus` instead.
     */
    autofocus: {
      type: Boolean,
      default: false
    },

    /**
     * Automatically focus the component on mount?
     */
    autoFocus: {
      type: Boolean,
      default: false
    },

    /**
     * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
     */
    autoLoadRootOptions: {
      type: Boolean,
      default: true
    },

    /**
     * Whether pressing backspace key removes the last item if there is no text input
     */
    backspaceRemoves: {
      type: Boolean,
      default: true
    },

    /**
     * Function that processes before clearing all input fields.
     * Return `false` to prevent value from being cleared.
     * @type {function(): (boolean|Promise<boolean>)}
     */
    beforeClearAll: {
      type: Function,
      default: Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["b" /* constant */])(true)
    },

    /**
     * Show branch nodes before leaf nodes?
     */
    branchNodesFirst: {
      type: Boolean,
      default: false
    },

    /**
     * Show an "×" icon that resets value?
     */
    clearable: {
      type: Boolean,
      default: true
    },

    /**
     * Title for the "×" icon when multiple: true
     */
    clearAllText: {
      type: String,
      default: 'Clear all'
    },

    /**
     * Whether to clear the search input after selecting.
     * Use only when `multiple` is `true`.
     * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
     */
    clearOnSelect: {
      type: Boolean,
      default: false
    },

    /**
     * Title for the "×" icon
     */
    clearValueText: {
      type: String,
      default: 'Clear value'
    },

    /**
     * Whether to close the menu after selecting an option?
     * Use only when `multiple` is `true`.
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },

    /**
     * How many levels of branch nodes should be automatically expanded when loaded.
     * Set `Infinity` to make all branch nodes expanded by default.
     */
    defaultExpandLevel: {
      type: Number,
      default: 0
    },

    /**
     * Whether pressing delete key removes the last item if there is no text input
     */
    deleteRemoves: {
      type: Boolean,
      default: true
    },

    /**
     * Delimiter to use to join multiple values for the hidden field value
     */
    delimiter: {
      type: String,
      default: ','
    },

    /**
     * Prevent branch nodes from being selected?
     */
    disableBranchNodes: {
      type: Boolean,
      default: false
    },

    /**
     * Disable the control?
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Disable the fuzzy matching functionality?
     */
    disableFuzzyMatching: {
      type: Boolean,
      default: false
    },

    /**
     * Search in ancestor nodes too.
     */
    searchNested: {
      type: Boolean,
      default: false
    },

    /**
     * Whether escape clears the value when the menu is closed
     */
    escapeClearsValue: {
      type: Boolean,
      default: true
    },

    /**
     * Whether to enable flat mode or not. Non-flat mode (default) means:
     *   - Whenever a branch node gets checked, all its children will be checked too
     *   - Whenever a branch node has all children checked, the branch node itself will be checked too
     * Set `true` to disable this mechanism
     */
    flat: {
      type: Boolean,
      default: false
    },

    /**
     * Deprecated. Use `instanceId` prop instead.
     * @type {string|number}
    */
    id: {
      default: null
    },

    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @type {string|number}
    */
    instanceId: {
      default: null
    },

    /**
     * Joins multiple values into a single form field with the delimiter (legacy mode)
    */
    joinValues: {
      type: Boolean,
      default: false
    },

    /**
     * Limit the display of selected options.
     * The rest will be hidden within the limitText string.
     */
    limit: {
      type: Number,
      default: Infinity
    },

    /**
     * Function that processes the message shown when selected elements pass the defined limit
     * @type {function(number): string}
     */
    limitText: {
      type: Function,
      default: function limitTextDefault(count) {
        // eslint-disable-line func-name-matching
        return 'and ' + count + ' more';
      }
    },

    /**
     * Whether is externally loading options or not.
     * Set `true` to show a spinner.
     */
    loading: {
      type: Boolean,
      default: false
    },

    /**
     * Text displayed when a branch node is loading its children options
     */
    loadingText: {
      type: String,
      default: 'Loading...'
    },

    /**
     * Used for dynamically loading options.
     * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
     */
    loadOptions: {
      type: Function
    },

    /**
     * Sets `maxHeight` style value of the menu
     */
    maxHeight: {
      type: Number,
      default: 300
    },

    /**
     * Set `true` to allow selecting multiple options (a.k.a., multi-select mode)
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Generates a hidden <input /> tag with this field name for html forms
     */
    name: {
      type: String
    },

    /**
     * Text displayed when a branch node has no children options
     */
    noChildrenText: {
      type: String,
      default: 'No sub-options.'
    },

    /**
     * Text displayed when there are no available options
     */
    noOptionsText: {
      type: String,
      default: 'No options available.'
    },

    /**
     * Text displayed when there are no matching search results
     */
    noResultsText: {
      type: String,
      default: 'No results found...'
    },

    /**
     * Used for normalizing source data
     * @type {function(node, instanceId): node}
     */
    normalizer: {
      type: Function,
      default: __WEBPACK_IMPORTED_MODULE_7__utils_assist__["h" /* identity */]
    },

    /**
     * Fixed opening direction
     */
    openDirection: {
      type: String,
      default: 'auto'
    },

    /**
     * Whether to automatically open the menu when the control is clicked
     */
    openOnClick: {
      type: Boolean,
      default: true
    },

    /**
     * Whether to automatically open the menu when the control is focused
     */
    openOnFocus: {
      type: Boolean,
      default: false
    },

    /**
     * Array of available options
     * @type {Object[]}
     */
    options: {
      type: Array
    },

    /**
     * Field placeholder, displayed when there's no value.
     */
    placeholder: {
      type: String,
      default: 'Select...'
    },

    /**
     * Applies HTML5 required attribute when needed
     */
    required: {
      type: Boolean,
      default: false
    },

    /**
     * Text displayed asking user whether to retry loading children options
     */
    retryText: {
      type: String,
      default: 'Retry?'
    },

    /**
     * Title for the retry button
     */
    retryTitle: {
      type: String,
      default: 'Click to retry'
    },

    /**
     * Enable searching feature?
     */
    searchable: {
      type: Boolean,
      default: true
    },

    /**
     * Whether to show a children count next to the label of each branch node
     */
    showCount: {
      type: Boolean,
      default: false
    },

    /**
     * Used in pairs with `showCount` specifying what count should be displayed.
     * Acceptable values:
     *   - "ALL_CHILDREN"
     *   - "ALL_DESCENDANTS"
     *   - "LEAF_CHILDREN"
     *   - "LEAF_DESCENDANTS"
     */
    showCountOf: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["b" /* ALL_CHILDREN */],
      validator: function validator(value) {
        var acceptableValues = [__WEBPACK_IMPORTED_MODULE_8__utils_constants__["b" /* ALL_CHILDREN */], __WEBPACK_IMPORTED_MODULE_8__utils_constants__["c" /* ALL_DESCENDANTS */], __WEBPACK_IMPORTED_MODULE_8__utils_constants__["k" /* LEAF_CHILDREN */], __WEBPACK_IMPORTED_MODULE_8__utils_constants__["l" /* LEAF_DESCENDANTS */]];
        return Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["i" /* includes */])(acceptableValues, value);
      }
    },

    /**
     * Whether to show children count when searching.
     * Fallbacks to the value of `showCount` when not specified.
     * @type {boolean}
     */
    showCountOnSearch: null,

    /**
     * In which order the selected options should be displayed.
     * Acceptable values:
     *   - "ORDER_SELECTED"
     *   - "LEVEL"
     *   - "INDEX"
     */
    sortValueBy: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["t" /* ORDER_SELECTED */],
      validator: function validator(value) {
        var acceptableValues = [__WEBPACK_IMPORTED_MODULE_8__utils_constants__["t" /* ORDER_SELECTED */], __WEBPACK_IMPORTED_MODULE_8__utils_constants__["n" /* LEVEL */], __WEBPACK_IMPORTED_MODULE_8__utils_constants__["h" /* INDEX */]];
        return Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["i" /* includes */])(acceptableValues, value);
      }
    },

    /**
     * Tab index of the control
     */
    tabIndex: {
      type: Number,
      default: 0
    },

    /**
     * An array of node ids or node objects as the initial field value.
     * The format depends on the ${v('valueFormat')} prop.
     * @type {?Array}
     */
    value: null,

    /**
     * Which kind of nodes should be included in the value array in multi-select mode
     * Acceptable values:
     *   - "ALL" - Any node that is checked will be included in the `value` array
     *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
     *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
     *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
     */
    valueConsistsOf: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["e" /* BRANCH_PRIORITY */],
      validator: function validator(value) {
        var acceptableValues = [__WEBPACK_IMPORTED_MODULE_8__utils_constants__["a" /* ALL */], __WEBPACK_IMPORTED_MODULE_8__utils_constants__["e" /* BRANCH_PRIORITY */], __WEBPACK_IMPORTED_MODULE_8__utils_constants__["m" /* LEAF_PRIORITY */], __WEBPACK_IMPORTED_MODULE_8__utils_constants__["d" /* ALL_WITH_INDETERMINATE */]];
        return Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["i" /* includes */])(acceptableValues, value);
      }
    },

    /**
     * Format of `value` prop
     * Acceptable values:
     *   - "id"
     *   - "object"
     */
    valueFormat: {
      type: String,
      default: 'id'
    }
  },

  data: function data() {
    return {
      trigger: {
        // is the control focused?
        isFocused: false,
        // user entered search query - value of the input
        searchQuery: ''
      },

      menu: {
        // is the menu opened?
        isOpen: false,
        // id of current highlighted option
        current: null,
        // the scroll position before last menu close
        lastScrollPosition: 0,
        // menu height
        optimizedHeight: 0,
        // which direction to open the menu
        prefferedOpenDirection: 'below'
      },

      forest: __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({
        // normalized options
        normalized: [],
        // <id, node> map for quick look-up
        nodeMap: Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])(),
        // <id, checkedState> map, used for multi-select mode
        checkedStateMap: Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])(),
        // id list of all selected options
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        // <id, true> map for fast checking:
        // if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
        selectedNodeMap: Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])()
      }, createAsyncOptionsStates()),

      localSearch: {
        // has user entered any query to search local options?
        active: false,
        // has any options matched the search query?
        noResults: true,
        // <id, countObject> map for counting matched children/descendants
        countMap: Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])()
      },

      remoteSearch: __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({
        // has user entered any query to search async options?
        active: false
      }, createAsyncOptionsStates())
    };
  },


  computed: {
    /* eslint-disable valid-jsdoc */
    /**
     * Normalized options that has been selected
     * @type {Object[]}
     */
    selectedNodes: function selectedNodes() {
      return this.forest.selectedNodeIds.map(this.getNode);
    },

    /**
     * Id list of selected nodes with `sortValueBy` prop applied
     * @type {nodeId[]}
     */
    internalValue: function internalValue() {
      var _this = this;

      var internalValue = void 0;

      // istanbul ignore else
      if (this.single || this.flat || this.valueConsistsOf === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["a" /* ALL */]) {
        internalValue = this.forest.selectedNodeIds.slice();
      } else if (this.valueConsistsOf === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["e" /* BRANCH_PRIORITY */]) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);
          if (node.isRootNode) return true;
          return !_this.isSelected(node.parentNode);
        });
      } else if (this.valueConsistsOf === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["m" /* LEAF_PRIORITY */]) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);
          if (node.isLeaf) return true;
          return node.children.length === 0;
        });
      } else if (this.valueConsistsOf === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["d" /* ALL_WITH_INDETERMINATE */]) {
        internalValue = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys___default()(this.forest.checkedStateMap).filter(function (id) {
          var checkedState = _this.forest.checkedStateMap[id];
          return checkedState === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["f" /* CHECKED */] || checkedState === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["g" /* INDETERMINATE */];
        });
      }

      if (this.sortValueBy === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["n" /* LEVEL */]) {
        internalValue.sort(function (a, b) {
          return sortValueByLevel(_this.getNode(a), _this.getNode(b));
        });
      } else if (this.sortValueBy === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["h" /* INDEX */]) {
        internalValue.sort(function (a, b) {
          return sortValueByIndex(_this.getNode(a), _this.getNode(b));
        });
      }

      return internalValue;
    },

    /**
     * Has any option been selected?
     * @type {boolean}
     */
    hasValue: function hasValue() {
      return this.internalValue.length > 0;
    },

    /**
     * Has any undisabled option been selected?
     * @type {boolean}
     */
    hasUndisabledValue: function hasUndisabledValue() {
      return this.hasValue && this.internalValue.map(this.getNode).some(function (node) {
        return !node.isDisabled;
      });
    },

    /**
     * Whether is single-select mode or not
     * @type {boolean}
     */
    single: function single() {
      return !this.multiple;
    },

    /**
     * Options displayed in the control
     * @type {Object[]}
     */
    visibleValue: function visibleValue() {
      return this.internalValue.map(this.getNode).slice(0, this.limit);
    },

    /**
     * Id list of options displayed in the menu
     * @type {Object[]}
     */
    visibleOptionIds: function visibleOptionIds() {
      var _this2 = this;

      var visibleOptionIds = [];

      this.traverseAllNodesByIndex(function (node) {
        if (!_this2.localSearch.active || _this2.shouldOptionBeIncludedInSearchResult(node)) {
          visibleOptionIds.push(node.id);
        }
        // skip the traversal of descendants of a branch node if it's not expanded
        if (node.isBranch && !_this2.shouldExpand(node)) {
          return false;
        }
      });

      return visibleOptionIds;
    },

    /**
     * Has any options should be displayed in the menu?
     * @type {boolean}
     */
    hasVisibleOptions: function hasVisibleOptions() {
      var _this3 = this;

      if (!this.forest.isLoaded) {
        return false;
      }
      if (!this.forest.normalizedOptions.length) {
        return false;
      }
      if (this.localSearch.active) {
        return this.forest.normalizedOptions.some(function (option) {
          return _this3.shouldOptionBeIncludedInSearchResult(option);
        });
      }
      return true;
    },

    /**
     * Whether has passed the defined limit or not
     * @type {boolean}
     */
    hasExceededLimit: function hasExceededLimit() {
      return this.internalValue.length > this.limit;
    },

    /**
     * Should the "×" icon be shown?
     * @type {boolean}
     */
    shouldShowX: function shouldShowX() {
      return this.clearable && !this.disabled && this.hasUndisabledValue;
    },

    /**
     * Should show children count when searching?
     * @type {boolean}
     */
    showCountOnSearchComputed: function showCountOnSearchComputed() {
      // Vue not allows set default prop value based on another prop value
      // so use computed property as a workaround
      return typeof this.showCountOnSearch === 'boolean' ? this.showCountOnSearch : this.showCount;
    },

    /**
     * Is there any branch node?
     * @type {boolean}
     */
    hasBranchNodes: function hasBranchNodes() {
      return this.forest.normalizedOptions.some(function (rootNode) {
        return rootNode.isBranch;
      });
    },

    /**
     * The first option that should be displayed in the menu
     * @type {Object?}
     */
    firstVisibleOption: function firstVisibleOption() {
      var _this4 = this;

      if (!this.forest.normalizedOptions.length) {
        return null;
      }
      if (this.localSearch.active) {
        return Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["f" /* find */])(this.forest.normalizedOptions, function (node) {
          return _this4.shouldOptionBeIncludedInSearchResult(node);
        });
      }
      return this.forest.normalizedOptions[0];
    }
  },

  watch: {
    alwaysOpen: function alwaysOpen(newValue) {
      if (newValue) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    },
    disabled: function disabled(newValue) {
      // force close the menu after disabling the control
      if (newValue && this.menu.isOpen) this.closeMenu();else if (!newValue && !this.menu.isOpen && this.alwaysOpen) this.openMenu();
    },
    flat: function flat() {
      // re-initialize options
      this.initialize(this.options);
    },
    internalValue: function internalValue() {
      this.$emit('input', this.getValue(), this.getInstanceId());
    },
    multiple: function multiple(newValue) {
      // istanbul ignore else
      if (newValue) {
        // needs to rebuild the state when switching from
        // single-select mode to multi-select mode
        this.buildForestState();
      }
    },


    'trigger.searchQuery': Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["d" /* debounce */])(function onSearchQueryChange() {
      this.handleSearchQueryChange();
      this.$emit('search-change', this.trigger.searchQuery, this.getInstanceId());
    }, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["i" /* INPUT_DEBOUNCE_DELAY */]),

    value: function value() {
      var newInternalValue = this.extractCheckedNodeIdsFromValue();
      var hasChanged = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["m" /* quickDiff */])(newInternalValue, this.internalValue);

      if (hasChanged) {
        this.forest.selectedNodeIds = newInternalValue;
        this.completeSelectedNodeIdList();
      }
    }
  },

  methods: {
    verifyProps: function verifyProps() {
      var _this5 = this;

      Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["p" /* warning */])(function () {
        return _this5.id == null;
      }, function () {
        return '`id` prop is deprecated. Use `instanceId` instead.';
      });

      Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["p" /* warning */])(function () {
        return !_this5.autofocus;
      }, function () {
        return '`autofocus` prop is deprecated. Use `autoFocus` instead.';
      });

      if (this.options == null && !this.loadOptions) {
        Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["p" /* warning */])(function () {
          return false;
        }, function () {
          return 'Are you meant to dynamically load options? You need to use `loadOptions` prop.';
        });
      }
    },
    resetFlags: function resetFlags() {
      this._blurOnSelect = false;
    },
    initialize: function initialize(rootOptions) {
      if (Array.isArray(rootOptions)) {
        // In case we are reinitializing options, keep the old state tree temporarily.
        var prevNodeMap = this.forest.nodeMap;
        this.forest.nodeMap = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])();
        this.keepDataOfSelectedNodes(prevNodeMap);
        this.forest.normalizedOptions = this.normalize(__WEBPACK_IMPORTED_MODULE_8__utils_constants__["s" /* NO_PARENT_NODE */], rootOptions, prevNodeMap);
        this.completeSelectedNodeIdList();
        this.forest.isLoaded = true;
      } else {
        this.forest.normalizedOptions = [];
      }
    },
    getInstanceId: function getInstanceId() {
      return this.instanceId == null ? this.id : this.instanceId;
    },
    getValue: function getValue() {
      var _this6 = this;

      if (this.valueFormat === 'id') {
        return this.multiple ? this.internalValue.slice() : this.internalValue[0];
      }

      var rawNodes = this.internalValue.map(function (id) {
        return _this6.getNode(id).raw;
      });
      return this.multiple ? rawNodes : rawNodes[0];
    },
    getNode: function getNode(nodeId) {
      Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["p" /* warning */])(function () {
        return nodeId != null;
      }, function () {
        return 'Invalid node id: ' + nodeId;
      });

      if (nodeId == null) return null;

      return nodeId in this.forest.nodeMap ? this.forest.nodeMap[nodeId] : this.createFallbackNode(nodeId);
    },
    createFallbackNode: function createFallbackNode(id) {
      // In case there is a default selected node that is not loaded into the tree yet,
      // we create a fallback node to keep the component working.
      // When the real data is loaded, we'll override this fake node.

      var raw = this.extractNodeFromValue(id);
      var label = this.enhancedNormalizer(raw).label || id + ' (unknown)';
      var fallbackNode = {
        id: id,
        label: label,
        ancestors: [],
        parentNode: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["s" /* NO_PARENT_NODE */],
        isFallbackNode: true,
        isRootNode: true,
        isLeaf: true,
        isBranch: false,
        isDisabled: false,
        index: [-1],
        level: 0,
        raw: raw
      };

      this.$set(this.forest.nodeMap, id, fallbackNode);
      return fallbackNode;
    },
    extractCheckedNodeIdsFromValue: function extractCheckedNodeIdsFromValue() {
      var _this7 = this;

      if (this.value == null) return [];

      if (this.valueFormat === 'id') {
        return this.multiple ? this.value.slice() : [this.value];
      }

      return (this.multiple ? this.value : [this.value]).map(function (node) {
        return _this7.enhancedNormalizer(node);
      }).map(function (node) {
        return node.id;
      });
    },
    extractNodeFromValue: function extractNodeFromValue(id) {
      var _this8 = this;

      var defaultNode = { id: id };

      if (this.valueFormat === 'id') {
        return defaultNode;
      }

      var valueArray = this.multiple ? Array.isArray(this.value) ? this.value : [] : this.value ? [this.value] : [];
      var matched = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["f" /* find */])(valueArray, function (node) {
        return node && _this8.enhancedNormalizer(node).id === id;
      });

      return matched || defaultNode;
    },
    completeSelectedNodeIdList: function completeSelectedNodeIdList() {
      var _this9 = this;

      var nodeIds = this.forest.selectedNodeIds.slice();
      this.forest.selectedNodeIds = [];
      this.forest.checkedStateMap = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])();
      this.forest.selectedNodeMap = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])();

      nodeIds.forEach(function (id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["i" /* includes */])(_this9.forest.selectedNodeIds, id)) {
          _this9._selectNode(_this9.getNode(id), { ignoreDisabled: true });
        }
      });

      this.buildForestState();
    },
    keepDataOfSelectedNodes: function keepDataOfSelectedNodes(prevNodeMap) {
      var _this10 = this;

      // In case there is any selected node that is not present in the new `options` array.
      // It could be useful for async search mode.
      this.forest.selectedNodeIds.forEach(function (id) {
        if (!prevNodeMap[id]) return;
        var fallbackNode = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["a" /* assign */])({}, prevNodeMap[id], {
          isFallbackNode: true
        });
        _this10.$set(_this10.forest.nodeMap, id, fallbackNode);
      });
    },
    isSelected: function isSelected(node) {
      // whether a node is selected (single-select mode) or fully-checked (multi-select mode)
      return this.forest.selectedNodeMap[node.id] === true;
    },
    stringifyValue: function stringifyValue(value) {
      return typeof value === 'string' ? value : value !== null && __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(value) || '';
    },
    traverseDescendantsBFS: function traverseDescendantsBFS(parentNode, callback) {
      // istanbul ignore if
      if (!parentNode.isBranch) return;
      var queue = parentNode.children.slice();
      while (queue.length) {
        var currNode = queue[0];
        if (currNode.isBranch) queue.push.apply(queue, __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(currNode.children));
        callback(currNode);
        queue.shift();
      }
    },
    traverseDescendantsDFS: function traverseDescendantsDFS(parentNode, callback) {
      var _this11 = this;

      if (!parentNode.isBranch) return;
      parentNode.children.forEach(function (child) {
        // deep-level node first
        _this11.traverseDescendantsDFS(child, callback);
        callback(child);
      });
    },
    traverseAllNodesDFS: function traverseAllNodesDFS(callback) {
      var _this12 = this;

      this.forest.normalizedOptions.forEach(function (rootNode) {
        // deep-level node first
        _this12.traverseDescendantsDFS(rootNode, callback);
        callback(rootNode);
      });
    },
    traverseAllNodesByIndex: function traverseAllNodesByIndex(callback) {
      var traverse = function traverse(parentNode) {
        parentNode.children.forEach(function (child) {
          if (callback(child) !== false && child.isBranch) {
            traverse(child);
          }
        });
      };

      // To simplify the code logic of traversal,
      // we create a fake root node that holds all the root options.
      traverse({
        isBranch: true,
        children: this.forest.normalizedOptions
      });
    },
    toggleClickOutsideEvent: function toggleClickOutsideEvent(enabled) {
      if (enabled) {
        document.addEventListener('mousedown', this.handleClickOutside, false);
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
      }
    },
    focusInput: function focusInput() {
      this.$refs.value.focusInput();
    },
    blurInput: function blurInput() {
      this.$refs.value.blurInput();
    },


    handleMouseDown: Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["l" /* onlyOnLeftClick */])(function handleMouseDown(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      if (this.disabled) return;

      var isClickedOnValueContainer = this.$refs.value.$el.contains(evt.target);
      if (isClickedOnValueContainer && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused)) {
        this.openMenu();
      }

      if (this._blurOnSelect) {
        this.blurInput();
      } else {
        // focus the input or prevent blurring
        this.focusInput();
      }

      this.resetFlags();
    }),

    handleMouseDownOnClear: Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["l" /* onlyOnLeftClick */])(function handleMouseDownOnClear(evt) {
      var _this13 = this;

      // We don't use async/await here because we don't want
      // to rely on Babel polyfill or regenerator runtime.
      // See: https://babeljs.io/docs/plugins/transform-regenerator/
      // We also don't want to assume there is a global `Promise` class,
      // since we are targeting to support IE9 without the need of any polyfill.

      evt.stopPropagation();
      evt.preventDefault();

      var result = this.beforeClearAll();
      var handler = function handler(shouldClear) {
        if (shouldClear) {
          _this13.clear();
        }

        _this13.focusInput();
      };

      if (Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["j" /* isPromise */])(result)) {
        // the handler will be called async
        result.then(handler);
      } else {
        // keep the same behavior here
        setTimeout(function () {
          return handler(result);
        }, 0);
      }
    }),

    handleMouseDownOnArrow: Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["l" /* onlyOnLeftClick */])(function handleMouseDownOnArrow(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      // focus the input or prevent blurring
      this.focusInput();
      this.toggleMenu();
    }),

    handleClickOutside: function handleClickOutside(evt) {
      /* istanbul ignore else */
      if (this.$refs.wrapper && !this.$refs.wrapper.contains(evt.target)) {
        this.blurInput();
        this.closeMenu();
      }
    },
    handleSearchQueryChange: function handleSearchQueryChange() {
      if (this.trigger.searchQuery) {
        this.handleSearch();
      } else {
        this.exitSearchMode();
      }

      this.resetHighlightedOptionWhenNecessary(true);
    },
    handleSearch: function handleSearch() {
      var _this14 = this;

      // enter search mode
      this.localSearch.active = true;
      this.localSearch.noResults = true;

      // reset state
      this.traverseAllNodesDFS(function (node) {
        if (node.isBranch) {
          var _this14$$set;

          node.isExpandedOnSearch = false;
          node.showAllChildrenOnSearch = false;
          node.hasMatchedDescendants = false;
          _this14.$set(_this14.localSearch.countMap, node.id, (_this14$$set = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_this14$$set, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["b" /* ALL_CHILDREN */], 0), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_this14$$set, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["c" /* ALL_DESCENDANTS */], 0), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_this14$$set, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["k" /* LEAF_CHILDREN */], 0), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_this14$$set, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["l" /* LEAF_DESCENDANTS */], 0), _this14$$set));
        }
      });

      var lowerCasedSearchQuery = this.trigger.searchQuery.trim().toLocaleLowerCase();
      var splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, ' ').split(' ');
      this.traverseAllNodesDFS(function (node) {
        var isMatched = void 0;
        if (_this14.searchNested && splitSearchQuery.length > 1) {
          isMatched = splitSearchQuery.every(function (filterValue) {
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["i" /* includes */])(node.nestedSearchLabel, filterValue);
          });
        } else {
          isMatched = _this14.disableFuzzyMatching ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["i" /* includes */])(node.lowerCasedLabel, lowerCasedSearchQuery) : __WEBPACK_IMPORTED_MODULE_6_fuzzysearch___default()(lowerCasedSearchQuery, node.lowerCasedLabel);
        }
        node.isMatched = isMatched;

        if (isMatched) {
          _this14.localSearch.noResults = false;
          node.ancestors.forEach(function (ancestor) {
            return _this14.localSearch.countMap[ancestor.id][__WEBPACK_IMPORTED_MODULE_8__utils_constants__["c" /* ALL_DESCENDANTS */]]++;
          });
          if (node.isLeaf) node.ancestors.forEach(function (ancestor) {
            return _this14.localSearch.countMap[ancestor.id][__WEBPACK_IMPORTED_MODULE_8__utils_constants__["l" /* LEAF_DESCENDANTS */]]++;
          });
          if (node.parentNode !== __WEBPACK_IMPORTED_MODULE_8__utils_constants__["s" /* NO_PARENT_NODE */]) {
            _this14.localSearch.countMap[node.parentNode.id][__WEBPACK_IMPORTED_MODULE_8__utils_constants__["b" /* ALL_CHILDREN */]] += 1;
            // istanbul ignore else
            if (node.isLeaf) _this14.localSearch.countMap[node.parentNode.id][__WEBPACK_IMPORTED_MODULE_8__utils_constants__["k" /* LEAF_CHILDREN */]] += 1;
          }
        }

        if ((isMatched || node.isBranch && node.isExpandedOnSearch) && node.parentNode !== __WEBPACK_IMPORTED_MODULE_8__utils_constants__["s" /* NO_PARENT_NODE */]) {
          node.parentNode.isExpandedOnSearch = true;
          node.parentNode.hasMatchedDescendants = true;
        }
      });
    },
    exitSearchMode: function exitSearchMode() {
      this.localSearch.active = false;
    },
    shouldExpand: function shouldExpand(node) {
      return this.localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
    },
    isAllAncestorsExpanded: function isAllAncestorsExpanded(node) {
      var _this15 = this;

      return node.ancestors.every(function (ancestor) {
        return _this15.shouldExpand(ancestor);
      });
    },
    shouldOptionBeIncludedInSearchResult: function shouldOptionBeIncludedInSearchResult(node) {
      // this option is matched
      if (node.isMatched) return true;
      // this option is not matched, but has matched descendant(s)
      if (node.isBranch && node.hasMatchedDescendants) return true;
      // this option's parent has no matched descendants,
      // but after being expanded, all its children should be shown
      if (!node.isRootNode && node.parentNode.showAllChildrenOnSearch) return true;
      return false;
    },
    shouldShowOptionInMenu: function shouldShowOptionInMenu(node) {
      var checkIfCollapsed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (checkIfCollapsed && !node.isRootNode && !this.isAllAncestorsExpanded(node)) {
        // this option belongs to a collapsed folder option
        return false;
      }
      if (this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(node)) {
        return false;
      }
      return true;
    },
    setCurrentHighlightedOption: function setCurrentHighlightedOption(node) {
      if (!node) return;

      this.menu.current = node.id;

      var $option = this.$el.querySelector('.vue-treeselect__option[data-id="' + node.id + '"]');
      if ($option) Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["o" /* scrollIntoView */])(this.$refs.menu, $option);
    },
    resetHighlightedOptionWhenNecessary: function resetHighlightedOptionWhenNecessary() {
      var forceReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forceReset || this.menu.current == null || !this.shouldShowOptionInMenu(this.getNode(this.menu.current))) {
        this.setCurrentHighlightedOption(this.firstVisibleOption);
      }
    },
    highlightFirstOption: function highlightFirstOption() {
      if (!this.hasVisibleOptions) return;

      var first = this.visibleOptionIds[0];
      this.setCurrentHighlightedOption(this.getNode(first));
    },
    highlightPrevOption: function highlightPrevOption() {
      if (!this.hasVisibleOptions) return;

      var prev = this.visibleOptionIds.indexOf(this.menu.current) - 1;
      if (prev === -1) return this.highlightLastOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[prev]));
    },
    highlightNextOption: function highlightNextOption() {
      if (!this.hasVisibleOptions) return;

      var next = this.visibleOptionIds.indexOf(this.menu.current) + 1;
      if (next === this.visibleOptionIds.length) return this.highlightFirstOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[next]));
    },
    highlightLastOption: function highlightLastOption() {
      if (!this.hasVisibleOptions) return;

      var last = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["g" /* getLast */])(this.visibleOptionIds);
      this.setCurrentHighlightedOption(this.getNode(last));
    },
    closeMenu: function closeMenu() {
      if (!this.menu.isOpen || !this.disabled && this.alwaysOpen) return;
      this.saveMenuScrollPosition();
      this.menu.isOpen = false;
      this.toggleClickOutsideEvent(false);
      // reset search query after menu closes
      this.trigger.searchQuery = '';
      this.$emit('close', this.getValue(), this.getInstanceId());
    },
    openMenu: function openMenu() {
      if (this.disabled || this.menu.isOpen) return;
      this.menu.isOpen = true;
      this.$nextTick(this.adjustMenuOpenDirection);
      this.$nextTick(this.restoreMenuScrollPosition);
      if (!this.forest.isLoaded) this.loadRootOptions();
      this.toggleClickOutsideEvent(true);
      this.resetHighlightedOptionWhenNecessary();
      this.$emit('open', this.getInstanceId());
    },
    toggleMenu: function toggleMenu() {
      if (this.menu.isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    toggleExpanded: function toggleExpanded(node) {
      if (this.localSearch.active) {
        node.isExpandedOnSearch = !node.isExpandedOnSearch;
        if (node.isExpandedOnSearch) node.showAllChildrenOnSearch = true;
      } else {
        node.isExpanded = !node.isExpanded;
      }
    },
    buildForestState: function buildForestState() {
      var _this16 = this;

      var selectedNodeMap = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])();
      this.forest.selectedNodeIds.forEach(function (selectedNodeId) {
        selectedNodeMap[selectedNodeId] = true;
      });
      this.forest.selectedNodeMap = selectedNodeMap;

      var checkedStateMap = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])();
      if (this.multiple) {
        this.traverseAllNodesByIndex(function (node) {
          checkedStateMap[node.id] = __WEBPACK_IMPORTED_MODULE_8__utils_constants__["u" /* UNCHECKED */];
        });

        this.selectedNodes.forEach(function (selectedNode) {
          checkedStateMap[selectedNode.id] = __WEBPACK_IMPORTED_MODULE_8__utils_constants__["f" /* CHECKED */];

          if (!_this16.flat) {
            selectedNode.ancestors.forEach(function (ancestorNode) {
              if (!_this16.isSelected(ancestorNode)) {
                checkedStateMap[ancestorNode.id] = __WEBPACK_IMPORTED_MODULE_8__utils_constants__["g" /* INDETERMINATE */];
              }
            });
          }
        });
      }
      this.forest.checkedStateMap = checkedStateMap;
    },
    enhancedNormalizer: function enhancedNormalizer(raw) {
      return Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["a" /* assign */])({}, raw, this.normalizer(raw, this.getInstanceId()));
    },
    normalize: function normalize(parentNode, nodes, prevNodeMap) {
      var _this17 = this;

      var normalizedOptions = nodes.map(function (node) {
        return [_this17.enhancedNormalizer(node), node];
      }).map(function (_ref, index) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            node = _ref2[0],
            raw = _ref2[1];

        _this17.checkDuplication(node);
        _this17.verifyNodeShape(node);

        var id = node.id,
            label = node.label,
            children = node.children,
            isDefaultExpanded = node.isDefaultExpanded;

        var isRootNode = parentNode === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["s" /* NO_PARENT_NODE */];
        var level = isRootNode ? 0 : parentNode.level + 1;
        var isBranch = Array.isArray(children) || children === null;
        var isLeaf = !isBranch;
        var isDisabled = !!node.isDisabled || !_this17.flat && !isRootNode && parentNode.isDisabled;
        var lowerCasedLabel = label.toLocaleLowerCase();
        var nestedSearchLabel = isRootNode ? lowerCasedLabel : parentNode.nestedSearchLabel + ' ' + lowerCasedLabel;

        var normalized = _this17.$set(_this17.forest.nodeMap, id, Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["c" /* createMap */])());
        _this17.$set(normalized, 'id', id);
        _this17.$set(normalized, 'label', label);
        _this17.$set(normalized, 'level', level);
        _this17.$set(normalized, 'ancestors', isRootNode ? [] : parentNode.ancestors.concat(parentNode));
        _this17.$set(normalized, 'index', (isRootNode ? [] : parentNode.index).concat(index));
        _this17.$set(normalized, 'parentNode', parentNode);
        _this17.$set(normalized, 'lowerCasedLabel', lowerCasedLabel);
        _this17.$set(normalized, 'nestedSearchLabel', nestedSearchLabel);
        _this17.$set(normalized, 'isDisabled', isDisabled);
        _this17.$set(normalized, 'isMatched', false);
        _this17.$set(normalized, 'isBranch', isBranch);
        _this17.$set(normalized, 'isLeaf', isLeaf);
        _this17.$set(normalized, 'isRootNode', isRootNode);
        _this17.$set(normalized, 'raw', raw);

        if (isBranch) {
          var _this17$$set;

          var isLoaded = Array.isArray(children);

          _this17.$set(normalized, 'isLoaded', isLoaded);
          _this17.$set(normalized, 'isPending', false);
          _this17.$set(normalized, 'isExpanded', typeof isDefaultExpanded === 'boolean' ? isDefaultExpanded : level < _this17.defaultExpandLevel);
          _this17.$set(normalized, 'hasMatchedDescendants', false);
          _this17.$set(normalized, 'hasDisabledDescendants', false);
          _this17.$set(normalized, 'isExpandedOnSearch', false);
          _this17.$set(normalized, 'showAllChildrenOnSearch', false);
          _this17.$set(normalized, 'loadingChildrenError', '');
          _this17.$set(normalized, 'count', (_this17$$set = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_this17$$set, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["b" /* ALL_CHILDREN */], 0), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_this17$$set, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["c" /* ALL_DESCENDANTS */], 0), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_this17$$set, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["k" /* LEAF_CHILDREN */], 0), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_this17$$set, __WEBPACK_IMPORTED_MODULE_8__utils_constants__["l" /* LEAF_DESCENDANTS */], 0), _this17$$set));
          _this17.$set(normalized, 'children', isLoaded ? _this17.normalize(normalized, children, prevNodeMap) : []);

          if (!isLoaded && typeof _this17.loadOptions !== 'function') {
            Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["p" /* warning */])(function () {
              return false;
            }, function () {
              return 'Unloaded branch node detected. `loadOptions` prop is required to load its children.';
            });
          } else if (!isLoaded && normalized.isExpanded) {
            _this17.loadChildrenOptions(normalized);
          }
        }

        normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[__WEBPACK_IMPORTED_MODULE_8__utils_constants__["c" /* ALL_DESCENDANTS */]]++;
        });
        if (isLeaf) normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[__WEBPACK_IMPORTED_MODULE_8__utils_constants__["l" /* LEAF_DESCENDANTS */]]++;
        });
        if (!isRootNode) {
          parentNode.count[__WEBPACK_IMPORTED_MODULE_8__utils_constants__["b" /* ALL_CHILDREN */]] += 1;
          if (isLeaf) parentNode.count[__WEBPACK_IMPORTED_MODULE_8__utils_constants__["k" /* LEAF_CHILDREN */]] += 1;
          if (isDisabled) parentNode.hasDisabledDescendants = true;
        }

        if (prevNodeMap && prevNodeMap[id]) {
          var prev = prevNodeMap[id];
          if (prev.isBranch && normalized.isBranch) {
            normalized.isExpanded = prev.isExpanded;
            normalized.isExpandedOnSearch = prev.isExpandedOnSearch;
            normalized.isPending = prev.isPending;
            normalized.loadingChildrenError = prev.loadingChildrenError;
          }
        }

        return normalized;
      });

      if (this.branchNodesFirst) {
        var branchNodes = normalizedOptions.filter(function (option) {
          return option.isBranch;
        });
        var leafNodes = normalizedOptions.filter(function (option) {
          return option.isLeaf;
        });
        normalizedOptions = branchNodes.concat(leafNodes);
      }

      return normalizedOptions;
    },
    loadRootOptions: function loadRootOptions() {
      var _this18 = this;

      this.callLoadOptionsProp({
        action: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["p" /* LOAD_ROOT_OPTIONS */],
        isPending: function isPending() {
          return _this18.forest.isLoading;
        },
        start: function start() {
          _this18.forest.isLoading = true;
          _this18.forest.loadingError = '';
        },
        succeed: function succeed() {
          _this18.forest.isLoaded = true;
        },
        fail: function fail(err) {
          _this18.forest.loadingError = err.message || String(err);
        },
        end: function end() {
          _this18.forest.isLoading = false;
        }
      });
    },
    loadChildrenOptions: function loadChildrenOptions(parentNode) {
      var _this19 = this;

      var id = parentNode.id,
          raw = parentNode.raw;
      // the options may be reinitialized anytime during the loading process
      // so `parentNode` can be expired and we use `getNode()` to avoid that

      this.callLoadOptionsProp({
        action: __WEBPACK_IMPORTED_MODULE_8__utils_constants__["o" /* LOAD_CHILDREN_OPTIONS */],
        args: {
          parentNode: raw
        },
        isPending: function isPending() {
          return _this19.getNode(id).isPending;
        },
        start: function start() {
          _this19.getNode(id).isPending = true;
          _this19.getNode(id).loadingChildrenError = '';
        },
        succeed: function succeed() {
          _this19.getNode(id).isLoaded = true;
        },
        fail: function fail(err) {
          _this19.getNode(id).loadingChildrenError = err.message || String(err);
        },
        end: function end() {
          _this19.getNode(id).isPending = false;
        }
      });
    },
    callLoadOptionsProp: function callLoadOptionsProp(_ref3) {
      var action = _ref3.action,
          args = _ref3.args,
          isPending = _ref3.isPending,
          start = _ref3.start,
          succeed = _ref3.succeed,
          fail = _ref3.fail,
          end = _ref3.end;

      if (!this.loadOptions || isPending()) {
        return;
      }

      var callback = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["k" /* once */])(function (err) {
        if (err) {
          fail(err);
        } else {
          succeed();
        }

        end();
      });

      start();
      var result = this.loadOptions(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: action
      }, args, {
        callback: callback
      }));

      if (Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["j" /* isPromise */])(result)) {
        result.then(function () {
          callback();
        }, function (err) {
          callback(err);
        }).catch(function (err) {
          // istanbul ignore next
          console.error(err);
        });
      }
    },
    checkDuplication: function checkDuplication(node) {
      var _this20 = this;

      Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["p" /* warning */])(function () {
        return !(node.id in _this20.forest.nodeMap && !_this20.forest.nodeMap[node.id].isFallbackNode);
      }, function () {
        return 'Detected duplicate presence of node id ' + __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(node.id) + '. ' + ('Their labels are "' + _this20.forest.nodeMap[node.id].label + '" and "' + node.label + '" respectively.');
      });
    },
    verifyNodeShape: function verifyNodeShape(node) {
      Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["p" /* warning */])(function () {
        return !(node.children === undefined && node.isBranch === true);
      }, function () {
        return 'Are you meant to declare an unloaded branch node? ' + '`isBranch: true` is no longer supported, please use `children: null` instead.';
      });
    },
    select: function select(node) {
      if (this.disabled || node.isDisabled) {
        return;
      }

      if (this.single) {
        this.clear();
      }

      var state = this.multiple && !this.flat ? this.forest.checkedStateMap[node.id] === __WEBPACK_IMPORTED_MODULE_8__utils_constants__["u" /* UNCHECKED */] : !this.isSelected(node);

      if (state) {
        this._selectNode(node);
      } else {
        this._deselectNode(node);
      }

      this.buildForestState();

      if (state) {
        this.$emit('select', node.raw, this.getInstanceId());
      } else {
        this.$emit('deselect', node.raw, this.getInstanceId());
      }

      if (this.localSearch.active && state && (this.single || this.clearOnSelect)) {
        this.trigger.searchQuery = '';
      }

      if (this.single && this.closeOnSelect) {
        this.closeMenu();

        // istanbul ignore else
        if (this.searchable) {
          this._blurOnSelect = true;
        }
      }
    },
    clear: function clear() {
      var _this21 = this;

      if (this.hasValue) {
        this.forest.selectedNodeIds = this.multiple ? this.forest.selectedNodeIds.filter(function (nodeId) {
          return _this21.getNode(nodeId).isDisabled;
        }) : [];
        this.buildForestState();
      }
    },
    _selectNode: function _selectNode(node) {
      var _this22 = this;

      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$ignoreDisabled = _ref4.ignoreDisabled,
          ignoreDisabled = _ref4$ignoreDisabled === undefined ? false : _ref4$ignoreDisabled;

      if (this.single || this.flat || this.disableBranchNodes) {
        this.addValue(node);
        return;
      }

      if (node.isLeaf || node.isBranch && (!node.hasDisabledDescendants || ignoreDisabled)) {
        this.addValue(node);
      }

      if (node.isBranch) {
        this.traverseDescendantsBFS(node, function (descendant) {
          if (!descendant.isDisabled || ignoreDisabled) _this22.addValue(descendant);
        });
      }

      if (node.isLeaf || node.isBranch && (!node.hasDisabledDescendants || ignoreDisabled)) {
        var curr = node;
        while ((curr = curr.parentNode) !== __WEBPACK_IMPORTED_MODULE_8__utils_constants__["s" /* NO_PARENT_NODE */]) {
          if (curr.children.every(this.isSelected)) this.addValue(curr);else break;
        }
      }
    },
    _deselectNode: function _deselectNode(node) {
      var _this23 = this;

      if (this.single || this.flat || this.disableBranchNodes) {
        this.removeValue(node);
        return;
      }

      var hasUncheckedSomeDescendants = false;
      if (node.isBranch) {
        this.traverseDescendantsDFS(node, function (descendant) {
          if (!descendant.isDisabled) {
            _this23.removeValue(descendant);
            hasUncheckedSomeDescendants = true;
          }
        });
      }

      if (node.isLeaf ||
      /* node.isBranch && */hasUncheckedSomeDescendants ||
      /* node.isBranch && */node.children.length === 0) {
        this.removeValue(node);

        var curr = node;
        while ((curr = curr.parentNode) !== __WEBPACK_IMPORTED_MODULE_8__utils_constants__["s" /* NO_PARENT_NODE */]) {
          if (this.isSelected(curr)) this.removeValue(curr);else break;
        }
      }
    },
    addValue: function addValue(node) {
      this.forest.selectedNodeIds.push(node.id);
      this.forest.selectedNodeMap[node.id] = true;
    },
    removeValue: function removeValue(node) {
      Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["n" /* removeFromArray */])(this.forest.selectedNodeIds, node.id);
      delete this.forest.selectedNodeMap[node.id];
    },
    removeLastValue: function removeLastValue() {
      if (!this.hasValue) return;
      if (this.single) return this.clear();
      var lastValue = Object(__WEBPACK_IMPORTED_MODULE_7__utils_assist__["g" /* getLast */])(this.internalValue);
      var lastSelectedNode = this.getNode(lastValue);
      this.select(lastSelectedNode); // deselect
    },
    saveMenuScrollPosition: function saveMenuScrollPosition() {
      if (this.$refs.menu) this.menu.lastScrollPosition = this.$refs.menu.scrollTop;
    },
    restoreMenuScrollPosition: function restoreMenuScrollPosition() {
      if (this.$refs.menu) this.$refs.menu.scrollTop = this.menu.lastScrollPosition;
    },
    adjustMenuOpenDirection: function adjustMenuOpenDirection() {
      // istanbul ignore next
      if (typeof window === 'undefined') {
        return;
      }
      var rect = this.$el.getBoundingClientRect();
      var spaceAbove = rect.top;
      var spaceBelow = window.innerHeight - rect.bottom;
      var hasEnoughSpaceBelow = spaceBelow > this.maxHeight;
      var isInViewport = rect.top > 0 && window.innerHeight - rect.top > __WEBPACK_IMPORTED_MODULE_8__utils_constants__["q" /* MENU_BUFFER */];

      switch (true) {
        case hasEnoughSpaceBelow:
        case spaceBelow > spaceAbove:
        case !isInViewport:
        case this.openDirection === 'below':
        case this.openDirection === 'bottom':
          this.menu.prefferedOpenDirection = 'below';
          this.menu.optimizedHeight = Math.max(Math.min(spaceBelow - __WEBPACK_IMPORTED_MODULE_8__utils_constants__["q" /* MENU_BUFFER */], this.maxHeight), this.maxHeight);
          break;
        default:
          this.menu.prefferedOpenDirection = 'above';
          this.menu.optimizedHeight = Math.min(spaceAbove - __WEBPACK_IMPORTED_MODULE_8__utils_constants__["q" /* MENU_BUFFER */], this.maxHeight);
      }
    }
  },
  created: function created() {
    var _this24 = this;

    this.verifyProps();
    this.resetFlags();
    this.initialize(this.options);
    // re-initialize options when the `options` prop has changed
    this.$watch('options', function () {
      return _this24.initialize(_this24.options);
    }, { deep: true });
  },
  mounted: function mounted() {
    if (this.autoFocus || this.autofocus) this.$refs.value.focusInput();
    if (!this.forest.isLoaded && this.autoLoadRootOptions) this.loadRootOptions();
    if (this.alwaysOpen) this.openMenu();
  },
  destroyed: function destroyed() {
    // istanbul ignore next
    this.toggleClickOutsideEvent(false);
  }
});

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("fuzzysearch");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hiddenValue_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e5e998ea_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hiddenValue_vue__ = __webpack_require__(54);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hiddenValue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e5e998ea_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hiddenValue_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":"hidden","name":_vm.instance.name,"disabled":_vm.instance.disabled},domProps:{"value":_vm.stringifiedValue}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiValue_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_158be25c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_multiValue_vue__ = __webpack_require__(57);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_multiValue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_158be25c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_multiValue_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"okendo-treeselect__placeholder okendo-treeselect-helper-zoom-effect-off"},[_vm._t("placeholder",[_vm._v(_vm._s(_vm.instance.placeholder))])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"okendo-treeselect__value-container"},[_c('transition-group',{staticClass:"okendo-treeselect__multi-value",attrs:{"tag":"div","name":"okendo-treeselect__multi-value-item--transition","appear":""}},[_vm._l((_vm.instance.visibleValue),function(node){return [_c('div',{key:'value-' + node.id,staticClass:"okendo-treeselect__multi-value-item-container"},[_c('div',{class:[ 'okendo-treeselect__multi-value-item', { 'okendo-treeselect__multi-value-item-disabled': node.isDisabled } ],on:{"mousedown":function($event){_vm.handleMouseDownOnValueItem($event, node)}}},[_c('span',{staticClass:"okendo-treeselect__multi-value-label"},[_vm._v(_vm._s(node.label))]),_c('span',{staticClass:"okendo-treeselect__icon okendo-treeselect__value-remove"},[_c('i',{staticClass:"k-icon k-i-x"})])])])]}),(_vm.instance.hasExceededLimit)?_c('div',{key:"limit-tip",staticClass:"okendo-treeselect__limit-tip okendo-treeselect-helper-zoom-effect-off"},[_c('span',{staticClass:"okendo-treeselect__limit-tip-text"},[_vm._v(_vm._s(_vm.limitText))])]):_vm._e(),(!_vm.instance.hasValue && !_vm.instance.trigger.searchQuery)?_c('placeholder',{key:"placeholer"}):_vm._e(),_c('search-input',{key:"input",ref:"input"})],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_singleValue_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_687cd5e8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_singleValue_vue__ = __webpack_require__(59);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_singleValue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_687cd5e8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_singleValue_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"okendo-treeselect__value-container"},[(_vm.instance.hasValue && !_vm.instance.trigger.searchQuery)?_c('div',{staticClass:"okendo-treeselect__single-value"},[_vm._v("\n    "+_vm._s(_vm.instance.selectedNodes[0].label)+"\n  ")]):(!_vm.instance.trigger.searchQuery)?_c('placeholder'):_vm._e(),_c('search-input',{key:"input",ref:"input"})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_options_vue__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_311e03cc_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_options_vue__ = __webpack_require__(63);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_options_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_311e03cc_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_options_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_assist__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    node: {
      type: Object,
      required: true
    }
  },

  computed: {
    checkedState: function checkedState() {
      return this.instance.forest.checkedStateMap[this.node.id];
    },
    shouldExpand: function shouldExpand() {
      if (!this.node.isBranch) return false;
      return this.instance.shouldExpand(this.node);
    },
    shouldShowCount: function shouldShowCount() {
      if (!this.node.isBranch) return false;
      return this.instance.localSearch.active ? this.instance.showCountOnSearchComputed : this.instance.showCount;
    },
    count: function count() {
      if (!this.shouldShowCount) return NaN;
      return this.instance.localSearch.active ? this.instance.localSearch.countMap[this.node.id][this.instance.showCountOf] : this.node.count[this.instance.showCountOf];
    },
    shouldShowArrorPlaceholder: function shouldShowArrorPlaceholder() {
      if (this.node.isBranch) return false;
      return this.node.isLeaf && this.instance.hasBranchNodes;
    }
  },
  watch: {
    shouldExpand: function shouldExpand(newValue) {
      if (newValue === true && !this.node.isLoaded) {
        // load children when expanded
        this.instance.loadChildrenOptions(this.node);
      }
    }
  },
  methods: {
    handleMouseDownOnOption: Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["l" /* onlyOnLeftClick */])(function handleMouseDownOnOptionArrow() {
      if (this.node.isBranch && this.instance.disableBranchNodes) {
        this.instance.toggleExpanded(this.node);
      } else {
        this.instance.select(this.node);
      }
    }),
    handleMouseDownOnOptionArrow: Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["l" /* onlyOnLeftClick */])(function handleMouseDownOnOptionArrow() {
      this.instance.toggleExpanded(this.node);
    }),
    setCurrentHighlightedOption: function setCurrentHighlightedOption() {
      this.instance.setCurrentHighlightedOption(this.node);
    }
  }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("okendo-treeselect__tip okendo-treeselect__" + _vm.type + "-tip")},[_c('div',{staticClass:"okendo-treeselect__icon-container"},[_c('span',{class:("okendo-treeselect__icon-" + _vm.icon)})]),_c('span',{class:("okendo-treeselect__tip-text okendo-treeselect__" + _vm.type + "-tip-text")},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"okendo-treeselect__list-item",class:("okendo-treeselect__indent-level-" + (_vm.node.level))},[_c('div',{class:[ 'okendo-treeselect__option', {
    'okendo-treeselect__option--disabled': _vm.node.isDisabled,
    'okendo-treeselect__option--selected': _vm.instance.isSelected(_vm.node),
    'okendo-treeselect__option--highlight': _vm.instance.menu.current === _vm.node.id,
    'okendo-treeselect__option--matched': _vm.instance.localSearch.active && _vm.node.isMatched,
    'okendo-treeselect__option--hide': !_vm.instance.shouldShowOptionInMenu(_vm.node, false),
  } ],attrs:{"data-id":_vm.node.id},on:{"mouseenter":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.setCurrentHighlightedOption($event)}}},[(_vm.shouldShowArrorPlaceholder)?_c('div',{staticClass:"okendo-treeselect__option-arrow-placeholder"},[_vm._v(" ")]):(_vm.node.isBranch)?_c('div',{staticClass:"okendo-treeselect__option-arrow-container",on:{"mousedown":_vm.handleMouseDownOnOptionArrow}},[_c('transition',{attrs:{"name":"okendo-treeselect__option-arrow--prepare","appear":""}},[_c('i',{staticClass:"k-icon k-i-arrow-60-down",class:[ 'okendo-treeselect__option-arrow', { 'okendo-treeselect__option-arrow--rotated': _vm.shouldExpand } ]})])],1):_vm._e(),_c('div',{staticClass:"okendo-treeselect__label-container",on:{"mousedown":_vm.handleMouseDownOnOption}},[(_vm.instance.multiple && (!_vm.instance.disableBranchNodes || _vm.node.isLeaf))?_c('div',{staticClass:"okendo-treeselect__checkbox-container"},[_c('span',{class:[ 'okendo-treeselect__checkbox', {
          'okendo-treeselect__checkbox--checked': _vm.checkedState === _vm.CHECKED,
          'okendo-treeselect__checkbox--indeterminate': _vm.checkedState === _vm.INDETERMINATE,
          'okendo-treeselect__checkbox--unchecked': _vm.checkedState === _vm.UNCHECKED,
          'okendo-treeselect__checkbox--disabled': _vm.node.isDisabled,
        } ]},[_c('span',{staticClass:"okendo-treeselect__check-mark"}),_c('span',{staticClass:"okendo-treeselect__minus-mark"})])]):_vm._e(),_vm._t("option-label",null,{node:_vm.node,shouldShowCount:_vm.shouldShowCount,count:_vm.count,labelClassName:"okendo-treeselect__label",countClassName:"okendo-treeselect__count"})],2)]),_c('transition',{attrs:{"name":"okendo-treeselect__list--transition"}},[(_vm.shouldExpand)?_c('div',{staticClass:"okendo-treeselect__list"},[(_vm.node.isLoaded)?[(_vm.node.children.length)?_vm._l((_vm.node.children),function(childNode){return _c('okendo-treeselect--option',{key:childNode.id,attrs:{"node":childNode},scopedSlots:_vm._u([{key:"option-label",fn:function(ref){
        var node = ref.node;
        var shouldShowCount = ref.shouldShowCount;
        var count = ref.count;
        var labelClassName = ref.labelClassName;
        var countClassName = ref.countClassName;
return [_vm._t("option-label",null,{node:node,shouldShowCount:shouldShowCount,count:count,labelClassName:labelClassName,countClassName:countClassName})]}}])})}):_c('tip',{attrs:{"type":"no-children","icon":"warning"}},[_vm._v(_vm._s(_vm.instance.noChildrenText))])]:(_vm.node.isPending)?_c('tip',{attrs:{"type":"loading","icon":"loader"}},[_vm._v(_vm._s(_vm.instance.loadingText))]):(_vm.node.loadingChildrenError)?_c('tip',{attrs:{"type":"error","icon":"error"}},[_vm._v("\n        "+_vm._s(_vm.node.loadingChildrenError)+"\n        "),_c('a',{staticClass:"okendo-treeselect__retry",attrs:{"title":_vm.instance.retryTitle},on:{"click":function($event){_vm.instance.loadChildrenOptions(_vm.node)}}},[_vm._v("\n          "+_vm._s(_vm.instance.retryText)+"\n        ")])]):_vm._e()],2):_vm._e()])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"treeSelectWrapper",class:['okendo-treeselect', {
  'okendo-treeselect--single': _vm.single,
  'okendo-treeselect--multi': _vm.multiple,
  'okendo-treeselect--searchable': _vm.searchable,
  'okendo-treeselect--disabled': _vm.disabled,
  'okendo-treeselect--focused': _vm.trigger.isFocused,
  'okendo-treeselect--has-value': _vm.hasValue,
  'okendo-treeselect--open': _vm.menu.isOpen,
  'okendo-treeselect--open-above': _vm.menu.prefferedOpenDirection === 'above',
  'okendo-treeselect--open-below': _vm.menu.prefferedOpenDirection === 'below',
  'okendo-treeselect--branch-nodes-disabled': _vm.disableBranchNodes
}],on:{"mousedown":_vm.handleMouseDown}},[(_vm.name && _vm.hasValue)?[(_vm.single)?_c('HiddenField',{attrs:{"stringified-value":_vm.stringifyValue(_vm.internalValue[0])}}):(_vm.joinValues)?_c('HiddenField',{attrs:{"stringified-value":_vm.internalValue.map(_vm.stringifyValue).join(_vm.delimiter)}}):_vm._l((_vm.internalValue),function(v,i){return _c('HiddenField',{key:i,attrs:{"stringified-value":_vm.stringifyValue(v)}})})]:_vm._e(),_c('div',{staticClass:"okendo-treeselect__control"},[(_vm.single)?_c('single-value',{ref:"value"}):_c('multi-value',{ref:"value"}),(_vm.shouldShowX)?_c('div',{staticClass:"okendo-treeselect__x-container",attrs:{"title":_vm.multiple ? _vm.clearAllText : _vm.clearValueText},on:{"mousedown":_vm.handleMouseDownOnClear}},[_c('i',{staticClass:"k-icon k-i-x okendo-treeselect__x"})]):_vm._e(),(!_vm.menu.isOpen || !_vm.alwaysOpen)?_c('div',{staticClass:"okendo-treeselect__control-arrow-container",on:{"mousedown":_vm.handleMouseDownOnArrow}},[_c('i',{staticClass:"k-icon k-i-arrow-60-up",class:[ 'okendo-treeselect__control-arrow', { 'okendo-treeselect__control-arrow--rotated': _vm.menu.isOpen } ]})]):_vm._e()],1),_c('transition',{attrs:{"name":"okendo-treeselect__menu--transition"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.menu.isOpen),expression:"menu.isOpen"}],ref:"menu",staticClass:"okendo-treeselect__menu",style:({ maxHeight: _vm.menu.optimizedHeight + 'px' })},[(_vm.forest.isLoaded)?[(_vm.localSearch.active && _vm.localSearch.noResults)?_c('tip',{attrs:{"type":"no-results","icon":"warning"}},[_vm._v(_vm._s(_vm.noResultsText))]):(_vm.forest.normalizedOptions.length === 0)?_c('tip',{attrs:{"type":"no-options","icon":"warning"}},[_vm._v(_vm._s(_vm.noOptionsText))]):_c('div',{staticClass:"okendo-treeselect__list"},_vm._l((_vm.forest.normalizedOptions),function(rootNode){return _c('treeselect-option',{key:rootNode.id,attrs:{"node":rootNode},scopedSlots:_vm._u([{key:"option-label",fn:function(ref){
var node = ref.node;
var shouldShowCount = ref.shouldShowCount;
var count = ref.count;
var labelClassName = ref.labelClassName;
var countClassName = ref.countClassName;
return [_vm._t("option-label",[_c('label',{class:labelClassName},[_vm._v("\n                  "+_vm._s(node.label)+"\n                  "),(shouldShowCount)?_c('span',{class:countClassName},[_vm._v("("+_vm._s(count)+")")]):_vm._e()])],{node:node,shouldShowCount:shouldShowCount,count:count,labelClassName:labelClassName,countClassName:countClassName})]}}])})}))]:[(_vm.loading || _vm.forest.isLoading)?_c('tip',{attrs:{"type":"loading","icon":"loader"}},[_vm._v(_vm._s(_vm.loadingText))]):(_vm.forest.loadingError)?_c('tip',{attrs:{"type":"error","icon":"error"}},[_vm._v("\n          "+_vm._s(_vm.forest.loadingError)+"\n          "),_c('a',{staticClass:"okendo-treeselect__retry",attrs:{"title":_vm.retryTitle},on:{"click":_vm.loadRootOptions}},[_vm._v("\n            "+_vm._s(_vm.retryText)+"\n          ")])]):_vm._e()]],2)])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);