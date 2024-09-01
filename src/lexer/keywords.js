import { createToken } from 'chevrotain';
import { logicalFunctionList } from './keywords/logicalFunctions.js';
import { dateFunctionList } from './keywords/dateFunctions.js';
import { stringFunctionList } from './keywords/stringFunctions.js';
import { numericFunctionList } from './keywords/numericFunctions.js';
import { aggregateFunctionList } from './keywords/aggregateFunctions.js';
import { enumerationList } from './keywords/enumerations.js';
import { literalKeywordList } from './keywords/literalKeywords.js';

import { IdentifierLiteral } from './literal.js';

import * as Types from '../types.d.js';

/** @type {Types.KeywordObject[]} */
const keywordList = [
    ...literalKeywordList,
    ...enumerationList,
    ...logicalFunctionList,
    ...stringFunctionList,
    ...dateFunctionList,
    ...numericFunctionList,
    ...aggregateFunctionList,
];

keywordList.sort((a, b) => b.name.length - a.name.length);

/** @type {chevrotain.TokenType[]} */
// eslint-disable-next-line import/prefer-default-export
export const keywordTokens = keywordList.map((keyword) => {

    /** @type {chevrotain.ITokenConfig} */
    const tokenConfig = {
        name: keyword.name,
        pattern: new RegExp(keyword.name),
        categories: keyword.categories,
    };

    if (!keyword.name.startsWith('@')) {

        tokenConfig.longer_alt = IdentifierLiteral;

    }

    const keywordToken = createToken(tokenConfig);

    if (keyword.value) keywordToken.value = keyword.value;
    if (keyword.returns) keywordToken.returnType = keyword.returns;

    return keywordToken;

});
