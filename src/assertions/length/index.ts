import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if length of value is equal to the provided length.
 *
 * @param length - Length used in the comparison.
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
	(length: number): Assertion<{ length: number }> =>
	(v) =>
		(v as any).length === length || error("length", v, length);
