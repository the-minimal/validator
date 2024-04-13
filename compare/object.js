import { object, tString, tNumber } from "../src";

const user = object({
	name: tString,
	age: tNumber
});

user({
	name: "",
	age: 0
});
