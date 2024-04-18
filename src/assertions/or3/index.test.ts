import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { expect, test } from "vitest";
import { or3 } from "./index";

const assertion = or3(number, string, boolean);

test(() => {
	expect(() => assertion(1)).not.toThrow();
	expect(() => assertion("1")).not.toThrow();
	expect(() => assertion(true)).not.toThrow();
	expect(() => assertion({})).toThrow();
});
