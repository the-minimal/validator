import type { Value } from "@assertions/value/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is equal to the provided value.
 *
 * @param val - Value used in the comparison.
 *
 * @example
 * ```ts
 * const isNull = value(null);
 *
 * isNull(""); // Error: value
 * isNull(null); // passes
 * ```
 */
export const value =
	<$Value>(val: $Value): Assertion<Value<$Value>> =>
	(v) =>
		v === val || error(value);
