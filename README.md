# Validator: A Minimal Data Validation Library

Validator is a highly optimized data validation library designed for simplicity, performance, and ease of use. It aims to meet the needs of developers who require minimal blocking time and low CPU/memory overhead.

## Features

- Data validation only
-	Small learning curve
-	Minimal runtime overhead
-	Tiny bundle size
-	Tree-shakeable
-	Static type inference
-	Composable and modular
-	100% Test Coverage

## Opinionated

<details open>
  <summary><b>No data transformation</b></summary>

  Focusing solely on data validation allows us to greatly optimize this library.

  I advocate for tools that excel in a single task.

  I believe that, in most cases, we should validate data before performing any transformation.

  This approach simplifies and maintains a clear mental model of what data validation is and how it should be implemented in our applications.

</details>

<details>
  <summary><b>No asynchronous validations</b></summary>

  JSON data types do not require asynchronous validation.

  Avoid introducing side effects within validations.

  Don't do this:

  ```ts
  // definition
  const validate = and([
    string,
    minLength(5),
    async (v) => {
      if(!(await File.exists(v))) {
        throw Error("File does not exist");
      }
    }
  ]);

  // endpoint
  await assert(validate, filename);
  ```

  Do this instead:

  ```ts
  // definition
  const validate = and([
    string,
    minLength(5),
  ]);

  // endpoint
  assert(validate, filename);

  if(!(await File.exists(filename))) {
    throw Error("File does not exist");
  }
  ```

</details>

<details>
  <summary><b>No compilation or eval</b></summary>

  Compilation with `Function`/`eval` syntax is not allowed in all environments and, more importantly, it would mean maintaining two different runtime implementations, which I do not want.

  It also sacrifices initial blocking for faster subsequent runs, which might be useful in some scenarios. However, this library is primarily designed for serverless runtimes, where this would result in drastically slower performance.

</details>

<details>
  <summary><b>No methods like <code>extend</code>/<code>omit</code></b></summary>

  In order to allow such methods, we would have to make the schema accessible from the outside.

  This would change the design from using individual callable validations to using objects with properties, one of which is the validation.

  Additionally, this would make it possible, for example, to extend any object, even if we don't want users to have such capability.

  To address this issue, we would need to introduce some form of object schema freezing.

  All of this complicates the API, slows down the library, and increases the bundle size.

  You can make an object extendable by exporting its schema separately and then spreading it inside another schema.

</details>

<details>
  <summary><b>No validations like <code>map</code>/<code>set</code></b></summary>

  The main focus of this library is the data validation of JSON (primarily from fetch requests).

  JSON does not support these data types, so it makes no sense to include them in this library.

  If you want to use this library with these higher-level primitives, then I recommend validating the input of these primitives.

</details>

<details>
  <summary><b>No validations like <code>any</code>/<code>unknown</code></b></summary>

  You should always define concrete types.

  Otherwise, what's the point of using TypeScript together with this library?

</details>


<details>
  <summary><b>No validations like <code>null</code>/<code>undefined</code></b></summary>

  Checking strictly for `null` or `undefined` alone makes no sense.

  You always want to know if something can be _something_ or _nothing_.

  Therefore, you should always use `nullable`, `optional`, or `nullish` instead.

</details>

## Performance Metrics

Validator is engineered to deliver exceptional performance:

- **Bundle Size**: 835 bytes (minified and gzipped)
-	**Speed**: Approximately 5x faster than Zod for data validation
-	**Memory Usage**: Approximately 200x less memory consumption than Zod
-	**Type-checking**: Approximately 50x faster than Zod
-	**Dependencies**: Only one in-house dependency
-	**Test Coverage**: 100%

## Usage Examples

### Validating Types

```ts
assert(string, "Hello, World!");
assert(number, 420);
assert(boolean, true);
```

### Validating Values

```ts
value(26);
notValue(0);
minValue(18);
maxValue(100);
rangeValue(18, 100);
```

### Validating Lengths

```ts
length(5);
notLength(0);
minLength(8);
maxLength(16);
rangeLength(8, 16);
```

### Combining Validations

```ts
const register = object({
  email: and([string, rangeLength(5, 35), email]),
  password: and([string, rangeLength(8, 16)]),
  role: union(["ADMIN", "USER"]),
  friends: array(string)
});

assert(
  register,
  {
    email: "yamiteru@icloud.com",
    password: "Test123456",
    role: "ADMIN",
    friends: ["Joe"]
  }
);
```

## Installation

```bash
yarn add @the-minimal/validator
```
