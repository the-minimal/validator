import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Optional, Validation } from "@the-minimal/types";

export const optional = <$Value>(validation: Validation<$Value>) =>
	((value) => {
		try {
			validation(value);
		} catch {
			value !== undefined && error(`${ERROR_PREFIX}:optional`, value);
		}
	}) as Validation<Optional<$Value>>;
