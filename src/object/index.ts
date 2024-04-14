import { assert } from "../assert";
import { error } from "../error";
import type { Assertion, FakeAssertion, InferSchema, Schema } from "../types";

export const object = <$Schema extends Schema>(
	schema: $Schema,
): Assertion<InferSchema<$Schema>> => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return (value) => {
		(value === null || typeof value !== "object") && error("Not an object");

		for (let i = 0; i < length; ++i) {
			(schema as Record<string, FakeAssertion>)[keys[i]](value[keys[i]]);
		}
	};
};
