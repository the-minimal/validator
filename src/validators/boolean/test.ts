import { boolean } from "@validators/boolean";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => boolean(true)).not.toThrow();
	expect(() => boolean(false)).not.toThrow();
});

it("should throw", () => {
	expect(() => boolean(1)).toThrow();
});
