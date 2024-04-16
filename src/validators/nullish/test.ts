import { expect, it } from "bun:test";
import { string } from "@validators/string";
import { nullish } from "./index";

const validator = nullish(string);

it("should not throw", () => {
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(null)).not.toThrow();
	expect(() => validator(undefined)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(1)).toThrow();
});
