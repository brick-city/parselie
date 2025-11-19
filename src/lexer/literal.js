import { createToken } from 'chevrotain';
import {
    NumericLiteral, StringLiteral, Identifier, BracketedIdentifier, Literal, DateLiteral,
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

/**
 *
 * @param {string} name
 * @param {string} quoteChar
 * @returns
 */
function createStringLiteralToken(name, quoteChar) {

    return createLiteralToken({
        name,
        pattern: new RegExp(`${quoteChar}(?:[^${quoteChar}\\\\]|\\\\.)*${quoteChar}`),
        categories: [StringLiteral, Literal],
    });

}

// ============================================================================
// EXPORTED REGEX PATTERNS
// These patterns can be used for validation, testing, and token creation
// ============================================================================

// GUID/UUID Patterns
export const UuidLiteralPattern = /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}/;
export const GuidLiteralPattern = /\{[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}\}/;

// Numeric Patterns
export const FloatLiteralPattern = /[+-]?(?:\d+(_?\d+)*|\d*(_?\d+)?\.\d+(_?\d+)*|\d+(_?\d+)*\.\d*)([eE][+-]?\d+(_?\d+)*)?/;
export const BinaryLiteralPattern = /0[bB][01](_?[01])*(\.[01](_?[01])*)?([pP][+-]?\d+)?/;
export const OctalLiteralPattern = /0[oO][0-7](_?[0-7])*(\.[0-7](_?[0-7])*)?([pP][+-]?\d+)?/;
export const HexadecimalLiteralPattern = /0[xX][0-9a-fA-F](_?[0-9a-fA-F])*(\.[0-9a-fA-F](_?[0-9a-fA-F])*)?([pP][+-]?\d+)?/;
export const BigIntegerLiteralPattern = /(?:0|[1-9]\d*(_?\d)*)[LlNn]/;
export const IntegerLiteralPattern = /(?:0|[1-9]\d*(_?\d)*)/;

// Identifier Patterns
export const IdentifierLiteralPattern = /[a-zA-Z_$][\w$]*/;
export const BracketedIdentifierLiteralPattern = /<![^\s<][^\t\n\r\f\v<]*[^\s<!]!>/;

// Temporal Patterns
// ZonedDateTime: full date-time with timezone
// Format: #YYYY-MM-DDTHH:MM:SS(.fraction)?(Z|±HH:MM)[TimeZone]#
// Example: #2024-01-01T12:34:56.789-05:00[America/New_York]#
// eslint-disable-next-line max-len
export const ZonedDateTimeLiteralPattern = /#\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})\[[A-Za-z0-9._+-]+(?:\/[A-Za-z0-9._+-]+)*\]#/;

// PlainDateTime: date-time without timezone
// Format: #YYYY-MM-DDTHH:MM[:SS[.fraction]]#
// Example: #2024-01-01T12:34:56.789#
export const PlainDateTimeLiteralPattern = /#\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,9})?)?#/;

// PlainDate: calendar date only
// Format: #YYYY-MM-DD#
// Example: #2024-01-31#
export const PlainDateLiteralPattern = /#\d{4}-\d{2}-\d{2}#/;

// PlainTime: time of day without date
// Format: #HH:MM[:SS[.fraction]]#
// Example: #12:34:56.789#
export const PlainTimeLiteralPattern = /#\d{2}:\d{2}(?::\d{2}(?:\.\d{1,9})?)?#/;

// PlainMonthDay: month and day (for recurring dates)
// Format: #--MM-DD#
// Example: #--12-25#
export const PlainMonthDayLiteralPattern = /#--\d{2}-\d{2}#/;

// PlainYearMonth: year and month only
// Format: #YYYY-MM#
// Example: #2024-01#
export const PlainYearMonthLiteralPattern = /#\d{4}-\d{2}#/;

// Duration: ISO 8601 duration
// Format: #P(duration)#
// Example: #P1Y2M3DT4H5M6.789S#
// Note: Requires at least one component (using positive lookahead)
export const DurationLiteralPattern = /#P(?=.*\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?#/;

// ============================================================================
// TOKEN DEFINITIONS
// Order matters! More specific patterns must come first.
// ============================================================================

// This needs to be early so the hex doesn't match the guid
export const UuidLiteral = createLiteralToken({
    name: 'GuidLiteral',
    pattern: UuidLiteralPattern,
    categories: [Literal],
});

export const GuidLiteral = createLiteralToken({
    name: 'GuidLiteral',
    pattern: GuidLiteralPattern,
    categories: [Literal],
});

// This needs to be early so the integer doesn't match the float
export const FloatLiteral = createLiteralToken({
    name: 'FloatLiteral',
    pattern: FloatLiteralPattern,
    categories: [NumericLiteral, Literal],
});

export const BinaryLiteral = createLiteralToken({
    name: 'BinaryLiteral',
    pattern: BinaryLiteralPattern,
    categories: [NumericLiteral, Literal],
});

export const OctalLiteral = createLiteralToken({
    name: 'OctalLiteral',
    pattern: OctalLiteralPattern,
    categories: [NumericLiteral, Literal],
});

export const HexadecimalLiteral = createLiteralToken({
    name: 'HexadecimalLiteral',
    pattern: HexadecimalLiteralPattern,
    categories: [NumericLiteral, Literal],
});

export const BigIntegerLiteral = createLiteralToken({
    name: 'BigIntegerLiteral',
    pattern: BigIntegerLiteralPattern,
    categories: [NumericLiteral, Literal],
});

export const IntegerLiteral = createLiteralToken({
    name: 'IntegerLiteral',
    pattern: IntegerLiteralPattern,
    categories: [NumericLiteral, Literal],
});

export const DoubleQuotedStringLiteral = createStringLiteralToken('DoubleQuotedStringLiteral', '"');
export const SingleQuotedStringLiteral = createStringLiteralToken('SingleQuotedStringLiteral', "'");
export const BackTickStringLiteral = createStringLiteralToken('BackTickStringLiteral', '`');

export const IdentifierLiteral = createLiteralToken({
    name: 'IdentifierLiteral',
    pattern: IdentifierLiteralPattern,
    categories: [Identifier],
});

export const BracketedIdentifierLiteral = createLiteralToken({
    // This looks for <! test !> type strings, allowing spaces but not control characters
    // also, not allowing the inner string to start or end with a space.
    name: 'BracketedIdentifierLiteral',
    pattern: BracketedIdentifierLiteralPattern,
    categories: [Identifier, BracketedIdentifier],
});

// Temporal Literal Types
// Order matters! More specific patterns must come first.

// ZonedDateTime: full date-time with timezone
export const ZonedDateTimeLiteral = createLiteralToken({
    name: 'ZonedDateTimeLiteral',
    pattern: ZonedDateTimeLiteralPattern,
    categories: [DateLiteral, Literal],
});

// PlainDateTime: date-time without timezone
export const PlainDateTimeLiteral = createLiteralToken({
    name: 'PlainDateTimeLiteral',
    pattern: PlainDateTimeLiteralPattern,
    categories: [DateLiteral, Literal],
});

// PlainDate: calendar date only
export const PlainDateLiteral = createLiteralToken({
    name: 'PlainDateLiteral',
    pattern: PlainDateLiteralPattern,
    categories: [DateLiteral, Literal],
});

// PlainTime: time of day without date
export const PlainTimeLiteral = createLiteralToken({
    name: 'PlainTimeLiteral',
    pattern: PlainTimeLiteralPattern,
    categories: [DateLiteral, Literal],
});

// PlainMonthDay: month and day (for recurring dates)
export const PlainMonthDayLiteral = createLiteralToken({
    name: 'PlainMonthDayLiteral',
    pattern: PlainMonthDayLiteralPattern,
    categories: [DateLiteral, Literal],
});

// PlainYearMonth: year and month only
export const PlainYearMonthLiteral = createLiteralToken({
    name: 'PlainYearMonthLiteral',
    pattern: PlainYearMonthLiteralPattern,
    categories: [DateLiteral, Literal],
});

// Duration: ISO 8601 duration
export const DurationLiteral = createLiteralToken({
    name: 'DurationLiteral',
    pattern: DurationLiteralPattern,
    categories: [DateLiteral, Literal],
});
