![Validator image](https://github.com/the-minimal/validator/blob/main/docs/the-minimal-validator.jpg?raw=true)

# @the-minimal/validator

Minimalist TypeScript data validation library with great focus on size and performance.

## Install

```bash
yarn add @the-minimal/validator
```

## Highlights

- Basic synchronous validations
- No compilation or code evaluation
- Fully type safe with type inference
- Fully tree-shakeable 1.2 KB bundle
- Minimal runtime and type overhead
- Only 2 minimal in-house dependencies
  - [@the-minimal/types](https://github.com/the-minimal/types)
  - [@the-minimal/error](https://github.com/the-minimal/error)

## Philosophy

Validator doesn't support data transformations or coercions.

We assume that data is already transformed by the sender.

We assume that you control both the sender and receiver.

This allows us to make the library much smaller and faster.

> If you want to transform data during or right after validation then you should make sure that the sender sends already transformed data instead

## Example

```ts
import { object, and2, string, email, minLength } from "@the-minimal/validator"; // 380 bytes

// Creates login schema with email and password
const login = object({
  email: and2(string, email),
  password: and2(string, minLength(8)),
});

// Infer TypeScript type of login schema
type Login = Infer<typeof login>; // { email: string; password: string }

// Throws error for email
login({ email: '', password: '' });

// Validates data as { email: string; password: string }
login({ email: 'jane@example.com', password: '12345678' });
```

## API

| Function                                             | Description                                                       |
|------------------------------------------------------|-------------------------------------------------------------------|
| [`and`](./src/validators/and/index.ts)               | Checks if value passes all validators                             |
| [`and2`](./src/validators/and2/index.ts)             | Checks if value passes 2 validators                               |
| [`and3`](./src/validators/and3/index.ts)             | Checks if value passes 3 validators                               |
| [`any`](./src/validators/any/index.ts)               | Never throws, returns `Validator<any>`                            |
| [`array`](./src/validators/array/index.ts)           | Checks all values against validator                               |
| [`bigint`](./src/validators/bigint/index.ts)         | Checks if value type is `bigint`                                  |
| [`boolean`](./src/validators/boolean/index.ts)       | Checks if value type is `boolean`                                 |
| [`date`](./src/validators/date/index.ts)             | Checks if instance is `Date`                                      |
| [`email`](./src/validators/email/index.ts)           | Checks if string matches email regex                              |
| [`endsWith`](./src/validators/endsWith/index.ts)     | Checks if string ends with value                                  |
| [`expect`](./src/validators/expect/index.ts)         | Sets error message in case validator throws                       |
| [`includes`](./src/validators/includes/index.ts)     | Checks if string/array includes value                             |
| [`integer`](./src/validators/integer/index.ts)       | Checks if number is integer                                       |
| [`isArray`](./src/validators/isArray/index.ts)       | Checks if value is `Array`                                        |
| [`isObject`](./src/validators/isObject/index.ts)     | Checks if value is `Object`                                       |
| [`lazy`](./src/validators/lazy/index.ts)             | Runs validator lazily                                             |
| [`length`](./src/validators/length/index.ts)         | Checks if string/array `length` is value                          |
| [`maxLength`](./src/validators/maxLength/index.ts)   | Checks if string/array `length` is less than or equal to value    |
| [`maxValue`](./src/validators/maxValue/index.ts)     | Checks if value is less than or equal to another value            |
| [`minLength`](./src/validators/minLength/index.ts)   | Checks if string/array `length` is greater than or equal to value |
| [`minValue`](./src/validators/minValue/index.ts)     | Checks if value is greater than or equal to another value         |
| [`multipleOf`](./src/validators/multipleOf/index.ts) | Checks if value is multiple of another value                      |
| [`nan`](./src/validators/nan/index.ts)               | Checks if value is `NaN`                                          |
| [`notLength`](./src/validators/notLength/index.ts)   | Checks if string/array `length` is not value                      |
| [`notValue`](./src/validators/notValue/index.ts)     | Checks if value is not another value                              |
| [`nullable`](./src/validators/nullable/index.ts)     | Checks if value is `Nullable<T>`                                  |
| [`nullish`](./src/validators/nullish/index.ts)       | Checks if value is `Nullish<T>`                                   |
| [`number`](./src/validators/number/index.ts)         | Checks if value type is `number`                                  |
| [`object`](./src/validators/object/index.ts)         | Checks value against object schema                                |
| [`optional`](./src/validators/optional/index.ts)     | Checks if value is `Optional<T>`                                  |
| [`options`](./src/validators/options/index.ts)       | Checks if value is one of provided values                         |
| [`or`](./src/validators/or/index.ts)                 | Checks if value passes one of N validators                        |
| [`or2`](./src/validators/or2/index.ts)               | Checks if value passes one of 2 validators                        |
| [`or3`](./src/validators/or3/index.ts)               | Checks if value passes one of 3 validators                        |
| [`regex`](./src/validators/regex/index.ts)           | Checks if string matches regex                                    |
| [`startsWith`](./src/validators/startsWith/index.ts) | Checks if string starts with value                                |
| [`string`](./src/validators/string/index.ts)         | Checks if value type is `string`                                  |
| [`symbol`](./src/validators/symbol/index.ts)         | Checks if value type is `symbol`                                  |
| [`tuple`](./src/validators/tuple/index.ts)           | Checks value against tuple schema                                 |
| [`type`](./src/validators/type/index.ts)             | Checks if value type is matches provided type                     |
| [`unknown`](./src/validators/unknown/index.ts)       | Never throws, returns `Validator<unknown>`                        |
| [`validate`](./src/validators/validate/index.ts)     | Checks if predicate is `false`                                    |
| [`value`](./src/validators/value/index.ts)           | Checks if value is equal to another value                         |

## Roadmap to v1

- Property based tests
- Integration/complex tests
- Use `asserts` instead of faking return
- Fix and test `Infer` utility type
- Write (js)docs for every exported function and type
