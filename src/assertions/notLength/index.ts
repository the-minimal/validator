import type { NotLength } from "@assertions/notLength/types";
import { REASON_NOT_LENGTH } from "@constants";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if length of value is not equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const twoLetters = length(2);
 *
 * twoLetters(""); // Error: length
 * twoLetters("ab"); // passes
 * ```
 */
export const notLength =
	<$Value extends number>(length: $Value): Assertion<NotLength<$Value>> =>
	(v: any) =>
		v.length !== length || error(REASON_NOT_LENGTH);
