import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { or3 } from "./index";

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
