"use strict";

exports.__esModule = true;
exports.default = resolveSubtree;

var _get = _interopRequireDefault(require("lodash/get"));

var _resolver = _interopRequireDefault(require("../resolver"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

async function resolveSubtree(obj, path, opts = {}) {
  const {
    returnEntireTree,
    baseDoc,
    requestInterceptor,
    responseInterceptor,
    parameterMacro,
    modelPropertyMacro,
    useCircularStructures
  } = opts;
  const resolveOptions = {
    pathDiscriminator: path,
    baseDoc,
    requestInterceptor,
    responseInterceptor,
    parameterMacro,
    modelPropertyMacro,
    useCircularStructures
  };
  const {
    spec: normalized
  } = (0, _helpers.normalizeSwagger)({
    spec: obj
  });
  const result = await (0, _resolver.default)(_objectSpread(_objectSpread({}, resolveOptions), {}, {
    spec: normalized,
    allowMetaPatches: true,
    skipNormalization: true
  }));

  if (!returnEntireTree && Array.isArray(path) && path.length) {
    result.spec = (0, _get.default)(result.spec, path) || null;
  }

  return result;
}