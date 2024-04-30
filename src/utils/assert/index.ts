import type { Assertion } from "@the-minimal/types";

/**
 * Asserts that value is value of assertion.
 *
 * @param assertion - Assertion to be checked.
 * @param value - Value to be passed into assertion.
 *
 * @example
 * ```ts
 * assert(number, value); // asserts value is number
 * ```
 */
export function assert<$Value>(
	assertion: Assertion<$Value>,
	value: unknown,
): asserts value is $Value {
	(assertion as any)(value);
}
