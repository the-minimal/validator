import { string } from "@assertions/string";
import { expect, test } from "vitest";
import { nullish } from "./index";

const assertion = nullish(string);

test(() => {
	expect(() => assertion("1")).not.toThrow();
	expect(() => assertion(null)).not.toThrow();
	expect(() => assertion(undefined)).not.toThrow();
	expect(() => assertion(1)).toThrow();
});
