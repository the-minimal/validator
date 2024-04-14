import { expect, it } from "bun:test";
import { optional } from "./optional";
import { string } from "./type";

const validation = optional(string);

it("should not throw if value is valid", () => {
	expect(() => validation("1")).not.toThrow();
	expect(() => validation(undefined)).not.toThrow();
});

it("should throw if value is invalid", () => {
	expect(() => validation(1)).toThrow();
});
