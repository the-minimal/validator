import { string } from "@validators/string";
import { expect, it, test } from "vitest";
import { nullable } from "./index";

const validator = nullable(string);

test(() => {
	expect(() => validator("1")).not.toThrow();
	expect(() => validator(null)).not.toThrow();
	expect(() => validator(1)).toThrow();
});
