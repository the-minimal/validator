import { object, and, tString, tNumber, minLength, rangeLength, rangeValue } from "./compile.js";

const user = object({
    name: and([tString, minLength(2)]),
    password: and([tString, rangeLength(8, 16)]),
    age: and([tNumber, rangeValue(0, 150)])
});

console.log(user("v"));