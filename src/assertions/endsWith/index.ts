import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value ends with `searchString`.
 *
 * @param input - The characters to be searched for at the end of value.
 *
 * @throws `endsWith` if value does not end with `searchString`.
 *
 * @example
 * ```ts
 * const question = endsWith("?");
 *
 * question("hey!");    // Error: endsWith
 * question("really?"); // passes
 * ```
 */
export const endsWith =
	<$Input extends string>(input: $Input): Assertion<unknown> =>
	(v: unknown) =>
		(v as any).endsWith(input) || error(endsWith);
