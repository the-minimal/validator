import { endsWith } from "@assertions/endsWith";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = endsWith("?");

test.prop([fc.string()])(
	"should not throw if value ends with defined value",
	(v) => {
		expect(() => assertion(`${v}?`)).not.toThrow();
	},
);

test.prop([fc.string()])(
	"should throw if value does not end with defined value",
	(v) => {
		expect(() => assertion(`${v}!`)).toThrow();
	},
);
