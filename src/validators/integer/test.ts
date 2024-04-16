import { integer } from "@validators/integer";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => integer(1)).not.toThrow();
});

it("should throw", () => {
	expect(() => integer(1.1)).toThrow();
});
