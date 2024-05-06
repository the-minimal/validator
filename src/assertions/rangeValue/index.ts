import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error/index.js";

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
	<$Min, $Max extends $Min>(min: $Min, max: $Max): Assertion<unknown> =>
	(v: unknown) =>
		(<any>v >= <any>min && <any>v <= <any>max) || ValidationError(rangeValue);
