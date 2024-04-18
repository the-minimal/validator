import type { Message } from "@assertions/expect/types";
import { error, isError } from "@the-minimal/error";
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
	(value: unknown) => {
		try {
			assertion(value);
		} catch (e) {
			const msg = message(e, value);

			if (e instanceof Error) {
				error(`unknown:${e.name}`, value, e.stack, msg);
			} else if (isError(e)) {
				error((e as any).reason, value, (e as any).context, msg);
			} else {
				error("unknown:unknown", value, e, msg);
			}
		}
	};
