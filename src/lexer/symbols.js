import { createToken } from 'chevrotain';

import { MultiplicationOperator, AdditionOperator, PowerOperator } from './token-categories.js';

export const Comma = createToken({
    name: 'Comma',
    pattern: /,/,
});

export const OpenParen = createToken({
    name: 'OpenParen',
    pattern: /\(/,
});

export const CloseParen = createToken({
    name: 'CloseParen',
    pattern: /\)/,
});

export const Plus = createToken({
    name: 'Plus',
    pattern: /\+/,
    categories: [AdditionOperator],
});

export const Minus = createToken({
    name: 'Minus',
    pattern: /-/,
    categories: [AdditionOperator],
});

export const Caret = createToken({
    name: 'Caret',
    pattern: /\^/,
    categories: [PowerOperator],
});

export const Star = createToken({
    name: 'Star',
    pattern: /\*/i,
    categories: [MultiplicationOperator],
});

export const Backslash = createToken({
    name: 'Backslash',
    pattern: /\\/i,
    categories: [MultiplicationOperator],
});

export const Modulo = createToken({
    name: 'Modulo',
    pattern: /%/,
    categories: [MultiplicationOperator],
});

export const Colon = createToken({
    name: 'Colon',
    pattern: /:/,
});

export const SemiColon = createToken({
    name: 'SemiColon',
    pattern: /;/,
});

export const Equal = createToken({
    name: 'Equal',
    pattern: /=/,
});

export const OpenCurly = createToken({
    name: 'OpenCurly',
    pattern: /{/,
    push_mode: 'curlyExpression',
});

export const CloseCurly = createToken({
    name: 'CloseCurly',
    pattern: /}/,
    pop_mode: true,
});

export const OpenBracket = createToken({
    name: 'OpenBracket',
    pattern: /\[/,
});

export const CloseBracket = createToken({
    name: 'CloseBracket',
    pattern: /\]/,
});

export const QuestionMark = createToken({
    name: 'QuestionMark',
    pattern: /\?/,
});

export const VerticalBar = createToken({
    name: 'VerticalBar',
    pattern: /\|/,
});

export const Ampersand = createToken({
    name: 'Ampersand',
    pattern: /&/,
});

export const Dot = createToken({
    name: 'Dot',
    pattern: /\./,
});

export const symbolTokens = [
    Comma,
    OpenParen,
    CloseParen,
    Plus,
    Minus,
    Caret,
    Star,
    Backslash,
    Modulo,
    Colon,
    SemiColon,
    Equal,
    OpenCurly,
    // CloseCurly is applied separately in the lexer, because it pops out of the mode, and we don't want to pop unless we are in a curly expression
    OpenBracket,
    CloseBracket,
    QuestionMark,
    VerticalBar,
    Ampersand,
    Dot,
];
