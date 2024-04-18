import { type } from "@assertions/type";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const string = type<string>("string");

test.prop([fc.string()])(
	"should not throw if value is of type string",
	(value) => {
		expect(() => string(value)).not.toThrow();
	},
);

test.prop([fc.integer()])(
	"should throw if value is not of type string",
	(value) => {
		expect(() => string(value)).toThrow();
	},
);
