import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is in the range of min and max.
 *
 * @param min - Minimal value.
 * @param max - Maximal value.
 *
 * @example
 * ```ts
 * const alive = rangeValue(0, 150);
 *
 * alive(-10); // Error: rangeValue
 * alive(450); // Error: rangeValue
 * alive(26); // passes
 * ```
 */
export const rangeValue =
	<$Type>(min: $Type, max: $Type): Assertion<$Type> =>
	(v) =>
		((v as any) >= min && (v as any) <= max) ||
		error("rangeValue", v, { min, max });
