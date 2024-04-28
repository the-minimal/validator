import { error } from "@error";
import type { Validate } from "./types";

/**
 * Checks if length of value is not equal to the provided length.
 *
 * @param length - Length used in the comparison.
 *
 * @example
 * ```ts
 * const twoLetters = length(2);
 *
 * twoLetters(""); // Error: length
 * twoLetters("ab"); // passes
 * ```
 */
export const notLength = <$Input extends number>(length: $Input) =>
	((v: any) =>
		v.length !== length ||
		error(notLength)) as unknown as Validate.Length.Ne<$Input>;
