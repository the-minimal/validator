import { error } from "../error";
import type { Assertion } from "../types";

export const assert =
	(
		fn: (value: unknown) => boolean,
		message: (value: unknown) => string,
	): Assertion =>
	(value: unknown) => {
		!fn(value) && error(message(value));
	};
