import { createToken } from 'chevrotain';

import {
    AggregateType, BooleanType, StringType, NumericFunction, NumericEnumeration,
} from './token-categories.js';

import { IdentifierLiteral } from './literal.js';

/**
 * @typedef {Object} KeywordObject
 * @property {string} name - The name of the keyword.
 * @property {Array<chevrotain.TokenType>} categories - An array representing categories.
 * @property {string} [function] - The function that the keyword represents.
 * @property {"Enumeration"|"Function"} type - The type of the token.
 * @property {*} [value] - The value of the token.
 * @property {"Numeric"|"String"|"Boolean"} returns - The return type of the function.
 */

const logicalFunctionList = [
    {
        name: 'IF',
        categories: [BooleanType],
        function: 'IF',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'if',
        categories: [BooleanType],
        function: 'IF',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'AND',
        categories: [BooleanType],
        function: 'AND',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'and',
        categories: [BooleanType],
        function: 'AND',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'OR',
        categories: [BooleanType],
        function: 'OR',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'or',
        categories: [BooleanType],
        function: 'OR',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'NOT',
        categories: [BooleanType],
        function: 'NOT',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'not',
        categories: [BooleanType],
        function: 'NOT',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'ISNULL',
        categories: [BooleanType],
        function: 'ISNULL',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'isNull',
        categories: [BooleanType],
        function: 'ISNULL',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'ISUNDEFINED',
        categories: [BooleanType],
        function: 'ISUNDEFINED',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'isUndefined',
        categories: [BooleanType],
        function: 'ISUNDEFINED',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'ISERROR',
        categories: [BooleanType],
        function: 'ISERROR',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'isError',
        categories: [BooleanType],
        function: 'ISERROR',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'ISBLANK',
        categories: [BooleanType],
        function: 'ISBLANK',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'isBlank',
        categories: [BooleanType],
        function: 'ISBLANK',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'ISNUMBER',
        categories: [BooleanType],
        function: 'ISNUMBER',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'isNumber',
        categories: [BooleanType],
        function: 'ISNUMBER',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'ISLOGICAL',
        categories: [BooleanType],
        function: 'ISLOGICAL',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'isLogical',
        categories: [BooleanType],
        function: 'ISLOGICAL',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'ISDATE',
        categories: [BooleanType],
        function: 'ISDATE',
        type: 'Function',
        returns: 'Boolean',
    },
    {
        name: 'isDate',
        categories: [BooleanType],
        function: 'ISDATE',
        type: 'Function',
        returns: 'Boolean',
    },
];

const stringFunctionList = [
    {
        name: 'CONCATENATE',
        categories: [StringType],
        function: 'CONCATENATE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'concatenate',
        categories: [StringType],
        function: 'CONCATENATE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'LEFT',
        categories: [StringType],
        function: 'LEFT',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'left',
        categories: [StringType],
        function: 'LEFT',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'RIGHT',
        categories: [StringType],
        function: 'RIGHT',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'right',
        categories: [StringType],
        function: 'RIGHT',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'MID',
        categories: [StringType],
        function: 'MID',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'mid',
        categories: [StringType],
        function: 'MID',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'LOWER',
        categories: [StringType],
        function: 'LOWER',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'lower',
        categories: [StringType],
        function: 'LOWER',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'UPPER',
        categories: [StringType],
        function: 'UPPER',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'upper',
        categories: [StringType],
        function: 'UPPER',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'TRIM',
        categories: [StringType],
        function: 'TRIM',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'trim',
        categories: [StringType],
        function: 'TRIM',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'RTRIM',
        categories: [StringType],
        function: 'RTRIM',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'rtrim',
        categories: [StringType],
        function: 'RTRIM',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'LTRIM',
        categories: [StringType],
        function: 'LTRIM',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'ltrim',
        categories: [StringType],
        function: 'LTRIM',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'REPLACE',
        categories: [StringType],
        function: 'REPLACE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'replace',
        categories: [StringType],
        function: 'REPLACE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'REPLICATE',
        categories: [StringType],
        function: 'REPLICATE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'replicate',
        categories: [StringType],
        function: 'REPLICATE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'CHARINDEX',
        categories: [],
        function: 'CHARINDEX',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'charIndex',
        categories: [],
        function: 'CHARINDEX',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'SUBSTRING',
        categories: [StringType],
        function: 'SUBSTRING',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'substring',
        categories: [StringType],
        function: 'SUBSTRING',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'REVERSE',
        categories: [StringType],
        function: 'REVERSE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'reverse',
        categories: [StringType],
        function: 'REVERSE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'SUBSTITUTE',
        categories: [StringType],
        function: 'SUBSTITUTE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'substitute',
        categories: [StringType],
        function: 'SUBSTITUTE',
        type: 'Function',
        returns: 'String',
    },
];

const dateFunctionList = [
    {
        name: 'GETUTCDATE',
        categories: [],
        function: 'GETUTCDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'getUTCDate',
        categories: [],
        function: 'GETUTCDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'GETDATE',
        categories: [],
        function: 'GETDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'getDate',
        categories: [],
        function: 'GETDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'NOW',
        categories: [],
        function: 'NOW',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'now',
        categories: [],
        function: 'NOW',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'TODAY',
        categories: [],
        function: 'TODAY',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'today',
        categories: [],
        function: 'TODAY',
        type: 'Function',
        returns: 'Date',
    },
];

const numericFunctionList = [
    {
        name: 'MOD',
        categories: [NumericFunction],
        function: 'MOD',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'mod',
        categories: [NumericFunction],
        function: 'MOD',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'POWER',
        categories: [NumericFunction],
        function: 'POWER',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'power',
        categories: [NumericFunction],
        function: 'POWER',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'EXP',
        categories: [NumericFunction],
        function: 'EXP',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'exp',
        categories: [NumericFunction],
        function: 'EXP',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'ROUND',
        categories: [NumericFunction],
        function: 'ROUND',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'round',
        categories: [NumericFunction],
        function: 'ROUND',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'CEILING',
        categories: [NumericFunction],
        function: 'CEILING',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'ceiling',
        categories: [NumericFunction],
        function: 'CEILING',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'FLOOR',
        categories: [NumericFunction],
        function: 'FLOOR',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'floor',
        categories: [NumericFunction],
        function: 'FLOOR',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'ABS',
        categories: [NumericFunction],
        function: 'ABS',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'abs',
        categories: [NumericFunction],
        function: 'ABS',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'SQRT',
        categories: [NumericFunction],
        function: 'SQRT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'sqrt',
        categories: [NumericFunction],
        function: 'SQRT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'PRODUCT',
        categories: [NumericFunction],
        function: 'PRODUCT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'product',
        categories: [NumericFunction],
        function: 'PRODUCT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'LEN',
        categories: [NumericFunction],
        function: 'LEN',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'len',
        categories: [NumericFunction],
        function: 'LEN',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MONTH',
        categories: [NumericFunction],
        function: 'MONTH',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'month',
        categories: [NumericFunction],
        function: 'MONTH',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'YEAR',
        categories: [NumericFunction],
        function: 'YEAR',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'year',
        categories: [NumericFunction],
        function: 'YEAR',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'HOUR',
        categories: [NumericFunction],
        function: 'HOUR',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'hour',
        categories: [NumericFunction],
        function: 'HOUR',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MINUTE',
        categories: [NumericFunction],
        function: 'MINUTE',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'minute',
        categories: [NumericFunction],
        function: 'MINUTE',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'SECOND',
        categories: [NumericFunction],
        function: 'SECOND',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'second',
        categories: [NumericFunction],
        function: 'SECOND',
        type: 'Function',
        returns: 'Numeric',
    },
];

const aggregateFunctionList = [
    {
        name: 'SUM',
        categories: [NumericFunction],
        function: 'SUM',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'sum',
        categories: [NumericFunction],
        function: 'SUM',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'SUM_AGG',
        categories: [NumericFunction, AggregateType],
        function: 'SUM_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'sumAgg',
        categories: [NumericFunction, AggregateType],
        function: 'SUM_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'AVERAGE',
        categories: [NumericFunction],
        function: 'AVERAGE',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'average',
        categories: [NumericFunction],
        function: 'AVERAGE',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'AVERAGE_AGG',
        categories: [NumericFunction, AggregateType],
        function: 'AVERAGE_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'averageAgg',
        categories: [NumericFunction, AggregateType],
        function: 'AVERAGE_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MAX',
        categories: [NumericFunction],
        function: 'MAX',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'max',
        categories: [NumericFunction],
        function: 'MAX',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MAX_AGG',
        categories: [NumericFunction, AggregateType],
        function: 'MAX_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'maxAgg',
        categories: [NumericFunction, AggregateType],
        function: 'MAX_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MIN',
        categories: [NumericFunction],
        function: 'MIN',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'min',
        categories: [NumericFunction],
        function: 'MIN',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MIN_AGG',
        categories: [NumericFunction, AggregateType],
        function: 'MIN_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'minAgg',
        categories: [NumericFunction, AggregateType],
        function: 'MIN_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'COUNT',
        categories: [NumericFunction, AggregateType],
        function: 'COUNT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'count',
        categories: [NumericFunction, AggregateType],
        function: 'COUNT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'COUNTIF',
        categories: [NumericFunction, AggregateType],
        function: 'COUNTIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'countIf',
        categories: [NumericFunction, AggregateType],
        function: 'COUNTIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'SUMIF',
        categories: [NumericFunction, AggregateType],
        function: 'SUMIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'sumIf',
        categories: [NumericFunction, AggregateType],
        function: 'SUMIF',
        type: 'Function',
        returns: 'Numeric',
    },
];

const enumerationList = [
    {
        name: 'ROUND_UP',
        categories: [NumericEnumeration],
        type: 'Enumeration',
    },
    {
        name: 'ROUND_DOWN',
        categories: [NumericEnumeration],
        type: 'Enumeration',
    },
];

/**
 * @type {KeywordObject[]}
 */

const keywordList = [...enumerationList,
    ...logicalFunctionList,
    ...stringFunctionList,
    ...dateFunctionList,
    ...numericFunctionList,
    ...aggregateFunctionList];

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
