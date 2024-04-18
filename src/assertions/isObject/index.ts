import type { ObjectUnknown } from "@assertions/isObject/types";
import { validate } from "@assertions/validate";
import type { Assertion } from "@the-minimal/types";

export const isObject: Assertion<ObjectUnknown> = validate<ObjectUnknown>(
	(v) => v !== null && typeof v === "object",
	"isObject",
);
