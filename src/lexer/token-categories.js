import { createToken, Lexer } from 'chevrotain';

/**
 *
 * @param {string} name
 * @returns {chevrotain.TokenType}
 */
function createTokenCategory(name) {

    const categoryToken = createToken({
        name,
        pattern: Lexer.NA,
    });

    categoryToken.tokenMatches = [];

    return categoryToken;

}

export const AggregateType = createTokenCategory('AggregateType');
export const BooleanType = createTokenCategory('BooleanType');
export const StringType = createTokenCategory('StringType');
export const NumericFunction = createTokenCategory('NumericFunction');
export const NumericType = createTokenCategory('NumericType');
export const NumericLiteral = createTokenCategory('NumericLiteral');
export const BooleanLiteral = createTokenCategory('BooleanLiteral');
export const StringLiteral = createTokenCategory('StringLiteral');
export const Identifier = createTokenCategory('Identifier');
export const DateLiteral = createTokenCategory('DateLiteral');
export const AdditionOperator = createTokenCategory('AdditionOperator');
export const MultiplicationOperator = createTokenCategory('MultiplicationOperator');
export const PowerOperator = createTokenCategory('PowerOperator');

export const categoryTokens = [
    AggregateType,
    BooleanType,
    StringType,
    NumericFunction,
    NumericType,
    NumericLiteral,
    BooleanLiteral,
    StringLiteral,
    Identifier,
    DateLiteral,
    AdditionOperator,
    MultiplicationOperator,
    PowerOperator,
];
