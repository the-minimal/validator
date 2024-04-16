import { expect, it } from "bun:test";
import { minLength } from "@validators/minLength/index";

const validator = minLength(1);

it("should not throw", () => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator([])).toThrow();
	expect(() => validator("")).toThrow();
});
