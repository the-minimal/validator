import { expect, it } from "bun:test";
import { number } from "@validators/number/index";

it("should not throw", () => {
	expect(() => number(1)).not.toThrow();
});

it("should throw", () => {
	expect(() => number("1")).toThrow();
});
