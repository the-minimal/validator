import { boolean, number, object, string } from "../src";

export const user = object({
	name: string,
	age: number,
	admin: boolean,
});
