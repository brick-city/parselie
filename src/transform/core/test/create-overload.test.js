// createOverload.test.js
import assert from 'node:assert';
import { describe, it } from 'node:test';
import { createOverload } from '../create-overload.js';

describe('createOverload()', () => {

    it('accepts valid overloads where fn.length matches required args', () => {

        // @ts-ignore
        const overload = createOverload('a:number, b:number => number', (a, b) => a + b);
        assert.strictEqual(typeof overload.fn, 'function');
        assert.strictEqual(overload.signature, 'a:number, b:number => number');

    });

    it('throws if fn.length is too short for required args', () => {

        assert.throws(
            // @ts-ignore
            () => createOverload('a:number, b:number, c:number => number', (a, b) => a + b),
            /requires at least 3 args/,
        );

    });

});
