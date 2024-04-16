import { maxValue } from "@validators/maxValue";
import { minValue } from "@validators/minValue";
import { number } from "@validators/number";
import { expect, it } from "vitest";
import { and3 } from "./index";

const validator = and3(number, minValue(0), maxValue(2));

it("should not throw", () => {
	expect(() => validator(2)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("")).toThrow();
	expect(() => validator(-1)).toThrow();
	expect(() => validator(3)).toThrow();
});
