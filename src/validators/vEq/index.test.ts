import { vEq } from "@validators/vEq";
import { expect, it, test } from "vitest";

const validator = vEq(2);

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator(1)).toThrow();
	expect(() => validator(3)).toThrow();
});
