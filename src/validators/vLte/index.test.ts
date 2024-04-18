import { vLte } from "@validators/vLte";
import { expect, it, test } from "vitest";

const validator = vLte(1);

test(() => {
	expect(() => validator(0)).not.toThrow();
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(2)).toThrow();
});
