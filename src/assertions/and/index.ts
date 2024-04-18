import type { AndSchema, InferAndSchema } from "@assertions/and/types";
import type { Assertion } from "@the-minimal/types";

export const and = <
	const $Schema extends AndSchema,
	$Infered = InferAndSchema<$Schema>,
>(
	asserts: $Schema,
) => {
	const length = asserts.length;

	return ((value) => {
		for (let i = 0; i < length; ++i) {
			(asserts[i] as any)(value);
		}
	}) as Assertion<$Infered>;
};
