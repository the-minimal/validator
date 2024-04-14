import { error } from "../error";
import type { Assertion, Nullable } from "../types";

export const nullable = <$Value>(
	assertion: Assertion<$Value>,
): Assertion<Nullable<$Value>> => {
	return (value: unknown) => {
		try {
			assertion(value);
		} catch {
			value !== null && error("Not null");
		}
	};
};
