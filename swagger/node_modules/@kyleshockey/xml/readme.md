This is a fork of `xml` that supports usage in browsers, without the need for a module loader/bundler that supports shimming built-in Node.js modules.

This is made possible by listing [`stream`](https://www.npmjs.com/package/stream) as a dependency in the package manifest. Since Node.js [prioritizes its own built-in modules](https://nodejs.org/api/modules.html#modules_core_modules) over third-party modules of the same name, Node.js continues to use the built-in implementation, while a browser context also gets the `stream` module that it needs.

---

# xml

[![NPM](https://nodei.co/npm/@kyleshockey/xml.png?downloads=true)](https://nodei.co/npm/xml/)

> Fast and simple Javascript-based XML generator/builder for Node projects.

## Install

`npm install @kyleshockey/xml`

## API

### `xml(xmlObject, options)`

Returns a `XML` string.

```js
var xml = require('xml');
var xmlString = xml(xmlObject, options);
```

#### `xmlObject`

`xmlObject` is a normal JavaScript Object/JSON object that defines the data for the XML string.

Keys will become tag names.
Values can be an `array of xmlObjects` or a value such as a `string` or `number`.

```js
xml({a: 1}) === '<a>1</a>'
xml({nested: [{ keys: [{ fun: 'hi' }]}]}) === '<nested><keys><fun>hi</fun></keys></nested>'
```

There are two special keys:

`_attr`

Set attributes using a hash of key/value pairs.

```js
xml({a: [{ _attr: { attributes: 'are fun', too: '!' }}, 1]}) === '<a attributes="are fun" too="!">1</a>'
````
`_cdata`

Value of `_cdata` is wrapped in xml `![CDATA[]]` so the data does not need to be escaped.

```js
xml({a: { _cdata: "i'm not escaped: <xml>!"}}) === '<a><![CDATA[i\'m not escaped: <xml>!]]></a>'
```

Mixed together:
```js
xml({a: { _attr: { attr:'hi'}, _cdata: "I'm not escaped" }}) === '<a attr="hi"><![CDATA[I\'m not escaped]]></a>'
```

#### `options`

`indent` _optional_ **string** What to use as a tab. Defaults to no tabs (compressed).
 For example you can use `'\t'` for tab character, or `'  '` for two-space tabs.

`stream` Return the result as a `stream`.

**Stream Example**

```js
var elem = xml.element({ _attr: { decade: '80s', locale: 'US'} });
var stream = xml({ toys: elem }, { stream: true });
stream.on('data', function (chunk) {console.log("data:", chunk)});
elem.push({ toy: 'Transformers' });
elem.push({ toy: 'GI Joe' });
elem.push({ toy: [{name:'He-man'}] });
elem.close();

/*
result:
data: <toys decade="80s" locale="US">
data:     <toy>Transformers</toy>
data:     <toy>GI Joe</toy>
data:     <toy>
            <name>He-man</name>
          </toy>
data: </toys>
*/
```

`Declaration` _optional_ Add default xml declaration as first node.

_options_ are:
* encoding: 'value'
* standalone: 'value'
          
**Declaration Example**

```js
xml([ { a: 'test' }], { declaration: true })
//result: '<?xml version="1.0" encoding="UTF-8"?><a>test</a>'

xml([ { a: 'test' }], { declaration: { standalone: 'yes', encoding: 'UTF-16' }})
//result: '<?xml version="1.0" encoding="UTF-16" standalone="yes"?><a>test</a>'
```

## Examples

**Simple Example**

```js
var example1 = [ { url: 'http://www.google.com/search?aq=f&sourceid=chrome&ie=UTF-8&q=opower' } ];
console.log(XML(example1));
//<url>http://www.google.com/search?aq=f&amp;sourceid=chrome&amp;ie=UTF-8&amp;q=opower</url>
```

**Example with attributes**

```js
var example2 = [ { url: { _attr: { hostname: 'www.google.com', path: '/search?aq=f&sourceid=chrome&ie=UTF-8&q=opower' }  } } ];
console.log(XML(example2));
//result: <url hostname="www.google.com" path="/search?aq=f&amp;sourceid=chrome&amp;ie=UTF-8&amp;q=opower"/>
```

**Example with array of same-named elements and nice formatting**

```js
var example3 = [ { toys: [ { toy: 'Transformers' } , { toy: 'GI Joe' }, { toy: 'He-man' } ] } ];
console.log(XML(example3));
//result: <toys><toy>Transformers</toy><toy>GI Joe</toy><toy>He-man</toy></toys>
console.log(XML(example3, true));
/*
result:
<toys>
    <toy>Transformers</toy>
    <toy>GI Joe</toy>
    <toy>He-man</toy>
</toys>
*/
```

**More complex example**

```js
var example4 = [ { toys: [ { _attr: { decade: '80s', locale: 'US'} }, { toy: 'Transformers' } , { toy: 'GI Joe' }, { toy: 'He-man' } ] } ];
console.log(XML(example4, true));
/*
result:
<toys decade="80s" locale="US">
    <toy>Transformers</toy>
    <toy>GI Joe</toy>
    <toy>He-man</toy>
</toys>
*/
```

**Even more complex example**

```js
var example5 = [ { toys: [ { _attr: { decade: '80s', locale: 'US'} }, { toy: 'Transformers' } , { toy: [ { _attr: { knowing: 'half the battle' } }, 'GI Joe'] }, { toy: [ { name: 'He-man' }, { description: { _cdata: '<strong>Master of the Universe!</strong>'} } ] } ] } ];
console.log(XML(example5, true));
/*
result:
<toys decade="80s" locale="US">
    <toy>Transformers</toy>
    <toy knowing="half the battle">
        GI Joe
    </toy>
    <toy>
        <name>He-man</name>
        <description><![CDATA[<strong>Master of the Universe!</strong>]]></description>
    </toy>
</toys>
*/
```

## Tests

Tests included use [AVA](https://ava.li). Use `npm test` to run the tests.

    $ npm test

## Examples

There are examples in the examples directory.

# Contributing

Contributions to the project are welcome. Feel free to fork and improve. I accept pull requests when tests are included.
