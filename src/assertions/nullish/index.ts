import type { Assertion, Nullable, Nullish } from "@types";
import { error } from "@utils/error";

export const nullish = <$Value>(
	assertion: Assertion<$Value>,
): Assertion<Nullish<$Value>> => {
	return (value) => {
		try {
			assertion(value);
		} catch {
			value !== null && value !== undefined && error("Not nullish");
		}
	};
};
