import { expect, it } from "bun:test";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { or2 } from "./index";

const validation = or2(number, string);

it("should not throw if one of validations is valid", () => {
	expect(() => validation(1)).not.toThrow();
	expect(() => validation("1")).not.toThrow();
});

it("should not throw if none of validations is valid", () => {
	expect(() => validation(true)).toThrow();
	expect(() => validation({})).toThrow();
});
