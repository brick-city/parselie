// schema-utils.test.js
import assert from 'node:assert';
import { describe, it } from 'node:test';
import { validateSchemaDefinition, extractSchemaPaths } from '../schema-utils.js';

describe('validateSchemaDefinition()', () => {

    it('accepts valid nested schemas with arrays and optional fields', () => {

        const schema = {
            user: {
                name: 'string',
                'age?': 'number',
                tags: ['string'],
                'address?': {
                    street: 'string',
                    'zip?': 'number',
                },
            },
        };
        assert.doesNotThrow(() => validateSchemaDefinition(schema));

    });

    it('throws on empty root object', () => {

        assert.throws(
            () => validateSchemaDefinition({}),
            /Root schema must not be empty/,
        );

    });

    it('throws on invalid primitive type', () => {

        assert.throws(
            () => validateSchemaDefinition({ age: 'float' }),
            /Invalid primitive type/,
        );

    });

    it('throws on array with multiple elements', () => {

        const schema = { items: ['string', 'number'] };
        assert.throws(
            () => validateSchemaDefinition(schema),
            /must have a single element/,
        );

    });

    it('throws on empty nested object', () => {

        const schema = { user: {} };
        assert.throws(
            () => validateSchemaDefinition(schema),
            /Nested object schemas must not be empty/,
        );

    });

});

describe('extractSchemaPaths()', () => {

    it('handles nested objects inside array records', () => {

        const schema = {
            records: [{
                id: 'number',
                details: {
                    category: 'string',
                    'description?': 'string',
                },
            }],
        };

        const paths = extractSchemaPaths(schema);

        assert.strictEqual(paths.length, 3);
        assert.deepStrictEqual(paths[0], {
            path: 'records[].id',
            type: 'number',
            optional: false,
        });
        assert.deepStrictEqual(paths[1], {
            path: 'records[].details.category',
            type: 'string',
            optional: false,
        });
        assert.deepStrictEqual(paths[2], {
            path: 'records[].details.description',
            type: 'string',
            optional: true,
        });

    });
    it('extracts paths with types and optional flags', () => {

        const schema = {
            id: 'string',
            'name?': 'string',
            address: {
                city: 'string',
                'state?': 'string',
            },
            items: [{
                id: 'number',
                'label?': 'string',
            }],
        };

        const paths = extractSchemaPaths(schema);

        assert.strictEqual(paths.length, 6);
        assert.deepStrictEqual(paths[0], {
            path: 'id',
            type: 'string',
            optional: false,
        });
        assert.deepStrictEqual(paths[1], {
            path: 'name',
            type: 'string',
            optional: true,
        });
        assert.deepStrictEqual(paths[2], {
            path: 'address.city',
            type: 'string',
            optional: false,
        });
        assert.deepStrictEqual(paths[3], {
            path: 'address.state',
            type: 'string',
            optional: true,
        });
        assert.deepStrictEqual(paths[4], {
            path: 'items[].id',
            type: 'number',
            optional: false,
        });
        assert.deepStrictEqual(paths[5], {
            path: 'items[].label',
            type: 'string',
            optional: true,
        });

    });

});
