import { minLength } from "@assertions/minLength/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = minLength(2);

test.prop([
	fc.oneof(
		fc.string({ minLength: 2 }),
		fc.array(fc.anything(), { minLength: 2 }),
	),
])(
	"should not throw if value is greater than or equal to the provided value",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([
	fc.oneof(
		fc.string({ maxLength: 1 }),
		fc.array(fc.anything(), { maxLength: 1 }),
	),
])("should throw if value is less than the provided value", (value) => {
	expect(() => assertion(value)).toThrow();
});
