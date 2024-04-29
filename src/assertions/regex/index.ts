import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value matches regex pattern.
 *
 * @param pattern - Pattern used for matching.
 *
 * @example
 * ```ts
 * const digits = regex(/[0-9]/);
 *
 * email("hello"); // Error: regex
 * email("123"); // passes
 * ```
 */
export const regex =
	(pattern: RegExp): Assertion<unknown> =>
	(v: unknown) =>
		pattern.test(v as string) || error(regex);
