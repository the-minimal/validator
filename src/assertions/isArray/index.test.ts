import { isArray } from "@assertions/isArray";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

test.prop([fc.array(fc.integer())])(
	"should not throw if value is of type array",
	(value) => {
		expect(() => isArray(value)).not.toThrow();
	},
);

test.prop([fc.string()])(
	"should throw if value is not of type array",
	(value) => {
		expect(() => isArray(value)).toThrow();
	},
);
