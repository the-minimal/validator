import { expect, it } from "bun:test";
import { either } from "./either";
import { number, string } from "./type";

const validation = either(number, string);

it("should not throw if one of validations is valid", () => {
	expect(() => validation(1)).not.toThrow();
	expect(() => validation("1")).not.toThrow();
});

it("should not throw if none of validations is valid", () => {
	expect(() => validation(true)).toThrow();
	expect(() => validation({})).toThrow();
});
