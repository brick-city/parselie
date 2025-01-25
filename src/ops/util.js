import * as Types from '../types.d.js';

/**
 * @template T
 * @param {Types.FunctionCategory} cat - The category of the function.
 * @param {Types.ArgumentSignature} args - The types of arguments the function accepts.
 * @param {Types.TypeString} returns - The return type of the function.
 * @param {function(Types.FunctionCtx, ...function(): Types.FunctionReturnType): T} func - The implementation of the function.
 * @returns {Types.FunctionDefinition<T>} - The function definition object.
 */
export const createFunctionDefinition = (cat, args, returns, func) => ({
    arguments: args,
    returns,
    func,
    cat,
});
