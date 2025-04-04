/**
 * signature-utils.js
 *
 * Utilities for parsing and validating compact function signature DSL strings.
 * DSL syntax supports types, optional args, variadic args, and return types.
 *
 * Example: "number, string?, boolean... => any"
 */

import { allowedTypes } from './function-types.js';

/** @typedef {import('./function-types.js').AllowedType} AllowedType */

/**
 * Parses a function signature string like "number, string? => boolean"
 * and returns structured argument and return type info.
 *
 * Rules:
 * - Signature must contain exactly one '=>' separator.
 * - Arguments must be comma-separated.
 * - Optional arguments must be last.
 * - Variadic arguments must be last.
 * - Types must be known and valid.
 *
 * @param {string} signature - The signature DSL string.
 * @returns {{ args: Array<{ type: AllowedType, optional: boolean, variadic: boolean }>, returns: AllowedType }}
 * @throws {Error} If the signature is malformed or contains invalid types.
 */
export function parseSignature(signature) {

    if (typeof signature !== 'string') {

        throw new Error(`Signature must be a string. Received: ${typeof signature}`);

    }

    const parts = signature.split('=>');

    if (parts.length !== 2) {

        throw new Error(`Signature must contain exactly one '=>' separator: "${signature}"`);

    }

    const [argListRaw, returnTypeRaw] = parts.map((s) => s.trim());

    if (!returnTypeRaw) {

        throw new Error(`Missing return type in signature: "${signature}"`);

    }

    const returnType = /** @type {AllowedType} */ (returnTypeRaw.trim());
    if (!allowedTypes.has(returnType)) {

        throw new Error(`Invalid return type "${returnType}" in signature: "${signature}"`);

    }

    const argList = argListRaw.trim();
    const args = [];

    if (argList) {

        const argStrings = argList.split(',').map((s) => s.trim());

        let foundOptional = false;

        for (let i = 0; i < argStrings.length; i++) {

            let raw = argStrings[i];

            if (!raw) {

                throw new Error(`Empty argument at position ${i + 1} in signature: "${signature}"`);

            }

            let optional = false;
            let variadic = false;

            if (raw.endsWith('?')) {

                optional = true;
                raw = raw.slice(0, -1);

            }

            if (raw.endsWith('...')) {

                variadic = true;
                raw = raw.slice(0, -3);

            }

            const type = /** @type {AllowedType} */ (raw);

            if (!allowedTypes.has(type)) {

                throw new Error(`Unknown type "${type}" in signature: "${signature}"`);

            }

            if (optional && i !== argStrings.length - 1) {

                throw new Error(`Optional parameter "${type}?" must be last in signature: "${signature}"`);

            }

            if (variadic && i !== argStrings.length - 1) {

                throw new Error(`Variadic parameter "${type}..." must be last in signature: "${signature}"`);

            }

            if (optional) {

                foundOptional = true;

            }

            if (!optional && foundOptional) {

                throw new Error(`Non-optional parameter cannot follow optional one in signature: "${signature}"`);

            }

            args.push({
                type,
                optional,
                variadic,
            });

        }

    }

    return {
        args,
        returns: returnType,
    };

}
