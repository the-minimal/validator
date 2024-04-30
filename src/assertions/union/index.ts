import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error";

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
	(v: unknown) =>
		options.includes(v) || ValidationError(union);
