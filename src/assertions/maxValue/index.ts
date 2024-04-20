import type { MaxValue } from "@assertions/maxValue/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is less than or equal to the provided length.
 *
 * @param value - Value used in the comparison.
 *
 * @example
 * ```ts
 * const teenagerAge = maxValue(17);
 *
 * teenagerAge(26); // Error: maxValue
 * teenagerAge(15); // passes
 * ```
 */
export const maxValue =
	<$Type>(value: $Type): Assertion<MaxValue<$Type>> =>
	(v) =>
		(v as any) <= value || error("maxValue", v, value);
