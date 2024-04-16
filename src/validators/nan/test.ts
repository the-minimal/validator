import { expect, it } from "bun:test";
import { nan } from "@validators/nan/index";

it("should not throw", () => {
	expect(() => nan(Number.NaN)).not.toThrow();
});

it("should throw", () => {
	expect(() => nan(1)).toThrow();
});
