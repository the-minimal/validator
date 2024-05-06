import type { UnknownAssertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error/index.js";

/**
 * Wraps assertion and throws an error with message if assertion fails.
 *
 * @param assertion - Assertion to be checked.
 * @param message - Message to be used in error.
 *
 * @example
 * ```ts
 * const stringWithMessage = expect(
 *    string,
 *    (_, v) => `Expected string, got ${typeof v}`
 * );
 * ```
 */
export const expect = <$Assertion extends UnknownAssertion>(
	assertion: $Assertion,
	message: (error: any, value: unknown) => string,
) =>
	((v: unknown) => {
		try {
			assertion(v);
		} catch (e) {
			ValidationError(assertion, message(e, v));
		}
	}) as $Assertion;
