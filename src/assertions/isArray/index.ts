import { validate } from "@assertions/validate";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that the value is an array.
 *
 * @example
 * ```ts
 * isArray(1); // Error: isArray
 * isArray([]); // passes
 * ```
 */
export const isArray: Assertion<Array<unknown>> = validate<Array<unknown>>(
	Array.isArray,
	"isArray",
);
