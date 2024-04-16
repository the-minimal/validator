import { number } from "@validators/number";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => number(1)).not.toThrow();
});

it("should throw", () => {
	expect(() => number("1")).toThrow();
});
