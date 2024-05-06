import { isObject } from "@assertions/isObject/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

test.prop([fc.object()])(
	"should not throw if value is of type object",
	(value) => {
		expect(() => isObject(value)).not.toThrow();
	},
);

test.prop([fc.constant(null)])("should throw if value is null", (value) => {
	expect(() => isObject(value)).toThrow();
});

test.prop([fc.integer()])(
	"should throw if value is not of type object",
	(value) => {
		expect(() => isObject(value)).toThrow();
	},
);
