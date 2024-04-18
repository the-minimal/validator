import { number } from "@validators/number";
import { string } from "@validators/string";
import { expect, test } from "vitest";
import { or2 } from "./index";

const validator = or2(number, string);

test(() => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(true)).toThrow();
	expect(() => validator({})).toThrow();
});
