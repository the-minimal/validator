import { expect, it } from "bun:test";
import { isObject } from "@validators/isObject/index";

it("should not throw", () => {
	expect(() => isObject({})).not.toThrow();
});

it("should throw", () => {
	expect(() => isObject(1)).toThrow();
});
