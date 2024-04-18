import { string } from "@assertions/string";
import { expect, test } from "vitest";

test(() => {
	expect(() => string("hello")).not.toThrow();
	expect(() => string(1)).toThrow();
});
