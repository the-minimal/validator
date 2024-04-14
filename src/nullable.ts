import { error } from "./error";
import type { Assertion, Nullable } from "./types";

export const nullable = <$Value>(assertion: Assertion<$Value>) => {
	return function (value: unknown): asserts value is Nullable<$Value> {
		try {
			assertion(value);
		} catch {
			value !== null && error("Not null");
		}
	};
};
