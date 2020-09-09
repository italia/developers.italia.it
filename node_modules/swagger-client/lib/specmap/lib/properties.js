"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  key: 'properties',
  plugin: (properties, key, fullPath, specmap) => {
    const val = _objectSpread({}, properties); // eslint-disable-next-line no-restricted-syntax, guard-for-in


    for (const k in properties) {
      try {
        val[k].default = specmap.modelPropertyMacro(val[k]);
      } catch (e) {
        const err = new Error(e);
        err.fullPath = fullPath; // This is an array

        return err;
      }
    }

    const patch = _.default.replace(fullPath, val);

    return patch;
  }
};
exports.default = _default;