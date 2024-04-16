import { expect, it } from "bun:test";
import { length } from "@validators/length/index";

const validator = length(1);

it("should not throw", () => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(1)).toThrow();
});
