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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar SitecoreExpEditorPlugin = {\n\tinstall: function install(Vue, options) {\n\t\tif ((typeof Sitecore === \"undefined\" ? \"undefined\" : _typeof(Sitecore)) !== ( true ? \"undefined\" : undefined)) {\n\t\t\t// extend the Sitecore placeholder chrome type\n\t\t\tSitecore.PageModes.ChromeTypes.Placeholder = Sitecore.PageModes.ChromeTypes.Placeholder.extend({\n\t\t\t\tinsertRendering: function insertRendering(data, openProperties) {\n\t\t\t\t\tvar _this = this;\n\n\t\t\t\t\t// call the base insertRendering() before processing\n\t\t\t\t\tthis.base(data, openProperties);\n\n\t\t\t\t\t// the setTimeout() is a bit ugly but is necessary to prevent an async race condition with a jQuery animation\n\t\t\t\t\tsetTimeout(function () {\n\t\t\t\t\t\t// check all of the renderings in this placeholder as they are all reset\n\t\t\t\t\t\tArray.prototype.forEach.call(_this.chrome.element, function (element) {\n\t\t\t\t\t\t\t// check against all globally registered Vue components\n\t\t\t\t\t\t\tObject.keys(Vue.options.components).forEach(function (component) {\n\t\t\t\t\t\t\t\t// get all of the descendants of the renderings\n\t\t\t\t\t\t\t\t[].concat(_toConsumableArray(element.getElementsByTagName(component)))\n\t\t\t\t\t\t\t\t// filter out any elements that might have been already registered\n\t\t\t\t\t\t\t\t.filter(function (childElement) {\n\t\t\t\t\t\t\t\t\treturn !Object.prototype.hasOwnProperty.call(childElement, '__vue__');\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t// initialize matching elements as the corresponding Vue component\n\t\t\t\t\t\t\t\t.forEach(function (childElement) {\n\t\t\t\t\t\t\t\t\treturn new Vue.options.components[component]({\n\t\t\t\t\t\t\t\t\t\tel: childElement\n\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\t// reset the chrome in Experience Editor after the Vue rendering pipeline is complete\n\t\t\t\t\t\tSitecore.PageModes.ChromeManager.resetChromes();\n\t\t\t\t\t}, 500);\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\temptyLookFillerCssClass: Sitecore.PageModes.ChromeTypes.Placeholder.emptyLookFillerCssClass,\n\t\t\t\tgetDefaultAjaxOptions: Sitecore.PageModes.ChromeTypes.Placeholder.getDefaultAjaxOptions\n\t\t\t});\n\t\t}\n\n\t\t// initialize empty array on the instance to track placeholder keys\n\t\tVue.prototype.$placeholderKeys = [];\n\n\t\tVue.mixin({\n\t\t\tbeforeCreate: function beforeCreate() {\n\t\t\t\t// find all of the placeholder <code> elements and store the id and placeholder key pairing into the array\n\t\t\t\tthis.$placeholderKeys = this.$slots.default && [].concat(_toConsumableArray(this.$slots.default.filter(function (slot) {\n\t\t\t\t\treturn slot.tag == \"code\" && slot.data.attrs.chrometype == \"placeholder\" && slot.data.attrs.kind == \"open\";\n\t\t\t\t}))).map(function (slot) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tid: slot.data.attrs.id,\n\t\t\t\t\t\tkey: slot.data.key\n\t\t\t\t\t};\n\t\t\t\t});\n\t\t\t},\n\t\t\tmounted: function mounted() {\n\t\t\t\t// if there are mapped placeholder keys, reset the key attribute on the placeholder <code> elements\n\t\t\t\tthis.$placeholderKeys && this.$placeholderKeys.forEach(function (entry) {\n\t\t\t\t\treturn document.getElementById(entry.id).setAttribute(\"key\", entry.key);\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t}\n};\n\nexports.default = SitecoreExpEditorPlugin;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2l0ZWNvcmVFeHBFZGl0b3JQbHVnaW4gPSB7XHJcblx0aW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcclxuXHRcdGlmICh0eXBlb2YgU2l0ZWNvcmUgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuXHRcdFx0Ly8gZXh0ZW5kIHRoZSBTaXRlY29yZSBwbGFjZWhvbGRlciBjaHJvbWUgdHlwZVxyXG5cdFx0XHRTaXRlY29yZS5QYWdlTW9kZXMuQ2hyb21lVHlwZXMuUGxhY2Vob2xkZXIgPSBTaXRlY29yZS5QYWdlTW9kZXMuQ2hyb21lVHlwZXMuUGxhY2Vob2xkZXIuZXh0ZW5kKHtcclxuXHRcdFx0XHRpbnNlcnRSZW5kZXJpbmcoZGF0YSwgb3BlblByb3BlcnRpZXMpIHtcclxuXHRcdFx0XHRcdC8vIGNhbGwgdGhlIGJhc2UgaW5zZXJ0UmVuZGVyaW5nKCkgYmVmb3JlIHByb2Nlc3NpbmdcclxuXHRcdFx0XHRcdHRoaXMuYmFzZShkYXRhLCBvcGVuUHJvcGVydGllcyk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gdGhlIHNldFRpbWVvdXQoKSBpcyBhIGJpdCB1Z2x5IGJ1dCBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCBhbiBhc3luYyByYWNlIGNvbmRpdGlvbiB3aXRoIGEgalF1ZXJ5IGFuaW1hdGlvblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIGNoZWNrIGFsbCBvZiB0aGUgcmVuZGVyaW5ncyBpbiB0aGlzIHBsYWNlaG9sZGVyIGFzIHRoZXkgYXJlIGFsbCByZXNldFxyXG5cdFx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuY2hyb21lLmVsZW1lbnQsIGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGNoZWNrIGFnYWluc3QgYWxsIGdsb2JhbGx5IHJlZ2lzdGVyZWQgVnVlIGNvbXBvbmVudHNcclxuXHRcdFx0XHRcdFx0XHRPYmplY3Qua2V5cyhWdWUub3B0aW9ucy5jb21wb25lbnRzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBnZXQgYWxsIG9mIHRoZSBkZXNjZW5kYW50cyBvZiB0aGUgcmVuZGVyaW5nc1xyXG5cdFx0XHRcdFx0XHRcdFx0Wy4uLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29tcG9uZW50KV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gZmlsdGVyIG91dCBhbnkgZWxlbWVudHMgdGhhdCBtaWdodCBoYXZlIGJlZW4gYWxyZWFkeSByZWdpc3RlcmVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoY2hpbGRFbGVtZW50ID0+ICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2hpbGRFbGVtZW50LCAnX192dWVfXycpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBpbml0aWFsaXplIG1hdGNoaW5nIGVsZW1lbnRzIGFzIHRoZSBjb3JyZXNwb25kaW5nIFZ1ZSBjb21wb25lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmZvckVhY2goY2hpbGRFbGVtZW50ID0+IG5ldyBWdWUub3B0aW9ucy5jb21wb25lbnRzW2NvbXBvbmVudF0oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsOiBjaGlsZEVsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSkpXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gcmVzZXQgdGhlIGNocm9tZSBpbiBFeHBlcmllbmNlIEVkaXRvciBhZnRlciB0aGUgVnVlIHJlbmRlcmluZyBwaXBlbGluZSBpcyBjb21wbGV0ZVxyXG5cdFx0XHRcdFx0XHRTaXRlY29yZS5QYWdlTW9kZXMuQ2hyb21lTWFuYWdlci5yZXNldENocm9tZXMoKTtcclxuXHRcdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVtcHR5TG9va0ZpbGxlckNzc0NsYXNzOiBTaXRlY29yZS5QYWdlTW9kZXMuQ2hyb21lVHlwZXMuUGxhY2Vob2xkZXIuZW1wdHlMb29rRmlsbGVyQ3NzQ2xhc3MsXHJcblx0XHRcdFx0Z2V0RGVmYXVsdEFqYXhPcHRpb25zOiBTaXRlY29yZS5QYWdlTW9kZXMuQ2hyb21lVHlwZXMuUGxhY2Vob2xkZXIuZ2V0RGVmYXVsdEFqYXhPcHRpb25zXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluaXRpYWxpemUgZW1wdHkgYXJyYXkgb24gdGhlIGluc3RhbmNlIHRvIHRyYWNrIHBsYWNlaG9sZGVyIGtleXNcclxuXHRcdFZ1ZS5wcm90b3R5cGUuJHBsYWNlaG9sZGVyS2V5cyA9IFtdO1xyXG5cclxuXHRcdFZ1ZS5taXhpbih7XHJcblx0XHRcdGJlZm9yZUNyZWF0ZSgpIHtcclxuXHRcdFx0XHQvLyBmaW5kIGFsbCBvZiB0aGUgcGxhY2Vob2xkZXIgPGNvZGU+IGVsZW1lbnRzIGFuZCBzdG9yZSB0aGUgaWQgYW5kIHBsYWNlaG9sZGVyIGtleSBwYWlyaW5nIGludG8gdGhlIGFycmF5XHJcblx0XHRcdFx0dGhpcy4kcGxhY2Vob2xkZXJLZXlzID0gdGhpcy4kc2xvdHMuZGVmYXVsdCAmJiBbXHJcblx0XHRcdFx0XHQuLi50aGlzLiRzbG90cy5kZWZhdWx0LmZpbHRlcihcclxuXHRcdFx0XHRcdFx0c2xvdCA9PlxyXG5cdFx0XHRcdFx0XHRzbG90LnRhZyA9PSBcImNvZGVcIiAmJlxyXG5cdFx0XHRcdFx0XHRzbG90LmRhdGEuYXR0cnMuY2hyb21ldHlwZSA9PSBcInBsYWNlaG9sZGVyXCIgJiZcclxuXHRcdFx0XHRcdFx0c2xvdC5kYXRhLmF0dHJzLmtpbmQgPT0gXCJvcGVuXCJcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRdLm1hcChzbG90ID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRcdGlkOiBzbG90LmRhdGEuYXR0cnMuaWQsXHJcblx0XHRcdFx0XHRcdGtleTogc2xvdC5kYXRhLmtleVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0XHQvLyBpZiB0aGVyZSBhcmUgbWFwcGVkIHBsYWNlaG9sZGVyIGtleXMsIHJlc2V0IHRoZSBrZXkgYXR0cmlidXRlIG9uIHRoZSBwbGFjZWhvbGRlciA8Y29kZT4gZWxlbWVudHNcclxuXHRcdFx0XHR0aGlzLiRwbGFjZWhvbGRlcktleXMgJiYgdGhpcy4kcGxhY2Vob2xkZXJLZXlzLmZvckVhY2goZW50cnkgPT5cclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVudHJ5LmlkKS5zZXRBdHRyaWJ1dGUoXCJrZXlcIiwgZW50cnkua2V5KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXRlY29yZUV4cEVkaXRvclBsdWdpbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUE0QkE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQXRCQTtBQXdCQTtBQWhFQTtBQUNBO0FBa0VBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });