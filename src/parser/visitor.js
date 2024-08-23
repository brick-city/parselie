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

        return this.visit(ctx.numericExpression);

    }

    numericExpression(ctx) {

        return this.visit(ctx.additionExpression);

    }

    additionExpression(ctx) {

        const lhs = this.visit(ctx.lhs);
        const args = [];

        if (ctx.rhs) {

            args.push(lhs);

            ctx.operator.forEach((operator, i) => {

                if (operator.image === '+') {

                    args.push(this.visit(ctx.rhs[i]));

                } else {

                    args.push(this.negateExpression(this.visit(ctx.rhs[i])));

                }

            });

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

        //   console.log('atomicExpression');
        //   console.dir(ctx, { depth: null });

        if (ctx.NumericLiteral) {

            return {
                returns: 'Numeric',
                type: 'Constant',
                value: ctx.NumericLiteral[0].value,
            };

        }

        if (ctx.identifierExpression) {

            return this.visit(ctx.identifierExpression);

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

        const operator = ctx.UnaryOperator[0].image;
        const expression = this.visit(ctx.expression);

        // Try to simplify the expression

        if (operator === '+') {

            // Unary plus is a no-op
            return expression;

        }

        return this.negateExpression(expression);

    }

    // eslint-disable-next-line class-methods-use-this
    negateExpression(expression) {

        if (expression.type === 'Constant') {

            return {
                returns: 'Numeric',
                type: 'Constant',
                value: expression.value.negated(),
            };

        }

        return {
            returns: 'Numeric',
            type: 'Unary',
            operator: '-',
            expression,
        };

    }

    parenthesisExpression(ctx) {

        return this.visit(ctx.expression);

    }

    numericalFunctionExpression(ctx) {

        const args = ctx.expression.map((parm) => this.visit(parm));

        return {
            returns: 'Numeric',
            type: 'Function',
            name: ctx.NumericFunction[0].image,
            args,
        };

    }

}
