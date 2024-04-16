import { expect, it } from "bun:test";
import { symbol } from "@validators/symbol/index";

it("should not throw", () => {
	expect(() => symbol(Symbol())).not.toThrow();
});

it("should throw", () => {
	expect(() => symbol("hello")).toThrow();
});
