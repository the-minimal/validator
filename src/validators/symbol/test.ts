import { symbol } from "@validators/symbol";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => symbol(Symbol())).not.toThrow();
});

it("should throw", () => {
	expect(() => symbol("hello")).toThrow();
});
