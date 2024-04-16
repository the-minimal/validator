import type { Validation } from "@the-minimal/types";
import type {
	FakeValidation,
	InferValidationValues,
	Intersection,
} from "@types";

export const and = <$Validations extends Array<Validation<unknown>>>(
	fns: $Validations,
) => {
	const length = fns.length;

	return ((value) => {
		for (let i = 0; i < length; ++i) {
			(fns[i] as FakeValidation)(value);
		}
	}) as Validation<Intersection<InferValidationValues<$Validations>>>;
};
