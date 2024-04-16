import { expect, it } from "bun:test";
import { number } from "@validators/number";
import { string } from "@validators/string";
import { or } from "./index";

const validator = or([number, string]);

it("should not throw", () => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator("1")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(true)).toThrow();
	expect(() => validator({})).toThrow();
});
