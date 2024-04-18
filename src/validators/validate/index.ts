import { ERROR_PREFIX } from "@constants";
import type { Context, Message } from "@the-minimal/error";
import { error } from "@the-minimal/error";
import type { Assertion, Predicate } from "@the-minimal/types";

export const validate =
	<$Type>(
		fn: Predicate,
		reason: string,
		context: Context = null,
		message: Message = null,
	): Assertion<$Type> =>
	(value: unknown) => {
		!fn(value) && error(`${ERROR_PREFIX}:${reason}`, value, context, message);
	};
