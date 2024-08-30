// eslint-disable-next-line import/prefer-default-export
import { FunctionKeyWord, AggregateFunction } from '../token-categories.js';
import * as Types from '../../types.d.js';

/** @type {Types.KeywordObject[]} */

// eslint-disable-next-line import/prefer-default-export
export const aggregateFunctionList = [

    {
        name: 'SUM_AGG',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'SUM_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'sumAgg',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'SUM_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'AVERAGE_AGG',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'AVERAGE_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'averageAgg',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'AVERAGE_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MAX_AGG',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'MAX_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'maxAgg',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'MAX_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'MIN_AGG',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'MIN_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'minAgg',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'MIN_AGG',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'COUNT',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'COUNT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'count',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'COUNT',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'COUNTIF',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'COUNTIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'countIf',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'COUNTIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'SUMIF',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'SUMIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'sumIf',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'SUMIF',
        type: 'Function',
        returns: 'Numeric',
    },
    {
        name: 'CONCATENATE_AGG',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'CONCATENATE',
        type: 'Function',
        returns: 'String',
    },
    {
        name: 'concatenate_AGG',
        categories: [FunctionKeyWord, AggregateFunction],
        function: 'CONCATENATE',
        type: 'Function',
        returns: 'String',
    },
];
