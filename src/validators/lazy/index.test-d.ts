import type { Validation } from "@the-minimal/types";
import { lazy } from "@validators/lazy/index";
import { object } from "@validators/object";
import { optional } from "@validators/optional";
import { string } from "@validators/string";
import { assertType } from "vitest";

type User = {
	name: string;
	friend?: User;
};

const user: Validation<User> = object({
	name: string,
	friend: optional(lazy(() => user)),
});

assertType<Validation<User>>(user);
