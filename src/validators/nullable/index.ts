import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Assertion, Nullable } from "@the-minimal/types";

export const nullable = <$Value>(validation: Assertion<$Value>) =>
	((value: unknown) => {
		try {
			validation(value);
		} catch {
			value !== null && error(`${ERROR_PREFIX}:nullable`, value);
		}
	}) as Assertion<Nullable<$Value>>;
