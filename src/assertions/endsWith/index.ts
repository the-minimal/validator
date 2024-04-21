import type { EndsWith } from "@assertions/endsWith/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if value ends with `searchString`.
 *
 * @param searchString - The characters to be searched for at the end of value.
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
	<$SearchString extends string>(
		searchString: $SearchString,
	): Assertion<EndsWith<$SearchString>> =>
	(v: any) =>
		v.endsWith(searchString) || error(endsWith);
