import { number } from "@assertions/number";
import { fc, test } from "@fast-check/vitest";
import { assert } from "@utils/assert";
import { expect } from "vitest";

test.prop([fc.integer()])(
	"should not throw if assertion does not throw",
	(value) => {
		expect(() => assert(number, value)).not.toThrow();
	},
);

test.prop([fc.string()])("should throw if assertion throws", (value) => {
	expect(() => assert(number, value)).toThrow();
});
