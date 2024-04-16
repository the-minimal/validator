import { string } from "@validators/string";
import { expect, it, test } from "vitest";
import { expect as _expect } from "./index";

const validator = _expect(string, (e) => `Error: ${e.message}`);

test(() => {
	expect(() => validator(1)).toThrow();
	expect(() => validator("1")).not.toThrow();
});
