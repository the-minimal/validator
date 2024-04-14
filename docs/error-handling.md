# Error handling

- By default there is no nice error stack
- By default there is no nice error message
- The primary reason is unnecessary use of resources
- The secondary reason is unnecessary verbosity
- It's completely up to you to define your errors

### How to throw custom errors?

Obviously custom errors are not a pure evil and sometimes they're even useful or desirable.

We define custom errors by wrapping our validations/transformations with `expect`.

Internally `expect` throws the error value (not the `Error` class with the value as `message`).

Error value can be a primitive or a function (which takes the input value and an error as arguments) that returns a primitive.
