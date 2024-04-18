import { options } from "@assertions/options";
import { expect, test } from "vitest";

const assertion = options(["one", "two"]);

test(() => {
	expect(() => assertion("one")).not.toThrow();
	expect(() => assertion("two")).not.toThrow();
	expect(() => assertion("three")).toThrow();
});
