import { expect, it } from "bun:test";
import { assert } from "./index";

const validation = assert((value) => value === 1, "test");

it("should not throw if predicate is true", () => {
	expect(() => validation(1)).not.toThrow();
});

it("should throw if predicate is false", () => {
	expect(() => validation(2)).toThrow();
});
