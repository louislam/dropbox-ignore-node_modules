module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
    ],
    rules: {
        "yoda": "error",
        eqeqeq: [ "warn", "smart" ],
        "linebreak-style": [ "error", "unix" ],
        "camelcase": [ "warn", {
            "properties": "never",
            "ignoreImports": true
        }],
        "no-unused-vars": [ "warn", {
            "args": "none"
        }],
        indent: [
            "error",
            4,
            {
                ignoredNodes: [ "TemplateLiteral" ],
                SwitchCase: 1,
            },
        ],
        quotes: [ "error", "double" ],
        semi: "error",
        "no-multi-spaces": [ "error", {
            ignoreEOLComments: true,
        }],
        "array-bracket-spacing": [ "warn", "always", {
            "singleValue": true,
            "objectsInArrays": false,
            "arraysInArrays": false
        }],
        "space-before-function-paren": [ "error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        "curly": "error",
        "object-curly-spacing": [ "error", "always" ],
        "object-curly-newline": "off",
        "object-property-newline": "error",
        "comma-spacing": "error",
        "brace-style": "error",
        "no-var": "error",
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "space-infix-ops": "warn",
        "arrow-spacing": "warn",
        "no-trailing-spaces": "error",
        "no-constant-condition": [ "error", {
            "checkLoops": false,
        }],
        "space-before-blocks": "warn",
        "no-extra-boolean-cast": "off",
        "no-multiple-empty-lines": [ "warn", {
            "max": 1,
            "maxBOF": 0,
        }],
        "lines-between-class-members": [ "warn", "always", {
            exceptAfterSingleLine: true,
        }],
        "no-unneeded-ternary": "error",
        "array-bracket-newline": [ "error", "consistent" ],
        "eol-last": [ "error", "always" ],
        "comma-dangle": [ "warn", "only-multiline" ],
        "no-empty": [ "error", {
            "allowEmptyCatch": true
        }],
        "no-control-regex": "off",
        "one-var": [ "error", "never" ],
        "max-statements-per-line": [ "error", { "max": 1 }]
    },
};
