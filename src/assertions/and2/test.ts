import { expect, it } from "bun:test";
import { maxValue } from "@assertions/maxValue";
import { number } from "@assertions/number";
import { and2 } from "./index";

const validation = and2(number, maxValue(2));

it("should not throw if both validations are valid", () => {
	expect(() => validation(2)).not.toThrow();
});

it("should not throw if some validations are invalid", () => {
	expect(() => validation(1)).toThrow();
	expect(() => validation("1")).toThrow();
});
