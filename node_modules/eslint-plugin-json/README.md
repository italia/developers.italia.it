# eslint-plugin-json

[![npm](https://img.shields.io/npm/v/eslint-plugin-json.svg)](https://www.npmjs.com/package/eslint-plugin-json)
[![Build Status](https://travis-ci.org/azeemba/eslint-plugin-json.svg)](https://travis-ci.org/azeemba/eslint-plugin-json)
[![codecov](https://codecov.io/gh/azeemba/eslint-plugin-json/branch/master/graph/badge.svg)](https://codecov.io/gh/azeemba/eslint-plugin-json)
[![dependencies Status](https://david-dm.org/azeemba/eslint-plugin-json/master/status.svg)](https://david-dm.org/adrieankhisbe/eslint-plugin-json/master)
[![Code Climate](https://codeclimate.com/github/azeemba/eslint-plugin-json/badges/gpa.svg)](https://codeclimate.com/github/azeemba/eslint-plugin-json)

> Eslint plugin for JSON files

:warning: Starting from **major 2.0**, rules **need to be explicitely activated**.
[See **here** the minimal config to add](#basic-configuration) :rotating_light:

## Installation

Install `eslint-plugin-json` along [`eslint`](http://eslint.org):

```shell
$ npm install --save-dev eslint eslint-plugin-json
# or
$ yarn add --dev eslint eslint-plugin-json
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-json` globally.

## Usage

### Basic configuration

The `json` plugin ship with two recommended config you can use to easily activate it via the `extends` key.
It comes in two flavor: one strict (`recommended`) and one allowing comments `recommended-with-comments`.


```json
{
    "extends": ["plugin:json/recommended"]
}
```

You can run ESLint on individual JSON files or you can use the `--ext` flag to add JSON files to the list.

```
eslint . --ext .json,.js
eslint example.json
```

### Custom Configuration

If you want more granular control over which rules, and wich severity you want

Add `json` to the list of plugins (You can omit the `eslint-plugin-` prefix)
Then pick your rules.

If you want them all, add the `json/json` rule (or its alias `json/*`). (this is what the `recommended` config does)

#### Global rules
The global rules (`json/json` or its alias `json/*`) activate all the rules.
Note it can be configured to ignore errors cause by comments.
To do so, add option `'allowComments'` or `{allowComments: true}`

For instance:
```json
{
    "plugins": [
        "json"
    ],
    "rules": {
        "json/*": ["error", "allowComments"],
        // or the equivalent:
        "json/*": ["error", {"allowComments": true}]
    }
}
```

#### Individual Rules
Here is the list of individual rules (with name in `kebab-case`)in case you want granular error/warning level:
- `json/undefined`
- `json/enum-value-mismatch`
- `json/unexpected-end-of-comment`
- `json/unexpected-end-of-string`
- `json/unexpected-end-of-number`
- `json/invalid-unicode`
- `json/invalid-escape-character`
- `json/invalid-character`
- `json/property-expected`
- `json/comma-expected`
- `json/colon-expected`
- `json/value-expected`
- `json/comma-or-close-backet-expected`
- `json/comma-or-close-brace-expected`
- `json/trailing-comma`
- `json/duplicate-key`
- `json/comment-not-permitted`
- `json/schema-resolve-error`
- `json/unknown` (error that does not match previous ones)

## FAQs


#### How does eslint-plugin-json work?

Starting from version 1.3, this plugin relies on what [VSCode](https://github.com/Microsoft/vscode-json-languageservice)
uses for its implementation of JSON validation.

Originaly this plugin used to use JSHint, however due to heavy dependencies, it was replaced.

#### Why doesn't this plugin use `eslint` itself or just `JSON.parse`?

`eslint`'s parser is a JavaScript parser. JSON is a stricter subset and things
that are valid JavaScript are not valid JSON. This is why something more specific
is more appropriate.

While `JSON.parse` seems ideal, it is not designed to continue after the first error.
So if you have a missing trailing comma in the start of the file, the rest of the file
will go unlinted. A smarter parser that can self-correct after seeing errors is needed
which the VSCode implementation provides by leveraging the
[jsonc-parser](https://www.npmjs.com/package/jsonc-parser) module.


#### Will this plugin provide more configuration?

It is now possible as you can see in the [Configuration section](#custom-configuration)

Additionally, support for autofixing common errors could be added in the feature.

#### Is `eslint` really the best tool to lint my JSON?

Not really. `eslint` plugin interface wasn't designed to lint a completely different language but
its interface is flexible enough to allow it. So this plugin is certainly unusual.

Ideally, your editor would natively supports linting JSON. If it doesn't though, then might as well
use this plugin. Hacky linting is better than no linting :)
