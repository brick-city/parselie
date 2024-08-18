import { createToken } from 'chevrotain';

import { Multiplication, Addition, Power } from './token-categories.js';

// eslint-disable-next-line import/prefer-default-export
export const symbols = [

    createToken({
        name: 'Comma',
        pattern: /,/,
    }),

    createToken({
        name: 'OpenParen',
        pattern: /\(/,
    }),

    createToken({
        name: 'CloseParen',
        pattern: /\)/,
    }),

    createToken({
        name: 'Plus',
        pattern: /\+/,
        categories: [Addition],
    }),

    createToken({
        name: 'Minus',
        pattern: /-/,
        categories: [Addition],
    }),

    createToken({
        name: 'Caret',
        pattern: /\^/,
        categories: [Power],
    }),

    createToken({
        name: 'Star',
        pattern: /\*/i,
        categories: [Multiplication],
    }),

    createToken({
        name: 'Backslash',
        pattern: /\\/i,
        categories: [Multiplication],
    }),

    createToken({
        name: 'Modulo',
        pattern: /%/,
        categories: [Multiplication],
    }),

    createToken({
        name: 'Colon',
        pattern: /:/,
    }),

    createToken({
        name: 'SemiColon',
        pattern: /;/,
    }),

    createToken({
        name: 'Equal',
        pattern: /=/,
    }),

    createToken({
        name: 'OpenCurly',
        pattern: /{/,
    }),

    createToken({
        name: 'CloseCurly',
        pattern: /}/,
    }),

    createToken({
        name: 'OpenBracket',
        pattern: /\[/,
    }),

    createToken({
        name: 'CloseBracket',
        pattern: /\]/,
    }),

    createToken({
        name: 'QuestionMark',
        pattern: /\?/,
    }),

    createToken({
        name: 'VerticalBar',
        pattern: /\|/,
    }),

    createToken({
        name: 'Ampersand',
        pattern: /&/,
    }),

];
