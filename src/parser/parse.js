import { CstParser } from 'chevrotain';
import { allTokens, lex } from '../lexer/lex.js';
import {
    AdditionOperator,
    MultiplicationOperator,
    PowerOperator,
    NumericLiteral,
    NumericFunction,
} from '../lexer/token-categories.js';
import { OpenParen, CloseParen, Comma } from '../lexer/symbols.js';

// eslint-disable-next-line import/prefer-default-export
export class ParslieParser extends CstParser {

    constructor() {

        super(allTokens, {
            recoveryEnabled: true, // TODO: Check to see if recoveryEnabled is the right default for this
        });

        const $ = this;

        this.RULE('expression', () => {

            $.OR([

                { ALT: () => $.SUBRULE($.numericExpression) },

            ]);

        });

        this.RULE('numericExpression', () => {

            $.SUBRULE($.additionExpression);

        });

        $.RULE('additionExpression', () => {

            $.SUBRULE($.multiplicationExpression, { LABEL: 'lhs' });

            $.MANY(() => {

                $.CONSUME(AdditionOperator);
                $.SUBRULE2($.multiplicationExpression, { LABEL: 'rhs' });

            });

        });

        $.RULE('multiplicationExpression', () => {

            $.SUBRULE($.powerExpression, { LABEL: 'lhs' });

            $.MANY(() => {

                $.CONSUME(MultiplicationOperator);
                $.SUBRULE2($.powerExpression, { LABEL: 'rhs' });

            });

        });

        $.RULE('powerExpression', () => {

            $.SUBRULE($.atomicExpression, { LABEL: 'lhs' });

            $.MANY(() => {

                $.CONSUME(PowerOperator);
                $.SUBRULE2($.atomicExpression, { LABEL: 'rhs' });

            });

        });

        $.RULE('atomicExpression', () => {

            $.OR([
                { ALT: () => $.CONSUME(NumericLiteral) },
                { ALT: () => $.SUBRULE($.parenthesisExpression) },
                { ALT: () => $.SUBRULE($.numericalFunctionExpression) },
            ]);

        });

        $.RULE('parenthesisExpression', () => {

            $.CONSUME(OpenParen);
            $.SUBRULE($.numericExpression);
            $.CONSUME(CloseParen);

        });

        $.RULE('numericalFunctionExpression', () => {

            $.CONSUME(NumericFunction);
            $.CONSUME(OpenParen);
            $.MANY_SEP({
                SEP: Comma,
                DEF: () => $.SUBRULE($.expression),
            });
            $.CONSUME(CloseParen);

        });

        this.performSelfAnalysis();

    }

}

const parser = new ParslieParser();

export function parselieParser(inputText, mode) {

    console.log('lexing');
    const lexingResult = lex(inputText, mode);

    parser.input = lexingResult.tokens;

    console.log('parsing');

    const cst = parser.expression();

    console.log('parsed');

    return {
        cst,
        lexingResult,
    };

}
