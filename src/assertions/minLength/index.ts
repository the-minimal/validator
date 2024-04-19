import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if length of value is greater than or equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const passwordMinLength = minLength(8);
 *
 * passwordMinLength("hello"); // Error: minLength
 * passwordMinLength("Test123456"); // passes
 * ```
 */
export const minLength =
	(length: number): Assertion<{ length: number }> =>
	(v) =>
		(v as any).length >= length || error("minLength", v, length);