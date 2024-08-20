import { createToken } from 'chevrotain';

import {
    AggregateType, BooleanType, StringType, NumericType,
} from './token-categories.js';

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
        categories: [NumericType],
    },
    {
        name: 'SUM_AGG',
        categories: [NumericType, AggregateType],
    },
    {
        name: 'AVERAGE',
        categories: [NumericType],
    },
    {
        name: 'AVERAGE_AGG',
        categories: [NumericType, AggregateType],
    },
    {
        name: 'MAX',
        categories: [NumericType],
    },
    {
        name: 'MAX_AGG',
        categories: [NumericType, AggregateType],
    },
    {
        name: 'MIN',
        categories: [NumericType],
    },
    {
        name: 'MIN_AGG',
        categories: [NumericType, AggregateType],
    },
    {
        name: 'COUNT',
        categories: [NumericType, AggregateType],
    },
    {
        name: 'COUNTIF',
        categories: [NumericType, AggregateType],
    },
    {
        name: 'SUMIF',
        categories: [NumericType, AggregateType],
    },

    // Numerical functions
    {
        name: 'MOD',
        categories: [NumericType],
    },
    {
        name: 'POWER',
        categories: [NumericType],
    },
    {
        name: 'EXP',
        categories: [NumericType],
    },
    {
        name: 'ROUND',
        categories: [NumericType],
    },
    {
        name: 'CEILING',
        categories: [NumericType],
    },
    {
        name: 'FLOOR',
        categories: [NumericType],
    },
    {
        name: 'ABS',
        categories: [NumericType],
    },
    {
        name: 'SQRT',
        categories: [NumericType],
    },
    {
        name: 'PRODUCT',
        categories: [NumericType],
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
        categories: [NumericType],
    },
    {
        name: 'YEAR',
        categories: [NumericType],
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
        categories: [NumericType],
    },
    {
        name: 'MINUTE',
        categories: [NumericType],
    },
    {
        name: 'SECOND',
        categories: [NumericType],
    },

    // String functions
    {
        name: 'CONCATENATE',
        categories: [StringType],
    },
    {
        name: 'LEN',
        categories: [NumericType],
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
export const keywords = [];

keywordList.sort((a, b) => b.name.length - a.name.length);

console.dir(keywordList, { depth: null });

keywordList.forEach((keyword) => {

    const camelCase = keyword.name.toLowerCase().replace(/_./g, (match) => match[1].toUpperCase());

    keywords.push(createToken({
        name: keyword.name.toUpperCase(),
        pattern: new RegExp(`${keyword.name.toUpperCase()}|${camelCase}`),
        categories: keyword.categories,
    }));

});
