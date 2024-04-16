import { maxValue } from "@validators/maxValue";
import { expect, it, test } from "vitest";

const validator = maxValue(1);

test(() => {
	expect(() => validator(0)).not.toThrow();
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(2)).toThrow();
});
