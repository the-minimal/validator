import { expect, it } from "bun:test";
import { number, string } from "../type";
import { or } from "./index";

const validation = or([number, string]);

it("should not throw if one of validations is valid", () => {
	expect(() => validation(1)).not.toThrow();
	expect(() => validation("1")).not.toThrow();
});

it("should not throw if none of validations is valid", () => {
	expect(() => validation(true)).toThrow();
	expect(() => validation({})).toThrow();
});
