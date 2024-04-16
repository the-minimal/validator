import { expect, it } from "bun:test";
import { string } from "@validators/string";
import { optional } from "./index";

const validator = optional(string);

it("should not throw", () => {
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(undefined)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(1)).toThrow();
});
