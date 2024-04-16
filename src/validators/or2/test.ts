import { number } from "@validators/number";
import { string } from "@validators/string";
import { expect, it } from "vitest";
import { or2 } from "./index";

const validator = or2(number, string);

it("should not throw", () => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator("1")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(true)).toThrow();
	expect(() => validator({})).toThrow();
});
