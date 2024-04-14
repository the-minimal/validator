import type { Assertion, Optional } from "@types";
import { error } from "@utils/error";

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
