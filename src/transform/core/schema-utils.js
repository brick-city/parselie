import { isPlainObject } from '@brick-city/utils';

/* eslint-disable no-restricted-syntax */
/**
 * schema-utils.js
 *
 * Defines a simple schema format and utility for working with type-safe object definitions.
 * Supports nested objects and arrays of primitives or object records.
 */

/**
 * @typedef {'string' | 'number' | 'boolean' | 'any'} PrimitiveType
 *
 * @typedef {PrimitiveType | SchemaObject | [SchemaType]} SchemaType
 *
 * @typedef {Object.<string, SchemaType>} SchemaObject
 */

import { allowedTypes as allowedPrimitiveTypes } from './function-types.js';

/**
 * Validates a schema definition structure to ensure it conforms to the supported types.
 * Enforces that arrays can only appear as values of object properties.
 *
 * @param {SchemaType} schema - The schema to validate.
 * @param {boolean} [isRoot=true] - Internal flag to control array placement.
 * @throws {Error} If the schema is malformed or contains unsupported types.
 */
export function validateSchemaDefinition(schema, isRoot = true) {

    if (isRoot) {

        if (Object.keys(schema).length === 0) {

            throw new Error('Root schema must not be empty.');

        }

    }

    if (typeof schema === 'string') {

        if (!allowedPrimitiveTypes.has(schema)) {

            throw new Error(`Invalid primitive type: ${schema}`);

        }
        return;

    }

    if (Array.isArray(schema)) {

        if (schema.length !== 1) {

            throw new Error('Array schema must have a single element to define item type.');

        }
        return validateSchemaDefinition(schema[0], false);

    }

    if (typeof schema === 'object' && schema !== null) {

        if (!isPlainObject(schema)) {

            throw new Error('Objects for schema must be plain objects.');

        }

        if (Object.keys(schema).length === 0) {

            throw new Error('Nested object schemas must not be empty.');

        }

        for (const key of Object.keys(schema)) {

            const actualKey = key.endsWith('?') ? key.slice(0, -1) : key;
            const subSchema = schema[key];

            if (!actualKey) {

                throw new Error(`Invalid property name: "${key}"`);

            }

            validateSchemaDefinition(subSchema, false);

        }
        return;

    }

    throw new Error(`Invalid schema structure: ${JSON.stringify(schema)}`);

}

/**
 * Extracts all paths from the schema with their types and optionality.
 * @param {SchemaType} schema - The schema to traverse.
 * @param {string} [basePath] - Used internally for recursion.
 * @returns {Array<{ path: string, type: string, optional: boolean }>}
 */
export function extractSchemaPaths(schema, basePath = '') {

    const paths = [];

    if (Array.isArray(schema)) {

        const itemSchema = schema[0];
        return extractSchemaPaths(itemSchema, `${basePath}[]`);

    } if (isPlainObject(schema)) {

        for (const key of Object.keys(schema)) {

            const isOptional = key.endsWith('?');
            const cleanKey = isOptional ? key.slice(0, -1) : key;
            const newPath = basePath ? `${basePath}.${cleanKey}` : cleanKey;

            if (typeof schema[key] === 'string') {

                paths.push({
                    path: newPath,
                    type: schema[key],
                    optional: isOptional,
                });

            } else {

                const subSchema = schema[key];
                const subPaths = extractSchemaPaths(subSchema, newPath);

                paths.push(...subPaths);

            }

        }

    }

    return paths;

}
