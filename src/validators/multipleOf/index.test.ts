import { multipleOf } from "@validators/multipleOf";
import { expect, it, test } from "vitest";

const validator = multipleOf(2);

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator(1)).toThrow();
});
