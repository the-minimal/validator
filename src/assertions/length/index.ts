import type { Length } from "@assertions/length/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if length of value is equal to the provided length.
 *
 * @param value - Length used in the comparison.
 *
 * @example
 * ```ts
 * const nonEmpty = notLength(0);
 *
 * nonEmpty(""); // Error: notLength
 * nonEmpty("hello"); // passes
 * ```
 */
export const length =
	<$Value extends number>(value: $Value): Assertion<Length<$Value>> =>
	(v: any) =>
		v.length === value || error(length);
