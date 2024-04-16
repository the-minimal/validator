import { Validation } from "@the-minimal/types";
import { type } from "@validators/type";
import { expect, expectTypeOf, it } from "vitest";

it("should not throw", () => {
	expect(() => type("string")("a")).not.toThrow();
});

it("should throw", () => {
	expect(() => type("string")({})).toThrow();
});
