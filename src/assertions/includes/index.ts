import type { Validate } from "@assertions/includes/types";
import { error } from "@error";

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
export const includes = <const $Input>(input: $Input) =>
	((v: any) =>
		v.includes(input) ||
		error(includes)) as unknown as Validate.List.Includes<$Input>;
