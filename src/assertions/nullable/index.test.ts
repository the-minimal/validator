import { string } from "@assertions/string";
import { expect, test } from "vitest";
import { nullable } from "./index";

const assertion = nullable(string);

test(() => {
	expect(() => assertion("1")).not.toThrow();
	expect(() => assertion(null)).not.toThrow();
	expect(() => assertion(1)).toThrow();
});
