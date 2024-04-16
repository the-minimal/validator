import { expect, it } from "bun:test";
import { isArray } from "@validators/isArray/index";

it("should not throw", () => {
	expect(() => isArray([])).not.toThrow();
});

it("should throw", () => {
	expect(() => isArray(1)).toThrow();
});
