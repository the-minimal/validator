import { isObject } from "@validators/isObject";
import { expect, test } from "vitest";

test(() => {
	expect(() => isObject({})).not.toThrow();
	expect(() => isObject(1)).toThrow();
});
