![Validator image](https://github.com/the-minimal/validator/blob/main/docs/the-minimal-validator.jpg?raw=true)

# @the-minimal/validator

Minimalist TypeScript data validation library with great focus on size and performance.

## Install

```bash
yarn add @the-minimal/validator
```

## Highlights

- Synchronous JSON validations
- No compilation or code evaluation
- Fully type safe with type inference
- Fully tree-shakeable 1.1 KB bundle
- Minimal runtime and type overhead
- Only 2 minimal in-house dependencies
  - [@the-minimal/types](https://github.com/the-minimal/types)
  - [@the-minimal/error](https://github.com/the-minimal/error)

## Philosophy

Validator doesn't support data transformations or coercions.

We assume that data is already transformed by the sender.

We assume that you control both the sender and receiver.

We assume that Validator is used only for validating JSON.

This allows us to make the library much smaller and faster.

> If you want to transform data during or right after validation then you should make sure that the sender sends already transformed data instead

## Example

```ts
// 380 bytes
import { type Infer, object, and2, string, email, lGte } from "@the-minimal/validator";

// Creates login schema with email and password
const login = object({
  email: and2(string, email),
  password: and2(string, lGte(8)),
});

// Infer TypeScript type of login schema
type Login = Infer<typeof login>; // { email: string; password: string }

// Throws error for email
login({ email: '', password: '' });

// Validates data as { email: string; password: string }
login({ email: 'jane@example.com', password: '12345678' });
```

## API

### General

| Function                                         | Description                                               |
|:-------------------------------------------------|:----------------------------------------------------------|
| [`validate`](./src/validators/validate/index.ts) | Checks if predicate is `false`                            |
| [`expect`](./src/validators/expect/index.ts)     | Sets error message in case validator throws               |
| [`type`](./src/validators/type/index.ts)         | Checks if value type matches provided type                |
| [`lazy`](./src/validators/lazy/index.ts)         | Runs validator lazily                                     |
| [`and`](./src/validators/and/index.ts)           | Checks if value passes all validators                     |
| [`and2`](./src/validators/and2/index.ts)         | Checks if value passes 2 validators                       |
| [`and3`](./src/validators/and3/index.ts)         | Checks if value passes 3 validators                       |
| [`or`](./src/validators/or/index.ts)             | Checks if value passes one of N validators                |
| [`or2`](./src/validators/or2/index.ts)           | Checks if value passes one of 2 validators                |
| [`or3`](./src/validators/or3/index.ts)           | Checks if value passes one of 3 validators                |
| [`array`](./src/validators/array/index.ts)       | Checks all values against validator                       |
| [`object`](./src/validators/object/index.ts)     | Checks value against object schema                        |
| [`tuple`](./src/validators/tuple/index.ts)       | Checks value against tuple schema                         |
| [`options`](./src/validators/options/index.ts)   | Checks if value is one of provided values                 |

### Types

| Function                                             | Description                                                       |
|:-----------------------------------------------------|:------------------------------------------------------------------|
| [`number`](./src/validators/number/index.ts)         | Checks if value type is `number`                                  |
| [`string`](./src/validators/string/index.ts)         | Checks if value type is `string`                                  |
| [`boolean`](./src/validators/boolean/index.ts)       | Checks if value type is `boolean`                                 |

### String

| Function                                             | Description                                                       |
|:-----------------------------------------------------|:------------------------------------------------------------------|
| [`startsWith`](./src/validators/startsWith/index.ts) | Checks if string starts with value                                |
| [`endsWith`](./src/validators/endsWith/index.ts)     | Checks if string ends with value                                  |
| [`regex`](./src/validators/regex/index.ts)           | Checks if string matches regex                                    |
| [`email`](./src/validators/email/index.ts)           | Checks if string matches email regex                              |

### Number

| Function                                             | Description                                                       |
|:-----------------------------------------------------|:------------------------------------------------------------------|
| [`multipleOf`](./src/validators/multipleOf/index.ts) | Checks if value is multiple of another value                      |
| [`integer`](./src/validators/integer/index.ts)       | Checks if number is integer                                       |

### List

| Function                                             | Description                                                       |
|:-----------------------------------------------------|:------------------------------------------------------------------|
| [`includes`](./src/validators/includes/index.ts)     | Checks if string/array includes value                             |

### Length comparison

| Function                                 | Description                                                       |
|:-----------------------------------------|:------------------------------------------------------------------|
| [`lEq`](./src/validators/lEq/index.ts)   | Checks if string/array `length` is value                          |
| [`lNe`](./src/validators/lNe/index.ts)   | Checks if string/array `length` is not value                      |
| [`lGte`](./src/validators/lGte/index.ts) | Checks if string/array `length` is greater than or equal to value |
| [`lLte`](./src/validators/lLte/index.ts) | Checks if string/array `length` is less than or equal to value    |

### Value comparison

| Function                                 | Description                                               |
|:-----------------------------------------|:----------------------------------------------------------|
| [`vEq`](./src/validators/vEq/index.ts)   | Checks if value is equal to another value                 |
| [`vNe`](./src/validators/vNe/index.ts)   | Checks if value is not another value                      |
| [`vGte`](./src/validators/vGte/index.ts) | Checks if value is greater than or equal to another value |
| [`vLte`](./src/validators/vLte/index.ts) | Checks if value is less than or equal to another value    |

### Maybe

| Function                                             | Description                                                       |
|:-----------------------------------------------------|:------------------------------------------------------------------|
| [`nullable`](./src/validators/nullable/index.ts)     | Checks if value is `Nullable<T>`                                  |
| [`nullish`](./src/validators/nullish/index.ts)       | Checks if value is `Nullish<T>`                                   |
| [`optional`](./src/validators/optional/index.ts)     | Checks if value is `Optional<T>`                                  |

### Other

| Function                                             | Description                                                       |
|:-----------------------------------------------------|:------------------------------------------------------------------|
| [`isArray`](./src/validators/isArray/index.ts)       | Checks if value is `Array`                                        |
| [`isObject`](./src/validators/isObject/index.ts)     | Checks if value is `Object`                                       |

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
    validate(
      (fileName) => File.exists(fileName), // Promise<boolean>
      "fileExists"
    )
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

## Roadmap to v1

- Property based tests
- Integration/complex tests
- Use `asserts` instead of faking return
- Fix and test `Infer` utility type
- Write (js)docs for every exported function and type
