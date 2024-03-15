# @the-minimal/validator

Opinionated low-{level|size|overhead} data validation and transformation library.

## Features

- Data validation
- Data transformation
- Opt-in error handling
- Opt-in schema modifications
- No high-level primitives
- No async
- No runtime compilation
- Very small
- Very fast

## Data validation

- Validation is any `throw`able `<I>(v: I) => I` function
- Validation always returns input value on true case
- Validation always throws on false case

### Example

```js
const is_adult = validation([
    is_number,
    is_int,
    gte(18)
]);

is_adult(24)            // 24
is_adult(5)             // TypeError: 0 is not a function
```

## Data transformation

- Transformation is any `throw`able `<I, O>(v: I) => O` function
- Transformation can also be a validation since by (JS) design all functions are `throw`able

```js
const to_double_int = transformation([
    to_number,
    to_rounded,
    to_int,
    to_multiplied(2)
]);

to_double_int("3")      // 6
to_double_int(1.6)      // 4
```

## Opt-in error handling

- By default any validation throws `TypeError: 0 is not a function`
- By default there is no nice error stack
- By default there is no nice error message
- The primary reason is unnecessary use of resources
- The secondary reason is unnecessary verbosity
- It's completely up to the developer to define their errors

### Example

```js
const user = expect(
    object_validate({
        age: expect(
            validation([
                expect(is_number, "should be number"),
                expect(is_int, "should be integer"),
                expect(gte(18), "should be >= 18")
            ])
            (v, e) => `age ${e} [${v}]`
        )
    }),
    (_, e) => `User.${e}`
);

user({ age: "12.5" })   // User.age should be number [12.5]
user({ age: 12.5 })     // User.age should be integer [12.5]
user({ age: 12 })       // User.age should be >= 18 [12.5]
user({ age: 26 })       // { age: 26 }
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
export const user_base_schema = { \* ... *\ };
export const user_base = object_validate(user_base_schema);  // this is exported so it can be extended

// file_two.ts
import { user_base_schema } from "./file_one.ts";

const user_authenticated_schema = {
    ...user_base_schema,
    \* ... *\
};
const user_authenticated = object_validate(user_authenticated_schema);   // this is not exported so it cannot be extended
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
    validate_fetch_user_input(input);

    const output = fetch(\* ... *\);

    validate_fetch_user_output(output);

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
