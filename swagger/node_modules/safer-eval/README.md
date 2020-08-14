# safer-eval

[![NPM version](https://badge.fury.io/js/safer-eval.svg)](https://www.npmjs.com/package/safer-eval/)

> a safer eval

A safer approach for eval in node and browser. Before using this module, **ask
yourself if there are no better options** than using saferEval.
It is potentially better than the bad old `eval()` but still has some harmful potential.
Especially when it comes to passing `context` props.
Use [clones][] to wrap-up the methods you like to allow.
Checkout the "harmful context" tests section.

![warning](https://raw.githubusercontent.com/commenthol/safer-eval/master/warning.png)

**Warning:** The `saferEval` function may be harmful - so you are warned!

In node the `vm` module is used to sandbox the evaluation of `code`.

The browser version `browser.js` might not be as safe as the node version
`index.js` as here no real sandboxing is available. Please consider modules like
[sandboxr](https://www.npmjs.com/package/sandboxr).

Runs on node and in modern browsers:

|                | Versions |
| ---            | ---      |
| **node**       | 8, 10, 11, 12 |
| **Chrome**     | 70, 75 |
| **Firefox**    | 60, 68 |
| **Edge**       | 17, 18 |
| **IE**         | ~~11~~ |
| **Safari**     | 11, 12|
| **iOS Safari** | 11.3, 12.0 |

## Installation

```
npm install --save safer-eval
```

## Implementation recommendations

**Use strict mode**

Always use `'use strict'` mode in functions/ files calling `saferEval()`.
Otherwise a sandbox breakout may be possible.

```js

'use strict'
const saferEval = require('safer-eval')

function main () {
  'use strict' //< alternative within function
  const res = saferEval('new Date()')
  ...
}

```

**Run in worker**

Be aware that a

```js
saferEval('(function () { while (true) {} })()')
```

may run
infinitely. Consider using the module from within a worker thread which is terminated
after timeout.

**Avoid context props**

Avoid passing `context` props while deserializing data from hostile environments.

## Usage

`context` allows the definition of passed in Objects into the sandbox.
Take care, injected `code` can overwrite those passed context props!
Check the tests under "harmful context"!

**Parameters**

**code**: `String`, a string containing javascript code

**context**: `Object`, define globals, properties for evaluation context

**Returns**: `Any`, evaluated code

**Example**:

in node:

```js
'use strict' //< NEVER FORGET TO ADD STRICT MODE in file/ function
             //< running `saferEval`
const saferEval = require('safer-eval')
const code = `{d: new Date('1970-01-01'), b: new Buffer('data')}`
const res = saferEval(code)
// => toString.call(res.d) = '[object Date]'
// => toString.call(res.b) = '[object Buffer]'
```

in browser:

```js
'use strict' //< NEVER FORGET TO ADD STRICT MODE in file/ function
             //< running `saferEval`
const saferEval = require('safer-eval')
const code = `{d: new Date('1970-01-01'), b: function () { return navigator.userAgent }`
const res = saferEval(code, {navigator: window.navigator})
// => toString.call(res.d) = '[object Date]'
// => toString.call(res.b) = '[object Function]'
// => res.b() = "Mozilla/5.0 (..."
```

To minimize any harmful code injection carefully select the methods you allow in `context`

```js
const code = `window.btoa('Hello, world')`

// AVOID passing a GLOBAL context!!!
const res = saferEval(code, {window: window})

// BETTER - code needs only access to window.btoa
const clones = require('clones')
const context = {
  window: {
    btoa: clones(window.btoa, window)
  }
}
const res = saferEval(code ,context)
// => res = 'SGVsbG8sIHdvcmxk'
```

## Reusing context

Use `new SaferEval()` to reuse a once created context.

```js
'use strict' //< NEVER FORGET TO ADD STRICT MODE in file/ function
             //< running `saferEval`
const { SaferEval } = require('safer-eval')
const safer = new SaferEval()
const code = `{d: new Date('1970-01-01'), b: new Buffer('data')}`
const res = safer.runInContext(code)
```

## License

[MIT](./LICENSE)

[clones]: https://github.com/commenthol/clones
