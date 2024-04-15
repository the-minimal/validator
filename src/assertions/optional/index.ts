import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Assertion, Optional } from "@the-minimal/types";

export const optional = <$Value>(
	assertion: Assertion<$Value>,
): Assertion<Optional<$Value>> => {
	return (value) => {
		try {
			assertion(value);
		} catch {
			value !== undefined && error(`${ERROR_PREFIX}:optional`, value);
		}
	};
};
