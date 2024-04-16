import { length } from "@validators/length";
import { expect, it, test } from "vitest";

const validator = length(1);

test(() => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(1)).toThrow();
});
