import { expect, it } from "bun:test";
import { options } from "@validators/options/index";

const validator = options(["one", "two"]);

it("should not throw", () => {
	expect(() => validator("one")).not.toThrow();
	expect(() => validator("two")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("three")).toThrow();
});
