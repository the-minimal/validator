import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value includes with another value.
 *
 * @param input - Value used in matching.
 *
 * @example
 * ```ts
 * const hello = includes("hello");
 *
 * hello("ahoj"); // Error: includes
 * hello("--hello--"); // passes
 * ```
 */
export const includes =
	(input: unknown): Assertion<unknown> =>
	(v: unknown) =>
		(v as any).includes(input) || error(includes);
