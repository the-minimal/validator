import { error } from "./error";
import type { Assertion, Optional } from "./types";

export const optional = <$Value>(assertion: Assertion<$Value>) => {
	return function (value: unknown): asserts value is Optional<$Value> {
		try {
			assertion(value);
		} catch {
			value !== undefined && error("Not undefined");
		}
	};
};
