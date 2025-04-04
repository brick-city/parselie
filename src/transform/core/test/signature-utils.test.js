// test/signature-utils.test.js
import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseSignature } from '../signature-utils.js';

describe('parseSignature()', () => {

    it('parses optional args correctly', () => {

        const result = parseSignature('number, string? => boolean');
        assert.deepStrictEqual(result, {
            args: [
                {
                    type: 'number',
                    optional: false,
                    variadic: false,
                },
                {
                    type: 'string',
                    optional: true,
                    variadic: false,
                },
            ],
            returns: 'boolean',
        });

    });

    it('parses template types', () => {

        const result = parseSignature('anyT, anyT => anyT');
        assert.deepStrictEqual(result, {
            args: [
                {
                    type: 'anyT',
                    optional: false,
                    variadic: false,
                },
                {
                    type: 'anyT',
                    optional: false,
                    variadic: false,
                },
            ],
            returns: 'anyT',
        });

    });

    it('parses variadic args', () => {

        const result = parseSignature('string... => string');
        assert.deepStrictEqual(result, {
            args: [
                {
                    type: 'string',
                    optional: false,
                    variadic: true,
                },
            ],
            returns: 'string',
        });

    });

    it('throws on invalid return type', () => {

        assert.throws(() => parseSignature('number => nonsense'), /Invalid return type/);

    });

    it('throws on unknown argument type', () => {

        assert.throws(() => parseSignature('foo => number'), /Unknown type/);

    });

    it('throws on multiple => symbols', () => {

        assert.throws(() => parseSignature('number => string => boolean'), /exactly one '=>' separator/);

    });

    it('throws if optional param is not last', () => {

        assert.throws(() => parseSignature('number?, string => number'), /must be last/);

    });

    it('throws if variadic param is not last', () => {

        assert.throws(() => parseSignature('number..., string => number'), /must be last/);

    });

    it('throws if non-optional follows optional', () => {

        assert.throws(() => parseSignature('string?, number => string'), /must be last in signature/);

    });

    it('throws on empty argument slot', () => {

        assert.throws(() => parseSignature('string,,number => number'), /Empty argument/);

    });

});
