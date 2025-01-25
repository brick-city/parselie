// eslint-disable-next-line import/prefer-default-export
import * as Types from '../../types.d.js';
import functionDefinitions from '../../ops/numeric.js'; // Import the function definitions

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const numericFunctionList = [
    {
        names: ['MOD', 'mod'],
        function: functionDefinitions.mod,
        type: 'Function',
    },
    {
        names: ['POWER', 'power'],
        function: functionDefinitions.pow,
        type: 'Function',
    },
    {
        names: ['EXP', 'exp'],
        function: functionDefinitions.exp,
        type: 'Function',
    },
    {
        names: ['ROUND', 'round'],
        function: functionDefinitions.round,
        type: 'Function',
    },
    {
        names: ['CEILING', 'ceiling'],
        function: functionDefinitions.ceil,
        type: 'Function',
    },
    {
        names: ['FLOOR', 'floor'],
        function: functionDefinitions.floor,
        type: 'Function',
    },
    {
        names: ['ABS', 'abs'],
        function: functionDefinitions.abs,
        type: 'Function',
    },
    {
        names: ['SQRT', 'sqrt'],
        function: functionDefinitions.sqrt,
        type: 'Function',
    },
    {
        names: ['PRODUCT', 'product'],
        function: functionDefinitions.product,
        type: 'Function',
    },
    {
        names: ['SUM', 'sum'],
        function: functionDefinitions.sum,
        type: 'Function',
    },
    {
        names: ['AVERAGE', 'average'],
        function: functionDefinitions.avg, // Updated to use 'AVERAGE' from Excel
        type: 'Function',
    },
    {
        names: ['MAX', 'max'],
        function: functionDefinitions.max,
        type: 'Function',
    },
    {
        names: ['MIN', 'min'],
        function: functionDefinitions.min,
        type: 'Function',
    },
    {
        names: ['CLAMP', 'clamp'],
        function: functionDefinitions.clamp,
        type: 'Function',
    },
    {
        names: ['TO_DP', 'toDP'],
        function: functionDefinitions.toDP,
        type: 'Function',
    },
    {
        names: ['TO_NEAREST', 'toNearest'],
        function: functionDefinitions.toNearest,
        type: 'Function',
    },
    {
        names: ['TO_SIGNIFICANT_DIGITS', 'toSignificantDigits'],
        function: functionDefinitions.toSignificantDigits,
        type: 'Function',
    },
    {
        names: ['TRUNC', 'trunc'],
        function: functionDefinitions.trunc,
        type: 'Function',
    },
    {
        names: ['TO_EXPONENTIAL', 'toExponential'],
        function: functionDefinitions.toExponential,
        type: 'Function',
    },
    {
        names: ['TO_FIXED', 'toFixed'],
        function: functionDefinitions.toFixed,
        type: 'Function',
    },
    {
        names: ['TO_PRECISION', 'toPrecision'],
        function: functionDefinitions.toPrecision,
        type: 'Function',
    },
    {
        names: ['DEC2HEX', 'dec2Hex', 'toHexadecimal'],
        function: functionDefinitions.toHexadecimal,
        type: 'Function',
    },
    {
        names: ['HYPOT', 'hypot'],
        function: functionDefinitions.hypot,
        type: 'Function',
    },
    {
        names: ['SIGN', 'sign'],
        function: functionDefinitions.sign,
        type: 'Function',
    },
    {
        names: ['CBRT', 'cbrt'],
        function: functionDefinitions.cbrt,
        type: 'Function',
    },
    {
        names: ['LN', 'ln'],
        function: functionDefinitions.ln,
        type: 'Function',
    },
    {
        names: ['LOG', 'log'],
        function: [functionDefinitions.log, functionDefinitions.log_1],
        type: 'Function',
    },
    {
        names: ['LOG10', 'log10'],
        function: functionDefinitions.log10,
        type: 'Function',
    },
    {
        names: ['LOG2', 'log2'],
        function: functionDefinitions.log2,
        type: 'Function',
    },
    {
        names: ['DIV', 'div'],
        function: functionDefinitions.div,
        type: 'Function',
    },
    {
        names: ['DIV_TO_INT', 'divToInt'],
        function: functionDefinitions.divToInt,
        type: 'Function',
    },
    {
        names: ['NEG', 'neg'],
        function: functionDefinitions.neg,
        type: 'Function',
    },
    {
        names: ['ACOS', 'acos'],
        function: functionDefinitions.acos,
        type: 'Function',
    },
    {
        names: ['ASIN', 'asin'],
        function: functionDefinitions.asin,
        type: 'Function',
    },
    {
        names: ['ATAN', 'atan'],
        function: functionDefinitions.atan,
        type: 'Function',
    },
    {
        names: ['ATAN2', 'atan2'],
        function: functionDefinitions.atan2,
        type: 'Function',
    },
    {
        names: ['COS', 'cos'],
        function: functionDefinitions.cos,
        type: 'Function',
    },
    {
        names: ['SIN', 'sin'],
        function: functionDefinitions.sin,
        type: 'Function',
    },
    {
        names: ['TAN', 'tan'],
        function: functionDefinitions.tan,
        type: 'Function',
    },
    {
        names: ['ACOSH', 'acosh'],
        function: functionDefinitions.acosh,
        type: 'Function',
    },
    {
        names: ['ASINH', 'asinh'],
        function: functionDefinitions.asinh,
        type: 'Function',
    },
    {
        names: ['ATANH', 'atanh'],
        function: functionDefinitions.atanh,
        type: 'Function',
    },
    {
        names: ['COSH', 'cosh'],
        function: functionDefinitions.cosh,
        type: 'Function',
    },
    {
        names: ['SINH', 'sinh'],
        function: functionDefinitions.sinh,
        type: 'Function',
    },
    {
        names: ['TANH', 'tanh'],
        function: functionDefinitions.tanh,
        type: 'Function',
    },
    {
        names: ['CMP', 'cmp'],
        function: functionDefinitions.cmp,
        type: 'Function',
    },
    {
        names: ['RAND', 'rand'],
        function: [functionDefinitions.rand, functionDefinitions.rand_1],
        type: 'Function',
    },
    {
        names: ['RANDBETWEEN', 'randBetween'],
        function: functionDefinitions.randBetween,
        type: 'Function',
    },
    { // Probably don't need this
        names: ['TO_FRACTION', 'toFraction'],
        function: functionDefinitions.toFraction,
        type: 'Function',
    },
    {
        names: ['IS_BIG_INT_LITERAL', 'isBigIntLiteral'],
        function: functionDefinitions.isBigIntLiteral,
        type: 'Function',
    },
    {
        names: ['IS_BINARY_LITERAL', 'isBinaryLiteral'],
        function: functionDefinitions.isBinaryLiteral,
        type: 'Function',
    },
    {
        names: ['IS_FINITE', 'isFinite'],
        function: functionDefinitions.isFinite,
        type: 'Function',
    },
    {
        names: ['IS_FLOAT_LITERAL', 'isFloatLiteral'],
        function: functionDefinitions.isFloatLiteral,
        type: 'Function',
    },
    {
        names: ['IS_HEXADECIMAL_LITERAL', 'isHexadecimalLiteral'],
        function: functionDefinitions.isHexadecimalLiteral,
        type: 'Function',
    },
    {
        names: ['IS_INTEGER', 'isInteger'],
        function: functionDefinitions.isInteger,
        type: 'Function',
    },
    {
        names: ['IS_INTEGER_LITERAL', 'isIntegerLiteral'],
        function: functionDefinitions.isIntegerLiteral,
        type: 'Function',
    },
    {
        names: ['IS_NAN', 'isNaN'],
        function: functionDefinitions.isNaN,
        type: 'Function',
    },
    {
        names: ['IS_NEGATIVE', 'isNegative'],
        function: functionDefinitions.isNegative,
        type: 'Function',
    },
    {
        names: ['IS_NUMERIC_LITERAL', 'isNumericLiteral'],
        function: functionDefinitions.isNumericLiteral,
        type: 'Function',
    },
    {
        names: ['IS_OCTAL_LITERAL', 'isOctalLiteral'],
        function: functionDefinitions.isOctalLiteral,
        type: 'Function',
    },
    {
        names: ['IS_POSITIVE', 'isPositive'],
        function: functionDefinitions.isPositive,
        type: 'Function',
    },

];
