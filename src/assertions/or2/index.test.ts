import { number } from "@assertions/number/index.js";
import { or2 } from "@assertions/or2/index.js";
import { string } from "@assertions/string/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = or2(number, string);

test.prop([fc.oneof(fc.integer(), fc.string())])(
	"should not throw if one of the assertions passes",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([
	fc.oneof(fc.constant(undefined), fc.constant(null), fc.constant({})),
])("should throw if none of the assertions pass", (value) => {
	expect(() => assertion(value)).toThrow();
});
