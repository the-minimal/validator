import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error";

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
	Number.isInteger(v) || ValidationError(integer);
