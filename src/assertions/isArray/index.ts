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
export const isArray: Assertion<unknown[]> = (v: unknown) =>
	Array.isArray(v) || error(isArray);
