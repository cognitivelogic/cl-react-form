(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define("validate-promise", ["react", "react-bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["validate-promise"] = factory(require("react"), require("react-bootstrap"));
	else
		root["validate-promise"] = factory(root["React"], root["ReactBootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getField = undefined;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _flowDeclarations = __webpack_require__(3);

	var _FormGroups = __webpack_require__(4);

	var _FormGroups2 = _interopRequireDefault(_FormGroups);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var render = function render(props) {
	  if (props.layout) {
	    var Layout = props.layout;
	    return _react2.default.createElement(Layout, props);
	  }
	  return _react2.default.createElement(
	    'form',
	    null,
	    _react2.default.createElement(_FormGroups2.default, props)
	  );
	},


	// Helper to get a field
	getField = function getField(fields, key) {
	  return fields.find(function (f) {
	    return f.name === key;
	  });
	};
	exports.default = render;
		exports.getField = getField;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(5);

	var _Input2 = _interopRequireDefault(_Input);

	var _flowDeclarations = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FormGroups = function FormGroups(props) {
	  var inputs = props.fields.map(function (field) {
	    return _react2.default.createElement(_Input2.default, { field: field,
	      value: props.data[field.name] || '',
	      errors: props.errors[field.name] || [],
	      onChange: props.onChange });
	  });
	  return _react2.default.createElement(
	    'div',
	    null,
	    inputs
	  );
	};
	exports.default = FormGroups;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _flowDeclarations = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Input = function Input(_ref) {
	  var field = _ref.field,
	      value = _ref.value,
	      errors = _ref.errors,
	      onChange = _ref.onChange;

	  var opts = null,
	      errorBlock = null,
	      validationState = null,
	      componentClass = field.type || 'input',
	      change = void 0,
	      thisOnChange = field.onChange || onChange;
	  change = function change(e) {
	    var s = {};
	    s[field.name] = e.target.value;
	    thisOnChange(s);
	  };

	  if (errors.length > 0) {
	    validationState = 'error';
	    errorBlock = _react2.default.createElement(
	      _reactBootstrap.HelpBlock,
	      null,
	      _react2.default.createElement('i', { className: 'fa fa-exclamation-triangle' }),
	      ' ',
	      errors.join(' ')
	    );
	  }
	  if (field.options) {
	    opts = field.options.map(function (opt, i) {
	      return _react2.default.createElement(
	        'option',
	        {
	          key: 'field-option-wrapper-' + i,
	          value: opt.value },
	        opt.label
	      );
	    });
	  }
	  return _react2.default.createElement(
	    _reactBootstrap.FormGroup,
	    {
	      validationState: validationState },
	    _react2.default.createElement(
	      _reactBootstrap.ControlLabel,
	      null,
	      field.label
	    ),
	    _react2.default.createElement(
	      _reactBootstrap.FormControl,
	      {
	        componentClass: componentClass,
	        value: value,
	        onChange: change },
	      opts
	    ),
	    errorBlock,
	    _react2.default.createElement(
	      _reactBootstrap.HelpBlock,
	      null,
	      field.placeholder
	    )
	  );
	};
		exports.default = Input;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map