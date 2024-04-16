import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Validation } from "@the-minimal/types";
import type { FakeValidation, InferValidationValues } from "@types";

export const or = <$Validations extends Array<Validation<unknown>>>(
	fns: $Validations,
) => {
	const length = fns.length;

	return ((value) => {
		for (let i = 0; i < length; ++i) {
			try {
				(fns[i] as FakeValidation)(value);
				return;
			} catch {}
		}

		error(`${ERROR_PREFIX}:or`, value);
	}) as Validation<InferValidationValues<$Validations>[number]>;
};
