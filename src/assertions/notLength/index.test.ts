import { notLength } from "@assertions/notLength";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = notLength(0);

test.prop([fc.string({ minLength: 1 })])(
	"should not throw if length of value is not equal to the provided value",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.constant("")])(
	"should throw if length of value is equal to the provided value",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
