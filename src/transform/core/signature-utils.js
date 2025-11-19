/**
 * signature-utils.js
 *
 * Utilities for parsing and validating compact function signature DSL strings.
 * DSL syntax supports types, optional args, variadic args, and return types.
 *
 * Example: "name:string, count?:number => boolean"
 */

import { allowedTypes } from './function-types.js';

/** @typedef {import('./function-types.js').AllowedType} AllowedType */

/**
 * Parses a function signature string with named parameters.
 *
 * Format: paramName[?]:type[...], paramName2[?]:type[...] => returnType
 * Examples:
 *   - name:string => string
 *   - count?:number => boolean
 *   - items:string... => number
 *
 * Rules:
 * - Signature must contain exactly one '=>' separator.
 * - Arguments must be comma-separated and follow format: paramName[?]:type[...]
 * - Parameter names must be valid JavaScript identifiers.
 * - Optional parameters must be last (marked with ? after name).
 * - Variadic parameters must be last (marked with ... after type).
 * - Variadic arguments are inherently optional (zero or more allowed).
 * - Types must be known and valid.
 *
 * @param {string} signature - The signature DSL string.
 * @returns {{
 *   args: Array<{
 *     name: string,
 *     type: AllowedType,
 *     optional: boolean,
 *     variadic: boolean
 *   }>,
 *   returns: AllowedType
 * }}
 * @throws {Error} If the signature is malformed or contains invalid types/names.
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

            const argSpec = argStrings[i];

            if (!argSpec) {

                throw new Error(`Empty argument at position ${i + 1} in signature: "${signature}"`);

            }

            // Parse format: paramName[?]:type[...]
            const colonIndex = argSpec.indexOf(':');
            if (colonIndex === -1) {

                throw new Error(`Missing ':' separator in parameter at position ${i + 1} in signature: "${signature}"`);

            }

            const nameSpec = argSpec.substring(0, colonIndex).trim();
            const typeSpec = argSpec.substring(colonIndex + 1).trim();

            if (!nameSpec) {

                throw new Error(`Missing parameter name at position ${i + 1} in signature: "${signature}"`);

            }

            if (!typeSpec) {

                throw new Error(`Missing parameter type at position ${i + 1} in signature: "${signature}"`);

            }

            // Parse optional flag from name: paramName[?]
            let optional = false;
            let name = nameSpec;
            if (nameSpec.endsWith('?')) {

                optional = true;
                name = nameSpec.slice(0, -1).trim();

            }

            // Validate name is a valid identifier
            if (!/^[a-zA-Z_$][\w$]*$/.test(name)) {

                // eslint-disable-next-line max-len
                throw new Error(`Invalid parameter name "${name}" at position ${i + 1}. `
                    + `Must be a valid JavaScript identifier in signature: "${signature}"`);

            }

            // Parse variadic flag from type: type[...]
            let variadic = false;
            let typeRaw = typeSpec;
            if (typeRaw.endsWith('...')) {

                variadic = true;
                typeRaw = typeRaw.slice(0, -3).trim();

            }

            const type = /** @type {AllowedType} */ (typeRaw);

            if (!allowedTypes.has(type)) {

                throw new Error(`Unknown type "${type}" for parameter "${name}" in signature: "${signature}"`);

            }

            if (optional && i !== argStrings.length - 1) {

                throw new Error(`Optional parameter "${name}?" must be last in signature: "${signature}"`);

            }

            if (variadic && i !== argStrings.length - 1) {

                throw new Error(`Variadic parameter "${name}:${type}..." must be last in signature: "${signature}"`);

            }

            if (optional) {

                foundOptional = true;

            }

            if (!optional && foundOptional) {

                throw new Error(`Non-optional parameter "${name}" cannot follow optional one in signature: "${signature}"`);

            }

            args.push({
                name,
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
