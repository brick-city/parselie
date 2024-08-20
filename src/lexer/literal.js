import { createToken } from 'chevrotain';

// Literals
// eslint-disable-next-line import/prefer-default-export
export const literals = [
    createToken({
        name: 'BigBinaryLiteral',
        pattern: /0b[01](_?[01])*[LlNn]/,
        group: 'NumberLiteral',
    }),
    createToken({
        name: 'BinaryLiteral',
        pattern: /0b[01](_?[01])*/,
        group: 'NumberLiteral',
    }),
    createToken({
        name: 'BigOctalLiteral',
        pattern: /0o[0-7](_?[0-7])*[LlNn]/,
        group: 'NumberLiteral',
    }),
    createToken({
        name: 'OctalLiteral',
        pattern: /0o[0-7](_?[0-7])*/,
        group: 'NumberLiteral',
    }),
    createToken({
        name: 'BigHexadecimalLiteral',
        pattern: /0x[0-9a-fA-F](_?[0-9a-fA-F])*[LlNn]/,
        group: 'NumberLiteral',
    }),
    createToken({
        name: 'hexadecimalLiteral',
        pattern: /0x[0-9a-fA-F](_?[0-9a-fA-F])*/,
        group: 'NumberLiteral',
    }),

    // TODO: Still reviewing from here down:

    createToken({
        name: 'bigIntegerLiteral',
        pattern: /(?:0|[1-9](?:\d_?)+)\d[LlNn]/,
        group: 'NumberLiteral',
    }),
    createToken({
        name: 'integerLiteral',
        pattern: /(?:0|[1-9](?:\d_?)+)\d/,
        group: 'NumberLiteral',
    }),
    createToken({
        name: 'floatLiteral',
        pattern: /[+-]?([1-9]\d*\.\d*|\.\d+|\d\.\d+)(?:[eE][+-]?\d+)/,
        group: 'NumberLiteral',
    }),
    createToken({
        name: 'DoubleQuotedStringLiteral',
        pattern: /"(?:[^"\\]|\\.)*"/,
    }),
    createToken({
        name: 'SingleQuotedStringLiteral',
        pattern: /'(?:[^'\\]|\\.)*'/,
    }),
    createToken({
        name: 'IdentifierLiteral',
        pattern: /[a-zA-Z_$][\w$]*/,
    }),
    createToken({
        // This looks for <! test !> type strings, allowing spaces but not control characters
        // also, not allowing the inner string to start or end with a space.
        name: 'BracketedIdentifierLiteral',
        pattern: /<![^\s<][^\t\n\r\f\v<]*[^\s<!]!>/,
    }),
    createToken({
        name: 'GuidLiteral',
        pattern: /\{[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}\}/,
    }),

];
