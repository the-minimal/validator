import { lLte } from "@validators/lLte";
import { expect, it, test } from "vitest";

const validator = lLte(1);

test(() => {
	expect(() => validator([])).not.toThrow();
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("")).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator([1, 2])).toThrow();
	expect(() => validator("12")).toThrow();
});
