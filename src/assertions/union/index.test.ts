import { union } from "@assertions/union/index.js";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

const assertion = union(["one", "two"]);

test.prop([fc.oneof(fc.constant("one"), fc.constant("two"))])(
	"should not throw if value is one of options",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.oneof(fc.constant("three"), fc.constant("four"))])(
	"should throw if value is not one of options",
	(value) => {
		expect(() => assertion(value)).toThrow();
	},
);
