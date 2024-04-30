import type { Assertion } from "@the-minimal/types";

/**
 * Checks if assertion is valid and returns value with type inferred from the assertion.
 *
 * @param assertion - Assertion to be checked.
 * @param value - Value to be passed into assertion.
 *
 * @example
 * ```ts
 * parse(number, 1); // 1
 * parse(number, "nope"); // Error: number
 * ```
 */
export function parse<$Value>(assertion: Assertion<$Value>, value: unknown) {
	(assertion as any)(value);

	return value as $Value;
}
