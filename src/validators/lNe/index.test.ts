import { lNe } from "@validators/lNe";
import { expect, it, test } from "vitest";

const validator = lNe(2);

test(() => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator([1, 2, 3])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator("123")).not.toThrow();
	expect(() => validator([1, 2])).toThrow();
	expect(() => validator("12")).toThrow();
});
