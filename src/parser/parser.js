import { CstParser } from 'chevrotain';
import { allTokens } from '../lexer/lex.js';
import {
    AdditionOperator,
    MultiplicationOperator,
    NumericLiteral,
    NumericFunction,
    Identifier,
    UnaryOperator,
    AggregateFunction,
    StringFunction,
    StringLiteral,
} from '../lexer/token-categories.js';
import {
    OpenParen, CloseParen, Comma, Dot, Ampersand,
} from '../lexer/symbols.js';

// eslint-disable-next-line import/prefer-default-export
export class ParslieParser extends CstParser {

    expression = this.RULE('expression', () => {

        this.OR([

            { ALT: () => this.SUBRULE(this.scalarExpression) },
            { ALT: () => this.SUBRULE(this.aggregateExpression) },

        ]);

    });

    aggregateExpression = this.RULE('aggregateExpression', () => {

        this.CONSUME(this.aggregateFunctionExpression);

    });

    scalarExpression = this.RULE('scalarExpression', () => {

        this.OR([

            { ALT: () => this.SUBRULE(this.numericExpression) },
            { ALT: () => this.SUBRULE(this.stringExpression) },

        ]);

    });

    numericExpression = this.RULE('numericExpression', () => {

        this.SUBRULE(this.additionExpression);

    });

    stringExpression = this.RULE('stringExpression', () => {

        this.SUBRULE(this.concatenationExpression);

    });

    concatenationExpression = this.RULE('concatenationExpression', () => {

        this.SUBRULE(this.atomicStringExpression, { LABEL: 'lhs' });

        this.MANY(() => {

            this.CONSUME(Ampersand, { LABEL: 'operator' });
            this.SUBRULE2(this.atomicStringExpression, { LABEL: 'rhs' });

        });

    });

    atomicStringExpression = this.RULE('atomicStringExpression', () => {

        this.OR([
            { ALT: () => this.CONSUME(StringLiteral) },
            { ALT: () => this.SUBRULE(this.identifierExpression) },
            { ALT: () => this.SUBRULE(this.aggregateFunctionExpression) },
            { ALT: () => this.SUBRULE(this.stringFunctionExpression) },
        ]);

    });

    additionExpression = this.RULE('additionExpression', () => {

        this.SUBRULE(this.multiplicationExpression, { LABEL: 'lhs' });

        this.MANY(() => {

            this.CONSUME(AdditionOperator, { LABEL: 'operator' });
            this.SUBRULE2(this.multiplicationExpression, { LABEL: 'rhs' });

        });

    });

    multiplicationExpression = this.RULE('multiplicationExpression', () => {

        this.SUBRULE(this.atomicExpression, { LABEL: 'lhs' });

        this.MANY(() => {

            this.CONSUME(MultiplicationOperator, { LABEL: 'operator' });
            this.SUBRULE2(this.atomicExpression, { LABEL: 'rhs' });

        });

    });

    identifierExpression = this.RULE('identifierExpression', () => {

        this.CONSUME(Identifier, { LABEL: 'identifier' });
        this.MANY(() => {

            this.CONSUME(Dot, { LABEL: 'dot' });
            this.CONSUME2(Identifier, { LABEL: 'property' });

        });

    });

    atomicExpression = this.RULE('atomicExpression', () => {

        this.OR([
            { ALT: () => this.CONSUME(NumericLiteral) },
            { ALT: () => this.SUBRULE(this.identifierExpression) },
            { ALT: () => this.SUBRULE(this.parenthesisExpression) },
            { ALT: () => this.SUBRULE(this.numericalFunctionExpression) },
            { ALT: () => this.SUBRULE(this.aggregateFunctionExpression) },
            { ALT: () => this.SUBRULE(this.stringFunctionExpression) },
            { ALT: () => this.SUBRULE(this.unaryExpression) },
        ]);

    });

    parenthesisExpression = this.RULE('parenthesisExpression', () => {

        this.CONSUME(OpenParen);
        this.SUBRULE(this.expression);
        this.CONSUME(CloseParen);

    });

    unaryExpression = this.RULE('unaryExpression', () => {

        this.CONSUME(UnaryOperator);
        this.SUBRULE(this.expression);

    });

    numericalFunctionExpression = this.RULE('numericalFunctionExpression', () => {

        this.CONSUME(NumericFunction);
        this.CONSUME(OpenParen);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => this.SUBRULE(this.expression),
        });
        this.CONSUME(CloseParen);

    });

    aggregateFunctionExpression = this.RULE('aggregateFunctionExpression', () => {

        this.CONSUME(AggregateFunction);
        this.CONSUME(OpenParen);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => this.SUBRULE(this.scalarExpression),
        });
        this.CONSUME(CloseParen);

    });

    stringFunctionExpression = this.RULE('stringFunctionExpression', () => {

        this.CONSUME(StringFunction);
        this.CONSUME(OpenParen);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => this.SUBRULE(this.expression),
        });
        this.CONSUME(CloseParen);

    });

    constructor() {

        super(allTokens, {
            recoveryEnabled: true,
        });

        this.performSelfAnalysis();

    }

}
