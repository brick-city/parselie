// test/signature-utils.test.js
import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseSignature } from '../signature-utils.js';

describe('parseSignature()', () => {

    it('parses named parameters correctly', () => {

        const result = parseSignature('count:number, text:string => boolean');
        assert.deepStrictEqual(result, {
            args: [
                {
                    name: 'count',
                    type: 'number',
                    optional: false,
                    variadic: false,
                },
                {
                    name: 'text',
                    type: 'string',
                    optional: false,
                    variadic: false,
                },
            ],
            returns: 'boolean',
        });

    });

    it('parses optional args correctly', () => {

        const result = parseSignature('name:string, age?:number => boolean');
        assert.deepStrictEqual(result, {
            args: [
                {
                    name: 'name',
                    type: 'string',
                    optional: false,
                    variadic: false,
                },
                {
                    name: 'age',
                    type: 'number',
                    optional: true,
                    variadic: false,
                },
            ],
            returns: 'boolean',
        });

    });

    it('parses template types correctly', () => {

        const result = parseSignature('first:anyT, second:anyT => anyT');
        assert.deepStrictEqual(result, {
            args: [
                {
                    name: 'first',
                    type: 'anyT',
                    optional: false,
                    variadic: false,
                },
                {
                    name: 'second',
                    type: 'anyT',
                    optional: false,
                    variadic: false,
                },
            ],
            returns: 'anyT',
        });

    });

    it('parses variadic args correctly', () => {

        const result = parseSignature('items:string... => string');
        assert.deepStrictEqual(result, {
            args: [
                {
                    name: 'items',
                    type: 'string',
                    optional: false,
                    variadic: true,
                },
            ],
            returns: 'string',
        });

    });

    it('parses temporal types correctly', () => {

        const result = parseSignature('start:plainDate, end:plainDate => duration');
        assert.deepStrictEqual(result, {
            args: [
                {
                    name: 'start',
                    type: 'plainDate',
                    optional: false,
                    variadic: false,
                },
                {
                    name: 'end',
                    type: 'plainDate',
                    optional: false,
                    variadic: false,
                },
            ],
            returns: 'duration',
        });

    });

    it('throws on invalid return type', () => {

        assert.throws(() => parseSignature('value:number => nonsense'), /Invalid return type/);

    });

    it('throws on unknown argument type', () => {

        assert.throws(() => parseSignature('value:foo => number'), /Unknown type/);

    });

    it('throws on multiple => symbols', () => {

        assert.throws(() => parseSignature('a:number => b:string => c:boolean'), /exactly one '=>' separator/);

    });

    it('throws if optional param is not last', () => {

        assert.throws(() => parseSignature('value?:number, other:string => number'), /must be last/);

    });

    it('throws if variadic param is not last', () => {

        assert.throws(() => parseSignature('items:number..., other:string => number'), /must be last/);

    });

    it('throws if non-optional follows optional', () => {

        assert.throws(() => parseSignature('first?:string, second:number => string'), /must be last in signature/);

    });

    it('throws on empty argument slot', () => {

        assert.throws(() => parseSignature('first:string,,second:number => number'), /Empty argument/);

    });

    it('throws on missing colon separator', () => {

        assert.throws(() => parseSignature('name string => string'), /Missing ':' separator/);

    });

    it('throws on missing parameter name', () => {

        assert.throws(() => parseSignature(':string => string'), /Missing parameter name/);

    });

    it('throws on missing parameter type', () => {

        assert.throws(() => parseSignature('name: => string'), /Missing parameter type/);

    });

    it('throws on invalid parameter name', () => {

        assert.throws(() => parseSignature('123:string => string'), /Invalid parameter name/);

    });

});
