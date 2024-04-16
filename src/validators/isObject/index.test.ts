import { isObject } from "@validators/isObject";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => isObject({})).not.toThrow();
	expect(() => isObject(1)).toThrow();
});
