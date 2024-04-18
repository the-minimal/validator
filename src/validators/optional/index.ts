import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Assertion, Optional } from "@the-minimal/types";

export const optional = <$Value>(validation: Assertion<$Value>) =>
	((value) => {
		try {
			validation(value);
		} catch {
			value !== undefined && error(`${ERROR_PREFIX}:optional`, value);
		}
	}) as Assertion<Optional<$Value>>;
