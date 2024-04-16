import type { Validation } from "@the-minimal/types";
import type { UnknownValidation } from "@types";
import type { Intersection } from "@validators/and/types";

export const and = <
	const $Validations extends Array<UnknownValidation>,
	$Infered = Intersection<$Validations>,
>(
	fns: $Validations,
) => {
	const length = fns.length;

	return ((value) => {
		for (let i = 0; i < length; ++i) {
			(fns[i] as UnknownValidation)(value);
		}
	}) as Validation<$Infered>;
};
