import { maxValue } from "@validators/maxValue";
import { number } from "@validators/number";
import { expect, it, test } from "vitest";
import { and } from "./index";

const validator = and([number, maxValue(2)]);

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator("")).toThrow();
	expect(() => validator(3)).toThrow();
});
