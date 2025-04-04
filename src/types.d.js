/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

/**
 * @typedef {Object.<string, any>} GenericObject
 * @typedef {import('decimal.js').Decimal.Instance} Decimal
 * @typedef {import('decimal.js').Decimal.Constructor} DecimalClass
 * @typedef {import ('temporal-polyfill').Temporal.PlainDate} Date
 * @typedef {import ('temporal-polyfill').Temporal.PlainDateTime} DateTime
 * @typedef {import ('temporal-polyfill').Temporal.PlainTime} Time
 * @typedef {import ('temporal-polyfill').Temporal.PlainYearMonth} YearMonth
 * @typedef {import ('temporal-polyfill').Temporal.PlainMonthDay} MonthDay
 * @typedef {import ('temporal-polyfill').Temporal.Duration} Duration
 * @typedef {import ('temporal-polyfill').Temporal.Instant} Instant
 * @typedef {import ('temporal-polyfill').Temporal.TimeZone} TimeZone
 * @typedef {import ('temporal-polyfill').Temporal.ZonedDateTime} ZonedDateTime
 */

/**
 * @typedef { Date | DateTime | Time | YearMonth | MonthDay | Duration | Instant | TimeZone | ZonedDateTime } DateScalarType
 * @typedef { Decimal | String | Boolean | DateScalarType } ScalarType
 */

/**
 * @typedef {[...(TypeString)[], (TypeString|TypeVaryingString) ]} ArgumentSignature
 */

// TODO: Create a typedef for properties

/**
 * @typedef {Object} CtxType - The context object.
 * @property {Map< String, ScalarType >} properties - The properties of the context.
 * @property {Map< String, ScalarType >} constants - The constants of the context.
 * /

/** @typedef {function():ScalarType} OpFunctionType */

/**
 * @typedef {Object} OperandType - An operand object.
 * @property {OpFunctionType} $ - The operand function
 * @property {TypeString} type - The return type of the operand.
 */

/**
 * @typedef {Object} KeywordObject
 * @property {String[]} names - The name(s) of the keyword.
 * @property {Array<chevrotain.TokenType>} [categories] - An array representing categories.
 * @property {FunctionDefinitionTypes | FunctionDefinitionTypes[]} [function] - The function that the keyword represents.
 * @property {"Enumeration"|"Function"} type - The type of the token.
 * @property {*} [value] - The value of the token.
 * @property {TypeString} [returns] - The return type of the function.
 */

/**
 * @typedef {Decimal|String|Date|Boolean|Decimal[]} FunctionReturnType
 * @typedef {"const"|"func"|"prop"}  FunctionCategory
*/

/**
 * @template {FunctionReturnType} ReturnType
 * @typedef {Object} FunctionDefinition
 * @property {TypeString} returns - The return type of the function.
 * @property {ArgumentSignature} arguments - The arguments of the function
 * @property {function(FunctionCtx, ...function(): (FunctionReturnType)): ReturnType} func - The function to be executed.
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

/**
 * @typedef {"Decimal"|"Float"|"Integer"} NumericTypeString
 * @typedef {"PlainDate"|"PlainDateTime"|"Instant"|"ZonedDateTime"|"PlainTime"|"PlainMonthDay"|"PlainYearMonth" | "Duration"} TemporalTypeString
 * @typedef {"Array"|"Object"|"Any"|"AnyT"} ComplexTypeString
 * @typedef {"String"|"Boolean"|"Undefined"|"Null"} OtherTypeString
 * @typedef {NumericTypeString|TemporalTypeString|ComplexTypeString|OtherTypeString} TypeString
 */

/**
 * @typedef {"DecimalVar"|"FloatVar"|"IntegerVar"} NumericTypeVaryingString
 * @typedef {"PlainDateVar"|"PlainDateTimeVar"|"InstantVar"|"ZonedDateTimeVar"|"PlainTimeVar"|"PlainMonthDayVar"|"PlainYearMonthVar" | "DurationVar"} TemporalTypeVaryingString
 * @typedef {"ArrayVar"|"ObjectVar"|"AnyVar"|"AnyTVar"} ComplexTypeVaryingString
 * @typedef {"StringVar"|"BooleanVar"|"UndefinedVar"|"NullVar"} OtherTypeVaryingString
 * @typedef {NumericTypeVaryingString|TemporalTypeVaryingString|ComplexTypeVaryingString|OtherTypeVaryingString} TypeVaryingString
 */

export const Types = {};
