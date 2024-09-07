import * as Types from '../../types.d.js';
import stringFunctionDefinitions from '../../functions/string/string.js'; // Reference the new string function definitions

/** @type {Types.KeywordObject[]} */
// eslint-disable-next-line import/prefer-default-export
export const stringFunctionList = [
    {
        name: ['CONCATENATE', 'concatenate'],
        function: stringFunctionDefinitions.concatenate,
    },
    {
        name: ['LEFT', 'left'],
        function: stringFunctionDefinitions.left,
    },
    {
        name: ['RIGHT', 'right'],
        function: stringFunctionDefinitions.right,
    },
    {
        name: ['MID', 'mid'],
        function: stringFunctionDefinitions.mid,
    },
    {
        name: ['LOWER', 'lower'],
        function: stringFunctionDefinitions.lower,
    },
    {
        name: ['UPPER', 'upper'],
        function: stringFunctionDefinitions.upper,
    },
    {
        name: ['TRIM', 'trim'],
        function: stringFunctionDefinitions.trim,
    },
    {
        name: ['RTRIM', 'rtrim'],
        function: stringFunctionDefinitions.rtrim,
    },
    {
        name: ['LTRIM', 'ltrim'],
        function: stringFunctionDefinitions.ltrim,
    },
    {
        name: ['REPLACE', 'replace'],
        function: stringFunctionDefinitions.replace,
    },
    {
        name: ['REPLICATE', 'replicate'],
        function: stringFunctionDefinitions.replicate,
    },
    {
        name: ['SUBSTRING', 'substring'],
        function: stringFunctionDefinitions.substring,
    },
    {
        name: ['REVERSE', 'reverse'],
        function: stringFunctionDefinitions.reverse,
    },
    {
        name: ['SUBSTITUTE', 'substitute'],
        function: stringFunctionDefinitions.substitute,
    },
    {
        name: ['CHARINDEX', 'charIndex'],
        function: stringFunctionDefinitions.charIndex,
    },
    {
        name: ['FIND', 'find'],
        function: stringFunctionDefinitions.find,
    },
    {
        name: ['LEN', 'len'],
        function: stringFunctionDefinitions.len,
    },
];
