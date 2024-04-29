![Validator image](https://github.com/the-minimal/validator/blob/main/docs/the-minimal-validator.jpg?raw=true)

Joe was in search of a simple data validation library that he could learn in 15 minutes.

He envisioned a tool with minimal blocking time and low CPU/memory overhead.

He hoped for something he could easily extend to meet his specific requirements.

> Are you like Joe? If so, then `Validator` might just be what you're looking for!

## Stubborn opinions

`Validator` is pretty stubborn and doesn't want to be a Jack of all trades.

As a result it has many opinions that might not sit well with some folks.

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
  await validate(filename);
  ```

  Do this instead:

  ```ts
  // definition
  const validate = and([
    string,
    minLength(5),
  ]);

  // endpoint
  validate(filename);

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

## Focused features

`Validator` is a watchful eye that plagues your editor with errors if you feed it data you haven't agreed upon, but otherwise, it stays quiet as a mouse.

- Everything is an `Assertion`
- `Assertion`s are simple functions
- `Assertion`s are composed together
- `Assertion`s are type-safe
- `Assertion`s are tree-shakeable

## Incredible numbers

`Validator` is an obsessed overachiever who wants to be the smallest and fastest one on the track.

- 40 `Assertion`s
- 835 bytes bundle
- ~ 5x faster data validation than `Zod`
- ~ 200x less memory consumption than `Zod`
- ~ 50x faster type-checking than `Zod`
- 1 runtime dependency
  - [@the-minimal/error](https://github.com/the-minimal/error) (135 bytes)
- 100% test coverage

## Simple examples

<details>
  <summary><b>How do I validate types?</b></summary>

  ```ts
  string("Hello, World!");
  number(420);
  boolean(true);
  ```

</details>

<details>
  <summary><b>How do I validate values?</b></summary>

  ```ts
  value(26);
  notValue(0);
  minValue(18);
  maxValue(100);
  rangeValue(18, 100);
  ```

</details>

<details>
  <summary><b>How do I validate lenghts?</b></summary>

  ```ts
  length(5);
  notLength(0);
  minLength(8);
  maxLength(16);
  rangeLength(8, 16);
  ```

</details>

<details open>
  <summary><b>How do I combine validations?</b></summary>

  ```ts
  const register = object({
    email: and([string, rangeLength(5, 35), email]),
    password: and([string, rangeLength(8, 16)]),
    role: union(["ADMIN", "USER"]),
    friends: array(string)
  });

  register("Oh no this is gonna throw");

  register({
    email: "yamiteru@icloud.com",
    password: "Test123456",
    role: "ADMIN",
    friends: ["Joe"]
  });
  ```

</details>

## Great journey

Are you really Joe?

Do you dare to let this demon command you?

If so, repeat the spell below and good luck on your journey!

```bash
yarn add @the-minimal/validator
```

## Notes

- All reported sizes are for minified and gzipped code
- Reproducible and highly detailed benchmarks are on the way
- `Validation` and `Assertion` are the same things
