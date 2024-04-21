import type { MaxLength } from "@assertions/maxLength/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

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
	<$Input extends number>(length: $Input): Assertion<MaxLength<$Input>> =>
	(v: any) =>
		v.length <= length || error(maxLength);
