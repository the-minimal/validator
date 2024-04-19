import { maxLength } from "@assertions/maxLength";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = maxLength(2);

test.prop([
	fc.oneof(
		fc.string({ maxLength: 2 }),
		fc.array(fc.anything(), { maxLength: 2 }),
	),
])(
	"should not throw if value is less than or equal to the provided value",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([
	fc.oneof(
		fc.string({ minLength: 3 }),
		fc.array(fc.anything(), { minLength: 3 }),
	),
])("should throw if value is greater than the provided value", (value) => {
	expect(() => assertion(value)).toThrow();
});
