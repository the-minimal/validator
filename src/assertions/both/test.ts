import { expect, it } from "bun:test";
import { assert } from "@assertions/assert";
import { number } from "@assertions/number";
import { both } from "./index";

const gte = (max: number) =>
	assert(
		(value) => (value as number) >= max,
		() => `Not greater than or equal to ${max}`,
	);

const validation = both(number, gte(2));

it("should not throw if both validations are valid", () => {
	expect(() => validation(2)).not.toThrow();
});

it("should not throw if some validations are invalid", () => {
	expect(() => validation(1)).toThrow();
	expect(() => validation("1")).toThrow();
});
