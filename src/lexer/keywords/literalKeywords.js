// eslint-disable-next-line import/prefer-default-export
import { Enumeration } from '../token-categories.js';
import * as Types from '../../types.d.js';

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const literalKeywordList = [
    {
        name: 'TRUE',
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Boolean',
        value: true,
    },
    {
        name: 'true',
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Boolean',
        value: true,
    },
    {
        name: 'false',
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Boolean',
        value: false,
    },
    {
        name: 'FALSE',
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Boolean',
        value: false,
    },
    {
        name: 'undefined',
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Undefined',
        value: undefined,
    },
    {
        name: 'UNDEFINED',
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Undefined',
        value: undefined,
    },
    {
        name: 'null',
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Null',
        value: null,
    },
    {
        name: 'NULL',
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Null',
        value: null,
    },

];
