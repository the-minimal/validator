import { isArray } from "@validators/isArray";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => isArray([])).not.toThrow();
	expect(() => isArray(1)).toThrow();
});