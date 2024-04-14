import { expect, it } from "bun:test";
import { string } from "../type";
import { nullable } from "./index";

const validation = nullable(string);

it("should not throw if value is valid", () => {
	expect(() => validation("1")).not.toThrow();
	expect(() => validation(null)).not.toThrow();
});

it("should throw if value is invalid", () => {
	expect(() => validation(1)).toThrow();
});
