import { number } from "@assertions/number/index.js";
import { fc, test } from "@fast-check/vitest";
import { is } from "@utils/is/index.js";
import { expect } from "vitest";

test.prop([fc.integer()])(
	"should return true if assertion does not throw",
	(value) => {
		expect(is(number, value)).toBe(true);
	},
);

test.prop([fc.string()])("should return false if assertion throws", (value) => {
	expect(is(number, value)).toBe(false);
});
