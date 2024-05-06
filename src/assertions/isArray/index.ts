import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error/index.js";

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
	Array.isArray(v) || ValidationError(isArray);
