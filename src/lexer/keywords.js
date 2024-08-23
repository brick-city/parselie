import { createToken } from 'chevrotain';

import {
    AggregateType, BooleanType, StringType, NumericFunction,
} from './token-categories.js';

import { IdentifierLiteral } from './literal.js';

/**
 * @typedef {Object} KeywordObject
 * @property {string} name - The name of the keyword.
 * @property {Array<chevrotain.TokenType>} categories - An array representing categories.
 */

/**
 * @type {KeywordObject[]}
 */

const keywordList = [
    // Aggregate functions
    {
        name: 'SUM',
        categories: [NumericFunction],
    },
    {
        name: 'SUM_AGG',
        categories: [NumericFunction, AggregateType],
    },
    {
        name: 'AVERAGE',
        categories: [NumericFunction],
    },
    {
        name: 'AVERAGE_AGG',
        categories: [NumericFunction, AggregateType],
    },
    {
        name: 'MAX',
        categories: [NumericFunction],
    },
    {
        name: 'MAX_AGG',
        categories: [NumericFunction, AggregateType],
    },
    {
        name: 'MIN',
        categories: [NumericFunction],
    },
    {
        name: 'MIN_AGG',
        categories: [NumericFunction, AggregateType],
    },
    {
        name: 'COUNT',
        categories: [NumericFunction, AggregateType],
    },
    {
        name: 'COUNTIF',
        categories: [NumericFunction, AggregateType],
    },
    {
        name: 'SUMIF',
        categories: [NumericFunction, AggregateType],
    },

    // Numeric functions
    {
        name: 'MOD',
        categories: [NumericFunction],
    },
    {
        name: 'POWER',
        categories: [NumericFunction],
    },
    {
        name: 'EXP',
        categories: [NumericFunction],
    },
    {
        name: 'ROUND',
        categories: [NumericFunction],
    },
    {
        name: 'CEILING',
        categories: [NumericFunction],
    },
    {
        name: 'FLOOR',
        categories: [NumericFunction],
    },
    {
        name: 'ABS',
        categories: [NumericFunction],
    },
    {
        name: 'SQRT',
        categories: [NumericFunction],
    },
    {
        name: 'PRODUCT',
        categories: [NumericFunction],
    },

    // Date functions
    {
        name: 'GETUTCDATE',
        categories: [],
    },
    {
        name: 'GETDATE',
        categories: [],
    },
    {
        name: 'MONTH',
        categories: [NumericFunction],
    },
    {
        name: 'YEAR',
        categories: [NumericFunction],
    },
    {
        name: 'NOW',
        categories: [],
    },
    {
        name: 'TODAY',
        categories: [],
    },
    {
        name: 'HOUR',
        categories: [NumericFunction],
    },
    {
        name: 'MINUTE',
        categories: [NumericFunction],
    },
    {
        name: 'SECOND',
        categories: [NumericFunction],
    },

    // String functions
    {
        name: 'CONCATENATE',
        categories: [StringType],
    },
    {
        name: 'LEN',
        categories: [NumericFunction],
    },
    {
        name: 'LEFT',
        categories: [StringType],
    },
    {
        name: 'RIGHT',
        categories: [StringType],
    },
    {
        name: 'MID',
        categories: [StringType],
    },
    {
        name: 'LOWER',
        categories: [StringType],
    },
    {
        name: 'UPPER',
        categories: [StringType],
    },
    {
        name: 'TRIM',
        categories: [StringType],
    },
    {
        name: 'RTRIM',
        categories: [StringType],
    },
    {
        name: 'LTRIM',
        categories: [StringType],
    },
    {
        name: 'REPLACE',
        categories: [StringType],
    },
    {
        name: 'REPLICATE',
        categories: [StringType],
    },
    {
        name: 'CHARINDEX',
        categories: [],
    },
    {
        name: 'SUBSTRING',
        categories: [StringType],
    },
    {
        name: 'REVERSE',
        categories: [StringType],
    },
    {
        name: 'SUBSTITUTE',
        categories: [StringType],
    },

    // Logical functions
    {
        name: 'IF',
        categories: [BooleanType],
    },
    {
        name: 'AND',
        categories: [BooleanType],
    },
    {
        name: 'OR',
        categories: [BooleanType],
    },
    {
        name: 'NOT',
        categories: [BooleanType],
    },
    {
        name: 'ISNULL',
        categories: [BooleanType],
    },
    {
        name: 'ISUNDEFINED',
        categories: [BooleanType],
    },
    {
        name: 'ISERROR',
        categories: [BooleanType],
    },
    {
        name: 'ISBLANK',
        categories: [BooleanType],
    },
    {
        name: 'ISNUMBER',
        categories: [BooleanType],
    },
    {
        name: 'ISLOGICAL',
        categories: [BooleanType],
    },
    {
        name: 'ISDATE',
        categories: [BooleanType],
    },
    {
        name: 'COALESCE',
        categories: [],
    },

];

/** @type {chevrotain.TokenType[]} * */
// eslint-disable-next-line import/prefer-default-export
export const keywordTokens = [];

keywordList.sort((a, b) => b.name.length - a.name.length);

// console.dir(keywordList, { depth: null });

keywordList.forEach((keyword) => {

    const camelCase = keyword.name.toLowerCase().replace(/_./g, (match) => match[1].toUpperCase());

    keywordTokens.push(createToken({
        name: keyword.name.toUpperCase(),
        pattern: new RegExp(`${keyword.name.toUpperCase()}|${camelCase}`),
        categories: keyword.categories,
        longer_alt: IdentifierLiteral,
    }));

});
