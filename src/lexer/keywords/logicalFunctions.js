import * as Types from '../../types.d.js';
import {logicalFunctionDefinitions} from '../../functions/logical.js'; // Reference the new logical function definitions

/** @type {Types.KeywordObject[]} */
export const logicalFunctionList = [
    {
        name: ['IF', 'iif'],
        function: logicalFunctionDefinitions.iif,
    },
    {
        name: ['AND', 'and'],
        function: logicalFunctionDefinitions.and,
    },
    {
        name: ['OR', 'or'],
        function: logicalFunctionDefinitions.or,
    },
    {
        name: ['XOR', 'xor'],
        function: logicalFunctionDefinitions.xor,
    },
    {
        name: ['NOT', 'not'],
        function: logicalFunctionDefinitions.not,
    },
    {
        name: ['ISNULL', 'isNull'],
        function: logicalFunctionDefinitions.isNull,
    },
    {
        name: ['ISUNDEFINED', 'isUndefined'],
        function: logicalFunctionDefinitions.isUndefined,
    },
    {
        name: ['ISERROR', 'isError'],
        function: logicalFunctionDefinitions.isError,
    },
    {
        name: ['ISBOOLEAN', 'isBoolean'],
        function: logicalFunctionDefinitions.isBoolean,
    },
];
