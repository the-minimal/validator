import { regex } from "@assertions/regex";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = regex(/[0-9]/);

test.prop([fc.integer()])(
	"should not throw if value matches pattern",
	(value) => {
		expect(() => assertion(`${value}`)).not.toThrow();
	},
);

test.prop([fc.constant("hello")])(
	"should throw if value does not matche pattern",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
