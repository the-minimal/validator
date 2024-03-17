# @the-minimal/validator

Opinionated low-`level | size | overhead` data validation and transformation library.

## Features

- Data validation
- Data transformation
- [Opt-in error handling](./docs/error-handling.md)
- [Opt-in schema modifications](./docs/schema-modifications.md)
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
const vAdult = vPipe([
    vNumber,
    vInt,
    vGte(18)
]);

vAdult(24)              // 24
vAdult(5)               // TypeError: 0 is not a function
```

## Data transformation

- Transformation is any `throw`able `<I, O>(v: I) => O` function
- Transformation can also be a validation since by (JS) design all functions are `throw`able

```js
const tDoubleInt = tPipe([
    tNumber,
    tRound,
    tInt,
    tTimes(2)
]);

tDoubleInt("3")         // 6
tDoubleInt(1.6)         // 4
```

## No async

- "Do I put data fetching inside data validation or do I put it outside and then pass the output inside the data validation?"
- Having more options means more complexity which means higher mental overhead which means worse DX and potentially more bugs
- Supporting async introduces logic duplication (`parse`/`parseAsync`) or we force `await` everything
- In either case it complicates the design, adds size and makes the library slower (async is slower than sync)

### Example

```js
export async function fetchUser(input) {
    vFetchUserInput(input);

    const output = fetch(\* ... *\);

    vFetchUserOutput(output);

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
