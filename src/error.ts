import { ERROR_PREFIX } from "@constants";
import {
	type Context,
	type Message,
	type Value,
	error as minimal_error,
} from "@the-minimal/error";

export const error = (
	reason: string,
	value?: Value,
	context?: Context,
	message?: Message,
) => minimal_error(`${ERROR_PREFIX}:${reason}`, value, context, message);
