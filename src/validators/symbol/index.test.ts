import { symbol } from "@validators/symbol";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => symbol(Symbol())).not.toThrow();
	expect(() => symbol("hello")).toThrow();
});
