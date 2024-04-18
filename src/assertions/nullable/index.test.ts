import { string } from "@assertions/string";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { nullable } from "./index";

const assertion = nullable(string);

test.prop([fc.oneof(fc.string(), fc.constant(null))])(
	"should not throw if value is of type string/null",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.integer()])(
	"should throw if value is not of type string/null",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
