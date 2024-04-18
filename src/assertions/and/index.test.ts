import { number } from "@assertions/number";
import { validate } from "@assertions/validate";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { and } from "./index";

const lte = (value: number) =>
	validate<number>((v) => (v as any) <= value, "lte");
const gte = (value: number) =>
	validate<number>((v) => (v as any) >= value, "gte");

const assertion = and([number, gte(0), lte(2)]);

test.prop([fc.integer({ min: 0, max: 2 })])(
	"should not throw if value passes all assertions",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([
	fc.oneof(fc.integer({ max: -1 }), fc.integer({ min: 3 }), fc.string()),
])("should throw if value does not pass all assertions", (value) => {
	expect(() => assertion(value)).toThrow();
});
