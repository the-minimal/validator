import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Assertion, Nullish } from "@the-minimal/types";

export const nullish = <$Value>(
	assertion: Assertion<$Value>,
): Assertion<Nullish<$Value>> => {
	return (value) => {
		try {
			assertion(value);
		} catch {
			value !== null &&
				value !== undefined &&
				error(`${ERROR_PREFIX}:nullish`, value);
		}
	};
};
