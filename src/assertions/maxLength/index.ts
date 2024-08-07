import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error/index.js";

/**
 * Checks if length of value is less than or equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const passwordMaxLength = maxLength(16);
 *
 * passwordMaxLength("aaaaaaaaaaaaaaaaa"); // Error: maxLength
 * passwordMaxLength("Test123456"); // passes
 * ```
 */
export const maxLength =
	(length: number): Assertion<unknown> =>
	(v: unknown) =>
		(v as any).length <= length || ValidationError(maxLength);
