import { maxValue } from "@validators/maxValue";
import { expect, it } from "vitest";

const validator = maxValue(1);

it("should not throw", () => {
	expect(() => validator(0)).not.toThrow();
	expect(() => validator(1)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(2)).toThrow();
});
