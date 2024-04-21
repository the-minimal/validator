import type { MinLength } from "@assertions/minLength/types";
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
	<$Input extends number>(length: $Input): Assertion<MinLength<$Input>> =>
	(v: any) =>
		v.length >= length || error(minLength);
