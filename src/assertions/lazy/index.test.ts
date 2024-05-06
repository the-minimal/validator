import { lazy } from "@assertions/lazy/index.js";
import { object } from "@assertions/object/index.js";
import { optional } from "@assertions/optional/index.js";
import { string } from "@assertions/string/index.js";
import { fc, test } from "@fast-check/vitest";
import type { Assertion } from "@the-minimal/types";
import { expect } from "vitest";

type User = {
	name: string;
	friend?: User;
};

const assertion: Assertion<User> = object({
	name: string,
	friend: optional(lazy(() => assertion)),
});

test.prop([
	fc.record({
		name: fc.string(),
		friend: fc.oneof(
			fc.record({
				name: fc.string(),
			}),
			fc.constant(undefined),
		),
	}),
])("should not throw if value passes assertion", (value) => {
	expect(() => assertion(value)).not.toThrow();
});

test.prop([fc.integer()])("should throw if value throws", (value) => {
	expect(() => assertion(value)).toThrow();
});
