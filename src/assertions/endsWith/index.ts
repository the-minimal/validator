import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value ends with another value.
 *
 * @param value - Value used in matching.
 *
 * @example
 * ```ts
 * const question = endsWith("?");
 *
 * question("hey!"); // Error: endsWith
 * question("really?"); // passes
 * ```
 */
export const endsWith =
	(value: string): Assertion<string> =>
	(v) =>
		(v as any).endsWith(value) || error("endsWith", v, value);
