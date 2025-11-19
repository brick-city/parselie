// build-function-map.test.js
import assert from 'node:assert';
import { describe, it } from 'node:test';
// @ts-ignore
import { buildFunctionMap } from '../build-function-map.js';
// @ts-ignore
import { createOverload } from '../create-overload.js';

describe('buildFunctionMap()', () => {

    it('builds a map from primary and alias names with same function object', () => {

        const defs = [
            {
                names: ['add', 'ADD'],
                overloads: [
                    // @ts-ignore
                    createOverload('a:number, b:number => number', (a, b) => a + b),
                ],
            },
        ];
        // @ts-ignore
        const map = buildFunctionMap(defs);
        assert.strictEqual(typeof map.ADD, 'object');

    });

    it('throws if aliases are duplicated across definitions', () => {

        const defs = [
            {
                names: ['add'],
                overloads: [
                    // @ts-ignore
                    createOverload('a:number, b:number => number', (a, b) => a + b),
                ],
            },
            {
                names: ['ADD'],
                overloads: [
                    // @ts-ignore
                    createOverload('a:number, b:number => number', (a, b) => a - b),
                ],
            },
        ];
        // @ts-ignore
        assert.throws(() => buildFunctionMap(defs), /Duplicate function or alias/i);

    });

    it('includes all usedTypes from overload signatures', () => {

        const defs = [
            {
                names: ['IF'],
                allowedTypes: ['boolean', 'anyT'],
                overloads: [
                    // @ts-ignore
                    createOverload(
                        'condition:boolean, thenVal:anyT, elseVal:anyT => anyT',
                        (cond, thenVal, elseVal) => (cond ? thenVal : elseVal),
                    ),
                ],
            },
        ];
        // @ts-ignore
        const map = buildFunctionMap(defs);
        assert(map.IF.usedTypes.has('boolean'));
        assert(map.IF.usedTypes.has('anyT'));

    });

});
