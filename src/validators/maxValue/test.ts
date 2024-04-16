import { expect, it } from "bun:test";
import { maxValue } from "@validators/maxValue/index";

const validator = (value: unknown) => maxValue(1);

it("should not throw", () => {
	expect(() => validator(0)).not.toThrow();
	expect(() => validator(1)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(2)).toThrow();
});
