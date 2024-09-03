import * as Types from '../../types.d.js';

// TODO: for functions with varying arguments, create a separate function definition for each argument signature

const noArguments = [];
const singleNumeric = ['Numeric'];
const doubleNumeric = ['Numeric', 'Numeric'];
const tripleNumeric = ['Numeric', 'Numeric', 'Numeric'];
const varyingNumeric = ['NumericVar'];

// eslint-disable-next-line import/prefer-default-export
export const mod = {

    arguments: [doubleNumeric],
    returns: 'Numeric',

    /**
     *
     * @param {Types.FunctionCtx} ctx
     * @param {function(): Types.Decimal} dividend
     * @param {function(): Types.Decimal} divisor
     * @returns Types.Decimal
     */

    func: (ctx, dividend, divisor) => dividend().mod(divisor()),

};

export const abs = {

    arguments: [singleNumeric],
    returns: 'Numeric',

    /**
     * @param {Types.FunctionCtx} ctx
     * @param {function(): Types.Decimal} operand
     * @returns Types.Decimal
     */

    func: (ctx, operand) => operand().abs,

};

export const sign = {

    arguments: [singleNumeric],
    returns: 'Numeric',

    /**
     * @param {Types.FunctionCtx} ctx
     * @param {function(): Types.Decimal} operand
     * @returns Types.Decimal
     */

    func: (ctx, operand) => ctx.Decimal.sign(operand()),

};

export const ceil = {

    arguments: [singleNumeric],
    returns: 'Numeric',

    /**
     * @param {Types.FunctionCtx} ctx
     * @param {function(): Types.Decimal} operand
     * @returns Types.Decimal
     */

    func: (ctx, operand) => operand().ceil(),

};

export const clamp = {

    arguments: [tripleNumeric],
    returns: 'Numeric',

    /**
     * @param {Types.FunctionCtx} ctx
     * @param {function(): Types.Decimal} operand
     * @param {function(): Types.Decimal} min
     * @param {function(): Types.Decimal} max
     * @returns Types.Decimal
     */

    func: (ctx, operand, min, max) => operand().clampedTo(min(), max()),

};

export const product = {

    arguments: [varyingNumeric],
    returns: 'Numeric',

    /**
     * @param {Types.FunctionCtx} ctx
     * @param {Array<function(): Types.Decimal>} operands
     * @returns Types.Decimal
     */
    // TODO: We probably need to add a check for overflow here
    func: (ctx, operands) => operands.reduce((acc, val) => acc.mul(val()), operands[0]()),

};

export const sum = {

    arguments: [varyingNumeric],
    returns: 'Numeric',

    /**
     * @param {Types.FunctionCtx} ctx
     * @param {Array<function(): Types.Decimal>} operands
     * @returns Types.Decimal
     */
    // TODO: We probably need to add a check for overflow here
    func: (ctx, operands) => ctx.Decimal.sum(...operands.map((val) => val())),

};

export const rand = {

    arguments: [noArguments, singleNumeric],
    returns: 'Numeric',

    /**
     * @param {Types.FunctionCtx} ctx
     * @param {function(): Types.Decimal} max
     * @param {function(): Types.Decimal} min
     * @returns Types.Decimal
     */

    func: (ctx, max, min) => ctx.Decimal.random(),

};

export const randBetween = {

    arguments: [doubleNumeric],
    returns: 'Numeric',

    /**
     * @param {Types.FunctionCtx} ctx
     * @param {function(): Types.Decimal} max
     * @param {function(): Types.Decimal} min
     * @returns Types.Decimal
     */

    func: (ctx, max, min) => ctx.Decimal.sum(...operands.map((val) => val())),

};
