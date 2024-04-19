import { notValue } from "@assertions/notValue";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = notValue(2);

test.prop([fc.integer({ min: 3 })])(
	"should not throw if value is not equal to the provided value",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.constant(2)])(
	"should throw if value is equal to the provided value",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
