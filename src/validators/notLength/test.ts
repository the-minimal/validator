import { expect, it } from "bun:test";
import { notLength } from "@validators/notLength/index";

const validator = notLength(2);

it("should not throw", () => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator([1, 2, 3])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator("123")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator([1, 2])).toThrow();
	expect(() => validator("12")).toThrow();
});
