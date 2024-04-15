import { isObject } from "@assertions/isObject";
import type { Assertion } from "@the-minimal/types";
import type { FakeAssertion, InferSchema, Schema } from "@types";

export const object = <$Schema extends Schema>(
	schema: $Schema,
): Assertion<InferSchema<$Schema>> => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return (value) => {
		isObject(value);

		for (let i = 0; i < length; ++i) {
			(schema as Record<string, FakeAssertion>)[keys[i]](value[keys[i] as any]);
		}
	};
};
