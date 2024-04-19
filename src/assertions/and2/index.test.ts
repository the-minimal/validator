import { maxValue } from "@assertions/maxValue";
import { number } from "@assertions/number";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { and2 } from "./index";

const assertion = and2(number, maxValue(2));

test.prop([fc.integer({ max: 2 })])(
	"should not throw if value passes both assertions",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.oneof(fc.integer({ min: 3 }), fc.string())])(
	"should throw if value does not pass both assertions",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
