import { length } from "@assertions/length";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = length(2);

test.prop([fc.string({ minLength: 2, maxLength: 2 })])(
	"should not throw if length of value is equal to the provided value",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.string({ minLength: 3 })])(
	"should throw if length of value is not equal to the provided value",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
