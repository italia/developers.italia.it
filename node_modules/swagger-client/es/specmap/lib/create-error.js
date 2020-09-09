export default function createErrorType(name, init) {
  function E() {
    if (!Error.captureStackTrace) {
      this.stack = new Error().stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.message = args[0];

    if (init) {
      init.apply(this, args);
    }
  }

  E.prototype = new Error();
  E.prototype.name = name;
  E.prototype.constructor = E;
  return E;
}