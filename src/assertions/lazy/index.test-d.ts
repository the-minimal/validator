import { lazy } from "@assertions/lazy/index";
import { object } from "@assertions/object";
import { optional } from "@assertions/optional";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
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
