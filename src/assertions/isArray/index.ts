import { Reason } from "@constants";
import { error } from "@error";
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
export const isArray: Assertion<Array<unknown>> = (v) =>
	Array.isArray(v) || error(Reason.isArray);
