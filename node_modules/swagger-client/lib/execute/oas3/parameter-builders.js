"use strict";

exports.__esModule = true;
exports.path = path;
exports.query = query;
exports.header = header;
exports.cookie = cookie;

var _pick = _interopRequireDefault(require("lodash/pick"));

var _styleSerializer = _interopRequireWildcard(require("./style-serializer"));

var _contentSerializer = _interopRequireDefault(require("./content-serializer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function path({
  req,
  value,
  parameter
}) {
  const {
    name,
    style,
    explode,
    content
  } = parameter;

  if (content) {
    const effectiveMediaType = Object.keys(content)[0];
    req.url = req.url.split(`{${name}}`).join((0, _styleSerializer.encodeDisallowedCharacters)((0, _contentSerializer.default)(value, effectiveMediaType), {
      escape: true
    }));
    return;
  }

  const styledValue = (0, _styleSerializer.default)({
    key: parameter.name,
    value,
    style: style || 'simple',
    explode: explode || false,
    escape: true
  });
  req.url = req.url.split(`{${name}}`).join(styledValue);
}

function query({
  req,
  value,
  parameter
}) {
  req.query = req.query || {};

  if (parameter.content) {
    const effectiveMediaType = Object.keys(parameter.content)[0];
    req.query[parameter.name] = (0, _contentSerializer.default)(value, effectiveMediaType);
    return;
  }

  if (value === false) {
    value = 'false';
  }

  if (value === 0) {
    value = '0';
  }

  if (value) {
    req.query[parameter.name] = {
      value,
      serializationOption: (0, _pick.default)(parameter, ['style', 'explode', 'allowReserved'])
    };
  } else if (parameter.allowEmptyValue && value !== undefined) {
    const paramName = parameter.name;
    req.query[paramName] = req.query[paramName] || {};
    req.query[paramName].allowEmptyValue = true;
  }
}

const PARAMETER_HEADER_BLACKLIST = ['accept', 'authorization', 'content-type'];

function header({
  req,
  parameter,
  value
}) {
  req.headers = req.headers || {};

  if (PARAMETER_HEADER_BLACKLIST.indexOf(parameter.name.toLowerCase()) > -1) {
    return;
  }

  if (parameter.content) {
    const effectiveMediaType = Object.keys(parameter.content)[0];
    req.headers[parameter.name] = (0, _contentSerializer.default)(value, effectiveMediaType);
    return;
  }

  if (typeof value !== 'undefined') {
    req.headers[parameter.name] = (0, _styleSerializer.default)({
      key: parameter.name,
      value,
      style: parameter.style || 'simple',
      explode: typeof parameter.explode === 'undefined' ? false : parameter.explode,
      escape: false
    });
  }
}

function cookie({
  req,
  parameter,
  value
}) {
  req.headers = req.headers || {};
  const type = typeof value;

  if (parameter.content) {
    const effectiveMediaType = Object.keys(parameter.content)[0];
    req.headers.Cookie = `${parameter.name}=${(0, _contentSerializer.default)(value, effectiveMediaType)}`;
    return;
  }

  if (type !== 'undefined') {
    const prefix = type === 'object' && !Array.isArray(value) && parameter.explode ? '' : `${parameter.name}=`;
    req.headers.Cookie = prefix + (0, _styleSerializer.default)({
      key: parameter.name,
      value,
      escape: false,
      style: parameter.style || 'form',
      explode: typeof parameter.explode === 'undefined' ? false : parameter.explode
    });
  }
}