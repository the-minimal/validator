import { ERROR_PREFIX } from "@constants";
import { error } from "@error";
import type { Assertion, Nullish } from "@the-minimal/types";

export const nullish = <$Value>(validation: Assertion<$Value>) =>
	((value) => {
		try {
			validation(value);
		} catch {
			value !== null &&
				value !== undefined &&
				error(`${ERROR_PREFIX}:nullish`, value);
		}
	}) as Assertion<Nullish<$Value>>;
