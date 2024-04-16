import { minValue } from "@validators/minValue";
import { expect, it, test } from "vitest";

const validator = minValue(1);

test(() => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(2)).not.toThrow();
	expect(() => validator(0)).toThrow();
});
