import { expect, it } from "bun:test";
import { string } from "@validators/string";
import { nullable } from "./index";

const validator = nullable(string);

it("should not throw", () => {
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(null)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(1)).toThrow();
});
