import { expect, test } from "vitest";
import { validate } from "./index";

const assertion = validate((value) => value === 1, "test");

test(() => {
	expect(() => assertion(1)).not.toThrow();
	expect(() => assertion(2)).toThrow();
});
