import type { Message } from "@assertions/expect/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

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
export const expect =
	<$Type>(assertion: Assertion<$Type>, message: Message): Assertion<$Type> =>
	(v) => {
		try {
			assertion(v);
		} catch (e: any) {
			throw Error(message(e, v));
		}
	};
