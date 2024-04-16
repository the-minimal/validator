import { string } from "@validators/string";
import { expect, it, test } from "vitest";
import { optional } from "./index";

const validator = optional(string);

test(() => {
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(undefined)).not.toThrow();
	expect(() => validator(1)).toThrow();
});
