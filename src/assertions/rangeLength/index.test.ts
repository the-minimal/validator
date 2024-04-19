import { rangeLength } from "@assertions/rangeLength";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = rangeLength(8, 16);

test.prop([fc.string({ minLength: 8, maxLength: 16 })])(
	"should not throw if length of value is in the range of min and max",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.string({ maxLength: 7 }), fc.string({ minLength: 17 })])(
	"should not throw if length of value is not in the range of min and max",
	(v1, v2) => {
		expect(() => assertion(v1)).toThrow();
		expect(() => assertion(v2)).toThrow();
	},
);
