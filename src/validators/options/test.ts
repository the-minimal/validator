import { options } from "@validators/options";
import { expect, it } from "vitest";

const validator = options(["one", "two"]);

it("should not throw", () => {
	expect(() => validator("one")).not.toThrow();
	expect(() => validator("two")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("three")).toThrow();
});
