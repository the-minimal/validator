import type { ObjectUnknown } from "@assertions/isObject/types";
import { validate } from "@assertions/validate";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that the value is of type object and is not null.
 *
 * @example
 * ```ts
 * isObject(1); // Error: isObject
 * isObject(null); // Error: isObject
 * isObject({}); // passes
 * ```
 */
export const isObject: Assertion<ObjectUnknown> = validate<ObjectUnknown>(
	(v) => v !== null && typeof v === "object",
	"isObject",
);
