import { string } from "@assertions/string";
import { fc, test } from "@fast-check/vitest";
import { assert } from "@utils/assert";
import { expect } from "vitest";

test.prop([fc.string()])(
	"should not throw if value is of type string",
	(value) => {
		expect(() => assert(string, value)).not.toThrow();
	},
);

test.prop([fc.integer()])(
	"should throw if value is not of type string",
	(value) => {
		expect(() => assert(string, value)).toThrow();
	},
);
