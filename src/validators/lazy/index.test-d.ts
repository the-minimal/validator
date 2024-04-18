import type { Assertion } from "@the-minimal/types";
import { lazy } from "@validators/lazy/index";
import { object } from "@validators/object";
import { optional } from "@validators/optional";
import { string } from "@validators/string";
import { assertType } from "vitest";

type User = {
	name: string;
	friend?: User;
};

const user: Assertion<User> = object({
	name: string,
	friend: optional(lazy(() => user)),
});

assertType<Assertion<User>>(user);
