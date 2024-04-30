import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error";

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
export const length =
	(input: number): Assertion<unknown> =>
	(v: unknown) =>
		(v as any).length === input || ValidationError(length);
