import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error";

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
	(length: number): Assertion<unknown> =>
	(v: unknown) =>
		(v as any).length >= length || ValidationError(minLength);
