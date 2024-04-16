import { expect, it } from "bun:test";
import { integer } from "@validators/integer/index";

it("should not throw", () => {
	expect(() => integer(1)).not.toThrow();
});

it("should throw", () => {
	expect(() => integer(1.1)).toThrow();
});
