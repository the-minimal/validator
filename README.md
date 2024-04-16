![Validator image](https://github.com/the-minimal/validator/blob/main/docs/the-minimal-validator.jpg?raw=true)

# @the-minimal/validator

Minimalist TypeScript data validation library with great focus on size and performance.

## Install

```bash
yarn add @the-minimal/validator
```

## Highlights

- Fully type safe with static type inference
- 1.3 KB bundle and fully tree-shakeable
- Minimal runtime and type overhead
- Validation only with no compilation
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
import { object, and2, string, email, minLength } from "@the-minimal/validator"; // 350 bytes

// Creates login schema with email and password
const login = object({
  email: and2(string, email),
  password: and2(string, minLength(8)),
});

// Throws error for `email`
login({ email: '', password: '' });

// Asserts data as { email: string; password: string }
login({ email: 'jane@example.com', password: '12345678' });
```
