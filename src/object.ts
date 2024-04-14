import { InferSchema, Schema } from "./types";
import { error } from "./error";

export const object = <$Schema extends Schema>(schema: $Schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return function(value: unknown): asserts value is InferSchema<$Schema> {
		value === null || typeof value !== "object" && error("Not an object");

		for(let i = 0; i < length; ++i) {
			(schema as any)[keys[i]](value[keys[i]]);
		}
	};
};
