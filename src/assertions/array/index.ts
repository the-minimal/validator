import { isArray } from "@assertions/isArray";
import type { Assertion } from "@types";
import { error } from "@utils/error";

export const array =
	<$Value>(fn: Assertion<$Value>): Assertion<Array<$Value>> =>
	(value) => {
		isArray(value);

		for (let i = 0; i < (value as unknown[]).length; ++i) {
			fn(value[i]);
		}
	};
