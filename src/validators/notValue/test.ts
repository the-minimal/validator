import { expect, it } from "bun:test";
import { notValue } from "@validators/notValue/index";

const validator = notValue(2);

it("should not throw", () => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(3)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(2)).toThrow();
});
