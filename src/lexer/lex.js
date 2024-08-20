import { createToken, Lexer } from 'chevrotain';
import { Decimal } from 'decimal.js';
import { keywords } from './keywords.js';
import { symbols } from './symbols.js';
import { literals } from './literal.js';

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

const exitCurlyExpression = createToken({
    name: 'CloseCurly',
    pattern: /}/,
    pop_mode: true,
});

const mainStringExpression = createToken({
    name: 'MAIN_STRING_EXPRESSION',
    // eslint-disable-next-line no-control-regex
    pattern: /[\u0020-\uFFFF\u0009\u000A\u000D]+?(?=\${{)|[\u0020-\uFFFF\u0009\u000A\u000D]+/,
});

const lexerDef = {

    modes: {
        main: [
            enterExpression,
            mainStringExpression,
        ],

        expression: [
            whiteSpace,
            ...keywords,
            ...literals,
            exitExpression,
            ...symbols,
        ],

        curlyExpression: [
            whiteSpace,
            ...keywords,
            ...literals,
            exitCurlyExpression,
            ...symbols,
        ],

    },

    defaultMode: 'main',

};

const lexer = new Lexer(lexerDef, { ensureOptimizations: true });

/**
 *
 * @param {String} inputText
 * @returns {import('chevrotain').ILexingResult}
 */
// eslint-disable-next-line import/prefer-default-export
export function lex(inputText) {

    const lexingResult = lexer.tokenize(inputText);

    lexingResult.groups?.NumberLiteral.forEach((token) => {

        const value = token.image.replace(/_/g, '').replace(/[LlNn]$/, '');

        // eslint-disable-next-line no-param-reassign
        token.value = new Decimal(value);

    });

    return lexingResult;

}

export const allTokens = [

    whiteSpace,
    enterExpression,
    mainStringExpression,
    ...keywords,
    ...literals,
    exitCurlyExpression,
    exitExpression,
    ...symbols,

];
