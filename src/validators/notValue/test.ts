import { notValue } from "@validators/notValue";
import { expect, it } from "vitest";

const validator = notValue(2);

it("should not throw", () => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(3)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(2)).toThrow();
});
