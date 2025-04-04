/**
 * @typedef {'number' | 'string' | 'boolean' | 'any' | 'anyT'} AllowedType
 */

/**
 * A set of valid DSL types for use in function signatures.
 *
 * @type {Set<AllowedType>}
 */
export const allowedTypes = new Set([
    'number',
    'string',
    'boolean',
    'any',
    'anyT',
]);
