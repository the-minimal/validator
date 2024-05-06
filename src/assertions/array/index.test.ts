import { array } from "@assertions/array/index.js";
import { number } from "@assertions/number/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = array(number);

test.prop([fc.array(fc.integer())])(
	"should not throw if values do not throw",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.array(fc.string(), { minLength: 1 })])(
	"should throw if any of the values throws",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);

test.prop([fc.integer()])("should throw if not of type array", (value) => {
	expect(() => assertion(value)).toThrow();
});
