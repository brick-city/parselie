/**
 * createOverload.js
 *
 * Builds a function overload definition using a DSL signature and implementation.
 */

import { parseSignature } from './signature-utils.js';

/** @typedef {import('./function-types.js').AllowedType} AllowedType */

/**
 * Creates a validated overload definition from a DSL signature and implementation function.
 * Performs limited reflection to compare the number of required args with the declared function.
 * Note: JavaScript does not retain type info at runtime, so this only checks argument count.
 *
 * @param {string} signature - DSL signature (e.g. "number, number => number")
 * @param {Function} fn - Implementation of the function.
 * @returns {{ args: Array<{ type: AllowedType, optional: boolean, variadic: boolean }>, returns: AllowedType, fn: Function, signature: string }}
 */
export function createOverload(signature, fn) {

    const parsed = parseSignature(signature);
    const requiredArgs = parsed.args.filter((arg) => !arg.optional && !arg.variadic).length;

    if (fn.length < requiredArgs) {

        // eslint-disable-next-line max-len
        throw new Error(`Function for signature "${signature}" requires at least ${requiredArgs} args, but implementation only declares ${fn.length}`);

    }

    return {
        ...parsed,
        fn,
        signature,
    };

}
