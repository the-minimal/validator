import { value } from "@assertions/value/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = value(2);

test.prop([fc.constant(2)])(
	"should not throw if value is equal to the provided value",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.integer({ min: 3 })])(
	"should throw if value is not equal to the provided value",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
