import { number } from "@assertions/number";
import { fc, test } from "@fast-check/vitest";
import { assert } from "@utils";
import { expect } from "vitest";

test.prop([fc.integer()])(
	"should not throw if value is of type number",
	(value) => {
		expect(() => assert(number, value)).not.toThrow();
	},
);

test.prop([fc.string()])(
	"should throw if value is not of type number",
	(value) => {
		expect(() => assert(number, value)).toThrow();
	},
);
