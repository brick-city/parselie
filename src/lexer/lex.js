import { createToken, Lexer } from 'chevrotain';
import { Decimal } from 'decimal.js';
import { keywordTokens } from './keywords.js';
import { symbolTokens, CloseCurly } from './symbols.js';
import { literalTokens } from './literal.js';
import { categoryTokens } from './token-categories.js';

const whiteSpace = createToken({
    name: 'whiteSpace',
    pattern: /\s+/,
    group: Lexer.SKIPPED,
});

const enterExpression = createToken({
    name: 'ENTER_EXPRESSION',
    pattern: /\${{/,
    push_mode: 'expression',
});

const exitExpression = createToken({
    name: 'EXIT_EXPRESSION',
    pattern: /}}/,
    pop_mode: true,
});

const mainStringExpression = createToken({
    name: 'MAIN_STRING_EXPRESSION',
    // eslint-disable-next-line no-control-regex
    pattern: /[\u0020-\uFFFF\u0009\u000A\u000D]+?(?=\${{)|[\u0020-\uFFFF\u0009\u000A\u000D]+/,
});

const lexerDef = {

    modes: {
        expressionString: [
            enterExpression,
            mainStringExpression,
        ],

        expression: [
            whiteSpace,
            ...keywordTokens,
            ...literalTokens,
            exitExpression,
            ...symbolTokens,
        ],

        curlyExpression: [
            whiteSpace,
            ...keywordTokens,
            ...literalTokens,
            CloseCurly,
            ...symbolTokens,
        ],

    },

    defaultMode: 'expressionString',

};

const lexer = new Lexer(lexerDef, { ensureOptimizations: true });

/**
 *
 * @param {String} inputText
 * @returns {{
 *   lexingResult: chevrotain.ILexingResult,
 *   tokensForCategory: Object.<string, chevrotain.IToken[]>
 * }}
 */
// eslint-disable-next-line import/prefer-default-export
export function lex(inputText, mode = 'main') {

    const lexingResult = lexer.tokenize(inputText, mode);

    /** @type {Object.<string, chevrotain.IToken[]>}  */
    const tokensForCategory = {};

    categoryTokens.forEach((category) => {

        tokensForCategory[category.name] = [];

    });

    lexingResult.tokens.forEach((token) => {

        if (token.tokenType?.CATEGORIES) {

            token.tokenType.CATEGORIES.forEach((category) => {

                tokensForCategory[category.name].push(token);

            });

        }

    });

    tokensForCategory.NumericLiteral.forEach((token) => {

        const value = token.image.replace(/_/g, '').replace(/[LlNn]$/, '');

        // eslint-disable-next-line no-param-reassign
        token.value = new Decimal(value);

    });

    tokensForCategory.Identifier.forEach((token) => {

        // eslint-disable-next-line no-param-reassign
        token.value = token.tokenType.name === 'IdentifierLiteral' ? token.image : token.image.slice(2, -2);

    });

    return {
        lexingResult,
        tokensForCategory,
    };

}

export const allTokens = [
    whiteSpace,
    enterExpression,
    mainStringExpression,
    ...keywordTokens,
    ...literalTokens,
    CloseCurly,
    exitExpression,
    ...symbolTokens,
    ...categoryTokens,
];
