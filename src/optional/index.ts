import { error } from "../error";
import type { Assertion, Optional } from "../types";

export const optional = <$Value>(
	assertion: Assertion<$Value>,
): Assertion<Optional<$Value>> => {
	return (value) => {
		try {
			assertion(value);
		} catch {
			value !== undefined && error("Not undefined");
		}
	};
};
