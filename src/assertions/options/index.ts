import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if the value is one of the provided options.
 *
 * @param options - Options to be validated against.
 *
 * @example
 * ```ts
 * const userRole = options(["admin", "user"]);
 *
 * userRole("super-admin"); // Error: options
 * userRole("admin"); // passes
 * userRole("user"); // passes
 * ```
 */
export const options =
	<const $Options extends unknown[]>(
		options: $Options,
	): Assertion<$Options[number]> =>
	(v) =>
		options.includes(v) || error("options", v, options);
