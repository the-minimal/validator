import { maxValue } from "@assertions/maxValue";
import { minValue } from "@assertions/minValue";
import { number } from "@assertions/number";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { and3 } from "./index";

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
