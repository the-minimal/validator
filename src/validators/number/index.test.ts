import { number } from "@validators/number";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => number(1)).not.toThrow();
	expect(() => number("1")).toThrow();
});
