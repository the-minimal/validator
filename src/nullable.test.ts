import { expect, it } from "bun:test";
import { nullable } from "./nullable";
import { string } from "./type";

const validation = nullable(string);

it("should not throw if value is valid", () => {
	expect(() => validation("1")).not.toThrow();
	expect(() => validation(null)).not.toThrow();
});

it("should throw if value is invalid", () => {
	expect(() => validation(1)).toThrow();
});
