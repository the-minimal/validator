import { includes } from "@assertions/includes/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = includes("hello");

test.prop([fc.integer(), fc.integer()])(
	"should not throw if value includes defined value",
	(v1, v2) => {
		expect(() => assertion(`${v1} hello ${v2}`)).not.toThrow();
	},
);

test.prop([fc.integer(), fc.integer()])(
	"should throw if value does not start with defined value",
	(v1, v2) => {
		expect(() => assertion(`${v1}${v2}`)).toThrow();
	},
);
