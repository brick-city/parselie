/* eslint-disable import/prefer-default-export */

/**
 * @typedef {Object.<string, any>} GenericObject
 */

/**
 * @typedef {Object} KeywordObject
 * @property {String} name - The name of the keyword.
 * @property {Array<chevrotain.TokenType>} categories - An array representing categories.
 * @property {string} [function] - The function that the keyword represents.
 * @property {"Enumeration"|"Function"} type - The type of the token.
 * @property {*} [value] - The value of the token.
 * @property {"Numeric"|"String"|"Boolean"|"Date"} returns - The return type of the function.
 * @property {Array<chevrotain.TokenType>[]} [arguments] - The arguments of the function.
 */

export const Types = {};
