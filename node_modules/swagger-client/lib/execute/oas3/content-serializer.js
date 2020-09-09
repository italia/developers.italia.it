"use strict";

exports.__esModule = true;
exports.default = serialize;

/*
  Serializer that serializes according to a media type instead of OpenAPI's
  `style` + `explode` constructs.
*/
function serialize(value, mediaType) {
  if (mediaType.includes('application/json')) {
    if (typeof value === 'string') {
      // Assume the user has a JSON string
      return value;
    }

    return JSON.stringify(value);
  }

  return value.toString();
}