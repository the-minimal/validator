import { notValue } from "@validators/notValue";
import { expect, it, test } from "vitest";

const validator = notValue(2);

test(() => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(3)).not.toThrow();
	expect(() => validator(2)).toThrow();
});
