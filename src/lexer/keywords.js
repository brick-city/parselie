import { createToken, Lexer } from 'chevrotain';
import { asciiCaseInsensitiveRegex } from '@brick-city/utils';

const AggregateType = createToken({
    name: 'AggregateType',
    pattern: Lexer.NA,
});

const BooleanType = createToken({
    name: 'BooleanType',
    pattern: Lexer.NA,
});

const StringType = createToken({
    name: 'StringType',
    pattern: Lexer.NA,
});

/**
 * @typedef {Object} KeywordObject
 * @property {string} name - The name of the keyword.
 * @property {Array<chevrotain.TokenType>} categories - An array representing categories.
 */

/**
 * @type {KeywordObject[]}
 */

const keywords = [
    // Aggregate functions
    {
        name: 'SUM',
        categories: [AggregateType],
    },
    {
        name: 'AVERAGE',
        categories: [AggregateType],
    },
    {
        name: 'MAX',
        categories: [AggregateType],
    },
    {
        name: 'MIN',
        categories: [AggregateType],
    },
    {
        name: 'COUNT',
        categories: [AggregateType],
    },
    {
        name: 'COUNTIF',
        categories: [AggregateType],
    },
    {
        name: 'SUMIF',
        categories: [AggregateType],
    },

    // Numerical functions
    {
        name: 'MOD',
        categories: [AggregateType],
    },
    {
        name: 'POWER',
        categories: [AggregateType],
    },
    {
        name: 'EXP',
        categories: [AggregateType],
    },
    {
        name: 'ROUND',
        categories: [AggregateType],
    },
    {
        name: 'CEILING',
        categories: [AggregateType],
    },
    {
        name: 'FLOOR',
        categories: [],
    },
    {
        name: 'ABS',
        categories: [],
    },
    {
        name: 'SQRT',
        categories: [],
    },
    {
        name: 'PRODUCT',
        categories: [],
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
        categories: [],
    },
    {
        name: 'YEAR',
        categories: [],
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
        categories: [],
    },
    {
        name: 'MINUTE',
        categories: [],
    },
    {
        name: 'SECOND',
        categories: [],
    },

    // String functions
    {
        name: 'CONCATENATE',
        categories: [StringType],
    },
    {
        name: 'LEN',
        categories: [StringType],
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
    {
        name: 'TRUE',
        categories: [BooleanType],
    },
    {
        name: 'FALSE',
        categories: [BooleanType],
    },
];

/** @type {chevrotain.TokenType[]} * */
// eslint-disable-next-line import/prefer-default-export
export const keywordLex = [];

keywords.sort((a, b) => a.name.length - b.name.length);

keywords.forEach((keyword) => {

    keywordLex.push(createToken({
        name: keyword.name.toUpperCase(),
        pattern: asciiCaseInsensitiveRegex(keyword.name),
        categories: keyword.categories,
    }));

});
