import { boolean } from "@assertions/boolean/index.js";
import { fc, test } from "@fast-check/vitest";
import { assert } from "@utils/assert/index.js";
import { expect } from "vitest";

test.prop([fc.boolean()])(
	"should not throw if value is of type boolean",
	(value) => {
		expect(() => assert(boolean, value)).not.toThrow();
	},
);

test.prop([fc.string()])(
	"should throw if value is not of type boolean",
	(value) => {
		expect(() => assert(boolean, value)).toThrow();
	},
);
