import { error } from "@error";
import type { Validate } from "./types";

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
export const regex = (pattern: RegExp) =>
	((v: string) =>
		pattern.test(v) || error(regex)) as unknown as Validate.Regex.Any;
