import { expect, test } from "vitest";
import { validate } from "./index";

const validator = validate((value) => value === 1, "test");

test(() => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator(2)).toThrow();
});
