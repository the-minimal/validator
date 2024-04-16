import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Nullable, Validation } from "@the-minimal/types";

export const nullable = <$Value>(validation: Validation<$Value>) =>
	((value: unknown) => {
		try {
			validation(value);
		} catch {
			value !== null && error(`${ERROR_PREFIX}:nullable`, value);
		}
	}) as Validation<Nullable<$Value>>;
