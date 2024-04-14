import { expect, it } from "bun:test";
import { assert } from "./index";

const validation = assert<number>(
	(value) => value === 1,
	() => "Not equal to 1",
);

it("should not throw if predicate is true", () => {
	expect(() => validation(1)).not.toThrow();
});

it("should throw if predicate is false", () => {
	expect(() => validation(2)).toThrow();
});
