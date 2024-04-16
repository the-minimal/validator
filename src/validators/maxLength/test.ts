import { expect, it } from "bun:test";
import { maxLength } from "@validators/maxLength/index";

const validator = maxLength(1);

it("should not throw", () => {
	expect(() => validator([])).not.toThrow();
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("")).not.toThrow();
	expect(() => validator("1")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator([1, 2])).toThrow();
	expect(() => validator("12")).toThrow();
});
