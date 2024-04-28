import { isObject } from "@assertions/isObject";
import type { General, ObjectSchema } from "@assertions/object/types";

/**
 * Checks that assertion passes for each key/value of the object.
 *
 * @param schema - Object schema to be checked.
 *
 * @example
 * ```ts
 * const user = object({
 *    name: string,
 *    age: number,
 * });
 *
 * user(1); // Error: type
 * user(null); // Error: isObject
 * user({
 *    name: 1,
 *    age: "23",
 * }); // Error: type
 * user({
 *    name: "yamiteru",
 *    age: 23,
 * }); // passes
 * ```
 */
export const object = <$Schema extends ObjectSchema>(schema: $Schema) => {
	const keys = Object.keys(schema);

	return ((v: unknown) => {
		isObject(v);

		for (let i = 0; i < keys.length; ++i) {
			(schema[keys[i]] as any)(v[keys[i] as any]);
		}
	}) as unknown as General.Object<$Schema>;
};
