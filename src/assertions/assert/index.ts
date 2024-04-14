import type { Assertion } from "@types";
import { error } from "@utils/error";

export const assert =
	(
		fn: (value: unknown) => boolean,
		message: (value: unknown) => string,
	): Assertion =>
	(value: unknown) => {
		!fn(value) && error(message(value));
	};
