import { error } from "@error";
import type { Validate } from "./types";

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
export const rangeLength = <$Min extends number, $Max extends number>(
	min: $Min,
	max: $Max,
) =>
	((v: any) =>
		(v.length >= min && v.length <= max) ||
		error(rangeLength)) as unknown as Validate.Length.Range<$Min, $Max>;
