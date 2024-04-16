import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { string } from "@validators/string";
import { expect, it, test } from "vitest";
import { or3 } from "./index";

const validator = or3(number, string, boolean);

test(() => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(true)).not.toThrow();
	expect(() => validator({})).toThrow();
});
