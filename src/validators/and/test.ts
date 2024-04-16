import { maxValue } from "@validators/maxValue";
import { number } from "@validators/number";
import { expect, it } from "vitest";
import { and } from "./index";

const validator = and([number, maxValue(2)]);

it("should not throw", () => {
	expect(() => validator(2)).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("")).toThrow();
	expect(() => validator(3)).toThrow();
});
