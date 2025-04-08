/* eslint-disable no-restricted-syntax */
/**
 * build-function-map.js
 *
 * Builds a map of function names and aliases to validated function definitions.
 */

/**
 * @typedef {import('./function-types.js').AllowedType} AllowedType
 * @typedef {ReturnType<typeof import('./signature-utils.js').parseSignature>} ParsedSignature
 * @typedef {{
*   names: string[],
*   overloads: Array<ParsedSignature & { signature: string, fn: Function }>,
*   allowedTypes: AllowedType[],
*   description?: string,
*   category?: string
* }} FunctionDefinition
*/

/**
* Builds a map of all function names (primary and aliases) to their definitions.
* Ensures global case-insensitive uniqueness across all names.
* Collects actual types used across all overloads.
*
* @param {FunctionDefinition[]} definitions
* @returns {Record<string, FunctionDefinition & { usedTypes: Set<AllowedType> }>} A lookup map of upper cased function names to definitions.
* @throws {Error} If any function name or alias is duplicated across functions (case-insensitively).
*/
export function buildFunctionMap(definitions) {

    /** @type {Record<string, FunctionDefinition & { usedTypes: Set<AllowedType> }>} */
    const map = {};
    const seen = new Set();

    for (const def of definitions) {

        const usedTypes = new Set();

        for (const overload of def.overloads) {

            for (const arg of overload.args) {

                usedTypes.add(arg.type);

            }
            usedTypes.add(overload.returns);

        }

        const defWithTypes = {
            ...def,
            usedTypes,
        };

        for (const name of def.names) {

            const upper = name.toUpperCase();

            if (seen.has(upper)) {

                throw new Error(`Duplicate function or alias: ${name}`);

            }

        }

        for (const name of def.names) {

            const upper = name.toUpperCase();

            seen.add(upper);
            map[upper] = defWithTypes;

        }

    }

    return map;

}
