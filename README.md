# @the-minimal/validator

Opinionated low-`level | size | overhead` data validation library.

## Features

- Data validation
- [Opt-in error handling](./docs/error-handling.md)
- [Opt-in schema modifications](./docs/schema-modifications.md)
- No data transformation
- [No high-level primitives](./docs/high-level-primitives.md)
- No async
- No runtime compilation
- Very small
- Very fast

---

## Data validation

- Validation is any `throw`able `<I>(v: I) => I` function
- Validation always returns input value on true case
- Validation always throws on false case

### Example

```js
const adult = and([
    number,
    int,
    gte(18)
]);

adult(24);  // 24
adult(5);   // TypeError: 0 is not a function
```

## No async

- "Do I put data fetching inside data validation or do I put it outside and then pass the output inside the data validation?"
- Having more options means more complexity which means higher mental overhead which means worse DX and potentially more bugs
- Supporting async introduces logic duplication (`parse`/`parseAsync`) or we force `await` everything
- In either case it complicates the design, adds size and makes the library slower (async is slower than sync)

### Example

```js
export async function fetchUser(input) {
    fetchUserInput(input);

    const output = fetch(\* ... *\);

    fetchUserOutput(output);

    return output;
}
```

## No runtime compilation

- Compilation with `Function()` syntax is not allowed in all environments
- Sacrifices blocking once at the beginning for faster runs afterwards
- This is not optimal for serverless environments and TTI in client apps
- Optional runtime compilation would make the library more complex and potentially more buggy

## Very small

- The whole library is xx kB
- No classes so download only what you need
- See more in [size comparison](./size-comparison.md)

## Very fast

- No classes so JS parses only what you need
- Transformations are simple JS functions (no need to wrap them in a special function)
- Validations return simple JS functions (no special object with schema attributes)
- No unnecessary try/catch and error stack/message building
- See more in [speed comparison](./speed-comparison.md)
