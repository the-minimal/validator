import type { NotValue } from "@assertions/notValue/types";
import { Reason } from "@constants";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is not equal to the provided value.
 *
 * @param value - Value used in the comparison.
 *
 * @example
 * ```ts
 * const notNan = notValue(NaN);
 *
 * notNan(NaN); // Error: notValue
 * notNan(123); // passes
 * ```
 */
export const notValue =
	<$Type>(value: $Type): Assertion<NotValue<$Type>> =>
	(v) =>
		v !== value || error(Reason.notValue);
