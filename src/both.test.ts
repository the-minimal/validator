import { it, expect } from "bun:test";
import { error } from "./error";
import { both } from "./both";
import { number } from "./type";

const gte = (max: number) => {
	return function(value: number): asserts value is number {
		value < max && error(`< ${value}`);
	};
};

const validation = both(number, gte(2));

it("should not throw if both validations are valid", () => {
	expect(() => validation(2)).not.toThrow();	
});

it("should not throw if some validations are invalid", () => {
	expect(() => validation(1)).toThrow();	
	expect(() => validation("1")).toThrow();	
});
