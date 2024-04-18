import { string } from "@assertions/string";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { optional } from "./index";

const assertion = optional(string);

test.prop([fc.oneof(fc.string(), fc.constant(undefined))])(
	"should not throw if value is of type string/undefined",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.integer()])(
	"should throw if value is not of type string/undefined",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
