# High-level primitives

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
