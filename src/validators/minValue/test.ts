import { minValue } from "@validators/minValue";
import { expect, it } from "vitest";

const validator = minValue(1);

it("should not throw", () => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(2)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(0)).toThrow();
});
