import { minLength } from "@validators/minLength";
import { expect, it } from "vitest";

const validator = minLength(1);

it("should not throw", () => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator([])).toThrow();
	expect(() => validator("")).toThrow();
});
