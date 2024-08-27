// eslint-disable-next-line import/prefer-default-export
import { StringAggregateFunction, NumericAggregateFunction } from '../token-categories.js';
import * as Types from '../../types.d.js';

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const aggregateFunctionList = [

    {
        name: 'SUM_AGG',
        categories: [NumericAggregateFunction],
        function: 'SUM_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'sumAgg',
        categories: [NumericAggregateFunction],
        function: 'SUM_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'AVERAGE_AGG',
        categories: [NumericAggregateFunction],
        function: 'AVERAGE_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'averageAgg',
        categories: [NumericAggregateFunction],
        function: 'AVERAGE_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MAX_AGG',
        categories: [NumericAggregateFunction],
        function: 'MAX_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'maxAgg',
        categories: [NumericAggregateFunction],
        function: 'MAX_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MIN_AGG',
        categories: [NumericAggregateFunction],
        function: 'MIN_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'minAgg',
        categories: [NumericAggregateFunction],
        function: 'MIN_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'COUNT',
        categories: [NumericAggregateFunction],
        function: 'COUNT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'count',
        categories: [NumericAggregateFunction],
        function: 'COUNT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'COUNTIF',
        categories: [NumericAggregateFunction],
        function: 'COUNTIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'countIf',
        categories: [NumericAggregateFunction],
        function: 'COUNTIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'SUMIF',
        categories: [NumericAggregateFunction],
        function: 'SUMIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'sumIf',
        categories: [NumericAggregateFunction],
        function: 'SUMIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'CONCATENATE_AGG',
        categories: [StringAggregateFunction],
        function: 'CONCATENATE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'concatenate_AGG',
        categories: [StringAggregateFunction],
        function: 'CONCATENATE',
        type: 'Function',
        returns: 'String',
    },
];
