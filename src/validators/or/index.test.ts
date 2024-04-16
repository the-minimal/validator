import { number } from "@validators/number";
import { string } from "@validators/string";
import { expect, it, test } from "vitest";
import { or } from "./index";

const validator = or([number, string]);

test(() => {
	expect(() => validator(1)).not.toThrow();
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(true)).toThrow();
	expect(() => validator({})).toThrow();
});
