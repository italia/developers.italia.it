"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = postProcessPattern;

var _path = _interopRequireDefault(require("path"));

var _os = _interopRequireDefault(require("os"));

var _crypto = _interopRequireDefault(require("crypto"));

var _loaderUtils = _interopRequireDefault(require("loader-utils"));

var _cacache = _interopRequireDefault(require("cacache"));

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _findCacheDir = _interopRequireDefault(require("find-cache-dir"));

var _normalizePath = _interopRequireDefault(require("normalize-path"));

var _package = require("../package.json");

var _promisify = require("./utils/promisify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */
async function postProcessPattern(globalRef, pattern, file) {
  const {
    logger,
    compilation,
    inputFileSystem
  } = globalRef; // If this came from a glob, add it to the file watchlist

  if (pattern.fromType === 'glob') {
    logger.debug(`add ${file.absoluteFrom} as fileDependencies`);
    compilation.fileDependencies.add(file.absoluteFrom);
  }

  logger.debug(`reading '${file.absoluteFrom}' to write to assets`);
  let data;

  try {
    data = await (0, _promisify.readFile)(inputFileSystem, file.absoluteFrom);
  } catch (error) {
    compilation.errors.push(error);
    return;
  }

  if (pattern.transform) {
    logger.log(`transforming content for '${file.absoluteFrom}'`);

    if (pattern.cacheTransform) {
      const cacheDirectory = pattern.cacheTransform.directory ? pattern.cacheTransform.directory : typeof pattern.cacheTransform === 'string' ? pattern.cacheTransform : (0, _findCacheDir.default)({
        name: 'copy-webpack-plugin'
      }) || _os.default.tmpdir();
      let defaultCacheKeys = {
        version: _package.version,
        transform: pattern.transform,
        contentHash: _crypto.default.createHash('md4').update(data).digest('hex')
      };

      if (typeof pattern.cacheTransform.keys === 'function') {
        defaultCacheKeys = await pattern.cacheTransform.keys(defaultCacheKeys, file.absoluteFrom);
      } else {
        defaultCacheKeys = { ...defaultCacheKeys,
          ...pattern.cacheTransform.keys
        };
      }

      const cacheKeys = (0, _serializeJavascript.default)(defaultCacheKeys);

      try {
        const result = await _cacache.default.get(cacheDirectory, cacheKeys);
        logger.debug(`getting cached transformation for '${file.absoluteFrom}'`);
        ({
          data
        } = result);
      } catch (_ignoreError) {
        data = await pattern.transform(data, file.absoluteFrom);
        logger.debug(`caching transformation for '${file.absoluteFrom}'`);
        await _cacache.default.put(cacheDirectory, cacheKeys, data);
      }
    } else {
      data = await pattern.transform(data, file.absoluteFrom);
    }
  }

  if (pattern.toType === 'template') {
    logger.log(`interpolating template '${file.webpackTo}' for '${file.relativeFrom}'`); // If it doesn't have an extension, remove it from the pattern
    // ie. [name].[ext] or [name][ext] both become [name]

    if (!_path.default.extname(file.relativeFrom)) {
      file.webpackTo = file.webpackTo.replace(/\.?\[ext]/g, '');
    }

    file.immutable = /\[(?:([^:\]]+):)?(?:hash|contenthash)(?::([a-z]+\d*))?(?::(\d+))?\]/gi.test(file.webpackTo);
    file.webpackTo = _loaderUtils.default.interpolateName({
      resourcePath: file.absoluteFrom
    }, file.webpackTo, {
      content: data,
      context: pattern.context
    }); // Bug in `loader-utils`, package convert `\\` to `/`, need fix in loader-utils

    file.webpackTo = _path.default.normalize(file.webpackTo);
  }

  if (pattern.transformPath) {
    logger.log(`transforming path '${file.webpackTo}' for '${file.absoluteFrom}'`);
    file.immutable = false;
    file.webpackTo = await pattern.transformPath(file.webpackTo, file.absoluteFrom);
  }

  file.data = data;
  file.targetPath = (0, _normalizePath.default)(file.webpackTo);
  file.force = pattern.force; // eslint-disable-next-line consistent-return

  return file;
}