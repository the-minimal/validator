import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { expect, test } from "vitest";
import { tuple } from "./index";

const assertion = tuple([string, number, boolean]);

test(() => {
	expect(() => assertion(["1", 1, true])).not.toThrow();
	expect(() => assertion(["1", "1", true])).toThrow();
	expect(() => assertion(["1", 1])).toThrow();
	expect(() => assertion(1)).toThrow();
});
