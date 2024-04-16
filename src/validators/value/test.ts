import { value } from "@validators/value";
import { expect, it } from "vitest";

const validator = value(2);

it("should not throw", () => {
	expect(() => validator(2)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(1)).toThrow();
	expect(() => validator(3)).toThrow();
});
