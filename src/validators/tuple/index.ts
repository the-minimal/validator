import type { Validation } from "@the-minimal/types";
import type { FakeValidation, InferValidationValues } from "@types";
import { isArray } from "@validators/isArray";
import { length } from "@validators/length";

export const tuple = <$Tuple extends Array<Validation<unknown>>>(
	tuple: $Tuple,
) => {
	const l = tuple.length;
	const tupleLength = length(l);

	return ((value) => {
		isArray(value);
		tupleLength(value);

		for (let i = 0; i < l; ++i) {
			(tuple[i] as FakeValidation)((value as unknown[])[i]);
		}
	}) as Validation<InferValidationValues<$Tuple>>;
};
