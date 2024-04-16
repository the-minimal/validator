import { nan } from "@validators/nan";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => nan(Number.NaN)).not.toThrow();
});

it("should throw", () => {
	expect(() => nan(1)).toThrow();
});
