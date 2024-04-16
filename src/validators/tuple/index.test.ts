import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { string } from "@validators/string";
import { expect, it, test } from "vitest";
import { tuple } from "./index";

const validator = tuple([string, number, boolean]);

test(() => {
	expect(() => validator(["1", 1, true])).not.toThrow();
	expect(() => validator(["1", "1", true])).toThrow();
	expect(() => validator(1)).toThrow();
});
