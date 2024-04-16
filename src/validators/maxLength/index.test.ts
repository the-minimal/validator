import { maxLength } from "@validators/maxLength";
import { expect, it, test } from "vitest";

const validator = maxLength(1);

test(() => {
	expect(() => validator([])).not.toThrow();
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("")).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator([1, 2])).toThrow();
	expect(() => validator("12")).toThrow();
});
