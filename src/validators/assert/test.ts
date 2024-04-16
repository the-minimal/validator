import { expect, it } from "bun:test";
import { assert } from "./index";

const validator = assert((value) => value === 1, "test");

it("should not throw", () => {
	expect(() => validation(1)).not.toThrow();
});

it("should throw", () => {
	expect(() => validation(2)).toThrow();
});
