import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { tuple } from "./index";

const assertion = tuple([string, number, boolean]);

test.prop([fc.tuple(fc.string(), fc.integer(), fc.boolean())])(
	"should not throw if value passes all the assertions",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.tuple(fc.string(), fc.string(), fc.boolean())])(
	"should throw if value does not pass one of the assertions",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);

test.prop([fc.string()])(
	"should throw if value is not of type array",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
