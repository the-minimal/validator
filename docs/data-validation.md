## Data validation

- Validation is any predicate wrapped in `assert`

### Example

```js
const adult = and([
    number,
    int,
    gte(18)
]);

adult(24);  // undefined
adult(5);   // { message: "< 18" }
```
