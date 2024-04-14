import { expect, it } from "bun:test";
import { both } from "./both";
import { error } from "./error";
import { number } from "./type";

const gte = (max: number) => {
	return (value: number): asserts value is number => {
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
