import { number } from "@assertions/number";
import { fc, test } from "@fast-check/vitest";
import { parse } from "@utils/parse";
import { expect } from "vitest";

test.prop([fc.integer()])(
	"should return input if assertion does not throw",
	(value) => {
		expect(parse(number, value)).toBe(value);
	},
);

test.prop([fc.string()])("should throw if assertion throws", (value) => {
	expect(() => parse(number, value)).toThrow();
});
