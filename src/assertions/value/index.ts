import type { Value } from "@assertions/value/types";
import { Reason } from "@constants";
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
	<$Type>(value: $Type): Assertion<Value<$Type>> =>
	(v) =>
		v === value || error(Reason.value);
