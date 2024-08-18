import { createToken, Lexer } from 'chevrotain';

export const AggregateType = createToken({
    name: 'AggregateType',
    pattern: Lexer.NA,
});

export const BooleanType = createToken({
    name: 'BooleanType',
    pattern: Lexer.NA,
});

export const StringType = createToken({
    name: 'StringType',
    pattern: Lexer.NA,
});

export const NumericType = createToken({
    name: 'NumericType',
    pattern: Lexer.NA,
});

export const BooleanLiteral = createToken({
    name: 'BooleanLiteral',
    pattern: Lexer.NA,
});

export const Addition = createToken({
    name: 'Addition',
    pattern: Lexer.NA,
});

export const Multiplication = createToken({
    name: 'Multiplication',
    pattern: Lexer.NA,
});

export const Power = createToken({
    name: 'Power',
    pattern: Lexer.NA,
});
