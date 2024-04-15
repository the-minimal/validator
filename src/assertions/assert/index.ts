import type { Assertion } from "@types";
import { error } from "@utils/error";

export const assert =
	(
		fn: (value: unknown) => boolean,
		reason: string,
		props?: unknown,
	): Assertion =>
	(value: unknown) => {
		!fn(value) && error(reason, value, props);
	};
