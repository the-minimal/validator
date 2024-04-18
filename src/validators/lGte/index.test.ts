import { lGte } from "@validators/lGte";
import { expect, it, test } from "vitest";

const validator = lGte(1);

test(() => {
	expect(() => validator([1])).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator([])).toThrow();
	expect(() => validator("")).toThrow();
});
