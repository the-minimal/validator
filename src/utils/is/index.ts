/**
 * Returns true if assertion passes and false if it throws.
 *
 * @param assertion - Assertion to be checked.
 * @param value - Value to be passed into assertion.
 *
 * @example
 * ```ts
 * is(number, 1); // true
 * is(number, "nope"); // false
 * ```
 */
export function is<$Value>(assertion: $Value, value: unknown): value is $Value {
	try {
		(assertion as any)(value);

		return true;
	} catch {
		return false;
	}
}
