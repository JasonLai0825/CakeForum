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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_js_route_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/assets/js/route-config.js */ \"./src/assets/js/route-config.js\");\n\r\n\r\nconst router = new VueRouter({\r\n    routes: _src_assets_js_route_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n})\r\n\r\nconst app = new Vue({\r\n    el: '#content',\r\n    router\r\n})\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/about.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/about.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    \r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/about.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/homepage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/homepage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  data() {\r\n    return {\r\n      banner_img3: 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_3266_19.jpg',\r\n      logojpg:'./cakeforum\\\\src\\\\assets\\\\logo.jpg'\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/homepage.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/about.vue?vue&type=template&id=277a612d&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/about.vue?vue&type=template&id=277a612d& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [_vm._v(\"about\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/about.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/homepage.vue?vue&type=template&id=fa4e1604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/homepage.vue?vue&type=template&id=fa4e1604& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container p-0\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"carousel slide\",\n        attrs: { id: \"banner-carousel\", \"data-ride\": \"carousel\" }\n      },\n      [\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"carousel-inner\" }, [\n          _vm._m(1),\n          _vm._v(\" \"),\n          _vm._m(2),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"carousel-item\" }, [\n            _c(\"img\", { staticClass: \"img\", attrs: { src: _vm.banner_img3 } })\n          ]),\n          _vm._v(\" \"),\n          _vm._m(3),\n          _vm._v(\" \"),\n          _vm._m(4)\n        ]),\n        _vm._v(\" \"),\n        _vm._m(5)\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(6),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"container\" }, [\n      _vm._m(7),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"card col-sm-3 border-0 text-center\" }, [\n          _c(\"img\", {\n            staticClass: \"card-img-top\",\n            attrs: { src: _vm.logojpg, alt: \"Card image cap\" }\n          }),\n          _vm._v(\" \"),\n          _vm._m(8)\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"card col-sm-3 border-0 text-center\" }, [\n          _c(\"img\", {\n            staticClass: \"card-img-top\",\n            attrs: { src: _vm.logojpg, alt: \"Card image cap\" }\n          }),\n          _vm._v(\" \"),\n          _vm._m(9)\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"card col-sm-3 border-0 text-center\" }, [\n          _c(\"img\", {\n            staticClass: \"card-img-top\",\n            attrs: { src: _vm.logojpg, alt: \"Card image cap\" }\n          }),\n          _vm._v(\" \"),\n          _vm._m(10)\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"card col-sm-3 border-0 text-center\" }, [\n          _c(\"img\", {\n            staticClass: \"card-img-top\",\n            attrs: { src: _vm.logojpg, alt: \"Card image cap\" }\n          }),\n          _vm._v(\" \"),\n          _vm._m(11)\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"container\" }, [\n      _vm._m(12),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"card col-sm-6 border-0 text-center\" }, [\n          _c(\"img\", {\n            staticClass: \"card-img-top img\",\n            attrs: { src: _vm.logojpg, alt: \"Card image cap\" }\n          }),\n          _vm._v(\" \"),\n          _vm._m(13)\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"card col-sm-6 border-0 text-center\" }, [\n          _c(\"img\", {\n            staticClass: \"card-img-top img\",\n            attrs: { src: _vm.logojpg, alt: \"Card image cap\" }\n          }),\n          _vm._v(\" \"),\n          _vm._m(14)\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"ol\", { staticClass: \"carousel-indicators\" }, [\n      _c(\"li\", {\n        staticClass: \"active\",\n        attrs: { \"data-target\": \"banner-carousel\", \"data-slide-to\": \"0\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"li\", {\n        attrs: { \"data-target\": \"banner-carousel\", \"data-slide-to\": \"1\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"li\", {\n        attrs: { \"data-target\": \"banner-carousel\", \"data-slide-to\": \"2\" }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"carousel-item active\" }, [\n      _c(\"img\", {\n        staticClass: \"img\",\n        attrs: {\n          src: \"https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_412_8.jpg\"\n        }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"carousel-item\" }, [\n      _c(\"img\", {\n        staticClass: \"img\",\n        attrs: {\n          src: \"http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg\"\n        }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"a\",\n      {\n        staticClass: \"carousel-control-prev\",\n        attrs: { href: \"#banner-carousel\", \"data-slide\": \"prev\" }\n      },\n      [_c(\"span\", { staticClass: \"carousel-control-prev-icon\" })]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"a\",\n      {\n        staticClass: \"carousel-control-next\",\n        attrs: { href: \"#banner-carousel\", \"data-slide\": \"next\" }\n      },\n      [_c(\"span\", { staticClass: \"carousel-control-next-icon\" })]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"carousel-caption d-none d-md-block\" }, [\n      _c(\"h3\", [_vm._v(\"Welcome to CakeForum\")]),\n      _vm._v(\" \"),\n      _c(\"button\", { staticClass: \"btn\", attrs: { type: \"button\" } }, [\n        _vm._v(\"View On Github\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row mt-4 mb-4 text-center\" }, [\n      _c(\"div\", { staticClass: \"col-xl-4\" }, [\n        _c(\"h4\", [_vm._v(\"Hot Topics\")]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"hot-info-border\" }),\n        _vm._v(\" \"),\n        _c(\"article\", [\n          _c(\"h2\", [_vm._v(\"Google Chrome\")]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\n              \"Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!\"\n            )\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-xl-4 border-left border-right\" }, [\n        _c(\"h4\", [_vm._v(\"Hot Articles\")]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"hot-info-border\" }),\n        _vm._v(\" \"),\n        _c(\"article\", [\n          _c(\"h2\", [_vm._v(\"Google Chrome\")]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\n              \"Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!\"\n            )\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-xl-4\" }, [\n        _c(\"h4\", [_vm._v(\"Newest Articles\")]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"hot-info-border\" }),\n        _vm._v(\" \"),\n        _c(\"article\", [\n          _c(\"h2\", [_vm._v(\"Google Chrome\")]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\n              \"Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!\"\n            )\n          ])\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row\", attrs: { \"float:right\": \"\" } }, [\n      _c(\"div\", { staticClass: \"col-sm-6\" }, [_c(\"h3\", [_vm._v(\"Front-end\")])]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-sm-6\" }, [\n        _c(\n          \"a\",\n          {\n            staticClass: \"pull-right vertical-center\",\n            staticStyle: { \"text-align\": \"center\", float: \"right\" },\n            attrs: { href: \"#\" }\n          },\n          [_vm._v(\"+ view more\")]\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"card-block\" }, [\n      _c(\"h4\", { staticClass: \"card-title\" }, [_vm._v(\"HTML\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"card-block\" }, [\n      _c(\"h4\", { staticClass: \"card-title\" }, [_vm._v(\"css\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"card-block\" }, [\n      _c(\"h4\", { staticClass: \"card-title\" }, [_vm._v(\"bootstrap\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"card-block\" }, [\n      _c(\"h4\", { staticClass: \"card-title\" }, [_vm._v(\"Vue.js\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row\", attrs: { \"float:right\": \"\" } }, [\n      _c(\"div\", { staticClass: \"col-sm-6\" }, [_c(\"h3\", [_vm._v(\"Back-end\")])]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"col-sm-6\" }, [\n        _c(\n          \"a\",\n          {\n            staticClass: \"pull-right vertical-center\",\n            staticStyle: { \"text-align\": \"center\", float: \"right\" },\n            attrs: { href: \"#\" }\n          },\n          [_vm._v(\"+ view more\")]\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"card-block\" }, [\n      _c(\"h4\", { staticClass: \"card-title\" }, [_vm._v(\"HTML\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"card-block\" }, [\n      _c(\"h4\", { staticClass: \"card-title\" }, [_vm._v(\"Vue.js\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/homepage.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/assets/js/route-config.js":
/*!***************************************!*\
  !*** ./src/assets/js/route-config.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_homepage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/homepage.vue */ \"./src/components/homepage.vue\");\n/* harmony import */ var _components_about_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/about.vue */ \"./src/components/about.vue\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\r\n        path: '/',\r\n        component: _components_homepage_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    },\r\n    {\r\n        path: '/about',\r\n        component: _components_about_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    }\r\n]);\n\n//# sourceURL=webpack:///./src/assets/js/route-config.js?");

/***/ }),

/***/ "./src/components/about.vue":
/*!**********************************!*\
  !*** ./src/components/about.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_vue_vue_type_template_id_277a612d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=277a612d& */ \"./src/components/about.vue?vue&type=template&id=277a612d&\");\n/* harmony import */ var _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=script&lang=js& */ \"./src/components/about.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _about_vue_vue_type_template_id_277a612d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _about_vue_vue_type_template_id_277a612d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/about.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/about.vue?");

/***/ }),

/***/ "./src/components/about.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/about.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/about.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/about.vue?");

/***/ }),

/***/ "./src/components/about.vue?vue&type=template&id=277a612d&":
/*!*****************************************************************!*\
  !*** ./src/components/about.vue?vue&type=template&id=277a612d& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_277a612d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=template&id=277a612d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/about.vue?vue&type=template&id=277a612d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_277a612d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_277a612d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/about.vue?");

/***/ }),

/***/ "./src/components/homepage.vue":
/*!*************************************!*\
  !*** ./src/components/homepage.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_vue_vue_type_template_id_fa4e1604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.vue?vue&type=template&id=fa4e1604& */ \"./src/components/homepage.vue?vue&type=template&id=fa4e1604&\");\n/* harmony import */ var _homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.vue?vue&type=script&lang=js& */ \"./src/components/homepage.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _homepage_vue_vue_type_template_id_fa4e1604___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _homepage_vue_vue_type_template_id_fa4e1604___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/homepage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/homepage.vue?");

/***/ }),

/***/ "./src/components/homepage.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/homepage.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./homepage.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/homepage.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/homepage.vue?");

/***/ }),

/***/ "./src/components/homepage.vue?vue&type=template&id=fa4e1604&":
/*!********************************************************************!*\
  !*** ./src/components/homepage.vue?vue&type=template&id=fa4e1604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_template_id_fa4e1604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./homepage.vue?vue&type=template&id=fa4e1604& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/homepage.vue?vue&type=template&id=fa4e1604&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_template_id_fa4e1604___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homepage_vue_vue_type_template_id_fa4e1604___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/homepage.vue?");

/***/ })

/******/ });