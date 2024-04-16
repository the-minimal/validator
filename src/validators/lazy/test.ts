import type { Validation } from "@the-minimal/types";
import { lazy } from "@validators/lazy";
import { object } from "@validators/object";
import { optional } from "@validators/optional";
import { string } from "@validators/string";
import { expect, it } from "vitest";

type User = {
	name: string;
	friend?: User;
};

const validator: Validation<User> = object({
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
