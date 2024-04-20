import type { MinValue } from "@assertions/minValue/types";
import { Reason } from "@constants";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is greater than or equal to the provided length.
 *
 * @param value - Value used in the comparison.
 *
 * @example
 * ```ts
 * const adultAge = minValue(18);
 *
 * adultAge(15); // Error: minValue
 * adultAge(26); // passes
 * ```
 */
export const minValue =
	<$Type>(value: $Type): Assertion<MinValue<$Type>> =>
	(v) =>
		(v as any) >= value || error(Reason.minValue);
