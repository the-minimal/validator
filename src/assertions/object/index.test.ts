import { boolean } from "@assertions/boolean/index.js";
import { number } from "@assertions/number/index.js";
import { object } from "@assertions/object/index.js";
import { string } from "@assertions/string/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = object({
	name: string,
	age: number,
	admin: boolean,
});

test.prop([
	fc.record({
		name: fc.string(),
		age: fc.integer(),
		admin: fc.boolean(),
	}),
])("should not throw if value matches object schema", (value) => {
	expect(() => assertion(value)).not.toThrow();
});

test.prop([
	fc.record({
		name: fc.string(),
		age: fc.integer(),
	}),
])("should throw if value is missing a (non-optional) key", (value) => {
	expect(() => assertion(value)).toThrow();
});

test.prop([fc.oneof(fc.array(fc.anything()), fc.constant(null))])(
	"should throw if value is not an object",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
