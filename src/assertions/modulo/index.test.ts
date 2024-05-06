import { modulo } from "@assertions/modulo/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = modulo(2, 0);

test.prop([fc.integer({ min: 0 })])(
	"should not throw if value is divisible by value",
	(v) => {
		expect(() => assertion(v * 2)).not.toThrow();
	},
);

test.prop([fc.integer({ min: 0 })])(
	"should throw if value is not divisible by value",
	(v) => {
		expect(() => assertion(Math.floor(!(v % 2) ? v + 1 : v))).toThrow();
	},
);
