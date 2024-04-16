import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Nullish, Validation } from "@the-minimal/types";

export const nullish = <$Value>(validation: Validation<$Value>) =>
	((value) => {
		try {
			validation(value);
		} catch {
			value !== null &&
				value !== undefined &&
				error(`${ERROR_PREFIX}:nullish`, value);
		}
	}) as Validation<Nullish<$Value>>;
