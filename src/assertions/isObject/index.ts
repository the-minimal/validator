import type { ObjectUnknown } from "@assertions/isObject/types";
import { Reason } from "@constants";
import { error } from "@error";
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
export const isObject: Assertion<ObjectUnknown> = (v) =>
	(v !== null && typeof v === "object") || error(Reason.isObject);
