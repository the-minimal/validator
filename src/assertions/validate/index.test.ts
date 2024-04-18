import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";
import { validate } from "./index";

const string = validate((value) => typeof value === "string", "type", "string");

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
