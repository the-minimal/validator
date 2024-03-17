# @the-minimal/validator

Opinionated `low-`{`level`|`size`|`overhead`} data validation and transformation library.

## Features

- Data validation
- Data transformation
- [Opt-in error handling](./docs/error-handling.md)
- Opt-in schema modifications
- No high-level primitives
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

## Opt-in schema modifications

- Other libraries let you modify schemas like this:
    - `user_base.merge(user_authenticated)`
    - `user_base.pick(["name", "email"])`
    - `user_base.omit(["password"])`
- To let you do this they have to make the schema accessible from outside
- This complicates the design, adds size and makes the library slower
- Sometimes other libraries allow you to lock/freeze the schema so it cannot be modified
- This can be achieved by simply exporting or not exporting the schema

### Example

```js
// file_one.ts
export const vUserSchema = { \* ... *\ };   // this is exported so it can be extended
export const vUser = vStruct(vUserSchema);

// file_two.ts
import { vUserSchema } from "./file_one.ts";

const vUserAuthSchema = {
    ...vUserSchema,
    \* ... *\
};  // this is not exported so it cannot be extended
const vUserAuth = vStruct(vUserAuthSchema);
```

## No high-level primitives

- High-level primitives are for example `Map`/`Set`/etc.
- Validations should be used when we cannot control the input
    1) When user types something on frontend
    2) When we send data between clients/servers
- In these cases it's impossible to natively send high-level primitives
- If we generate unsafe high-level data we should validate the input instead of the high-level primitive itself

### Example

```js
Map.set(key, user_base(input))
Set.add(user_authenticated(input))
```

## No async

- "Do I put data fetching inside data validation or do I put it outside and then pass the output inside the data validation?"
- Having more options means more complexity which means higher mental overhead which means worse DX and potentially more bugs
- Supporting async introduces logic duplication (`parse`/`parseAsync`) or we force `await` everything
- In either case it complicates the design, adds size and makes the library slower (async is slower than sync)

### Example

```js
export async function fetch_user(input) {
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
