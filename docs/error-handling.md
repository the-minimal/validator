# Error handling

- By default all validations throw `TypeError: 0 is not a function`
- By default there is no nice error stack
- By default there is no nice error message
- The primary reason is unnecessary use of resources
- The secondary reason is unnecessary verbosity
- It's completely up to you to define your errors

### Why `TypeError: 0 is not a function`?

When it comes to validations with no default error message we just want to cause a `throw` with no value.

Most data validation libraries do something like this:

```js
class CustomError extends Error {}

const string = (v) => {
    if(typeof v === "string") return v;
    throw CustomError(`${v} should be a string`);
};
```

However this increases the size (+ we also don't need the message).

We could instead just throw nothing like `throw null`.

But we can go even smaller!

Behold the smallest throw `0()`!

### How to throw custom errors?

Obviously custom errors are not a pure evil and sometimes they're even useful or desirable.

We define custom errors by wrapping our validations/transformations with `Expect`.

Internally `Expect` throws the error value (not the `Error` class with the value as `message`).

Error value can be a primitive or a function (which takes the input value and an error as arguments) that returns a primitive.

### What if I really need `Error`?

There are some cases where you don't control the environment inside which you validate data and you don't want to manually wrap everything in try/catch.

In such cases you can use `parse` which does the wrapping for you and throws `ValidationError` for you.

Just keep in mind that this makes your bundle slightly bigger and your validations slightly slower so use it only when absolutely necessary.

### What if I need to check if validation is valid?

If you don't care about the returned value and only want to get `true` if validation is valid or `false` if it's invalid and it threw an error then you can use `is`.

### Example

```js
const user = Expect(
    vStruct({
        age: Expect(
            vPipe([
                Expect(vNumber, "should be number"),
                Expect(vInt, "should be integer"),
                Expect(vGte(18), "should be >= 18")
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
