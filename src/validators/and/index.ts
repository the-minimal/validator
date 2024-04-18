import type { Assertion } from "@the-minimal/types";
import type { UnknownAssertion } from "@the-minimal/types";
import type { AndSchema, InferAndSchema } from "@validators/and/types";

export const and = <
	const $Validations extends AndSchema,
	$Infered = InferAndSchema<$Validations>,
>(
	fns: $Validations,
) => {
	const length = fns.length;

	return ((value) => {
		for (let i = 0; i < length; ++i) {
			(fns[i] as any)(value);
		}
	}) as Assertion<$Infered>;
};
