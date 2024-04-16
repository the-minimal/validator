import { expect, it } from "bun:test";
import type { Assertion } from "@the-minimal/types";
import { lazy } from "@validators/lazy";
import { object } from "@validators/object";
import { optional } from "@validators/optional";
import { string } from "@validators/string";

type User = {
	name: string;
	friend?: User;
};

const validator: Assertion<User> = object({
	name: string,
	friend: optional(lazy(() => validator)),
});

it("should not throw", () => {
	expect(() =>
		validator({
			name: "yamiteru",
			friend: {
				name: "myself",
			},
		}),
	).not.toThrow();
});

it("should throw", () => {
	expect(() =>
		validator({
			name: "yamiteru",
			friend: 1,
		}),
	).toThrow();
});
