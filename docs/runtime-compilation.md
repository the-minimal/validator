## Runtime compilation

- Compilation with `Function()` syntax is not allowed in all environments
- Sacrifices blocking once at the beginning for faster runs afterwards
- This is not optimal for serverless environments and TTI in client apps
- Optional runtime compilation would make the library more complex and potentially more buggy
