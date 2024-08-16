import { lexer } from './src/lexer/lex.js';

// eslint-disable-next-line no-template-curly-in-string
console.dir(lexer.tokenize('test${{GETUTCDATE}}endexpression${{ISNULL (REPLACE(), LEFT(123, abd123.test_this, [$ space].crazy.identifier34 456, 0o457, 0xFF9, 0b101, 234.34e-1 ))}}'), { depth: null });
