import type { Validation } from "@the-minimal/types";
import { lazy } from "@validators/lazy";
import { object } from "@validators/object";
import { optional } from "@validators/optional";
import { string } from "@validators/string";
import { expect, it, test } from "vitest";

type User = {
	name: string;
	friend?: User;
};

const validator: Validation<User> = object({
	name: string,
	friend: optional(lazy(() => validator)),
});

test(() => {
	expect(() =>
		validator({
			name: "yamiteru",
			friend: {
				name: "myself",
			},
		}),
	).not.toThrow();

	expect(() =>
		validator({
			name: "yamiteru",
			friend: 1,
		}),
	).toThrow();
});
