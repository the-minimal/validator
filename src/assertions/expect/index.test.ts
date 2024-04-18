import { string } from "@assertions/string";
import { fc, test } from "@fast-check/vitest";
import type { Assertion } from "@the-minimal/types";
import { expect } from "vitest";
import { expect as _expect } from "./index";

const assertionValidator: Assertion<string> = _expect(
	string,
	(_, value) => `Expected string, got ${typeof value}`,
);

const assertionError: Assertion<unknown> = _expect(
	() => {
		throw new Error("testing");
	},
	(_, value) => `Expected string, got ${typeof value}`,
);

const assertionUnknown: Assertion<unknown> = _expect(
	() => {
		throw "testing";
	},
	(_, value) => `Expected string, got ${typeof value}`,
);

test.prop([fc.string()])(
	"should not throw if value passes assertion",
	(value) => {
		expect(() => assertionValidator(value)).not.toThrow();
	},
);

test.prop([fc.integer()])("should throw if value fails assertion", (value) => {
	try {
		assertionValidator(value);
	} catch (e: any) {
		expect(e.reason).toBe("@the-minimal/validator:type");
		expect(e.message).toBe("Expected string, got number");
	}

	try {
		assertionError(value);
	} catch (e: any) {
		expect(e.reason).toBe("unknown:Error");
		expect(e.message).toBe("Expected string, got number");
	}

	try {
		assertionUnknown(value);
	} catch (e: any) {
		expect(e.reason).toBe("unknown:unknown");
		expect(e.message).toBe("Expected string, got number");
	}
});
