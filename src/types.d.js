/* eslint-disable import/prefer-default-export */

/**
 * @typedef {Object.<string, any>} GenericObject
 * @typedef {import('decimal.js').Decimal.Instance} Decimal
 * @typedef {import('decimal.js').Decimal.Constructor} DecimalClass
 */

/**
 * @typedef {Object} KeywordObject
 * @property {String} name - The name of the keyword.
 * @property {Array<chevrotain.TokenType>} categories - An array representing categories.
 * @property {string} [function] - The function that the keyword represents.
 * @property {"Enumeration"|"Function"} type - The type of the token.
 * @property {*} [value] - The value of the token.
 * @property {"Numeric"|"String"|"Boolean"|"Date"|"Undefined"|"Null"} returns - The return type of the function.
  @property {Array<("Numeric"|"String"|"Boolean"|"Date")[]
        | ["NumericVar"|"StringVar"|"BooleanVar"|"DateVar"]
        | [...("Numeric"|"String"|"Boolean"|"Date")[],
        "NumericVar"|"StringVar"|"BooleanVar"|"DateVar"]>} [arguments] - The arguments of the function
 */

/**
 * @typedef {Object} FunctionCtx
 * @property {DecimalClass} Decimal - The Decimal class.
 */

export const Types = {};
