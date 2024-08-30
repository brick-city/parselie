// eslint-disable-next-line import/prefer-default-export
import { FunctionKeyWord } from '../token-categories.js';
import * as Types from '../../types.d.js';

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const dateFunctionList = [
    {
        name: 'GETUTCDATE',
        categories: [FunctionKeyWord],
        function: 'GETUTCDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'getUTCDate',
        categories: [FunctionKeyWord],
        function: 'GETUTCDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'GETDATE',
        categories: [FunctionKeyWord],
        function: 'GETDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'getDate',
        categories: [FunctionKeyWord],
        function: 'GETDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'NOW',
        categories: [FunctionKeyWord],
        function: 'NOW',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'now',
        categories: [FunctionKeyWord],
        function: 'NOW',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'TODAY',
        categories: [FunctionKeyWord],
        function: 'TODAY',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'today',
        categories: [FunctionKeyWord],
        function: 'TODAY',
        type: 'Function',
        returns: 'Date',
    },
];
