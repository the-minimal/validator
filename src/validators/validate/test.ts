import { expect, it } from "vitest";
import { validate } from "./index";

const validator = validate((value) => value === 1, "test");

it("should not throw", () => {
	expect(() => validator(1)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(2)).toThrow();
});
