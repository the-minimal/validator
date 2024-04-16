import { expect, it } from "bun:test";
import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { string } from "@validators/string";
import { or3 } from "./index";

const validator = or3(number, string, boolean);

it("should not throw", () => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(true)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator({})).toThrow();
});
