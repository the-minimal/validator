import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is equal to the provided value.
 *
 * @param value - Value used in the comparison.
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
	<$Type>(value: $Type): Assertion<$Type> =>
	(v) =>
		v === value || error("value", v, value);
