import { error } from "../error";
import type { Assertion } from "../types";

export const array =
	<$Value>(fn: Assertion<$Value>): Assertion<Array<$Value>> =>
	(value) => {
		!Array.isArray(value) && error("Not an array");

		for (let i = 0; i < (value as unknown[]).length; ++i) {
			fn(value[i]);
		}
	};
