import { expect, it } from "bun:test";
import { assert } from "../assert";
import { number } from "../type";
import { and } from "./index";

const gte = (max: number) =>
	assert(
		(value) => (value as number) >= max,
		() => `Not greater than or equal to ${max}`,
	);

const validation = and([number, gte(2)]);

it("should not throw if all validations are valid", () => {
	expect(() => validation(2)).not.toThrow();
});

it("should not throw if some validations are invalid", () => {
	expect(() => validation(1)).toThrow();
	expect(() => validation("1")).toThrow();
});
