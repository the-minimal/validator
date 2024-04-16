import { expect, it } from "bun:test";
import { boolean } from "@validators/boolean";

it("should not throw", () => {
	expect(() => boolean(true)).not.toThrow();
	expect(() => boolean(false)).not.toThrow();
});

it("should throw", () => {
	expect(() => boolean(1)).toThrow();
});
