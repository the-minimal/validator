import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value is integer.
 *
 * @example
 * ```ts
 * integer(1.1) // Error: integer
 * integer(1) // passes
 * ```
 */
export const integer: Assertion<unknown> = (v: unknown) =>
	Number.isInteger(v) || error(integer);
