/**
 * Utility functions for validating literal strings against pattern definitions.
 * These functions provide full-string matching for validation purposes,
 * while the underlying patterns remain unanchored for Chevrotain tokenization.
 */

import {
    // Numeric patterns
    FloatLiteralPattern,
    BinaryLiteralPattern,
    OctalLiteralPattern,
    HexadecimalLiteralPattern,
    BigIntegerLiteralPattern,
    IntegerLiteralPattern,
    // GUID/UUID patterns
    UuidLiteralPattern,
    GuidLiteralPattern,
    // Identifier patterns
    IdentifierLiteralPattern,
    BracketedIdentifierLiteralPattern,
    // Temporal patterns
    ZonedDateTimeLiteralPattern,
    PlainDateTimeLiteralPattern,
    PlainDateLiteralPattern,
    PlainTimeLiteralPattern,
    PlainMonthDayLiteralPattern,
    PlainYearMonthLiteralPattern,
    DurationLiteralPattern,
} from './literal.js';

/**
 * Creates an anchored version of a regex pattern for full-string matching.
 * @param {RegExp} pattern - The unanchored pattern to anchor
 * @returns {RegExp} A new regex with ^ and $ anchors
 */
export function createAnchored(pattern) {

    return new RegExp(`^(?:${pattern.source})$`, pattern.flags);

}

// ============================================================================
// NUMERIC LITERAL VALIDATORS
// ============================================================================

/**
 * Tests if a string is a valid integer literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches IntegerLiteralPattern exactly
 */
export function isIntegerLiteralString(str) {

    return createAnchored(IntegerLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid float literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches FloatLiteralPattern exactly
 */
export function isFloatLiteralString(str) {

    return createAnchored(FloatLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid binary literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches BinaryLiteralPattern exactly
 */
export function isBinaryLiteralString(str) {

    return createAnchored(BinaryLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid octal literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches OctalLiteralPattern exactly
 */
export function isOctalLiteralString(str) {

    return createAnchored(OctalLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid hexadecimal literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches HexadecimalLiteralPattern exactly
 */
export function isHexadecimalLiteralString(str) {

    return createAnchored(HexadecimalLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid big integer literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches BigIntegerLiteralPattern exactly
 */
export function isBigIntegerLiteralString(str) {

    return createAnchored(BigIntegerLiteralPattern).test(str);

}

// ============================================================================
// GUID/UUID LITERAL VALIDATORS
// ============================================================================

/**
 * Tests if a string is a valid UUID literal (without braces).
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches UuidLiteralPattern exactly
 */
export function isUuidLiteralString(str) {

    return createAnchored(UuidLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid GUID literal (with braces).
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches GuidLiteralPattern exactly
 */
export function isGuidLiteralString(str) {

    return createAnchored(GuidLiteralPattern).test(str);

}

// ============================================================================
// IDENTIFIER LITERAL VALIDATORS
// ============================================================================

/**
 * Tests if a string is a valid identifier literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches IdentifierLiteralPattern exactly
 */
export function isIdentifierLiteralString(str) {

    return createAnchored(IdentifierLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid bracketed identifier literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches BracketedIdentifierLiteralPattern exactly
 */
export function isBracketedIdentifierLiteralString(str) {

    return createAnchored(BracketedIdentifierLiteralPattern).test(str);

}

// ============================================================================
// TEMPORAL LITERAL VALIDATORS
// ============================================================================

/**
 * Tests if a string is a valid PlainDate literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches PlainDateLiteralPattern exactly
 */
export function isPlainDateLiteralString(str) {

    return createAnchored(PlainDateLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid PlainTime literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches PlainTimeLiteralPattern exactly
 */
export function isPlainTimeLiteralString(str) {

    return createAnchored(PlainTimeLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid PlainDateTime literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches PlainDateTimeLiteralPattern exactly
 */
export function isPlainDateTimeLiteralString(str) {

    return createAnchored(PlainDateTimeLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid PlainYearMonth literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches PlainYearMonthLiteralPattern exactly
 */
export function isPlainYearMonthLiteralString(str) {

    return createAnchored(PlainYearMonthLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid PlainMonthDay literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches PlainMonthDayLiteralPattern exactly
 */
export function isPlainMonthDayLiteralString(str) {

    return createAnchored(PlainMonthDayLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid ZonedDateTime literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches ZonedDateTimeLiteralPattern exactly
 */
export function isZonedDateTimeLiteralString(str) {

    return createAnchored(ZonedDateTimeLiteralPattern).test(str);

}

/**
 * Tests if a string is a valid Duration literal.
 * @param {string} str - The string to test
 * @returns {boolean} True if the string matches DurationLiteralPattern exactly
 */
export function isDurationLiteralString(str) {

    return createAnchored(DurationLiteralPattern).test(str);

}
