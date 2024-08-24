import { createToken } from 'chevrotain';

import {
    AggregateType, BooleanType, StringType, NumericFunction,
} from './token-categories.js';

import { IdentifierLiteral } from './literal.js';

/**
 * @typedef {Object} KeywordObject
 * @property {string} name - The name of the keyword.
 * @property {Array<chevrotain.TokenType>} categories - An array representing categories.
 * @property {string} function - The function that the keyword represents.
 */

/**
 * @type {KeywordObject[]}
 */

const keywordList = [
    // Aggregate functions
    {
        name: 'SUM',
        categories: [NumericFunction],
        function: 'SUM',
    },
    {
        name: 'sum',
        categories: [NumericFunction],
        function: 'SUM',
    },
    {
        name: 'SUM_AGG',
        categories: [NumericFunction, AggregateType],
        function: 'SUM_AGG',
    },
    {
        name: 'sumAgg',
        categories: [NumericFunction, AggregateType],
        function: 'SUM_AGG',
    },
    {
        name: 'AVERAGE',
        categories: [NumericFunction],
        function: 'AVERAGE',
    },
    {
        name: 'average',
        categories: [NumericFunction],
        function: 'AVERAGE',
    },
    {
        name: 'AVERAGE_AGG',
        categories: [NumericFunction, AggregateType],
        function: 'AVERAGE_AGG',
    },
    {
        name: 'averageAgg',
        categories: [NumericFunction, AggregateType],
        function: 'AVERAGE_AGG',
    },
    {
        name: 'MAX',
        categories: [NumericFunction],
        function: 'MAX',
    },
    {
        name: 'max',
        categories: [NumericFunction],
        function: 'MAX',
    },
    {
        name: 'MAX_AGG',
        categories: [NumericFunction, AggregateType],
        function: 'MAX_AGG',
    },
    {
        name: 'maxAgg',
        categories: [NumericFunction, AggregateType],
        function: 'MAX_AGG',
    },
    {
        name: 'MIN',
        categories: [NumericFunction],
        function: 'MIN',
    },
    {
        name: 'min',
        categories: [NumericFunction],
        function: 'MIN',
    },
    {
        name: 'MIN_AGG',
        categories: [NumericFunction, AggregateType],
        function: 'MIN_AGG',
    },
    {
        name: 'minAgg',
        categories: [NumericFunction, AggregateType],
        function: 'MIN_AGG',
    },
    {
        name: 'COUNT',
        categories: [NumericFunction, AggregateType],
        function: 'COUNT',
    },
    {
        name: 'count',
        categories: [NumericFunction, AggregateType],
        function: 'COUNT',
    },
    {
        name: 'COUNTIF',
        categories: [NumericFunction, AggregateType],
        function: 'COUNTIF',
    },
    {
        name: 'countIf',
        categories: [NumericFunction, AggregateType],
        function: 'COUNTIF',
    },
    {
        name: 'SUMIF',
        categories: [NumericFunction, AggregateType],
        function: 'SUMIF',
    },
    {
        name: 'sumIf',
        categories: [NumericFunction, AggregateType],
        function: 'SUMIF',
    },

    // Numeric functions
    {
        name: 'MOD',
        categories: [NumericFunction],
        function: 'MOD',
    },
    {
        name: 'mod',
        categories: [NumericFunction],
        function: 'MOD',
    },
    {
        name: 'POWER',
        categories: [NumericFunction],
        function: 'POWER',
    },
    {
        name: 'power',
        categories: [NumericFunction],
        function: 'POWER',
    },
    {
        name: 'EXP',
        categories: [NumericFunction],
        function: 'EXP',
    },
    {
        name: 'exp',
        categories: [NumericFunction],
        function: 'EXP',
    },
    {
        name: 'ROUND',
        categories: [NumericFunction],
        function: 'ROUND',
    },
    {
        name: 'round',
        categories: [NumericFunction],
        function: 'ROUND',
    },
    {
        name: 'CEILING',
        categories: [NumericFunction],
        function: 'CEILING',
    },
    {
        name: 'ceiling',
        categories: [NumericFunction],
        function: 'CEILING',
    },
    {
        name: 'FLOOR',
        categories: [NumericFunction],
        function: 'FLOOR',
    },
    {
        name: 'floor',
        categories: [NumericFunction],
        function: 'FLOOR',
    },
    {
        name: 'ABS',
        categories: [NumericFunction],
        function: 'ABS',
    },
    {
        name: 'abs',
        categories: [NumericFunction],
        function: 'ABS',
    },
    {
        name: 'SQRT',
        categories: [NumericFunction],
        function: 'SQRT',
    },
    {
        name: 'sqrt',
        categories: [NumericFunction],
        function: 'SQRT',
    },
    {
        name: 'PRODUCT',
        categories: [NumericFunction],
        function: 'PRODUCT',
    },
    {
        name: 'product',
        categories: [NumericFunction],
        function: 'PRODUCT',
    },

    // Date functions
    {
        name: 'GETUTCDATE',
        categories: [],
        function: 'GETUTCDATE',
    },
    {
        name: 'getUTCDate',
        categories: [],
        function: 'GETUTCDATE',
    },
    {
        name: 'GETDATE',
        categories: [],
        function: 'GETDATE',
    },
    {
        name: 'getDate',
        categories: [],
        function: 'GETDATE',
    },
    {
        name: 'MONTH',
        categories: [NumericFunction],
        function: 'MONTH',
    },
    {
        name: 'month',
        categories: [NumericFunction],
        function: 'MONTH',
    },
    {
        name: 'YEAR',
        categories: [NumericFunction],
        function: 'YEAR',
    },
    {
        name: 'year',
        categories: [NumericFunction],
        function: 'YEAR',
    },
    {
        name: 'NOW',
        categories: [],
        function: 'NOW',
    },
    {
        name: 'now',
        categories: [],
        function: 'NOW',
    },
    {
        name: 'TODAY',
        categories: [],
        function: 'TODAY',
    },
    {
        name: 'today',
        categories: [],
        function: 'TODAY',
    },
    {
        name: 'HOUR',
        categories: [NumericFunction],
        function: 'HOUR',
    },
    {
        name: 'hour',
        categories: [NumericFunction],
        function: 'HOUR',
    },
    {
        name: 'MINUTE',
        categories: [NumericFunction],
        function: 'MINUTE',
    },
    {
        name: 'minute',
        categories: [NumericFunction],
        function: 'MINUTE',
    },
    {
        name: 'SECOND',
        categories: [NumericFunction],
        function: 'SECOND',
    },
    {
        name: 'second',
        categories: [NumericFunction],
        function: 'SECOND',
    },

    // String functions
    {
        name: 'CONCATENATE',
        categories: [StringType],
        function: 'CONCATENATE',
    },
    {
        name: 'concatenate',
        categories: [StringType],
        function: 'CONCATENATE',
    },
    {
        name: 'LEN',
        categories: [NumericFunction],
        function: 'LEN',
    },
    {
        name: 'len',
        categories: [NumericFunction],
        function: 'LEN',
    },
    {
        name: 'LEFT',
        categories: [StringType],
        function: 'LEFT',
    },
    {
        name: 'left',
        categories: [StringType],
        function: 'LEFT',
    },
    {
        name: 'RIGHT',
        categories: [StringType],
        function: 'RIGHT',
    },
    {
        name: 'right',
        categories: [StringType],
        function: 'RIGHT',
    },
    {
        name: 'MID',
        categories: [StringType],
        function: 'MID',
    },
    {
        name: 'mid',
        categories: [StringType],
        function: 'MID',
    },
    {
        name: 'LOWER',
        categories: [StringType],
        function: 'LOWER',
    },
    {
        name: 'lower',
        categories: [StringType],
        function: 'LOWER',
    },
    {
        name: 'UPPER',
        categories: [StringType],
        function: 'UPPER',
    },
    {
        name: 'upper',
        categories: [StringType],
        function: 'UPPER',
    },
    {
        name: 'TRIM',
        categories: [StringType],
        function: 'TRIM',
    },
    {
        name: 'trim',
        categories: [StringType],
        function: 'TRIM',
    },
    {
        name: 'RTRIM',
        categories: [StringType],
        function: 'RTRIM',
    },
    {
        name: 'rtrim',
        categories: [StringType],
        function: 'RTRIM',
    },
    {
        name: 'LTRIM',
        categories: [StringType],
        function: 'LTRIM',
    },
    {
        name: 'ltrim',
        categories: [StringType],
        function: 'LTRIM',
    },
    {
        name: 'REPLACE',
        categories: [StringType],
        function: 'REPLACE',
    },
    {
        name: 'replace',
        categories: [StringType],
        function: 'REPLACE',
    },
    {
        name: 'REPLICATE',
        categories: [StringType],
        function: 'REPLICATE',
    },
    {
        name: 'replicate',
        categories: [StringType],
        function: 'REPLICATE',
    },
    {
        name: 'CHARINDEX',
        categories: [],
        function: 'CHARINDEX',
    },
    {
        name: 'charIndex',
        categories: [],
        function: 'CHARINDEX',
    },
    {
        name: 'SUBSTRING',
        categories: [StringType],
        function: 'SUBSTRING',
    },
    {
        name: 'substring',
        categories: [StringType],
        function: 'SUBSTRING',
    },
    {
        name: 'REVERSE',
        categories: [StringType],
        function: 'REVERSE',
    },
    {
        name: 'reverse',
        categories: [StringType],
        function: 'REVERSE',
    },
    {
        name: 'SUBSTITUTE',
        categories: [StringType],
        function: 'SUBSTITUTE',
    },
    {
        name: 'substitute',
        categories: [StringType],
        function: 'SUBSTITUTE',
    },

    // Logical functions
    {
        name: 'IF',
        categories: [BooleanType],
        function: 'IF',
    },
    {
        name: 'if',
        categories: [BooleanType],
        function: 'IF',
    },
    {
        name: 'AND',
        categories: [BooleanType],
        function: 'AND',
    },
    {
        name: 'and',
        categories: [BooleanType],
        function: 'AND',
    },
    {
        name: 'OR',
        categories: [BooleanType],
        function: 'OR',
    },
    {
        name: 'or',
        categories: [BooleanType],
        function: 'OR',
    },
    {
        name: 'NOT',
        categories: [BooleanType],
        function: 'NOT',
    },
    {
        name: 'not',
        categories: [BooleanType],
        function: 'NOT',
    },
    {
        name: 'ISNULL',
        categories: [BooleanType],
        function: 'ISNULL',
    },
    {
        name: 'isNull',
        categories: [BooleanType],
        function: 'ISNULL',
    },
    {
        name: 'ISUNDEFINED',
        categories: [BooleanType],
        function: 'ISUNDEFINED',
    },
    {
        name: 'isUndefined',
        categories: [BooleanType],
        function: 'ISUNDEFINED',
    },
    {
        name: 'ISERROR',
        categories: [BooleanType],
        function: 'ISERROR',
    },
    {
        name: 'isError',
        categories: [BooleanType],
        function: 'ISERROR',
    },
    {
        name: 'ISBLANK',
        categories: [BooleanType],
        function: 'ISBLANK',
    },
    {
        name: 'isBlank',
        categories: [BooleanType],
        function: 'ISBLANK',
    },
    {
        name: 'ISNUMBER',
        categories: [BooleanType],
        function: 'ISNUMBER',
    },
    {
        name: 'isNumber',
        categories: [BooleanType],
        function: 'ISNUMBER',
    },
    {
        name: 'ISLOGICAL',
        categories: [BooleanType],
        function: 'ISLOGICAL',
    },
    {
        name: 'isLogical',
        categories: [BooleanType],
        function: 'ISLOGICAL',
    },
    {
        name: 'ISDATE',
        categories: [BooleanType],
        function: 'ISDATE',
    },
    {
        name: 'isDate',
        categories: [BooleanType],
        function: 'ISDATE',
    },
    {
        name: 'COALESCE',
        categories: [],
        function: 'COALESCE',
    },
    {
        name: 'coalesce',
        categories: [],
        function: 'COALESCE',
    },

];

/** @type {chevrotain.TokenType[]} * */
// eslint-disable-next-line import/prefer-default-export
export const keywordTokens = [];

keywordList.sort((a, b) => b.name.length - a.name.length);

keywordList.forEach((keyword) => {

    keywordTokens.push(createToken({
        name: keyword.name,
        pattern: new RegExp(keyword.name),
        categories: keyword.categories,
        longer_alt: IdentifierLiteral,
    }));

});
