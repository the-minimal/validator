import { error } from "./error";
import type { Assertion } from "./types";

export const array = <$Value>(fn: Assertion<$Value>) => {
	return (value: unknown): asserts value is Array<$Value> => {
		!Array.isArray(value) && error("Not an array");

		for (let i = 0; i < (value as unknown[]).length; ++i) {
			fn(value[i]);
		}
	};
};
