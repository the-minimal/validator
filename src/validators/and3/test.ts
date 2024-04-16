import { expect, it } from "bun:test";
import { maxValue } from "@validators/maxValue";
import { minValue } from "@validators/minValue";
import { number } from "@validators/number";
import { and3 } from "./index";

const validator = and3(number, minValue(0), maxValue(2));

it("should not throw", () => {
	expect(() => validation(2)).not.toThrow();
});

it("should throw", () => {
	expect(() => validation("")).toThrow();
	expect(() => validation(-1)).toThrow();
	expect(() => validation(3)).toThrow();
});
