import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Assertion, Nullable } from "@the-minimal/types";

export const nullable = <$Value>(
	assertion: Assertion<$Value>,
): Assertion<Nullable<$Value>> => {
	return (value: unknown) => {
		try {
			assertion(value);
		} catch {
			value !== null && error(`${ERROR_PREFIX}:nullable`, value);
		}
	};
};
