import { error } from "@error";
import type { Context, Message } from "@the-minimal/error";
import type { Assertion, Predicate } from "@the-minimal/types";

/**
 * Checks that the predicate passes for the value and if not throws an error.
 *
 * @param predicate - Predicate to be checked.
 * @param reason - Reason for error.
 * @param context - Context for error.
 * @param message - Message for error.
 *
 * @example
 * ```ts
 * const number = validate<number>((v) => typeof v === "number", "number");
 *
 * number("1"); // Error: number
 * number(1); // passes
 * ```
 */
export const validate =
	<$Type>(
		predicate: Predicate,
		reason: string,
		context: Context = null,
		message: Message = null,
	): Assertion<$Type> =>
	(value: unknown) => {
		!predicate(value) && error(reason, value, context, message);
	};
