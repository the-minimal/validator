import { type } from "@validators/type";
import { expect, it } from "vitest";

it("should not throw on valid types", () => {
	expect(() => type("string")("a")).not.toThrow();
});

it("should throw on invalid types", () => {
	expect(() => type("string")({})).toThrow();
});
