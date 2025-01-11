import * as Types from '../../types.d.js';
import { logicalFunctionDefinitions } from '../../functions/logical.js'; // Reference the new logical function definitions

/** @type {Types.KeywordObject[]} */
export const logicalFunctionList = [
    {
        names: ['IF', 'iif'],
        function: logicalFunctionDefinitions.iif,
        type: 'Function',
    },
    {
        names: ['AND', 'and'],
        function: logicalFunctionDefinitions.and,
        type: 'Function',
    },
    {
        names: ['OR', 'or'],
        function: logicalFunctionDefinitions.or,
        type: 'Function',
    },
    {
        names: ['XOR', 'xor'],
        function: logicalFunctionDefinitions.xor,
        type: 'Function',
    },
    {
        names: ['NOT', 'not'],
        function: logicalFunctionDefinitions.not,
        type: 'Function',
    },
    {
        names: ['ISNULL', 'isNull'],
        function: logicalFunctionDefinitions.isNull,
        type: 'Function',
    },
    {
        names: ['ISUNDEFINED', 'isUndefined'],
        function: logicalFunctionDefinitions.isUndefined,
        type: 'Function',
    },
    {
        names: ['ISERROR', 'isError'],
        function: logicalFunctionDefinitions.isError,
        type: 'Function',
    },
    {
        names: ['ISBOOLEAN', 'isBoolean'],
        function: logicalFunctionDefinitions.isBoolean,
        type: 'Function',
    },
];
