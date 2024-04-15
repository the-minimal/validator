![Validator image](https://github.com/the-minimal/validator/blob/main/docs/the-minimal-validator.jpg?raw=true)

# @the-minimal/validator

Minimalist TypeScript data validation library with great focus on size and performance.

## Highlights

- Fully type safe
- Fully tree-shakable
- 1.2 KB bundle
- Minimal overhead
- Validation only
- No dependencies
- No compilation

## Concept

Compared to most other data validation libraries @the-minimal/validator doesn't support data transformations or coercions.

It has one focus and that is data validation.

The reasoning is that in most cases we control both the sender and receiver so validations such as `count: number().or(coerce.number()).transform((v) => v * 2)` are simply not necessary since we can make sure we send only one type (`number`) to the receiver.

In other words we rely on the third party to normalize data before it gets send.

Once the data is validated it can then be manually mapped into a different shape if needed.

However, this is generally frowned upon because if we immediately map input data into a different shape then the sended could have just send the data in the desired shape instead.

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

## Validators

TODO: automatically generate
