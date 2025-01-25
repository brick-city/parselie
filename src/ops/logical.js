import * as Types from '../types.d.js';

/**
 * @template T
 * @param {Types.ArgumentSignature} args - The types of arguments the function accepts.
 * @param {Types.TypeString | 'AnyT'} returns - The return type of the function.
 * @param {function(Types.FunctionCtx, ...function(): (Boolean | Any)): T} func - The implementation of the function.
 * @returns {Types.FunctionDefinition<T>} - The function definition object.
 */
const createFunctionDefinition = (args, returns, func) => ({
    arguments: args,
    returns,
    func,
});

export const logicalFunctionDefinitions = {
    /** @type {Types.FunctionDefinition<Boolean>} */
    iif: createFunctionDefinition(
        ['Boolean', 'AnyT', 'AnyT'],
        'AnyT',
        (ctx, condition, trueValue, falseValue) => (condition() ? trueValue() : falseValue()),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    and: createFunctionDefinition(
        ['BooleanVar'],
        'Boolean',
        (ctx, ...operands) => operands.every((fn) => fn()),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    or: createFunctionDefinition(
        ['BooleanVar'],
        'Boolean',
        (ctx, ...operands) => operands.some((fn) => fn()),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    xor: createFunctionDefinition(
        ['BooleanVar'],
        'Boolean',
        (ctx, ...operands) => operands.reduce((acc, fn) => acc !== fn(), false),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    not: createFunctionDefinition(
        ['Boolean'],
        'Boolean',
        (ctx, operand) => !operand(),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    isNull: createFunctionDefinition(
        ['Any'],
        'Boolean',
        (ctx, value) => value() === null,
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    isUndefined: createFunctionDefinition(
        ['Any'],
        'Boolean',
        (ctx, value) => value() === undefined,
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    isError: createFunctionDefinition(
        ['Any'],
        'Boolean',
        (ctx, value) => value() instanceof Error,
    ),

    // TODO: is isBoolean really necessary ?

    /** @type {Types.FunctionDefinition<Boolean>} */
    isBoolean: createFunctionDefinition(
        ['Any'],
        'Boolean',
        (ctx, value) => typeof value() === 'boolean',
    ),
};
