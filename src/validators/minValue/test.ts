import { expect, it } from "bun:test";
import { minValue } from "@validators/minValue/index";

const validator = minValue(1);

it("should not throw", () => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(2)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(0)).toThrow();
});
