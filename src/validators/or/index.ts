import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Validation } from "@the-minimal/types";
import type { Infer, UnknownValidation } from "@types";

export const or = <
	const $Validations extends Array<UnknownValidation>,
	$Infered = Infer<$Validations>,
>(
	fns: $Validations,
) => {
	const length = fns.length;

	return ((value) => {
		for (let i = 0; i < length; ++i) {
			try {
				(fns[i] as UnknownValidation)(value);
				return;
			} catch {}
		}

		error(`${ERROR_PREFIX}:or`, value);
	}) as Validation<$Infered>;
};
