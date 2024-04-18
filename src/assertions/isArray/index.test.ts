import { isArray } from "@assertions/isArray";
import { expect, test } from "vitest";

test(() => {
	expect(() => isArray([])).not.toThrow();
	expect(() => isArray(1)).toThrow();
});
