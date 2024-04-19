import { minValue } from "@assertions/minValue";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = minValue(18);

test.prop([fc.integer({ min: 18 })])(
	"should not throw if value is greater than or equal to the provided value",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.integer({ max: 17 })])(
	"should throw if value is less than the provided value",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
