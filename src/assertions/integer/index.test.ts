import { integer } from "@assertions/integer";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

test.prop([fc.integer()])("should not throw if value is integer", (value) => {
	expect(() => integer(value)).not.toThrow();
});

test.prop([fc.integer({ min: 1, max: 100 }), fc.integer({ min: 1, max: 10 })], {
	verbose: true,
})("should throw if value is not integer", (v1, v2) => {
	expect(() => integer(v1 * (v2 * Math.PI))).toThrow();
});
