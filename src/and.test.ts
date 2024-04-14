import { expect, it } from "bun:test";
import { and } from "./and";
import { error } from "./error";
import { number } from "./type";

const gte = (max: number) => {
	return (value: number): asserts value is number => {
		value < max && error(`< ${value}`);
	};
};

const validation = and([number, gte(2)]);

it("should not throw if all validations are valid", () => {
	expect(() => validation(2)).not.toThrow();
});

it("should not throw if some validations are invalid", () => {
	expect(() => validation(1)).toThrow();
	expect(() => validation("1")).toThrow();
});
