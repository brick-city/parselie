import { BooleanType } from '../token-categories.js';
import * as Types from '../../types.d.js';

/**@type {Types.KeywordObject[]} */
 * @typedef {Object} KeywordObject
 * @property {string} name - The name of the keyword.
 * @property {Array<chevrotain.TokenType>} categories - An array representing categories.
 * @property {string} [function] - The function that the keyword represents.
 * @property {"Enumeration"|"Function"} type - The type of the token.
 * @property {*} [value] - The value of the token.
 * @property {"Numeric"|"String"|"Boolean"} returns - The return type of the function.
 */

// eslint-disable-next-line import/prefer-default-export
export const logicalFunctionList = [
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
