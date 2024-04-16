import { notLength } from "@validators/notLength";
import { expect, it } from "vitest";

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
