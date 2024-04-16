import { isArray } from "@validators/isArray";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => isArray([])).not.toThrow();
});

it("should throw", () => {
	expect(() => isArray(1)).toThrow();
});
