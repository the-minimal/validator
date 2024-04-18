import { lazy } from "@assertions/lazy";
import { object } from "@assertions/object";
import { optional } from "@assertions/optional";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
import { expect, test } from "vitest";

type User = {
	name: string;
	friend?: User;
};

const assertion: Assertion<User> = object({
	name: string,
	friend: optional(lazy(() => assertion)),
});

test(() => {
	expect(() =>
		assertion({
			name: "yamiteru",
			friend: {
				name: "myself",
			},
		}),
	).not.toThrow();

	expect(() =>
		assertion({
			name: "yamiteru",
			friend: 1,
		}),
	).toThrow();
});
