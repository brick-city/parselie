# Developer Documentation: Architecture and Lexer Specification

This document provides a comprehensive technical reference for developers, maintainers, and AI systems working with the parselie expression language engine.

## Table of Contents

- [High-Level Architecture](#high-level-architecture)
- [Execution Pipeline](#execution-pipeline)
- [Lexer Specification](#lexer-specification)
- [Parser Specification](#parser-specification)
- [Evaluation Semantics](#evaluation-semantics)
- [Extension Guidelines](#extension-guidelines)

---

## High-Level Architecture

### Project Structure

```
parselie/
├── src/
│   ├── lexer/           # Token generation and lexical analysis
│   ├── parser/          # AST construction
│   ├── ops/             # Operator implementations
│   ├── property/        # Property access and resolution
│   ├── transform/       # Function transformation and dispatch
│   └── core/            # Scalar types and core utilities
├── tests/               # Test suites
└── documentation/       # Documentation
```

### Module Responsibilities

| Module | Purpose |
|--------|---------|
| `src/lexer/` | Tokenization, lexical analysis, mode handling |
| `src/parser/` | Grammar rules, AST construction, syntax validation |
| `src/ops/` | Operator implementations (arithmetic, logical, string, date) |
| `src/property/` | Property resolution, object traversal |
| `src/transform/` | Function registry, signature matching, overload resolution |
| `src/core/` | Scalar type system, value representation |

---

## Execution Pipeline

```
Input String
    ↓
[LEXER] → Tokenization
    ↓
Token Stream
    ↓
[PARSER] → AST Construction
    ↓
Abstract Syntax Tree
    ↓
[TRANSFORM] → Function/Operator Resolution
    ↓
Executable Tree
    ↓
[EVALUATION] → Runtime Execution
    ↓
Result Value
```

### Phase 1: Lexing

**Input:** Raw string expression  
**Output:** Token stream with metadata  
**Location:** `src/lexer/lex.js`, `src/lexer/literal.js`

The lexer performs:
- Pattern matching against token definitions
- Mode transitions (expression mode, template mode remnants)
- Token categorization
- Value extraction and normalization

### Phase 2: Parsing

**Input:** Token stream  
**Output:** Abstract Syntax Tree (AST)  
**Location:** `src/parser/parser.js`, `src/parser/parse.js`

The parser performs:
- Syntax tree construction using Chevrotain
- Operator precedence enforcement
- Grammar rule validation
- Node type assignment

### Phase 3: Transformation

**Input:** AST  
**Output:** Resolved function calls and operators  
**Location:** `src/transform/`

The transform phase performs:
- Function signature matching
- Overload resolution
- Type checking
- Dispatch preparation

### Phase 4: Evaluation

**Input:** Transformed AST  
**Output:** Computed value  
**Location:** `src/ops/`, `src/property/`

The evaluation phase performs:
- Recursive AST traversal
- Operator application
- Function execution
- Property resolution

---

## Lexer Specification

### Token Categories

Defined in `src/lexer/token-categories.js`:

```javascript
// Type Categories
DateType              // Temporal values
NumericType           // All numeric types
BooleanType           // Boolean values
StringType            // String values

// Literal Categories
Literal               // Base literal category
NumericLiteral        // Numeric literal tokens
BooleanLiteral        // Boolean literal tokens
StringLiteral         // String literal tokens
DateLiteral           // Date/time literal tokens

// Identifier Categories
Identifier            // Standard identifiers
BracketedIdentifier   // Special-character identifiers

// Operator Categories
AdditionOperator      // + and -
MultiplicationOperator // *, /, %
PowerOperator         // ^
UnaryOperator         // Unary -, +
BooleanUnaryOperator  // NOT, !

// Function Categories
FunctionKeyWord       // Generic function marker
StringFunction        // String manipulation functions
NumericFunction       // Numeric functions
AggregateFunction     // Collection aggregates
```

### Literal Token Definitions

Defined in `src/lexer/literal.js`:

#### Numeric Literals

| Token | Pattern | Example |
|-------|---------|---------|
| `IntegerLiteral` | `/\d+/` | `42`, `123` |
| `FloatLiteral` | `/\d+\.\d+/` | `3.14`, `0.5` |
| `BigIntegerLiteral` | `/\d+n/` | `123n` |
| `HexadecimalLiteral` | `/0[xX][0-9a-fA-F]+/` | `0xFF`, `0x1A` |
| `OctalLiteral` | `/0o[0-7]+/` | `0o77`, `0o644` |
| `BinaryLiteral` | `/0b[01]+/` | `0b1010`, `0b1111` |

**Processing:**
- All numeric literals use a decimal math library internally for precision
- No separate "decimal" literal type exists
- All computations maintain arbitrary precision by default

#### String Literals

| Token | Delimiter | Escaping |
|-------|-----------|----------|
| `DoubleQuotedStringLiteral` | `"` | Standard escape sequences |
| `SingleQuotedStringLiteral` | `'` | Standard escape sequences |
| `BackTickStringLiteral` | `` ` `` | Standard escape sequences |

**Implementation:**
```javascript
createStringLiteralToken(name, quoteChar)
```

All three string types are semantically equivalent. Choice is user preference.

#### Boolean and Null Literals

Defined in `src/lexer/keywords/literalKeywords.js`:

```javascript
// Boolean literals (case-insensitive)
TRUE, true   → true
FALSE, false → false

// Null/undefined (case-insensitive)
null, NULL         → null
undefined, UNDEFINED → undefined
```

These are keyword-based enumerations, not pattern-matched tokens.

#### Date/Time Literals

Temporal literals use ISO 8601 format patterns:

| Token | Format | Example |
|-------|--------|---------|
| `ZonedDateTimeLiteral` | ISO 8601 with timezone | `2023-11-15T14:30:00Z` |
| `PlainDateTimeLiteral` | ISO 8601 without timezone | `2023-11-15T14:30:00` |
| `PlainDateLiteral` | Date only | `2023-11-15` |
| `PlainTimeLiteral` | Time only | `14:30:00` |
| `PlainYearMonthLiteral` | Year-month | `2023-11` |
| `PlainMonthDayLiteral` | Month-day (recurring) | `--11-15` |
| `DurationLiteral` | ISO 8601 duration | `P1Y6M`, `PT2H30M` |

**Regex Patterns:**  
See `src/lexer/literal.js` for complete regex definitions.

#### Identifier Literals

##### Standard Identifier

**Token:** `IdentifierLiteral`  
**Pattern:**
```javascript
/[a-zA-Z_$][a-zA-Z0-9_$]*/
```

**Rules:**
- Must start with letter, underscore, or dollar sign
- Subsequent characters: letters, digits, underscores, dollar signs
- Case-sensitive
- No spaces, dashes, or special symbols allowed

**Examples:**
```
customer
firstName
_internal
$price
data_2023
```

##### Bracketed Identifier

**Token:** `BracketedIdentifierLiteral`  
**Pattern:**
```javascript
/<![^\s<][^\t\n\r\f\v<]*[^\s<!]!>/
```

**Rules:**
- Enclosed in `<! ... !>` delimiters
- Content cannot start or end with whitespace
- Control characters not allowed inside
- Everything else permitted (dots, brackets, dashes, spaces, Unicode)

**Value Extraction:**
```javascript
token.value = token.image.slice(2, -2); // Remove <! and !>
```

**Examples:**
```
<! first-name !>           → "first-name"
<! [dbo].[table].[col] !>  → "[dbo].[table].[col]"
<! customer.name !>        → "customer.name"
<! Total Amount !>         → "Total Amount"
```

**Critical Semantic Rule:**

The **content** of a bracketed identifier is treated as an **atomic string**.

```javascript
<! a.b.c !>    // Single identifier: "a.b.c"
<! a !>.<! b !>.<! c !>  // Three identifiers: "a", "b", "c" with property access
```

The parser does **not** split bracketed identifier contents on dots or any other character.

---

### Identifier Semantics: Dot Notation

#### Hierarchical Property Access

Syntax:
```
identifier "." identifier
```

**Lexer behavior:**
- Produces separate tokens: `Identifier`, `Dot`, `Identifier`

**Parser behavior:**
- Constructs PropertyAccess AST node
- Left side is object
- Right side is property name

**Example:**
```
customer.name
```
→ Tokens: `[ IdentifierLiteral("customer"), Dot, IdentifierLiteral("name") ]`  
→ AST: `PropertyAccess(Identifier("customer"), Identifier("name"))`  
→ Evaluation: Look up `customer` object, access its `name` property

#### Mixed Forms

Standard and bracketed identifiers can be combined:

```
customer.<! first-name !>
<! sales-order !>.total
<! table !>.<! column !>.<! field !>
```

Each segment is independently tokenized.

#### Flat Identifier with Embedded Dot

```
<! customer.name !>
```

**Lexer behavior:**
- Single token: `BracketedIdentifierLiteral`
- Value: `"customer.name"`

**Parser behavior:**
- Single Identifier node
- No property access

**Evaluation:**
- Look up field literally named `"customer.name"`
- Common in SQL metadata, document databases, configuration systems

---

### Special Lexer Constructs

#### Template Literal Remnants (Deprecated/Unfinished)

**Location:** `src/lexer/lex.js`

The lexer contains **mode transition tokens** for template literals:

```javascript
// ENTER_EXPRESSION mode
pattern: /\${{/
push_mode: 'expression'

// EXIT_EXPRESSION mode
pattern: /}}/
pop_mode: true

// Template content matcher
pattern: /[\u0020-\uFFFF\u0009\u000A\u000D]+?(?=\${{)|.../
```

**Status:**
- Lexer supports `${{ ... }}` syntax for entering expression mode
- Parser has **no corresponding rules**
- Feature was started but never completed
- Currently non-functional

**Intended Behavior (Not Implemented):**
```
"Hello ${{ name }}!"
```

This would allow embedded expressions inside string templates.

**Recommendation:**  
Either complete template literal implementation or remove lexer remnants to avoid confusion.

---

## Parser Specification

### Grammar Overview

The parser is implemented using Chevrotain (LL(k) parser generator).

**Location:** `src/parser/parser.js`

### Key Grammar Rules

#### Expression Hierarchy

```
expression
    -> logicalOrExpression

logicalOrExpression
    -> logicalAndExpression (OR logicalAndExpression)*

logicalAndExpression
    -> comparisonExpression (AND comparisonExpression)*

comparisonExpression
    -> additiveExpression (ComparisonOperator additiveExpression)?

additiveExpression
    -> multiplicativeExpression ((Plus | Minus) multiplicativeExpression)*

multiplicativeExpression
    -> powerExpression ((Star | Slash | Percent) powerExpression)*

powerExpression
    -> unaryExpression (Caret unaryExpression)*

unaryExpression
    -> (Plus | Minus | NOT) unaryExpression
    -> atomicExpression

atomicExpression
    -> Literal
    -> Identifier
    -> FunctionCall
    -> ParenthesizedExpression
    -> PropertyAccess
```

#### Property Access Rule

```
propertyAccess
    -> atomicExpression (Dot Identifier)*
```

**Behavior:**
- Both `IdentifierLiteral` and `BracketedIdentifierLiteral` match `Identifier` in grammar
- Dot acts as separator
- Left-associative: `a.b.c` → `((a).b).c`

**AST Structure:**
```javascript
{
  type: 'PropertyAccess',
  object: { type: 'Identifier', value: 'customer' },
  property: { type: 'Identifier', value: 'name' }
}
```

#### Function Call Rule

```
functionCall
    -> FunctionKeyword LParen argumentList? RParen

argumentList
    -> expression (Comma expression)*
```

---

## Evaluation Semantics

### Numeric Operations

All numeric operations use a **decimal math library** for precision.

**Library:** `decimal.js` (or similar)

**Behavior:**
- No IEEE 754 floating-point errors
- Arbitrary precision maintained
- `0.1 + 0.2 === 0.3` (unlike JavaScript)

**Operator Implementations:**  
`src/ops/numeric.js`

### String Operations

**Concatenation:**
```
"hello" + " " + "world"  → "hello world"
```

**String Functions:**  
`src/ops/string.js`

### Date Operations

**Addition:**
```
date + duration  → new date
2023-11-15 + P7D → 2023-11-22
```

**Date Functions:**  
`src/ops/date.js`

### Property Resolution

**Mechanism:**  
`src/property/`

**Algorithm:**
1. Resolve left side (object)
2. Access property by name (string key)
3. Return property value or undefined

**Example:**
```javascript
customer.address.city
```
1. Resolve `customer` → object
2. Access `.address` → nested object
3. Access `.city` → string value

---

## Extension Guidelines

### Adding New Literal Types

1. Define token in `src/lexer/literal.js`:
   ```javascript
   export const NewLiteral = createLiteralToken({
     name: 'NewLiteral',
     pattern: /regex-pattern/,
     categories: [Literal, NewLiteralCategory]
   });
   ```

2. Add category in `src/lexer/token-categories.js` if needed

3. Register in lexer token array

4. Add parser rule if special handling needed

5. Implement evaluation logic in `src/ops/`

6. Add tests

### Adding Template Literals (Future)

To complete the template literal feature:

1. **Define template segment tokens:**
   ```javascript
   TemplateStart    // e.g., `text before ${`
   TemplateMiddle   // e.g., `} text between ${`
   TemplateEnd      // e.g., `} text after`
   ```

2. **Add parser rule:**
   ```
   templateLiteral
       -> TemplateStart expression (TemplateMiddle expression)* TemplateEnd
   ```

3. **Implement evaluation:**
   - Concatenate static segments with evaluated expressions
   - Convert expressions to strings

4. **Update lexer modes:**
   - Keep existing `${{ ... }}` transitions
   - Add proper mode handling

### Maintaining LLM-Friendly Documentation

**Principles for AI-readable docs:**

1. **Structured Headers:** Use consistent Markdown hierarchy
2. **Tables:** Tabular data for token definitions, patterns
3. **Code Blocks:** Always specify language for syntax highlighting
4. **Explicit Lists:** Enumerate rules, constraints, behaviors
5. **Cross-references:** Link related sections
6. **Examples:** Show both syntax and AST/evaluation results
7. **Invariants:** Explicitly state what is guaranteed to remain true
8. **Deprecations:** Clearly mark deprecated features

**Format for Token Definitions (Template):**

```markdown
#### TokenName

**Pattern:**
```regex
/pattern-here/
```

**Rules:**
- Rule 1
- Rule 2

**Examples:**
```
example1  → output1
example2  → output2
```

**Related:**
- Link to parser rule
- Link to evaluation
```

---

## Testing Strategy

### Test Locations

- `tests/lexer/` - Lexer token generation tests
- `tests/parser/` - Parser AST construction tests
- `tests/patterns/` - Pattern-specific test suites
- `src/transform/core/test/` - Function transformation tests

### Critical Test Categories

1. **Identifier semantics:**
   - `<! a !>.<! b !>` vs `<! a.b !>`
   - Mixed standard/bracketed identifiers
   - Property access chains

2. **Numeric precision:**
   - Decimal math correctness
   - No floating-point errors

3. **Date/time operations:**
   - ISO 8601 parsing
   - Duration arithmetic

4. **Function dispatch:**
   - Overload resolution
   - Type checking

---

## Performance Considerations

### Lexer Optimization

- Token patterns compiled once at startup
- Longest match wins (order matters)
- Mode transitions are O(1)

### Parser Optimization

- LL(k) parsing is linear in token count
- No backtracking
- AST construction is eager

### Evaluation Optimization

- Property lookups use native JavaScript object access
- Decimal operations cached where possible
- Function dispatch uses signature map

---

## Maintenance Checklist

When modifying the lexer/parser:

- [ ] Update token definitions in `src/lexer/literal.js`
- [ ] Update categories in `src/lexer/token-categories.js`
- [ ] Update parser rules in `src/parser/parser.js`
- [ ] Update operator implementations in `src/ops/`
- [ ] Update this documentation
- [ ] Add tests for new behavior
- [ ] Update end-user documentation
- [ ] Check for breaking changes

---

## Known Issues and Future Work

### Template Literals

**Status:** Partially implemented in lexer, not functional  
**Action:** Complete or remove

### Regex Literals

**Status:** Not implemented  
**Recommendation:** Do not add without sandboxing (security risk)

### Decimal vs Float Types

**Status:** Single numeric type (decimal-based)  
**Consideration:** May add explicit float type in future for performance-critical operations

---

## Appendix: Complete Token List

See `src/lexer/literal.js` for authoritative definitions.

**Numeric:**
- IntegerLiteral
- FloatLiteral
- BigIntegerLiteral
- HexadecimalLiteral
- OctalLiteral
- BinaryLiteral

**String:**
- DoubleQuotedStringLiteral
- SingleQuotedStringLiteral
- BackTickStringLiteral

**Date/Time:**
- ZonedDateTimeLiteral
- PlainDateTimeLiteral
- PlainDateLiteral
- PlainTimeLiteral
- PlainYearMonthLiteral
- PlainMonthDayLiteral
- DurationLiteral

**Identifier:**
- IdentifierLiteral
- BracketedIdentifierLiteral
- UuidLiteral
- GuidLiteral

**Keywords (from literalKeywords.js):**
- TRUE, true
- FALSE, false
- NULL, null
- UNDEFINED, undefined

---

## Summary

This expression language engine provides:

- Precise numeric computation via decimal math
- Rich temporal literal support
- Flexible identifier escaping for external system integration
- Standard operator precedence
- Extensible function registry
- Clean separation of lexing, parsing, and evaluation phases

The identifier system distinguishes hierarchical property access from literal field names containing special characters, enabling seamless integration with SQL, JSON, and API data sources.

For end-user documentation, see `documentation/end-user/language-guide.md`.
