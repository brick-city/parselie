/* eslint-disable import/prefer-default-export */

/**
 * @typedef {Object.<string, any>} GenericObject
 * @typedef {import('decimal.js').Decimal.Instance} Decimal
 * @typedef {import('decimal.js').Decimal.Constructor} DecimalClass
 */

/**
 * @typedef {("Numeric"|"String"|"Boolean"|"Date")[]
        | ["NumericVar"|"StringVar"|"BooleanVar"|"DateVar"]
        | [...("Numeric"|"String"|"Boolean"|"Date")[],
        "NumericVar"|"StringVar"|"BooleanVar"|"DateVar"]} ArgumentSignature
 */

/**
 * @typedef {Object} KeywordObject
 * @property {String[]} name - The name(s) of the keyword.
 * @property {Array<chevrotain.TokenType>} [categories] - An array representing categories.
 * @property {FunctionDefinitionTypes | FunctionDefinitionTypes[]} [function] - The function that the keyword represents.
 * @property {"Enumeration"|"Function"} [type] - The type of the token.
 * @property {*} [value] - The value of the token.
 * @property {TypeString} [returns] - The return type of the function.
 */

/**
 * @template {Decimal|String|Date|Boolean|Decimal[]} ReturnType
 * @typedef {Object} FunctionDefinition
 * @property {TypeString} returns - The return type of the function.
 * @property {ArgumentSignature} arguments - The arguments of the function
 * @property {function(FunctionCtx, ...function(): (Decimal|String|Date|Boolean|Decimal[])): ReturnType} func - The function to be executed.
 */

/**
 * @typedef {FunctionDefinition<Decimal>} DecimalFunctionDefinition
 * @typedef {FunctionDefinition<String>} StringFunctionDefinition
 * @typedef {FunctionDefinition<Date>} DateFunctionDefinition
 * @typedef {FunctionDefinition<Boolean>} BooleanFunctionDefinition
 * @typedef {FunctionDefinition<Decimal[]>} DecimalArrayFunctionDefinition
 */

/**
 * @typedef {DecimalFunctionDefinition |
 *          StringFunctionDefinition |
 *         DateFunctionDefinition |
 *        BooleanFunctionDefinition |
 *       DecimalArrayFunctionDefinition} FunctionDefinitionTypes
 */

/**
 * @typedef {Object} FunctionCtx
 * @property {DecimalClass} Decimal - The Decimal class.
 * @property {Decimal} ZERO - The Decimal instance representing 0.
 * @property {Decimal} ONE - The Decimal instance representing 1.
 * @property {Decimal} NaN - The Decimal instance representing NaN.
 */

/** @typedef {"Numeric"|"String"|"Boolean"|"Date"|"Undefined"|"Null"|"Array"} TypeString */

export const Types = {};
