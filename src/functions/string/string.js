import * as Types from '../../types.d.js';

/** @typedef {Types.String} String */
/** @typedef {Types.Numeric} Numeric */

/**
 * @template T
 * @param {Types.ArgumentSignature} args - The types of arguments the function accepts.
 * @param {Types.TypeString} returns - The return type of the function.
 * @param {function(Types.FunctionCtx, ...function(): (String | Numeric)): T} func - The implementation of the function.
 * @returns {Types.FunctionDefinition<T>} - The function definition object.
 */
const createFunctionDefinition = (args, returns, func) => ({
    arguments: args,
    returns,
    func,
});

const stringFunctionDefinitions = {
    /** @type {Types.FunctionDefinition<string>} */
    concatenate: createFunctionDefinition(
        ['String', 'StringVar'],
        'String',

        (ctx, ...operands) => operands.map((fn) => fn()).join(''),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    left: createFunctionDefinition(
        ['String', 'Numeric'],
        'String',

        (ctx, string, length) => string().substring(0, length().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    right: createFunctionDefinition(
        ['String', 'Numeric'],
        'String',

        (ctx, string, length) => string().slice(-length().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    mid: createFunctionDefinition(
        ['String', 'Numeric', 'Numeric'],
        'String',

        (ctx, string, start, length) => string().substring(start().toNumber(), start().toNumber() + length().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    lower: createFunctionDefinition(
        ['String'],
        'String',

        (ctx, string) => string().toLowerCase(),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    upper: createFunctionDefinition(
        ['String'],
        'String',

        (ctx, string) => string().toUpperCase(),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    trim: createFunctionDefinition(
        ['String'],
        'String',

        (ctx, string) => string().trim(),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    rtrim: createFunctionDefinition(
        ['String'],
        'String',

        (ctx, string) => string().replace(/\s+$/, ''),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    ltrim: createFunctionDefinition(
        ['String'],
        'String',

        (ctx, string) => string().replace(/^\s+/, ''),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    replace: createFunctionDefinition(
        ['String', 'String', 'String'],
        'String',

        (ctx, string, search, replacement) => string().replace(new RegExp(search(), 'g'), replacement()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    replicate: createFunctionDefinition(
        ['String', 'Numeric'],
        'String',

        (ctx, string, times) => string().repeat(times().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    substring: createFunctionDefinition(
        ['String', 'Numeric', 'Numeric'],
        'String',

        (ctx, string, start, length) => string().substr(start().toNumber(), length().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    reverse: createFunctionDefinition(
        ['String'],
        'String',

        (ctx, string) => string().split('').reverse().join(''),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    substitute: createFunctionDefinition(
        ['String', 'String', 'String'],
        'String',

        (ctx, string, oldText, newText) => string().replace(new RegExp(oldText(), 'g'), newText()),
    ),

    /** @type {Types.FunctionDefinition<Numeric>} */
    charIndex: createFunctionDefinition(
        ['String', 'String'],
        'Numeric',

        (ctx, search, string) => string().indexOf(search()),
    ),

    /** @type {Types.FunctionDefinition<Numeric>} */
    find: createFunctionDefinition(
        ['String', 'String'],
        'Numeric',

        (ctx, search, string) => string().indexOf(search()),
    ),

    /** @type {Types.FunctionDefinition<Numeric>} */
    len: createFunctionDefinition(
        ['String'],
        'Numeric',

        (ctx, string) => string().length,
    ),
};

export default stringFunctionDefinitions;
