import { error } from "@error";
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

		error("or", value);
	}) as Assertion<$Infered>;
};
