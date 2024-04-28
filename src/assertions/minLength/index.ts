import { error } from "@error";
import type { Validate } from "./types";

/**
 * Checks if length of value is greater than or equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const passwordMinLength = minLength(8);
 *
 * passwordMinLength("hello"); // Error: minLength
 * passwordMinLength("Test123456"); // passes
 * ```
 */
export const minLength = <$Input extends number>(length: $Input) =>
	((v: any) =>
		v.length >= length ||
		error(minLength)) as unknown as Validate.Length.Min<$Input>;
