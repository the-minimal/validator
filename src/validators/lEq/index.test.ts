import { lEq } from "@validators/lEq";
import { expect, it, test } from "vitest";

const validator = lEq(1);

test(() => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(1)).toThrow();
});
