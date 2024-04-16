import { expect, it } from "bun:test";
import { maxValue } from "@validators/maxValue";
import { number } from "@validators/number";
import { and } from "./index";

const validator = and([number, maxValue(2)]);

it("should not throw", () => {
	expect(() => validation(2)).not.toThrow();
});

it("should throw", () => {
	expect(() => validation("")).toThrow();
	expect(() => validation(3)).toThrow();
});
