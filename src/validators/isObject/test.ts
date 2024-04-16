import { isObject } from "@validators/isObject";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => isObject({})).not.toThrow();
});

it("should throw", () => {
	expect(() => isObject(1)).toThrow();
});
