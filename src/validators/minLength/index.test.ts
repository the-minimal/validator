import { minLength } from "@validators/minLength";
import { expect, it, test } from "vitest";

const validator = minLength(1);

test(() => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator([])).toThrow();
	expect(() => validator("")).toThrow();
});
