import type { Validation } from "@the-minimal/types";
import type { Infer, UnknownValidation } from "@types";
import { isArray } from "@validators/isArray";
import { length } from "@validators/length";

export const tuple = <
	const $Tuple extends Array<UnknownValidation>,
	$Infered = Infer<$Tuple>,
>(
	tuple: $Tuple,
) => {
	const l = tuple.length;
	const tupleLength = length(l);

	return ((value) => {
		isArray(value);
		tupleLength(value);

		for (let i = 0; i < l; ++i) {
			(tuple[i] as UnknownValidation)((value as unknown[])[i]);
		}
	}) as Validation<$Infered extends Array<unknown> ? $Infered[number] : never>;
};
