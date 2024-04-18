import { string } from "@assertions/string";
import { expect, test } from "vitest";
import { optional } from "./index";

const assertion = optional(string);

test(() => {
	expect(() => assertion("1")).not.toThrow();
	expect(() => assertion(undefined)).not.toThrow();
	expect(() => assertion(1)).toThrow();
});
