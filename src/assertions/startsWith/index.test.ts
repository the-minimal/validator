import { startsWith } from "@assertions/startsWith";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = startsWith("ID: ");

test.prop([fc.integer()])(
	"should not throw if value starts with defined value",
	(v) => {
		expect(() => assertion(`ID: ${v}`)).not.toThrow();
	},
);

test.prop([fc.integer()])(
	"should throw if value does not start with defined value",
	(v) => {
		expect(() => assertion(`${v}`)).toThrow();
	},
);
