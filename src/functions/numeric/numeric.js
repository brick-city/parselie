import * as Types from '../../types.d.js';

/** @typedef {Types.Decimal} Decimal */

/**
 * @template T
 * @param {Types.ArgumentSignature} args - The types of arguments the function accepts.
 * @param {Types.TypeString} returns - The return type of the function.
 * @param {function(Types.FunctionCtx, ...function(): (Decimal | String)): T} func - The implementation of the function.
 * @returns {Types.FunctionDefinition<T>} - The function definition object.
 */
const createFunctionDefinition = (args, returns, func) => ({
    arguments: args,
    returns,
    func,
});
// #region Literal Assertions
/**
 * @param {() => string} stringLit - A function that returns a string literal to check
 * @returns {boolean} - True if the string matches the binary literal pattern
 */
const isBinaryLiteral = (stringLit) => /^0[bB][01](_?[01])*(\.[01](_?[01])*)?([pP][+-]?\d+)?$/.test(stringLit());

/**
 * @param {() => string} stringLit - A function that returns a string literal to check
 * @returns {boolean} - True if the string matches the octal literal pattern
 */
const isOctalLiteral = (stringLit) => /^0[oO][0-7](_?[0-7])*(\.[0-7](_?[0-7])*)?([pP][+-]?\d+)?$/.test(stringLit());

/**
 * @param {() => string} stringLit - A function that returns a string literal to check
 * @returns {boolean} - True if the string matches the hexadecimal literal pattern
 */
const isHexadecimalLiteral = (stringLit) => /^0[xX][0-9a-fA-F](_?[0-9a-fA-F])*(\.[0-9a-fA-F](_?[0-9a-fA-F])*)?([pP][+-]?\d+)?$/.test(stringLit());

/**
 * @param {() => string} stringLit - A function that returns a string literal to check
 * @returns {boolean} - True if the string matches the float literal pattern
 */
const isFloatLiteral = (stringLit) => /^[+-]?(?:\d+(_?\d+)*|\d*(_?\d+)?\.\d+(_?\d+)*|\d+(_?\d+)*\.\d*)([eE][+-]?\d+(_?\d+)*)?$/.test(stringLit());

/**
 * @param {() => string} stringLit - A function that returns a string literal to check
 * @returns {boolean} - True if the string matches the big integer literal pattern
 */
const isBigIntLiteral = (stringLit) => /^(?:0|[1-9]\d*(_?\d)*)[LlNn]$/.test(stringLit());

/**
 * @param {() => string} stringLit - A function that returns a string literal to check
 * @returns {boolean} - True if the string matches the integer literal pattern
 */
const isIntegerLiteral = (stringLit) => /^(?:0|[1-9]\d*(_?\d)*)$/.test(stringLit());

/**
 * @param {() => string} stringLit - A function that returns a string literal to check
 * @returns {boolean} - True if the string matches any numeric literal pattern
 */
const isNumericLiteral = (stringLit) => isBinaryLiteral(stringLit)
    || isOctalLiteral(stringLit)
    || isHexadecimalLiteral(stringLit)
    || isFloatLiteral(stringLit)
    || isBigIntLiteral(stringLit)
    || isIntegerLiteral(stringLit);

// #endregion

const functionDefinitions = {

    // #region Rounding

    /** @type {Types.FunctionDefinition<Decimal>} */
    ceil: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().ceil(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    clamp: createFunctionDefinition(
        ['Numeric', 'Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @param {function(): Decimal} min
         * @param {function(): Decimal} max
         * @returns {Decimal}
         */
        (ctx, operand, min, max) => operand().clampedTo(min(), max()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    floor: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().floor(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    round: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @param {function(): Decimal} precision
         * @returns {Decimal}
         */
        (ctx, operand, precision) => operand().toDecimalPlaces(precision().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    toDP: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @param {function(): Decimal} dp
         * @returns {Decimal}
         */
        (ctx, operand, dp) => operand().toDP(dp().toNumber()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    toNearest: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @param {function(): Decimal} nearest
         * @returns {Decimal}
         */
        (ctx, operand, nearest) => operand().toNearest(nearest()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    toSignificantDigits: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().toSignificantDigits(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    trunc: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().trunc(),
    ),

    // #endregion

    // #region String Conversion

    /** @type {Types.FunctionDefinition<string>} */
    toExponential: createFunctionDefinition(
        ['Numeric'],
        'String',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {string}
         */
        (ctx, operand) => operand().toExponential(),
    ),

    /** @type {Types.FunctionDefinition<string>} */
    toFixed: createFunctionDefinition(
        ['Numeric'],
        'String',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {string}
         */
        (ctx, operand) => operand().toFixed(),
    ),

    /** @type {Types.FunctionDefinition<String>} */
    toPrecision: createFunctionDefinition(
        ['Numeric'],
        'String',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {string}
             */
        (ctx, operand) => operand().toPrecision(),
    ),

    /** @type {Types.FunctionDefinition<String>} */
    toHexadecimal: createFunctionDefinition(
        ['Numeric'],
        'String',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {string}
             */
        (ctx, operand) => operand().toHexadecimal(),
    ),

    // #endregion

    // #region Utility

    /** @type {Types.FunctionDefinition<Decimal>} */
    abs: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().abs(),
    ),

    /** @type {Types.FunctionDefinition<Decimal[]>} */
    toFraction: createFunctionDefinition(
        ['Numeric'],
        'Array',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Array<Decimal>}
             */
        (ctx, operand) => operand().toFraction(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    hypot: createFunctionDefinition(
        ['NumericVar'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {...function(): Decimal} operands
             * @returns {Decimal}
             */
        (ctx, ...operands) => (operands.length ? ctx.Decimal.hypot(...operands.map((fn) => fn())) : ctx.NaN),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    sign: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => new ctx.Decimal(ctx.Decimal.sign(operand())),
    ),

    // #endregion

    // #region Exponent & Logarithmic

    /** @type {Types.FunctionDefinition<Decimal>} */
    cbrt: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().cbrt(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    exp: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().exp(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    ln: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().ln(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    log: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @param {function(): Decimal} base
         * @returns {Decimal}
         */
        (ctx, operand, base) => operand().log(base()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    log_1: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().log(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    log10: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().log(10),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    log2: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().log(2),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    pow: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} base
         * @param {function(): Decimal} exponent
         * @returns {Decimal}
         */
        (ctx, base, exponent) => base().pow(exponent()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    sqrt: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().sqrt(),
    ),

    // #endregion

    // #region Random

    /** @type {Types.FunctionDefinition<Decimal>} */
    rand: createFunctionDefinition(
        [],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @returns {Decimal}
         */
        (ctx) => ctx.Decimal.random(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    rand_1: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} dp
         * @returns {Decimal}
         */
        (ctx, dp) => ctx.Decimal.random(+dp()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    randBetween: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} min
         * @param {function(): Decimal} max
         * @returns {Decimal}
         */
        (ctx, min, max) => {

            const minVal = min();
            const maxVal = max();
            const diff = maxVal.minus(minVal);
            return minVal.plus(ctx.Decimal.random().times(diff.plus(1)).floor());

        },
    ),

    // #endregion

    // #region Assertion

    /** @type {Types.FunctionDefinition<boolean>} */
    isBigIntLiteral: createFunctionDefinition(
        ['String'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): string} stringLit
         * @returns {boolean}
         */
        (ctx, stringLit) => isBigIntLiteral(stringLit),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isBinaryLiteral: createFunctionDefinition(
        ['String'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): string} stringLit
         * @returns {boolean}
         */
        (ctx, stringLit) => isBinaryLiteral(stringLit),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isFinite: createFunctionDefinition(
        ['Numeric'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {boolean}
         */
        (ctx, operand) => operand().isFinite(),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isFloatLiteral: createFunctionDefinition(
        ['String'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): string} stringLit
         * @returns {boolean}
         */
        (ctx, stringLit) => isFloatLiteral(stringLit),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isHexadecimalLiteral: createFunctionDefinition(
        ['String'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): string} stringLit
         * @returns {boolean}
         */
        (ctx, stringLit) => isHexadecimalLiteral(stringLit),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isInteger: createFunctionDefinition(
        ['Numeric'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {boolean}
         */
        (ctx, operand) => operand().isInteger(),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isIntegerLiteral: createFunctionDefinition(
        ['String'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): string} stringLit
         * @returns {boolean}
         */
        (ctx, stringLit) => isIntegerLiteral(stringLit),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isNaN: createFunctionDefinition(
        ['Numeric'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {boolean}
         */
        (ctx, operand) => operand().isNaN(),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isNegative: createFunctionDefinition(
        ['Numeric'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {boolean}
         */
        (ctx, operand) => operand().isNegative(),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isNumericLiteral: createFunctionDefinition(
        ['String'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): string} stringLit
         * @returns {boolean}
         */
        (ctx, stringLit) => isNumericLiteral(stringLit),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isOctalLiteral: createFunctionDefinition(
        ['String'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): string} stringLit
         * @returns {boolean}
         */
        (ctx, stringLit) => isOctalLiteral(stringLit),
    ),

    /** @type {Types.FunctionDefinition<boolean>} */
    isPositive: createFunctionDefinition(
        ['Numeric'],
        'Boolean',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {boolean}
         */
        (ctx, operand) => operand().isPositive(),
    ),

    // #endregion

    // #region Arithmetic

    /** @type {Types.FunctionDefinition<Decimal>} */
    add: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} augend
         * @param {function(): Decimal} addend
         * @returns {Decimal}
         */
        (ctx, augend, addend) => augend().plus(addend()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    avg: createFunctionDefinition(
        ['NumericVar'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {...function(): Decimal} operands
         * @returns {Decimal}
         */
        (ctx, ...operands) => (operands.length
            ? operands.reduce((acc, val) => acc.plus(val()), ctx.ZERO).div(new ctx.Decimal(operands.length))
            : ctx.NaN),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    div: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} dividend
         * @param {function(): Decimal} divisor
         * @returns {Decimal}
         */
        (ctx, dividend, divisor) => dividend().div(divisor()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    divToInt: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} dividend
             * @param {function(): Decimal} divisor
             * @returns {Decimal}
             */
        (ctx, dividend, divisor) => dividend().divToInt(divisor()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    mod: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} dividend
         * @param {function(): Decimal} divisor
         * @returns {Decimal}
         */
        (ctx, dividend, divisor) => dividend().mod(divisor()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    mul: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} multiplicand
         * @param {function(): Decimal} multiplier
         * @returns {Decimal}
         */
        (ctx, multiplicand, multiplier) => multiplicand().mul(multiplier()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    neg: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().neg(),
    ),

    /** @type {Types.FunctionDefinition<Types.Decimal>} */
    product: createFunctionDefinition(
        ['NumericVar'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {...function(): Types.Decimal} operands
             * @returns {Types.Decimal}
             */
        (ctx, ...operands) => (operands.length ? operands.reduce((acc, val) => acc.mul(val()), ctx.ONE) : ctx.NaN),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    sub: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} minuend
         * @param {function(): Decimal} subtrahend
         * @returns {Decimal}
         */
        (ctx, minuend, subtrahend) => minuend().minus(subtrahend()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    sum: createFunctionDefinition(
        ['NumericVar'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {...function(): Decimal} operands
         * @returns {Decimal}
         */
        (ctx, ...operands) => (operands.length ? operands.reduce((acc, val) => acc.plus(val()), ctx.ZERO) : ctx.NaN),
    ),

    // #endregion

    // #region Trigonometry

    /** @type {Types.FunctionDefinition<Decimal>} */
    acos: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().acos(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    asin: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().asin(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    atan: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().atan(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    atan2: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} y
             * @param {function(): Decimal} x
             * @returns {Decimal}
             */
        (ctx, y, x) => ctx.Decimal.atan2(y(), x()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    cos: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().cos(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    sin: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().sin(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    tan: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} operand
         * @returns {Decimal}
         */
        (ctx, operand) => operand().tan(),
    ),

    // #endregion

    // #region Hyperbolic

    /** @type {Types.FunctionDefinition<Decimal>} */
    acosh: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().acosh(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    asinh: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
                 * @param {Types.FunctionCtx} ctx
                 * @param {function(): Decimal} operand
                 * @returns {Decimal}
                 */
        (ctx, operand) => operand().asinh(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    atanh: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
                 * @param {Types.FunctionCtx} ctx
                 * @param {function(): Decimal} operand
                 * @returns {Decimal}
                 */
        (ctx, operand) => operand().atanh(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    cosh: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().cosh(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    sinh: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().sinh(),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    tanh: createFunctionDefinition(
        ['Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} operand
             * @returns {Decimal}
             */
        (ctx, operand) => operand().tanh(),
    ),
    // #endregion

    // #region Comparison

    /** @type {Types.FunctionDefinition<Decimal>} */
    cmp: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} val1
             * @param {function(): Decimal} val2
             * @returns {Decimal}
             */
        (ctx, val1, val2) => new ctx.Decimal(val1().cmp(val2())),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    equals: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} val1
         * @param {function(): Decimal} val2
         * @returns {Boolean}
         */
        (ctx, val1, val2) => val1().eq(val2()),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    greaterThan: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {function(): Decimal} val1
         * @param {function(): Decimal} val2
         * @returns {Boolean}
         */
        (ctx, val1, val2) => val1().gt(val2()),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    greaterThanEquals: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} val1
             * @param {function(): Decimal} val2
             * @returns {Boolean}
             */
        (ctx, val1, val2) => val1().gte(val2()),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    lessThan: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
             * @param {Types.FunctionCtx} ctx
             * @param {function(): Decimal} val1
             * @param {function(): Decimal} val2
             * @returns {Boolean}
             */
        (ctx, val1, val2) => val1().lt(val2()),
    ),

    /** @type {Types.FunctionDefinition<Boolean>} */
    lessThanEquals: createFunctionDefinition(
        ['Numeric', 'Numeric'],
        'Numeric',

        /**
                 * @param {Types.FunctionCtx} ctx
                 * @param {function(): Decimal} val1
                 * @param {function(): Decimal} val2
                 * @returns {Boolean}
                 */
        (ctx, val1, val2) => val1().lte(val2()),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    max: createFunctionDefinition(
        ['NumericVar'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {...function(): Decimal} operands
         * @returns {Decimal}
         */
        (ctx, ...operands) => (operands.length ? ctx.Decimal.max(...operands.map((fn) => fn())) : ctx.NaN),
    ),

    /** @type {Types.FunctionDefinition<Decimal>} */
    min: createFunctionDefinition(
        ['NumericVar'],
        'Numeric',

        /**
         * @param {Types.FunctionCtx} ctx
         * @param {...function(): Decimal} operands
         * @returns {Decimal}
         */
        (ctx, ...operands) => (operands.length ? ctx.Decimal.min(...operands.map((fn) => fn())) : ctx.NaN),
    ),
    // #endregion
};

export default functionDefinitions;
