import { string } from "@validators/string";
import { expect, test } from "vitest";

test(() => {
	expect(() => string("hello")).not.toThrow();
	expect(() => string(1)).toThrow();
});
