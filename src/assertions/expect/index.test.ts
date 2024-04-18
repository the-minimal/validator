import { string } from "@assertions/string";
import { fc, test } from "@fast-check/vitest";
import type { Assertion } from "@the-minimal/types";
import { expect } from "vitest";
import { expect as _expect } from "./index";

const assertion: Assertion<string> = _expect(
	string,
	(_, value) => `Expected string, got ${typeof value}`,
);

test.prop([fc.string()])(
	"should not throw if value passes assertion",
	(value) => {
		expect(() => assertion(value)).not.toThrow();
	},
);

test.prop([fc.integer()])("should throw if value fails assertion", (value) => {
	try {
		assertion(value);
	} catch (e: any) {
		expect(e.message).toBe("Expected string, got number");
	}
});
