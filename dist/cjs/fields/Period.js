"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Period;

var _react = _interopRequireWildcard(require("react"));

var _select = _interopRequireDefault(require("antd/lib/select"));

var _locale = require("../locale");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Period(props) {
  var value = props.value,
      setValue = props.setValue,
      locale = props.locale,
      className = props.className,
      disabled = props.disabled,
      readOnly = props.readOnly,
      shortcuts = props.shortcuts,
      periodOptions = props.periodOptions;
  var options = [{
    value: 'year',
    label: locale.yearOption || _locale.DEFAULT_LOCALE_EN.yearOption
  }, {
    value: 'month',
    label: locale.monthOption || _locale.DEFAULT_LOCALE_EN.monthOption
  }, {
    value: 'week',
    label: locale.weekOption || _locale.DEFAULT_LOCALE_EN.weekOption
  }, {
    value: 'day',
    label: locale.dayOption || _locale.DEFAULT_LOCALE_EN.dayOption
  }, {
    value: 'hour',
    label: locale.hourOption || _locale.DEFAULT_LOCALE_EN.hourOption
  }, {
    value: 'minute',
    label: locale.minuteOption || _locale.DEFAULT_LOCALE_EN.minuteOption
  }];

  if (shortcuts && (shortcuts === true || shortcuts.includes('@reboot'))) {
    options = [].concat(_toConsumableArray(options), [{
      value: 'reboot',
      label: locale.rebootOption || _locale.DEFAULT_LOCALE_EN.rebootOption
    }]);
  }

  if (periodOptions && periodOptions.length > 0) {
    options = options.filter(function (option) {
      return periodOptions.includes(option.value);
    });
  }

  var handleChange = (0, _react.useCallback)(function (newValue) {
    if (!readOnly) {
      setValue(newValue);
    }
  }, [setValue, readOnly]);
  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;

    return (0, _utils.classNames)((_classNames = {
      'react-js-cron-field': true,
      'react-js-cron-period': true
    }, _defineProperty(_classNames, "".concat(className, "-field"), !!className), _defineProperty(_classNames, "".concat(className, "-period"), !!className), _classNames));
  }, [className]);
  var selectClassName = (0, _react.useMemo)(function () {
    return (0, _utils.classNames)(_defineProperty({
      'react-js-cron-select': true,
      'react-js-cron-select-no-prefix': locale.prefixPeriod === ''
    }, "".concat(className, "-select"), !!className));
  }, [className, locale.prefixPeriod]);
  var dropdownClassName = (0, _react.useMemo)(function () {
    var _classNames3;

    return (0, _utils.classNames)((_classNames3 = {
      'react-js-cron-select-dropdown': true,
      'react-js-cron-select-dropdown-period': true
    }, _defineProperty(_classNames3, "".concat(className, "-select-dropdown"), !!className), _defineProperty(_classNames3, "".concat(className, "-select-dropdown-period"), !!className), _classNames3));
  }, [className]);
  return _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixPeriod !== '' && _react["default"].createElement("span", null, locale.prefixPeriod || _locale.DEFAULT_LOCALE_EN.prefixPeriod), _react["default"].createElement(_select["default"], {
    key: JSON.stringify(locale),
    defaultValue: value,
    value: value,
    onChange: handleChange,
    options: options,
    className: selectClassName,
    dropdownClassName: dropdownClassName,
    disabled: disabled,
    showArrow: !readOnly,
    open: readOnly ? false : undefined
  }));
}