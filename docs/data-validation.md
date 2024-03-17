## Data validation

- Validation is any predicate wrapped in `assert`

### Example

```js
const adult = and([
    tNumber,
    nInt,
    gte(18)
]);

adult(24);  // undefined
adult(5);   // TypeError: 0 is not a function
```
