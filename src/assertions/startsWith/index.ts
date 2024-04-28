import type { Validate } from "@assertions/startsWith/types";
import { error } from "@error";

/**
 * Checks if value starts with `searchString`.
 *
 * @param searchString - The characters to be searched for at the start of value.
 *
 * @throws `startsWith` if value does not start with `searchString`.
 *
 * @example
 * ```ts
 * const startsWithId = startsWith("ID: ");
 *
 * startsWithId("123");     // Error: startsWith
 * startsWithId("ID: 123"); // passes
 * ```
 */
export const startsWith = <$SearchString extends string>(
	searchString: $SearchString,
) =>
	((v: any) =>
		v.startsWith(searchString) ||
		error(startsWith)) as unknown as Validate.String.StartsWith<$SearchString>;
