import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Assertion } from "@the-minimal/types";
import type { InferOrSchema, OrSchema } from "@validators/or/types";

export const or = <
	const $Validations extends OrSchema,
	$Infered = InferOrSchema<$Validations>,
>(
	fns: $Validations,
) => {
	const length = fns.length;

	return ((value) => {
		for (let i = 0; i < length; ++i) {
			try {
				(fns[i] as any)(value);
				return;
			} catch {}
		}

		error(`${ERROR_PREFIX}:or`, value);
	}) as Assertion<$Infered>;
};
