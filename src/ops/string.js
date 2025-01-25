import * as Types from '../types.d.js';
import { createFunctionDefinition } from './util.js';

const stringFunctionDefinitions = {
    /** @type {Types.FunctionDefinition<string>} */
    concatenate: createFunctionDefinition(
        'func',
        ['String', 'StringVar'],
        'String',
        (ctx, ...operands) => operands.map((fn) => fn()).join(''),
    ),

    /** @type {Types.FunctionDefinition<String>} */
    left: createFunctionDefinition(
        'func',
        ['String', 'Numeric'],
        'String',

        /**
         *
         * @param {Types.FunctionCtx} ctx
         * @param {Types.FunctionDefinition<String>} string
         * @param {Number} length
         * @returns
         */
        (ctx, string, length) => string().substring(0, length().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    right: createFunctionDefinition(
        'func',
        ['String', 'Numeric'],
        'String',
        (ctx, string, length) => string().slice(-length().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    mid: createFunctionDefinition(
        'func',
        ['String', 'Numeric', 'Numeric'],
        'String',
        (ctx, string, start, length) => string().substring(start().toNumber(), start().toNumber() + length().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    lower: createFunctionDefinition(
        'func',
        ['String'],
        'String',
        (ctx, string) => string().toLowerCase(),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    upper: createFunctionDefinition(
        'func',
        ['String'],
        'String',
        (ctx, string) => string().toUpperCase(),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    trim: createFunctionDefinition(
        'func',
        ['String'],
        'String',
        (ctx, string) => string().trim(),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    rtrim: createFunctionDefinition(
        'func',
        ['String'],
        'String',
        (ctx, string) => string().replace(/\s+$/, ''),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    ltrim: createFunctionDefinition(
        'func',
        ['String'],
        'String',
        (ctx, string) => string().replace(/^\s+/, ''),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    replace: createFunctionDefinition(
        'func',
        ['String', 'String', 'String'],
        'String',
        (ctx, string, search, replacement) => string().replace(new RegExp(search(), 'g'), replacement()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    replicate: createFunctionDefinition(
        'func',
        ['String', 'Numeric'],
        'String',
        (ctx, string, times) => string().repeat(times().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    substring: createFunctionDefinition(
        'func',
        ['String', 'Numeric', 'Numeric'],
        'String',
        (ctx, string, start, length) => string().substr(start().toNumber(), length().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    reverse: createFunctionDefinition(
        'func',
        ['String'],
        'String',
        (ctx, string) => string().split('').reverse().join(''),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    substitute: createFunctionDefinition(
        'func',
        ['String', 'String', 'String'],
        'String',
        (ctx, string, oldText, newText) => string().replace(new RegExp(oldText(), 'g'), newText()),
    ),

    /** @type {Types.FunctionDefinition<Numeric>} */
    charIndex: createFunctionDefinition(
        'func',
        ['String', 'String'],
        'Numeric',
        (ctx, search, string) => string().indexOf(search()),
    ),

    /** @type {Types.FunctionDefinition<Numeric>} */
    find: createFunctionDefinition(
        'func',
        ['String', 'String'],
        'Numeric',
        (ctx, search, string) => string().indexOf(search()),
    ),

    /** @type {Types.FunctionDefinition<Numeric>} */
    len: createFunctionDefinition(
        'func',
        ['String'],
        'Numeric',
        (ctx, string) => string().length,
    ),
};

export default stringFunctionDefinitions;
