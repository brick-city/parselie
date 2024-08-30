/* eslint-disable import/prefer-default-export */
import { Decimal } from 'decimal.js';
import { ParslieParser } from './parser.js';

const p = new ParslieParser();

const BaseVisitor = p.getBaseCstVisitorConstructorWithDefaults();

export class ParslieVisitor extends BaseVisitor {

    constructor() {

        super();
        this.validateVisitor();

    }

    expression(ctx) {

        return this.visit(ctx.additionExpression);

    }

    additionExpression(ctx) {

        console.log('addition exp', ctx);

        const lhs = this.visit(ctx.lhs);
        const args = [];

        if (ctx.rhs) {

            args.push(lhs);

            console.log('addition exp', ctx);

            console.log('args add exp 1', args);

            ctx.operator.forEach((operator, i) => {

                const rhExp = this.visit(ctx.rhs[i]) ?? {
                    returns: undefined,
                    type: 'undefined',
                    value: undefined,
                };

                // TODO: If rhExp is undefined, throw an error or log an error, or something, no trailing operator allowed

                if (operator.image === '+') {

                    args.push(rhExp);

                } else {

                    args.push(this.negateExpression(rhExp));

                }

            });

            console.log('args add exp', args);

            const constants = [];
            for (let i = args.length - 1; i >= 0; i--) {

                if (args[i].type === 'Constant') {

                    constants.push(args.splice(i, 1)[0]);

                }

            }

            if (constants.length) {

                const value = Decimal.sum(...(constants.map((constant) => constant.value)));
                if (!value.isZero()) {

                    args.push({
                        returns: 'Numeric',
                        type: 'Constant',
                        value,
                    });

                }

            }

            if (args.length) {

                if (args.length === 1 && args[0].type === 'Constant') {

                    return args[0];

                }

                return {

                    returns: 'Numeric',
                    type: 'Function',
                    name: 'SUM',
                    args,

                };

            }

        }

        return lhs;

    }

    multiplicationExpression(ctx) {

        console.log('multiplicationExpression', ctx);

        const lhs = this.visit(ctx.lhs);

        if (ctx.rhs) {

            const rhs = this.visit(ctx.rhs);

            return {
                multiplicationExpression: {
                    lhs,
                    rhs,
                },
            };

        }
        return lhs;

    }

    atomicExpression(ctx) {

        console.log('atomicExpression');
        console.dir(ctx, { depth: null });

        if (ctx.Literal) {

            // TODO: Add support for other types of literals

            return {
                returns: 'Numeric',
                type: 'Constant',
                value: ctx.Literal[0].value,
            };

        }

        if (ctx.unaryExpression) {

            return this.visit(ctx.unaryExpression);

        }

        const exp = ctx?.NumericLiteral ?? this.visit(ctx.parenthesisExpression || ctx.numericalFunctionExpression);

        // TODO: If exp is undefined, throw an error or log an error, or something

        return exp;

    }

    // eslint-disable-next-line class-methods-use-this
    identifierExpression(ctx) {

        const identifier = ctx.identifier[0].value;
        const properties = ctx.property?.map((prop) => prop.value) ?? [];

        return {
            returns: 'TBD',
            type: 'Variable',
            name: identifier,
            properties,
        };

    }

    unaryExpression(ctx) {

        console.log('unaryExpression', ctx);

        const operator = ctx.UnaryOperator[0].image;
        const expression = this.visit(ctx.expression[0]);

        // Try to simplify the expression

        if (operator === '+') {

            // Unary plus is a no-op
            return expression;

        }

        return this.negateExpression(expression);

    }

    // eslint-disable-next-line class-methods-use-this
    negateExpression(expression) {

        console.log('negateExpression', expression);

        if (expression.type === 'Constant') {

            return {
                returns: 'Numeric',
                type: 'Constant',
                value: expression.value.negated(),
            };

        }

        return {
            returns: 'Numeric',
            type: 'Function',
            name: 'NEGATE',
            args: [expression],
        };

    }

    parenthesisExpression(ctx) {

        return this.visit(ctx.expression);

    }

    functionExpression(ctx) {

        // TODO: Add support the function type
        // TODO: Add support for function parameter typing

        const args = this.visit(ctx.arguments);

        console.log(args);

        return {
            returns: 'Numeric',
            type: 'Function',
            name: ctx.FunctionType[0].image,
            args,
        };

    }

    arguments(ctx) {

        console.log('arguments', ctx);

        const args = ctx.expression.map((exp) => this.visit(exp));

        console.log('args', args);

        return args;

    }

}
