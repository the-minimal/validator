## Async

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
