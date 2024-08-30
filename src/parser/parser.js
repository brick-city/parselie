import { CstParser } from 'chevrotain';
import { allTokens } from '../lexer/lex.js';
import {
    AdditionOperator,
    MultiplicationOperator,
    Literal,
    Identifier,
    UnaryOperator,
    FunctionKeyWord,

} from '../lexer/token-categories.js';
import {
    OpenParen, CloseParen, Comma, Dot, OpenBracket, CloseBracket,
} from '../lexer/symbols.js';

// eslint-disable-next-line import/prefer-default-export
export class ParslieParser extends CstParser {

    expression = this.RULE('expression', () => {

        this.SUBRULE(this.additionExpression);

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

    atomicExpression = this.RULE('atomicExpression', () => {

        this.OR([
            { ALT: () => this.CONSUME(Literal) },
            { ALT: () => this.SUBRULE(this.parenthesisExpression) },
            { ALT: () => this.SUBRULE(this.functionExpression) },
            { ALT: () => this.SUBRULE(this.unaryExpression) },
            { ALT: () => this.SUBRULE(this.identifierExpression) },
        ]);

    });

    identifierExpression = this.RULE('identifierExpression', () => {

        this.CONSUME(Identifier, { LABEL: 'identifier' });
        this.MANY(() => {

            this.CONSUME(Dot, { LABEL: 'dot' });
            this.CONSUME2(Identifier, { LABEL: 'property' });

        });

    });

    parenthesisExpression = this.RULE('parenthesisExpression', () => {

        this.CONSUME(OpenParen);
        this.SUBRULE(this.expression);
        this.CONSUME(CloseParen);

    });

    arrayExpression = this.RULE('arrayExpression', () => {

        this.CONSUME(OpenBracket);
        this.SUBRULE(this.arguments);
        this.CONSUME(CloseBracket);

    });

    unaryExpression = this.RULE('unaryExpression', () => {

        this.CONSUME(UnaryOperator);
        this.SUBRULE(this.expression);

    });

    functionExpression = this.RULE('functionExpression', () => {

        console.log('functionExpression', this.LA(1).image);

        this.CONSUME(FunctionKeyWord);
        this.CONSUME(OpenParen);
        this.SUBRULE(this.arguments);
        this.CONSUME(CloseParen);

    });

    arguments = this.RULE('arguments', () => {

        this.MANY_SEP({
            SEP: Comma,
            DEF: () => this.SUBRULE(this.expression),
        });

    });

    constructor() {

        super(allTokens, {
            recoveryEnabled: true,
        });

        this.performSelfAnalysis();

    }

}
