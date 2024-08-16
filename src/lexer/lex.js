import { createToken, Lexer } from 'chevrotain';
import { keywordLex } from './keywords.js';

// Literals
const literalLex = [
    createToken({
        name: 'binaryNumber',
        pattern: /0b[01]{1,32}(?=[^\da-zA-Z.])/,
    }),
    createToken({
        name: 'octalNumber',
        pattern: /0o[0-7]{1,10}(?=[^\da-zA-Z.])/,
    }),
    createToken({
        name: 'hexadecimalNumber',
        pattern: /0x[0-9a-fA-F]{1,8}(?=[^\da-zA-Z.])/,
    }),
    createToken({
        name: 'bigIntegerNumber',
        pattern: /[1-9]\d{0,18}[LlNn](?=[^\da-zA-Z.])/,
    }),
    createToken({
        name: 'integerNumber',
        pattern: /[1-9]\d{0,18}(?=[^\da-zA-Z.])/,
    }),
    createToken({
        name: 'floatNumber',
        pattern: /[+-]?([1-9]\d*\.\d*|\.\d+|\d\.\d+)(?:[eE][+-]?\d+)(?=[^\da-zA-Z.])/,
    }),
    createToken({
        name: 'stringLiteralDoubleQuotes',
        pattern: /"(?:[^"\\]|\\.)*"/,
    }),
    createToken({
        name: 'stringLiteralSingleQuotes',
        pattern: /'(?:[^'\\]|\\.)*'/,
    }),
    createToken({
        name: 'identifier',
        pattern: /[a-zA-Z_$][\w$]*(\.[a-zA-Z_$][\w$]*)*/,
    }),
    createToken({
        name: 'bracketedIdentifier',
        pattern: /([a-zA-Z_][\w$@#]*|\[[^\[\]]+\]|"[^"]+")(\.([a-zA-Z_][\w$@#]*|\[[^\[\]]+\]|"[^"]+"))*/,
    }),

    createToken({
        name: 'comma',
        pattern: /,/,
    }),

    createToken({
        name: 'openParen',
        pattern: /\(/,
    }),

    createToken({
        name: 'closeParen',
        pattern: /\)/,
    }),

    createToken({
        name: 'plus',
        pattern: /\+/,
    }),

    createToken({
        name: 'minus',
        pattern: /-/,
    }),

    createToken({
        name: 'caret',
        pattern: /\^/,
    }),

    createToken({
        name: 'asterisk',
        pattern: /\*/,
    }),

    createToken({
        name: 'percent',
        pattern: /%/,
    }),

];

const whiteSpace = createToken({
    name: 'whiteSpace',
    pattern: /\s+/,
    group: Lexer.SKIPPED,
});

const enterExpression = createToken({
    name: 'ENTER_EXPRESSION',
    pattern: /\${{/,
    push_mode: 'expression',
    group: Lexer.SKIPPED,
});

const exitExpression = createToken({
    name: 'EXIT_EXPRESSION',
    pattern: /}}/,
    pop_mode: true,
    group: Lexer.SKIPPED,
});

const mainStringExpression = createToken({
    name: 'MAIN_STRING_EXPRESSION',
    pattern: /.+?(?=\${{)|.+/,
});

const lexerDef = {

    modes: {
        main: [
            enterExpression,
            mainStringExpression,
        ],

        expression: [
            whiteSpace,
            ...keywordLex,
            ...literalLex,
            exitExpression,
        ],
    },

    defaultMode: 'main',

};

// eslint-disable-next-line import/prefer-default-export
export const lexer = new Lexer(lexerDef, { ensureOptimizations: false });
