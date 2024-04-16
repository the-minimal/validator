import { maxValue } from "@validators/maxValue";
import { minValue } from "@validators/minValue";
import { number } from "@validators/number";
import { expect, it, test } from "vitest";
import { and3 } from "./index";

const validator = and3(number, minValue(0), maxValue(2));

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator("")).toThrow();
	expect(() => validator(-1)).toThrow();
	expect(() => validator(3)).toThrow();
});
