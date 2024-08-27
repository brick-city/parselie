import { createToken } from 'chevrotain';
import { logicalFunctionList } from './keywords/logicalFunctions.js';
import { dateFunctionList } from './keywords/dateFunctions.js';
import { stringFunctionList } from './keywords/stringFunctions.js';
import { numericFunctionList } from './keywords/numericFunctions.js';
import { aggregateFunctionList } from './keywords/aggregateFunctions.js';
import { enumerationList } from './keywords/enumerations.js';

import { IdentifierLiteral } from './literal.js';

import * as Types from '../types.d.js';

/** @type {Types.KeywordObject[]} */
const keywordList = [...enumerationList,
    ...logicalFunctionList,
    ...stringFunctionList,
    ...dateFunctionList,
    ...numericFunctionList,
    ...aggregateFunctionList];

/** @type {chevrotain.TokenType[]} * */
// eslint-disable-next-line import/prefer-default-export
export const keywordTokens = [];

keywordList.sort((a, b) => b.name.length - a.name.length);

keywordList.forEach((keyword) => {

    if (keyword.name.startsWith('@')) {

        keywordTokens.push(createToken({
            name: keyword.name,
            pattern: new RegExp(keyword.name),
            categories: keyword.categories,
        }));

    } else {

        keywordTokens.push(createToken({
            name: keyword.name,
            pattern: new RegExp(keyword.name),
            categories: keyword.categories,
            longer_alt: IdentifierLiteral,
        }));

    }

});
