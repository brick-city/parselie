import { createToken } from 'chevrotain';
import { NumericLiteral, StringLiteral, Identifier } from './token-categories.js';

// Literals
// eslint-disable-next-line import/prefer-default-export
export const BigBinaryLiteral = createToken({
    name: 'BigBinaryLiteral',
    pattern: /0b[01](_?[01])*[LlNn]/,
    categories: [NumericLiteral],
});

export const BinaryLiteral = createToken({
    name: 'BinaryLiteral',
    pattern: /0b[01](_?[01])*/,
    categories: [NumericLiteral],
});

export const BigOctalLiteral = createToken({
    name: 'BigOctalLiteral',
    pattern: /0o[0-7](_?[0-7])*[LlNn]/,
    categories: [NumericLiteral],
});

export const OctalLiteral = createToken({
    name: 'OctalLiteral',
    pattern: /0o[0-7](_?[0-7])*/,
    categories: [NumericLiteral],
});

export const BigHexadecimalLiteral = createToken({
    name: 'BigHexadecimalLiteral',
    pattern: /0x[0-9a-fA-F](_?[0-9a-fA-F])*[LlNn]/,
    categories: [NumericLiteral],
});

export const hexadecimalLiteral = createToken({
    name: 'hexadecimalLiteral',
    pattern: /0x[0-9a-fA-F](_?[0-9a-fA-F])*/,
    categories: [NumericLiteral],
});

// TODO: Still reviewing from here down:

export const bigIntegerLiteral = createToken({
    name: 'bigIntegerLiteral',
    pattern: /(?:0|[1-9](?:\d_?)+)[LlNn]/,
    categories: [NumericLiteral],
});

export const integerLiteral = createToken({
    name: 'integerLiteral',
    pattern: /(?:0|[1-9](?:\d_?)+)/,
    categories: [NumericLiteral],
});

export const floatLiteral = createToken({
    name: 'floatLiteral',
    pattern: /[+-]?([1-9]\d*\.\d*|\.\d+|\d\.\d+)(?:[eE][+-]?\d+)/,
    categories: [NumericLiteral],
});

export const DoubleQuotedStringLiteral = createToken({
    name: 'DoubleQuotedStringLiteral',
    pattern: /"(?:[^"\\]|\\.)*"/,
    categories: [StringLiteral],
});

export const SingleQuotedStringLiteral = createToken({
    name: 'SingleQuotedStringLiteral',
    pattern: /'(?:[^'\\]|\\.)*'/,
    categories: [StringLiteral],
});

export const IdentifierLiteral = createToken({
    name: 'Identifier',
    pattern: /[a-zA-Z_$][\w$]*/,
    categories: [Identifier],
});

export const BracketedIdentifierLiteral = createToken({
    // This looks for <! test !> type strings, allowing spaces but not control characters
    // also, not allowing the inner string to start or end with a space.
    name: 'BracketedIdentifier',
    pattern: /<![^\s<][^\t\n\r\f\v<]*[^\s<!]!>/,
    categories: [Identifier],
});

export const GuidLiteral = createToken({
    name: 'GuidLiteral',
    pattern: /\{[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}\}/,
});

export const literalTokens = [
    BigBinaryLiteral,
    BinaryLiteral,
    BigOctalLiteral,
    OctalLiteral,
    BigHexadecimalLiteral,
    hexadecimalLiteral,
    bigIntegerLiteral,
    integerLiteral,
    floatLiteral,
    DoubleQuotedStringLiteral,
    SingleQuotedStringLiteral,
    IdentifierLiteral,
    BracketedIdentifierLiteral,
    GuidLiteral,
];
