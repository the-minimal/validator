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

// Throws error for email
login({ email: '', password: '' });

// Validates data as { email: string; password: string }
login({ email: 'jane@example.com', password: '12345678' });
```
