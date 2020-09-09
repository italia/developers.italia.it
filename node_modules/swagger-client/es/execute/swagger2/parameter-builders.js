// These functions will update the request.
// They'll be given {req, value, paramter, spec, operation}.
export default {
  body: bodyBuilder,
  header: headerBuilder,
  query: queryBuilder,
  path: pathBuilder,
  formData: formDataBuilder
}; // Add the body to the request

function bodyBuilder(_ref) {
  var req = _ref.req,
      value = _ref.value;
  req.body = value;
} // Add a form data object.


function formDataBuilder(_ref2) {
  var req = _ref2.req,
      value = _ref2.value,
      parameter = _ref2.parameter;

  if (value || parameter.allowEmptyValue) {
    req.form = req.form || {};
    req.form[parameter.name] = {
      value: value,
      allowEmptyValue: parameter.allowEmptyValue,
      collectionFormat: parameter.collectionFormat
    };
  }
} // Add a header to the request


function headerBuilder(_ref3) {
  var req = _ref3.req,
      parameter = _ref3.parameter,
      value = _ref3.value;
  req.headers = req.headers || {};

  if (typeof value !== 'undefined') {
    req.headers[parameter.name] = value;
  }
} // Replace path paramters, with values ( ie: the URL )


function pathBuilder(_ref4) {
  var req = _ref4.req,
      value = _ref4.value,
      parameter = _ref4.parameter;
  req.url = req.url.split("{".concat(parameter.name, "}")).join(encodeURIComponent(value));
} // Add a query to the `query` object, which will later be stringified into the URL's search


function queryBuilder(_ref5) {
  var req = _ref5.req,
      value = _ref5.value,
      parameter = _ref5.parameter;
  req.query = req.query || {};

  if (value === false && parameter.type === 'boolean') {
    value = 'false';
  }

  if (value === 0 && ['number', 'integer'].indexOf(parameter.type) > -1) {
    value = '0';
  }

  if (value) {
    req.query[parameter.name] = {
      collectionFormat: parameter.collectionFormat,
      value: value
    };
  } else if (parameter.allowEmptyValue && value !== undefined) {
    var paramName = parameter.name;
    req.query[paramName] = req.query[paramName] || {};
    req.query[paramName].allowEmptyValue = true;
  }
}