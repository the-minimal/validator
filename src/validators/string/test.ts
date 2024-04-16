import { string } from "@validators/string";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => string("hello")).not.toThrow();
});

it("should throw", () => {
	expect(() => string(1)).toThrow();
});
