// eslint-disable-next-line import/prefer-default-export
import { NumericEnumeration, Enumeration } from '../token-categories.js';
import * as Types from '../../types.d.js';

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const enumerationList = [
    {
        name: '@ROUND_UP',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 0,
    },
    {
        name: '@ROUND_DOWN',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 1,
    },
    {
        name: '@ROUND_CEILING',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 2,
    },
    {
        name: '@ROUND_FLOOR',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 3,
    },
    {
        name: '@ROUND_HALF_UP',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 4,
    },
    {
        name: '@ROUND_HALF_DOWN',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 5,
    },
    {
        name: '@ROUND_HALF_EVEN',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 6,
    },
    {
        name: '@ROUND_HALF_CEILING',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 7,
    },
    {
        name: '@ROUND_HALF_FLOOR',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 8,
    },
    {
        name: '@EUCLIDEAN',
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 9,
    },
];
