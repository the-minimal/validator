import { boolean } from "@assertions/boolean/index.js";
import { number } from "@assertions/number/index.js";
import { or3 } from "@assertions/or3/index.js";
import { string } from "@assertions/string/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = or3(number, string, boolean);

test.prop([fc.oneof(fc.integer(), fc.string(), fc.boolean())])(
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
