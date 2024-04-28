import { error } from "@error";
import type { Validate } from "./types";

/**
 * Checks if length of value is equal to the provided length.
 *
 * @param input - Length used in the comparison.
 *
 * @example
 * ```ts
 * const nonEmpty = notLength(0);
 *
 * nonEmpty(""); // Error: notLength
 * nonEmpty("hello"); // passes
 * ```
 */
export const length = <$Input extends number>(input: $Input) =>
	((v: any) =>
		v.length === input ||
		error(length)) as unknown as Validate.Length.Eq<$Input>;
