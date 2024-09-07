// eslint-disable-next-line import/prefer-default-export
import * as Types from '../../types.d.js';
import functionDefinitions from '../../functions/numeric/numeric.js'; // Import the function definitions

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const numericFunctionList = [
    {
        name: ['MOD', 'mod'],
        function: functionDefinitions.mod,
    },
    {
        name: ['POWER', 'power'],
        function: functionDefinitions.pow,
    },
    {
        name: ['EXP', 'exp'],
        function: functionDefinitions.exp,
    },
    {
        name: ['ROUND', 'round'],
        function: functionDefinitions.round,
    },
    {
        name: ['CEILING', 'ceiling'],
        function: functionDefinitions.ceil,
    },
    {
        name: ['FLOOR', 'floor'],
        function: functionDefinitions.floor,
    },
    {
        name: ['ABS', 'abs'],
        function: functionDefinitions.abs,
    },
    {
        name: ['SQRT', 'sqrt'],
        function: functionDefinitions.sqrt,
    },
    {
        name: ['PRODUCT', 'product'],
        function: functionDefinitions.product,
    },
    {
        name: ['SUM', 'sum'],
        function: functionDefinitions.sum,
    },
    {
        name: ['AVERAGE', 'average'],
        function: functionDefinitions.avg, // Updated to use 'AVERAGE' from Excel
    },
    {
        name: ['MAX', 'max'],
        function: functionDefinitions.max,
    },
    {
        name: ['MIN', 'min'],
        function: functionDefinitions.min,
    },
    {
        name: ['CLAMP', 'clamp'],
        function: functionDefinitions.clamp,
    },
    {
        name: ['TO_DP', 'toDP'],
        function: functionDefinitions.toDP,
    },
    {
        name: ['TO_NEAREST', 'toNearest'],
        function: functionDefinitions.toNearest,
    },
    {
        name: ['TO_SIGNIFICANT_DIGITS', 'toSignificantDigits'],
        function: functionDefinitions.toSignificantDigits,
    },
    {
        name: ['TRUNC', 'trunc'],
        function: functionDefinitions.trunc,
    },
    {
        name: ['TO_EXPONENTIAL', 'toExponential'],
        function: functionDefinitions.toExponential,
    },
    {
        name: ['TO_FIXED', 'toFixed'],
        function: functionDefinitions.toFixed,
    },
    {
        name: ['TO_PRECISION', 'toPrecision'],
        function: functionDefinitions.toPrecision,
    },
    {
        name: ['DEC2HEX', 'dec2Hex', 'toHexadecimal'],
        function: functionDefinitions.toHexadecimal,
    },
    {
        name: ['HYPOT', 'hypot'],
        function: functionDefinitions.hypot,
    },
    {
        name: ['SIGN', 'sign'],
        function: functionDefinitions.sign,
    },
    {
        name: ['CBRT', 'cbrt'],
        function: functionDefinitions.cbrt,
    },
    {
        name: ['LN', 'ln'],
        function: functionDefinitions.ln,
    },
    {
        name: ['LOG', 'log'],
        function: [functionDefinitions.log, functionDefinitions.log_1],
    },
    {
        name: ['LOG10', 'log10'],
        function: functionDefinitions.log10,
    },
    {
        name: ['LOG2', 'log2'],
        function: functionDefinitions.log2,
    },
    {
        name: ['DIV', 'div'],
        function: functionDefinitions.div,
    },
    {
        name: ['DIV_TO_INT', 'divToInt'],
        function: functionDefinitions.divToInt,
    },
    {
        name: ['NEG', 'neg'],
        function: functionDefinitions.neg,
    },
    {
        name: ['ACOS', 'acos'],
        function: functionDefinitions.acos,
    },
    {
        name: ['ASIN', 'asin'],
        function: functionDefinitions.asin,
    },
    {
        name: ['ATAN', 'atan'],
        function: functionDefinitions.atan,
    },
    {
        name: ['ATAN2', 'atan2'],
        function: functionDefinitions.atan2,
    },
    {
        name: ['COS', 'cos'],
        function: functionDefinitions.cos,
    },
    {
        name: ['SIN', 'sin'],
        function: functionDefinitions.sin,
    },
    {
        name: ['TAN', 'tan'],
        function: functionDefinitions.tan,
    },
    {
        name: ['ACOSH', 'acosh'],
        function: functionDefinitions.acosh,
    },
    {
        name: ['ASINH', 'asinh'],
        function: functionDefinitions.asinh,
    },
    {
        name: ['ATANH', 'atanh'],
        function: functionDefinitions.atanh,
    },
    {
        name: ['COSH', 'cosh'],
        function: functionDefinitions.cosh,
    },
    {
        name: ['SINH', 'sinh'],
        function: functionDefinitions.sinh,
    },
    {
        name: ['TANH', 'tanh'],
        function: functionDefinitions.tanh,
    },
    {
        name: ['CMP', 'cmp'],
        function: functionDefinitions.cmp,
    },
    {
        name: ['RAND', 'rand'],
        function: [functionDefinitions.rand, functionDefinitions.rand_1],
    },
    {
        name: ['RANDBETWEEN', 'randBetween'],
        function: functionDefinitions.randBetween,
    },
    { // Probably don't need this
        name: ['TO_FRACTION', 'toFraction'],
        function: functionDefinitions.toFraction,
    },
    {
        name: ['IS_BIG_INT_LITERAL', 'isBigIntLiteral'],
        function: functionDefinitions.isBigIntLiteral,
    },
    {
        name: ['IS_BINARY_LITERAL', 'isBinaryLiteral'],
        function: functionDefinitions.isBinaryLiteral,
    },
    {
        name: ['IS_FINITE', 'isFinite'],
        function: functionDefinitions.isFinite,
    },
    {
        name: ['IS_FLOAT_LITERAL', 'isFloatLiteral'],
        function: functionDefinitions.isFloatLiteral,
    },
    {
        name: ['IS_HEXADECIMAL_LITERAL', 'isHexadecimalLiteral'],
        function: functionDefinitions.isHexadecimalLiteral,
    },
    {
        name: ['IS_INTEGER', 'isInteger'],
        function: functionDefinitions.isInteger,
    },
    {
        name: ['IS_INTEGER_LITERAL', 'isIntegerLiteral'],
        function: functionDefinitions.isIntegerLiteral,
    },
    {
        name: ['IS_NAN', 'isNaN'],
        function: functionDefinitions.isNaN,
    },
    {
        name: ['IS_NEGATIVE', 'isNegative'],
        function: functionDefinitions.isNegative,
    },
    {
        name: ['IS_NUMERIC_LITERAL', 'isNumericLiteral'],
        function: functionDefinitions.isNumericLiteral,
    },
    {
        name: ['IS_OCTAL_LITERAL', 'isOctalLiteral'],
        function: functionDefinitions.isOctalLiteral,
    },
    {
        name: ['IS_POSITIVE', 'isPositive'],
        function: functionDefinitions.isPositive,
    },

];
