![Validator image](https://github.com/the-minimal/validator/blob/main/docs/the-minimal-validator.jpg?raw=true)

# @the-minimal/validator

Minimalist TypeScript data validation library with great focus on size and performance.

## Install

```bash
yarn add @the-minimal/validator
```

## Highlights

- Synchronous JSON-oriented validations
- No compilation or code evaluation
- Fully type safe with type inference
- Fully tree-shakeable < 1 KB bundle
- Minimal runtime and type-checking overhead
- Fully tested with 100% coverage
- Zero runtime dependencies

## Philosophy

Validator doesn't support data transformations or coercions.

We assume that data is already transformed by the sender.

We assume that you control both the sender and receiver.

We assume that Validator is used only for validating JSON.

This allows us to make the library much smaller and faster.

> If you want to transform data during or right after validation then you should make sure that the sender sends already transformed data instead

## Example

```ts
// 292 bytes
import { object, string, and2, rangeLength, email } from "@the-minimal/validator";
import type { Infer } from "@the-minimal/validator";

const login = object({                          // (v: unknown) => asserts v is {
  email: and2(string, email),                   //   email: string & Email,
  password: and2(string, rangeLength(8, 16)),   //   password: string & RangeLength<8, 16>
});                                             // }

login({ email: '', password: '' });             // Error: 49711

login({                                         // {
  email: 'jane@example.com',                    //   email: string & Email
  password: '12345678'                          //   password: string & RangeLength<8, 16>
});                                             // }
```

## FAQ

<details>
  <summary><b>How do I validate <code>map</code>/<code>set</code>/<code>date</code>/etc.?</b></summary>

  The main focus of this library is data validation of JSON.

  JSON doesn't support these data types, so it makes no sense to include them in this library.

</details>

<details>
  <summary><b>How do I <code>extend</code>/<code>omit</code>/<code>pick</code> objects?</b></summary>

  In order to allow such functions we'd have to make the schema accessible from the outside.

  This would change the design from using individual callable assertions to using objects with properties where one of those properties is the assertion.

  Additionally, this would make it possible to for example extend any object even if we don't want users to extend such an object.

  To fix this issue we would have to introduce some form of object schema freezing on top of that.

  All of that complicates the API, makes the library slower and inflates the bundle size.

  You can make object extendable by exporting its schema separately and then spreading it inside another schema.

</details>

<details>
  <summary><b>Why is there no <code>null</code>/<code>undefined</code>?</b></summary>

  Strictly checking only for `null` or `undefined` makes no sense.

  You always want to know if something can be `something` **OR** `nothing`.

  So you should always use `nullable`/`optional`/`nullish` instead.

</details>

<details>
  <summary><b>Why is there no <code>any</code>/<code>unknown</code>?</b></summary>

  You should always define your types otherwise what's the point of using TypeScript and this library?

</details>

<details>
  <summary><b>How do I run validations in <code>async</code>?</b></summary>

  None of the JSON data types need to be validated asynchronously.

  Validating side effects inside the validations is not a good idea and should be done after the validation is done.

  Don't do this:

  ```ts
  // definition
  const validate = and([
    string,
    async (v) => {
      if(!(await File.exists(v))) {
        error("fileExists", v);
      }
    }
  ]);

  // endpoint
  await validate(body);
  ```

  Do this instead:

  ```ts
  // definition
  const validate = string;

  // endpoint
  validate(body);

  if(!(await File.exists(body))) {
    throw Error("File does not exist");
  }
  ```

</details>
