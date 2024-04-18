import { vNe } from "@validators/vNe";
import { expect, it, test } from "vitest";

const validator = vNe(2);

test(() => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(3)).not.toThrow();
	expect(() => validator(2)).toThrow();
});
