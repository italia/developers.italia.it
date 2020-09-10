const _ = require('lodash/fp');
const jsonService = require('vscode-json-languageservice');

const jsonServiceHandle = jsonService.getLanguageService({});

const ErrorCodes = {
    Undefined: 0,
    EnumValueMismatch: 1,
    UnexpectedEndOfComment: 0x101,
    UnexpectedEndOfString: 0x102,
    UnexpectedEndOfNumber: 0x103,
    InvalidUnicode: 0x104,
    InvalidEscapeCharacter: 0x105,
    InvalidCharacter: 0x106,
    PropertyExpected: 0x201,
    CommaExpected: 0x202,
    ColonExpected: 0x203,
    ValueExpected: 0x204,
    CommaOrCloseBacketExpected: 0x205,
    CommaOrCloseBraceExpected: 0x206,
    TrailingComma: 0x207,
    DuplicateKey: 0x208,
    CommentNotPermitted: 0x209,
    SchemaResolveError: 0x300
};

const AllErrorCodes = _.values(ErrorCodes);
const AllowComments = 'allowComments';

const fileLintResults = {};
const fileComments = {};
const fileDocuments = {};

const getSignature = problem =>
    `${problem.range.start.line} ${problem.range.start.character} ${problem.message}`;

function getDiagnostics(jsonDocument) {
    return _.pipe(
        _.map(problem => [getSignature(problem), problem]),
        _.reverse, // reverse ensure fromPairs keep first signature occurence of problem
        _.fromPairs
    )(jsonDocument.syntaxErrors);
}
const reportError = filter => (errorName, context) => {
    _.filter(filter, fileLintResults[context.getFilename()]).forEach(error => {
        context.report({
            ruleId: `json/${errorName}`,
            message: error.message,
            loc: {
                start: {line: error.range.start.line + 1, column: error.range.start.character},
                end: {line: error.range.end.line + 1, column: error.range.end.character}
            }
            // later: see how to add fix
        });
    });
};
const reportComment = (errorName, context) => {
    const ruleOption = _.head(context.options);
    if (ruleOption === AllowComments || _.get(AllowComments, ruleOption)) return;

    _.forEach(comment => {
        context.report({
            ruleId: errorName,
            message: 'Comment not allowed',
            loc: {
                start: {line: comment.start.line + 1, column: comment.start.character},
                end: {line: comment.end.line + 1, column: comment.end.character}
            }
        });
    }, fileComments[context.getFilename()]);
};

const makeRule = (errorName, reporters) => ({
    create(context) {
        return {
            Program() {
                _.flatten([reporters]).map(reporter => reporter(errorName, context));
            }
        };
    }
});

const rules = _.pipe(
    _.mapKeys(_.kebabCase),
    _.toPairs,
    _.map(([errorName, errorCode]) => [
        errorName,
        makeRule(
            errorName,
            reportError(err => err.code === errorCode)
        )
    ]),
    _.fromPairs,
    _.assign({
        '*': makeRule('*', [reportError(_.constant(true)), reportComment]),
        json: makeRule('json', [reportError(_.constant(true)), reportComment]),
        unknown: makeRule('unknown', reportError(_.negate(AllErrorCodes.includes))),
        'comment-not-permitted': makeRule('comment-not-permitted', reportComment)
    })
)(ErrorCodes);

const errorSignature = err =>
    ['message', 'line', 'column', 'endLine', 'endColumn'].map(field => err[field]).join('::');

const getErrorCode = _.pipe(_.get('ruleId'), _.split('/'), _.last);

const processors = {
    '.json': {
        preprocess: function(text, fileName) {
            const textDocument = jsonService.TextDocument.create(fileName, 'json', 1, text);
            fileDocuments[fileName] = textDocument;
            const parsed = jsonServiceHandle.parseJSONDocument(textDocument);
            fileLintResults[fileName] = getDiagnostics(parsed);
            fileComments[fileName] = parsed.comments;
            return ['']; // sorry nothing ;)
        },
        postprocess: function(messages, fileName) {
            const textDocument = fileDocuments[fileName];
            delete fileLintResults[fileName];
            delete fileComments[fileName];
            return _.pipe(
                _.first,
                _.groupBy(errorSignature),
                _.mapValues(errors => {
                    if (errors.length === 1) return _.first(errors);
                    // Otherwise there is two errors: the generic and specific one
                    // json/* or json/json and json/some-code
                    const firstErrorCode = getErrorCode(errors[0]);
                    const isFirstGeneric = ['*', 'json'].includes(firstErrorCode);
                    const genericError = errors[isFirstGeneric ? 0 : 1];
                    const specificError = errors[isFirstGeneric ? 1 : 0];
                    return genericError.severity > specificError.severity
                        ? genericError
                        : specificError;
                }),
                _.mapValues(error => {
                    const source = textDocument.getText({
                        start: {line: error.line - 1, character: error.column},
                        end: {line: error.endLine - 1, character: error.endColumn}
                    });
                    return _.assign(error, {
                        source,
                        column: error.column + 1,
                        endColumn: error.endColumn + 1
                    });
                }),
                _.values
            )(messages);
        }
    }
};

const configs = {
    recommended: {
        plugins: ['json'],
        rules: {
            'json/*': 'error'
        }
    },
    'recommended-with-comments': {
        plugins: ['json'],
        rules: {
            'json/*': ['error', {allowComments: true}]
        }
    }
};

module.exports = {rules, configs, processors};
