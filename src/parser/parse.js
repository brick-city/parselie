import { lex } from '../lexer/lex.js';

// eslint-disable-next-line import/prefer-default-export
import { ParslieParser } from './parser.js';

const parser = new ParslieParser();

/**
 *
 * @param {string} inputText
 * @param {"expression"|"expressionString"} mode
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
export function parselieParser(inputText, mode) {

    console.log('lexing');
    const { lexingResult, tokensForCategory } = lex(inputText, mode);

    // console.dir(lexingResult, { depth: null });

    console.log(JSON.stringify(lexingResult.tokens));

    parser.input = lexingResult.tokens;

    console.log('parsing');

    const cst = parser.expression();

    console.log('parsed');

    return {
        cst,
        lexingResult,
        tokensForCategory,
    };

}
