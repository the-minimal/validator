import { string } from "@assertions/string";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { nullish } from "./index";

const assertion = nullish(string);

test.prop([fc.oneof(fc.string(), fc.constant(null), fc.constant(undefined))])(
	"should not throw if value is of type string/null/undefined",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.integer()])(
	"should throw if value is not of type string/null/undefined",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
