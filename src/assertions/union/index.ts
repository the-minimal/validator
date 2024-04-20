import { REASON_UNION } from "@constants";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if the value is one of the provided options.
 *
 * @param options - Options to be validated against.
 *
 * @example
 * ```ts
 * const userRole = union(["admin", "user"]);
 *
 * userRole("super-admin"); // Error: union
 * userRole("admin"); // passes
 * userRole("user"); // passes
 * ```
 */
export const union =
	<const $Options extends unknown[]>(
		options: $Options,
	): Assertion<$Options[number]> =>
	(v) =>
		options.includes(v) || error(REASON_UNION);
