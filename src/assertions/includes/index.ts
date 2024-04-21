import type { Includes } from "@assertions/includes/types";
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
	<$Input>(input: $Input): Assertion<Includes<$Input>> =>
	(v: any) =>
		v.includes(input) || error(includes);
