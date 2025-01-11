// eslint-disable-next-line import/prefer-default-export
import { NumericEnumeration, Enumeration } from '../token-categories.js';
import * as Types from '../../types.d.js';

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const enumerationList = [
    {
        names: ['@ROUND_UP'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 0,
    },
    {
        names: ['@ROUND_DOWN'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 1,
    },
    {
        names: ['@ROUND_CEILING'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 2,
    },
    {
        names: ['@ROUND_FLOOR'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 3,
    },
    {
        names: ['@ROUND_HALF_UP'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 4,
    },
    {
        names: ['@ROUND_HALF_DOWN'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 5,
    },
    {
        names: ['@ROUND_HALF_EVEN'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 6,
    },
    {
        names: ['@ROUND_HALF_CEILING'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 7,
    },
    {
        names: ['@ROUND_HALF_FLOOR'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 8,
    },
    {
        names: ['@EUCLIDEAN'],
        categories: [NumericEnumeration, Enumeration],
        type: 'Enumeration',
        returns: 'Numeric',
        value: 9,
    },
];
