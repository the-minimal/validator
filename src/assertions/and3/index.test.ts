import { and3 } from "@assertions/and3/index.js";
import { maxValue } from "@assertions/maxValue/index.js";
import { minValue } from "@assertions/minValue/index.js";
import { number } from "@assertions/number/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = and3(number, minValue(0), maxValue(2));

test.prop([fc.integer({ min: 0, max: 2 })])(
	"should not throw if value passes all three assertions",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([
	fc.oneof(fc.integer({ max: -1 }), fc.integer({ min: 3 }), fc.string()),
])("should throw if value does not pass all three assertions", (value) => {
	expect(() => assertion(value)).toThrow();
});
