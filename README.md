# @the-minimal/validator

Opinionated low-`level | size | overhead` data validation library.

## Features

- [Data validation](./docs/data-validation.md)
- [Opt-in error handling](./docs/error-handling.md)
- [Opt-in schema modifications](./docs/schema-modifications.md)
- [No data transformation](./docs/data-transformation.md)
- [No high-level primitives](./docs/high-level-primitives.md)
- [No async](./docs/async.md)
- [No runtime compilation](./docs/runtime-compilation.md)
- Very small
- Very fast

## Example

```js
const user = object({
	name: string,
	email: and([
		string,
		match(emailRegex)
	]),
	password: and([
		string,
		length(and([
			gte(8),
			lte(16)
		])),
		match(passwordRegex)
	]),
	friends: lazy(() => array(user)),
	role: enum(["USER", "ADMIN"]),
	age: and([
		number,
		int,
		gte(0),
		lte(150)
	])
});
```

---

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
