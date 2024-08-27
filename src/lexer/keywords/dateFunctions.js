// eslint-disable-next-line import/prefer-default-export
import { DateType } from '../token-categories.js';
import * as Types from '../../types.d.js';

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const dateFunctionList = [
    {
        name: 'GETUTCDATE',
        categories: [DateType],
        function: 'GETUTCDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'getUTCDate',
        categories: [DateType],
        function: 'GETUTCDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'GETDATE',
        categories: [DateType],
        function: 'GETDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'getDate',
        categories: [DateType],
        function: 'GETDATE',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'NOW',
        categories: [DateType],
        function: 'NOW',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'now',
        categories: [DateType],
        function: 'NOW',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'TODAY',
        categories: [DateType],
        function: 'TODAY',
        type: 'Function',
        returns: 'Date',
    },
    {
        name: 'today',
        categories: [DateType],
        function: 'TODAY',
        type: 'Function',
        returns: 'Date',
    },
];
