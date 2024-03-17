# Schema modifications

- Other libraries let you modify schemas like this:
    - `userBase.merge(userAuth)`
    - `userBase.pick(["name", "email"])`
    - `userBase.omit(["password"])`
- To let you do this they have to make the schema accessible from outside
- This complicates the design, adds size and makes the library slower
- Sometimes those libraries allow you to lock/freeze the schema so it cannot be modified
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
