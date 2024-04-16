import { multipleOf } from "@validators/multipleOf";
import { expect, it } from "vitest";

const validator = multipleOf(2);

it("should not throw", () => {
	expect(() => validator(2)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(1)).toThrow();
});
