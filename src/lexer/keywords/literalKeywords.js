// eslint-disable-next-line import/prefer-default-export
import { Enumeration } from '../token-categories.js';
import * as Types from '../../types.d.js';

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const literalKeywordList = [
    {
        names: ['TRUE', 'true'],
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Boolean',
        value: true,
    },
    {
        names: ['FALSE', 'false'],
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Boolean',
        value: false,
    },
    {
        names: ['undefined', 'UNDEFINED'],
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Undefined',
        value: undefined,
    },
    {
        names: ['null', 'NULL'],
        categories: [Enumeration],
        type: 'Enumeration',
        returns: 'Null',
        value: null,
    },
];
