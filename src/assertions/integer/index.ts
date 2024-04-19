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
export const integer: Assertion<number> = (v) =>
	Number.isInteger(v) || error("isInteger", v);
