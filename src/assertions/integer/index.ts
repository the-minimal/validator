import type { Validate } from "@assertions/integer/types";
import { error } from "@error";

/**
 * Checks if value is integer.
 *
 * @example
 * ```ts
 * integer(1.1) // Error: integer
 * integer(1) // passes
 * ```
 */
export const integer = ((v: unknown) =>
	Number.isInteger(v) || error(integer)) as unknown as Validate.Number.Integer;
