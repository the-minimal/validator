import { optional } from "@assertions/optional/index.js";
import { string } from "@assertions/string/index.js";
import { fc, test } from "@fast-check/vitest";
import { assert } from "@utils/assert/index.js";
import { expect } from "vitest";

const assertion = optional(string);

test.prop([fc.oneof(fc.string(), fc.constant(undefined))])(
	"should not throw if value is of type string/undefined",
	(value) => {
		expect(() => assert(assertion, value)).not.toThrow();
	},
);

test.prop([fc.integer()])(
	"should throw if value is not of type string/undefined",
	(value) => {
		expect(() => assert(assertion, value)).toThrow();
	},
);
