(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./isObject", "./isPlainObject", "./isEmptyObject", "./isNumber", "./isJSON", "./isURL", "./random", "./randomString", "./randomCnString", "./once", "./noop", "./isEnter", "./formatJSON", "./remove", "./countArrayItem", "./events.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./isObject"), require("./isPlainObject"), require("./isEmptyObject"), require("./isNumber"), require("./isJSON"), require("./isURL"), require("./random"), require("./randomString"), require("./randomCnString"), require("./once"), require("./noop"), require("./isEnter"), require("./formatJSON"), require("./remove"), require("./countArrayItem"), require("./events.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isObject, global.isPlainObject, global.isEmptyObject, global.isNumber, global.isJSON, global.isURL, global.random, global.randomString, global.randomCnString, global.once, global.noop, global.isEnter, global.formatJSON, global.remove, global.countArrayItem, global.events);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _isObject, _isPlainObject, _isEmptyObject, _isNumber, _isJSON, _isURL, _random, _randomString, _randomCnString, _once, _noop, _isEnter, _formatJSON, _remove, _countArrayItem, _events) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _isObject = _interopRequireDefault(_isObject);
  _isPlainObject = _interopRequireDefault(_isPlainObject);
  _isEmptyObject = _interopRequireDefault(_isEmptyObject);
  _isNumber = _interopRequireDefault(_isNumber);
  _isJSON = _interopRequireDefault(_isJSON);
  _isURL = _interopRequireDefault(_isURL);
  _random = _interopRequireDefault(_random);
  _randomString = _interopRequireDefault(_randomString);
  _randomCnString = _interopRequireDefault(_randomCnString);
  _once = _interopRequireDefault(_once);
  _noop = _interopRequireDefault(_noop);
  _isEnter = _interopRequireDefault(_isEnter);
  _formatJSON = _interopRequireDefault(_formatJSON);
  _remove = _interopRequireDefault(_remove);
  _countArrayItem = _interopRequireDefault(_countArrayItem);
  _events = _interopRequireDefault(_events);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  // assertion
  // generate random thing
  // function
  // others
  // array
  var _default = {
    isURL: _isURL["default"],
    isEnter: _isEnter["default"],
    formatJSON: _formatJSON["default"],
    isJSON: _isJSON["default"],
    isObject: _isObject["default"],
    isPlainObject: _isPlainObject["default"],
    isEmptyObject: _isEmptyObject["default"],
    isNumber: _isNumber["default"],
    random: _random["default"],
    randomString: _randomString["default"],
    randomCnString: _randomCnString["default"],
    once: _once["default"],
    noop: _noop["default"],
    remove: _remove["default"],
    countArrayItem: _countArrayItem["default"],
    EventEmitter: _events["default"]
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});
