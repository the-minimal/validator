import { length } from "@validators/length";
import { expect, it } from "vitest";

const validator = length(1);

it("should not throw", () => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(1)).toThrow();
});
