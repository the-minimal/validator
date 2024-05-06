import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error/index.js";

/**
 * Checks if value starts with `searchString`.
 *
 * @param input - The characters to be searched for at the start of value.
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
export const startsWith =
	(input: string): Assertion<unknown> =>
	(v: unknown) =>
		(v as string).startsWith(input) || ValidationError(startsWith);
