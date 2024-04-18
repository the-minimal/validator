import { vGte } from "@validators/vGte";
import { expect, it, test } from "vitest";

const validator = vGte(1);

test(() => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(2)).not.toThrow();
	expect(() => validator(0)).toThrow();
});
