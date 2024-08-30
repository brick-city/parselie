import { createToken } from 'chevrotain';
import {
    NumericLiteral, StringLiteral, Identifier, BracketedIdentifier, Literal,
} from './token-categories.js';

/** @type {chevrotain.TokenType[]} */
export const literalTokens = [];

/**
 * @param {Object} options
 * @param {string} options.name
 * @param {RegExp} options.pattern
 * @param {chevrotain.TokenType[]} options.categories
 * @param {string} [options.push_mode]
 * @returns {chevrotain.TokenType}
 */
function createLiteralToken(options) {

    const token = createToken(options);

    literalTokens.push(token);

    return token;

}
// This needs to be early so the hex doesn't match the guid
export const GuidLiteral = createLiteralToken({
    name: 'GuidLiteral',
    pattern: /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}/,
    categories: [Literal],
});

export const SQLGuidLiteral = createLiteralToken({
    name: 'SQLGuidLiteral',
    pattern: /\{[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}\}/,
    categories: [Literal],
});

// This needs to be early so the integer doesn't match the float
export const FloatLiteral = createLiteralToken({
    name: 'FloatLiteral',
    pattern: /[+-]?((\d+(_?\d)*)\.\d*(_?\d)*|\.\d+(_?\d)*|\d+(_?\d)*\.\d+(_?\d)*)(?:[eE][+-]?\d+(_?\d)*)?/,
    categories: [NumericLiteral, Literal],
});

export const BinaryLiteral = createLiteralToken({
    name: 'BinaryLiteral',
    pattern: /0[bB][01](_?[01])*(\.[01](_?[01])*)?([pP][+-]?\d+)?/,
    categories: [NumericLiteral, Literal],
});

export const OctalLiteral = createLiteralToken({
    name: 'OctalLiteral',
    pattern: /0[oO][0-7](_?[0-7])*(\.[0-7](_?[0-7])*)?([pP][+-]?\d+)?/,
    categories: [NumericLiteral, Literal],
});

export const HexadecimalLiteral = createLiteralToken({
    name: 'HexadecimalLiteral',
    pattern: /0[xX][0-9a-fA-F](_?[0-9a-fA-F])*(\.[0-9a-fA-F](_?[0-9a-fA-F])*)?([pP][+-]?\d+)?/,
    categories: [NumericLiteral, Literal],
});

export const BigIntegerLiteral = createLiteralToken({
    name: 'BigIntegerLiteral',
    pattern: /(?:0|[1-9]\d*(_?\d)*)[LlNn]/,
    categories: [NumericLiteral, Literal],
});

export const IntegerLiteral = createLiteralToken({
    name: 'IntegerLiteral',
    pattern: /(?:0|[1-9]\d*(_?\d)*)/,
    categories: [NumericLiteral, Literal],
});

export const DoubleQuotedStringLiteral = createLiteralToken({
    name: 'DoubleQuotedStringLiteral',
    pattern: /"(?:[^"\\]|\\.)*"/,
    categories: [StringLiteral, Literal],
});

export const SingleQuotedStringLiteral = createLiteralToken({
    name: 'SingleQuotedStringLiteral',
    pattern: /'(?:[^'\\]|\\.)*'/,
    categories: [StringLiteral, Literal],
});

export const BackTickStringLiteral = createLiteralToken({
    name: 'BackTickStringLiteral',
    pattern: /`(?:[^"\\]|\\.)*`/,
    categories: [StringLiteral, Literal],
});

export const IdentifierLiteral = createLiteralToken({
    name: 'IdentifierLiteral',
    pattern: /[a-zA-Z_$][\w$]*/,
    categories: [Identifier, Literal],
});

export const BracketedIdentifierLiteral = createLiteralToken({
    // This looks for <! test !> type strings, allowing spaces but not control characters
    // also, not allowing the inner string to start or end with a space.
    name: 'BracketedIdentifierLiteral',
    pattern: /<![^\s<][^\t\n\r\f\v<]*[^\s<!]!>/,
    categories: [Identifier, BracketedIdentifier],
});
