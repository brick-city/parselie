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

// TODO: Review these categories, they may not all be needed

// Types
export const DateType = createTokenCategory('DateLiteral');
export const NumericType = createTokenCategory('NumericType');
export const BooleanType = createTokenCategory('BooleanType');
export const StringType = createTokenCategory('StringType');

// Functions
export const FunctionKeyWord = createTokenCategory('FunctionType');
export const StringFunction = createTokenCategory('StringFunction');
export const NumericFunction = createTokenCategory('NumericFunction');
export const AggregateFunction = createTokenCategory('Function');
export const StringAggregateFunction = createTokenCategory('StringAggregateFunction');
export const NumericAggregateFunction = createTokenCategory('NumericAggregateFunction');

// Enumerations
export const Enumeration = createTokenCategory('StringEnumeration');
export const NumericEnumeration = createTokenCategory('NumericEnumeration');
export const StringEnumeration = createTokenCategory('StringEnumeration');

// Identifiers
export const Identifier = createTokenCategory('Identifier');
export const BracketedIdentifier = createTokenCategory('BracketedIdentifier');

// Operators
export const AdditionOperator = createTokenCategory('AdditionOperator');
export const MultiplicationOperator = createTokenCategory('MultiplicationOperator');
export const PowerOperator = createTokenCategory('PowerOperator');
export const UnaryOperator = createTokenCategory('UnaryOperator');
export const BooleanUnaryOperator = createTokenCategory('BooleanUnaryOperator');

// Literals
export const Literal = createTokenCategory('Literal');
export const NumericLiteral = createTokenCategory('NumericLiteral');
export const BooleanLiteral = createTokenCategory('BooleanLiteral');
export const StringLiteral = createTokenCategory('StringLiteral');
export const DateLiteral = createTokenCategory('DateLiteral');
