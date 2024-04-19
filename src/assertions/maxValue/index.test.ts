import { maxValue } from "@assertions/maxValue";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = maxValue(17);

test.prop([fc.integer({ max: 17 })])(
	"should not throw if value is less than or equal to the provided value",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.integer({ min: 18 })])(
	"should throw if value is greater than the provided value",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
