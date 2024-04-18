import { number } from "@assertions/number";
import { expect, test } from "vitest";

test(() => {
	expect(() => number(1)).not.toThrow();
	expect(() => number("1")).toThrow();
});
