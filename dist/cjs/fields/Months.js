"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Months;

var _react = _interopRequireWildcard(require("react"));

var _CustomSelect = _interopRequireDefault(require("../components/CustomSelect"));

var _locale = require("../locale");

var _utils = require("../utils");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Months(props) {
  var value = props.value,
      setValue = props.setValue,
      locale = props.locale,
      className = props.className,
      humanizeLabels = props.humanizeLabels,
      disabled = props.disabled,
      readOnly = props.readOnly,
      period = props.period,
      periodicityOnDoubleClick = props.periodicityOnDoubleClick,
      mode = props.mode;
  var optionsList = locale.months || _locale.DEFAULT_LOCALE_EN.months;
  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;

    return (0, _utils.classNames)((_classNames = {
      'react-js-cron-field': true,
      'react-js-cron-months': true
    }, _defineProperty(_classNames, "".concat(className, "-field"), !!className), _defineProperty(_classNames, "".concat(className, "-months"), !!className), _classNames));
  }, [className]);
  return _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixMonths !== '' && _react["default"].createElement("span", null, locale.prefixMonths || _locale.DEFAULT_LOCALE_EN.prefixMonths), _react["default"].createElement(_CustomSelect["default"], {
    placeholder: locale.emptyMonths || _locale.DEFAULT_LOCALE_EN.emptyMonths,
    optionsList: optionsList,
    grid: false,
    value: value,
    unit: _objectSpread(_objectSpread({}, _constants.UNITS[3]), {}, {
      alt: locale.altMonths || _locale.DEFAULT_LOCALE_EN.altMonths
    }),
    setValue: setValue,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: period,
    periodicityOnDoubleClick: periodicityOnDoubleClick,
    mode: mode
  }));
}