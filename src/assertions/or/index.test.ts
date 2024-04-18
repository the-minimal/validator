import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { expect, test } from "vitest";
import { or } from "./index";

const assertion = or([number, string]);

test(() => {
	expect(() => assertion(1)).not.toThrow();
	expect(() => assertion("1")).not.toThrow();
	expect(() => assertion(true)).toThrow();
	expect(() => assertion({})).toThrow();
});
