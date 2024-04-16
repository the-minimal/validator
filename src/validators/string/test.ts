import { expect, it } from "bun:test";
import { string } from "@validators/string/index";

it("should not throw", () => {
	expect(() => string("hello")).not.toThrow();
});

it("should throw", () => {
	expect(() => string(1)).toThrow();
});
