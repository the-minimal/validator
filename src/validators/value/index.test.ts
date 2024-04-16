import { value } from "@validators/value";
import { expect, it, test } from "vitest";

const validator = value(2);

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator(1)).toThrow();
	expect(() => validator(3)).toThrow();
});
