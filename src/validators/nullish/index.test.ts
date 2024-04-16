import { string } from "@validators/string";
import { expect, it, test } from "vitest";
import { nullish } from "./index";

const validator = nullish(string);

test(() => {
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(null)).not.toThrow();
	expect(() => validator(undefined)).not.toThrow();
	expect(() => validator(1)).toThrow();
});
