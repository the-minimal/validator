import type { Validate } from "@assertions/rangeValue/types";
import { error } from "@error";

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
export const rangeValue = <const $Min, const $Max>(min: $Min, max: $Max) =>
	((v: any) =>
		(v >= min && v <= max) ||
		error(rangeValue)) as unknown as Validate.Value.Range<$Min, $Max>;
