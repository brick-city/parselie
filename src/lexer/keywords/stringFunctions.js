import * as Types from '../../types.d.js';
import stringFunctionDefinitions from '../../ops/string.js'; // Reference the new string function definitions

/** @type {Types.KeywordObject[]} */
// eslint-disable-next-line import/prefer-default-export
export const stringFunctionList = [
    {
        names: ['CONCATENATE', 'concatenate'],
        function: stringFunctionDefinitions.concatenate,
        type: 'Function',
    },
    {
        names: ['LEFT', 'left'],
        function: stringFunctionDefinitions.left,
        type: 'Function',
    },
    {
        names: ['RIGHT', 'right'],
        function: stringFunctionDefinitions.right,
        type: 'Function',
    },
    {
        names: ['MID', 'mid'],
        function: stringFunctionDefinitions.mid,
        type: 'Function',
    },
    {
        names: ['LOWER', 'lower'],
        function: stringFunctionDefinitions.lower,
        type: 'Function',
    },
    {
        names: ['UPPER', 'upper'],
        function: stringFunctionDefinitions.upper,
        type: 'Function',
    },
    {
        names: ['TRIM', 'trim'],
        function: stringFunctionDefinitions.trim,
        type: 'Function',
    },
    {
        names: ['RTRIM', 'rtrim'],
        function: stringFunctionDefinitions.rtrim,
        type: 'Function',
    },
    {
        names: ['LTRIM', 'ltrim'],
        function: stringFunctionDefinitions.ltrim,
        type: 'Function',
    },
    {
        names: ['REPLACE', 'replace'],
        function: stringFunctionDefinitions.replace,
        type: 'Function',
    },
    {
        names: ['REPLICATE', 'replicate'],
        function: stringFunctionDefinitions.replicate,
        type: 'Function',
    },
    {
        names: ['SUBSTRING', 'substring'],
        function: stringFunctionDefinitions.substring,
        type: 'Function',
    },
    {
        names: ['REVERSE', 'reverse'],
        function: stringFunctionDefinitions.reverse,
        type: 'Function',
    },
    {
        names: ['SUBSTITUTE', 'substitute'],
        function: stringFunctionDefinitions.substitute,
        type: 'Function',
    },
    {
        names: ['CHARINDEX', 'charIndex'],
        function: stringFunctionDefinitions.charIndex,
        type: 'Function',
    },
    {
        names: ['FIND', 'find'],
        function: stringFunctionDefinitions.find,
        type: 'Function',
    },
    {
        names: ['LEN', 'len'],
        function: stringFunctionDefinitions.len,
        type: 'Function',
    },
];
