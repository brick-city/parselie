import assert from 'node:assert';
import test from 'node:test';
import {
    // Numeric validators
    isIntegerLiteralString,
    isFloatLiteralString,
    isBinaryLiteralString,
    isOctalLiteralString,
    isHexadecimalLiteralString,
    isBigIntegerLiteralString,
    // GUID/UUID validators
    isUuidLiteralString,
    isGuidLiteralString,
    // Identifier validators
    isIdentifierLiteralString,
    isBracketedIdentifierLiteralString,
    // Temporal validators
    isPlainDateLiteralString,
    isPlainTimeLiteralString,
    isPlainDateTimeLiteralString,
    isPlainYearMonthLiteralString,
    isPlainMonthDayLiteralString,
    isZonedDateTimeLiteralString,
    isDurationLiteralString,
} from '../../src/lexer/literal-utils.js';

// ============================================================================
// NUMERIC PATTERNS
// ============================================================================

test('IntegerLiteralPattern matches valid integers', () => {

    assert.ok(isIntegerLiteralString('0'));
    assert.ok(isIntegerLiteralString('1'));
    assert.ok(isIntegerLiteralString('123'));
    assert.ok(isIntegerLiteralString('1000'));
    assert.ok(isIntegerLiteralString('1_000'));
    assert.ok(isIntegerLiteralString('1_000_000'));
    assert.ok(isIntegerLiteralString('999_999_999'));

});

test('IntegerLiteralPattern rejects invalid integers', () => {

    assert.ok(!isIntegerLiteralString('01')); // leading zero
    assert.ok(!isIntegerLiteralString('00'));
    assert.ok(!isIntegerLiteralString('1.0'));
    assert.ok(!isIntegerLiteralString('1e5'));
    assert.ok(!isIntegerLiteralString('+123'));
    assert.ok(!isIntegerLiteralString('-123'));
    assert.ok(!isIntegerLiteralString('1L')); // BigInt suffix
    assert.ok(!isIntegerLiteralString(''));

});

test('FloatLiteralPattern matches valid floats', () => {

    assert.ok(isFloatLiteralString('1.0'));
    assert.ok(isFloatLiteralString('0.5'));
    assert.ok(isFloatLiteralString('.5'));
    assert.ok(isFloatLiteralString('123.456'));
    assert.ok(isFloatLiteralString('1e5'));
    assert.ok(isFloatLiteralString('1E5'));
    assert.ok(isFloatLiteralString('1e+5'));
    assert.ok(isFloatLiteralString('1e-5'));
    assert.ok(isFloatLiteralString('1.23e+10'));
    assert.ok(isFloatLiteralString('+1.5'));
    assert.ok(isFloatLiteralString('-1.5'));
    assert.ok(isFloatLiteralString('1_000.5'));
    assert.ok(isFloatLiteralString('1.5_5'));
    assert.ok(isFloatLiteralString('1e1_0'));

});

test('FloatLiteralPattern rejects invalid floats', () => {

    assert.ok(!isFloatLiteralString('.'));
    assert.ok(!isFloatLiteralString('e5'));
    assert.ok(!isFloatLiteralString('1e'));
    assert.ok(!isFloatLiteralString(''));

});

test('BinaryLiteralPattern matches valid binary numbers', () => {

    assert.ok(isBinaryLiteralString('0b0'));
    assert.ok(isBinaryLiteralString('0b1'));
    assert.ok(isBinaryLiteralString('0b101010'));
    assert.ok(isBinaryLiteralString('0B1010'));
    assert.ok(isBinaryLiteralString('0b1_0_1'));
    assert.ok(isBinaryLiteralString('0b1.01'));
    assert.ok(isBinaryLiteralString('0b1p5'));
    assert.ok(isBinaryLiteralString('0b1P+5'));

});

test('BinaryLiteralPattern rejects invalid binary numbers', () => {

    assert.ok(!isBinaryLiteralString('0b'));
    assert.ok(!isBinaryLiteralString('0b2'));
    assert.ok(!isBinaryLiteralString('0b102'));
    assert.ok(!isBinaryLiteralString('b101'));
    assert.ok(!isBinaryLiteralString('101'));
    assert.ok(!isBinaryLiteralString(''));

});

test('OctalLiteralPattern matches valid octal numbers', () => {

    assert.ok(isOctalLiteralString('0o0'));
    assert.ok(isOctalLiteralString('0o7'));
    assert.ok(isOctalLiteralString('0o777'));
    assert.ok(isOctalLiteralString('0O123'));
    assert.ok(isOctalLiteralString('0o7_7_7'));
    assert.ok(isOctalLiteralString('0o7.7'));
    assert.ok(isOctalLiteralString('0o7p5'));

});

test('OctalLiteralPattern rejects invalid octal numbers', () => {

    assert.ok(!isOctalLiteralString('0o'));
    assert.ok(!isOctalLiteralString('0o8'));
    assert.ok(!isOctalLiteralString('0o789'));
    assert.ok(!isOctalLiteralString('o77'));
    assert.ok(!isOctalLiteralString('77'));
    assert.ok(!isOctalLiteralString(''));

});

test('HexadecimalLiteralPattern matches valid hexadecimal numbers', () => {

    assert.ok(isHexadecimalLiteralString('0x0'));
    assert.ok(isHexadecimalLiteralString('0xF'));
    assert.ok(isHexadecimalLiteralString('0xff'));
    assert.ok(isHexadecimalLiteralString('0xFF'));
    assert.ok(isHexadecimalLiteralString('0xABCDEF'));
    assert.ok(isHexadecimalLiteralString('0X123'));
    assert.ok(isHexadecimalLiteralString('0xa_b_c'));
    assert.ok(isHexadecimalLiteralString('0xF.F'));
    assert.ok(isHexadecimalLiteralString('0xFp5'));
    assert.ok(isHexadecimalLiteralString('0xFP+5'));

});

test('HexadecimalLiteralPattern rejects invalid hexadecimal numbers', () => {

    assert.ok(!isHexadecimalLiteralString('0x'));
    assert.ok(!isHexadecimalLiteralString('0xG'));
    assert.ok(!isHexadecimalLiteralString('xFF'));
    assert.ok(!isHexadecimalLiteralString('FF'));
    assert.ok(!isHexadecimalLiteralString(''));

});

test('BigIntegerLiteralPattern matches valid big integers', () => {

    assert.ok(isBigIntegerLiteralString('0L'));
    assert.ok(isBigIntegerLiteralString('123L'));
    assert.ok(isBigIntegerLiteralString('123l'));
    assert.ok(isBigIntegerLiteralString('123N'));
    assert.ok(isBigIntegerLiteralString('123n'));
    assert.ok(isBigIntegerLiteralString('1_000L'));
    assert.ok(isBigIntegerLiteralString('999_999_999N'));

});

test('BigIntegerLiteralPattern rejects invalid big integers', () => {

    assert.ok(!isBigIntegerLiteralString('01L')); // leading zero
    assert.ok(!isBigIntegerLiteralString('L'));
    assert.ok(!isBigIntegerLiteralString('123'));
    assert.ok(!isBigIntegerLiteralString('1.0L'));
    assert.ok(!isBigIntegerLiteralString(''));

});

// ============================================================================
// GUID/UUID PATTERNS
// ============================================================================

test('UuidLiteralPattern matches valid UUIDs', () => {

    assert.ok(isUuidLiteralString('550e8400-e29b-41d4-a716-446655440000'));
    assert.ok(isUuidLiteralString('3F2504E0-4F89-11D3-9A0C-0305E82C3301'));
    assert.ok(isUuidLiteralString('3f2504e0-4f89-11d3-9a0c-0305e82c3301'));
    assert.ok(isUuidLiteralString('AbCdEf12-3456-7890-aBcD-123456789012'));

});

test('UuidLiteralPattern rejects invalid UUIDs', () => {

    assert.ok(!isUuidLiteralString('{550e8400-e29b-41d4-a716-446655440000}'));
    assert.ok(!isUuidLiteralString('550e8400-e29b-41d4-a716-44665544000')); // too short
    assert.ok(!isUuidLiteralString('550e8400-e29b-41d4-a716-4466554400000')); // too long
    assert.ok(!isUuidLiteralString('550e8400e29b41d4a716446655440000')); // no dashes
    assert.ok(!isUuidLiteralString('GGGGGGGG-e29b-41d4-a716-446655440000')); // invalid char
    assert.ok(!isUuidLiteralString(''));

});

test('GuidLiteralPattern matches valid GUIDs', () => {

    assert.ok(isGuidLiteralString('{550e8400-e29b-41d4-a716-446655440000}'));
    assert.ok(isGuidLiteralString('{3F2504E0-4F89-11D3-9A0C-0305E82C3301}'));
    assert.ok(isGuidLiteralString('{3f2504e0-4f89-11d3-9a0c-0305e82c3301}'));

});

test('GuidLiteralPattern rejects invalid GUIDs', () => {

    assert.ok(!isGuidLiteralString('550e8400-e29b-41d4-a716-446655440000')); // no brackets
    assert.ok(!isGuidLiteralString('{550e8400-e29b-41d4-a716-44665544000}')); // too short
    assert.ok(!isGuidLiteralString('[550e8400-e29b-41d4-a716-446655440000]')); // wrong brackets
    assert.ok(!isGuidLiteralString(''));

});

// ============================================================================
// IDENTIFIER PATTERNS
// ============================================================================

test('IdentifierLiteralPattern matches valid identifiers', () => {

    assert.ok(isIdentifierLiteralString('a'));
    assert.ok(isIdentifierLiteralString('A'));
    assert.ok(isIdentifierLiteralString('_'));
    assert.ok(isIdentifierLiteralString('$'));
    assert.ok(isIdentifierLiteralString('abc'));
    assert.ok(isIdentifierLiteralString('myVar123'));
    assert.ok(isIdentifierLiteralString('_private'));
    assert.ok(isIdentifierLiteralString('$special'));
    assert.ok(isIdentifierLiteralString('camelCase'));
    assert.ok(isIdentifierLiteralString('snake_case'));
    assert.ok(isIdentifierLiteralString('CONSTANT'));

});

test('IdentifierLiteralPattern rejects invalid identifiers', () => {

    assert.ok(!isIdentifierLiteralString('1abc')); // starts with digit
    assert.ok(!isIdentifierLiteralString('123'));
    assert.ok(!isIdentifierLiteralString('-abc'));
    assert.ok(!isIdentifierLiteralString('abc-def'));
    assert.ok(!isIdentifierLiteralString('abc.def'));
    assert.ok(!isIdentifierLiteralString(''));

});

test('BracketedIdentifierLiteralPattern matches valid bracketed identifiers', () => {

    assert.ok(isBracketedIdentifierLiteralString('<!test!>'));
    assert.ok(isBracketedIdentifierLiteralString('<!my identifier!>'));
    assert.ok(isBracketedIdentifierLiteralString('<!a b c!>'));
    assert.ok(isBracketedIdentifierLiteralString('<!with-dashes!>'));
    assert.ok(isBracketedIdentifierLiteralString('<!with_underscores!>'));

});

test('BracketedIdentifierLiteralPattern rejects invalid bracketed identifiers', () => {

    assert.ok(!isBracketedIdentifierLiteralString('<!!>')); // empty
    assert.ok(!isBracketedIdentifierLiteralString('<! !>')); // only space
    assert.ok(!isBracketedIdentifierLiteralString('<! test!>')); // starts with space
    assert.ok(!isBracketedIdentifierLiteralString('<!test !>')); // ends with space
    assert.ok(!isBracketedIdentifierLiteralString('<!test<other!>')); // contains <
    assert.ok(!isBracketedIdentifierLiteralString('test'));
    assert.ok(!isBracketedIdentifierLiteralString(''));

});

// ============================================================================
// TEMPORAL PATTERNS
// ============================================================================

test('PlainDateLiteralPattern matches valid dates', () => {

    assert.ok(isPlainDateLiteralString('#2023-01-01#'));
    assert.ok(isPlainDateLiteralString('#2024-12-31#'));
    assert.ok(isPlainDateLiteralString('#1970-01-01#'));
    assert.ok(isPlainDateLiteralString('#9999-12-31#'));
    assert.ok(isPlainDateLiteralString('#2023-06-15#'));

});

test('PlainDateLiteralPattern rejects invalid dates', () => {

    assert.ok(!isPlainDateLiteralString('2023-01-01')); // missing #
    assert.ok(!isPlainDateLiteralString('#2023-01-01')); // missing closing #
    assert.ok(!isPlainDateLiteralString('2023-01-01#')); // missing opening #
    assert.ok(!isPlainDateLiteralString('#2023-1-01#')); // single digit month
    assert.ok(!isPlainDateLiteralString('#2023-01-1#')); // single digit day
    assert.ok(!isPlainDateLiteralString('#23-01-01#')); // short year
    assert.ok(!isPlainDateLiteralString('#2023/01/01#')); // wrong separator
    assert.ok(!isPlainDateLiteralString('#2023-01-01T12:00:00#')); // has time
    assert.ok(!isPlainDateLiteralString(''));

});

test('PlainTimeLiteralPattern matches valid times', () => {

    assert.ok(isPlainTimeLiteralString('#12:34:56#'));
    assert.ok(isPlainTimeLiteralString('#12:34#'));
    assert.ok(isPlainTimeLiteralString('#00:00:00#'));
    assert.ok(isPlainTimeLiteralString('#23:59:59#'));
    assert.ok(isPlainTimeLiteralString('#12:34:56.123#'));
    assert.ok(isPlainTimeLiteralString('#12:34:56.123456789#'));

});

test('PlainTimeLiteralPattern rejects invalid times', () => {

    assert.ok(!isPlainTimeLiteralString('12:34:56')); // missing #
    assert.ok(!isPlainTimeLiteralString('#12:34:56')); // missing closing #
    assert.ok(!isPlainTimeLiteralString('#1:34:56#')); // single digit hour
    assert.ok(!isPlainTimeLiteralString('#12:3:56#')); // single digit minute
    assert.ok(!isPlainTimeLiteralString('#12:34:5#')); // single digit second
    assert.ok(!isPlainTimeLiteralString('#2023-01-01T12:34:56#')); // has date
    assert.ok(!isPlainTimeLiteralString(''));

});

test('PlainDateTimeLiteralPattern matches valid date-times', () => {

    assert.ok(isPlainDateTimeLiteralString('#2023-01-01T12:34:56#'));
    assert.ok(isPlainDateTimeLiteralString('#2023-01-01T12:34#'));
    assert.ok(isPlainDateTimeLiteralString('#2024-12-31T23:59:59#'));
    assert.ok(isPlainDateTimeLiteralString('#2023-06-15T12:34:56.123#'));
    assert.ok(isPlainDateTimeLiteralString('#2023-06-15T12:34:56.123456789#'));

});

test('PlainDateTimeLiteralPattern rejects invalid date-times', () => {

    assert.ok(!isPlainDateTimeLiteralString('2023-01-01T12:34:56')); // missing #
    assert.ok(!isPlainDateTimeLiteralString('#2023-01-01T12:34:56')); // missing closing #
    assert.ok(!isPlainDateTimeLiteralString('#2023-01-01 12:34:56#')); // space instead of T
    assert.ok(!isPlainDateTimeLiteralString('#2023-01-01#')); // no time
    assert.ok(!isPlainDateTimeLiteralString('#12:34:56#')); // no date
    assert.ok(!isPlainDateTimeLiteralString('#2023-01-01T12:34:56Z#')); // has timezone
    assert.ok(!isPlainDateTimeLiteralString('#2023-01-01T12:34:56+00:00#')); // has offset
    assert.ok(!isPlainDateTimeLiteralString(''));

});

test('PlainYearMonthLiteralPattern matches valid year-months', () => {

    assert.ok(isPlainYearMonthLiteralString('#2023-01#'));
    assert.ok(isPlainYearMonthLiteralString('#2024-12#'));
    assert.ok(isPlainYearMonthLiteralString('#1970-06#'));
    assert.ok(isPlainYearMonthLiteralString('#9999-01#'));

});

test('PlainYearMonthLiteralPattern rejects invalid year-months', () => {

    assert.ok(!isPlainYearMonthLiteralString('2023-01')); // missing #
    assert.ok(!isPlainYearMonthLiteralString('#2023-01')); // missing closing #
    assert.ok(!isPlainYearMonthLiteralString('#2023-1#')); // single digit month
    assert.ok(!isPlainYearMonthLiteralString('#23-01#')); // short year
    assert.ok(!isPlainYearMonthLiteralString('#2023-01-01#')); // has day
    assert.ok(!isPlainYearMonthLiteralString(''));

});

test('PlainMonthDayLiteralPattern matches valid month-days', () => {

    assert.ok(isPlainMonthDayLiteralString('#--01-01#'));
    assert.ok(isPlainMonthDayLiteralString('#--12-31#'));
    assert.ok(isPlainMonthDayLiteralString('#--06-15#'));
    assert.ok(isPlainMonthDayLiteralString('#--02-29#')); // leap day (regex can't validate)

});

test('PlainMonthDayLiteralPattern rejects invalid month-days', () => {

    assert.ok(!isPlainMonthDayLiteralString('--01-01')); // missing #
    assert.ok(!isPlainMonthDayLiteralString('#--01-01')); // missing closing #
    assert.ok(!isPlainMonthDayLiteralString('#-01-01#')); // single dash
    assert.ok(!isPlainMonthDayLiteralString('#--1-01#')); // single digit month
    assert.ok(!isPlainMonthDayLiteralString('#--01-1#')); // single digit day
    assert.ok(!isPlainMonthDayLiteralString('#01-01#')); // missing dashes
    assert.ok(!isPlainMonthDayLiteralString(''));

});

test('ZonedDateTimeLiteralPattern matches valid zoned date-times', () => {

    assert.ok(isZonedDateTimeLiteralString('#2024-01-01T12:34:56Z[UTC]#'));
    assert.ok(isZonedDateTimeLiteralString('#2024-01-01T12:34:56.789Z[UTC]#'));
    assert.ok(isZonedDateTimeLiteralString('#2024-01-01T12:34:56+00:00[UTC]#'));
    assert.ok(isZonedDateTimeLiteralString('#2024-01-01T12:34:56-05:00[America/New_York]#'));
    assert.ok(isZonedDateTimeLiteralString('#2024-01-01T12:34:56.123456789+01:00[Europe/Paris]#'));
    assert.ok(isZonedDateTimeLiteralString('#2024-01-01T12:34:56-08:00[America/Los_Angeles]#'));

});

test('ZonedDateTimeLiteralPattern rejects invalid zoned date-times', () => {

    assert.ok(!isZonedDateTimeLiteralString('2024-01-01T12:34:56Z[UTC]')); // missing #
    assert.ok(!isZonedDateTimeLiteralString('#2024-01-01T12:34:56Z[UTC]')); // missing closing #
    assert.ok(!isZonedDateTimeLiteralString('#2024-01-01T12:34:56[UTC]#')); // missing offset
    assert.ok(!isZonedDateTimeLiteralString('#2024-01-01T12:34:56Z#')); // missing timezone
    assert.ok(!isZonedDateTimeLiteralString('#2024-01-01T12:34:56+5:00[UTC]#')); // bad offset
    assert.ok(!isZonedDateTimeLiteralString('#2024-01-01T12:34:56+00:00#')); // missing timezone
    assert.ok(!isZonedDateTimeLiteralString('#2024-01-01T12:34:56Z[]#')); // empty timezone
    assert.ok(!isZonedDateTimeLiteralString(''));

});

test('DurationLiteralPattern matches valid durations', () => {

    assert.ok(isDurationLiteralString('#P1Y#'));
    assert.ok(isDurationLiteralString('#P2M#'));
    assert.ok(isDurationLiteralString('#P3W#'));
    assert.ok(isDurationLiteralString('#P4D#'));
    assert.ok(isDurationLiteralString('#PT5H#'));
    assert.ok(isDurationLiteralString('#PT6M#'));
    assert.ok(isDurationLiteralString('#PT7S#'));
    assert.ok(isDurationLiteralString('#PT7.5S#'));
    assert.ok(isDurationLiteralString('#P1Y2M3D#'));
    assert.ok(isDurationLiteralString('#P1Y2M3DT4H5M6S#'));
    assert.ok(isDurationLiteralString('#P1Y2M3DT4H5M6.789S#'));
    assert.ok(isDurationLiteralString('#PT0S#'));

});

test('DurationLiteralPattern rejects invalid durations', () => {

    assert.ok(!isDurationLiteralString('P1Y')); // missing #
    assert.ok(!isDurationLiteralString('#P1Y')); // missing closing #
    assert.ok(!isDurationLiteralString('#P#')); // empty
    assert.ok(!isDurationLiteralString('#PT#')); // empty time
    assert.ok(!isDurationLiteralString('#1Y#')); // missing P
    assert.ok(!isDurationLiteralString('#PY#')); // missing number
    assert.ok(!isDurationLiteralString('#P1#')); // missing unit
    assert.ok(!isDurationLiteralString(''));

});
