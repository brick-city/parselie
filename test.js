import { parselieParser } from './src/parser/parse.js';
import { ParslieVisitor } from './src/parser/visitor.js';

// eslint-disable-next-line no-template-curly-in-string

// !!!!!! we are going to add

// console.dir(lex(`test${String.fromCharCode(13)
// }return\${{GETUTCDATE}}endexpression\${{ISNULL (REPLACE(), {RIGHT()} , left(), LEFT(123, abd123.test_this, [$ space].crazy.identifier34 456, sumAgg(), 0o457, {3F2504E0-4F89-11D3-9A0C-0305E82C3301}, 0xFF9, 0b101, 234.34e-1 ))}}`), { depth: null });

// const t = new Decimal('0o457');

// console.log(typeof t);
// console.log((t instanceof Decimal));
// console.log(t.constructor.name);

const { cst } = parselieParser('SUM(56, 15, 354, (3.5 + 10-99 - .01 + anidetifier), - identifierName.property1.property2.property3, + - + 5.3745)', 'expression');

// const { cst } = parselieParser('- 5.567', 'expression');

const parselieVisitor = new ParslieVisitor();

const ast = parselieVisitor.visit(cst);

// console.log(JSON.stringify(cst));

// console.dir(cst, { depth: null });
console.dir(ast, { depth: null });

// console.dir(ast, { depth: null });

// console.dir(lex('${{summer 0o457}}'), { depth: null });
