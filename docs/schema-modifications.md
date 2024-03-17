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
export const userCoreSchema = { \* ... *\ };   // this is exported so it can be extended
export const userCore = object(userCoreSchema);

// file_two.ts
import { userCoreSchema } from "./file_one.ts";

const userAuthSchema = {
    ...userCoreSchema,
    \* ... *\
};  // this is not exported so it cannot be extended
const userAuth = object(userAuthSchema);
```
