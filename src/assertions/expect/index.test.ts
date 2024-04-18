import { string } from "@assertions/string";
import { expect, test } from "vitest";
import { expect as _expect } from "./index";

const assertion = _expect(string, (e) => `Error: ${e.message}`);

test(() => {
	expect(() => assertion(1)).toThrow();
	expect(() => assertion("1")).not.toThrow();
});
