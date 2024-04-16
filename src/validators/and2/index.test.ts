import { maxValue } from "@validators/maxValue";
import { number } from "@validators/number";
import { expect, it, test } from "vitest";
import { and2 } from "./index";

const validator = and2(number, maxValue(2));

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator("")).toThrow();
	expect(() => validator(3)).toThrow();
});
