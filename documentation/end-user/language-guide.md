# Language Guide for End Users

Welcome to the expression language guide. This document will help you write expressions to compute values, filter data, and perform calculations.

## Table of Contents

- [Introduction](#introduction)
- [Basic Expressions](#basic-expressions)
- [Identifiers](#identifiers)
- [Literal Values](#literal-values)
- [Operators](#operators)
- [Functions](#functions)
- [Common Patterns](#common-patterns)

---

## Introduction

This expression language allows you to:
- Perform calculations with numbers, dates, and strings
- Access properties from objects and data
- Use built-in functions for common operations
- Combine values with operators

Expressions are evaluated from left to right, with standard operator precedence (multiplication before addition, etc.).

---

## Basic Expressions

Simple arithmetic:
```
5 + 3
10 * 2
100 / 4
```

Using properties:
```
price * quantity
customer.name
order.total
```

Combining operations:
```
(price * quantity) * (1 - discount)
firstName + " " + lastName
```

---

## Identifiers

Identifiers let you reference data fields, object properties, and variables.

### Standard Identifiers

Standard identifiers follow these rules:
- Start with a letter, underscore, or dollar sign
- Can contain letters, numbers, underscores, and dollar signs
- Cannot contain spaces or special characters

Examples:
```
name
firstName
total_amount
$price
customer_id
```

### Bracketed Identifiers

When you need to reference fields with special characters (spaces, dashes, symbols, etc.), use **bracketed identifiers** with the syntax `<! ... !>`:

```
<! first-name !>
<! Total Amount !>
<! [dbo].[customers].[email] !>
```

Bracketed identifiers can contain:
- Spaces
- Dashes and special symbols
- SQL-style identifiers from databases
- Unicode characters
- Dots (when they're part of the field name itself)

**Important:** The content inside `<! ... !>` cannot start or end with a space.

### Dotted Property Access

Use dots to access nested properties in objects:

```
customer.name
order.items.total
user.address.zipcode
```

You can mix standard and bracketed identifiers:
```
customer.<! first-name !>
<! sales order !>.total
```

### Critical Distinction: Hierarchy vs Literal

These two forms are **different**:

#### Example A: Property Navigation (Hierarchical)
```
<! customer !>.<! name !>
```
This means: "Get the `customer` object, then access its `name` property."

Same as:
```
customer.name
```

#### Example B: Single Field with a Dot in Its Name
```
<! customer.name !>
```
This means: "Get the field whose actual name is `customer.name`" (a single field that happens to contain a dot in the name).

**Use Case:** Some external systems (like SQL databases) create field names with embedded dots. Use the second form to reference these literal names.

---

## Literal Values

### Numbers

Integers:
```
42
-17
0
```

Floating-point numbers:
```
3.14159
-0.5
2.718
```

Different number formats:
```
0xFF        # Hexadecimal
0o77        # Octal
0b1010      # Binary
123n        # BigInteger
```

### Strings

Use single quotes, double quotes, or backticks:
```
"Hello, world!"
'It\'s a beautiful day'
`Template string`
```

### Booleans

```
true
false
TRUE
FALSE
```

### Null and Undefined

```
null
NULL
undefined
UNDEFINED
```

### Date and Time Literals

ISO 8601 format date-time values:

**Full date-time with timezone:**
```
2023-11-15T14:30:00Z
2023-11-15T09:30:00-05:00
```

**Date-time without timezone:**
```
2023-11-15T14:30:00
```

**Date only:**
```
2023-11-15
```

**Time only:**
```
14:30:00
14:30:00.123
```

**Year and month:**
```
2023-11
```

**Month and day (for recurring dates):**
```
--11-15
```

**Duration:**
```
PT2H30M        # 2 hours 30 minutes
P1Y6M          # 1 year 6 months
P7D            # 7 days
```

### Identifiers as Literals

Use backticks for special identifier patterns:
```
<! order-id !>
<! [dbo].[products] !>
```

---

## Operators

### Arithmetic Operators

```
+    Addition
-    Subtraction
*    Multiplication
/    Division
%    Modulus (remainder)
^    Power/Exponentiation
```

Examples:
```
10 + 5           # 15
20 - 8           # 12
3 * 4            # 12
15 / 3           # 5
17 % 5           # 2
2 ^ 8            # 256
```

### Comparison Operators

```
==   Equal to
!=   Not equal to
<    Less than
<=   Less than or equal to
>    Greater than
>=   Greater than or equal to
```

Examples:
```
age >= 18
price < 100
status == "active"
```

### Logical Operators

```
AND   or  &&    Logical AND
OR    or  ||    Logical OR
NOT   or  !     Logical NOT
```

Examples:
```
age >= 18 AND status == "active"
price < 100 OR discount > 0
NOT expired
```

### String Operators

```
+     Concatenation
```

Example:
```
firstName + " " + lastName
```

---

## Functions

Functions perform operations on values. Call them using parentheses:

```
FUNCTION_NAME(argument1, argument2, ...)
```

### Common String Functions

```
UPPER(text)              # Convert to uppercase
LOWER(text)              # Convert to lowercase
TRIM(text)               # Remove leading/trailing whitespace
LENGTH(text)             # Get string length
SUBSTRING(text, start, length)  # Extract substring
```

Examples:
```
UPPER("hello")                    # "HELLO"
SUBSTRING("Hello World", 0, 5)    # "Hello"
```

### Common Numeric Functions

```
ABS(number)              # Absolute value
ROUND(number, digits)    # Round to digits
FLOOR(number)            # Round down
CEIL(number)             # Round up
MAX(num1, num2, ...)     # Maximum value
MIN(num1, num2, ...)     # Minimum value
```

Examples:
```
ABS(-42)                 # 42
ROUND(3.14159, 2)        # 3.14
MAX(10, 20, 15)          # 20
```

### Common Date Functions

```
NOW()                    # Current date/time
TODAY()                  # Current date
YEAR(date)               # Extract year
MONTH(date)              # Extract month
DAY(date)                # Extract day
```

Examples:
```
YEAR(orderDate)
TODAY() + P30D            # 30 days from today
```

### Aggregate Functions

When working with collections:
```
SUM(values)              # Sum of all values
AVG(values)              # Average
COUNT(values)            # Count of items
```

---

## Common Patterns

### Calculations with Discounts

```
price * quantity * (1 - discount)
```

### Conditional Logic

```
age >= 18 ? "Adult" : "Minor"
```

### Full Name from Parts

```
firstName + " " + lastName
```

### Date Calculations

```
TODAY() + P30D           # 30 days from today
orderDate + P7D          # Order date plus 7 days
```

### Working with Nested Data

```
order.customer.email
order.items.total
user.address.city
```

### Filtering with Conditions

```
status == "active" AND balance > 0
category == "premium" OR purchaseCount >= 10
```

### Escaping Special Field Names

When working with external data sources (databases, APIs):
```
<! [dbo].[customers].[first-name] !>
```

Or for hierarchical access with special characters:
```
<! sales-order !>.<! line-items !>
```

---

## Error Messages and Debugging

### Common Issues

**"Unexpected token"**  
Check for:
- Missing quotes around strings
- Unmatched parentheses or brackets
- Typos in function names

**"Undefined property"**  
The field you're trying to access doesn't exist. Check:
- Spelling of the identifier
- Whether you need bracketed identifiers for special characters
- Whether the object actually has that property

**"Type mismatch"**  
You're trying to perform an operation on incompatible types (like adding a string to a number). Check:
- Data types match the operation
- Use appropriate conversion functions if needed

---

## Summary

- Use **standard identifiers** for simple field names
- Use **bracketed identifiers** `<! ... !>` for fields with special characters
- Use **dots** for hierarchical property access
- Remember: `<! a !>.<! b !>` (hierarchy) is different from `<! a.b !>` (literal field name)
- Combine operators and functions to build powerful expressions
- Follow proper syntax for dates, strings, and numbers

For more technical details, see the developer documentation.
