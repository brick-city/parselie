import { createToken, Lexer } from 'chevrotain';

/** @type {chevrotain.TokenType[]} */
export const categoryTokens = [];

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

    categoryTokens.push(categoryToken);

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
export const BracketedIdentifier = createTokenCategory('BracketedIdentifier');
export const DateLiteral = createTokenCategory('DateLiteral');
export const AdditionOperator = createTokenCategory('AdditionOperator');
export const MultiplicationOperator = createTokenCategory('MultiplicationOperator');
export const PowerOperator = createTokenCategory('PowerOperator');
export const UnaryOperator = createTokenCategory('UnaryOperator');
export const BooleanUnaryOperator = createTokenCategory('BooleanUnaryOperator');
export const NumericEnumeration = createTokenCategory('NumericEnumeration');
export const Enumeration = createTokenCategory('Enumeration');
