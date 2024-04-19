import { rangeValue } from "@assertions/rangeValue";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = rangeValue(0, 150);

test.prop([fc.integer({ min: 0, max: 150 })])(
	"should not throw if value is in the range of min and max",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.integer({ max: -1 }), fc.integer({ min: 151 })])(
	"should not throw if value is not in the range of min and max",
	(v1, v2) => {
		expect(() => assertion(v1)).toThrow();
		expect(() => assertion(v2)).toThrow();
	},
);
