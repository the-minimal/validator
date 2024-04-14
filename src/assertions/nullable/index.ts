import type { Assertion, Nullable } from "@types";
import { error } from "@utils/error";

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
