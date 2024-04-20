import type { RangeLength } from "@assertions/rangeLength/types";
import { Reason } from "@constants";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if length of value is in the range of min and max.
 *
 * @param min - Minimal value.
 * @param max - Maximal value.
 *
 * @example
 * ```ts
 * const passwordLength = rangeLength(8, 16);
 *
 * passwordLength("hello"); // Error: rangeLength
 * passwordLength("aaaaaaaaaaaaaaaaaaaa"); // Error: rangeLength
 * passwordLength("Test123456"); // passes
 * ```
 */
export const rangeLength =
	<$Min extends number, $Max extends number>(
		min: $Min,
		max: $Max,
	): Assertion<RangeLength<$Min, $Max>> =>
	(v) =>
		((v as any).length >= min && (v as any).length <= max) ||
		error(Reason.rangeLength);
